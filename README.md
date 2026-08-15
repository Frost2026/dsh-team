# dsh-team — DeepSeek Harness 的 Agent Team

给 dsh 加一支可以指挥的团队：主会话作为 **leader**，可以派生若干**常驻队友（teammate）**，队友有自己的会话、记忆与工具；成员之间通过**邮箱**互发消息（消息成为收件人的下一个 turn），共享一份**任务列表**；会话视图环里多出一个 **Agent 团队**页签，把花名册、协作关系与消息流画成一张实时的协作台。设计理念参考 Claude Code 的 agent team（共享任务列表 + 邮箱直连 + 成员自协调），实现完全走 dsh 的能力缝。

整个能力是**一个包、一行装配**：宿主半边（`dsh-team`）与浏览器半边（`dsh-team/client`）从同一个 `package.json` 构建。

## 0.2 重写要点

| 旧实现的问题 | 现在 |
|---|---|
| 拆成 6 个包（服务 / provider / 两个工具包 / UI / bundle），跨包只为一条能力 | **一个包**：`ctx.team` 服务 + 工具 + 队友作用域 + 投影 + 浏览器协作台 |
| 队友用 `ctx.agents.create()` 自建会话 → 会话树里多出一堆条目 | 队友是 **`ctx.subagents` 的 continuable 子代**，会话头被打上 `origin: 'subagent'`，工作区会话树按此过滤（`tree.ts` 的 `sessionVisible`），**不再出现在会话树里** |
| 团队状态折叠两遍（宿主一份、浏览器会话视图一份），两边容易走偏 | **只折叠一次**：宿主的 `team` session projection，框架把值推给浏览器，客户端零折叠 |
| 队友生命周期、冷恢复、驻留、中断全部自己实现 | 全部交给 subagent 缝：重启后**冷恢复**、活动驻留、`interrupt`、结算通知都是现成的 |
| 工具注册在全局，普通 subagent 也能看到用不了的团队工具 | leader 工具注册在**该会话自己的 agent scope**，队友工具注册在**该子代的 scope**，谁都不会看到自己用不了的工具 |

## 设计

### 队友 = continuable subagent

队友必须有会话（要记忆、要日志、要能恢复），所以问题不是"别建会话"，而是"**别建一个普通会话**"。`ctx.subagents.startContinuable()` 建的子代天然满足：

- `childSessionMeta` 打上 `origin: 'subagent'` → 会话树不展示，也不参与通用 Host 路由；
- durable child id + descriptor 由缝持有 → dsh 重启后队友**冷恢复**，团队不丢；
- 队友的 transcript 仍可读：内置的 subagent 目录里它们是 `continuable` 子代，标签是 `名字 (角色)`，协作台点一个节点就打开。

本插件在这之上只补三样 subagent 缝故意不提供的东西：**具名成员**、**成员之间的投递**、**一份共享任务列表**。

### 投递权威永远是 leader 的

`ctx.subagents.followup()` 只认 durable 直接父级的权威，而 leader 正是每个队友的直接父级。所以 peer↔peer 消息也是"由 leader 权威执行、消息源里写明真实发送者"的一次投递：

- `relation` 决定**谁可以要求**投递（`managed` 只能发给 leader，`peer` 可以直接发给任何成员），
- 从不决定**谁来执行**投递（永远是 leader 权威）。

消息落到收件人自己的日志里，source 是 `{ kind: 'team-message', form: 'relay', senderSessionId, senderName, chainId, hop }`——发送者归属与会话深度都随持久化一起留存。

### 队友之间不会聊到天荒地老

`team_send` 把消息变成对方的下一个 turn——两个 peer 互相礼貌回复就能永远转下去，而这一切**不在用户的主对话里**，没人踩刹车。所以投递带**会话预算**，是机械约束而不是提示词祈祷：

- **一次对话（chain）**：leader 每发一条消息就开一条新链（`hop = 0`）；队友发消息时**继承它当前正在处理的那条投递**的链，`hop + 1`。所以"leader 交办 → A 问 B → B 答 A"是同一次对话，而不是三条互不相干的消息。
- **深度上限**（`maxChainHops`，默认 4）：一次对话在队友之间最多转这么多手，超了 `team_send` 直接拒绝。
- **同一有序对不许来回磨**（`maxChainRoundTrips`，默认 2）：一条链里 A→B 最多这么多条。
- **一字不差的重发直接拒**：同一条链里同一有序对重复同样的内容，对收件人不产生任何新信息。
- **出口永远开着**：以上三条**只管队友→队友**。发给 leader 从不拒绝。所以预算不会把"有话要说"的成员困住，它只是把话逼回收敛点——拒绝语本身就是"settle it yourself and report to the leader"。
- **为什么 leader 那一侧不设限**：leader 的每个 turn 都在用户看得见、能中断的主对话里，链走到 leader 就已经收敛了。真正危险的是**看不见的**横向循环。
- **深度是持久事实**：`hop` 写进投递的 `team-message` 源里，跟着收件人的日志一起存，所以协作台的气泡上能看到"第 n 跳"——第 3 跳起变警告色。深度不是只有拒绝时才存在的东西，它一直是可观测的。

链的执行状态（谁在处理哪条链、每条边发过几次）是**进程内**的，随 leader 的 live team 一起建立与丢弃，最多记住最近 64 条链；重启后重新开始——重启本身就断链。

### 只折叠一次

rc.6 的 `Session.append` 无法把事件标成 `ignorable`，因此**仓库外插件不能新增会话事件类型**（否则卸载插件后旧日志会拒绝加载）。所以团队的每条持久事实都骑在 harness 已认识的词汇上：

- 团队工具自己 `tool/result` 的 `meta`（`presentationMeta` 带**整个实体**，不是增量）；
- `user/message` 的消息源（`team-message` / 内置的 `subagent-report` / `subagent-settled`）。

`src/fold.ts` 是唯一的折叠实现，`src/projection.ts` 把它注册成 `team` session projection：宿主算一次，框架负责推给浏览器（历史尾巴基线 + `session/projection` 帧），客户端只决定"现在显示哪个会话的值"。

### 工具作用域

- leader 侧：`agent/created` 时把 6 个工具注册进**该 agent 自己的 ctx**（普通 subagent 继承全局注册表，但不继承别人的 agent scope，所以看不到）。
- 队友侧：`registerContinuableSetup` 在子代**未发布的组装窗口**里注册 `team_send`、`team_list`、身份提示段落与（可选的）思考强度；不属于任何团队的子代拿到的是空的 disposer。

## 模型看到的工具

| 工具 | 谁能用 | 作用 |
|---|---|---|
| `team_spawn` | leader | 派生队友：`name` / `task` / `relation`，可选 `role`、`persona`、`model`、`reasoning_effort` |
| `team_send` | leader + 队友 | 邮箱。收件人写队友名、成员 id 或 `leader`；消息成为对方的下一个 turn，不等回复 |
| `team_task` | leader | 共享任务列表：不带 `task_id` 是新建，带则更新；`assignee` 支持名字或 id |
| `team_relation` | leader | `managed` ⇄ `peer` 升降级 |
| `team_dismiss` | leader | 解雇一个队友；不给参数则解散整队（中断当前工作，transcript 仍可读） |
| `team_list` | leader + 队友 | 花名册（含 `running` / `idle` / `ready` 实时状态）、任务列表、最近邮箱流量 |

队友汇报用的是 harness 内置的 `report`（`@deepseek-ai/dsh-tool-subagent-report` 在子代作用域里注册，且不受 `toolFilter` 影响）——本插件不再重复造一个 `team_report`，汇报会以 `subagent-report` 源落进 leader 日志，被同一份折叠记进消息流。

每个写操作的工具卡片都有自己的标题（`Spawn teammate Alice` / `Alice joined the team` / `Message Alice` / `New task: …` / `Team disbanded`），失败时直接把拒绝原因写在卡片上；写操作一律 `isConcurrencySafe: () => false`，不会被并行调度打散。

## 模型与思考强度

- `model`：走 `AgentOptions.model`，只影响这一个队友；省略则继承 leader 的模型。
- `reasoning_effort`：不是 `AgentOptions` 的字段（它是请求头状态），所以队友作用域里挂一个 `agent/request` waterfall，把 `reasoningEffort` 钉在**这个队友自己的**每次请求上。派生时就用 `ctx.llm.resolveModelInfo()` 校验该模型是否提供这个强度，**当场失败**而不是等到队友第一次发请求。
- 强度记在成员事实里（随折叠持久化），冷恢复后仍然生效——subagent descriptor 本身不存这个字段。

## 团队协作台（视图页签）

团队不再是右下角的悬浮按钮，而是**会话视图环里的第三个页签**：`对话 / 轨迹 / Agent 团队`（`src/client/`）。

- **有团队才有页签**：客户端跟随器发现当前会话的 `team` 投影里有成员，才把这一条 `conversation.view` 注册进去；团队解散就把注册撤回（未知的 view id 会回落到对话页，撤回不会把读者卡住）。普通会话的视图环完全不变。
- **协作关系是画出来的，不是列出来的**：中间是一张星座图——leader 在轴心，队友按席位落在轨道上，每条辐条是一次投递通道。辐条在成员**正在跑**或**刚刚有流量**时变成品牌色并跑起流动虚线；两名以上 `peer` 时轨道上多出一圈虚线**同级通道**，把"谁可以直接找谁"画成拓扑而不是写成标签。
- **消息是气泡，不是行**：主会话发出的靠右、队友发来的靠左，连续同向自动收起头像；`汇报` 走成功色左边条，`已收工` 是虚线弱化。鼠标停在气泡上，对应成员的辐条会亮起——**同一份状态的两种投影互相指认**。
- **任务是看板**：待办 / 进行中 / 已完成三列，卡片带指派人与结案备注；成员节点上还挂着它名下未完成任务的计数徽标。
- 点节点开对应 transcript（走 durable 的 subagent 地址，目录没拉取过就刷新后重试），点轴心回主会话，`aria-current` 标出你正在看的那个。
- 每名成员的头像色是**品牌 token 旋转出来的**（`hue-rotate`），不写死颜色；全部动效在 `prefers-reduced-motion` 下关闭。

导航进队友会话时页签不会消失：跟随器认得"当前会话是这支团队的成员"，只把"你在这儿"的标记挪过去。

## 安装

```sh
cd ~/projects/dsh-team
./scripts/install-profile.sh web        # 构建 + 链接进 ~/.dsh/profiles/web（会先摘掉 0.1 的六行旧装配）
dsh --profile web --dump-config | grep 'id: team'
dsh --profile web
```

手动等价物：

```sh
pnpm install && pnpm run build
dsh plugin --profile web add link:$PWD   # 包自带 dsh.bundle.patch，加进去即生效
```

改完源码重跑 `pnpm run build`：宿主行要重启 dsh，客户端 bundle 刷新页面即可。

## 配置（`cordis.patch.yml` 可覆写）

| 键 | 默认 | 含义 |
|---|---|---|
| `provider` | `spawn` | 派生队友用的 `ctx.subagents` provider（base bundle 提供 `spawn`） |
| `maxTeammates` | `8` | 单个 leader 的在册成员上限（1–64） |
| `maxRecentMessages` | `50` | 折叠保留、协作台显示的邮箱条数上限（1–1000） |
| `maxChainHops` | `4` | 一次队友间对话最多转手几次（1–64）；发给 leader 不计入 |
| `maxChainRoundTrips` | `2` | 一条链里同一有序对最多几条消息（1–64） |

## 已知限制

- **peer↔peer 的历史只在成员自己的会话里**：leader 的折叠只看得见 leader 可见的流量，协作台同理——所以横向对话只有被预算拒绝后成员主动上报时才会进入 leader 的视野。
- **任务列表由 leader 写**：队友的工具调用落在自己的日志里，leader 的持久状态读不到；队友用 `report` 汇报，由 leader 记账。
- **Code Mode 下的团队调用不入折叠**：折叠读的是团队工具自己的 `tool/result`；`run_code` 里的嵌套调用不产生这些行（base bundle 默认不含 Code Mode）。
- **工具成功但结果没落日志**（极端故障）会留下一个孤儿成员：活的花名册有、折叠没有，重启后消失。
- 不嵌套：队友不能再开自己的团队（`NESTED_TEAM`）。

## 开发

```sh
pnpm run typecheck   # 源码 + 测试
pnpm run test        # 133 个单测：折叠 / 投影 / 服务授权矩阵 / 工具契约 / 队友组装 / 会话预算 / 客户端跟随与页签 / 协作台
pnpm run build       # 宿主 ESM + 浏览器闭包工厂（构建期强制客户端 bundle 纯净性）
pnpm run check       # 三件一起
```

构建与类型针对 npm 上的 `@deepseek-ai/dsh@0.1.0-rc.6`。遵循 harness 的插件纪律：注册即 effect、能力缝三角色、事件全 JSON 整值、模型可见即落日志、配置无硬编码。
