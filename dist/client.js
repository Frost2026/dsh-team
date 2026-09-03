window.__ModuleLoader__.load({
	id: "dsh-team",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region \0rolldown/runtime.js
		var __create = Object.create;
		var __defProp = Object.defineProperty;
		var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames = Object.getOwnPropertyNames;
		var __getProtoOf = Object.getPrototypeOf;
		var __hasOwnProp = Object.prototype.hasOwnProperty;
		var __copyProps = (to, from, except, desc) => {
			if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
			return to;
		};
		var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
			value: mod,
			enumerable: true
		}) : target, mod));
		//#endregion
		let react = require("react");
		react = __toESM(react, 1);
		let _deepseek_ai_dsh_client_runtime_client = require("@deepseek-ai/dsh-client-runtime/client");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/client/icons.tsx
		/** Leader crown: three-point crown over a base band. */
		function IconTeamLeader16({ size = 16, className, style }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				width: size,
				height: size,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				className,
				style,
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M2.8 5.1 2.8 10.9 13.2 10.9 13.2 5.1 10.9 6.9 8 4.2 5.1 6.9 Z M1.8 4.05 C 1.8 3.45 2.55 3.15 2.95 3.6 L 5.2 6.05 8 3.35 10.8 6.05 13.05 3.6 C 13.45 3.15 14.2 3.45 14.2 4.05 L 14.2 11.4 C 14.2 11.68 13.98 11.9 13.7 11.9 L 2.3 11.9 C 2.02 11.9 1.8 11.68 1.8 11.4 Z M1.4 12.6 L 14.6 12.6 L 14.6 14.2 L 1.4 14.2 Z",
					fill: "currentColor"
				})
			});
		}
		/** Team mailbox: envelope with a delivery arrow entering the slot. */
		function IconTeamMailbox16({ size = 16, className, style }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				width: size,
				height: size,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				className,
				style,
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M1.6 3.7 L 14.4 3.7 C 14.62 3.7 14.8 3.88 14.8 4.1 L 14.8 11.6 C 14.8 11.82 14.62 12 14.4 12 L 1.6 12 C 1.38 12 1.2 11.82 1.2 11.6 L 1.2 4.1 C 1.2 3.88 1.38 3.7 1.6 3.7 Z M2.2 5.35 L 8 9.15 13.8 5.35 L 13.8 10.9 L 2.2 10.9 Z M1.2 3.2 C 1.2 2.92 1.42 2.7 1.7 2.7 L 14.3 2.7 C 14.58 2.7 14.8 2.92 14.8 3.2 L 14.8 3.2 C 14.8 3.48 14.58 3.7 14.3 3.7 L 1.7 3.7 C 1.42 3.7 1.2 3.48 1.2 3.2 Z M6.5 1.1 C 6.78 1.1 7 1.32 7 1.6 L 7 2.3 L 5 2.3 L 5 1.6 C 5 1.32 5.22 1.1 5.5 1.1 Z M10.7 1.1 C 10.98 1.1 11.2 1.32 11.2 1.6 L 11.2 2.3 L 9.2 2.3 L 9.2 1.6 C 9.2 1.32 9.42 1.1 9.7 1.1 Z",
					fill: "currentColor"
				})
			});
		}
		/** Team task: clipboard with a check stroke. */
		function IconTeamTask16({ size = 16, className, style }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				width: size,
				height: size,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				className,
				style,
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M5 1.1 C 5.22 1.1 5.4 1.28 5.4 1.5 L 5.4 2.4 L 10.6 2.4 L 10.6 1.5 C 10.6 1.28 10.78 1.1 11 1.1 C 11.22 1.1 11.4 1.28 11.4 1.5 L 11.4 2.4 L 12.6 2.4 C 12.88 2.4 13.1 2.62 13.1 2.9 L 13.1 14.1 C 13.1 14.38 12.88 14.6 12.6 14.6 L 3.4 14.6 C 3.12 14.6 2.9 14.38 2.9 14.1 L 2.9 2.9 C 2.9 2.62 3.12 2.4 3.4 2.4 L 4.6 2.4 L 4.6 1.5 C 4.6 1.28 4.78 1.1 5 1.1 Z M3.7 3.4 L 3.7 13.8 L 12.3 13.8 L 12.3 3.4 L 3.7 3.4 Z M10.4 6.4 C 10.62 6.4 10.8 6.58 10.8 6.8 L 10.8 7.9 C 10.8 8.12 10.62 8.3 10.4 8.3 L 6.1 8.3 C 5.88 8.3 5.7 8.12 5.7 7.9 L 5.7 6.8 C 5.7 6.58 5.88 6.4 6.1 6.4 Z M5.6 8.9 L 7 10.3 L 9.7 7.6 L 8.65 6.55 L 7 8.2 L 6.65 7.85 Z",
					fill: "currentColor"
				})
			});
		}
		/** Team peer link: two nodes joined by a horizontal link. */
		function IconTeamPeer16({ size = 16, className, style }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				width: size,
				height: size,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				className,
				style,
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M3.6 4.2 C 2.72 4.2 2 4.92 2 5.8 C 2 6.68 2.72 7.4 3.6 7.4 C 4.48 7.4 5.2 6.68 5.2 5.8 C 5.2 4.92 4.48 4.2 3.6 4.2 Z M1 5.8 C 1 4.36 2.16 3.2 3.6 3.2 C 5.04 3.2 6.2 4.36 6.2 5.8 C 6.2 7.24 5.04 8.4 3.6 8.4 C 2.16 8.4 1 7.24 1 5.8 Z M12.4 8.6 C 11.52 8.6 10.8 9.32 10.8 10.2 C 10.8 11.08 11.52 11.8 12.4 11.8 C 13.28 11.8 14 11.08 14 10.2 C 14 9.32 13.28 8.6 12.4 8.6 Z M9.8 10.2 C 9.8 8.76 10.96 7.6 12.4 7.6 C 13.84 7.6 15 8.76 15 10.2 C 15 11.64 13.84 12.8 12.4 12.8 C 10.96 12.8 9.8 11.64 9.8 10.2 Z M5.9 8.1 L 10.1 9.9 L 10.1 8.2 L 5.9 6.4 Z",
					fill: "currentColor"
				})
			});
		}
		/** Team message: paper plane with a motion trail. */
		function IconTeamMessage16({ size = 16, className, style }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				width: size,
				height: size,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				className,
				style,
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M13.9 1.4 C 14.12 1.4 14.3 1.58 14.3 1.8 C 14.3 1.88 14.28 1.96 14.25 2.04 L 10.35 14.04 C 10.24 14.36 9.88 14.5 9.6 14.34 C 9.47 14.27 9.38 14.14 9.35 14 L 7.8 8.8 L 2.6 7.25 C 2.34 7.17 2.17 6.9 2.22 6.63 C 2.25 6.5 2.34 6.39 2.46 6.33 L 14.46 2.33 C 14.62 2.28 14.78 2.33 14.9 2.45 Z M4.5 6.4 L 7.9 7.7 L 8.6 11.9 L 11.8 3.4 Z M8.4 8.1 L 12.4 4.2 L 7.1 6.1 Z",
					fill: "currentColor"
				})
			});
		}
		/** The team mark: three nodes around a hub. */
		function IconTeam16({ size = 16, className, style }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				width: size,
				height: size,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				className,
				style,
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M8 1.2 C 8.28 1.2 8.5 1.42 8.5 1.7 L 8.5 4 L 11.2 4 C 11.48 4 11.7 4.22 11.7 4.5 C 11.7 4.78 11.48 5 11.2 5 L 8.5 5 L 8.5 7.7 C 8.5 7.98 8.28 8.2 8 8.2 C 7.72 8.2 7.5 7.98 7.5 7.7 L 7.5 5 L 4.8 5 C 4.52 5 4.3 4.78 4.3 4.5 C 4.3 4.22 4.52 4 4.8 4 L 7.5 4 L 7.5 1.7 C 7.5 1.42 7.72 1.2 8 1.2 Z M2.6 9.4 C 2.88 9.4 3.1 9.62 3.1 9.9 L 3.1 11.5 L 4.7 11.5 C 4.98 11.5 5.2 11.72 5.2 12 C 5.2 12.28 4.98 12.5 4.7 12.5 L 3.1 12.5 L 3.1 14.1 C 3.1 14.38 2.88 14.6 2.6 14.6 C 2.32 14.6 2.1 14.38 2.1 14.1 L 2.1 12.5 L 0.5 12.5 C 0.22 12.5 0 12.28 0 12 C 0 11.72 0.22 11.5 0.5 11.5 L 2.1 11.5 L 2.1 9.9 C 2.1 9.62 2.32 9.4 2.6 9.4 Z M12.9 8.9 C 13.18 8.9 13.4 9.12 13.4 9.4 L 13.4 10.8 L 14.8 10.8 C 15.08 10.8 15.3 11.02 15.3 11.3 C 15.3 11.58 15.08 11.8 14.8 11.8 L 13.4 11.8 L 13.4 13.2 C 13.4 13.48 13.18 13.7 12.9 13.7 C 12.62 13.7 12.4 13.48 12.4 13.2 L 12.4 11.8 L 11 11.8 C 10.72 11.8 10.5 11.58 10.5 11.3 C 10.5 11.02 10.72 10.8 11 10.8 L 12.4 10.8 L 12.4 9.4 C 12.4 9.12 12.62 8.9 12.9 8.9 Z",
					fill: "currentColor"
				})
			});
		}
		/** Mailbox-send glyph for the roster mail affordance. */
		function IconTeamSend16({ size = 16, className, style }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				width: size,
				height: size,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				className,
				style,
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M7.7 1.1 C 7.98 1.1 8.2 1.32 8.2 1.6 L 8.2 6.1 L 10.9 3.4 C 11.1 3.2 11.4 3.2 11.6 3.4 C 11.8 3.6 11.8 3.9 11.6 4.1 L 8.7 7 L 11.6 9.9 C 11.8 10.1 11.8 10.4 11.6 10.6 C 11.4 10.8 11.1 10.8 10.9 10.6 L 8.2 7.9 L 8.2 12.4 C 8.2 12.68 7.98 12.9 7.7 12.9 C 7.42 12.9 7.2 12.68 7.2 12.4 L 7.2 7.9 L 4.5 10.6 C 4.3 10.8 4 10.8 3.8 10.6 C 3.6 10.4 3.6 10.1 3.8 9.9 L 6.7 7 L 3.8 4.1 C 3.6 3.9 3.6 3.6 3.8 3.4 C 4 3.2 4.3 3.2 4.5 3.4 L 7.2 6.1 L 7.2 1.6 C 7.2 1.32 7.42 1.1 7.7 1.1 Z M0.8 13.6 C 1.08 13.6 1.3 13.82 1.3 14.1 C 1.3 14.38 1.08 14.6 0.8 14.6 C 0.52 14.6 0.3 14.38 0.3 14.1 C 0.3 13.82 0.52 13.6 0.8 13.6 Z",
					fill: "currentColor"
				})
			});
		}
		/** Team workspace: a shared board with two pinned notes. */
		function IconTeamWorkspace16({ size = 16, className, style }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				width: size,
				height: size,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				className,
				style,
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M2.1 2.4 C 1.82 2.4 1.6 2.62 1.6 2.9 L 1.6 12.2 C 1.6 12.48 1.82 12.7 2.1 12.7 L 13.9 12.7 C 14.18 12.7 14.4 12.48 14.4 12.2 L 14.4 2.9 C 14.4 2.62 14.18 2.4 13.9 2.4 Z M2.6 3.4 L 13.4 3.4 L 13.4 11.7 L 2.6 11.7 Z M4.2 5 L 7.4 5 C 7.62 5 7.8 5.18 7.8 5.4 L 7.8 8 C 7.8 8.22 7.62 8.4 7.4 8.4 L 4.2 8.4 C 3.98 8.4 3.8 8.22 3.8 8 L 3.8 5.4 C 3.8 5.18 3.98 5 4.2 5 Z M9.1 5 L 11.8 5 C 12.02 5 12.2 5.18 12.2 5.4 C 12.2 5.62 12.02 5.8 11.8 5.8 L 9.1 5.8 C 8.88 5.8 8.7 5.62 8.7 5.4 C 8.7 5.18 8.88 5 9.1 5 Z M9.1 6.9 L 11.8 6.9 C 12.02 6.9 12.2 7.08 12.2 7.3 C 12.2 7.52 12.02 7.7 11.8 7.7 L 9.1 7.7 C 8.88 7.7 8.7 7.52 8.7 7.3 C 8.7 7.08 8.88 6.9 9.1 6.9 Z M4.2 9.5 L 11.8 9.5 C 12.02 9.5 12.2 9.68 12.2 9.9 C 12.2 10.12 12.02 10.3 11.8 10.3 L 4.2 10.3 C 3.98 10.3 3.8 10.12 3.8 9.9 C 3.8 9.68 3.98 9.5 4.2 9.5 Z M6.6 13.6 L 9.4 13.6 L 9.4 14.6 L 6.6 14.6 Z",
					fill: "currentColor"
				})
			});
		}
		//#endregion
		//#region src/client/room.ts
		/** The floor the desks are laid out on. */
		const FIELD = {
			x: 7,
			y: 32,
			w: 60,
			h: 60
		};
		/** The break corner, in the near right of the room. */
		const LOUNGE$1 = {
			x: 69,
			y: 40,
			w: 29,
			h: 46
		};
		/** The two vertical lanes down the sides of the desk field. */
		const LANES = {
			left: 3.5,
			right: 68.5
		};
		/** How far in front of a desk its own aisle runs. */
		const AISLE = 5.5;
		/** Half the height of the floor one desk and its chair take up. */
		const FOOT_HEIGHT = 4.4;
		/** Two places closer than this are the same place. */
		const NEAR$1 = .5;
		/** Rows of desks that differ by less than this share one aisle. */
		const BAND = 4;
		/** How much clear floor a walker keeps between itself and the furniture. */
		const CLEARANCE = 2.4;
		/** The strip along each wall a route never turns into. */
		const MARGIN = 2.5;
		/** Round geometry so a style, a test and a route all read the same number. */
		function round$1(value) {
			return Math.round(value * 100) / 100;
		}
		/** Keep a place on the floor rather than through a wall. */
		function clamp(value, low, high) {
			return Math.min(high, Math.max(low, value));
		}
		/**
		* How many rows of desks a roster of this size stands in. Rows stay wide and
		* shallow: a room reads better across than back, and three rows is as deep as
		* the aisles between them can stay walkable.
		* @param count - how many members the room seats.
		* @returns the number of rows.
		*/
		function rowsFor(count) {
			if (count <= 3) return 1;
			return count <= 8 ? 2 : 3;
		}
		/**
		* One member's own desk: the same seat for the same roster index, every
		* render. Desks fill left to right and front rows draw larger than back ones.
		* @param index - the member's index on the roster (the leader takes the first).
		* @param count - how many members the room seats.
		* @returns the workstation.
		*/
		function deskOf(index, count) {
			const rows = rowsFor(count);
			const columns = Math.max(1, Math.ceil(count / rows));
			const row = Math.min(rows - 1, Math.floor(index / columns));
			const column = index % columns;
			const slack = (columns - Math.min(columns, count - row * columns)) / 2;
			const cell = FIELD.w / columns;
			const depth = rows === 1 ? 1 : row / (rows - 1);
			return {
				x: round$1(FIELD.x + cell * (column + slack + .5)),
				y: round$1(FIELD.y + FIELD.h * ((row + .5) / rows)),
				gap: round$1(cell / 2),
				scale: round$1((.84 + .16 * depth) * (columns <= 3 ? 1 : columns === 4 ? .88 : .76)),
				row,
				rows,
				columns
			};
		}
		/**
		* Where the break corner puts the nth member taking one. There are three
		* places to stand around the sofa, all of them in front of the furniture and
		* close enough to it to belong to it — a member on a break stands at the
		* coffee table, never in it, and never marooned on the floor below it — and a
		* fourth member shares the first. The rightmost place stays clear of the
		* treadmill in the corner beyond it: somebody standing in the machine's way
		* would be drawn into its deck.
		* @param index - the member's index among those on a break.
		* @returns the place it stands.
		*/
		function breakAt(index) {
			const spots = [
				{
					x: LOUNGE$1.x + 8,
					y: LOUNGE$1.y + 29
				},
				{
					x: LOUNGE$1.x + 15,
					y: LOUNGE$1.y + 33
				},
				{
					x: LOUNGE$1.x + 14,
					y: LOUNGE$1.y + 23
				}
			];
			const spot = spots[index % spots.length] ?? spots[0];
			return {
				x: round$1(spot.x),
				y: round$1(spot.y),
				gap: 7,
				scale: .9
			};
		}
		/**
		* Where a visitor stops to talk: beside its host, on the side it arrived from,
		* one step in front so neither of them is hidden behind the other.
		* @param host - the place the member being visited stands.
		* @param fromX - where the visitor is coming from.
		* @returns the place the visitor stands while it talks.
		*/
		function visitAt(host, fromX) {
			const side = fromX < host.x ? -1 : 1;
			return {
				x: round$1(clamp(host.x + side * host.gap, 4, 96)),
				y: round$1(host.y + 2)
			};
		}
		/** The floor one desk and its chair take up; a route must not cross it. */
		function footprintOf(post) {
			return {
				x: round$1(post.x - post.gap * .84),
				y: round$1(post.y - FOOT_HEIGHT),
				w: round$1(post.gap * 1.68),
				h: FOOT_HEIGHT * 2
			};
		}
		/** The walkway in front of whatever stands at this depth. */
		function aisleFor(y) {
			return round$1(Math.min(91, y + AISLE));
		}
		/**
		* The standing furniture of the break corner, in the same 0–100 plan the desks
		* use. These are the floor rectangles the pieces occupy, which is what a walk
		* has to know about them; the stylesheet draws them inside the projected
		* lounge box at the matching fractions of it.
		*/
		const ROOM_BLOCKS = [
			(
			/** The sofa, along the back of the corner. */
			{
				x: LOUNGE$1.x + 2.3,
				y: LOUNGE$1.y + 1,
				w: 14.5,
				h: 7
			}),
			(
			/** The low table in front of it. */
			{
				x: LOUNGE$1.x + 4.9,
				y: LOUNGE$1.y + 11,
				w: 10,
				h: 4.5
			}),
			(
			/** The plant, in the far corner. */
			{
				x: LOUNGE$1.x + 21,
				y: LOUNGE$1.y + 2,
				w: 6,
				h: 6
			}),
			(
			/** The water cooler, against the right wall. */
			{
				x: LOUNGE$1.x + 22,
				y: LOUNGE$1.y + 12,
				w: 6,
				h: 6.5
			}),
			(
			/**
			* The treadmill, in the front-right corner: the wellness zone, in front of
			* the lounge and out of every walkway. The rectangle covers the whole drawn
			* machine, deck and console, because the part of a tall prop that reads as
			* "here" on a shallow floor is its full visual bulk, not just its feet.
			*/
			{
				x: 86,
				y: 70,
				w: 12,
				h: 17
			}),
			(
			/**
			* The filing cabinet, printer and coffee machine, clustered against the
			* left wall beside the desks. The rectangle spans the cluster's full drawn
			* height — a tall cabinet's screen area reaches well back of its base on a
			* floor seen this shallow — so a walker is kept out of the machine, not
			* merely out from under it.
			*/
			{
				x: .5,
				y: 41,
				w: 12,
				h: 24
			})
		];
		/**
		* Everything a walk goes around: the standing furniture of the room plus one
		* rectangle per workstation.
		* @param posts - the desks currently on the floor.
		* @returns every rectangle of floor a route must stay out of.
		*/
		function obstaclesOf(posts) {
			return [...ROOM_BLOCKS, ...[...posts].map(footprintOf)];
		}
		/** A rectangle grown by the clearance a walker keeps around it. */
		function inflate(rect, by) {
			return {
				x: rect.x - by,
				y: rect.y - by,
				w: rect.w + by * 2,
				h: rect.h + by * 2
			};
		}
		/** Whether a point lies inside a rectangle. */
		function inside(point, rect) {
			return point.x > rect.x && point.x < rect.x + rect.w && point.y > rect.y && point.y < rect.y + rect.h;
		}
		/**
		* Whether a straight leg passes through the inside of a rectangle. Running
		* along an edge is not crossing it: a walker may graze the furniture it has
		* just left without the route being called blocked.
		*/
		function crossesRect(from, to, rect) {
			const edge = .01;
			const left = rect.x + edge;
			const right = rect.x + rect.w - edge;
			const top = rect.y + edge;
			const bottom = rect.y + rect.h - edge;
			if (right <= left || bottom <= top) return false;
			const dx = to.x - from.x;
			const dy = to.y - from.y;
			let enter = 0;
			let leave = 1;
			/** Clip the leg against one of the four slabs; false when it misses entirely. */
			const clip = (slope, distance) => {
				if (Math.abs(slope) < 1e-9) return distance >= 0;
				const cut = distance / slope;
				if (slope < 0) {
					if (cut > leave) return false;
					if (cut > enter) enter = cut;
				} else {
					if (cut < enter) return false;
					if (cut < leave) leave = cut;
				}
				return true;
			};
			return clip(-dx, from.x - left) && clip(dx, right - from.x) && clip(-dy, from.y - top) && clip(dy, bottom - from.y) && leave > enter + 1e-6;
		}
		/** Which side lane a trip between these two columns goes around by. */
		function laneFor(fromX, toX) {
			return (fromX + toX) / 2 < FIELD.x + FIELD.w / 2 ? LANES.left : LANES.right;
		}
		/** Drop the legs a walk would not take: zero-length ones, and straight-throughs. */
		function prune(points) {
			const out = [];
			for (const point of points) {
				const last = out[out.length - 1];
				if (last !== void 0 && Math.abs(last.x - point.x) < NEAR$1 && Math.abs(last.y - point.y) < NEAR$1) continue;
				const before = out[out.length - 2];
				if (last !== void 0 && before !== void 0 && (Math.abs(before.x - last.x) < NEAR$1 && Math.abs(last.x - point.x) < NEAR$1 || Math.abs(before.y - last.y) < NEAR$1 && Math.abs(last.y - point.y) < NEAR$1)) out.pop();
				out.push(point);
			}
			return out;
		}
		/**
		* The old lane route, kept as the way out when the graph cannot find one: out
		* to your own aisle, down a side lane, in along the destination's aisle. It
		* crosses furniture rather than leaving somebody stranded, which is the right
		* trade for a room that has been packed too tight to walk through.
		*/
		function laneRoute(from, to) {
			if (Math.abs(from.y - to.y) <= BAND) {
				const aisle = aisleFor(Math.max(from.y, to.y));
				return prune([
					from,
					{
						x: from.x,
						y: aisle
					},
					{
						x: to.x,
						y: aisle
					},
					to
				]);
			}
			const lane = laneFor(from.x, to.x);
			const out = aisleFor(from.y);
			const back = aisleFor(to.y);
			return prune([
				from,
				{
					x: from.x,
					y: out
				},
				{
					x: lane,
					y: out
				},
				{
					x: lane,
					y: back
				},
				{
					x: to.x,
					y: back
				},
				to
			]);
		}
		/** How far apart two places are. */
		function span(from, to) {
			return Math.hypot(to.x - from.x, to.y - from.y);
		}
		/**
		* The corners worth turning at: each blocking rectangle's four corners, pushed
		* out by the clearance, dropped when they fall inside another piece or off the
		* floor. A shortest path around rectangles only ever turns at one of these.
		*/
		function cornersOf(blocks) {
			const out = [];
			for (const block of blocks) {
				const grown = inflate(block, CLEARANCE);
				const candidates = [
					{
						x: grown.x,
						y: grown.y
					},
					{
						x: grown.x + grown.w,
						y: grown.y
					},
					{
						x: grown.x,
						y: grown.y + grown.h
					},
					{
						x: grown.x + grown.w,
						y: grown.y + grown.h
					}
				];
				for (const corner of candidates) {
					const spot = {
						x: clamp(corner.x, MARGIN, 97.5),
						y: clamp(corner.y, MARGIN, 97.5)
					};
					if (blocks.some((other) => inside(spot, inflate(other, CLEARANCE * .6)))) continue;
					out.push(spot);
				}
			}
			return out;
		}
		/**
		* The walk from one place on the floor to another, as the corners it turns.
		*
		* A member leaves its own desk and walks around everything else: the route is
		* the shortest chain of clear straight lines between the corners of the
		* furniture. Whatever the walker is standing in — its own workstation — stops
		* blocking for the length of that trip, because you are allowed to walk out of
		* your own chair.
		* @param from - where the walk starts.
		* @param to - where it ends.
		* @param obstacles - the furniture on the floor; defaults to the fixed pieces.
		* @returns the corners, starting at `from` and ending at `to`.
		*/
		function routeBetween(from, to, obstacles = ROOM_BLOCKS) {
			if (Math.abs(from.x - to.x) < NEAR$1 && Math.abs(from.y - to.y) < NEAR$1) return [from];
			const blocks = obstacles.filter((rect) => {
				const grown = inflate(rect, CLEARANCE * .5);
				return !inside(from, grown) && !inside(to, grown);
			});
			const clear = (a, b) => !blocks.some((rect) => {
				if (crossesRect(a, b, rect)) return true;
				const grown = inflate(rect, CLEARANCE);
				return !inside(a, grown) && !inside(b, grown) && crossesRect(a, b, grown);
			});
			if (clear(from, to)) return [from, to];
			const nodes = [
				from,
				...cornersOf(blocks),
				to
			];
			const goal = nodes.length - 1;
			const best = nodes.map(() => Infinity);
			const via = nodes.map(() => -1);
			const done = nodes.map(() => false);
			best[0] = 0;
			for (;;) {
				let at = -1;
				for (let index = 0; index < nodes.length; index += 1) {
					const cost = best[index];
					if (!done[index] && cost < (at < 0 ? Infinity : best[at])) at = index;
				}
				if (at < 0 || at === goal) break;
				done[at] = true;
				const here = nodes[at];
				for (let index = 0; index < nodes.length; index += 1) {
					if (done[index] || index === at || !clear(here, nodes[index])) continue;
					const cost = best[at] + span(here, nodes[index]);
					if (cost < best[index]) {
						best[index] = cost;
						via[index] = at;
					}
				}
			}
			if (best[goal] === Infinity) return laneRoute(from, to);
			const path = [];
			for (let at = goal; at >= 0; at = via[at]) {
				path.unshift(nodes[at]);
				if (at === 0) break;
			}
			return prune(path);
		}
		/** How far into a leg a turn starts rounding off. */
		const SHOULDER = 2.2;
		/** How many samples one rounded corner is drawn from. */
		const ARC = 3;
		/**
		* The same walk with its corners rounded off. A person turning a corner does
		* not stop dead and set off again at a right angle: each turn is replaced by a
		* short arc that starts before the corner and finishes after it, cut back
		* whenever the legs are too short to give it room.
		* @param points - the corners of the walk.
		* @param blocks - furniture the rounded corner still may not cut through.
		* @returns the walk, as points to be followed in a straight line between.
		*/
		function smooth(points, blocks = []) {
			if (points.length < 3) return points;
			const out = [points[0]];
			for (let index = 1; index < points.length - 1; index += 1) {
				const before = points[index - 1];
				const corner = points[index];
				const after = points[index + 1];
				const back = Math.min(SHOULDER, span(before, corner) * .4);
				const on = Math.min(SHOULDER, span(corner, after) * .4);
				if (back < .2 || on < .2) {
					out.push(corner);
					continue;
				}
				const start = along(corner, before, back);
				const end = along(corner, after, on);
				if (blocks.some((rect) => crossesRect(start, end, rect))) {
					out.push(corner);
					continue;
				}
				out.push(start);
				for (let step = 1; step < ARC; step += 1) out.push(bend(start, corner, end, step / ARC));
				out.push(end);
			}
			out.push(points[points.length - 1]);
			return out;
		}
		/** The point this far from `corner` along the line toward `toward`. */
		function along(corner, toward, distance) {
			const length = span(corner, toward) || 1;
			return {
				x: round$1(corner.x + (toward.x - corner.x) / length * distance),
				y: round$1(corner.y + (toward.y - corner.y) / length * distance)
			};
		}
		/** One sample of the quadratic curve that rounds a corner off. */
		function bend(start, corner, end, at) {
			const rest = 1 - at;
			return {
				x: round$1(rest * rest * start.x + 2 * rest * at * corner.x + at * at * end.x),
				y: round$1(rest * rest * start.y + 2 * rest * at * corner.y + at * at * end.y)
			};
		}
		/** How long a walk of this length takes, at a walking pace. */
		function walkMs(distance, speed = 34) {
			return Math.max(140, Math.round(distance / speed * 1e3));
		}
		/** The whole length of a walk, corner to corner. */
		function lengthOf(points) {
			let total = 0;
			for (let index = 1; index < points.length; index += 1) total += span(points[index - 1], points[index]);
			return round$1(total);
		}
		/**
		* The places a member with nothing on its plate drifts off to: the cooler, the
		* two windows, and the plant in the corner. Somewhere to be that is not a
		* chair — an office where nobody ever gets up is a diorama.
		*/
		const HAUNTS = [
			(
			/** At the water cooler, filling a cup. */
			{
				x: 93,
				y: 58,
				gap: 5,
				scale: .92
			}),
			(
			/** At the left-hand window, looking out. */
			{
				x: 34,
				y: 20,
				gap: 6,
				scale: .86
			}),
			(
			/** At the right-hand window. */
			{
				x: 58,
				y: 20,
				gap: 6,
				scale: .86
			}),
			(
			/** Stretching by the plant. */
			{
				x: 88,
				y: 47,
				gap: 5,
				scale: .9
			})
		];
		/** A stable number in 0–1 for a pair of integers: the same seat, the same trip. */
		function hash(a, b) {
			let value = Math.imul(a + 1, 374761393) + Math.imul(b + 1, 668265263);
			value = Math.imul(value ^ value >>> 13, 1274126177);
			return ((value ^ value >>> 16) >>> 0) / 4294967296;
		}
		/**
		* Where a member with nothing to do wanders on the nth turn of the room's
		* clock, if it wanders anywhere at all. Most turns it stays where it is: an
		* office in which everybody is always on their feet is as wrong as one in
		* which nobody ever is.
		* @param seat - the member's index on the roster; the leader passes -1.
		* @param tick - which turn of the room's clock this is.
		* @returns the place it drifts to, or nothing if it stays put.
		*/
		function wanderOf(seat, tick) {
			if (tick === 0) return void 0;
			if (hash(seat, tick) < .62) return void 0;
			const pick = Math.floor(hash(seat, tick + 7919) * HAUNTS.length);
			const haunt = HAUNTS[Math.min(HAUNTS.length - 1, pick)];
			if (haunt === void 0) return void 0;
			const step = (seat + 1) % 3 - 1;
			return {
				...haunt,
				x: round$1(clamp(haunt.x + step * 4.5, MARGIN, 97.5))
			};
		}
		/** How far apart two members standing still push each other. */
		const PERSONAL = 5;
		/**
		* The same places with nobody standing inside anybody else. Two members sent
		* to the same corner would otherwise draw one on top of the other; one pass of
		* separation is enough to tell them apart without moving either far enough to
		* leave the spot it was sent to.
		* @param spots - where each member has been told to stand, in roster order.
		* @returns the same list, nudged apart.
		*/
		function spread(spots) {
			const out = spots.map((spot) => ({
				x: spot.x,
				y: spot.y
			}));
			for (const [index, spot] of out.entries()) for (let other = index + 1; other < out.length; other += 1) {
				const mate = out[other];
				const apart = span(spot, mate);
				if (apart >= PERSONAL) continue;
				const push = (PERSONAL - apart) / 2;
				const dx = apart < .01 ? 1 : (mate.x - spot.x) / apart;
				const dy = apart < .01 ? 0 : (mate.y - spot.y) / apart;
				spot.x = clamp(spot.x - dx * push, MARGIN, 97.5);
				spot.y = clamp(spot.y - dy * push, MARGIN, 97.5);
				mate.x = clamp(mate.x + dx * push, MARGIN, 97.5);
				mate.y = clamp(mate.y + dy * push, MARGIN, 97.5);
			}
			return out.map((spot) => ({
				x: round$1(spot.x),
				y: round$1(spot.y)
			}));
		}
		/**
		* Whether a member is at its desk or on a break. A member keeps its own desk
		* for good — it only leaves it once its own report is the last thing it did
		* and nothing open is left with its name on it.
		* @param running - whether the member is mid-turn.
		* @param touch - the last mailbox event that named it, if any.
		* @param openTasks - how many unfinished tasks name it as assignee.
		* @returns where it stands.
		*/
		function stationFor(running, touch, openTasks) {
			if (running || touch === "got") return "desk";
			return touch === "reported" && openTasks === 0 ? "break" : "desk";
		}
		/**
		* What a member is doing where it stands: mid-turn it works, with mail or open
		* work on its plate it reads, and with neither it idles.
		* @param running - whether the member is mid-turn.
		* @param touch - the last mailbox event that named it, if any.
		* @param openTasks - how many unfinished tasks name it as assignee.
		* @returns the pose.
		*/
		function poseFor(running, touch, openTasks) {
			if (running) return "working";
			return touch === "got" || openTasks > 0 ? "reading" : "idle";
		}
		//#endregion
		//#region src/client/stagecraft.ts
		/**
		* The shape of the box, as fractions of the stage.
		*
		* `far` is how wide the floor still is where it meets the back wall, `top` and
		* `bottom` are the band of the stage the floor covers, and `bend` is how fast
		* depth runs away from the viewer: below 1 the far half of the plan is squeezed
		* into a thin strip at the back, which is what makes floorboards bunch up.
		*/
		const SHELL = {
			far: .72,
			top: 23,
			bottom: 100,
			bend: .55
		};
		/** Round geometry so a style, a test and a route all read the same number. */
		function round(value) {
			return Math.round(value * 100) / 100;
		}
		/**
		* How far into the room a plan depth lies, after perspective: 0 at the near
		* edge of the floor, 1 where it meets the back wall. The plan runs the other
		* way — y grows toward the viewer — and the curve is the perspective divide,
		* so equal steps back cover less and less of the screen.
		* @param y - the plan depth, 0 at the back wall and 100 at the near edge.
		* @returns the screen depth, 0 near and 1 far.
		*/
		function depthOf(y) {
			const back = Math.min(1, Math.max(0, 1 - y / 100));
			return back / (back + SHELL.bend * (1 - back));
		}
		/**
		* How wide the floor is at a screen depth, as a fraction of the stage: 1 across
		* the near edge, `SHELL.far` where it meets the back wall.
		* @param depth - the screen depth, 0 near and 1 far.
		* @returns the fraction of the stage the floor spans there.
		*/
		function widthAt(depth) {
			return 1 + (SHELL.far - 1) * depth;
		}
		/**
		* One place on the floor plan, as a place on the screen. The scale it comes
		* back with is the floor's own narrowing at that depth, so a member, its desk
		* and the aisle it walks all shrink by exactly the same amount and nothing
		* drifts off its own feet.
		* @param point - the place on the 0–100 floor plan.
		* @returns where it draws, and how large.
		*/
		function project(point) {
			const depth = depthOf(point.y);
			const scale = widthAt(depth);
			return {
				left: round(50 + (point.x - 50) * scale),
				top: round(SHELL.bottom - (SHELL.bottom - SHELL.top) * depth),
				scale: round(scale)
			};
		}
		/**
		* Where a fixture on the back wall goes across the stage. The wall stands at
		* the far end of the floor, so it is only `SHELL.far` of the stage wide: a
		* window hung at plan x lands here, which is what lets a member walk up to the
		* window it is actually standing under.
		* @param x - the place across the floor plan the fixture hangs above.
		* @returns the percent across the stage.
		*/
		function onWall(x) {
			return round(50 + (x - 50) * SHELL.far);
		}
		/**
		* The box's own numbers, as custom properties. The shell's five faces are cut
		* out of `clip-path` polygons, and the polygons and this module's arithmetic
		* have to agree to the percent or the walls will not meet the floor — so they
		* read the same variables rather than each carrying their own copy.
		* @returns the style to hang on the room.
		*/
		function shellVars() {
			return {
				"--team-far-inset": `${round((1 - SHELL.far) / 2 * 100)}%`,
				"--team-floor-top": `${SHELL.top}%`,
				"--team-wall-top": `3%`,
				"--team-far-width": `${round(SHELL.far * 100)}%`
			};
		}
		//#endregion
		//#region src/client/walk.ts
		/**
		* Walking, as one continuous motion.
		*
		* `routeBetween` gives the corners of a trip and `smooth` rounds them off; this
		* hook walks that line. It parametrises the whole path by arc length and eases
		* once across the trip — a member leans into its first step and slows into its
		* last, rather than stopping dead at every corner — and it drives a gait phase
		* off distance covered, so the legs swing at the speed the member is actually
		* moving instead of at a fixed rate.
		*
		* The frame loop writes `left`, `top`, the depth and the gait STRAIGHT onto the
		* node. React is told only when the member turns or stops, which is a handful
		* of renders in a whole trip; the position itself never round-trips through
		* state, so a roomful of members walking at once costs one style write each per
		* frame instead of a render tree each.
		*/
		/** Two places closer than this are the same place. */
		const NEAR = .5;
		/** How much floor one full swing of the legs covers. */
		const STRIDE = 13;
		/** Whether the reader asked for no motion. */
		function still() {
			return typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		}
		/** The clock the frame loop runs on, where there is one. */
		function now() {
			return typeof performance === "undefined" ? Date.now() : performance.now();
		}
		/** Which way a step is headed: across the room, or into and out of it. */
		function facingOf(dx, dy) {
			if (Math.abs(dx) >= Math.abs(dy)) return dx >= 0 ? "right" : "left";
			return dy > 0 ? "front" : "away";
		}
		/** Ease across the whole trip: lean into the first step, slow into the last. */
		function ease(at) {
			return at * at * (3 - 2 * at);
		}
		/**
		* Walk a member from where it is to where it should be.
		*
		* A target that changes mid-trip is re-planned from the exact place the member
		* has reached, not from the end of some leg it was committed to: it turns
		* around where it stands.
		* @param home - where the member starts, before it has walked anywhere.
		* @param target - where it should be standing now.
		* @param obstacles - the furniture on the floor, to walk around.
		* @param base - the member's own size at this station, before perspective.
		* @returns the ref to hang it on, and the pose it is in.
		*/
		function useWalk(home, target, obstacles, base) {
			const node = (0, react.useRef)(null);
			/** Where the member is right now, to the frame. */
			const at = (0, react.useRef)({
				x: home.x,
				y: home.y
			});
			/** How far into a stride the legs are, kept across trips so they never jump. */
			const gait = (0, react.useRef)(0);
			const facing = (0, react.useRef)("front");
			const scale = (0, react.useRef)(base);
			const [pose, setPose] = (0, react.useState)({
				facing: "front",
				walking: false
			});
			/** Put the member on the floor: the one place position is ever written. */
			const place = (0, react.useCallback)((point) => {
				const element = node.current;
				if (element === null) return;
				const screen = project(point);
				element.style.left = `${screen.left}%`;
				element.style.top = `${screen.top}%`;
				element.style.setProperty("--team-scale", `${screen.scale * scale.current}`);
				element.style.setProperty("--team-depth", `${Math.round(point.y)}`);
				element.style.setProperty("--team-gait", `${gait.current}`);
			}, []);
			const hang = (0, react.useCallback)((element) => {
				node.current = element;
				place(at.current);
			}, [place]);
			(0, react.useEffect)(() => {
				scale.current = base;
				place(at.current);
			}, [place, base]);
			/** Stop wherever the member stands, without keeping a walk pose alive. */
			const settle = (0, react.useCallback)(() => {
				facing.current = "front";
				setPose((current) => current.walking ? {
					facing: "front",
					walking: false
				} : current);
			}, []);
			(0, react.useEffect)(() => {
				const start = at.current;
				if (Math.abs(start.x - target.x) < NEAR && Math.abs(start.y - target.y) < NEAR) {
					settle();
					return;
				}
				if (still()) {
					at.current = {
						x: target.x,
						y: target.y
					};
					place(at.current);
					settle();
					return;
				}
				const path = smooth(routeBetween(start, target, obstacles), obstacles);
				const total = lengthOf(path);
				if (total < NEAR) {
					at.current = {
						x: target.x,
						y: target.y
					};
					place(at.current);
					settle();
					return;
				}
				/** Distance along the path at which each corner is reached. */
				const marks = [0];
				for (let index = 1; index < path.length; index += 1) marks.push(marks[index - 1] + Math.hypot(path[index].x - path[index - 1].x, path[index].y - path[index - 1].y));
				const span = walkMs(total);
				const began = now();
				const from = gait.current;
				let frame = 0;
				let leg = 1;
				const tick = () => {
					const through = Math.min(1, (now() - began) / span);
					const covered = ease(through) * total;
					while (leg < marks.length - 1 && marks[leg] < covered) leg += 1;
					const back = path[leg - 1];
					const ahead = path[leg];
					const run = marks[leg] - marks[leg - 1];
					const into = run < 1e-6 ? 1 : (covered - marks[leg - 1]) / run;
					at.current = {
						x: back.x + (ahead.x - back.x) * into,
						y: back.y + (ahead.y - back.y) * into
					};
					gait.current = (from + covered / STRIDE) % 1;
					place(at.current);
					const turned = facingOf(ahead.x - back.x, ahead.y - back.y);
					if (turned !== facing.current) {
						facing.current = turned;
						setPose({
							facing: turned,
							walking: true
						});
					}
					if (through < 1) {
						frame = requestAnimationFrame(tick);
						return;
					}
					at.current = {
						x: target.x,
						y: target.y
					};
					place(at.current);
					facing.current = "front";
					setPose({
						facing: "front",
						walking: false
					});
				};
				facing.current = facingOf(path[1].x - path[0].x, path[1].y - path[0].y);
				setPose({
					facing: facing.current,
					walking: true
				});
				frame = requestAnimationFrame(tick);
				return () => {
					cancelAnimationFrame(frame);
				};
			}, [
				target.x,
				target.y,
				obstacles,
				place,
				settle
			]);
			return {
				ref: hang,
				facing: pose.facing,
				walking: pose.walking
			};
		}
		/** How long the room waits between one member's idle errands. */
		const WANDER_MS = 45e3;
		/**
		* Where a member with nothing to do has drifted off to right now. The clock
		* turns on its own and `wanderOf` decides — most turns it decides the member
		* stays exactly where it is, which is what makes the one that gets up worth
		* looking at. The first turn always keeps it put: nobody arrives at the room
		* already out of its chair.
		* @param seat - the member's index on the roster; the leader passes -1.
		* @param loose - whether the member is free to wander at all.
		* @returns the place it has wandered to, if anywhere.
		*/
		function useIdleErrand(seat, loose) {
			const [tick, setTick] = (0, react.useState)(0);
			(0, react.useEffect)(() => {
				if (!loose || still()) return void 0;
				const timer = setInterval(() => {
					setTick((count) => count + 1);
				}, WANDER_MS + (seat + 1) % 5 * 1700);
				return () => {
					clearInterval(timer);
				};
			}, [seat, loose]);
			return loose ? wanderOf(seat, tick) : void 0;
		}
		//#endregion
		//#region \0dsh-css:/Users/frost/Code/dsh-team/src/client/TeamStage.module.css.mjs
		const css = ".hwnUuq_stage,.hwnUuq_stage *,.hwnUuq_stage :before,.hwnUuq_stage :after{box-sizing:border-box}.hwnUuq_stage{--team-page:var(--dsw-alias-bg-base);--team-ink:var(--dsw-alias-label-primary);--team-surface-1:color-mix(in srgb, var(--team-ink) 4%, var(--team-page));--team-surface-2:color-mix(in srgb, var(--team-ink) 9%, var(--team-page));--team-surface-3:color-mix(in srgb, var(--team-ink) 16%, var(--team-page));--team-hue:var(--dsw-alias-state-business-primary);--team-warm:var(--dsw-alias-state-warn-primary);--team-leaf:var(--dsw-alias-state-success-primary);flex-direction:column;gap:8px;height:100%;min-height:0;padding:10px 14px 12px;animation:.26s cubic-bezier(.22,1,.36,1) both hwnUuq_team-stage-in;display:flex;overflow:hidden;container-type:inline-size}.hwnUuq_composerAway{pointer-events:none;height:0;display:block;overflow:hidden}.hwnUuq_bar{flex:none;align-items:center;gap:10px;display:flex}.hwnUuq_barTitle{color:var(--dsw-alias-label-primary);align-items:center;gap:7px;font-size:13px;font-weight:600;display:flex}.hwnUuq_barIcon{color:var(--team-hue)}.hwnUuq_barStats{align-items:center;gap:6px;margin-left:auto;display:flex}.hwnUuq_stat{border:1px solid var(--dsw-alias-border-l2);font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-tertiary);white-space:nowrap;border-radius:999px;padding:1px 8px;font-size:11px}.hwnUuq_statLive{color:var(--team-hue);border-color:var(--team-hue)}.hwnUuq_barHint{white-space:nowrap;text-overflow:ellipsis;min-width:0;color:var(--dsw-alias-label-tertiary);align-items:center;gap:5px;font-size:10.5px;display:flex;overflow:hidden}.hwnUuq_scene{flex:1;gap:10px;min-height:0;display:flex;position:relative}.hwnUuq_roomPane{z-index:0;isolation:isolate;flex:1;min-width:0;min-height:0;position:relative}.hwnUuq_dock{z-index:40;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-overlay);border-radius:999px;flex-direction:column;flex:none;align-self:flex-start;align-items:center;gap:8px;width:44px;padding:6px 0;display:flex;position:relative}.hwnUuq_dockButton{width:34px;height:34px;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;border-radius:50%;place-items:center;padding:0;transition:background .16s,color .16s;display:grid;position:relative}.hwnUuq_dockButton:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.hwnUuq_dockButton[aria-pressed=true]{background:var(--dsw-alias-brand-primary);color:var(--dsw-alias-label-primary-inverted)}.hwnUuq_dockCount{border:2px solid var(--dsw-alias-bg-overlay);background:var(--team-surface-3);min-width:15px;height:15px;color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums;border-radius:8px;place-items:center;padding:0 4px;font-size:9px;font-weight:600;display:grid;position:absolute;top:-3px;right:-4px}.hwnUuq_dockButton[data-fresh=true]{color:var(--team-hue)}.hwnUuq_dockButton[data-fresh=true]:after{content:\"\";border:1.5px solid var(--team-hue);pointer-events:none;border-radius:50%;animation:2.2s cubic-bezier(.22,1,.36,1) infinite hwnUuq_team-halo;position:absolute;inset:0}.hwnUuq_drawer{z-index:50;border:1px solid var(--dsw-alias-border-l2);background:color-mix(in srgb, var(--dsw-alias-bg-overlay) 88%, transparent);backdrop-filter:blur(10px);width:min(408px,78cqw);box-shadow:-12px 10px 34px var(--dsw-alias-bg-mask-1);border-radius:14px;flex-direction:column;animation:.22s cubic-bezier(.22,1,.36,1) both hwnUuq_team-drawer-in;display:flex;position:absolute;top:0;bottom:0;right:54px;overflow:hidden}.hwnUuq_drawerHead{border-bottom:1px solid var(--dsw-alias-border-l1);flex:none;align-items:center;gap:6px;padding:10px 12px 8px;display:flex}.hwnUuq_drawerHead .hwnUuq_paneTitle{flex:1;min-width:0;margin:0}.hwnUuq_drawerClose{width:24px;height:24px;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:none;border-radius:50%;flex:none;place-items:center;padding:0;font-size:15px;line-height:1;display:grid}.hwnUuq_drawerClose:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.hwnUuq_drawerBody{overscroll-behavior:contain;flex-direction:column;flex:1;min-height:0;padding:10px 12px 12px;display:flex;overflow-y:auto}.hwnUuq_drawer[data-panel=feed] .hwnUuq_drawerBody{overflow:hidden}.hwnUuq_paneTitle{letter-spacing:.06em;text-transform:uppercase;color:var(--dsw-alias-label-tertiary);flex:none;align-items:center;gap:6px;margin:0 0 8px;font-size:10.5px;font-weight:600;display:flex}.hwnUuq_empty{color:var(--dsw-alias-label-tertiary);margin:2px 0;font-size:12px}.hwnUuq_blankTitle{text-align:center;color:var(--dsw-alias-label-secondary);margin:40px 0 4px;font-size:13px}.hwnUuq_blankHint{text-align:center;color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px}.hwnUuq_floor{border:1px solid var(--dsw-alias-border-l2);background:var(--team-page);border-radius:14px;width:100%;height:100%;min-height:300px;position:relative;overflow:hidden;container-type:size}.hwnUuq_shell{z-index:0;pointer-events:none;position:absolute;inset:0}.hwnUuq_shell>*{content:\"\";position:absolute;inset:0}.hwnUuq_ceiling{clip-path:polygon(0 0, 100% 0, calc(100% - var(--team-far-inset)) var(--team-wall-top), var(--team-far-inset) var(--team-wall-top));background: radial-gradient(ellipse 35% 55% at 35% 100%, color-mix(in srgb, var(--team-warm) 18%, transparent) 0%, transparent 70%), radial-gradient(ellipse 35% 55% at 65% 100%, color-mix(in srgb, var(--team-warm) 18%, transparent) 0%, transparent 70%), linear-gradient(180deg, color-mix(in srgb, var(--team-ink) 18%, var(--team-page)) 0%, color-mix(in srgb, var(--team-ink) 10%, var(--team-page)) 70%, color-mix(in srgb, var(--team-ink) 5%, var(--team-page)) 100%);box-shadow:inset 0 -3px 8px color-mix(in srgb, var(--team-ink) 25%, transparent)}.hwnUuq_wallBack{clip-path:polygon(var(--team-far-inset) var(--team-wall-top), calc(100% - var(--team-far-inset)) var(--team-wall-top), calc(100% - var(--team-far-inset)) var(--team-floor-top), var(--team-far-inset) var(--team-floor-top));background: radial-gradient(ellipse 20% 40% at 18% 0%, color-mix(in srgb, var(--team-warm) 16%, transparent) 0%, transparent 75%), radial-gradient(ellipse 22% 45% at 50% 0%, color-mix(in srgb, var(--team-warm) 20%, transparent) 0%, transparent 75%), radial-gradient(ellipse 20% 40% at 82% 0%, color-mix(in srgb, var(--team-warm) 16%, transparent) 0%, transparent 75%),  linear-gradient(90deg, color-mix(in srgb, var(--team-ink) 12%, transparent) 0%, transparent 6%, transparent 94%, color-mix(in srgb, var(--team-ink) 14%, transparent) 100%),  linear-gradient(180deg, transparent 0% 74%, color-mix(in srgb, var(--team-ink) 18%, transparent) 74% 75%, color-mix(in srgb, var(--dsw-static-neutral-00) 25%, transparent) 75% 75.5%, transparent 75.5% 100%),  repeating-linear-gradient(90deg, transparent 0, transparent 14px, color-mix(in srgb, var(--dsw-static-neutral-00) 12%, transparent) 14px, color-mix(in srgb, var(--dsw-static-neutral-00) 12%, transparent) 14.8px, color-mix(in srgb, var(--team-ink) 8%, transparent) 14.8px, color-mix(in srgb, var(--team-ink) 8%, transparent) 16px),  linear-gradient(180deg, color-mix(in srgb, var(--team-hue) 14%, var(--team-page)) 0%, color-mix(in srgb, var(--team-hue) 8%, var(--team-page)) 58%, color-mix(in srgb, var(--team-warm) 10%, var(--team-page)) 58% 74%, color-mix(in srgb, var(--team-hue) 12%, var(--team-page)) 74% 100%)}.hwnUuq_wallLeft,.hwnUuq_wallRight{background:color-mix(in srgb, var(--team-hue) 15%, var(--team-page))}.hwnUuq_wallLeft{clip-path:polygon(0 0, var(--team-far-inset) var(--team-wall-top), var(--team-far-inset) var(--team-floor-top), 0 100%);background:linear-gradient(92deg, color-mix(in srgb, var(--team-ink) 22%, var(--team-page)) 0%, color-mix(in srgb, var(--team-hue) 14%, var(--team-page)) 100%);box-shadow:inset -4px 0 10px color-mix(in srgb, var(--team-ink) 20%, transparent)}.hwnUuq_wallRight{clip-path:polygon(100% 0, calc(100% - var(--team-far-inset)) var(--team-wall-top), calc(100% - var(--team-far-inset)) var(--team-floor-top), 100% 100%);background:linear-gradient(88deg, color-mix(in srgb, var(--team-hue) 12%, var(--team-page)) 0%, color-mix(in srgb, var(--team-ink) 25%, var(--team-page)) 100%);box-shadow:inset 4px 0 12px color-mix(in srgb, var(--team-ink) 30%, transparent)}.hwnUuq_floorPlane{clip-path:polygon(0 100%, 100% 100%, calc(100% - var(--team-far-inset)) var(--team-floor-top), var(--team-far-inset) var(--team-floor-top));background: radial-gradient(ellipse 32% 38% at 30% 64%, color-mix(in srgb, var(--team-warm) 26%, transparent) 0, transparent 72%), radial-gradient(ellipse 32% 38% at 64% 64%, color-mix(in srgb, var(--team-warm) 26%, transparent) 0, transparent 72%),  repeating-linear-gradient(90deg, transparent 0, transparent 64px, color-mix(in srgb, var(--team-ink) 7%, transparent) 64px, color-mix(in srgb, var(--team-ink) 7%, transparent) 65px),  linear-gradient(180deg, transparent 0 27.4%, color-mix(in srgb, var(--team-warm) 36%, transparent) 27.4% 27.6%, transparent 27.6% 32.2%, color-mix(in srgb, var(--team-warm) 36%, transparent) 32.2% 32.5%, transparent 32.5% 37.6%, color-mix(in srgb, var(--team-warm) 36%, transparent) 37.6% 37.9%, transparent 37.9% 43.5%, color-mix(in srgb, var(--team-warm) 36%, transparent) 43.5% 43.9%, transparent 43.9% 50.2%, color-mix(in srgb, var(--team-warm) 36%, transparent) 50.2% 50.6%, transparent 50.6% 57.7%, color-mix(in srgb, var(--team-warm) 36%, transparent) 57.7% 58.2%, transparent 58.2% 66.2%, color-mix(in srgb, var(--team-warm) 36%, transparent) 66.2% 66.8%, transparent 66.8% 75.8%, color-mix(in srgb, var(--team-warm) 36%, transparent) 75.8% 76.5%, transparent 76.5% 87%, color-mix(in srgb, var(--team-warm) 36%, transparent) 87% 87.8%, transparent 87.8% 100%), linear-gradient(180deg, color-mix(in srgb, var(--team-warm) 15%, var(--team-page)) 0, color-mix(in srgb, var(--team-warm) 22%, var(--team-page)) 100%)}.hwnUuq_skirting{clip-path:polygon(var(--team-far-inset) var(--team-floor-top), calc(100% - var(--team-far-inset)) var(--team-floor-top), calc(100% - var(--team-far-inset)) calc(var(--team-floor-top) + 1.8%), var(--team-far-inset) calc(var(--team-floor-top) + 1.8%));background:linear-gradient(180deg, color-mix(in srgb, var(--team-page) 65%, var(--team-ink)) 0% 25%, color-mix(in srgb, var(--team-ink) 24%, var(--team-page)) 25% 65%, color-mix(in srgb, var(--team-ink) 45%, var(--team-page)) 65% 100%);box-shadow:0 2px 6px color-mix(in srgb, var(--team-ink) 35%, transparent)}.hwnUuq_wallLeft:after,.hwnUuq_wallRight:after{content:\"\";background:color-mix(in srgb, var(--team-ink) 28%, var(--team-page));position:absolute;inset:0}.hwnUuq_wallLeft:after{clip-path:polygon(0 100%, var(--team-far-inset) var(--team-floor-top), var(--team-far-inset) calc(var(--team-floor-top) + 1.8%), 0 calc(100% + 1.8%))}.hwnUuq_wallRight:after{clip-path:polygon(100% 100%, calc(100% - var(--team-far-inset)) var(--team-floor-top), calc(100% - var(--team-far-inset)) calc(var(--team-floor-top) + 1.8%), 100% calc(100% + 1.8%))}.hwnUuq_wall{--team-unit:clamp(84px, 25cqh, 192px);inset:var(--team-wall-top) var(--team-far-inset) calc(100% - var(--team-floor-top)) var(--team-far-inset);z-index:1;pointer-events:none;position:absolute}.hwnUuq_wall>*{position:absolute;transform:translate(-50%)}.hwnUuq_window{width:calc(var(--team-unit) * .64);height:68%;filter:drop-shadow(0 6px 14px var(--dsw-alias-bg-mask-2));top:10%}.hwnUuq_pane{box-shadow:inset 0 0 0 2.5px color-mix(in srgb, var(--team-ink) 40%, var(--team-page)), inset 0 -8px 16px color-mix(in srgb, var(--team-hue) 45%, transparent);border-radius:3px;position:absolute;inset:0;overflow:hidden}.hwnUuq_sky{background:linear-gradient(180deg, color-mix(in srgb, var(--team-hue) 26%, var(--team-page)) 0%, color-mix(in srgb, var(--team-warm) 24%, var(--team-page)) 65%, color-mix(in srgb, var(--team-warm) 42%, var(--team-page)) 100%);position:absolute;inset:0}.hwnUuq_cloud{background:color-mix(in srgb, var(--team-page) 82%, transparent);border-radius:50%;animation:42s linear infinite hwnUuq_team-drift;position:absolute}.hwnUuq_cloud[data-cloud=near]{width:46%;height:16%;box-shadow:26% -60% 0 -4% color-mix(in srgb, var(--team-page) 86%, transparent), 62% -20% 0 -2% color-mix(in srgb, var(--team-page) 86%, transparent);top:14%;left:-40%}.hwnUuq_cloud[data-cloud=far]{opacity:.72;width:30%;height:9%;animation-duration:71s;animation-delay:-24s;top:32%;left:-30%}.hwnUuq_sea{background:repeating-linear-gradient(180deg, color-mix(in srgb, var(--team-page) 32%, transparent) 0 1px, transparent 1px 5px), linear-gradient(180deg, color-mix(in srgb, var(--team-hue) 62%, var(--team-page)) 0%, color-mix(in srgb, var(--team-hue) 84%, var(--team-page)) 100%);position:absolute;inset:52% 0 0}.hwnUuq_sail{background:color-mix(in srgb, var(--team-page) 95%, transparent);clip-path:polygon(50% 0,100% 82%,0 82%);width:9%;height:9%;animation:96s linear infinite hwnUuq_team-sail;position:absolute;top:47%;left:24%}.hwnUuq_reveal{z-index:-1;background:linear-gradient(100deg, color-mix(in srgb, var(--team-ink) 26%, var(--team-page)) 0 46%, color-mix(in srgb, var(--team-ink) 12%, var(--team-page)) 46% 100%);box-shadow:inset 0 4px 8px color-mix(in srgb, var(--team-ink) 35%, transparent), 0 4px 10px var(--dsw-alias-bg-mask-2);border-radius:4px;position:absolute;inset:-6% -7%}.hwnUuq_mullion{background:linear-gradient(90deg, color-mix(in srgb, var(--team-ink) 34%, var(--team-page)) 0 50%, color-mix(in srgb, var(--team-page) 65%, var(--team-ink)) 50% 100%) no-repeat 50% 0 / 3px 100%, linear-gradient(180deg, color-mix(in srgb, var(--team-ink) 34%, var(--team-page)) 0 50%, color-mix(in srgb, var(--team-page) 65%, var(--team-ink)) 50% 100%) no-repeat 0 46% / 100% 3px;position:absolute;inset:0}.hwnUuq_sillTop{background:color-mix(in srgb, var(--team-page) 68%, var(--team-surface-3));clip-path:polygon(4% 0,100% 0,96% 100%,0 100%);height:5.5%;box-shadow:inset 0 1px 0 color-mix(in srgb, var(--dsw-static-neutral-00) 40%, transparent);position:absolute;top:100%;left:-11%;right:-11%}.hwnUuq_sill{background:linear-gradient(180deg, var(--team-surface-3) 0 40%, color-mix(in srgb, var(--team-ink) 24%, var(--team-page)) 40% 100%);clip-path:polygon(0 0,100% 0,96% 100%,4% 100%);height:6.5%;box-shadow:0 3px 6px color-mix(in srgb, var(--team-ink) 30%, transparent);border-radius:0 0 2px 2px;position:absolute;top:105.5%;left:-11%;right:-11%}.hwnUuq_beam{background:linear-gradient(180deg, color-mix(in srgb, var(--team-warm) 38%, transparent) 0%, color-mix(in srgb, var(--team-warm) 18%, transparent) 50%, transparent 100%);clip-path:polygon(30% 0,70% 0,100% 100%,0 100%);opacity:.7;width:160%;height:320%;position:absolute;top:100%;left:-30%}.hwnUuq_whiteboard{width:calc(var(--team-unit) * .78);border:3px solid color-mix(in srgb, var(--team-ink) 30%, var(--team-page));background:linear-gradient(160deg, color-mix(in srgb, var(--team-page) 97%, var(--team-hue)) 0 58%, color-mix(in srgb, var(--team-page) 90%, var(--team-hue)) 58% 100%);height:65%;box-shadow:0 6px 16px var(--dsw-alias-bg-mask-2), inset 0 1.5px 0 var(--dsw-static-neutral-00), inset 0 0 0 1px color-mix(in srgb, var(--team-ink) 12%, transparent);border-radius:4px;top:11%}.hwnUuq_boardGhost{background:color-mix(in srgb, var(--team-ink) 5%, transparent);border-radius:40% 60% 55% 45%;position:absolute;inset:14% 10% 30%}.hwnUuq_boardInk{background:linear-gradient(90deg, var(--team-hue) 0 60%, transparent 60%) no-repeat 0 4% / 100% 2.5px, linear-gradient(90deg, var(--dsw-alias-state-error-primary) 0 32%, transparent 32%) no-repeat 0 34% / 100% 2.5px, linear-gradient(90deg, var(--team-leaf) 0 76%, transparent 76%) no-repeat 0 64% / 100% 2.5px, linear-gradient(90deg, var(--team-hue) 0 100%, transparent 0) no-repeat 4% 84% / 24% 2.5px, linear-gradient(180deg, var(--team-hue) 0 100%, transparent 0) no-repeat 4% 84% / 2.5px 14%;opacity:.85;position:absolute;inset:14% 11%}.hwnUuq_boardNote{aspect-ratio:1;width:16%;box-shadow:1.5px 3.5px 6px var(--dsw-alias-bg-mask-2);border-radius:1.5px;position:absolute}.hwnUuq_boardNote[data-note=a]{background:color-mix(in srgb, var(--team-warm) 54%, var(--dsw-static-neutral-00));top:16%;right:9%;transform:rotate(-5deg)}.hwnUuq_boardNote[data-note=b]{background:color-mix(in srgb, var(--team-leaf) 42%, var(--dsw-static-neutral-00));top:52%;right:8%;transform:rotate(4deg)}.hwnUuq_boardTrayTop{background:color-mix(in srgb, var(--team-page) 56%, var(--dsw-static-neutral-400));clip-path:polygon(3% 0,100% 0,97% 100%,0 100%);height:4%;box-shadow:inset 0 1px 0 color-mix(in srgb, var(--dsw-static-neutral-00) 50%, transparent);position:absolute;top:100%;left:10%;right:10%}.hwnUuq_boardTray{background:linear-gradient(180deg, color-mix(in srgb, var(--team-ink) 20%, var(--team-page)) 0 34%, color-mix(in srgb, var(--team-ink) 36%, var(--team-page)) 34% 100%);clip-path:polygon(0 0,100% 0,97% 100%,3% 100%);height:5%;box-shadow:0 2px 5px var(--dsw-alias-bg-mask-2);border-radius:0 0 2px 2px;position:absolute;top:104%;left:10%;right:10%}.hwnUuq_boardPens{background:linear-gradient(90deg, var(--dsw-alias-state-error-primary) 0 30%, transparent 30% 36%, var(--team-hue) 36% 66%, transparent 66% 72%, var(--team-leaf) 72% 100%);border-radius:1px;width:36%;height:3%;position:absolute;top:101%;left:16%}.hwnUuq_boardEraser{background:linear-gradient(180deg, var(--dsw-static-neutral-300) 0 44%, color-mix(in srgb, var(--team-hue) 42%, var(--dsw-static-neutral-500)) 44% 100%);width:12%;height:3.8%;box-shadow:1px 1px 3px var(--dsw-alias-bg-mask-2);border-radius:1.5px;position:absolute;top:100.6%;right:16%}.hwnUuq_shelf{width:calc(var(--team-unit) * .52);height:calc(var(--team-unit) * .24);top:26%}.hwnUuq_plankTop{left:0;right:0;bottom:calc(var(--team-unit) * .04);height:calc(var(--team-unit) * .02);background:color-mix(in srgb, var(--team-warm) 34%, var(--dsw-static-neutral-200));clip-path:polygon(2% 0,100% 0,98% 100%,0 100%);position:absolute}.hwnUuq_plank{left:0;right:0;bottom:calc(var(--team-unit) * .02);height:calc(var(--team-unit) * .02);background:linear-gradient(180deg, color-mix(in srgb, var(--team-warm) 46%, var(--dsw-static-neutral-400)) 0 40%, color-mix(in srgb, var(--team-warm) 58%, var(--dsw-static-neutral-600)) 40% 100%);box-shadow:0 4px 8px var(--dsw-alias-bg-mask-2);clip-path:polygon(0 0,100% 0,98% 100%,2% 100%);border-radius:0 0 2px 2px;position:absolute}.hwnUuq_plankBracket{height:calc(var(--team-unit) * .024);background:linear-gradient(color-mix(in srgb, var(--team-ink) 36%, var(--team-page)) 0 0) no-repeat 4% 0 / 5% 100%, linear-gradient(color-mix(in srgb, var(--team-ink) 36%, var(--team-page)) 0 0) no-repeat 96% 0 / 5% 100%;clip-path:polygon(0 0,100% 0,84% 100%,16% 100%);position:absolute;bottom:0;left:10%;right:10%}.hwnUuq_books{left:6%;bottom:calc(var(--team-unit) * .055);width:60%;height:calc(var(--team-unit) * .13);background:linear-gradient(color-mix(in srgb, var(--team-hue) 68%, var(--dsw-static-neutral-600)) 0 0) no-repeat 0 0 / 12% 100%, linear-gradient(color-mix(in srgb, var(--dsw-alias-state-warn-primary) 72%, var(--dsw-static-neutral-500)) 0 0) no-repeat 15% 8% / 9% 92%, linear-gradient(color-mix(in srgb, var(--team-leaf) 74%, var(--dsw-static-neutral-500)) 0 0) no-repeat 27% 20% / 13% 80%, linear-gradient(color-mix(in srgb, var(--dsw-alias-state-error-primary) 66%, var(--dsw-static-neutral-600)) 0 0) no-repeat 43% 4% / 10% 96%, linear-gradient(color-mix(in srgb, var(--dsw-static-neutral-00) 76%, var(--dsw-static-neutral-400)) 0 0) no-repeat 56% 26% / 11% 74%, linear-gradient(color-mix(in srgb, var(--team-hue) 44%, var(--dsw-static-neutral-700)) 0 0) no-repeat 70% 12% / 8% 88%, linear-gradient(color-mix(in srgb, var(--dsw-alias-state-warn-primary) 44%, var(--dsw-static-neutral-700)) 0 0) no-repeat 81% 30% / 12% 70%;position:absolute}.hwnUuq_bookLeaning{left:45%;bottom:calc(var(--team-unit) * .055);width:5%;height:calc(var(--team-unit) * .11);transform-origin:50% 100%;background:color-mix(in srgb, var(--team-leaf) 54%, var(--dsw-static-neutral-700));position:absolute;transform:rotate(15deg)}.hwnUuq_trophy{right:6%;bottom:calc(var(--team-unit) * .055);width:10%;height:calc(var(--team-unit) * .08);background:linear-gradient(color-mix(in srgb, var(--dsw-alias-state-warn-primary) 80%, var(--dsw-static-neutral-500)) 0 0) no-repeat 50% 100% / 100% 22%, linear-gradient(color-mix(in srgb, var(--dsw-alias-state-warn-primary) 68%, var(--dsw-static-neutral-300)) 0 0) no-repeat 50% 60% / 26% 40%, radial-gradient(ellipse 60% 100% at 50% 0, color-mix(in srgb, var(--dsw-alias-state-warn-primary) 74%, var(--dsw-static-neutral-300)) 0 96%, transparent 98%) no-repeat 50% 0 / 100% 58%;position:absolute}.hwnUuq_shelfPlant{right:18%;bottom:calc(var(--team-unit) * .05);width:calc(var(--team-unit) * .14);height:calc(var(--team-unit) * .18);position:absolute}.hwnUuq_clockProp{width:calc(var(--team-unit) * .22);aspect-ratio:1;background:radial-gradient(circle at 50% 50%, var(--team-page) 0 76%, transparent 78%), linear-gradient(150deg, color-mix(in srgb, var(--team-page) 50%, var(--team-ink)) 0, color-mix(in srgb, var(--team-ink) 36%, var(--team-page)) 100%);box-shadow:1px 3px 6px var(--dsw-alias-bg-mask-2);border-radius:50%;top:18%}.hwnUuq_clockTicks{background:conic-gradient(from 0deg, var(--dsw-alias-label-tertiary) 0 2deg, transparent 2deg 28deg, var(--dsw-alias-label-tertiary) 28deg 30deg, transparent 30deg 58deg, var(--dsw-alias-label-tertiary) 58deg 60deg, transparent 60deg 88deg, var(--dsw-alias-label-tertiary) 88deg 90deg, transparent 90deg);border-radius:50%;position:absolute;inset:14%;-webkit-mask:radial-gradient(circle,#0000 0 82%,#000 84%);mask:radial-gradient(circle,#0000 0 82%,#000 84%)}.hwnUuq_clockHand{background:var(--dsw-alias-label-secondary);transform-origin:50% 100%;border-radius:1px;width:2px;margin-left:-1px;position:absolute;top:50%;left:50%}.hwnUuq_clockHand[data-hand=hour]{height:26%;transform:translateY(-100%)rotate(-55deg)}.hwnUuq_clockHand[data-hand=minute]{height:36%;transform:translateY(-100%)rotate(55deg)}.hwnUuq_clockHand[data-hand=second]{background:var(--dsw-alias-state-error-primary);width:1.1px;height:38%;margin-left:-.55px;animation:60s steps(60,end) infinite hwnUuq_team-tick;transform:translateY(-100%)rotate(0)}.hwnUuq_clockPin{aspect-ratio:1;background:var(--dsw-alias-label-secondary);border-radius:50%;width:12%;margin:-6% 0 0 -6%;position:absolute;top:50%;left:50%}.hwnUuq_calendar{width:calc(var(--team-unit) * .23);background:var(--dsw-static-neutral-00);height:42%;box-shadow:1px 3px 6px var(--dsw-alias-bg-mask-2);border-radius:2px;top:19%;overflow:hidden}.hwnUuq_calendarHead{background:color-mix(in srgb, var(--team-hue) 56%, var(--team-page));height:30%;position:absolute;top:0;left:0;right:0}.hwnUuq_calendarGrid{background:repeating-linear-gradient(90deg, var(--dsw-static-neutral-300) 0 1px, transparent 1px 20%), repeating-linear-gradient(180deg, var(--dsw-static-neutral-300) 0 1px, transparent 1px 25%);position:absolute;inset:34% 10% 10%}.hwnUuq_airConditioner{width:calc(var(--team-unit) * .56);height:35%;filter:drop-shadow(0 4px 10px var(--dsw-alias-bg-mask-2));top:6%}.hwnUuq_acSvg{width:100%;height:100%;display:block;overflow:visible}.hwnUuq_acBody{fill:color-mix(in srgb, var(--team-page) 82%, var(--dsw-static-neutral-00))}.hwnUuq_acEdge{fill:none;stroke:color-mix(in srgb, var(--team-ink) 16%, transparent);stroke-width:.8px}.hwnUuq_acGrille{fill:none;stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.7px;stroke-linecap:round}.hwnUuq_acSeam{fill:none;stroke:color-mix(in srgb, var(--team-ink) 12%, transparent);stroke-width:.7px}.hwnUuq_acLouver{fill:color-mix(in srgb, var(--team-ink) 14%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 18%, transparent);stroke-width:.6px}.hwnUuq_acTemp{fill:color-mix(in srgb, var(--team-hue) 85%, var(--dsw-static-neutral-00));font-family:monospace;font-size:8px;font-weight:700}.hwnUuq_acLedPower{fill:var(--team-leaf)}.hwnUuq_acLedCool{fill:var(--team-hue)}.hwnUuq_acBreeze{fill:none;stroke:color-mix(in srgb, var(--team-hue) 45%, transparent);stroke-width:1px;stroke-linecap:round;animation:3.8s ease-in-out infinite hwnUuq_team-breeze}.hwnUuq_hanger{width:calc(var(--team-unit) * .22);height:calc(var(--team-unit) * .34);top:24%}.hwnUuq_hangerBracket{background:color-mix(in srgb, var(--team-ink) 34%, var(--team-page));border-radius:0 0 40% 40%;width:46%;height:16%;margin-left:-23%;position:absolute;top:0;left:50%}.hwnUuq_hangerPlant{width:100%;height:92%;position:absolute;inset:8% 0 0}.hwnUuq_pendant{--team-unit:clamp(84px, 25cqh, 192px);top:var(--team-wall-top);z-index:2;width:calc(var(--team-unit) * .22);height:calc(var(--team-floor-top) - var(--team-wall-top));pointer-events:none;position:absolute;transform:translate(-50%)}.hwnUuq_pendantSvg{width:100%;height:100%;display:block;overflow:visible}.hwnUuq_pendantRose{fill:color-mix(in srgb, var(--team-warm) 65%, var(--dsw-static-neutral-500));stroke:color-mix(in srgb, var(--team-ink) 24%, transparent);stroke-width:.5px}.hwnUuq_pendantFlex{fill:none;stroke:color-mix(in srgb, var(--team-ink) 54%, var(--team-page));stroke-width:1.8px;stroke-linecap:round}.hwnUuq_pendantNeck{fill:color-mix(in srgb, var(--team-warm) 78%, var(--dsw-static-neutral-400));stroke:color-mix(in srgb, var(--team-ink) 24%, transparent);stroke-width:.5px}.hwnUuq_pendantShade{fill:color-mix(in srgb, var(--team-warm) 52%, var(--dsw-static-neutral-600));stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.8px;filter:drop-shadow(0 4px 6px var(--dsw-alias-bg-mask-2))}.hwnUuq_pendantMouth{fill:color-mix(in srgb, var(--team-warm) 74%, var(--dsw-static-neutral-200));stroke:color-mix(in srgb, var(--team-warm) 82%, var(--dsw-static-neutral-00));stroke-width:.8px}.hwnUuq_pendantBulb{fill:color-mix(in srgb, var(--dsw-static-neutral-00) 90%, var(--team-warm));filter:blur(.8px)}.hwnUuq_pendantFilament{fill:var(--dsw-static-neutral-00);opacity:.95}.hwnUuq_pendantGlow{pointer-events:none;animation:6.5s ease-in-out infinite hwnUuq_team-glow}.hwnUuq_cat{z-index:40;pointer-events:none;opacity:0;width:clamp(36px,9.5cqh,78px);filter:drop-shadow(2px 5px 4px var(--dsw-alias-bg-mask-1));animation:47s linear infinite hwnUuq_team-prowl;position:absolute;bottom:3%;left:0}.hwnUuq_catSvg{width:100%;height:100%;display:block;overflow:visible}.hwnUuq_catBody{fill:color-mix(in srgb, var(--team-warm) 50%, var(--dsw-static-neutral-600))}.hwnUuq_catLeg,.hwnUuq_catTail{fill:color-mix(in srgb, var(--team-warm) 55%, var(--dsw-static-neutral-700))}.hwnUuq_catTailTip{fill:color-mix(in srgb, var(--dsw-static-neutral-00) 80%, var(--team-warm))}.hwnUuq_catEar{fill:color-mix(in srgb, var(--team-warm) 40%, var(--dsw-static-neutral-700))}.hwnUuq_catEarInner{fill:color-mix(in srgb, var(--dsw-alias-state-error-primary) 46%, var(--dsw-static-neutral-00))}.hwnUuq_catEye{fill:var(--team-leaf)}.hwnUuq_catPupil{fill:var(--dsw-static-neutral-900)}.hwnUuq_catGlint{fill:var(--dsw-static-neutral-00)}.hwnUuq_catNose{fill:color-mix(in srgb, var(--dsw-alias-state-error-primary) 55%, var(--dsw-static-neutral-00))}.hwnUuq_catStripe{fill:none;stroke:color-mix(in srgb, var(--team-ink) 26%, transparent);stroke-width:2.2px;stroke-linecap:round}.hwnUuq_catWhisker{fill:none;stroke:color-mix(in srgb, var(--team-page) 78%, transparent);stroke-width:.85px;stroke-linecap:round}.hwnUuq_treadmill{--team-unit:clamp(84px, 25cqh, 192px);width:calc(var(--team-unit) * .78);height:calc(var(--team-unit) * .85);transform:translate(-50%, -100%) scale(var(--team-scale,1));transform-origin:50% 100%;z-index:calc(6 + var(--team-depth,0));pointer-events:none;filter:drop-shadow(3px 8px 8px var(--dsw-alias-bg-mask-1));position:absolute}.hwnUuq_treadmillSvg{width:100%;height:100%;display:block;overflow:visible}.hwnUuq_treadmillBase{fill:color-mix(in srgb, var(--team-ink) 22%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.8px}.hwnUuq_treadmillHood{fill:color-mix(in srgb, var(--team-ink) 46%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 24%, transparent);stroke-width:.8px}.hwnUuq_treadmillHoodSheen{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 45%, transparent);stroke-width:1.2px;stroke-linecap:round}.hwnUuq_treadmillHoodVent{fill:none;stroke:color-mix(in srgb, var(--team-ink) 28%, transparent);stroke-width:.8px;stroke-linecap:round}.hwnUuq_treadmillBelt{stroke:color-mix(in srgb, var(--team-ink) 30%, transparent);stroke-width:.6px}.hwnUuq_treadmillTread{fill:none;stroke:color-mix(in srgb, var(--team-ink) 18%, transparent);stroke-width:.8px}.hwnUuq_treadmillRail{fill:color-mix(in srgb, var(--team-warm) 80%, var(--dsw-static-neutral-00))}.hwnUuq_treadmillPost{fill:none;stroke:color-mix(in srgb, var(--team-ink) 45%, var(--team-page));stroke-width:3.2px;stroke-linecap:round}.hwnUuq_treadmillArm{fill:color-mix(in srgb, var(--team-ink) 40%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.7px}.hwnUuq_treadmillSensor{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 70%, var(--team-ink));stroke-width:1.5px;stroke-linecap:round}.hwnUuq_treadmillConsole{fill:color-mix(in srgb, var(--team-ink) 50%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 25%, transparent);stroke-width:.8px}.hwnUuq_treadmillScreen{fill:color-mix(in srgb, var(--dsw-static-neutral-1000) 90%, var(--team-hue))}.hwnUuq_treadmillMetrics{fill:none;stroke:var(--team-hue);stroke-width:1.2px;stroke-linecap:round}.hwnUuq_treadmillStopKey{fill:var(--dsw-alias-state-error-primary)}.hwnUuq_treadmillKeyCord{fill:none;stroke:var(--dsw-alias-state-error-primary);stroke-width:.8px}.hwnUuq_treadmillBottle{fill:var(--team-hue);stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 50%, transparent);stroke-width:.5px}.hwnUuq_utility{--team-unit:clamp(84px, 25cqh, 192px);width:calc(var(--team-unit) * .58);height:calc(var(--team-unit) * .85);transform:translate(-50%, -100%) scale(var(--team-scale,1));transform-origin:50% 100%;z-index:calc(6 + var(--team-depth,0));pointer-events:none;position:absolute}.hwnUuq_utility>*{display:block;position:absolute}.hwnUuq_utilityCabinet{width:78%;height:96%;bottom:0;left:-32%}.hwnUuq_utilityPrinter{width:94%;height:50%;bottom:0;left:36%}.hwnUuq_utilityCoffee{width:58%;height:50%;bottom:46%;left:50%}.hwnUuq_lounge{--team-unit:clamp(84px, 25cqh, 192px);--team-fabric:color-mix(in srgb, var(--team-warm) 52%, var(--dsw-static-neutral-600));--team-fabric-lit:color-mix(in srgb, var(--team-warm) 64%, var(--dsw-static-neutral-300));--team-fabric-dark:color-mix(in srgb, var(--team-ink) 24%, var(--team-fabric));z-index:5;pointer-events:none;position:absolute;inset:0}.hwnUuq_lounge>*{position:absolute;transform:translate(-50%,-100%)}.hwnUuq_rug{width:calc(var(--team-unit) * 2.1);height:calc(var(--team-unit) * 1.05);transform:translate(-50%, -50%) scale(var(--team-scale,1));transform-origin:50%;background:repeating-radial-gradient(ellipse at 50% 50%, transparent 0 84%, color-mix(in srgb, var(--team-hue) 14%, transparent) 84% 88%, transparent 88% 94%, color-mix(in srgb, var(--team-hue) 20%, transparent) 94% 97%, transparent 97% 100%), radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--team-hue) 6%, var(--team-page)) 0 56%, color-mix(in srgb, var(--team-hue) 12%, var(--team-page)) 58% 100%);box-shadow:0 4px 12px var(--dsw-alias-bg-mask-1);border-radius:50%}.hwnUuq_sofa{width:calc(var(--team-unit) * 1.55);height:calc(var(--team-unit) * .95);transform:translate(-50%, -100%) scale(var(--team-scale,1));transform-origin:50% 100%;pointer-events:none;z-index:calc(5 + var(--team-depth,0))}.hwnUuq_sofaSvg{width:100%;height:100%;filter:drop-shadow(3px 8px 8px var(--dsw-alias-bg-mask-2));display:block;overflow:visible}.hwnUuq_sofaLeg{fill:color-mix(in srgb, var(--team-warm) 42%, var(--dsw-static-neutral-700))}.hwnUuq_sofaBack{stroke:color-mix(in srgb, var(--team-ink) 18%, transparent);stroke-width:.8px}.hwnUuq_sofaBackTop{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 40%, transparent);stroke-width:1.2px;stroke-linecap:round}.hwnUuq_sofaSeam{fill:none;stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:1.2px;stroke-linecap:round}.hwnUuq_sofaButton{fill:color-mix(in srgb, var(--team-ink) 35%, var(--team-fabric))}.hwnUuq_sofaSeat{stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.8px}.hwnUuq_sofaSeatSeam{fill:none;stroke:color-mix(in srgb, var(--team-ink) 18%, transparent);stroke-width:1.2px}.hwnUuq_sofaSeatPiping{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 30%, transparent);stroke-width:.8px}.hwnUuq_sofaArm{fill:var(--team-fabric);stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.8px}.hwnUuq_sofaArmTop{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 45%, transparent);stroke-width:1.4px;stroke-linecap:round}.hwnUuq_sofaPillowWarm{fill:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 70%, var(--dsw-static-neutral-600));stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.7px}.hwnUuq_sofaPillowCool{fill:color-mix(in srgb, var(--team-hue) 70%, var(--dsw-static-neutral-600));stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.7px}.hwnUuq_sofaPillowLine{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 35%, transparent);stroke-width:1px}.hwnUuq_table{width:calc(var(--team-unit) * 1.05);height:calc(var(--team-unit) * .58);transform:translate(-50%, -100%) scale(var(--team-scale,1));transform-origin:50% 100%;pointer-events:none;z-index:calc(6 + var(--team-depth,0))}.hwnUuq_tableSvg{width:100%;height:100%;filter:drop-shadow(2px 6px 6px var(--dsw-alias-bg-mask-2));display:block;overflow:visible}.hwnUuq_tableLeg{fill:color-mix(in srgb, var(--team-warm) 36%, var(--dsw-static-neutral-700))}.hwnUuq_tableTop{stroke:color-mix(in srgb, var(--team-ink) 18%, transparent);stroke-width:.8px}.hwnUuq_tableSurface{fill:color-mix(in srgb, var(--team-warm) 45%, var(--dsw-static-neutral-00));stroke:color-mix(in srgb, var(--team-ink) 14%, transparent);stroke-width:.6px}.hwnUuq_tableEdge{fill:color-mix(in srgb, var(--team-warm) 55%, var(--dsw-static-neutral-600))}.hwnUuq_tableGrain{fill:none;stroke:color-mix(in srgb, var(--team-page) 30%, transparent);stroke-width:.8px}.hwnUuq_tableMagazine{fill:color-mix(in srgb, var(--team-hue) 80%, var(--dsw-static-neutral-00));stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.6px}.hwnUuq_tableMagPage{fill:none;stroke:var(--dsw-static-neutral-00);stroke-width:.8px}.hwnUuq_tableSaucer{fill:var(--dsw-static-neutral-200)}.hwnUuq_tableCup{fill:var(--dsw-static-neutral-00);stroke:var(--dsw-static-neutral-400);stroke-width:.6px}.hwnUuq_tableMugHandle{fill:none;stroke:var(--dsw-static-neutral-400);stroke-width:1px}.hwnUuq_lamp{width:calc(var(--team-unit) * .44);height:calc(var(--team-unit) * 1.15);transform:translate(-50%, -100%) scale(var(--team-scale,1));transform-origin:50% 100%;pointer-events:none;z-index:calc(5 + var(--team-depth,0))}.hwnUuq_lampSvg{width:100%;height:100%;display:block;overflow:visible}.hwnUuq_lampBeam{fill:color-mix(in srgb, var(--team-warm) 22%, transparent)}.hwnUuq_lampBase{fill:color-mix(in srgb, var(--team-ink) 30%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.6px}.hwnUuq_lampStem{fill:none;stroke:color-mix(in srgb, var(--team-warm) 75%, var(--dsw-static-neutral-400));stroke-width:2.2px;stroke-linecap:round}.hwnUuq_lampFinial{fill:color-mix(in srgb, var(--team-warm) 85%, var(--dsw-static-neutral-400))}.hwnUuq_lampShade{fill:color-mix(in srgb, var(--team-warm) 45%, var(--dsw-static-neutral-200));stroke:color-mix(in srgb, var(--team-ink) 18%, transparent);stroke-width:.8px}.hwnUuq_lampShadeTop,.hwnUuq_lampShadeBottom{fill:color-mix(in srgb, var(--team-warm) 65%, var(--dsw-static-neutral-100));stroke:color-mix(in srgb, var(--team-warm) 80%, var(--dsw-static-neutral-00));stroke-width:.8px}.hwnUuq_lampBulb{fill:var(--dsw-static-neutral-00);filter:blur(.8px);animation:9.2s ease-in-out infinite hwnUuq_team-glow}.hwnUuq_plant{width:calc(var(--team-unit) * .72);height:calc(var(--team-unit) * .96);transform:translate(-50%, -100%) scale(var(--team-scale,1));transform-origin:50% 100%;pointer-events:none;z-index:calc(5 + var(--team-depth,0));filter:drop-shadow(3px 8px 6px var(--dsw-alias-bg-mask-1))}.hwnUuq_cooler{--team-cooler:var(--team-surface-2);--team-cooler-lit:color-mix(in srgb, var(--team-page) 34%, var(--team-cooler));--team-cooler-dark:color-mix(in srgb, var(--team-ink) 18%, var(--team-page));--team-cooler-bottle:color-mix(in srgb, var(--team-hue) 34%, var(--team-page));--team-cooler-bottle-lit:color-mix(in srgb, var(--team-page) 30%, var(--team-cooler-bottle));--team-cooler-bottle-dark:color-mix(in srgb, var(--team-hue) 66%, var(--team-page));--team-cooler-water:color-mix(in srgb, var(--team-hue) 62%, var(--team-page));--team-cooler-water-lit:color-mix(in srgb, var(--team-hue) 36%, var(--team-page));width:calc(var(--team-unit) * .62);height:calc(var(--team-unit) * .88);transform:translate(-50%, -100%) scale(var(--team-scale,1));transform-origin:50% 100%;pointer-events:none;z-index:calc(5 + var(--team-depth,0));filter:drop-shadow(3px 8px 6px var(--dsw-alias-bg-mask-1))}.hwnUuq_coolerSvg{width:100%;height:100%;display:block;overflow:visible}.hwnUuq_coolerCabinet{stroke:none}.hwnUuq_coolerCabinetEdge{fill:none;stroke:color-mix(in srgb, var(--team-ink) 16%, transparent);stroke-width:1px}.hwnUuq_coolerPanel{fill:color-mix(in srgb, var(--team-ink) 6%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 12%, transparent);stroke-width:.8px}.hwnUuq_coolerPanelDepth{fill:none;stroke:color-mix(in srgb, var(--team-ink) 14%, transparent);stroke-width:.7px}.hwnUuq_coolerDoorSeam{fill:none;stroke:color-mix(in srgb, var(--team-ink) 12%, transparent);stroke-width:.8px;stroke-linecap:round}.hwnUuq_coolerTap{fill:none;stroke:color-mix(in srgb, var(--team-ink) 42%, var(--team-page));stroke-width:2.2px;stroke-linecap:round}.hwnUuq_coolerFaucet{fill:none;stroke:color-mix(in srgb, var(--team-ink) 50%, var(--team-page));stroke-width:1.6px;stroke-linecap:round}.hwnUuq_coolerHandleWarm{fill:var(--dsw-alias-state-error-primary);stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 40%, transparent);stroke-width:.5px}.hwnUuq_coolerHandleCool{fill:var(--team-hue);stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 40%, transparent);stroke-width:.5px}.hwnUuq_coolerDrip{fill:color-mix(in srgb, var(--team-ink) 22%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 26%, transparent);stroke-width:.6px}.hwnUuq_coolerDripWell{fill:color-mix(in srgb, var(--team-hue) 28%, var(--team-page))}.hwnUuq_coolerGrille{fill:none;stroke:color-mix(in srgb, var(--team-ink) 30%, transparent);stroke-width:.6px;stroke-linecap:round}.hwnUuq_coolerLedPower{fill:var(--team-leaf);box-shadow:0 0 2px var(--team-leaf)}.hwnUuq_coolerLedCold{fill:var(--team-hue);box-shadow:0 0 2px var(--team-hue)}.hwnUuq_coolerBottle,.hwnUuq_coolerNeck,.hwnUuq_coolerWater{stroke:color-mix(in srgb, var(--team-hue) 44%, transparent);stroke-width:.7px}.hwnUuq_coolerRib{fill:none;stroke:color-mix(in srgb, var(--team-page) 36%, transparent);stroke-width:.8px;stroke-linecap:round}.hwnUuq_coolerCap{fill:color-mix(in srgb, var(--team-hue) 70%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 18%, transparent);stroke-width:.6px}.hwnUuq_coolerCapTop{fill:color-mix(in srgb, var(--team-page) 50%, var(--team-hue))}.hwnUuq_coolerShine{fill:color-mix(in srgb, var(--team-page) 52%, transparent)}.hwnUuq_coolerShineRim{fill:none;stroke:color-mix(in srgb, var(--team-page) 36%, transparent);stroke-width:.9px;stroke-linecap:round}.hwnUuq_coolerBubble{fill:color-mix(in srgb, var(--team-page) 64%, transparent);transform-box:fill-box;transform-origin:50%;animation:6.4s ease-in infinite hwnUuq_team-bubble}.hwnUuq_propSvg{width:100%;height:100%;filter:drop-shadow(2px 5px 5px var(--dsw-alias-bg-mask-1));display:block;overflow:visible}.hwnUuq_propShade{fill:color-mix(in srgb, var(--team-ink) 12%, transparent)}.hwnUuq_propFront{fill:var(--team-surface-2)}.hwnUuq_propTop{fill:color-mix(in srgb, var(--team-page) 44%, var(--team-surface-2))}.hwnUuq_propSide{fill:color-mix(in srgb, var(--team-ink) 16%, var(--team-surface-2))}.hwnUuq_propSeam{fill:none;stroke:color-mix(in srgb, var(--team-ink) 16%, transparent);stroke-width:1px}.hwnUuq_propInset{fill:color-mix(in srgb, var(--team-ink) 10%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 14%, transparent);stroke-width:.8px}.hwnUuq_propScannerHandle{fill:none;stroke:color-mix(in srgb, var(--team-ink) 34%, transparent);stroke-width:1.2px;stroke-linecap:round}.hwnUuq_propScreen{fill:color-mix(in srgb, var(--team-hue) 74%, var(--dsw-static-neutral-900));stroke:color-mix(in srgb, var(--team-ink) 24%, transparent);stroke-width:.6px}.hwnUuq_propScreenGlint{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 80%, transparent);stroke-width:.8px;stroke-linecap:round}.hwnUuq_propTray{fill:color-mix(in srgb, var(--team-ink) 20%, var(--team-page))}.hwnUuq_propPaper{fill:var(--dsw-static-neutral-00);stroke:var(--dsw-static-neutral-300);stroke-width:.7px}.hwnUuq_propPaperLine{fill:none;stroke:var(--dsw-static-neutral-400);stroke-width:.6px}.hwnUuq_propTextLines{fill:none;stroke:color-mix(in srgb, var(--team-ink) 34%, transparent);stroke-width:.8px;stroke-linecap:round}.hwnUuq_propDrawerHandle{fill:color-mix(in srgb, var(--team-ink) 44%, var(--team-page))}.hwnUuq_propPaperGauge{fill:color-mix(in srgb, var(--team-page) 80%, var(--team-ink));stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.5px}.hwnUuq_propHandle{fill:color-mix(in srgb, var(--team-ink) 42%, var(--team-page))}.hwnUuq_propLabel{fill:color-mix(in srgb, var(--team-warm) 42%, var(--dsw-static-neutral-00))}.hwnUuq_propLabelLine{fill:none;stroke:color-mix(in srgb, var(--team-ink) 30%, transparent);stroke-width:.6px}.hwnUuq_propFolder{fill:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 58%, var(--dsw-static-neutral-300))}.hwnUuq_propFolderTab{fill:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 68%, var(--dsw-static-neutral-100))}.hwnUuq_propBox{fill:color-mix(in srgb, var(--team-warm) 36%, var(--dsw-static-neutral-300))}.hwnUuq_propBoxTop{fill:color-mix(in srgb, var(--team-warm) 24%, var(--dsw-static-neutral-200))}.hwnUuq_propBoxHole{fill:color-mix(in srgb, var(--team-ink) 32%, var(--team-page))}.hwnUuq_propGlass{fill:color-mix(in srgb, var(--team-page) 64%, transparent);stroke:color-mix(in srgb, var(--team-ink) 18%, transparent);stroke-width:.7px}.hwnUuq_propBean{fill:color-mix(in srgb, var(--dsw-static-amber-700) 80%, var(--dsw-static-neutral-900))}.hwnUuq_propGauge{fill:var(--dsw-static-neutral-00);stroke:color-mix(in srgb, var(--team-ink) 30%, transparent);stroke-width:.6px}.hwnUuq_propGaugeNeedle{fill:none;stroke:var(--dsw-alias-state-error-primary);stroke-width:.7px;stroke-linecap:round}.hwnUuq_propPortafilter{fill:none;stroke:color-mix(in srgb, var(--team-ink) 54%, var(--team-page));stroke-width:1.8px;stroke-linecap:round}.hwnUuq_propSteam{fill:none;stroke:color-mix(in srgb, var(--team-page) 54%, transparent);stroke-width:.8px;stroke-linecap:round;animation:3.6s ease-in-out infinite hwnUuq_team-steam}.hwnUuq_propWarmerPlate{fill:none;stroke:color-mix(in srgb, var(--team-ink) 32%, transparent);stroke-width:.7px}.hwnUuq_propCarafeHandle{fill:none;stroke:color-mix(in srgb, var(--team-ink) 50%, var(--team-page));stroke-width:1.5px;stroke-linecap:round}.hwnUuq_propMugHandle{fill:none;stroke:var(--dsw-static-neutral-400);stroke-width:1.2px;stroke-linecap:round}.hwnUuq_propBrew{fill:color-mix(in srgb, var(--dsw-static-amber-600) 74%, var(--dsw-static-neutral-800))}.hwnUuq_propCup{fill:var(--dsw-static-neutral-00);stroke:var(--dsw-static-neutral-300);stroke-width:.7px}.hwnUuq_propSpout{fill:none;stroke:color-mix(in srgb, var(--team-ink) 42%, var(--team-page));stroke-width:1.6px;stroke-linecap:round}.hwnUuq_propLampLive{fill:var(--team-leaf);animation:3.4s ease-in-out infinite hwnUuq_team-blink}.hwnUuq_propLampWifi{fill:var(--team-hue);opacity:.85}.hwnUuq_propLampIdle{fill:color-mix(in srgb, var(--team-ink) 24%, var(--team-page))}.hwnUuq_flora{width:100%;height:100%;display:block;overflow:visible}.hwnUuq_floraShade{fill:color-mix(in srgb, var(--team-ink) 12%, transparent)}.hwnUuq_floraSaucer{fill:color-mix(in srgb, var(--dsw-static-amber-600) 62%, var(--dsw-static-neutral-700))}.hwnUuq_floraSaucerLip{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 30%, transparent);stroke-width:.8px;stroke-linecap:round}.hwnUuq_floraPot{fill:color-mix(in srgb, var(--dsw-static-amber-600) 68%, var(--dsw-static-neutral-500))}.hwnUuq_floraPotShade{fill:color-mix(in srgb, var(--team-ink) 18%, transparent)}.hwnUuq_floraGlaze{fill:color-mix(in srgb, var(--dsw-static-neutral-00) 36%, transparent)}.hwnUuq_floraRim{fill:color-mix(in srgb, var(--dsw-static-amber-600) 58%, var(--dsw-static-neutral-400))}.hwnUuq_floraRimLip{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 44%, transparent);stroke-width:1.4px;stroke-linecap:round}.hwnUuq_floraSoil{fill:color-mix(in srgb, var(--dsw-static-amber-600) 32%, var(--dsw-static-neutral-800))}.hwnUuq_floraCrumb{fill:color-mix(in srgb, var(--dsw-static-amber-600) 52%, var(--dsw-static-neutral-700))}.hwnUuq_floraMoss{fill:color-mix(in srgb, var(--team-leaf) 70%, var(--dsw-static-neutral-800));opacity:.85}.hwnUuq_floraStem{fill:none;stroke:color-mix(in srgb, var(--team-leaf) 48%, var(--dsw-static-neutral-800));stroke-width:2.4px;stroke-linecap:round}.hwnUuq_floraBlade{fill:color-mix(in srgb, var(--team-leaf) 64%, var(--dsw-static-neutral-900))}.hwnUuq_floraBladeLit{fill:color-mix(in srgb, var(--team-leaf) 76%, var(--dsw-static-neutral-400))}.hwnUuq_floraBladeDetail{fill:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 70%, var(--dsw-static-neutral-00));opacity:.65}.hwnUuq_floraVein{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-900) 24%, transparent);stroke-width:.95px;stroke-linecap:round}.hwnUuq_floraLeaf{transform-box:fill-box;transform-origin:50% 100%;animation:7.4s ease-in-out infinite hwnUuq_team-sway;animation-delay:var(--team-leaf-delay,0s)}.hwnUuq_floraLeaf[data-hang=true]{transform-origin:50% 0;animation-duration:9.1s}.hwnUuq_floraCactusDetails{pointer-events:none}.hwnUuq_floraSpine{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 74%, transparent);stroke-width:1.1px;stroke-linecap:round}.hwnUuq_floraBloomOuter{fill:color-mix(in srgb, var(--dsw-alias-state-error-primary) 40%, transparent)}.hwnUuq_floraBloom{fill:color-mix(in srgb, var(--dsw-alias-state-error-primary) 68%, var(--dsw-static-neutral-00))}.hwnUuq_floraBloomHeart{fill:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 76%, var(--dsw-static-neutral-00))}.hwnUuq_floraBloomStamen{fill:var(--dsw-static-neutral-00)}.hwnUuq_desk{--team-unit:clamp(84px, 25cqh, 192px);--team-figure:calc(var(--team-unit) * .65);--team-wood:color-mix(in srgb, var(--team-warm) 42%, var(--team-surface-2));width:calc(var(--team-figure) * 1.68);height:calc(var(--team-unit) * .135);transform:translate(-56%, calc(-100% - var(--team-unit) * .19)) scale(var(--team-scale,1));transform-origin:56% 100%;z-index:calc(6 + var(--team-depth,0));pointer-events:none;position:absolute}.hwnUuq_deskTop{filter:drop-shadow(5px 10px 16px var(--dsw-alias-bg-mask-2));border-radius:2px;position:absolute;inset:0}.hwnUuq_deskSurface{background:linear-gradient(200deg, color-mix(in srgb, var(--team-wood) 70%, var(--dsw-static-neutral-00)) 0 38%, var(--team-wood) 38% 82%, color-mix(in srgb, var(--team-ink) 22%, var(--team-wood)) 82% 100%);clip-path:polygon(0 12%,100% 0,100% 100%,0 100%);border-radius:2px;position:absolute;inset:0 5% 22%}.hwnUuq_deskApron{background:linear-gradient(180deg, color-mix(in srgb, var(--team-ink) 16%, var(--team-wood)) 0 22%, color-mix(in srgb, var(--team-ink) 30%, var(--team-wood)) 22% 100%);clip-path:polygon(0 0,100% 0,98% 100%,2% 100%);height:18%;position:absolute;bottom:4%;left:5%;right:5%}.hwnUuq_deskFlank{background:linear-gradient(180deg, color-mix(in srgb, var(--team-ink) 12%, var(--team-wood)) 0, color-mix(in srgb, var(--team-ink) 26%, var(--team-wood)) 100%);clip-path:polygon(100% 14%,100% 100%,0 100%,0 0);width:10%;height:78%;position:absolute;top:0;right:5%}.hwnUuq_deskGrain{background:linear-gradient(105deg, transparent 46%, color-mix(in srgb, var(--team-page) 26%, transparent) 46% 47.4%, transparent 47.4% 72%, color-mix(in srgb, var(--team-page) 22%, transparent) 72% 73.2%, transparent 73.2%);opacity:.85;position:absolute;inset:6% 12% 30%}.hwnUuq_deskLegs{background:linear-gradient(color-mix(in srgb, var(--team-ink) 28%, var(--team-page)) 0 0) no-repeat 2% 0 / 4% 100%, linear-gradient(color-mix(in srgb, var(--team-ink) 28%, var(--team-page)) 0 0) no-repeat 98% 0 / 4% 100%;height:150%;position:absolute;top:100%;left:7%;right:7%}.hwnUuq_deskModesty{background:linear-gradient(180deg, color-mix(in srgb, var(--team-wood) 62%, var(--dsw-static-neutral-500)) 0, color-mix(in srgb, var(--team-ink) 28%, var(--team-wood)) 100%);clip-path:polygon(0 0,100% 0,98% 100%,2% 100%);height:60%;position:absolute;top:100%;left:7%;right:7%}.hwnUuq_chair{--team-unit:clamp(84px, 25cqh, 192px);--team-figure:calc(var(--team-unit) * .65);--team-chair:color-mix(in srgb, var(--team-hue) 26%, var(--dsw-static-neutral-600));--team-chair-lit:color-mix(in srgb, var(--team-hue) 14%, var(--dsw-static-neutral-300));--team-chair-dark:color-mix(in srgb, var(--team-hue) 36%, var(--dsw-static-neutral-800));width:calc(var(--team-figure) * .58);height:calc(var(--team-unit) * .5);transform:translate(-50%, -100%) scale(var(--team-scale,1));transform-origin:50% 100%;z-index:calc(12 + var(--team-depth,0));pointer-events:none;filter:drop-shadow(2px 5px 4px var(--dsw-alias-bg-mask-1));position:absolute}.hwnUuq_chairSvg{width:100%;height:100%;display:block;overflow:visible}.hwnUuq_chairRide{transform-box:fill-box;transform-origin:50% 100%;animation:6.8s ease-in-out infinite hwnUuq_team-chair-rise;animation-delay:var(--team-chair-delay,0s)}.hwnUuq_chairArmrest{fill:var(--team-chair-dark);stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.7px}.hwnUuq_chairShell{stroke:none}.hwnUuq_chairShellEdge{fill:none;stroke:color-mix(in srgb, var(--team-ink) 24%, transparent);stroke-width:1.2px}.hwnUuq_chairMesh{stroke:color-mix(in srgb, var(--team-ink) 18%, transparent);stroke-width:.8px}.hwnUuq_chairMeshLine{fill:none;stroke:color-mix(in srgb, var(--team-ink) 12%, transparent);stroke-width:1px;stroke-linecap:round}.hwnUuq_chairMeshSpine{fill:none;stroke:color-mix(in srgb, var(--team-ink) 24%, transparent);stroke-width:1.5px;stroke-linecap:round}.hwnUuq_chairLumbar{stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.9px}.hwnUuq_chairLumbarKnob{fill:color-mix(in srgb, var(--team-ink) 40%, var(--team-chair-dark))}.hwnUuq_chairPan{fill:var(--team-chair-dark);stroke:color-mix(in srgb, var(--team-ink) 18%, transparent);stroke-width:.8px}.hwnUuq_chairPanTop{fill:color-mix(in srgb, var(--team-chair-lit) 70%, var(--team-chair))}.hwnUuq_chairPanStitch{fill:none;stroke:color-mix(in srgb, var(--team-ink) 16%, transparent);stroke-width:.6px;stroke-dasharray:2 1.5}.hwnUuq_chairSpine,.hwnUuq_chairMechanism{fill:var(--team-chair-dark);stroke:color-mix(in srgb, var(--team-ink) 16%, transparent);stroke-width:.7px}.hwnUuq_chairLift{transform-box:fill-box;transform-origin:50% 100%;animation:6.8s ease-in-out infinite hwnUuq_team-chair-stretch;animation-delay:var(--team-chair-delay,0s);stroke:color-mix(in srgb, var(--team-ink) 22%, transparent);stroke-width:.5px}.hwnUuq_chairHub{fill:var(--team-chair-dark)}.hwnUuq_chairSpokes path{fill:none;stroke:var(--team-chair-dark);stroke-width:3px;stroke-linecap:round}.hwnUuq_chairCasters circle,.hwnUuq_chairCasters ellipse{fill:var(--dsw-static-neutral-800);stroke:color-mix(in srgb, var(--team-page) 46%, transparent);stroke-width:.8px}.hwnUuq_monitor{flex-direction:column;align-items:center;width:58%;display:flex;position:absolute;bottom:88%;left:0}.hwnUuq_screen{aspect-ratio:16/10;border:3.5px solid color-mix(in srgb, var(--team-ink) 68%, var(--team-page));background:color-mix(in srgb, var(--team-hue) 10%, var(--team-page));width:100%;box-shadow:0 6px 14px var(--dsw-alias-bg-mask-2);border-radius:8px 8px 4px 4px;padding:18% 8% 7%;position:relative;overflow:hidden}.hwnUuq_screen:before{content:\"\";background:radial-gradient(circle at 8% 50%, var(--dsw-alias-state-error-primary) 0 1.8px, transparent 2.1px), radial-gradient(circle at 18% 50%, var(--team-warm) 0 1.8px, transparent 2.1px), radial-gradient(circle at 28% 50%, var(--team-leaf) 0 1.8px, transparent 2.1px), linear-gradient(90deg, color-mix(in srgb, var(--team-hue) 24%, var(--team-page)) 0 62%, color-mix(in srgb, var(--team-hue) 14%, var(--team-page)) 62%);height:19%;position:absolute;top:0;left:0;right:0}.hwnUuq_glare{pointer-events:none;background:linear-gradient(116deg, transparent 0 44%, color-mix(in srgb, var(--team-page) 44%, transparent) 44% 57%, transparent 57%);position:absolute;inset:0}.hwnUuq_desk[data-screen=off] .hwnUuq_screenApp{opacity:.45;filter:saturate(.5)}.hwnUuq_desk[data-screen=working] .hwnUuq_screen{background:color-mix(in srgb, var(--team-hue) 16%, var(--team-page));animation:2.4s ease-in-out infinite hwnUuq_team-screen}.hwnUuq_desk[data-empty=true] .hwnUuq_screen{opacity:.88}.hwnUuq_screenText{clip-path:inset(50%);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}.hwnUuq_neck{background:color-mix(in srgb, var(--team-ink) 48%, var(--team-page));width:15%;height:13px}.hwnUuq_base{background:color-mix(in srgb, var(--team-ink) 54%, var(--team-page));width:52%;height:7px;box-shadow:0 2px 6px var(--dsw-alias-bg-mask-2);border-radius:1px 1px 5px 5px}.hwnUuq_keyboard{width:40%;height:calc(var(--team-unit) * .034);background:repeating-linear-gradient(90deg, color-mix(in srgb, var(--team-ink) 32%, var(--team-page)) 0 3px, color-mix(in srgb, var(--team-ink) 54%, var(--team-page)) 3px 6px);box-shadow:0 1.5px 3px var(--dsw-alias-bg-mask-2);border-radius:2.5px;position:absolute;bottom:6%;left:32%}.hwnUuq_mug{width:calc(var(--team-unit) * .07);aspect-ratio:3/4;background:color-mix(in srgb, var(--team-hue) 74%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg));box-shadow:0 1.5px 3px var(--dsw-alias-bg-mask-2);border-radius:1px 1px 40% 40%;position:absolute;bottom:12%;left:80%}.hwnUuq_mug:after{content:\"\";border:1.5px solid color-mix(in srgb, var(--team-hue) 74%, var(--dsw-static-neutral-00));border-left:none;border-radius:0 50% 50% 0;width:58%;height:50%;position:absolute;top:20%;left:88%}.hwnUuq_papers{width:calc(var(--team-unit) * .13);height:calc(var(--team-unit) * .026);background:var(--dsw-static-neutral-00);box-shadow:0 0 0 1px var(--dsw-static-neutral-300), 2px -2.5px 0 -1px var(--dsw-static-neutral-00), 2px -2.5px 0 0 var(--dsw-static-neutral-300);border-radius:1px;position:absolute;bottom:8%;left:6%}.hwnUuq_deskPlant{width:calc(var(--team-unit) * .15);height:calc(var(--team-unit) * .19);filter:drop-shadow(1px 3px 3px var(--dsw-alias-bg-mask-1));position:absolute;bottom:72%;right:-1%}.hwnUuq_person{--team-unit:clamp(84px, 25cqh, 192px);--team-figure:calc(var(--team-unit) * .65);width:var(--team-figure);cursor:pointer;transform:translate(-50%, -100%) scale(calc(var(--team-scale,1) * var(--team-sit,1)));transform-origin:50% 100%;z-index:calc(10 + var(--team-depth,0));background:0 0;border:none;padding:0;animation:.32s cubic-bezier(.34,1.56,.64,1) both hwnUuq_team-person-in;display:block;position:absolute}.hwnUuq_person:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px;border-radius:10px}.hwnUuq_person[data-walk=true]{z-index:calc(14 + var(--team-depth,0))}.hwnUuq_body{height:var(--team-unit);filter:drop-shadow(6px 10px 8px var(--dsw-alias-bg-mask-1));transition:transform .18s cubic-bezier(.22,1,.36,1);display:block;position:relative}.hwnUuq_person:hover .hwnUuq_body,.hwnUuq_person[data-focus=true] .hwnUuq_body{transform:scale(1.07)}.hwnUuq_figure{width:100%;height:100%;display:block;overflow:visible}.hwnUuq_person[data-facing=back]{--team-sit:.93;animation:.32s cubic-bezier(.34,1.56,.64,1) both hwnUuq_team-person-in,6.8s ease-in-out infinite hwnUuq_team-person-sit;animation-delay:0s, var(--team-chair-delay,0s)}.hwnUuq_person[data-facing=back] .hwnUuq_figure{transform:none}.hwnUuq_person[data-facing=back] .hwnUuq_crewLimbBack,.hwnUuq_person[data-facing=back] .hwnUuq_crewLimbFront{display:none}.hwnUuq_person[data-facing=right] .hwnUuq_figure{transform:rotate(3deg)}.hwnUuq_person[data-facing=away] .hwnUuq_figure{transform:rotate(-2deg)}.hwnUuq_person[data-facing=away] .hwnUuq_crewLimbBack,.hwnUuq_person[data-facing=away] .hwnUuq_crewLimbFront{display:none}.hwnUuq_person[data-facing=left] .hwnUuq_figure{transform:scaleX(-1)rotate(3deg)}.hwnUuq_crew{width:100%;height:100%;overflow:visible}.hwnUuq_crewHood{fill:color-mix(in srgb, var(--team-hue) 86%, var(--dsw-static-neutral-1000));filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crew[data-kind=beluga] .hwnUuq_crewHood{fill:color-mix(in srgb, var(--team-hue) 34%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewBelly,.hwnUuq_crewPatch,.hwnUuq_crewMelon{fill:color-mix(in srgb, var(--team-hue) 15%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewHoodOpening{fill:color-mix(in srgb, var(--team-ink) 22%, transparent)}.hwnUuq_crewSaddle{fill:color-mix(in srgb, var(--dsw-static-neutral-00) 65%, var(--team-hue));filter:hue-rotate(var(--team-accent-shift,0deg));opacity:.75}.hwnUuq_crewFlipperTrim{fill:none;stroke:var(--dsw-static-neutral-00);stroke-width:1.2px;stroke-linecap:round;opacity:.85}.hwnUuq_crewTuskGroup{pointer-events:none}.hwnUuq_crewTusk{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 90%, var(--team-hue));stroke-width:3.4px;stroke-linecap:round}.hwnUuq_crewTuskSpiral{fill:none;stroke:color-mix(in srgb, var(--dsw-static-amber-600) 50%, var(--dsw-static-neutral-600));stroke-width:1px;stroke-linecap:round;opacity:.75}.hwnUuq_crewWrinkle{fill:none;stroke:color-mix(in srgb, var(--team-ink) 24%, transparent);stroke-width:.9px;stroke-linecap:round}.hwnUuq_crewKnob{fill:var(--dsw-static-neutral-00);opacity:.75}.hwnUuq_crewKnobHighlight{fill:var(--dsw-static-neutral-00);opacity:.95}.hwnUuq_crewMelonHighlight{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 80%, transparent);stroke-width:1.4px;stroke-linecap:round}.hwnUuq_crewEye{fill:var(--dsw-static-neutral-00)}.hwnUuq_crewPupil{fill:var(--dsw-static-neutral-900)}.hwnUuq_crewSmile,.hwnUuq_crewMouth{fill:none;stroke:var(--dsw-static-neutral-700);stroke-width:1.4px;stroke-linecap:round;opacity:.65}.hwnUuq_crewMouth{stroke:var(--dsw-static-neutral-00);opacity:.8}.hwnUuq_crewNose{fill:color-mix(in srgb, var(--dsw-alias-state-error-primary) 60%, var(--dsw-static-neutral-700));opacity:.55}.hwnUuq_crewFacialGroup{pointer-events:none}.hwnUuq_crewFace,.hwnUuq_crewHand,.hwnUuq_crewNeck,.hwnUuq_crewEar{fill:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 24%, var(--dsw-static-neutral-00))}.hwnUuq_crew[data-skin=\"1\"] .hwnUuq_crewFace,.hwnUuq_crew[data-skin=\"1\"] .hwnUuq_crewHand,.hwnUuq_crew[data-skin=\"1\"] .hwnUuq_crewNeck,.hwnUuq_crew[data-skin=\"1\"] .hwnUuq_crewEar{fill:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 44%, var(--dsw-static-neutral-00))}.hwnUuq_crew[data-skin=\"2\"] .hwnUuq_crewFace,.hwnUuq_crew[data-skin=\"2\"] .hwnUuq_crewHand,.hwnUuq_crew[data-skin=\"2\"] .hwnUuq_crewNeck,.hwnUuq_crew[data-skin=\"2\"] .hwnUuq_crewEar{fill:color-mix(in srgb, var(--dsw-static-amber-600) 58%, var(--dsw-static-neutral-00))}.hwnUuq_crew[data-skin=\"3\"] .hwnUuq_crewFace,.hwnUuq_crew[data-skin=\"3\"] .hwnUuq_crewHand,.hwnUuq_crew[data-skin=\"3\"] .hwnUuq_crewNeck,.hwnUuq_crew[data-skin=\"3\"] .hwnUuq_crewEar{fill:color-mix(in srgb, var(--dsw-static-amber-700) 62%, var(--dsw-static-neutral-00))}.hwnUuq_crewBrow{fill:none;stroke:var(--dsw-static-neutral-700);stroke-width:1.2px;stroke-linecap:round;opacity:.7}.hwnUuq_crewEyeGlint{fill:var(--dsw-static-neutral-00)}.hwnUuq_crewEyeGlintSub{fill:var(--dsw-static-neutral-00);opacity:.85}.hwnUuq_crewBlush{fill:color-mix(in srgb, var(--dsw-alias-state-error-primary) 42%, var(--dsw-static-neutral-00));opacity:.5}.hwnUuq_crewHair{fill:color-mix(in srgb, var(--dsw-static-amber-700) 38%, var(--dsw-static-neutral-800))}.hwnUuq_crew[data-tone=\"1\"] .hwnUuq_crewHair{fill:var(--dsw-static-neutral-900)}.hwnUuq_crew[data-tone=\"2\"] .hwnUuq_crewHair{fill:color-mix(in srgb, var(--dsw-static-amber-600) 52%, var(--dsw-static-neutral-900))}.hwnUuq_crew[data-tone=\"3\"] .hwnUuq_crewHair{fill:color-mix(in srgb, var(--dsw-static-amber-600) 76%, var(--dsw-static-neutral-400))}.hwnUuq_crew[data-tone=\"4\"] .hwnUuq_crewHair{fill:color-mix(in srgb, var(--dsw-static-neutral-00) 80%, var(--dsw-static-neutral-600))}.hwnUuq_crewHairShine{fill:color-mix(in srgb, var(--dsw-static-neutral-00) 38%, transparent);opacity:.6}.hwnUuq_crewHairHighlight{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 32%, transparent);stroke-width:1.2px;stroke-linecap:round}.hwnUuq_crewScrunchie{fill:var(--team-hue);stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 40%, transparent);stroke-width:.6px}.hwnUuq_crewHoodSheen{fill:color-mix(in srgb, var(--dsw-static-neutral-00) 48%, var(--team-hue));filter:hue-rotate(var(--team-accent-shift,0deg));opacity:.55}.hwnUuq_crewHoodRidge{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 55%, transparent);stroke-width:1.2px;stroke-linecap:round}.hwnUuq_crewHoodShade{fill:color-mix(in srgb, var(--team-hue) 90%, var(--dsw-static-neutral-1000));filter:hue-rotate(var(--team-accent-shift,0deg));opacity:.28}.hwnUuq_crew[data-kind=shark] .hwnUuq_crewHood{fill:color-mix(in srgb, var(--team-hue) 30%, var(--dsw-static-neutral-400));filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crew[data-kind=shark] .hwnUuq_crewBelly{fill:color-mix(in srgb, var(--team-hue) 8%, var(--dsw-static-neutral-00))}.hwnUuq_crewGill{fill:none;stroke:color-mix(in srgb, var(--team-hue) 55%, var(--dsw-static-neutral-600));stroke-width:1.1px;stroke-linecap:round;opacity:.75}.hwnUuq_crewPleat{fill:none;stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.9px;stroke-linecap:round}.hwnUuq_crewSpout{fill:none;stroke:color-mix(in srgb, var(--team-hue) 55%, transparent);stroke-width:2.6px;stroke-linecap:round}.hwnUuq_crewDroplet{fill:color-mix(in srgb, var(--team-hue) 60%, var(--dsw-static-neutral-00));opacity:.9}.hwnUuq_crewBlowhole{fill:color-mix(in srgb, var(--team-ink) 35%, transparent)}.hwnUuq_crewSpeckle{fill:color-mix(in srgb, var(--dsw-static-neutral-00) 50%, transparent)}.hwnUuq_crewShirt{fill:color-mix(in srgb, var(--team-hue) 38%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewSleeve{fill:color-mix(in srgb, var(--team-hue) 52%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crew[data-outfit=tee] .hwnUuq_crewShirt{fill:color-mix(in srgb, var(--team-hue) 46%, var(--dsw-static-neutral-00))}.hwnUuq_crew[data-outfit=polo] .hwnUuq_crewShirt{fill:color-mix(in srgb, var(--team-hue) 36%, var(--dsw-static-neutral-00))}.hwnUuq_crew[data-outfit=sweater] .hwnUuq_crewShirt{fill:color-mix(in srgb, var(--team-hue) 50%, var(--dsw-static-neutral-00))}.hwnUuq_crew[data-outfit=hoodie] .hwnUuq_crewShirt{fill:color-mix(in srgb, var(--team-hue) 30%, var(--dsw-static-neutral-00))}.hwnUuq_crew[data-outfit=tunic] .hwnUuq_crewShirt{fill:color-mix(in srgb, var(--team-hue) 44%, var(--dsw-static-neutral-00))}.hwnUuq_crew[data-outfit=vest] .hwnUuq_crewShirt{fill:color-mix(in srgb, var(--team-hue) 26%, var(--dsw-static-neutral-00))}.hwnUuq_crew[data-outfit=jacket] .hwnUuq_crewShirt{fill:color-mix(in srgb, var(--team-hue) 60%, var(--dsw-static-neutral-00))}.hwnUuq_crew[data-outfit=stripes] .hwnUuq_crewShirt{fill:color-mix(in srgb, var(--team-hue) 24%, var(--dsw-static-neutral-00))}.hwnUuq_crew[data-outfit=dungarees] .hwnUuq_crewShirt{fill:color-mix(in srgb, var(--team-hue) 36%, var(--dsw-static-neutral-00))}.hwnUuq_crewVest,.hwnUuq_crewJacket,.hwnUuq_crewBib{fill:color-mix(in srgb, var(--team-hue) 46%, var(--dsw-static-neutral-00));stroke:color-mix(in srgb, var(--team-hue) 60%, var(--dsw-static-neutral-00));stroke-width:.6px;filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewStripes{fill:none;stroke:color-mix(in srgb, var(--team-hue) 62%, var(--dsw-static-neutral-00));stroke-width:1.4px;opacity:.8;filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewSeam{fill:none;stroke:color-mix(in srgb, var(--team-hue) 56%, var(--dsw-static-neutral-00));stroke-width:.8px;stroke-linecap:round;opacity:.5}.hwnUuq_crewCuff{fill:none;stroke:color-mix(in srgb, var(--team-hue) 60%, var(--dsw-static-neutral-00));stroke-width:1px;stroke-linecap:round;opacity:.55}.hwnUuq_crewCollar{fill:none;stroke:var(--dsw-static-neutral-00);stroke-width:1.8px;stroke-linecap:round;opacity:.75}.hwnUuq_crewPlacket,.hwnUuq_crewStitch{fill:none;stroke:color-mix(in srgb, var(--team-hue) 64%, var(--dsw-static-neutral-00));stroke-width:.8px;stroke-linecap:round;opacity:.55}.hwnUuq_crewButton{fill:color-mix(in srgb, var(--team-hue) 60%, var(--dsw-static-neutral-00));stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 70%, transparent);stroke-width:.4px}.hwnUuq_crewPocketStitch{fill:none;stroke:color-mix(in srgb, var(--team-hue) 60%, var(--dsw-static-neutral-00));stroke-width:.8px}.hwnUuq_crewPenClip{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 90%, var(--team-ink));stroke-width:.9px;stroke-linecap:round}.hwnUuq_crewCrest{fill:color-mix(in srgb, var(--team-hue) 70%, var(--dsw-static-neutral-00));opacity:.8}.hwnUuq_crewRib{fill:color-mix(in srgb, var(--team-hue) 58%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewKnitLine{fill:none;stroke:color-mix(in srgb, var(--team-ink) 12%, transparent);stroke-width:.8px;stroke-linecap:round}.hwnUuq_crewHoodFabric{fill:color-mix(in srgb, var(--team-hue) 34%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg));opacity:.92}.hwnUuq_crewDraw{fill:none;stroke:color-mix(in srgb, var(--team-hue) 64%, var(--dsw-static-neutral-00));stroke-width:1px;stroke-linecap:round}.hwnUuq_crewAglet{fill:var(--dsw-static-neutral-400)}.hwnUuq_crewPocket{fill:color-mix(in srgb, var(--team-hue) 20%, var(--dsw-static-neutral-00));stroke:color-mix(in srgb, var(--team-hue) 48%, var(--dsw-static-neutral-00));stroke-width:.7px;filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewNeckBand{fill:color-mix(in srgb, var(--team-hue) 54%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewBelt{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-800) 78%, var(--team-hue));stroke-width:2.2px;stroke-linecap:round}.hwnUuq_crewBuckle{fill:var(--dsw-static-neutral-400);stroke:var(--dsw-static-neutral-700);stroke-width:.5px}.hwnUuq_crewCrossStrap{fill:none;stroke:color-mix(in srgb, var(--team-hue) 60%, var(--dsw-static-neutral-00));stroke-width:1px;stroke-linecap:round}.hwnUuq_crewCans,.hwnUuq_crewGlasses{pointer-events:none}.hwnUuq_crewGlassesFrame{fill:color-mix(in srgb, var(--team-hue) 34%, transparent);stroke:var(--dsw-static-neutral-800);stroke-width:1.2px}.hwnUuq_crewGlassesGlass{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 80%, transparent);stroke-width:.8px;stroke-linecap:round}.hwnUuq_crewGlassesBridge{fill:none;stroke:var(--dsw-static-neutral-800);stroke-width:1px;stroke-linecap:round}.hwnUuq_crewCansBand{fill:none;stroke:var(--dsw-static-neutral-800);stroke-width:3.4px}.hwnUuq_crewCansCup{fill:color-mix(in srgb, var(--team-hue) 64%, var(--dsw-static-neutral-00));stroke:var(--dsw-static-neutral-800);stroke-width:.8px;filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewCansCushion{fill:var(--dsw-static-neutral-900)}.hwnUuq_crewCansPivot{fill:var(--dsw-static-neutral-400)}.hwnUuq_crewScarf{fill:color-mix(in srgb, var(--team-hue) 66%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewScarfPattern{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 40%, transparent);stroke-width:.8px;stroke-linecap:round}.hwnUuq_crewScarfFringe{fill:none;stroke:color-mix(in srgb, var(--team-hue) 74%, var(--dsw-static-neutral-00));stroke-width:1px;stroke-linecap:round;filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewCord{fill:none;stroke:color-mix(in srgb, var(--team-hue) 72%, var(--dsw-static-neutral-00));stroke-width:1.2px;stroke-linecap:round;filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewClip{fill:var(--dsw-static-neutral-400)}.hwnUuq_crewBadge{fill:var(--dsw-static-neutral-00);stroke:var(--dsw-static-neutral-300);stroke-width:.7px}.hwnUuq_crewBadgePhoto{fill:color-mix(in srgb, var(--team-hue) 50%, var(--dsw-static-neutral-400))}.hwnUuq_crewBadgeLine{fill:none;stroke:var(--dsw-static-neutral-500);stroke-width:.9px;stroke-linecap:round}.hwnUuq_crewPack{fill:color-mix(in srgb, var(--team-hue) 52%, var(--dsw-static-neutral-700));stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.8px;filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewPackPocket{fill:color-mix(in srgb, var(--team-hue) 44%, var(--dsw-static-neutral-800));filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewPackTrim{fill:none;stroke:color-mix(in srgb, var(--team-hue) 72%, var(--dsw-static-neutral-00));stroke-width:1.2px;stroke-linecap:round;filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewPackZip{fill:var(--dsw-static-neutral-300)}.hwnUuq_crewPackHandle{fill:none;stroke:var(--dsw-static-neutral-800);stroke-width:1.6px;stroke-linecap:round}.hwnUuq_crewStrap{fill:none;stroke:color-mix(in srgb, var(--team-hue) 58%, var(--dsw-static-neutral-700));stroke-width:2.4px;stroke-linecap:round;filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewStrapBuckle{fill:var(--dsw-static-neutral-400)}.hwnUuq_crewTrouser{fill:color-mix(in srgb, var(--team-hue) 34%, var(--dsw-static-neutral-600));filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crewTrouserCrease{fill:none;stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.8px;stroke-linecap:round}.hwnUuq_crewShoe{fill:color-mix(in srgb, var(--team-hue) 34%, var(--dsw-static-neutral-600));filter:hue-rotate(var(--team-accent-shift,0deg))}.hwnUuq_crew[data-shoes=boot] .hwnUuq_crewShoe{fill:color-mix(in srgb, var(--team-hue) 58%, var(--dsw-static-neutral-800))}.hwnUuq_crew[data-shoes=loafer] .hwnUuq_crewShoe{fill:color-mix(in srgb, var(--team-hue) 16%, var(--dsw-static-neutral-500))}.hwnUuq_crew[data-shoes=hightop] .hwnUuq_crewShoe{fill:color-mix(in srgb, var(--team-hue) 50%, var(--dsw-static-neutral-00))}.hwnUuq_crew[data-shoes=sandal] .hwnUuq_crewShoe{fill:color-mix(in srgb, var(--dsw-static-amber-600) 64%, var(--dsw-static-neutral-700))}.hwnUuq_crewShoeTrim{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 46%, transparent);stroke-width:1px;stroke-linecap:round}.hwnUuq_crewShoeSole{fill:none;stroke:var(--dsw-static-neutral-800);stroke-width:1.2px;stroke-linecap:round}.hwnUuq_crewShoeEyelet{fill:var(--dsw-static-neutral-400)}.hwnUuq_crewShoeBadge{fill:var(--dsw-static-neutral-00);stroke:var(--dsw-alias-state-error-primary);stroke-width:.4px}.hwnUuq_crewShoeToe{fill:none;stroke:var(--dsw-static-neutral-00);stroke-width:1.4px;stroke-linecap:round}.hwnUuq_crewShoeBuckle{fill:var(--dsw-static-neutral-300)}.hwnUuq_crewShoeStripe{fill:none;stroke:var(--dsw-static-neutral-00);stroke-width:1px;stroke-linecap:round;opacity:.85}.hwnUuq_crew[data-shoes=boot] .hwnUuq_crewShoeTrim,.hwnUuq_crew[data-shoes=hightop] .hwnUuq_crewShoeTrim{stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 30%, transparent)}.hwnUuq_crewLimbBack,.hwnUuq_crewLimbFront,.hwnUuq_crewArmBack,.hwnUuq_crewArmFront{transform-box:fill-box;transform-origin:50% 0}.hwnUuq_person[data-walk=true] .hwnUuq_crewLimbBack,.hwnUuq_person[data-walk=true] .hwnUuq_crewArmFront{animation:1s linear infinite paused hwnUuq_team-swing;animation-delay:calc(var(--team-gait,0) * -1s)}.hwnUuq_person[data-walk=true] .hwnUuq_crewLimbFront,.hwnUuq_person[data-walk=true] .hwnUuq_crewArmBack{animation:1s linear infinite reverse paused hwnUuq_team-swing;animation-delay:calc(var(--team-gait,0) * -1s)}.hwnUuq_person[data-walk=true] .hwnUuq_body{animation:1s ease-in-out infinite paused hwnUuq_team-bob;animation-delay:calc(var(--team-gait,0) * -1s)}.hwnUuq_person[data-pose=working]:not([data-walk=true]) .hwnUuq_crewArmFront,.hwnUuq_person[data-pose=working]:not([data-walk=true]) .hwnUuq_crewArmBack{animation:.9s ease-in-out infinite alternate hwnUuq_team-type}.hwnUuq_crown{width:20px;height:20px;color:var(--dsw-static-neutral-900);background:var(--dsw-alias-state-warn-secondary);box-shadow:0 1px 3px var(--dsw-alias-bg-mask-2);border-radius:50%;place-items:center;margin-left:-10px;display:grid;position:absolute;top:-6%;left:50%}.hwnUuq_load{border:2px solid var(--dsw-alias-bg-overlay);font-variant-numeric:tabular-nums;min-width:16px;height:16px;color:var(--dsw-alias-label-primary-inverted);background:var(--dsw-alias-state-success-primary);border-radius:8px;place-items:center;padding:0 4px;font-size:9.5px;font-weight:600;display:grid;position:absolute;top:47%;right:-13%}.hwnUuq_speech{z-index:20;border:1px solid color-mix(in srgb, var(--team-hue) 55%, transparent);background:color-mix(in srgb, var(--dsw-alias-bg-overlay) 92%, transparent);backdrop-filter:blur(8px);width:max-content;max-width:240px;color:var(--dsw-alias-label-primary);white-space:nowrap;text-overflow:ellipsis;box-shadow:0 4px 14px var(--dsw-alias-bg-mask-2), 0 0 0 1px color-mix(in srgb, var(--dsw-static-neutral-00) 10%, transparent);border-radius:12px 12px 12px 2px;padding:6px 10px;font-size:11px;font-weight:500;line-height:1.4;animation:.22s cubic-bezier(.34,1.56,.64,1) both hwnUuq_team-say-in;position:absolute;bottom:calc(100% + 4px);left:50%;overflow:hidden;transform:translate(-50%)}.hwnUuq_listening,.hwnUuq_doze{z-index:20;letter-spacing:.1em;color:var(--team-hue);text-shadow:0 1px 3px var(--dsw-alias-bg-mask-2);font-size:12px;font-weight:700;position:absolute;top:2%;right:-4px}.hwnUuq_listening{animation:1.2s ease-in-out infinite hwnUuq_team-listen}.hwnUuq_doze{color:color-mix(in srgb, var(--team-warm) 85%, var(--dsw-static-neutral-00));animation:2.8s ease-in-out infinite hwnUuq_team-doze}.hwnUuq_plate{background:color-mix(in srgb, var(--dsw-alias-bg-overlay) 72%, transparent);border-radius:6px;flex-direction:column;align-items:center;width:150%;padding:1px 4px;display:flex;position:absolute;top:calc(100% + 1px);left:50%;transform:translate(-50%)}.hwnUuq_person[data-talking=from] .hwnUuq_plate{visibility:hidden}.hwnUuq_plateName{max-width:100%;color:var(--dsw-alias-label-primary);white-space:nowrap;text-overflow:ellipsis;font-size:11.5px;font-weight:600;overflow:hidden}.hwnUuq_plateMeta{max-width:100%;color:var(--dsw-alias-label-tertiary);white-space:nowrap;text-overflow:ellipsis;font-size:9.5px;overflow:hidden}.hwnUuq_state{display:flex;position:absolute;top:45%;left:-9%}.hwnUuq_person[data-running=true] .hwnUuq_body:after{content:\"\";border:1.5px solid var(--team-hue);pointer-events:none;border-radius:50%;animation:2.2s cubic-bezier(.22,1,.36,1) infinite hwnUuq_team-halo;position:absolute;inset:-3% -7% 56%}.hwnUuq_person[aria-current=true] .hwnUuq_plateName{color:var(--dsw-alias-brand-primary);text-underline-offset:3px;text-decoration:underline}.hwnUuq_feed{flex-direction:column;flex:1;gap:8px;min-height:0;display:flex}.hwnUuq_crewList{border:1px solid var(--dsw-alias-border-l2);border-radius:10px;flex-direction:column;flex:none;display:flex;overflow:hidden}.hwnUuq_crewRow{align-items:center;gap:6px;min-width:0;padding:5px 8px;font-size:11px;transition:background .16s;display:flex}.hwnUuq_crewRow+.hwnUuq_crewRow{border-top:1px solid var(--dsw-alias-border-l1)}.hwnUuq_crewRow[data-focus=true]{background:var(--dsw-alias-interactive-bg-hover)}.hwnUuq_crewName{max-width:84px;color:var(--dsw-alias-label-primary);white-space:nowrap;text-overflow:ellipsis;flex:none;font-weight:600;overflow:hidden}.hwnUuq_crewState{color:var(--dsw-alias-label-tertiary);background:var(--team-surface-2);border-radius:999px;flex:none;padding:0 5px;font-size:9.5px}.hwnUuq_crewState[data-state=running]{color:var(--team-hue);background:color-mix(in srgb, var(--team-hue) 14%, transparent)}.hwnUuq_crewOpen{font-variant-numeric:tabular-nums;color:var(--dsw-alias-state-success-primary);border:1px solid color-mix(in srgb, var(--dsw-alias-state-success-primary) 45%, transparent);border-radius:999px;flex:none;padding:0 5px;font-size:9.5px}.hwnUuq_crewLine{text-align:right;min-width:0;color:var(--dsw-alias-label-tertiary);white-space:nowrap;text-overflow:ellipsis;flex:1;overflow:hidden}.hwnUuq_feedTitle{letter-spacing:.06em;text-transform:uppercase;color:var(--dsw-alias-label-dimmed);flex:none;margin:2px 0 0;font-size:10px;font-weight:600}.hwnUuq_log{overscroll-behavior:contain;flex-direction:column;flex:1;gap:6px;min-height:0;padding-right:2px;display:flex;overflow-y:auto}.hwnUuq_logRow{border:1px solid var(--dsw-alias-border-l2);background:var(--team-surface-1);border-radius:10px;align-items:flex-start;gap:7px;padding:5px 6px;transition:border-color .16s,background .16s;animation:.24s cubic-bezier(.22,1,.36,1) both hwnUuq_team-row-in;display:flex}.hwnUuq_logRow[data-focus=true]{border-color:var(--team-hue);background:var(--dsw-alias-interactive-bg-hover)}.hwnUuq_logRow[data-message-kind=report]{border-left:2px solid var(--dsw-alias-state-success-primary)}.hwnUuq_logRow[data-message-kind=settled]{opacity:.72;border-style:dashed}.hwnUuq_logAvatar{width:22px;height:22px;color:var(--dsw-alias-label-secondary);background:var(--team-surface-2);border-radius:50%;flex:none;place-items:center;display:grid;overflow:hidden}.hwnUuq_logBody{flex-direction:column;flex:1;gap:1px;min-width:0;display:flex}.hwnUuq_logHead{color:var(--dsw-alias-label-tertiary);align-items:center;gap:4px;font-size:10px;display:flex}.hwnUuq_logAuthor{color:var(--dsw-alias-label-secondary);font-weight:600}.hwnUuq_logArrow{opacity:.55}.hwnUuq_logTo{color:var(--dsw-alias-label-secondary);font-weight:600}.hwnUuq_logKind{background:var(--team-surface-2);color:var(--dsw-alias-label-secondary);border-radius:999px;padding:0 5px}.hwnUuq_logHop{font-variant-numeric:tabular-nums;border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-tertiary);border-radius:999px;padding:0 5px}.hwnUuq_logRow[data-hop=\"3\"] .hwnUuq_logHop,.hwnUuq_logRow[data-hop=\"4\"] .hwnUuq_logHop,.hwnUuq_logRow[data-hop=\"5\"] .hwnUuq_logHop{color:var(--dsw-alias-state-warn-primary);border-color:var(--dsw-alias-state-warn-primary)}.hwnUuq_logTime{font-variant-numeric:tabular-nums;margin-left:auto}.hwnUuq_logText{color:var(--dsw-alias-label-primary);-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:12px;line-height:1.45;display:-webkit-box;overflow:hidden}.hwnUuq_logTail{color:var(--dsw-alias-label-dimmed);flex:none;align-self:center;display:flex}.hwnUuq_logRow[data-message-kind=message] .hwnUuq_logTail{color:var(--team-hue)}.hwnUuq_cameo{place-items:center;width:100%;height:100%;display:grid}.hwnUuq_cameoCrew{width:88%;height:auto}.hwnUuq_cameoDot{background:var(--team-surface-2);border-radius:50%;flex:none;place-items:center;width:18px;height:18px;display:grid;overflow:hidden}.hwnUuq_cameoDot .hwnUuq_discGlyph{font-size:9px}.hwnUuq_discGlyph{font-size:11px;font-weight:600;line-height:1}.hwnUuq_paneNote{letter-spacing:0;text-transform:none;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-dimmed);margin-left:auto;font-weight:400}.hwnUuq_emptyHint{color:var(--dsw-alias-label-dimmed);margin:2px 0 0;font-size:11.5px}.hwnUuq_drawer[data-panel=workspace] .hwnUuq_drawerBody{background-image:radial-gradient(var(--team-surface-2) 1px, transparent 1.4px);background-size:14px 14px}.hwnUuq_notes{flex-direction:column;gap:10px;padding:4px 2px;display:flex}.hwnUuq_note{border:1px solid color-mix(in srgb, var(--dsw-alias-state-warn-primary) 30%, var(--dsw-alias-border-l2));background:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 8%, var(--dsw-alias-bg-overlay));box-shadow:0 4px 9px var(--dsw-alias-bg-mask-1);transform:rotate(var(--team-tilt,0deg));border-radius:8px;flex-direction:column;gap:3px;padding:10px 10px 8px;transition:border-color .16s,background .16s,transform .16s;display:flex;position:relative}.hwnUuq_note:nth-child(odd){--team-tilt:-1.2deg}.hwnUuq_note:nth-child(2n){--team-tilt:1deg}.hwnUuq_note:before{content:\"\";background:var(--dsw-alias-brand-primary);width:8px;height:8px;box-shadow:0 2px 3px var(--dsw-alias-bg-mask-1);border-radius:50%;margin-left:-4px;position:absolute;top:-4px;left:50%}.hwnUuq_note:hover,.hwnUuq_note[data-focus=true]{transform:none}.hwnUuq_note[data-focus=true]{border-color:var(--team-hue);background:var(--dsw-alias-interactive-bg-hover)}.hwnUuq_noteKey{color:var(--dsw-alias-label-primary);text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:600;overflow:hidden}.hwnUuq_notePreview{color:var(--dsw-alias-label-secondary);-webkit-line-clamp:3;-webkit-box-orient:vertical;font-size:11.5px;line-height:1.45;display:-webkit-box;overflow:hidden}.hwnUuq_noteFoot{color:var(--dsw-alias-label-tertiary);align-items:center;gap:6px;font-size:10.5px;display:flex}.hwnUuq_noteAuthor{color:var(--dsw-alias-label-secondary);align-items:center;gap:5px;display:inline-flex}.hwnUuq_noteTime{font-variant-numeric:tabular-nums;margin-left:auto}.hwnUuq_columns{flex-direction:column;gap:14px;display:flex}.hwnUuq_column{flex-direction:column;gap:6px;min-width:0;display:flex}.hwnUuq_column+.hwnUuq_column{border-top:1px dashed var(--dsw-alias-border-l2);padding-top:12px}.hwnUuq_columnTitle{color:var(--dsw-alias-label-secondary);align-items:center;gap:6px;margin:0;font-size:11px;font-weight:600;display:flex}.hwnUuq_columnTitle:before{content:\"\";background:var(--team-surface-3);border-radius:50%;width:7px;height:7px}.hwnUuq_column[data-column=active] .hwnUuq_columnTitle:before{background:var(--team-hue)}.hwnUuq_column[data-column=done] .hwnUuq_columnTitle:before{background:var(--dsw-alias-state-success-primary)}.hwnUuq_columnCount{font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-dimmed)}.hwnUuq_card{border:1px solid var(--dsw-alias-border-l2);border-radius:10px;flex-direction:column;gap:4px;padding:7px 9px;transition:border-color .16s,background .16s;animation:.24s cubic-bezier(.22,1,.36,1) both hwnUuq_team-row-in;display:flex}.hwnUuq_card[data-focus=true]{border-color:var(--team-hue);background:var(--dsw-alias-interactive-bg-hover)}.hwnUuq_card[data-task-status=active]{border-left:2px solid var(--team-hue)}.hwnUuq_card[data-task-status=done] .hwnUuq_cardTitle{color:var(--dsw-alias-label-tertiary);text-decoration:line-through}.hwnUuq_cardTitle{color:var(--dsw-alias-label-primary);-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:12.5px;line-height:1.4;display:-webkit-box;overflow:hidden}.hwnUuq_cardFoot{color:var(--dsw-alias-label-tertiary);align-items:center;gap:6px;font-size:10.5px;display:flex}.hwnUuq_cardWho{color:var(--dsw-alias-label-secondary);flex:none;align-items:center;gap:5px;display:inline-flex}.hwnUuq_cardNote{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.hwnUuq_screenApp{width:100%;height:100%;display:flex}.hwnUuq_screenApp i{font-style:normal;display:block}.hwnUuq_screenApp[data-app=chart]{align-items:flex-end;gap:2px;padding:4% 6%}.hwnUuq_screenApp[data-app=chart] i{background:linear-gradient(180deg, var(--team-hue) 0%, color-mix(in srgb, var(--team-hue) 40%, var(--dsw-alias-bg-overlay)) 100%);box-shadow:0 1px 3px color-mix(in srgb, var(--team-hue) 30%, transparent);border-radius:1.5px 1.5px .5px .5px;flex:1}.hwnUuq_screenApp[data-app=chart] i:first-child{height:42%}.hwnUuq_screenApp[data-app=chart] i:nth-child(2){height:78%}.hwnUuq_screenApp[data-app=chart] i:nth-child(3){height:56%}.hwnUuq_screenApp[data-app=chart] i:nth-child(4){height:96%}.hwnUuq_screenApp[data-app=chart] i:nth-child(5){background:linear-gradient(180deg, var(--dsw-alias-state-success-primary) 0%, color-mix(in srgb, var(--dsw-alias-state-success-primary) 40%, var(--dsw-alias-bg-overlay)) 100%);height:68%;box-shadow:0 1px 3px color-mix(in srgb, var(--dsw-alias-state-success-primary) 30%, transparent)}.hwnUuq_screenApp[data-app=code]{flex-direction:column;justify-content:center;gap:2px;padding-left:22%;position:relative}.hwnUuq_screenApp[data-app=code]:before{content:\"\";background:linear-gradient(180deg, var(--team-surface-3) 0%, color-mix(in srgb, var(--team-ink) 20%, var(--team-page)) 100%);width:16%;box-shadow:inset -1px 0 0 color-mix(in srgb, var(--team-ink) 12%, transparent);border-radius:1px;position:absolute;top:0;bottom:0;left:0}.hwnUuq_screenApp[data-app=code] i{background:var(--dsw-alias-label-tertiary);opacity:.85;border-radius:1px;height:2px}.hwnUuq_screenApp[data-app=code] i:first-child{background:var(--team-hue);opacity:1;width:62%}.hwnUuq_screenApp[data-app=code] i:nth-child(2){background:color-mix(in srgb, var(--team-warm) 80%, var(--dsw-static-neutral-00));width:88%;margin-left:10%}.hwnUuq_screenApp[data-app=code] i:nth-child(3){background:color-mix(in srgb, var(--team-leaf) 80%, var(--dsw-static-neutral-00));width:46%;margin-left:10%}.hwnUuq_screenApp[data-app=code] i:nth-child(4){background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 70%, var(--dsw-static-neutral-00));width:70%;margin-left:20%}.hwnUuq_screenApp[data-app=code] i:nth-child(5){background:var(--team-hue);width:34%}.hwnUuq_screenApp[data-app=doc]{flex-direction:column;gap:2.5px;padding:4%}.hwnUuq_screenApp[data-app=doc] i{background:var(--dsw-alias-label-tertiary);opacity:.75;border-radius:1px;height:2px}.hwnUuq_screenApp[data-app=doc] i:first-child{background:var(--dsw-alias-label-secondary);opacity:1;width:52%;height:3.5px}.hwnUuq_screenApp[data-app=doc] i:nth-child(2){width:94%}.hwnUuq_screenApp[data-app=doc] i:nth-child(3){width:88%}.hwnUuq_screenApp[data-app=doc] i:nth-child(4){width:62%}.hwnUuq_screenApp[data-app=mail]{flex-direction:column;justify-content:center;gap:3px;padding:3%}.hwnUuq_screenApp[data-app=mail] i{background:color-mix(in srgb, var(--team-ink) 18%, var(--team-page));border-radius:3px;height:26%}.hwnUuq_screenApp[data-app=mail] i:first-child{border-bottom-left-radius:.5px;width:62%}.hwnUuq_screenApp[data-app=mail] i:nth-child(2){background:var(--team-hue);border-bottom-right-radius:.5px;align-self:flex-end;width:56%}.hwnUuq_screenApp[data-app=mail] i:nth-child(3){border-bottom-left-radius:.5px;width:44%}.hwnUuq_screenApp[data-app=grid]{grid-template-columns:1fr 1fr;gap:2.5px;padding:4%;display:grid}.hwnUuq_screenApp[data-app=grid] i{background:color-mix(in srgb, var(--team-ink) 14%, var(--team-page));border:.5px solid color-mix(in srgb, var(--team-ink) 10%, transparent);border-radius:2px}.hwnUuq_screenApp[data-app=grid] i:first-child{background:color-mix(in srgb, var(--team-hue) 45%, var(--team-page));border-color:var(--team-hue)}.hwnUuq_screenApp[data-app=grid] i:nth-child(4){background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 45%, var(--team-page));border-color:var(--dsw-alias-state-success-primary)}.hwnUuq_screenApp[data-app=term]{background:color-mix(in srgb, var(--dsw-static-neutral-1000) 90%, var(--team-hue));border-radius:2px;flex-direction:column;gap:2.5px;padding:3px 4px}.hwnUuq_screenApp[data-app=term] i{background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 92%, transparent);border-radius:1px;height:2px}.hwnUuq_screenApp[data-app=term] i:first-child{background:var(--dsw-alias-state-success-primary);width:58%}.hwnUuq_screenApp[data-app=term] i:nth-child(2){opacity:.7;background:var(--dsw-static-neutral-200);width:82%}.hwnUuq_screenApp[data-app=term] i:nth-child(3){opacity:.7;background:var(--dsw-static-neutral-200);width:40%}.hwnUuq_screenApp[data-app=term] i:nth-child(4){background:var(--dsw-alias-state-success-primary);width:6px;height:3px;animation:1.1s step-end infinite hwnUuq_team-caret}@container (width<=640px){.hwnUuq_barHint,.hwnUuq_stat{display:none}.hwnUuq_stat:first-child{display:inline-block}}@keyframes hwnUuq_team-chair-rise{0%,to{transform:translateY(0)}5%,9%{transform:translateY(-2.5%)}13%{transform:translateY(0)}}@keyframes hwnUuq_team-chair-stretch{0%,to{transform:scaleY(1)}5%,9%{transform:scaleY(1.14)}13%{transform:scaleY(1)}}@keyframes hwnUuq_team-person-sit{0%,to{transform:translate(-50%, -100%) scale(calc(var(--team-scale,1) * var(--team-sit,1)))}5%,9%{transform:translate(-50%, calc(-100% - 1.15%)) scale(calc(var(--team-scale,1) * var(--team-sit,1)))}13%{transform:translate(-50%, -100%) scale(calc(var(--team-scale,1) * var(--team-sit,1)))}}@keyframes hwnUuq_team-stage-in{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}@keyframes hwnUuq_team-person-in{0%{opacity:0;transform:translate(-50%, -90%) scale(calc(var(--team-scale,1) * var(--team-sit,1) * .82))}to{opacity:1;transform:translate(-50%, -100%) scale(calc(var(--team-scale,1) * var(--team-sit,1)))}}@keyframes hwnUuq_team-row-in{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}@keyframes hwnUuq_team-drawer-in{0%{opacity:0;transform:translate(14px)}to{opacity:1;transform:none}}@keyframes hwnUuq_team-say-in{0%{opacity:0;transform:translate(-50%,4px)}to{opacity:1;transform:translate(-50%)}}@keyframes hwnUuq_team-swing{0%,to{transform:rotate(-17deg)}50%{transform:rotate(17deg)}}@keyframes hwnUuq_team-bob{0%,to{transform:translateY(0)}25%{transform:translateY(-3%)}50%{transform:translateY(0)}75%{transform:translateY(-3%)}}@keyframes hwnUuq_team-drift{0%{translate:0}to{translate:230%}}@keyframes hwnUuq_team-sail{0%{translate:0}to{translate:340%}}@keyframes hwnUuq_team-glow{0%,to{opacity:.55}50%{opacity:.95}}@keyframes hwnUuq_team-sway{0%,to{transform:rotate(-2.6deg)}50%{transform:rotate(2.6deg)}}@keyframes hwnUuq_team-bubble{0%{opacity:0;translate:0}12%{opacity:1}88%{opacity:.8}to{opacity:0;translate:0 -44%}}@keyframes hwnUuq_team-prowl{0%,to{opacity:0;left:-12%;transform:scaleX(1)}2%{opacity:1}46%{opacity:1;left:42%;transform:scaleX(1)}50%{opacity:1;left:50%;transform:scaleX(1)}54%{opacity:1;left:62%;transform:scaleX(-1)}92%{opacity:1;left:-12%;transform:scaleX(-1)}94%,to{opacity:0}}@keyframes hwnUuq_team-tick{0%{transform:translateY(-100%)rotate(0)}to{transform:translateY(-100%)rotate(360deg)}}@keyframes hwnUuq_team-steam{0%{opacity:0;transform:translateY(0)scale(.9)}50%{opacity:.8;transform:translateY(-2px)scale(1.05)}to{opacity:0;transform:translateY(-4px)scale(1.2)}}@keyframes hwnUuq_team-breeze{0%{opacity:0;transform:translateY(0)scaleY(.8)}50%{opacity:.75;transform:translateY(3px)scaleY(1.1)}to{opacity:0;transform:translateY(7px)scaleY(1.3)}}@keyframes hwnUuq_team-blink{0%,to{opacity:1}50%{opacity:.25}}@keyframes hwnUuq_team-type{0%{transform:rotate(-4deg)}to{transform:rotate(4deg)}}@keyframes hwnUuq_team-listen{0%,to{opacity:.3}50%{opacity:1}}@keyframes hwnUuq_team-doze{0%{opacity:.2;transform:translateY(2px)}50%{opacity:1;transform:translateY(-3px)}to{opacity:.2;transform:translateY(2px)}}@keyframes hwnUuq_team-screen{0%,to{filter:brightness()}50%{filter:brightness(1.14)}}@keyframes hwnUuq_team-caret{0%,49%{opacity:1}50%,to{opacity:0}}@keyframes hwnUuq_team-halo{0%{opacity:.7;transform:scale(1)}70%{opacity:0;transform:scale(1.3)}to{opacity:0;transform:scale(1.3)}}@media (prefers-reduced-motion:reduce){.hwnUuq_stage,.hwnUuq_person,.hwnUuq_drawer,.hwnUuq_logRow,.hwnUuq_card,.hwnUuq_note,.hwnUuq_speech,.hwnUuq_chairRide,.hwnUuq_chairLift,.hwnUuq_lamp:after,.hwnUuq_pendantGlow,.hwnUuq_cloud,.hwnUuq_sail,.hwnUuq_coolerBubble,.hwnUuq_floraLeaf,.hwnUuq_cat,.hwnUuq_clockHand[data-hand=second],.hwnUuq_propLampLive,.hwnUuq_propSteam,.hwnUuq_acBreeze,.hwnUuq_chairRide,.hwnUuq_chairLift,.hwnUuq_person[data-facing=back],.hwnUuq_person[data-walk=true] .hwnUuq_body,.hwnUuq_person[data-walk=true] .hwnUuq_crewLimbBack,.hwnUuq_person[data-walk=true] .hwnUuq_crewLimbFront,.hwnUuq_person[data-walk=true] .hwnUuq_crewArmBack,.hwnUuq_person[data-walk=true] .hwnUuq_crewArmFront,.hwnUuq_person[data-pose=working] .hwnUuq_crewArmFront,.hwnUuq_person[data-pose=working] .hwnUuq_crewArmBack,.hwnUuq_person[data-running=true] .hwnUuq_body:after,.hwnUuq_desk[data-screen=working] .hwnUuq_screen,.hwnUuq_dockButton[data-fresh=true]:after,.hwnUuq_screenApp[data-app=term] i:nth-child(4),.hwnUuq_listening,.hwnUuq_doze{animation:none}.hwnUuq_person,.hwnUuq_body,.hwnUuq_dockButton,.hwnUuq_card{transition:none}}";
		const tagId = "dsh-team/TeamStage.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-team";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var TeamStage_module_css_default = {
			"crewSaddle": "hwnUuq_crewSaddle",
			"crewEye": "hwnUuq_crewEye",
			"crewCrest": "hwnUuq_crewCrest",
			"boardTrayTop": "hwnUuq_boardTrayTop",
			"deskTop": "hwnUuq_deskTop",
			"barStats": "hwnUuq_barStats",
			"noteTime": "hwnUuq_noteTime",
			"lampFinial": "hwnUuq_lampFinial",
			"crewPenClip": "hwnUuq_crewPenClip",
			"propFolder": "hwnUuq_propFolder",
			"cameo": "hwnUuq_cameo",
			"plateMeta": "hwnUuq_plateMeta",
			"coolerHandleCool": "hwnUuq_coolerHandleCool",
			"propPaperGauge": "hwnUuq_propPaperGauge",
			"plate": "hwnUuq_plate",
			"team-bubble": "hwnUuq_team-bubble",
			"propSvg": "hwnUuq_propSvg",
			"coolerBubble": "hwnUuq_coolerBubble",
			"calendarGrid": "hwnUuq_calendarGrid",
			"acLedCool": "hwnUuq_acLedCool",
			"load": "hwnUuq_load",
			"crewSeam": "hwnUuq_crewSeam",
			"crewTrouserCrease": "hwnUuq_crewTrouserCrease",
			"crewTusk": "hwnUuq_crewTusk",
			"sill": "hwnUuq_sill",
			"propSeam": "hwnUuq_propSeam",
			"crewGlassesFrame": "hwnUuq_crewGlassesFrame",
			"crewCuff": "hwnUuq_crewCuff",
			"lampBeam": "hwnUuq_lampBeam",
			"coolerShineRim": "hwnUuq_coolerShineRim",
			"crewGlassesBridge": "hwnUuq_crewGlassesBridge",
			"crewLine": "hwnUuq_crewLine",
			"crewBlush": "hwnUuq_crewBlush",
			"crewSpeckle": "hwnUuq_crewSpeckle",
			"dock": "hwnUuq_dock",
			"coolerGrille": "hwnUuq_coolerGrille",
			"crewNeckBand": "hwnUuq_crewNeckBand",
			"crewHairHighlight": "hwnUuq_crewHairHighlight",
			"chairSpine": "hwnUuq_chairSpine",
			"crewLimbFront": "hwnUuq_crewLimbFront",
			"shelfPlant": "hwnUuq_shelfPlant",
			"chairSvg": "hwnUuq_chairSvg",
			"floraBloomHeart": "hwnUuq_floraBloomHeart",
			"crewHairShine": "hwnUuq_crewHairShine",
			"treadmill": "hwnUuq_treadmill",
			"boardNote": "hwnUuq_boardNote",
			"propGauge": "hwnUuq_propGauge",
			"sofa": "hwnUuq_sofa",
			"floraSaucer": "hwnUuq_floraSaucer",
			"lampSvg": "hwnUuq_lampSvg",
			"floraMoss": "hwnUuq_floraMoss",
			"utility": "hwnUuq_utility",
			"propScreenGlint": "hwnUuq_propScreenGlint",
			"crewPatch": "hwnUuq_crewPatch",
			"pendantBulb": "hwnUuq_pendantBulb",
			"propTop": "hwnUuq_propTop",
			"crewHand": "hwnUuq_crewHand",
			"crewCansCup": "hwnUuq_crewCansCup",
			"log": "hwnUuq_log",
			"wallBack": "hwnUuq_wallBack",
			"bookLeaning": "hwnUuq_bookLeaning",
			"crewSleeve": "hwnUuq_crewSleeve",
			"drawerBody": "hwnUuq_drawerBody",
			"floraBladeDetail": "hwnUuq_floraBladeDetail",
			"logKind": "hwnUuq_logKind",
			"roomPane": "hwnUuq_roomPane",
			"neck": "hwnUuq_neck",
			"crewButton": "hwnUuq_crewButton",
			"cameoCrew": "hwnUuq_cameoCrew",
			"crewEar": "hwnUuq_crewEar",
			"crown": "hwnUuq_crown",
			"coolerWater": "hwnUuq_coolerWater",
			"chair": "hwnUuq_chair",
			"chairPanStitch": "hwnUuq_chairPanStitch",
			"cooler": "hwnUuq_cooler",
			"crewMelon": "hwnUuq_crewMelon",
			"tableSaucer": "hwnUuq_tableSaucer",
			"screen": "hwnUuq_screen",
			"crewShoeTrim": "hwnUuq_crewShoeTrim",
			"crewShirt": "hwnUuq_crewShirt",
			"speech": "hwnUuq_speech",
			"plankBracket": "hwnUuq_plankBracket",
			"team-sway": "hwnUuq_team-sway",
			"crewBrow": "hwnUuq_crewBrow",
			"crewCrossStrap": "hwnUuq_crewCrossStrap",
			"deskApron": "hwnUuq_deskApron",
			"floraShade": "hwnUuq_floraShade",
			"propBoxTop": "hwnUuq_propBoxTop",
			"logHop": "hwnUuq_logHop",
			"stage": "hwnUuq_stage",
			"bar": "hwnUuq_bar",
			"propBox": "hwnUuq_propBox",
			"chairCasters": "hwnUuq_chairCasters",
			"crewShoeStripe": "hwnUuq_crewShoeStripe",
			"crewScarf": "hwnUuq_crewScarf",
			"crewBadge": "hwnUuq_crewBadge",
			"crewArmFront": "hwnUuq_crewArmFront",
			"lounge": "hwnUuq_lounge",
			"drawerClose": "hwnUuq_drawerClose",
			"tableLeg": "hwnUuq_tableLeg",
			"rug": "hwnUuq_rug",
			"mullion": "hwnUuq_mullion",
			"wall": "hwnUuq_wall",
			"cardTitle": "hwnUuq_cardTitle",
			"crewCans": "hwnUuq_crewCans",
			"mug": "hwnUuq_mug",
			"propBrew": "hwnUuq_propBrew",
			"propLampWifi": "hwnUuq_propLampWifi",
			"crewScarfFringe": "hwnUuq_crewScarfFringe",
			"feed": "hwnUuq_feed",
			"team-drawer-in": "hwnUuq_team-drawer-in",
			"logArrow": "hwnUuq_logArrow",
			"crewSpout": "hwnUuq_crewSpout",
			"sofaButton": "hwnUuq_sofaButton",
			"catEye": "hwnUuq_catEye",
			"coolerTap": "hwnUuq_coolerTap",
			"logRow": "hwnUuq_logRow",
			"crewCollar": "hwnUuq_crewCollar",
			"crewKnitLine": "hwnUuq_crewKnitLine",
			"crewPlacket": "hwnUuq_crewPlacket",
			"crewShoeBuckle": "hwnUuq_crewShoeBuckle",
			"crewRow": "hwnUuq_crewRow",
			"crewHair": "hwnUuq_crewHair",
			"hanger": "hwnUuq_hanger",
			"floraRim": "hwnUuq_floraRim",
			"deskModesty": "hwnUuq_deskModesty",
			"coolerDripWell": "hwnUuq_coolerDripWell",
			"empty": "hwnUuq_empty",
			"beam": "hwnUuq_beam",
			"crewClip": "hwnUuq_crewClip",
			"tableTop": "hwnUuq_tableTop",
			"crewState": "hwnUuq_crewState",
			"coolerHandleWarm": "hwnUuq_coolerHandleWarm",
			"crewNeck": "hwnUuq_crewNeck",
			"crew": "hwnUuq_crew",
			"team-blink": "hwnUuq_team-blink",
			"crewBelt": "hwnUuq_crewBelt",
			"crewHoodShade": "hwnUuq_crewHoodShade",
			"deskFlank": "hwnUuq_deskFlank",
			"drawerHead": "hwnUuq_drawerHead",
			"sillTop": "hwnUuq_sillTop",
			"crewJacket": "hwnUuq_crewJacket",
			"sofaSeatPiping": "hwnUuq_sofaSeatPiping",
			"propWarmerPlate": "hwnUuq_propWarmerPlate",
			"dockButton": "hwnUuq_dockButton",
			"crewBadgeLine": "hwnUuq_crewBadgeLine",
			"propGaugeNeedle": "hwnUuq_propGaugeNeedle",
			"crewOpen": "hwnUuq_crewOpen",
			"chairLift": "hwnUuq_chairLift",
			"floraBlade": "hwnUuq_floraBlade",
			"acSvg": "hwnUuq_acSvg",
			"statLive": "hwnUuq_statLive",
			"propTray": "hwnUuq_propTray",
			"propSteam": "hwnUuq_propSteam",
			"catTailTip": "hwnUuq_catTailTip",
			"noteKey": "hwnUuq_noteKey",
			"boardGhost": "hwnUuq_boardGhost",
			"deskPlant": "hwnUuq_deskPlant",
			"crewPocketStitch": "hwnUuq_crewPocketStitch",
			"team-caret": "hwnUuq_team-caret",
			"catWhisker": "hwnUuq_catWhisker",
			"coolerCapTop": "hwnUuq_coolerCapTop",
			"plant": "hwnUuq_plant",
			"monitor": "hwnUuq_monitor",
			"treadmillScreen": "hwnUuq_treadmillScreen",
			"floraPot": "hwnUuq_floraPot",
			"crewScrunchie": "hwnUuq_crewScrunchie",
			"cat": "hwnUuq_cat",
			"whiteboard": "hwnUuq_whiteboard",
			"sofaArm": "hwnUuq_sofaArm",
			"sofaLeg": "hwnUuq_sofaLeg",
			"tableCup": "hwnUuq_tableCup",
			"coolerLedCold": "hwnUuq_coolerLedCold",
			"lamp": "hwnUuq_lamp",
			"plank": "hwnUuq_plank",
			"barIcon": "hwnUuq_barIcon",
			"treadmillTread": "hwnUuq_treadmillTread",
			"propLampLive": "hwnUuq_propLampLive",
			"ceiling": "hwnUuq_ceiling",
			"cloud": "hwnUuq_cloud",
			"crewShoe": "hwnUuq_crewShoe",
			"chairHub": "hwnUuq_chairHub",
			"crewFace": "hwnUuq_crewFace",
			"sea": "hwnUuq_sea",
			"clockHand": "hwnUuq_clockHand",
			"team-type": "hwnUuq_team-type",
			"logTo": "hwnUuq_logTo",
			"floraStem": "hwnUuq_floraStem",
			"treadmillRail": "hwnUuq_treadmillRail",
			"feedTitle": "hwnUuq_feedTitle",
			"cardNote": "hwnUuq_cardNote",
			"coolerPanelDepth": "hwnUuq_coolerPanelDepth",
			"propLampIdle": "hwnUuq_propLampIdle",
			"lampShade": "hwnUuq_lampShade",
			"propCarafeHandle": "hwnUuq_propCarafeHandle",
			"dockCount": "hwnUuq_dockCount",
			"glare": "hwnUuq_glare",
			"crewPackTrim": "hwnUuq_crewPackTrim",
			"team-say-in": "hwnUuq_team-say-in",
			"columnCount": "hwnUuq_columnCount",
			"logTime": "hwnUuq_logTime",
			"propSide": "hwnUuq_propSide",
			"propGlass": "hwnUuq_propGlass",
			"catBody": "hwnUuq_catBody",
			"sofaSeat": "hwnUuq_sofaSeat",
			"stat": "hwnUuq_stat",
			"paneNote": "hwnUuq_paneNote",
			"paneTitle": "hwnUuq_paneTitle",
			"crewList": "hwnUuq_crewList",
			"propLabel": "hwnUuq_propLabel",
			"catGlint": "hwnUuq_catGlint",
			"cameoDot": "hwnUuq_cameoDot",
			"sail": "hwnUuq_sail",
			"lampStem": "hwnUuq_lampStem",
			"lampShadeBottom": "hwnUuq_lampShadeBottom",
			"propBean": "hwnUuq_propBean",
			"window": "hwnUuq_window",
			"chairLumbarKnob": "hwnUuq_chairLumbarKnob",
			"boardEraser": "hwnUuq_boardEraser",
			"propFront": "hwnUuq_propFront",
			"crewGlassesGlass": "hwnUuq_crewGlassesGlass",
			"sofaPillowWarm": "hwnUuq_sofaPillowWarm",
			"state": "hwnUuq_state",
			"coolerDrip": "hwnUuq_coolerDrip",
			"treadmillSensor": "hwnUuq_treadmillSensor",
			"crewRib": "hwnUuq_crewRib",
			"tableMagazine": "hwnUuq_tableMagazine",
			"logText": "hwnUuq_logText",
			"screenText": "hwnUuq_screenText",
			"crewHoodRidge": "hwnUuq_crewHoodRidge",
			"sky": "hwnUuq_sky",
			"crewBlowhole": "hwnUuq_crewBlowhole",
			"crewKnobHighlight": "hwnUuq_crewKnobHighlight",
			"coolerFaucet": "hwnUuq_coolerFaucet",
			"keyboard": "hwnUuq_keyboard",
			"acEdge": "hwnUuq_acEdge",
			"pendantMouth": "hwnUuq_pendantMouth",
			"floraSaucerLip": "hwnUuq_floraSaucerLip",
			"crewPackZip": "hwnUuq_crewPackZip",
			"tableMagPage": "hwnUuq_tableMagPage",
			"floraBladeLit": "hwnUuq_floraBladeLit",
			"pendant": "hwnUuq_pendant",
			"floraCactusDetails": "hwnUuq_floraCactusDetails",
			"coolerNeck": "hwnUuq_coolerNeck",
			"catTail": "hwnUuq_catTail",
			"crewNose": "hwnUuq_crewNose",
			"crewStrap": "hwnUuq_crewStrap",
			"utilityCabinet": "hwnUuq_utilityCabinet",
			"team-screen": "hwnUuq_team-screen",
			"composerAway": "hwnUuq_composerAway",
			"team-tick": "hwnUuq_team-tick",
			"team-glow": "hwnUuq_team-glow",
			"pendantGlow": "hwnUuq_pendantGlow",
			"team-chair-rise": "hwnUuq_team-chair-rise",
			"acSeam": "hwnUuq_acSeam",
			"chairMechanism": "hwnUuq_chairMechanism",
			"screenApp": "hwnUuq_screenApp",
			"team-person-sit": "hwnUuq_team-person-sit",
			"crewWrinkle": "hwnUuq_crewWrinkle",
			"crewBuckle": "hwnUuq_crewBuckle",
			"crewPupil": "hwnUuq_crewPupil",
			"team-prowl": "hwnUuq_team-prowl",
			"coolerCabinet": "hwnUuq_coolerCabinet",
			"chairSpokes": "hwnUuq_chairSpokes",
			"treadmillHood": "hwnUuq_treadmillHood",
			"crewBadgePhoto": "hwnUuq_crewBadgePhoto",
			"team-chair-stretch": "hwnUuq_team-chair-stretch",
			"treadmillConsole": "hwnUuq_treadmillConsole",
			"crewArmBack": "hwnUuq_crewArmBack",
			"treadmillHoodSheen": "hwnUuq_treadmillHoodSheen",
			"reveal": "hwnUuq_reveal",
			"team-person-in": "hwnUuq_team-person-in",
			"crewHoodFabric": "hwnUuq_crewHoodFabric",
			"acGrille": "hwnUuq_acGrille",
			"crewHoodSheen": "hwnUuq_crewHoodSheen",
			"catEarInner": "hwnUuq_catEarInner",
			"clockTicks": "hwnUuq_clockTicks",
			"coolerDoorSeam": "hwnUuq_coolerDoorSeam",
			"tableSvg": "hwnUuq_tableSvg",
			"crewGlasses": "hwnUuq_crewGlasses",
			"person": "hwnUuq_person",
			"boardPens": "hwnUuq_boardPens",
			"catPupil": "hwnUuq_catPupil",
			"propHandle": "hwnUuq_propHandle",
			"crewHood": "hwnUuq_crewHood",
			"crewCansCushion": "hwnUuq_crewCansCushion",
			"propPortafilter": "hwnUuq_propPortafilter",
			"propDrawerHandle": "hwnUuq_propDrawerHandle",
			"hangerPlant": "hwnUuq_hangerPlant",
			"discGlyph": "hwnUuq_discGlyph",
			"treadmillMetrics": "hwnUuq_treadmillMetrics",
			"crewLimbBack": "hwnUuq_crewLimbBack",
			"noteFoot": "hwnUuq_noteFoot",
			"blankHint": "hwnUuq_blankHint",
			"pendantSvg": "hwnUuq_pendantSvg",
			"columns": "hwnUuq_columns",
			"crewCord": "hwnUuq_crewCord",
			"plankTop": "hwnUuq_plankTop",
			"treadmillKeyCord": "hwnUuq_treadmillKeyCord",
			"columnTitle": "hwnUuq_columnTitle",
			"note": "hwnUuq_note",
			"crewAglet": "hwnUuq_crewAglet",
			"treadmillSvg": "hwnUuq_treadmillSvg",
			"propShade": "hwnUuq_propShade",
			"crewMouth": "hwnUuq_crewMouth",
			"pendantFilament": "hwnUuq_pendantFilament",
			"propScreen": "hwnUuq_propScreen",
			"propFolderTab": "hwnUuq_propFolderTab",
			"cardWho": "hwnUuq_cardWho",
			"tableSurface": "hwnUuq_tableSurface",
			"tableMugHandle": "hwnUuq_tableMugHandle",
			"acLedPower": "hwnUuq_acLedPower",
			"team-drift": "hwnUuq_team-drift",
			"chairMesh": "hwnUuq_chairMesh",
			"crewTuskSpiral": "hwnUuq_crewTuskSpiral",
			"emptyHint": "hwnUuq_emptyHint",
			"chairShellEdge": "hwnUuq_chairShellEdge",
			"treadmillBottle": "hwnUuq_treadmillBottle",
			"deskGrain": "hwnUuq_deskGrain",
			"hangerBracket": "hwnUuq_hangerBracket",
			"scene": "hwnUuq_scene",
			"logAuthor": "hwnUuq_logAuthor",
			"team-halo": "hwnUuq_team-halo",
			"boardInk": "hwnUuq_boardInk",
			"crewStripes": "hwnUuq_crewStripes",
			"team-doze": "hwnUuq_team-doze",
			"logTail": "hwnUuq_logTail",
			"sofaArmTop": "hwnUuq_sofaArmTop",
			"crewMelonHighlight": "hwnUuq_crewMelonHighlight",
			"pendantFlex": "hwnUuq_pendantFlex",
			"notePreview": "hwnUuq_notePreview",
			"crewStrapBuckle": "hwnUuq_crewStrapBuckle",
			"base": "hwnUuq_base",
			"acLouver": "hwnUuq_acLouver",
			"crewPackHandle": "hwnUuq_crewPackHandle",
			"airConditioner": "hwnUuq_airConditioner",
			"crewVest": "hwnUuq_crewVest",
			"logBody": "hwnUuq_logBody",
			"propLabelLine": "hwnUuq_propLabelLine",
			"crewPocket": "hwnUuq_crewPocket",
			"floraSpine": "hwnUuq_floraSpine",
			"wallLeft": "hwnUuq_wallLeft",
			"chairPan": "hwnUuq_chairPan",
			"team-bob": "hwnUuq_team-bob",
			"floraGlaze": "hwnUuq_floraGlaze",
			"coolerRib": "hwnUuq_coolerRib",
			"floraVein": "hwnUuq_floraVein",
			"team-steam": "hwnUuq_team-steam",
			"barHint": "hwnUuq_barHint",
			"crewFlipperTrim": "hwnUuq_crewFlipperTrim",
			"crewShoeBadge": "hwnUuq_crewShoeBadge",
			"plateName": "hwnUuq_plateName",
			"floraBloom": "hwnUuq_floraBloom",
			"treadmillArm": "hwnUuq_treadmillArm",
			"floraLeaf": "hwnUuq_floraLeaf",
			"crewCansBand": "hwnUuq_crewCansBand",
			"propBoxHole": "hwnUuq_propBoxHole",
			"chairRide": "hwnUuq_chairRide",
			"chairMeshLine": "hwnUuq_chairMeshLine",
			"crewShoeToe": "hwnUuq_crewShoeToe",
			"coolerSvg": "hwnUuq_coolerSvg",
			"coolerPanel": "hwnUuq_coolerPanel",
			"wallRight": "hwnUuq_wallRight",
			"sofaSeatSeam": "hwnUuq_sofaSeatSeam",
			"trophy": "hwnUuq_trophy",
			"logHead": "hwnUuq_logHead",
			"deskLegs": "hwnUuq_deskLegs",
			"crewShoeSole": "hwnUuq_crewShoeSole",
			"floraSoil": "hwnUuq_floraSoil",
			"column": "hwnUuq_column",
			"coolerBottle": "hwnUuq_coolerBottle",
			"books": "hwnUuq_books",
			"figure": "hwnUuq_figure",
			"crewGill": "hwnUuq_crewGill",
			"treadmillHoodVent": "hwnUuq_treadmillHoodVent",
			"clockProp": "hwnUuq_clockProp",
			"notes": "hwnUuq_notes",
			"floraCrumb": "hwnUuq_floraCrumb",
			"team-listen": "hwnUuq_team-listen",
			"logAvatar": "hwnUuq_logAvatar",
			"lampBulb": "hwnUuq_lampBulb",
			"drawer": "hwnUuq_drawer",
			"catEar": "hwnUuq_catEar",
			"team-row-in": "hwnUuq_team-row-in",
			"acTemp": "hwnUuq_acTemp",
			"deskSurface": "hwnUuq_deskSurface",
			"acBreeze": "hwnUuq_acBreeze",
			"chairPanTop": "hwnUuq_chairPanTop",
			"crewPackPocket": "hwnUuq_crewPackPocket",
			"barTitle": "hwnUuq_barTitle",
			"floraBloomStamen": "hwnUuq_floraBloomStamen",
			"coolerLedPower": "hwnUuq_coolerLedPower",
			"propTextLines": "hwnUuq_propTextLines",
			"pendantNeck": "hwnUuq_pendantNeck",
			"crewTuskGroup": "hwnUuq_crewTuskGroup",
			"crewTrouser": "hwnUuq_crewTrouser",
			"acBody": "hwnUuq_acBody",
			"catSvg": "hwnUuq_catSvg",
			"coolerCabinetEdge": "hwnUuq_coolerCabinetEdge",
			"lampShadeTop": "hwnUuq_lampShadeTop",
			"catStripe": "hwnUuq_catStripe",
			"sofaSeam": "hwnUuq_sofaSeam",
			"crewSmile": "hwnUuq_crewSmile",
			"crewEyeGlint": "hwnUuq_crewEyeGlint",
			"listening": "hwnUuq_listening",
			"pane": "hwnUuq_pane",
			"crewBelly": "hwnUuq_crewBelly",
			"floor": "hwnUuq_floor",
			"calendar": "hwnUuq_calendar",
			"crewDroplet": "hwnUuq_crewDroplet",
			"blankTitle": "hwnUuq_blankTitle",
			"sofaPillowLine": "hwnUuq_sofaPillowLine",
			"calendarHead": "hwnUuq_calendarHead",
			"coolerCap": "hwnUuq_coolerCap",
			"coolerShine": "hwnUuq_coolerShine",
			"cardFoot": "hwnUuq_cardFoot",
			"propMugHandle": "hwnUuq_propMugHandle",
			"treadmillStopKey": "hwnUuq_treadmillStopKey",
			"team-breeze": "hwnUuq_team-breeze",
			"table": "hwnUuq_table",
			"crewStitch": "hwnUuq_crewStitch",
			"treadmillBase": "hwnUuq_treadmillBase",
			"treadmillPost": "hwnUuq_treadmillPost",
			"crewScarfPattern": "hwnUuq_crewScarfPattern",
			"utilityPrinter": "hwnUuq_utilityPrinter",
			"propCup": "hwnUuq_propCup",
			"body": "hwnUuq_body",
			"propPaperLine": "hwnUuq_propPaperLine",
			"pendantShade": "hwnUuq_pendantShade",
			"team-sail": "hwnUuq_team-sail",
			"crewEyeGlintSub": "hwnUuq_crewEyeGlintSub",
			"crewDraw": "hwnUuq_crewDraw",
			"treadmillBelt": "hwnUuq_treadmillBelt",
			"crewKnob": "hwnUuq_crewKnob",
			"crewHoodOpening": "hwnUuq_crewHoodOpening",
			"tableEdge": "hwnUuq_tableEdge",
			"propScannerHandle": "hwnUuq_propScannerHandle",
			"shell": "hwnUuq_shell",
			"team-swing": "hwnUuq_team-swing",
			"propPaper": "hwnUuq_propPaper",
			"floorPlane": "hwnUuq_floorPlane",
			"boardTray": "hwnUuq_boardTray",
			"sofaPillowCool": "hwnUuq_sofaPillowCool",
			"floraPotShade": "hwnUuq_floraPotShade",
			"chairShell": "hwnUuq_chairShell",
			"crewBib": "hwnUuq_crewBib",
			"shelf": "hwnUuq_shelf",
			"pendantRose": "hwnUuq_pendantRose",
			"doze": "hwnUuq_doze",
			"chairLumbar": "hwnUuq_chairLumbar",
			"chairMeshSpine": "hwnUuq_chairMeshSpine",
			"desk": "hwnUuq_desk",
			"papers": "hwnUuq_papers",
			"sofaBackTop": "hwnUuq_sofaBackTop",
			"clockPin": "hwnUuq_clockPin",
			"propInset": "hwnUuq_propInset",
			"floraRimLip": "hwnUuq_floraRimLip",
			"sofaBack": "hwnUuq_sofaBack",
			"team-stage-in": "hwnUuq_team-stage-in",
			"noteAuthor": "hwnUuq_noteAuthor",
			"crewName": "hwnUuq_crewName",
			"tableGrain": "hwnUuq_tableGrain",
			"lampBase": "hwnUuq_lampBase",
			"flora": "hwnUuq_flora",
			"crewPleat": "hwnUuq_crewPleat",
			"skirting": "hwnUuq_skirting",
			"card": "hwnUuq_card",
			"catLeg": "hwnUuq_catLeg",
			"propSpout": "hwnUuq_propSpout",
			"crewCansPivot": "hwnUuq_crewCansPivot",
			"crewFacialGroup": "hwnUuq_crewFacialGroup",
			"utilityCoffee": "hwnUuq_utilityCoffee",
			"floraBloomOuter": "hwnUuq_floraBloomOuter",
			"chairArmrest": "hwnUuq_chairArmrest",
			"crewPack": "hwnUuq_crewPack",
			"crewShoeEyelet": "hwnUuq_crewShoeEyelet",
			"sofaSvg": "hwnUuq_sofaSvg",
			"catNose": "hwnUuq_catNose"
		};
		//#endregion
		//#region src/client/crew.tsx
		/**
		* The team's cast: one crew member per seat, and a different sea-creature
		* hood per seat, so a member is recognizable in the room before its nameplate
		* is read.
		*
		* Every character is a person — shoes, trousers, a shirt, arms at its sides —
		* wearing a whale or shark as an exquisite plush hood: the hood is drawn in
		* profile, snout forward and flukes over the back of the head, because a whale
		* reads as a whale from the side and as a blob from the front. The face looks out
		* from under its chin with delicate chibi-style catchlights and expressions.
		* Legs and arms are their own groups so the stylesheet can swing them while the
		* member walks.
		*
		* Under the hood everybody is their own person: a hairstyle, a hair colour, a
		* skin tone, an outfit, shoes and one piece of gear, all picked by seat index
		* so a member looks the same on every render and no two neighbours are twins.
		* Tone and skin ride data attributes rather than inline colours, so the theme
		* still owns the palette.
		*
		* A member at work is drawn from BEHIND: the screen faces the room, so its
		* owner faces the screen. The back view keeps the same figure and turns the
		* hood the other way — snout toward the monitor on its left — so the hood is
		* still read in profile while the human face, which nobody needs while somebody
		* is typing, is simply not there to draw.
		*/
		/** The sea-creature hoods a seat can wear, in the order seats take them. */
		const MASKS = [
			"blue",
			"orca",
			"humpback",
			"narwhal",
			"beluga",
			"sperm",
			"shark"
		];
		/** Hue shifts of the room's colour, one per seat: stable, distinct, theme-owned. */
		const ACCENTS = [
			0,
			46,
			96,
			148,
			200,
			252,
			296,
			330
		];
		/**
		* The seat's own accent, as a style object: the room's one saturated token
		* turned by this much, never a literal color, so a theme change carries every
		* member along. The leader keeps the unturned blue its whale is named for, and
		* the teammates start one step past it.
		* @param seat - the member's index on the roster; the leader passes -1.
		* @returns the custom property the stage styles read.
		*/
		function accentOf(seat) {
			return { "--team-accent-shift": `${seat < 0 ? 0 : ACCENTS[(seat + 1) % ACCENTS.length] ?? 0}deg` };
		}
		/** Pick the nth entry of a wardrobe rack, counting the leader as the first. */
		function pick(rack, seat) {
			return rack[Math.max(0, seat + 1) % rack.length] ?? rack[0];
		}
		/**
		* The hood one seat wears: the leader takes the blue whale the room is built
		* around, teammates take the rest in roster order.
		* @param seat - the member's index on the roster; the leader passes -1.
		* @returns the kind.
		*/
		function maskOf(seat) {
			if (seat < 0) return "blue";
			return pick(MASKS, seat);
		}
		/** The outfits a seat can wear, in the order seats take them. */
		const OUTFITS = [
			"shirt",
			"tee",
			"sweater",
			"polo",
			"hoodie",
			"tunic",
			"vest",
			"jacket",
			"stripes",
			"dungarees"
		];
		/** The shoes a seat can wear, in the order seats take them. */
		const SHOE_KINDS = [
			"sneaker",
			"boot",
			"loafer",
			"hightop",
			"sandal"
		];
		/** The hairstyles a seat can wear, in the order seats take them. */
		const HAIRS = [
			"fringe",
			"bun",
			"curls",
			"crop",
			"ponytail",
			"buzz"
		];
		/** The one thing a member carries or wears besides its clothes. */
		const GEARS = [
			"none",
			"glasses",
			"headphones",
			"scarf",
			"lanyard",
			"backpack"
		];
		/** How many hair colours the stylesheet keeps. */
		const HAIR_TONES = 5;
		/** How many skin tones the stylesheet keeps. */
		const SKIN_TONES = 4;
		/**
		* The outfit one seat wears: the leader keeps the tailored shirt, teammates
		* take the rest in roster order, so a full team is not a row of identical
		* shirts.
		* @param seat - the member's index on the roster; the leader passes -1.
		* @returns the kind.
		*/
		function outfitOf(seat) {
			if (seat < 0) return "shirt";
			return pick(OUTFITS, seat);
		}
		/**
		* The shoes one seat wears; each pair is tinted by the seat's own accent.
		* @param seat - the member's index on the roster; the leader passes -1.
		* @returns the kind.
		*/
		function shoeOf(seat) {
			if (seat < 0) return "sneaker";
			return pick(SHOE_KINDS, seat);
		}
		/**
		* The hairstyle one seat wears. It is picked off a different-length rack to
		* the outfits and the hoods, so the three cycles fall out of step and two
		* members never end up dressed identically from head to foot.
		* @param seat - the member's index on the roster; the leader passes -1.
		* @returns the kind.
		*/
		function hairOf(seat) {
			if (seat < 0) return "crop";
			return pick(HAIRS, seat);
		}
		/**
		* Which of the stylesheet's hair colours this seat has. Hair is NOT tinted by
		* the seat accent: rotating the room's blue would give a team with green and
		* magenta hair, and the accent is already carried by the hood, the mug and the
		* shoes.
		* @param seat - the member's index on the roster; the leader passes -1.
		* @returns the tone index the stylesheet keys on.
		*/
		function toneOf(seat) {
			return Math.max(0, seat + 1) * 3 % HAIR_TONES;
		}
		/**
		* Which of the stylesheet's skin tones this seat has.
		* @param seat - the member's index on the roster; the leader passes -1.
		* @returns the tone index the stylesheet keys on.
		*/
		function skinOf(seat) {
			return Math.max(0, seat + 1) * 5 % SKIN_TONES;
		}
		/**
		* The one thing this seat wears besides its clothes. A third of the team
		* carries nothing: gear reads as a detail only while it is not universal.
		* @param seat - the member's index on the roster; the leader passes -1.
		* @returns the kind.
		*/
		function gearOf(seat) {
			if (seat < 0) return "lanyard";
			return pick(GEARS, seat);
		}
		/** One shoe path, mirrored per side. */
		function shoePath(kind, side) {
			const flip = side === "right";
			const inner = flip ? 32.9 : 31.1;
			const outer = flip ? 45.2 : 18.8;
			const toe = flip ? 42 : 22;
			const way = flip ? -1 : 1;
			if (kind === "boot") return `M${toe} 78 H${inner} V95 Q${inner} 100 ${inner - way * 3.5} 100 H${outer + way * 1.6} Q${outer} 100 ${outer} 98.4 L${outer} 93.5 L${outer + way * 2} 92 L${toe} 90.5 Z`;
			if (kind === "loafer") return `M${toe} 93 H${inner} V97 Q${inner} 100 ${inner - way * 3.5} 100 H${outer + way * 1.6} Q${outer} 100 ${outer} 98.4 Q${outer} 96.8 ${outer + way * 2} 95.9 L${toe} 94.8 Z`;
			if (kind === "hightop") return `M${toe} 85 H${inner} V96 Q${inner} 100 ${inner - way * 3.5} 100 H${outer + way * 1.6} Q${outer} 100 ${outer} 98.2 Q${outer} 96 ${outer + way * 2} 94.8 L${toe} 93.2 Z`;
			if (kind === "sandal") return `M${toe} 95.5 H${inner} V97.5 Q${inner} 100 ${inner - way * 3.5} 100 H${outer + way * 1.6} Q${outer} 100 ${outer} 98.6 Q${outer} 97.4 ${outer + way * 2} 96.8 L${toe} 96.2 Z`;
			return `M${toe} 90 H${inner} V97 Q${inner} 100 ${inner - way * 3.5} 100 H${outer + way * 1.6} Q${outer} 100 ${outer} 98.4 Q${outer} 96.6 ${outer + way * 2} 95.4 L${toe} 94.2 Z`;
		}
		/** The sole edge under a shoe, and the laces, buckles or straps across it. */
		function shoeTrim(kind, side) {
			const flip = side === "right";
			const at = flip ? 37 : 27;
			const toeX = flip ? 41 : 23;
			if (kind === "sandal") return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				className: TeamStage_module_css_default.crewShoeTrim,
				d: `M${at - 4.5} 97.5 L${at + 4.5} 96.5 M${at - 4.5} 99 L${at + 4.5} 98.2`
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				className: TeamStage_module_css_default.crewShoeSole,
				d: `M${at - 5} 99.5 H${at + 5}`
			})] });
			if (kind === "boot") return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewShoeTrim,
					d: `M${at - 4.2} 82.5 H${at + 4.2} M${at - 4.2} 86.5 H${at + 4.2} M${at - 4.2} 90.5 H${at + 4.2}`
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewShoeSole,
					d: `M${at - 5.5} 99.2 H${at + 5.5}`
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
					className: TeamStage_module_css_default.crewShoeEyelet,
					cx: at - 2.5,
					cy: 82.5,
					r: .6
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
					className: TeamStage_module_css_default.crewShoeEyelet,
					cx: at + 2.5,
					cy: 82.5,
					r: .6
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
					className: TeamStage_module_css_default.crewShoeEyelet,
					cx: at - 2.5,
					cy: 86.5,
					r: .6
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
					className: TeamStage_module_css_default.crewShoeEyelet,
					cx: at + 2.5,
					cy: 86.5,
					r: .6
				})
			] });
			if (kind === "hightop") return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewShoeTrim,
					d: `M${at - 3.8} 88.5 H${at + 3.8} M${at - 3.8} 92 H${at + 3.8}`
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
					className: TeamStage_module_css_default.crewShoeBadge,
					cx: flip ? at - 2 : at + 2,
					cy: 89,
					r: 1.6
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewShoeToe,
					d: `M${toeX - 2.2} 95.5 Q${toeX} 93.5 ${toeX + 2.2} 95.5`
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewShoeSole,
					d: `M${at - 5.2} 99 H${at + 5.2}`
				})
			] });
			if (kind === "loafer") return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewShoeTrim,
					d: `M${at - 3.5} 95.5 H${at + 3.5}`
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
					className: TeamStage_module_css_default.crewShoeBuckle,
					x: at - 2,
					y: 94.5,
					width: 4,
					height: 2,
					rx: .6
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewShoeSole,
					d: `M${at - 5} 99.2 H${at + 5}`
				})
			] });
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewShoeTrim,
					d: `M${at - 3.8} 93 H${at + 3.8} M${at - 3.2} 95.2 H${at + 3.2}`
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewShoeToe,
					d: `M${toeX - 2} 96 Q${toeX} 94.2 ${toeX + 2} 96`
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewShoeSole,
					d: `M${at - 5.2} 99 H${at + 5.2}`
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewShoeStripe,
					d: `M${at - 3} 94.5 Q${at} 96.5 ${at + 3} 94.5`
				})
			] });
		}
		/** The whale worn as a hood: flukes at the left, snout out to the right, contoured curves. */
		const WHALE = "M9 10 C9 -7 20 -17 37 -17 C52 -17 62 -9 66 1.5 C67.5 5 66 9.2 61.5 9.8 C52 11.5 44 15.5 36 20.5 C28 25.5 18.5 26.5 13.5 24.5 C9.8 22.5 9 17 9 10 Z";
		/** The flukes, one upper lobe and one lower lobe with refined scalloped curve. */
		const FLUKES = "M10 2.5 C4.5 -1.5 0.5 -7.5 -0.5 -15 C5.5 -12 10 -6.5 12.5 -1.5 Z M9 14.5 C4 17.5 0 23 -2 29.5 C4.5 28 9.5 23.5 13 18.5 Z";
		/** The pale underside, from the throat pleats to the tip of the lower jaw. */
		const BELLY = "M14 21.5 C20.5 24.5 28.5 23.5 35.5 19.5 C42.5 15.5 51.5 11 59.5 10 C51.5 15.5 43.5 19.5 35.5 23 C27.5 26.5 18 26.5 14 21.5 Z";
		/** The inner face opening of the plush hood, casting an ambient shadow over the face. */
		const HOOD_OPENING_RIM = "M18 28.5 C18 19.5 23.5 13 32 13 C40.5 13 46 19.5 46 28.5 C46 36.5 40 43 32 43 C24 43 18 36.5 18 28.5 Z";
		/** The shirt: refined shoulder curve, straight body, tailored hem over the hips. */
		const SHIRT = "M32 46 C40.5 46 46 50.2 47 58.5 L48 76 C48 79 46.2 80.5 43 80.5 L21 80.5 C17.8 80.5 16 79 16 76 L17 58.5 C18 50.2 23.5 46 32 46 Z";
		/** The seam over each shoulder, where the sleeve is set into the body. */
		const SHOULDER_SEAM = "M21.5 51 C23.5 54.5 24 59.5 24 64 M42.5 51 C40.5 54.5 40 59.5 40 64";
		/** The fold the hem falls into over the hips. */
		const HEM_FOLD = "M17.5 77.5 C24 79.8 40 79.8 46.5 77.5";
		/**
		* The back of the head hairstyles, richly styled with layers, highlights,
		* textures and distinct shapes.
		*/
		const CAPS = {
			fringe: "M17.5 30 C17.5 17.5 23 10.5 32 10.5 C41 10.5 46.5 17.5 46.5 30 C46.5 33.5 44.8 35.5 42.5 35.5 C40 35.5 39 32 36 32 C33 32 32 35.5 29 35.5 C26 35.5 25 32 23 32 C21 32 19.2 34.5 17.5 34 Z",
			crop: "M18 28 C18 17 23.5 10.5 32 10.5 C40.5 10.5 46 17 46 28 C46 30.8 44.6 31.8 42.8 30.8 C40.6 29.5 39.2 25.8 32 25.8 C24.8 25.8 23.4 29.5 21.2 30.8 C19.4 31.8 18 30.8 18 28 Z",
			buzz: "M18.5 27 C18.5 17 24 11 32 11 C40 11 45.5 17 45.5 27 C45.5 28.8 44.2 29.2 43 28.4 C40.5 26.2 37 24.8 32 24.8 C27 24.8 23.5 26.2 21 28.4 C19.8 29.2 18.5 28.8 18.5 27 Z",
			curls: "M17.5 29 C17.5 17.5 22.8 10.5 32 10.5 C41.2 10.5 46.5 17.5 46.5 29 C46.5 32.5 44.5 33.8 42.8 32 C41.5 30.6 40.5 32 39 31.2 C37.5 30.5 37.2 28.4 35.5 28.4 C33.6 28.4 33.2 30.8 32 30.8 C30.8 30.8 30.4 28.4 28.5 28.4 C26.8 28.4 26.5 30.5 25 31.2 C23.5 32 22.5 30.6 21.2 32 C19.5 33.8 17.5 32.5 17.5 29 Z",
			bun: "M18 29 C18 17.5 23.2 10.5 32 10.5 C40.8 10.5 46 17.5 46 29 C46 31.8 44.2 33.2 42.2 32.2 C40.2 31.2 39 26.8 32 26.8 C25 26.8 23.8 31.2 21.8 32.2 C19.8 33.2 18 31.8 18 29 Z",
			ponytail: "M18 30 C18 17.5 23.2 10.5 32 10.5 C40.8 10.5 46 17.5 46 30 C46 32.8 44.2 33.8 42.2 32.8 C40.2 31.8 39 27.2 32 27.2 C25 27.2 23.8 31.8 21.8 32.8 C19.8 33.8 18 32.8 18 30 Z"
		};
		/** The mass of hair that only shows when you are looking at the back of a head. */
		const NAPE = "M18.5 27 C18.5 40 23.8 45 32 45 C40.2 45 45.5 40 45.5 27 Z";
		/** Soft highlights across the hair strands. */
		const HAIR_SHINE = "M23.5 21 C25.5 15.5 29 13 33.5 12.5 C30.5 16 28.5 20 27 24 Z";
		const HAIR_SHINE_SECONDARY = "M36 14 C39 16.5 41 20 42 24.5 C40.5 21 38.5 17.5 36 14 Z";
		/** A cool highlight along the whale hood's dorsal curve, giving it smooth 3D luster. */
		const HOOD_SHEEN = "M16 -3.5 C17.5 -11 23 -15.5 31 -16.5 C25.5 -12.5 21 -8 18.5 -2.5 Z";
		const HOOD_RIDGE_HIGHLIGHT = "M32 -16.5 C45 -16.5 55 -9.5 60 1.5 C55 -6 44 -14.5 32 -15 Z";
		/** A soft shadow under the whale's jaw, where the hood meets the collar. */
		const HOOD_SHADE = "M13.5 21 C19.5 25 28 25 35 22 C42 19 50 14.5 59.5 11 C52 16 44.5 19 37.5 21.5 C29.5 24.2 20.5 24.8 13.5 21 Z";
		/** A ribbed hem across the bottom of a sweater. */
		const RIB_HEM = "M16 73.5 L48 73.5 L48 80.5 L16 80.5 Z";
		/** The collar of a buttoned shirt: one soft curve under the hood's chin. */
		const COLLAR = "M25 48.5 C28 52.8 36 52.8 39 48.5";
		/** The self-edge neckband of a jersey, folded back on itself. */
		const NECK_BAND = "M24.5 48 C27.5 51.8 36.5 51.8 39.5 48 C38.5 53.5 25.5 53.5 24.5 48 Z";
		/** A kangaroo pocket across the front of a hoodie with reinforced corner bar-tacks. */
		const POCKET = "M26.5 56.5 C28.5 53 35.5 53 37.5 56.5 L39 63.5 L25 63.5 Z";
		/** The hood fabric lying around the neck of a hoodie. */
		const HOOD_FABRIC = "M23.5 43.5 C23.5 32 27.5 27.5 32 27.5 C36.5 27.5 40.5 32 40.5 43.5 L40.5 47.5 C36.5 49 27.5 49 23.5 47.5 Z";
		/** A knitted vest, open at the neck and stopping short of the hem. */
		const VEST = "M32 47 C38.5 47 43 50.5 44 57 L45 73 C45 75.5 43.5 76.5 41 76.5 L23 76.5 C20.5 76.5 19 75.5 19 73 L20 57 C21 50.5 25.5 47 32 47 Z M32 47 L26.5 56.5 L32 63 L37.5 56.5 Z";
		/** The two front panels of an open tailored jacket. */
		const JACKET = "M23.5 47.5 C20.5 50 18.5 54.5 18 59 L17 76.5 L27.5 76.5 L29.5 52 Z M40.5 47.5 C43.5 50 45.5 54.5 46 59 L47 76.5 L36.5 76.5 L34.5 52 Z";
		/** The bib and straps of a pair of dungarees. */
		const BIB = "M25 57.5 H39 V72.5 H25 Z";
		/** The straps over the shoulders of a pair of dungarees with buckles. */
		const STRAPS = "M25.5 57.5 L23 47.5 M38.5 57.5 L41 47.5";
		/** Stripes across the front of a jersey. */
		const STRIPES = "M17.5 54.5 H46.5 M17.2 60.5 H46.8 M17 66.5 H47 M16.8 72.5 H47.2 M16.5 78 H47.5";
		/** Whale ventral grooves (throat pleats) on Blue Whale and Humpback. */
		const THROAT_PLEATS = "M36 21.5 C42 18.5 50 13.5 57 11 M33 23 C39 20 46 16 53 13.5 M30 24.5 C36 21.5 42 18.5 48 16";
		/** What one kind wears behind the whale, so its base merges into the hood. */
		function behind(kind) {
			switch (kind) {
				case "orca": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHood,
					d: "M25 -13 C26 -24 31 -31 40 -34 C37 -25 33 -18 31.5 -13 Z"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewSaddle,
					d: "M19 -10 C23 -14 28 -14 31 -11 C28 -8 22 -7 19 -10 Z"
				})] });
				case "humpback": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewHood,
						d: "M22 -14 C25 -20 30 -22 35 -17 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewHood,
						d: "M30 14 C36 19 40 26 43 33 C40 25 36 18 31 13 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewFlipperTrim,
						d: "M38 24 C40 28 42 32 42.5 32"
					})
				] });
				case "narwhal": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewTuskGroup,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewTusk,
						d: "M63.5 5.5 L84 -3.5"
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewTuskSpiral,
						d: "M66 4.5 L67.5 3.8 M71 2.5 L72.5 1.8 M76 0.5 L77.5 -0.2 M80.5 -1.5 L82 -2.2"
					})]
				});
				case "sperm": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHood,
					d: "M38 -16 L59 -16 C63.5 -16 66.5 -12.5 66.5 -8 L66.5 9.5 C57 10.5 47.5 14 38 17.5 Z"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewWrinkle,
					d: "M24 -11 C26 -14 30 -14 32 -12 M34 -13 C36 -15 39 -15 41 -13"
				})] });
				case "shark": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHood,
					d: "M34 -21 C37 -29 42 -35 52 -36 C48.5 -27 44 -19 39 -11 Z"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHoodSheen,
					d: "M46 -30 C43 -24 40 -18 37 -13"
				})] });
				default: return null;
			}
		}
		/** What one kind adds over the whale. */
		function front(kind) {
			switch (kind) {
				case "orca": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
					className: TeamStage_module_css_default.crewPatch,
					cx: "47",
					cy: "-4.5",
					rx: "7",
					ry: "3.4",
					transform: "rotate(-16 47 -4.5)"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
					className: TeamStage_module_css_default.crewEyeGlint,
					cx: "48",
					cy: "-5",
					r: "0.7"
				})] });
				case "humpback": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewPleat,
					d: THROAT_PLEATS
				}), [
					[43, -7],
					[49, -3],
					[54, 0],
					[59, 2.5],
					[63, 4.5],
					[47, 8],
					[53, 6.5]
				].map(([x, y]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
					className: TeamStage_module_css_default.crewKnob,
					cx: x,
					cy: y,
					r: "1.6"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
					className: TeamStage_module_css_default.crewKnobHighlight,
					cx: (x ?? 0) - .4,
					cy: (y ?? 0) - .4,
					r: "0.6"
				})] }, `${x}-${y}`))] });
				case "beluga": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewMelon,
					d: "M21 -9.5 C27 -19.5 43 -19.5 51 -11.5 C40.5 -13.5 28.5 -12 21 -9.5 Z"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewMelonHighlight,
					d: "M28 -14.5 C34 -17.5 42 -17 46 -13"
				})] });
				case "shark": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewGill,
						d: "M37 4.5 C39.5 6 39.5 9.5 37 11.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewGill,
						d: "M41 3.5 C43.5 5 43.5 8.5 41 10.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewGill,
						d: "M45 2.5 C47.5 4 47.5 7.5 45 9.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewGill,
						d: "M49 2 C51 3.5 51 6.5 49 8.5"
					})
				] });
				case "blue": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewPleat,
						d: THROAT_PLEATS
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewSpout,
						d: "M43 -15 C42 -22 40 -27 36 -30"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewSpout,
						d: "M44 -15 C47 -22 50 -26 55 -28"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewSpout,
						d: "M43.5 -15 C41 -20 37 -23 32 -24"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewDroplet,
						cx: "35",
						cy: "-31.5",
						r: "1.1"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewDroplet,
						cx: "56.5",
						cy: "-29",
						r: "1.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewDroplet,
						cx: "31",
						cy: "-25",
						r: "0.9"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewDroplet,
						cx: "46",
						cy: "-29",
						r: "0.8"
					})
				] });
				case "sperm": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.crewBlowhole,
						cx: "63",
						cy: "-12",
						rx: "1.8",
						ry: "1.2",
						transform: "rotate(-15 63 -12)"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewSpout,
						d: "M63 -13 C66 -19 71 -22 75 -24"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewDroplet,
						cx: "76",
						cy: "-25",
						r: "1"
					})
				] });
				case "narwhal": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewSpeckle,
						cx: "30",
						cy: "-6",
						r: "0.8"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewSpeckle,
						cx: "37",
						cy: "-9",
						r: "0.9"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewSpeckle,
						cx: "44",
						cy: "-5",
						r: "0.7"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewSpeckle,
						cx: "51",
						cy: "0",
						r: "0.8"
					})
				] });
				default: return null;
			}
		}
		/** The part of a hairstyle that hangs behind the head, drawn under the face. */
		function hairBehind(kind, back) {
			if (kind === "ponytail") return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
				className: TeamStage_module_css_default.crewHairGroup,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHair,
					d: back ? "M32 23 C36.5 23 39 27.5 39 34 C39 42.5 37 49 35 53 L29 53 C31 49 33 42.5 33 34 C33 27.5 29.5 25.5 32 23 Z" : "M43.5 25.5 C48 27.5 50.5 32.5 50 39 C49.5 45.5 47 49.5 44 52 C46.5 46.5 47 40 46 35 C45.2 30.5 44 27.5 43.5 25.5 Z"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHairHighlight,
					d: back ? "M35 28 C37 34 36.5 43 34 49" : "M46.5 30 C48 35 47.5 41 45.5 46"
				})]
			});
			if (kind === "curls" && back) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
				className: TeamStage_module_css_default.crewHairGroup,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewHair,
						d: "M16.5 29.5 C12.5 31.5 12 38 15.5 41.5 C17.8 43.8 20.2 42.5 21 39.5 Z M47.5 29.5 C51.5 31.5 52 38 48.5 41.5 C46.2 43.8 43.8 42.5 43 39.5 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewHair,
						cx: "13",
						cy: "35",
						r: "2.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewHair,
						cx: "51",
						cy: "35",
						r: "2.5"
					})
				]
			});
			return null;
		}
		/** The part of a hairstyle that sits over everything, like a bun. */
		function hairAbove(kind) {
			if (kind !== "bun") return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
				className: TeamStage_module_css_default.crewHairGroup,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewHair,
						cx: "32",
						cy: "7.5",
						r: "6.6"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewHairShine,
						d: "M28 4.8 C29.2 2.6 31.5 1.6 33.8 2.1 C31.6 2.8 29.8 4 29 5.8 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.crewScrunchie,
						cx: "32",
						cy: "13.2",
						rx: "3.8",
						ry: "1.4"
					})
				]
			});
		}
		/**
		* Gear worn UNDER the hood. Headphones go on before the whale does: the cushioned
		* band runs over the head, and the plush ear cups sit naturally on both ears
		* under the jawline with metal pivots.
		*/
		function headGearUnder(kind) {
			if (kind !== "headphones") return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
				className: TeamStage_module_css_default.crewCans,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewCansBand,
						d: "M16 31 C16 15.5 23 8.5 32 8.5 C41 8.5 48 15.5 48 31"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.crewCansCup,
						x: "11.5",
						y: "25.5",
						width: "8.6",
						height: "13",
						rx: "4.3"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.crewCansCushion,
						x: "17.5",
						y: "27",
						width: "2.6",
						height: "10",
						rx: "1.3"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewCansPivot,
						cx: "15.8",
						cy: "27",
						r: "1.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.crewCansCup,
						x: "43.9",
						y: "25.5",
						width: "8.6",
						height: "13",
						rx: "4.3"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.crewCansCushion,
						x: "43.9",
						y: "27",
						width: "2.6",
						height: "10",
						rx: "1.3"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewCansPivot,
						cx: "48.2",
						cy: "27",
						r: "1.2"
					})
				]
			});
		}
		/**
		* Gear worn OVER everything: glasses sit on the face, and the hood's jaw
		* stays clear of them, so the lenses read as lenses with clear glass reflections.
		*/
		function headGearOver(kind, back) {
			if (kind !== "glasses" || back) return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
				className: TeamStage_module_css_default.crewGlasses,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.crewGlassesFrame,
						x: "20.5",
						y: "26",
						width: "10",
						height: "8",
						rx: "3.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.crewGlassesFrame,
						x: "33.5",
						y: "26",
						width: "10",
						height: "8",
						rx: "3.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewGlassesGlass,
						d: "M22 28 L27 32 M35 28 L40 32"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewGlassesBridge,
						d: "M30.5 29.5 H33.5 M20.5 29 L16.8 30.2 M43.5 29 L47.2 30.2"
					})
				]
			});
		}
		/** Whatever a member wears over its clothes. */
		function bodyGear(kind, back) {
			switch (kind) {
				case "scarf": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewScarfGroup,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewScarf,
							d: "M22.5 44.5 C26.5 50 37.5 50 41.5 44.5 L43 53.5 C37 57 27 57 21 53.5 Z"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewScarfPattern,
							d: "M24 47.5 L26 53 M29 48.5 L31 54.5 M34 48.5 L36 54.5 M39 47.5 L41 53"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewScarf,
							d: back ? "M28.5 54 L27 68.5 L33 69 L34.5 54 Z" : "M39 54 L41.5 69.5 L35.5 70 L34 54 Z"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewScarfFringe,
							d: back ? "M27 68.5 L26.5 71.5 M29 68.7 L28.8 71.8 M31 68.9 L31.2 72 M33 69 L33.5 72" : "M35.5 70 L35 73 M37.5 69.8 L37.5 73 M39.5 69.6 L40 72.8 M41.5 69.5 L42.2 72.5"
						})
					]
				});
				case "lanyard": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewLanyardGroup,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewCord,
							d: "M26.5 47.5 L31.2 62 M37.5 47.5 L32.8 62"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewClip,
							cx: "32",
							cy: "62",
							r: "1.2"
						}),
						!back && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
								className: TeamStage_module_css_default.crewBadge,
								x: "28.2",
								y: "62.8",
								width: "7.6",
								height: "9.8",
								rx: "1.6"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
								className: TeamStage_module_css_default.crewBadgePhoto,
								x: "29.4",
								y: "64",
								width: "2.6",
								height: "3",
								rx: "0.5"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.crewBadgeLine,
								d: "M32.8 64.8 H34.8 M32.8 66.2 H34.5 M29.4 68.5 H34.6"
							})
						] })
					]
				});
				case "backpack": return back ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewBackpackGroup,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewPack,
							d: "M22.5 51.5 C22.5 47.5 26 46 32 46 C38 46 41.5 47.5 41.5 51.5 L41.5 71 C41.5 74.5 38.5 75.5 32 75.5 C25.5 75.5 22.5 74.5 22.5 71 Z"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewPackPocket,
							d: "M24.5 59.5 H39.5 V71 C39.5 73 37.5 74 32 74 C26.5 74 24.5 73 24.5 71 Z"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewPackTrim,
							d: "M25 59.5 H39 M27.5 53 H36.5"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
							className: TeamStage_module_css_default.crewPackZip,
							x: "31",
							y: "58.5",
							width: "2",
							height: "2",
							rx: "0.5"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewPackHandle,
							d: "M29 46 C29 43.5 35 43.5 35 46"
						})
					]
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewBackpackGroup,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewStrap,
							d: "M25 47.5 C24.5 56 25 64.5 26 71.5 M39 47.5 C39.5 56 39 64.5 38 71.5"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
							className: TeamStage_module_css_default.crewStrapBuckle,
							x: "24",
							y: "60",
							width: "2.4",
							height: "2",
							rx: "0.5"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
							className: TeamStage_module_css_default.crewStrapBuckle,
							x: "37.6",
							y: "60",
							width: "2.4",
							height: "2",
							rx: "0.5"
						})
					]
				});
				default: return null;
			}
		}
		/**
		* The head. Face on: the person looks out from under the whale's chin. From
		* behind — which is how you see somebody who is at their own computer — there
		* is no face to draw, both ears show, the back of the head is all hair, and
		* the whale looks the other way.
		*/
		function head(kind, hair, gear, back) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				hairBehind(hair, back),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
					className: TeamStage_module_css_default.crewEar,
					cx: "17.2",
					cy: "32",
					rx: "3.4",
					ry: "4"
				}),
				back && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
					className: TeamStage_module_css_default.crewEar,
					cx: "46.8",
					cy: "32",
					rx: "3.4",
					ry: "4"
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewFace,
					d: "M32 11.5 C42 11.5 46.5 19.5 46.5 29 C46.5 39 40.5 44.5 32 44.5 C23.5 44.5 17.5 39 17.5 29 C17.5 19.5 22 11.5 32 11.5 Z"
				}),
				back && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHair,
					d: NAPE
				}),
				!back && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewFacialGroup,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewBrow,
							d: "M21.5 25 Q25.5 22.5 29.8 24.2"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewBrow,
							d: "M34.2 24.2 Q38.5 22.5 42.5 25"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewPupil,
							cx: "26.8",
							cy: "30",
							r: "1.6"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewPupil,
							cx: "37.2",
							cy: "30",
							r: "1.6"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewEyeGlint,
							cx: "27.5",
							cy: "29.2",
							r: "0.65"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewEyeGlint,
							cx: "37.9",
							cy: "29.2",
							r: "0.65"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewEyeGlintSub,
							cx: "26.2",
							cy: "30.8",
							r: "0.35"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewEyeGlintSub,
							cx: "36.6",
							cy: "30.8",
							r: "0.35"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewNose,
							cx: "32",
							cy: "32.8",
							r: "0.5"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewSmile,
							d: "M28.2 35.8 Q32 39 35.8 35.8"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
							className: TeamStage_module_css_default.crewBlush,
							cx: "21",
							cy: "33.2",
							rx: "2.4",
							ry: "1.5"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
							className: TeamStage_module_css_default.crewBlush,
							cx: "43",
							cy: "33.2",
							rx: "2.4",
							ry: "1.5"
						})
					]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHair,
					d: CAPS[hair]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHairShine,
					d: HAIR_SHINE
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHairShine,
					d: HAIR_SHINE_SECONDARY
				}),
				headGearUnder(gear),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					transform: back ? "translate(64 3) scale(-1 1)" : "translate(0 3)",
					children: [
						behind(kind),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewHood,
							d: WHALE
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewHood,
							d: FLUKES
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewBelly,
							d: BELLY
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewHoodOpening,
							d: HOOD_OPENING_RIM
						}),
						front(kind),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewHoodSheen,
							d: HOOD_SHEEN
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewHoodRidge,
							d: HOOD_RIDGE_HIGHLIGHT
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewHoodShade,
							d: HOOD_SHADE
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewEye,
							cx: "53",
							cy: "0",
							r: "2.8"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewPupil,
							cx: "53.8",
							cy: "0.4",
							r: "1.3"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewEyeGlint,
							cx: "54.4",
							cy: "-0.2",
							r: "0.55"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewEyeGlintSub,
							cx: "53.2",
							cy: "0.8",
							r: "0.3"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewMouth,
							d: "M48.5 9.8 C53.5 7.8 58.5 6.2 62.5 5.8"
						})
					]
				}),
				hairAbove(hair),
				headGearOver(gear, back)
			] });
		}
		/** What one outfit adds over the plain body, seen from the front. */
		function outfitFront(outfit) {
			switch (outfit) {
				case "shirt": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewOutfitDetails,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewCollar,
							d: COLLAR
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewPlacket,
							d: "M32 50 L32 79"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewButton,
							cx: "32",
							cy: "55",
							r: "0.9"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewButton,
							cx: "32",
							cy: "63",
							r: "0.9"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewButton,
							cx: "32",
							cy: "71",
							r: "0.9"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewPocketStitch,
							d: "M37.5 57 H44 V64.5 H37.5 Z"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewPenClip,
							d: "M41 55.5 V59.5"
						})
					]
				});
				case "polo": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewOutfitDetails,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewCollar,
							d: COLLAR
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewPlacket,
							d: "M32 49 L32 60.5"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewButton,
							cx: "32",
							cy: "53.5",
							r: "0.85"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewButton,
							cx: "32",
							cy: "58",
							r: "0.85"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewCrest,
							cx: "39",
							cy: "56",
							r: "1.4"
						})
					]
				});
				case "tee": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewOutfitDetails,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewNeckBand,
						d: NECK_BAND
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewStitch,
						d: "M17.5 67 H23.5 M40.5 67 H46.5"
					})]
				});
				case "sweater": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewOutfitDetails,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewNeckBand,
							d: "M24 46.5 C27.5 51.5 36.5 51.5 40 46.5 C38.5 54 25.5 54 24 46.5 Z"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewRib,
							d: RIB_HEM
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewKnitLine,
							d: "M28 54 V73.5 M32 54 V73.5 M36 54 V73.5"
						})
					]
				});
				case "hoodie": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewOutfitDetails,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewDraw,
							d: "M28.5 47 L30 56"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewDraw,
							d: "M35.5 47 L34 56"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewAglet,
							cx: "30",
							cy: "56",
							r: "0.6"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewAglet,
							cx: "34",
							cy: "56",
							r: "0.6"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewPocket,
							d: POCKET
						})
					]
				});
				case "tunic": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewOutfitDetails,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewStitch,
							d: "M20.5 50 L20.5 78 M43.5 50 L43.5 78"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewBelt,
							d: "M17.5 68 Q32 72.5 46.5 68"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
							className: TeamStage_module_css_default.crewBuckle,
							x: "30.2",
							y: "68.2",
							width: "3.6",
							height: "3",
							rx: "0.6"
						})
					]
				});
				case "vest": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewOutfitDetails,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewCollar,
							d: COLLAR
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewVest,
							d: VEST
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewRib,
							d: "M19 73 L45 73 L45 76.5 L19 76.5 Z"
						})
					]
				});
				case "jacket": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewOutfitDetails,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewJacket,
							d: JACKET
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewCollar,
							d: "M23.5 48 L29 52.5 M40.5 48 L35 52.5"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewButton,
							cx: "27.5",
							cy: "62",
							r: "1"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewButton,
							cx: "27.5",
							cy: "70",
							r: "1"
						})
					]
				});
				case "stripes": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewOutfitDetails,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewNeckBand,
						d: NECK_BAND
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewStripes,
						d: STRIPES
					})]
				});
				default: return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewOutfitDetails,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewNeckBand,
							d: NECK_BAND
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewBib,
							d: BIB
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewDraw,
							d: STRAPS
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewButton,
							cx: "26.2",
							cy: "58.2",
							r: "1"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewButton,
							cx: "37.8",
							cy: "58.2",
							r: "1"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewStitch,
							d: "M28 62 H36 V68 H28 Z"
						})
					]
				});
			}
		}
		/** What one outfit adds over the plain body, seen from behind. */
		function outfitBack(outfit) {
			switch (outfit) {
				case "shirt":
				case "polo": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewOutfitDetails,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewCollar,
						d: "M24.5 49 L39.5 49"
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewStitch,
						d: "M25.5 57 C29 60.5 35 60.5 38.5 57"
					})]
				});
				case "sweater":
				case "vest": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewOutfitDetails,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewRib,
						d: RIB_HEM
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewKnitLine,
						d: "M28 54 V73.5 M32 54 V73.5 M36 54 V73.5"
					})]
				});
				case "jacket": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewStitch,
					d: "M32 48 L32 79"
				});
				case "stripes": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewStripes,
					d: STRIPES
				});
				case "dungarees": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
					className: TeamStage_module_css_default.crewOutfitDetails,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewDraw,
						d: "M25.5 76 L23 47.5 M38.5 76 L41 47.5"
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewCrossStrap,
						d: "M23 58 L41 68 M41 58 L23 68"
					})]
				});
				default: return null;
			}
		}
		/**
		* One member of the crew. Memoized: every prop is a primitive, and one stage
		* renders this figure per seat, per log row, per note and per task card.
		* @param props - the whale it wears, whether you are behind it, whether only
		* the head is wanted (a portrait), and everything it is dressed in.
		* @returns the character.
		*/
		const Crew = (0, react.memo)(function Crew(props) {
			const { kind, className, back = false, portrait = false, outfit = "shirt", shoes = "sneaker", hair = "crop", gear = "none", tone = 0, skin = 0 } = props;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: `${TeamStage_module_css_default.crew} ${className ?? ""}`,
				viewBox: portrait ? "-1 -22 70 72" : "-6 -28 80 138",
				"data-kind": kind,
				"data-back": back ? "true" : void 0,
				"data-outfit": outfit,
				"data-shoes": shoes,
				"data-hair": hair,
				"data-gear": gear,
				"data-tone": tone,
				"data-skin": skin,
				"aria-hidden": true,
				focusable: "false",
				children: [!portrait && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
						className: TeamStage_module_css_default.crewLimbBack,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
								className: TeamStage_module_css_default.crewTrouser,
								x: "22",
								y: "70",
								width: "9.2",
								height: "27",
								rx: "4"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.crewTrouserCrease,
								d: "M26.6 74 V95"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.crewShoe,
								d: shoePath(shoes, "left")
							}),
							shoeTrim(shoes, "left")
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
						className: TeamStage_module_css_default.crewLimbFront,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
								className: TeamStage_module_css_default.crewTrouser,
								x: "32.8",
								y: "70",
								width: "9.2",
								height: "27",
								rx: "4"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.crewTrouserCrease,
								d: "M37.4 74 V95"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.crewShoe,
								d: shoePath(shoes, "right")
							}),
							shoeTrim(shoes, "right")
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
						className: TeamStage_module_css_default.crewArmBack,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
								className: TeamStage_module_css_default.crewSleeve,
								x: "11.5",
								y: "52.5",
								width: "8.4",
								height: "22.5",
								rx: "4.2"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.crewCuff,
								d: "M11.5 71.5 H19.9"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
								className: TeamStage_module_css_default.crewHand,
								cx: "15.7",
								cy: "77",
								r: "4"
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
						className: TeamStage_module_css_default.crewArmFront,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
								className: TeamStage_module_css_default.crewSleeve,
								x: "44.1",
								y: "52.5",
								width: "8.4",
								height: "22.5",
								rx: "4.2"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.crewCuff,
								d: "M44.1 71.5 H52.5"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
								className: TeamStage_module_css_default.crewHand,
								cx: "48.3",
								cy: "77",
								r: "4"
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.crewNeck,
						x: "28",
						y: "40",
						width: "8",
						height: "11.5",
						rx: "3.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewShirt,
						d: SHIRT
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewSeam,
						d: SHOULDER_SEAM
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewSeam,
						d: HEM_FOLD
					}),
					outfit === "hoodie" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewHoodFabric,
						d: HOOD_FABRIC
					}),
					back ? outfitBack(outfit) : outfitFront(outfit),
					bodyGear(gear, back)
				] }), head(kind, hair, gear, back)]
			});
		});
		//#endregion
		//#region src/client/flora.tsx
		/** The plants the room keeps, in the order places take them. */
		const PLANTS = [
			"monstera",
			"sansevieria",
			"pothos",
			"cactus",
			"ficus",
			"palm"
		];
		/**
		* Which plant stands in the nth green spot of the room: stable, so the corner
		* you learned is the corner you come back to.
		* @param index - the spot's index.
		* @returns the kind that stands there.
		*/
		function plantOf(index) {
			return PLANTS[(index % PLANTS.length + PLANTS.length) % PLANTS.length] ?? "monstera";
		}
		/** A split leaf: organic notches cut into each side of a broad monstera heart. */
		const MONSTERA = "M0 -2 C-4 -10 -12 -13 -17 -17 L-8.5 -19 C-13 -23 -19 -25 -22 -30 L-11.5 -30.5 C-16 -36 -14 -42 0 -46 C14 -42 16 -36 11.5 -30.5 L22 -30 C19 -25 13 -23 8.5 -19 L17 -17 C12 -13 4 -10 0 -2 Z";
		/** Monstera leaf fenestration (inner perforations) and veins. */
		const MONSTERA_VEIN = "M0 -3 L0 -43 M0 -14 L-14 -18 M0 -14 L14 -18 M0 -24 L-17 -29 M0 -24 L17 -29 M0 -33 L-11 -38 M0 -33 L11 -38 M-6 -22 C-7 -25 -7 -27 -5 -28 C-4 -27 -4 -24 -5 -22 Z M6 -22 C7 -25 7 -27 5 -28 C4 -27 4 -24 5 -22 Z";
		/** An upright sword, thickest at the middle with elegant wavy edges and drawn to a sharp tip. */
		const SWORD = "M0 0 C-5.5 -7 -8 -22 -7 -36 C-6 -48 -3.5 -57 0 -62 C3.5 -57 6 -48 7 -36 C8 -22 5.5 -7 0 0 Z";
		/** The golden variegated margin along the edges of a snake plant's blade. */
		const SWORD_EDGE = "M-6.2 -22 C-7.2 -32 -6 -44 -2.8 -54 C-1.8 -46 -4.8 -32 -4.8 -20 Z M6.2 -22 C7.2 -32 6 -44 2.8 -54 C1.8 -46 4.8 -32 4.8 -20 Z";
		/** Transverse zebra banding on the snake plant blade. */
		const SWORD_BANDING = "M-4 -16 Q0 -14 4 -16 M-5 -26 Q0 -24 5 -26 M-5.5 -36 Q0 -34 5.5 -36 M-4 -46 Q0 -44 4 -46";
		/** A lush heart, hanging point-down the way a trailing pothos leaf does. */
		const HEART = "M0 0 C-8.5 -4 -13.5 -10 -13.5 -17 C-13.5 -22.5 -9 -25.5 -4.5 -23.5 C-2 -22 -0.6 -19.6 0 -17.5 C0.6 -19.6 2 -22 4.5 -23.5 C9 -25.5 13.5 -22.5 13.5 -17 C13.5 -10 8.5 -4 0 0 Z";
		/** The midrib and branching lateral veins of a hanging heart. */
		const HEART_VEIN = "M0 -2 L0 -19 M0 -7 L-7.5 -13.5 M0 -7 L7.5 -13.5 M0 -13 L-6 -17.5 M0 -13 L6 -17.5";
		/** Variegated marble splashes on pothos leaves. */
		const HEART_SPLASH = "M-3 -10 C-5 -12 -3 -15 -1 -13 C-2 -11 -3 -10 -3 -10 Z M4 -8 C6 -10 5 -13 2 -11 C4 -9 4 -8 4 -8 Z";
		/** A broad oval fiddle leaf with glossy curvature. */
		const OVAL = "M0 0 C-7 -5 -10 -11.5 -10 -18 C-10 -24.5 -5.5 -28.5 0 -29.5 C5.5 -28.5 10 -24.5 10 -18 C10 -11.5 7 -5 0 0 Z";
		const OVAL_VEIN = "M0 -2 L0 -27 M0 -9 L-7 -14 M0 -9 L7 -14 M0 -17 L-7.5 -21 M0 -17 L7.5 -21";
		/** A long graceful palm frond. */
		const FROND = "M0 0 C-3.8 -14 -6.5 -28 -4.2 -43 L0 -52 L4.2 -43 C6.5 -28 3.8 -14 0 0 Z";
		/** The leaflets combed off both sides of a frond. */
		const FROND_VEIN = "M0 -2 L0 -49 M0 -10 L-6 -16.5 M0 -10 L6 -16.5 M0 -19 L-6.8 -25.5 M0 -19 L6.8 -25.5 M0 -28 L-6.2 -34.5 M0 -28 L6.2 -34.5 M0 -36 L-4.5 -42 M0 -36 L4.5 -42";
		/** A ribbed 3D column, for a saguaro / barrel cactus. */
		const COLUMN = "M0 0 C-10 0 -13 -5 -13 -15.5 L-13 -35 C-13 -46.5 -8.5 -52 0 -52 C8.5 -52 13 -46.5 13 -35 L13 -15.5 C13 -5 10 0 0 0 Z";
		/** A shorter column, for an arm off the side of one. */
		const LIMB = "M0 0 C-7 0 -9 -3.5 -9 -10.5 L-9 -23 C-9 -31.5 -6 -35 0 -35 C6 -35 9 -31.5 9 -23 L9 -10.5 C9 -3.5 7 0 0 0 Z";
		/** The vertical contour ribs down a cactus. */
		const RIBS = "M-6.5 -6 C-8 -18 -8 -33 -6.5 -44 M0 -4 L0 -49 M6.5 -6 C8 -18 8 -33 6.5 -44";
		/**
		* The blades of one kind, back layer first. Built once at module load — the
		* stage re-renders its greenery on every snapshot, and rebuilding these
		* little arrays each time is the one allocation it can do without.
		*/
		const BLADES = {
			monstera: [
				{
					d: MONSTERA,
					at: "translate(50 82) rotate(-38) scale(0.88)",
					vein: MONSTERA_VEIN
				},
				{
					d: MONSTERA,
					at: "translate(50 82) rotate(36) scale(0.92)",
					vein: MONSTERA_VEIN
				},
				{
					d: MONSTERA,
					at: "translate(50 80) rotate(-14) scale(1.04)",
					lit: true,
					vein: MONSTERA_VEIN
				},
				{
					d: MONSTERA,
					at: "translate(50 80) rotate(16) scale(0.96)",
					lit: true,
					vein: MONSTERA_VEIN
				},
				{
					d: MONSTERA,
					at: "translate(50 78) rotate(2) scale(0.76)",
					lit: true,
					vein: MONSTERA_VEIN
				}
			],
			sansevieria: [
				{
					d: SWORD,
					at: "translate(50 84) rotate(-22) scale(0.84)",
					vein: SWORD_BANDING,
					detail: SWORD_EDGE
				},
				{
					d: SWORD,
					at: "translate(50 84) rotate(20) scale(0.9)",
					vein: SWORD_BANDING,
					detail: SWORD_EDGE
				},
				{
					d: SWORD,
					at: "translate(50 84) rotate(-8) scale(1.02)",
					lit: true,
					vein: SWORD_BANDING,
					detail: SWORD_EDGE
				},
				{
					d: SWORD,
					at: "translate(50 84) rotate(7) scale(0.96)",
					lit: true,
					vein: SWORD_BANDING,
					detail: SWORD_EDGE
				},
				{
					d: SWORD,
					at: "translate(50 84) rotate(-15) scale(0.68)",
					lit: true,
					vein: SWORD_BANDING,
					detail: SWORD_EDGE
				}
			],
			pothos: [
				{
					d: SWORD,
					at: "translate(50 82) rotate(-10) scale(0.52)"
				},
				{
					d: SWORD,
					at: "translate(50 82) rotate(12) scale(0.46)",
					lit: true
				},
				{
					d: HEART,
					at: "translate(28 84) rotate(196) scale(0.8)",
					hang: true,
					vein: HEART_VEIN,
					detail: HEART_SPLASH
				},
				{
					d: HEART,
					at: "translate(22 96) rotate(184) scale(0.72)",
					hang: true,
					lit: true,
					vein: HEART_VEIN,
					detail: HEART_SPLASH
				},
				{
					d: HEART,
					at: "translate(74 86) rotate(166) scale(0.78)",
					hang: true,
					vein: HEART_VEIN,
					detail: HEART_SPLASH
				},
				{
					d: HEART,
					at: "translate(80 99) rotate(176) scale(0.68)",
					hang: true,
					lit: true,
					vein: HEART_VEIN,
					detail: HEART_SPLASH
				},
				{
					d: HEART,
					at: "translate(50 70) rotate(180) scale(0.62)",
					hang: true,
					lit: true,
					vein: HEART_VEIN,
					detail: HEART_SPLASH
				}
			],
			cactus: [
				{
					d: LIMB,
					at: "translate(29 62) rotate(-24)",
					vein: RIBS
				},
				{
					d: LIMB,
					at: "translate(71 58) rotate(22) scale(0.92)",
					vein: RIBS
				},
				{
					d: COLUMN,
					at: "translate(50 82)",
					lit: true,
					vein: RIBS
				}
			],
			ficus: [
				{
					d: OVAL,
					at: "translate(35 55) rotate(-42)",
					vein: OVAL_VEIN
				},
				{
					d: OVAL,
					at: "translate(65 53) rotate(44)",
					vein: OVAL_VEIN
				},
				{
					d: OVAL,
					at: "translate(31 70) rotate(-64) scale(0.88)",
					vein: OVAL_VEIN
				},
				{
					d: OVAL,
					at: "translate(69 68) rotate(66) scale(0.88)",
					vein: OVAL_VEIN
				},
				{
					d: OVAL,
					at: "translate(43 41) rotate(-18)",
					lit: true,
					vein: OVAL_VEIN
				},
				{
					d: OVAL,
					at: "translate(59 39) rotate(20)",
					lit: true,
					vein: OVAL_VEIN
				},
				{
					d: OVAL,
					at: "translate(50 31) rotate(0) scale(0.92)",
					lit: true,
					vein: OVAL_VEIN
				}
			],
			palm: [
				{
					d: FROND,
					at: "translate(50 82) rotate(-54) scale(0.94)",
					vein: FROND_VEIN
				},
				{
					d: FROND,
					at: "translate(50 82) rotate(52) scale(0.98)",
					vein: FROND_VEIN
				},
				{
					d: FROND,
					at: "translate(50 80) rotate(-26)",
					lit: true,
					vein: FROND_VEIN
				},
				{
					d: FROND,
					at: "translate(50 80) rotate(24) scale(0.98)",
					lit: true,
					vein: FROND_VEIN
				},
				{
					d: FROND,
					at: "translate(50 78) rotate(-2) scale(0.9)",
					lit: true,
					vein: FROND_VEIN
				}
			]
		};
		/** The woody stems a kind shows between the soil and its foliage. */
		const STEMS = {
			monstera: "M50 84 C46 72 40 66 34 62 M50 84 C54 72 60 68 65 64 M50 84 L50 66",
			ficus: "M50 84 L50 40 M50 68 C46 62 42 58 37 55 M50 66 C54 60 59 56 63 53 M50 56 C47 50 45 46 43 43 M50 54 C53 48 55 45 57 42",
			pothos: "M48 82 C40 80 32 82 28 86 M52 82 C60 80 68 82 74 88 M28 86 C24 90 22 94 22 97 M74 88 C78 92 80 96 80 100",
			palm: "M50 84 C48 78 44 72 38 66 M50 84 C52 78 56 72 62 66",
			sansevieria: void 0,
			cactus: void 0
		};
		/**
		* One plant, pot and all.
		* @param props - which kind it is, and the class the room sizes it with.
		* @returns the plant.
		*/
		function Plant(props) {
			const { kind, className } = props;
			const blades = BLADES[kind];
			const stems = STEMS[kind];
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: `${TeamStage_module_css_default.flora} ${className ?? ""}`,
				viewBox: "0 0 100 128",
				"data-plant": kind,
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.floraShade,
						cx: "50",
						cy: "122",
						rx: "28",
						ry: "5.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.floraSaucer,
						d: "M28 116 H72 Q76 116 76 119.5 Q76 123.5 72 123.5 H28 Q24 123.5 24 119.5 Q24 116 28 116 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.floraSaucerLip,
						d: "M26 117.5 H74"
					}),
					stems !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.floraStem,
						d: stems
					}),
					blades.map((blade, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("g", {
						transform: blade.at,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
							className: TeamStage_module_css_default.floraLeaf,
							"data-hang": blade.hang === true ? "true" : void 0,
							style: { "--team-leaf-delay": `${-(index * .83 % 4).toFixed(2)}s` },
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
									className: blade.lit === true ? TeamStage_module_css_default.floraBladeLit : TeamStage_module_css_default.floraBlade,
									d: blade.d
								}),
								blade.detail !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
									className: TeamStage_module_css_default.floraBladeDetail,
									d: blade.detail
								}),
								blade.vein !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
									className: TeamStage_module_css_default.floraVein,
									d: blade.vein
								})
							]
						})
					}, `${blade.at}-${index}`)),
					kind === "cactus" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
						className: TeamStage_module_css_default.floraCactusDetails,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.floraSpine,
								d: "M42 44 L38 41 M42 44 L37 44 M42 44 L38 47 M42 54 L38 51 M42 54 L37 54 M42 54 L38 57 M42 64 L38 61 M42 64 L37 64 M58 42 L62 39 M58 42 L63 42 M58 42 L62 45 M58 52 L62 49 M58 52 L63 52 M58 62 L62 59 M58 62 L63 62"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
								className: TeamStage_module_css_default.floraBloomOuter,
								cx: "50",
								cy: "30",
								r: "5"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
								className: TeamStage_module_css_default.floraBloom,
								cx: "50",
								cy: "30",
								r: "3.8"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
								className: TeamStage_module_css_default.floraBloomHeart,
								cx: "50",
								cy: "30",
								r: "1.6"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
								className: TeamStage_module_css_default.floraBloomStamen,
								cx: "49.3",
								cy: "29.3",
								r: "0.6"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
								className: TeamStage_module_css_default.floraBloomStamen,
								cx: "50.7",
								cy: "30.5",
								r: "0.6"
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.floraPot,
						d: "M28 87 H72 L67.5 117 Q67 120 63 120 H37 Q33 120 32.5 117 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.floraPotShade,
						d: "M60 87 L72 87 L67.5 117 Q67 120 63 120 H57 Q61 106 60 87 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.floraGlaze,
						d: "M35 91 C32.5 101 33 110 35.5 117 L39.5 117 C37 109 36.5 101 38.5 91 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.floraRim,
						d: "M25 78.5 H75 Q78.5 78.5 78.5 82 V86.5 Q78.5 89.5 75 89.5 H25 Q21.5 89.5 21.5 86.5 V82 Q21.5 78.5 25 78.5 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.floraRimLip,
						d: "M23.5 80.5 H76.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.floraSoil,
						cx: "50",
						cy: "81.5",
						rx: "24",
						ry: "4.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.floraCrumb,
						cx: "38",
						cy: "81",
						r: "1.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.floraCrumb,
						cx: "60",
						cy: "82.5",
						r: "1.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.floraCrumb,
						cx: "51",
						cy: "79.5",
						r: "1"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.floraMoss,
						cx: "44",
						cy: "82.8",
						r: "1.4"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.floraMoss,
						cx: "56",
						cy: "80.8",
						r: "1.2"
					})
				]
			});
		}
		//#endregion
		//#region src/client/props.tsx
		/**
		* The things standing in the room, drawn as objects rather than as stickers.
		*
		* Every prop here is built the same way: a TOP face, a FRONT face and one SIDE
		* face, receding up and to the right by a fixed amount, over a soft contact
		* shadow on the floor. That is the whole trick of the room's 2.5D — a rectangle
		* with a lid and a flank reads as a box, and a rectangle on its own reads as a
		* sticker — and keeping the recede in one direction for every prop is what
		* stops the corner looking like six objects lit by six different suns.
		*
		* They live here rather than in `TeamStage.tsx` because a stage that draws the
		* team should not also be the file that knows how a coffee machine is shaped.
		*/
		/** Strip the colons React puts in a generated id, so it is safe in a url(). */
		function safeId(raw) {
			return raw.replaceAll(":", "");
		}
		/**
		* The water cooler: a large 5-gallon bottled jug on a modern cabinet with
		* real lid, flank, water level, hot/cold taps, drip tray grille, LED lights,
		* and rising bubbles.
		* @returns the cooler.
		*/
		function CoolerFigure() {
			const uid = safeId((0, react.useId)());
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.coolerSvg,
				viewBox: "0 0 80 115",
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("defs", { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("linearGradient", {
							id: `${uid}-cabinet`,
							x1: "0",
							y1: "0",
							x2: "1",
							y2: "0.4",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "0",
									style: { stopColor: "var(--team-cooler-lit)" }
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "0.45",
									style: { stopColor: "var(--team-cooler)" }
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "1",
									style: { stopColor: "var(--team-cooler-dark)" }
								})
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("linearGradient", {
							id: `${uid}-bottle`,
							x1: "0",
							y1: "0",
							x2: "1",
							y2: "0",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "0",
									style: { stopColor: "var(--team-cooler-bottle-dark)" }
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "0.25",
									style: { stopColor: "var(--team-cooler-bottle)" }
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "0.65",
									style: { stopColor: "var(--team-cooler-bottle-lit)" }
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "1",
									style: { stopColor: "var(--team-cooler-bottle-dark)" }
								})
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("linearGradient", {
							id: `${uid}-water`,
							x1: "0",
							y1: "0",
							x2: "0.3",
							y2: "1",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "0",
								style: { stopColor: "var(--team-cooler-water-lit)" }
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "1",
								style: { stopColor: "var(--team-cooler-water)" }
							})]
						})
					] }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.propShade,
						cx: "38",
						cy: "106",
						rx: "34",
						ry: "8"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSide,
						d: "M58 54 L70 45 L70 98 Q70 102 65 105 L58 105 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerCabinet,
						d: "M12 54 H58 V99 Q58 105 52 105 H18 Q12 105 12 99 Z",
						fill: `url(#${uid}-cabinet)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propTop,
						d: "M12 54 L24 45 H70 L58 54 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerCabinetEdge,
						d: "M12 54 H58 V99 Q58 105 52 105 H18 Q12 105 12 99 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerPanel,
						d: "M18 64 H52 V94 H18 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerPanelDepth,
						d: "M18 64 L21 61 H49 L52 64"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerDoorSeam,
						d: "M18 97 H52"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerTap,
						d: "M24 72 H32 M38 72 H46"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerFaucet,
						d: "M28 72 V76 M42 72 V76"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerHandleWarm,
						cx: "28",
						cy: "68",
						r: "2.6"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerHandleCool,
						cx: "42",
						cy: "68",
						r: "2.6"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.coolerDrip,
						cx: "35",
						cy: "95",
						rx: "17",
						ry: "4.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.coolerDripWell,
						cx: "35",
						cy: "94.5",
						rx: "14",
						ry: "2.8"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerGrille,
						d: "M26 94.5 H44 M28 95.5 H42 M30 93.5 H40"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerLedPower,
						cx: "16",
						cy: "59",
						r: "1.1"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerLedCold,
						cx: "20",
						cy: "59",
						r: "1.1"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerBottle,
						d: "M20 54 C20 36 24 22 31 15 L47 15 C54 22 58 36 58 54 Z",
						fill: `url(#${uid}-bottle)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerWater,
						d: "M22 54 C22 39 25.5 26 31.5 20 L46.5 20 C52.5 26 56 39 56 54 Z",
						fill: `url(#${uid}-water)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerRib,
						d: "M21.5 42 Q39 45 56.5 42 M23.5 30 Q39 33 54.5 30"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerNeck,
						d: "M31 15 L31 6 C31 4 32.5 3 34.5 3 L43.5 3 C45.5 3 47 4 47 6 L47 15 Z",
						fill: `url(#${uid}-bottle)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.coolerCap,
						cx: "39",
						cy: "3",
						rx: "9",
						ry: "3"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.coolerCapTop,
						cx: "39",
						cy: "2",
						rx: "6",
						ry: "2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerShine,
						d: "M24 51 C24 38 27.5 25 33 18 C30 25 26.5 36 26.5 51 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerShineRim,
						d: "M52 51 C54.5 39 55 28 53 21"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerBubble,
						cx: "31",
						cy: "38",
						r: "1.3",
						style: { animationDelay: "0s" }
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerBubble,
						cx: "45",
						cy: "44",
						r: "1.6",
						style: { animationDelay: "-1.7s" }
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerBubble,
						cx: "37",
						cy: "32",
						r: "1.1",
						style: { animationDelay: "-3.1s" }
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerBubble,
						cx: "49",
						cy: "33",
						r: "1.2",
						style: { animationDelay: "-4.4s" }
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerBubble,
						cx: "29",
						cy: "47",
						r: "0.9",
						style: { animationDelay: "-5.2s" }
					})
				]
			});
		}
		/**
		* Modern Nordic 3-seater Sofa with deep tufted cushions, throw pillows,
		* rounded armrests, natural wood tapered legs, and contact shadows.
		* @returns the sofa figure.
		*/
		function SofaFigure() {
			const uid = safeId((0, react.useId)());
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.sofaSvg,
				viewBox: "0 0 140 85",
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("linearGradient", {
						id: `${uid}-sofa-back`,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "0",
								style: { stopColor: "var(--team-fabric-lit)" }
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "0.6",
								style: { stopColor: "var(--team-fabric)" }
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "1",
								style: { stopColor: "var(--team-fabric-dark)" }
							})
						]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("linearGradient", {
						id: `${uid}-sofa-seat`,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "0",
								style: { stopColor: "color-mix(in srgb, var(--dsw-static-neutral-00) 24%, var(--team-fabric-lit))" }
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "0.3",
								style: { stopColor: "var(--team-fabric-lit)" }
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "0.75",
								style: { stopColor: "var(--team-fabric)" }
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "1",
								style: { stopColor: "var(--team-fabric-dark)" }
							})
						]
					})] }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.propShade,
						cx: "70",
						cy: "79",
						rx: "64",
						ry: "6"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.sofaLeg,
						d: "M18 68 L14 80 L18 80 L21 68 Z M122 68 L126 80 L122 80 L119 68 Z M36 68 L34 78 L37 78 L39 68 Z M104 68 L106 78 L103 78 L101 68 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.sofaBack,
						d: "M12 14 C12 6 22 2 70 2 C118 2 128 6 128 14 L128 48 C128 54 118 56 70 56 C22 56 12 54 12 48 Z",
						fill: `url(#${uid}-sofa-back)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.sofaBackTop,
						d: "M14 12 C24 5 116 5 126 12"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.sofaSeam,
						d: "M50 6 V46 M90 6 V46"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.sofaButton,
						cx: "31",
						cy: "24",
						r: "1.8"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.sofaButton,
						cx: "70",
						cy: "24",
						r: "1.8"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.sofaButton,
						cx: "109",
						cy: "24",
						r: "1.8"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.sofaSeat,
						x: "10",
						y: "38",
						width: "120",
						height: "26",
						rx: "6",
						fill: `url(#${uid}-sofa-seat)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.sofaSeatSeam,
						d: "M50 38 V64 M90 38 V64"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.sofaSeatPiping,
						d: "M12 42 H128"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.sofaArm,
						d: "M6 24 C6 18 10 16 16 16 C20 16 22 20 22 28 L22 56 C22 62 18 64 12 64 C8 64 6 60 6 56 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.sofaArmTop,
						d: "M8 20 C10 18 16 18 18 20"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.sofaArm,
						d: "M134 24 C134 18 130 16 124 16 C120 16 118 20 118 28 L118 56 C118 62 122 64 128 64 C132 64 134 60 134 56 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.sofaArmTop,
						d: "M126 20 C128 18 134 18 132 20"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.sofaPillowWarm,
						x: "20",
						y: "26",
						width: "18",
						height: "18",
						rx: "4",
						transform: "rotate(-12 29 35)"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.sofaPillowLine,
						d: "M22 35 L36 35",
						transform: "rotate(-12 29 35)"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.sofaPillowCool,
						x: "102",
						y: "26",
						width: "18",
						height: "18",
						rx: "4",
						transform: "rotate(10 111 35)"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.sofaPillowLine,
						d: "M104 35 L118 35",
						transform: "rotate(10 111 35)"
					})
				]
			});
		}
		/**
		* Natural Oak Coffee Table with chamfered edge, splayed wooden legs,
		* glossy design magazine and steaming coffee cup.
		* @returns the table figure.
		*/
		function TableFigure() {
			const uid = safeId((0, react.useId)());
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.tableSvg,
				viewBox: "0 0 100 55",
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("linearGradient", {
						id: `${uid}-tabletop`,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "0",
								style: { stopColor: "color-mix(in srgb, var(--team-warm) 45%, var(--dsw-static-neutral-00))" }
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "0.5",
								style: { stopColor: "color-mix(in srgb, var(--team-warm) 50%, var(--dsw-static-neutral-00))" }
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "1",
								style: { stopColor: "color-mix(in srgb, var(--team-warm) 60%, var(--dsw-static-neutral-600))" }
							})
						]
					}) }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.propShade,
						cx: "50",
						cy: "50",
						rx: "44",
						ry: "5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.tableLeg,
						d: "M16 28 L10 49 L14 49 L20 28 Z M84 28 L90 49 L86 49 L80 28 Z M28 28 L25 46 L28 46 L31 28 Z M72 28 L75 46 L72 46 L69 28 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.tableTop,
						d: "M6 18 C6 12 16 8 50 8 C84 8 94 12 94 18 L94 25 C94 31 84 35 50 35 C16 35 6 31 6 25 Z",
						fill: `url(#${uid}-tabletop)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.tableSurface,
						cx: "50",
						cy: "18",
						rx: "42",
						ry: "9"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.tableEdge,
						d: "M8 18 C8 27 92 27 92 18 L92 25 C92 34 8 34 8 25 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.tableGrain,
						d: "M22 17 C34 14 66 14 78 17 M28 20 C40 18 60 18 72 20"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.tableMagazine,
						d: "M22 16 L36 12 L44 15 L30 19 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.tableMagPage,
						d: "M24 16 L34 13 M38 13 L42 15"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.tableSaucer,
						cx: "68",
						cy: "18",
						rx: "8",
						ry: "3.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.tableCup,
						d: "M63 12 H73 L71.5 18 C71 20 65 20 64.5 18 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.tableMugHandle,
						d: "M72 13 C75 13 75 16 71.5 17"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSteam,
						d: "M66 10 Q68 7 66 5 M70 10 Q72 7 70 5"
					})
				]
			});
		}
		/**
		* Mid-century Arched Floor Lamp with brass stem, marble base,
		* warm glowing linen drum shade, and floor illumination.
		* @returns the floor lamp figure.
		*/
		function LampFigure() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.lampSvg,
				viewBox: "0 0 50 120",
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.lampBeam,
						d: "M25 38 L48 116 H2 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.propShade,
						cx: "25",
						cy: "116",
						rx: "18",
						ry: "4"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.lampBase,
						cx: "25",
						cy: "114",
						rx: "12",
						ry: "3.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.lampStem,
						d: "M25 114 V55 C25 24 25 18 25 12"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.lampFinial,
						cx: "25",
						cy: "10",
						r: "2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.lampShade,
						d: "M12 16 H38 L42 38 H8 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.lampShadeTop,
						cx: "25",
						cy: "16",
						rx: "13",
						ry: "3.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.lampShadeBottom,
						cx: "25",
						cy: "38",
						rx: "17",
						ry: "4.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.lampBulb,
						cx: "25",
						cy: "37",
						r: "4"
					})
				]
			});
		}
		/**
		* Wall-mounted Split Air Conditioner with sleek louvers, digital 24°C LED display,
		* and refreshing cool breeze airflow.
		* @returns the air conditioner figure.
		*/
		function AirConditionerFigure() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.acSvg,
				viewBox: "0 0 90 45",
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.propShade,
						x: "4",
						y: "6",
						width: "82",
						height: "24",
						rx: "4"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSide,
						d: "M80 8 L86 4 L86 24 L80 28 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.acBody,
						d: "M4 8 H80 V28 Q80 30 76 30 H8 Q4 30 4 28 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propTop,
						d: "M4 8 L10 4 H86 L80 8 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.acEdge,
						d: "M4 8 H80 V28 Q80 30 76 30 H8 Q4 30 4 28 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.acGrille,
						d: "M12 6 H78 M14 7.5 H76"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.acSeam,
						d: "M6 22 H78"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.acLouver,
						d: "M8 24 H76 V27 H8 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("text", {
						className: TeamStage_module_css_default.acTemp,
						x: "64",
						y: "18",
						children: "24°"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.acLedPower,
						cx: "74",
						cy: "14.5",
						r: "1"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.acLedCool,
						cx: "74",
						cy: "18.5",
						r: "1"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.acBreeze,
						d: "M14 31 Q20 38 16 44 M30 31 Q38 38 34 44 M46 31 Q54 38 50 44 M62 31 Q70 38 66 44"
					})
				]
			});
		}
		/**
		* A 2.5D fitness treadmill for the wellness corner: a low deck whose belt
		* disappears under a rounded motor hood, console uprights flanking the hood
		* (the near one clear of it, the far one rising behind it), handrails that
		* sweep back along the deck's sides with pulse grips on the run, and a touch
		* console with the safety key still in it and a bottle in the holder.
		* @returns the treadmill figure.
		*/
		function TreadmillFigure() {
			const uid = safeId((0, react.useId)());
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.treadmillSvg,
				viewBox: "0 0 100 100",
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("linearGradient", {
						id: `${uid}-belt`,
						x1: "0",
						y1: "0",
						x2: "0.3",
						y2: "1",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "0",
								style: { stopColor: "var(--dsw-static-neutral-800)" }
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "0.5",
								style: { stopColor: "var(--dsw-static-neutral-900)" }
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "1",
								style: { stopColor: "var(--dsw-static-neutral-1000)" }
							})
						]
					}) }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.propShade,
						cx: "47",
						cy: "93",
						rx: "42",
						ry: "6.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSide,
						d: "M80 56 L90 50 L90 84 L80 90 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillBase,
						d: "M12 62 L80 56 L80 90 L12 96 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propTop,
						d: "M12 62 L22 56 L90 50 L80 56 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillBelt,
						d: "M16 63 L66 60 L66 87 L16 90 Z",
						fill: `url(#${uid}-belt)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillTread,
						d: "M20 66 L62 63.5 M20 71 L62 68.5 M20 76 L62 73.5 M20 81 L62 78.5 M20 86 L62 83.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillRail,
						d: "M13 62.4 L16 62.1 L16 89.6 L13 89.9 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillPost,
						d: "M85 52 L85 13"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillHood,
						d: "M66 59 C66 48.5 70.5 42.5 77.5 42 L82 41.6 C87.5 41.4 90 44.5 90 49 L90 64.5 C90 69.5 86.8 72.5 81.8 72.5 L72 73 C67.5 73.2 66 69 66 64.5 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillHoodSheen,
						d: "M69 47.5 C71.5 43.8 76 42 81 41.8 C85.5 41.7 88 43.5 88.8 46.8"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillHoodVent,
						d: "M70 55 L87 53.2 M70 59 L87 57.2 M70 63 L87 61.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillPost,
						d: "M63 61 L63 17"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillArm,
						d: "M63 28 L21 33.5 L21 37 L63 31.5 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillArm,
						d: "M85 23 L35 32.5 L35 36 L85 26.5 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillSensor,
						d: "M28 33.6 H34 M42 32.2 H48"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillConsole,
						d: "M56 18 L88 13 L84.5 3.5 L53 8.5 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillScreen,
						d: "M59.5 14.8 L84.5 10.9 L82 6.4 L57 10.3 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillMetrics,
						d: "M62 13 L80 10.2 M62 10.6 L75 8.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.treadmillStopKey,
						cx: "79",
						cy: "12.8",
						r: "1.4"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.treadmillKeyCord,
						d: "M79 12.8 C76 16.5 73 20.5 70.5 24.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.treadmillBottle,
						x: "54.5",
						y: "14",
						width: "3.2",
						height: "6.5",
						rx: "1.2"
					})
				]
			});
		}
		/**
		* A chair seen from behind: a curved shell, a mesh panel, a lumbar pad, a seat
		* pan with a lid on it, a gas lift and a five-star base. The base ellipse is
		* flattened to the floor's own foreshortening, so the chair stands on the room
		* rather than in front of it.
		* @returns the chair.
		*/
		function ChairFigure() {
			const uid = safeId((0, react.useId)());
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.chairSvg,
				viewBox: "0 0 64 95",
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("defs", { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("linearGradient", {
							id: `${uid}-shell`,
							x1: "0",
							y1: "0",
							x2: "0.35",
							y2: "1",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "0",
									style: { stopColor: "var(--team-chair-lit)" }
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "0.55",
									style: { stopColor: "var(--team-chair)" }
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "1",
									style: { stopColor: "var(--team-chair-dark)" }
								})
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("linearGradient", {
							id: `${uid}-mesh`,
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "0",
								style: { stopColor: "color-mix(in srgb, var(--team-chair-lit) 58%, transparent)" }
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "1",
								style: { stopColor: "color-mix(in srgb, var(--team-chair) 42%, transparent)" }
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("linearGradient", {
							id: `${uid}-lift`,
							x1: "0",
							y1: "0",
							x2: "1",
							y2: "0",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "0",
									style: { stopColor: "var(--team-chair-dark)" }
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "0.35",
									style: { stopColor: "var(--team-chair-lit)" }
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "0.65",
									style: { stopColor: "var(--team-chair)" }
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "1",
									style: { stopColor: "var(--team-chair-dark)" }
								})
							]
						})
					] }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
						className: TeamStage_module_css_default.chairRide,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.chairArmrest,
								d: "M8 32 C8 26 12 24 14 26 L14 44 C12 46 8 42 8 36 Z"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.chairArmrest,
								d: "M56 32 C56 26 52 24 50 26 L50 44 C52 46 56 42 56 36 Z"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.chairShell,
								d: "M12 12 C12 4 20 1.5 32 1.5 C44 1.5 52 4 52 12 L52 44 C52 51 45 53.5 32 53.5 C19 53.5 12 51 12 44 Z",
								fill: `url(#${uid}-shell)`
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.chairShellEdge,
								d: "M12 12 C12 4 20 1.5 32 1.5 C44 1.5 52 4 52 12 L52 44 C52 51 45 53.5 32 53.5 C19 53.5 12 51 12 44 Z"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.chairMesh,
								d: "M18 14 C18 10.5 23 8 32 8 C41 8 46 10.5 46 14 L46 40 C46 45.5 40 47.5 32 47.5 C24 47.5 18 45.5 18 40 Z",
								fill: `url(#${uid}-mesh)`
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.chairMeshLine,
								d: "M19 17 L45 17 M19 22 L45 22 M19 27 L45 27 M19 32 L45 32 M19 37 L45 37 M19 42 L45 42"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.chairMeshSpine,
								d: "M32 10 V46"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.chairLumbar,
								d: "M20 30 C24 27.5 40 27.5 44 30 L44 37 C40 40 24 40 20 37 Z",
								fill: `url(#${uid}-shell)`
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
								className: TeamStage_module_css_default.chairLumbarKnob,
								cx: "32",
								cy: "33.5",
								r: "1.5"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.chairPan,
								d: "M15 52 H49 Q52 52 52 55 L50 61 Q49.5 63 47 63 H17 Q14.5 63 14 61 L12 55 Q12 52 15 52 Z"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.chairPanTop,
								d: "M15 52 H49 Q52 52 52 54.5 H12 Q12 52 15 52 Z"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.chairPanStitch,
								d: "M20 54 H44"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
								className: TeamStage_module_css_default.chairMechanism,
								x: "24",
								y: "62",
								width: "16",
								height: "6",
								rx: "2.5"
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.chairLift,
						x: "30",
						y: "68",
						width: "4",
						height: "15",
						rx: "2",
						fill: `url(#${uid}-lift)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.chairHub,
						cx: "32",
						cy: "86",
						rx: "6.5",
						ry: "2.4"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
						className: TeamStage_module_css_default.chairSpokes,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M32 85.5 L8 90.5" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M32 85.5 L19 93" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M32 85.5 L45 93" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M32 85.5 L56 90.5" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M32 85.5 L32 94" })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
						className: TeamStage_module_css_default.chairCasters,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
								cx: "8",
								cy: "90.5",
								rx: "2.6",
								ry: "2"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
								cx: "19",
								cy: "93",
								rx: "2.6",
								ry: "2"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
								cx: "45",
								cy: "93",
								rx: "2.6",
								ry: "2"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
								cx: "56",
								cy: "90.5",
								rx: "2.6",
								ry: "2"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
								cx: "32",
								cy: "94",
								rx: "2.6",
								ry: "2"
							})
						]
					})
				]
			});
		}
		/**
		* The office printer: a box with a lid, an out-tray with a sheet still in it,
		* a paper cassette pulled a little proud of the body, and a status light.
		* @returns the printer.
		*/
		function PrinterFigure() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.propSvg,
				viewBox: "0 0 84 74",
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.propShade,
						cx: "40",
						cy: "69",
						rx: "32",
						ry: "5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSide,
						d: "M64 24 L76 16 L76 62 L64 70 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propFront,
						d: "M8 24 H64 V70 H8 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propTop,
						d: "M8 24 L20 16 H76 L64 24 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSeam,
						d: "M8 24 H64 V70 H8 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propInset,
						d: "M15 22.5 L24.5 18 H68 L58.5 22.5 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propScannerHandle,
						d: "M34 22 H48"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propScreen,
						d: "M14 26 H30 V34 H14 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propScreenGlint,
						d: "M16 28 L24 28 M16 31 L21 31"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propPaper,
						d: "M32 16 L41 10.5 H60 L51 16 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propPaperLine,
						d: "M38 14.5 L46 14.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propTray,
						d: "M12 38 H58 L54 45 H12 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propPaper,
						d: "M16 38 H50 L47 43.5 H16 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propTextLines,
						d: "M20 40.5 H38 M20 42 H32"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propInset,
						d: "M12 52 H58 V64 H12 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSeam,
						d: "M12 58 H58"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.propDrawerHandle,
						x: "30",
						y: "54",
						width: "10",
						height: "2",
						rx: "1"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.propPaperGauge,
						x: "16",
						y: "54",
						width: "3",
						height: "6",
						rx: "0.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.propLampLive,
						cx: "52",
						cy: "30",
						r: "2.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.propLampWifi,
						cx: "45",
						cy: "30",
						r: "1.8"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.propLampIdle,
						cx: "38",
						cy: "30",
						r: "1.8"
					})
				]
			});
		}
		/**
		* The coffee machine: an Italian espresso & drip station with hopper, group head,
		* steaming cup, glass carafe on warmer plate, and barista details.
		* @returns the coffee machine.
		*/
		function CoffeeFigure() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.propSvg,
				viewBox: "0 0 68 92",
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.propShade,
						cx: "33",
						cy: "87",
						rx: "26",
						ry: "5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSide,
						d: "M50 30 L60 23 L60 82 L50 88 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propFront,
						d: "M10 30 H50 V88 H10 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propTop,
						d: "M10 30 L20 23 H60 L50 30 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSeam,
						d: "M10 30 H50 V88 H10 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propInset,
						d: "M22 23 L28 12 H44 L50 23 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propGlass,
						d: "M25 20 L29.5 14 H42.5 L47 20 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.propBean,
						cx: "33",
						cy: "17",
						rx: "1.5",
						ry: "1"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.propBean,
						cx: "38",
						cy: "18",
						rx: "1.4",
						ry: "1"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.propGauge,
						cx: "18",
						cy: "36",
						r: "3.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propGaugeNeedle,
						d: "M18 36 L19.5 34.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSeam,
						d: "M20 42 H42"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.propInset,
						x: "17",
						y: "46",
						width: "26",
						height: "16",
						rx: "2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSpout,
						d: "M26 46 V52 M34 46 V52"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propPortafilter,
						d: "M17 48 H25 M35 48 H43"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propCup,
						d: "M25 55 H35 L33.5 62 Q33 63.5 30 63.5 Q27 63.5 26.5 62 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSteam,
						d: "M28 53 Q30 50 28 48 M32 53 Q34 50 32 48"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propTray,
						d: "M14 78 H46 V81 H14 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propWarmerPlate,
						d: "M16 78 H44"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propGlass,
						d: "M20 66 H40 L38 77 H22 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propBrew,
						d: "M21.4 71 H38.6 L38 77 H22 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propCarafeHandle,
						d: "M40 68 C43 68 43 75 39 76"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.propLampLive,
						cx: "45",
						cy: "36",
						r: "1.8"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propCup,
						d: "M52 18 H61 L59.8 24 Q59.4 25.4 56.5 25.4 Q53.6 25.4 53.2 24 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propMugHandle,
						d: "M60.5 19.5 C63 20 63 23 59.5 23.5"
					})
				]
			});
		}
		/**
		* The filing cabinet: three drawers with pull handles and a label card, a
		* folder standing out of the top one, and a box of files on the lid.
		* @returns the filing cabinet.
		*/
		function CabinetFigure() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.propSvg,
				viewBox: "0 0 72 108",
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.propShade,
						cx: "34",
						cy: "103",
						rx: "27",
						ry: "5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSide,
						d: "M54 30 L64 23 L64 96 L54 102 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propFront,
						d: "M10 30 H54 V102 H10 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propTop,
						d: "M10 30 L20 23 H64 L54 30 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSeam,
						d: "M10 30 H54 V102 H10 Z"
					}),
					[
						36,
						60,
						84
					].map((top) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.propInset,
							d: `M14 ${top} H50 V${top + 18} H14 Z`
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
							className: TeamStage_module_css_default.propHandle,
							x: "26",
							y: top + 6,
							width: "12",
							height: "3",
							rx: "1.5"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
							className: TeamStage_module_css_default.propLabel,
							x: "17",
							y: top + 4,
							width: "7",
							height: "5",
							rx: "1"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.propLabelLine,
							d: `M18.5 ${top + 6.5} H22.5`
						})
					] }, top)),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propFolder,
						d: "M22 36 L28 26 H42 L36 36 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propPaper,
						d: "M25 34 L30 27 H40 L35 34 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propFolderTab,
						d: "M30 26 H36 V24 H30 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSide,
						d: "M44 16 L52 11 L52 23 L44 28 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propBox,
						d: "M24 16 H44 V28 H24 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propBoxTop,
						d: "M24 16 L32 11 H52 L44 16 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSeam,
						d: "M28 21 H40"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.propBoxHole,
						cx: "34",
						cy: "22",
						rx: "2",
						ry: "1.2"
					})
				]
			});
		}
		/**
		* A pendant lamp over the room: a flex, a cone shade with a lit rim, and the
		* pool of light it throws. It hangs from the ceiling strip, which is what
		* finally tells the reader the room has one.
		* @returns the pendant.
		*/
		function PendantFigure() {
			const uid = safeId((0, react.useId)());
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.pendantSvg,
				viewBox: "0 0 60 100",
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("linearGradient", {
						id: `${uid}-beam`,
						x1: "0.5",
						y1: "0",
						x2: "0.5",
						y2: "1",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "0",
								style: { stopColor: "color-mix(in srgb, var(--team-warm) 36%, transparent)" }
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "0.6",
								style: { stopColor: "color-mix(in srgb, var(--team-warm) 18%, transparent)" }
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
								offset: "1",
								style: { stopColor: "transparent" }
							})
						]
					}) }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.pendantRose,
						x: "27",
						y: "0",
						width: "6",
						height: "3.5",
						rx: "1.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.pendantFlex,
						d: "M30 0 V72"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.pendantNeck,
						x: "27",
						y: "70",
						width: "6",
						height: "4",
						rx: "1.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.pendantGlow,
						d: "M30 88 L58 100 H2 Z",
						fill: `url(#${uid}-beam)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.pendantShade,
						d: "M30 74 L48 92 H12 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.pendantMouth,
						cx: "30",
						cy: "92",
						rx: "18",
						ry: "4.6"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.pendantBulb,
						cx: "30",
						cy: "90",
						rx: "6",
						ry: "3"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.pendantFilament,
						cx: "30",
						cy: "89.5",
						r: "1.5"
					})
				]
			});
		}
		/**
		* The cat that lives here. It walks the front of the room now and again and is
		* the one thing in the office nobody assigned a task to.
		* @returns the cat.
		*/
		function CatFigure() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.catSvg,
				viewBox: "0 0 64 40",
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.propShade,
						cx: "32",
						cy: "37",
						rx: "20",
						ry: "3"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catTail,
						d: "M12 24 C4 22 2 13 7 8 C5 14 8 19 13 19.5 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catTailTip,
						d: "M7 8 C8 10 7 12 5 14 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catBody,
						d: "M14 22 C14 15 20 12 30 12 C41 12 47 15 47 22 L47 30 C47 34 44 36 40 36 L21 36 C17 36 14 34 14 30 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catLeg,
						d: "M19 32 H23 V37.5 H19 Z M27 32 H31 V37.5 H27 Z M35 32 H39 V37.5 H35 Z M42 32 H46 V37.5 H42 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catBody,
						d: "M44 16 C51 16 55 20 55 25 C55 30 51 33 45 33 C41 33 39 30 39 25 C39 20 41 16 44 16 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catEar,
						d: "M42 17 L41 8.5 L48 14 Z M52 14 L57 8.5 L57 17 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catEarInner,
						d: "M42.5 15.5 L42 10.5 L46.5 14 Z M53 14 L56 10.5 L56 15.5 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.catEye,
						cx: "47.5",
						cy: "23.5",
						r: "1.6"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.catEye,
						cx: "53.5",
						cy: "23.5",
						r: "1.6"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.catPupil,
						cx: "47.5",
						cy: "23.5",
						r: "0.9"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.catPupil,
						cx: "53.5",
						cy: "23.5",
						r: "0.9"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.catGlint,
						cx: "48",
						cy: "23",
						r: "0.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.catGlint,
						cx: "54",
						cy: "23",
						r: "0.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.catNose,
						cx: "50.5",
						cy: "26",
						r: "0.7"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catWhisker,
						d: "M51 28 L59 26 M51 29 L59 29.5 M51 30 L58 32 M41 27 L33 26 M41 29 L33 29 M41 30 L34 32"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catStripe,
						d: "M22 14 L24 20 M29 13 L31 19 M36 14 L38 20 M46 14 L47 17"
					})
				]
			});
		}
		//#endregion
		//#region src/client/TeamStage.tsx
		/**
		* The agent-team stage: a conversation view tab that draws the team as a room
		* you can look into — every member has a desk of its own with its own computer
		* on it, stands where its live state puts it, and walks the floor to say
		* something to somebody else. The room is the whole tab: while the stage is on
		* screen it holds the composer seat, so nothing is left over the floor; the
		* mailbox, the shared workspace and the task board wait behind a dock of doors
		* on the right edge and open as a glass drawer over the room.
		*
		* Every value it renders is the host's own `team` projection, delivered
		* through the injected store: the browser folds nothing. Geometry comes from
		* the roster alone (no DOM measurement), so the picture is a function of the
		* durable state and nothing else.
		*/
		/** How much of a message one member says out loud while it delivers it. */
		const SPEECH_CHARS = 44;
		/** How much of a message one log row carries. */
		const LOG_CHARS = 110;
		/** How much of a message one crew line in the feed carries. */
		const CREW_CHARS = 40;
		/** How much text one workstation screen carries. */
		const SCREEN_CHARS = 34;
		/** How much of an unknown session id a ledger shows. */
		const SHORT_ID = 6;
		/** How long one delivery keeps its carrier away from its own desk. */
		const ERRAND_MS = 9e3;
		/** The board's columns, left to right. */
		const COLUMNS = [
			"pending",
			"active",
			"done"
		];
		/** Join the non-empty parts of a meta line. */
		function meta(...parts) {
			return parts.filter((part) => part !== void 0 && part !== "").join(" · ");
		}
		/** Wall-clock hh:mm for one mailbox row. */
		function clock(time) {
			try {
				return new Date(time).toLocaleTimeString(void 0, {
					hour: "2-digit",
					minute: "2-digit"
				});
			} catch {
				return "";
			}
		}
		/** The glyph one small avatar carries: the member's first character. */
		function initial(name) {
			return [...name][0]?.toUpperCase() ?? "?";
		}
		/** One line of a message, short enough to read where it is shown. */
		function short(text, limit) {
			const line = text.replace(/\s+/gu, " ").trim();
			return [...line].length <= limit ? line : `${[...line].slice(0, limit).join("")}…`;
		}
		/** Stagger the entry animation of a list without hard-coding per-row CSS. */
		function stagger(index) {
			return { animationDelay: `${Math.min(index, 10) * 30}ms` };
		}
		/** The preset pictures a workstation monitor can show. */
		const APPS = [
			"code",
			"chart",
			"doc",
			"mail",
			"grid",
			"term"
		];
		/** How many bars each preset picture is drawn from. */
		const APP_BARS = {
			code: 5,
			chart: 5,
			doc: 4,
			mail: 3,
			grid: 4,
			term: 4
		};
		/** Which picture one seat's monitor shows; the leader watches the dashboard. */
		function appOf(seat) {
			if (seat < 0) return "chart";
			return APPS[seat % APPS.length] ?? "code";
		}
		/** One preset screen picture, drawn from bars alone so the theme owns it. */
		function ScreenApp(props) {
			const { app } = props;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: TeamStage_module_css_default.screenApp,
				"data-app": app,
				"aria-hidden": true,
				children: Array.from({ length: APP_BARS[app] }, (_, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {}, index))
			});
		}
		/** A member as a tiny portrait: its own mask in its own accent. Memoized: one
		*  feed renders dozens of these, and every prop is a primitive. */
		const Cameo = (0, react.memo)(function Cameo(props) {
			const { seat, name } = props;
			if (seat === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: TeamStage_module_css_default.discGlyph,
				children: initial(name)
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: TeamStage_module_css_default.cameo,
				"data-cameo-species": maskOf(seat),
				style: accentOf(seat),
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Crew, {
					kind: maskOf(seat),
					className: TeamStage_module_css_default.cameoCrew,
					portrait: true,
					hair: hairOf(seat),
					gear: gearOf(seat),
					tone: toneOf(seat),
					skin: skinOf(seat)
				})
			});
		});
		/** Where one thing stands on the floor, and how big it draws there. */
		function at(post, scale) {
			const screen = project(post);
			return {
				left: `${screen.left}%`,
				top: `${screen.top}%`,
				"--team-depth": Math.round(post.y),
				"--team-scale": Math.round(screen.scale * scale * 1e3) / 1e3
			};
		}
		/** Stagger each chair's occasional settle, so the office does not bounce in unison. */
		function chairDelay(seat) {
			return { "--team-chair-delay": `${-((seat + 1) % 5) * 1.35}s` };
		}
		/**
		* Where one piece of the break corner stands, and how large it draws there.
		* A piece is placed by its OWN plan rectangle — the same rectangle a walk
		* goes around — so the furniture it is drawn as and the furniture it is
		* walked around as are the same furniture, and it can never creep off the
		* floor and up a wall.
		*/
		function loungePiece(rect) {
			const screen = project({
				x: rect.x + rect.w / 2,
				y: rect.y + rect.h / 2
			});
			return {
				left: `${screen.left}%`,
				top: `${screen.top}%`,
				"--team-depth": Math.round(rect.y + rect.h / 2),
				"--team-scale": Math.round(screen.scale * 1e3) / 1e3
			};
		}
		/** The rug and the floor lamp are furniture too, so they get plan rects. */
		const RUG_RECT = {
			x: 70.5,
			y: 53.5,
			w: 21,
			h: 7.5
		};
		const LAMP_RECT = {
			x: 70,
			y: 47.5,
			w: 3,
			h: 7
		};
		const [SOFA_BLOCK, TABLE_BLOCK, PLANT_BLOCK, COOLER_BLOCK] = ROOM_BLOCKS;
		/**
		* The room's fixed furniture, hoisted to module level: none of it reads the
		* roster or the ledgers, and a shared element reference is the one signal
		* React never re-renders — however often the stage re-renders around it, the
		* wall, the lounge and the props are drawn exactly once.
		*/
		const WALL = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RoomWall, {});
		const PENDANT = /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			className: TeamStage_module_css_default.pendant,
			style: { left: `${onWall(50)}%` },
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PendantFigure, {})
		});
		const UTILITY = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
			className: TeamStage_module_css_default.utility,
			style: at({
				x: 4.5,
				y: 64
			}, 1),
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: TeamStage_module_css_default.utilityCabinet,
					"data-prop": "cabinet",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CabinetFigure, {})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: TeamStage_module_css_default.utilityPrinter,
					"data-prop": "printer",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PrinterFigure, {})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: TeamStage_module_css_default.utilityCoffee,
					"data-prop": "coffee",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CoffeeFigure, {})
				})
			]
		});
		const CAT = /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			className: TeamStage_module_css_default.cat,
			"data-prop": "cat",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CatFigure, {})
		});
		const TREADMILL = /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			className: TeamStage_module_css_default.treadmill,
			"data-prop": "treadmill",
			style: at({
				x: 93,
				y: 87
			}, 1),
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TreadmillFigure, {})
		});
		const LOUNGE = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: TeamStage_module_css_default.lounge,
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: TeamStage_module_css_default.rug,
					"data-prop": "rug",
					style: loungePiece(RUG_RECT)
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: TeamStage_module_css_default.sofa,
					"data-prop": "sofa",
					style: loungePiece(SOFA_BLOCK),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SofaFigure, {})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: TeamStage_module_css_default.table,
					"data-prop": "table",
					style: loungePiece(TABLE_BLOCK),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TableFigure, {})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: TeamStage_module_css_default.lamp,
					"data-prop": "lamp",
					style: loungePiece(LAMP_RECT),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LampFigure, {})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: TeamStage_module_css_default.plant,
					"data-prop": "plant",
					style: loungePiece(PLANT_BLOCK),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Plant, { kind: plantOf(0) })
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: TeamStage_module_css_default.cooler,
					"data-prop": "cooler",
					style: loungePiece(COOLER_BLOCK),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CoolerFigure, {})
				})
			]
		});
		/**
		* The delivery currently being carried across the room. One message keeps its
		* carrier away from its own desk for a while and then lets it walk back: the
		* room shows what just happened, not the whole history at once.
		* @param latest - the newest mailbox row.
		* @returns the row while its errand is running.
		*/
		function useVisit(latest) {
			const [live, setLive] = (0, react.useState)(void 0);
			const id = latest !== void 0 && latest.kind !== "settled" ? latest.messageId : void 0;
			(0, react.useEffect)(() => {
				if (id === void 0) return void 0;
				setLive(id);
				const timer = setTimeout(() => {
					setLive(void 0);
				}, ERRAND_MS);
				return () => {
					clearTimeout(timer);
				};
			}, [id]);
			return live !== void 0 && live === id ? latest : void 0;
		}
		/**
		* The team stage. Rendered as one conversation view tab, so it exists only
		* while the surrounding session has a team — an ordinary conversation never
		* grows a tab it cannot fill.
		*/
		function TeamStage(props) {
			const { useTeam, useSessions, openMember, openLeader, holdComposer, t } = props;
			const state = useTeam((snapshot) => snapshot);
			const sessionsById = useSessions((snapshot) => snapshot.byId);
			/** The member the pointer is over, anywhere on the stage. */
			const [focus, setFocus] = (0, react.useState)(void 0);
			/** Which ledger the drawer is showing; the room stands alone by default. */
			const [panel, setPanel] = (0, react.useState)(void 0);
			const { leaderId, currentId, members, tasks, messages, board, boardAt } = state;
			const visit = useVisit(messages[messages.length - 1]);
			const lastId = messages.length > 0 ? messages[messages.length - 1].messageId : void 0;
			(0, react.useEffect)(() => holdComposer?.(), [holdComposer]);
			const running = (0, react.useMemo)(() => new Set(members.filter((member) => sessionsById[member.memberId]?.running === true).map((member) => member.memberId)), [members, sessionsById]);
			/** The last thing the visible mailbox tail says about each member. */
			const touched = (0, react.useMemo)(() => {
				const out = /* @__PURE__ */ new Map();
				for (const message of messages.slice(-4)) {
					if (message.from !== void 0) out.set(message.from, message.kind === "message" ? "sent" : "reported");
					if (message.to !== void 0) out.set(message.to, "got");
				}
				return out;
			}, [messages]);
			/**
			* Mail counted as read: the newest delivery that had arrived when the feed
			* was last open — its identity, not the count, because a bounded feed stops
			* growing exactly when the mail keeps coming, and so does a team switch,
			* which starts the next team from a clean slate.
			*/
			const seen = (0, react.useRef)({
				leader: void 0,
				id: void 0
			});
			(0, react.useEffect)(() => {
				if (seen.current.leader !== leaderId || panel === "feed") seen.current = {
					leader: leaderId,
					id: lastId
				};
			}, [
				panel,
				leaderId,
				lastId
			]);
			const freshMail = panel !== "feed" && seen.current.leader === leaderId && lastId !== void 0 && lastId !== seen.current.id;
			if (leaderId === void 0 || members.length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: TeamStage_module_css_default.stage,
				"data-agent-team-stage": true,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: TeamStage_module_css_default.blankTitle,
					children: t("stage.noTeam")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: TeamStage_module_css_default.blankHint,
					children: t("stage.noTeamHint")
				})]
			});
			const { names, seats, openOf, roster, desks, homes, away, lines } = (0, react.useMemo)(() => {
				const names = /* @__PURE__ */ new Map([[leaderId, t("member.leader")]]);
				for (const member of members) names.set(member.memberId, member.name);
				/** Roster seat per member id, so the ledgers can draw the same cast. */
				const seats = /* @__PURE__ */ new Map([[leaderId, -1]]);
				members.forEach((member, index) => seats.set(member.memberId, index));
				const openCounts = /* @__PURE__ */ new Map();
				for (const task of tasks) {
					if (task.status === "done" || task.assigneeId === void 0) continue;
					openCounts.set(task.assigneeId, (openCounts.get(task.assigneeId) ?? 0) + 1);
				}
				const openOf = (memberId) => openCounts.get(memberId) ?? 0;
				const roster = [leaderId, ...members.map((member) => member.memberId)];
				const desks = new Map(roster.map((id, index) => [id, deskOf(index, roster.length)]));
				/** Where each member is standing right now: its own desk, or the break corner. */
				const homes = /* @__PURE__ */ new Map();
				/** Who is away from its own desk, so the desk can be drawn empty. */
				const away = /* @__PURE__ */ new Set();
				const stations = [];
				let breaks = 0;
				for (const id of roster) {
					const desk = desks.get(id) ?? deskOf(0, roster.length);
					const station = id === leaderId ? "desk" : stationFor(running.has(id), touched.get(id), openOf(id));
					if (station === "break") away.add(id);
					stations.push(station === "break" ? breakAt(breaks++) : desk);
				}
				const parted = spread(stations);
				roster.forEach((id, index) => {
					const post = stations[index];
					homes.set(id, {
						...post,
						...parted[index]
					});
				});
				/** What one member's monitor shows: its active task, or the last thing said to it. */
				const lines = /* @__PURE__ */ new Map();
				for (const id of roster) {
					const active = tasks.find((task) => task.assigneeId === id && task.status === "active") ?? tasks.find((task) => task.assigneeId === id && task.status !== "done");
					if (active !== void 0) {
						lines.set(id, short(active.title, SCREEN_CHARS));
						continue;
					}
					for (let index = messages.length - 1; index >= 0; index -= 1) {
						const message = messages[index];
						if (message?.to === id) {
							lines.set(id, short(message.text, SCREEN_CHARS));
							break;
						}
					}
				}
				return {
					names,
					seats,
					openOf,
					roster,
					desks,
					homes,
					away,
					lines
				};
			}, [
				leaderId,
				members,
				tasks,
				messages,
				running,
				touched,
				t
			]);
			const peers = members.filter((member) => member.relation === "peer");
			const openTasks = tasks.filter((task) => task.status !== "done").length;
			const leaderRunning = sessionsById[leaderId]?.running === true;
			/** The delivery on its feet: who carries it, to whom, and where they meet. */
			const errand = (0, react.useMemo)(() => errandOf(visit, leaderId, homes), [
				visit,
				leaderId,
				homes
			]);
			const visitOf = (id) => errand !== void 0 && errand.fromId === id ? errand.meet : void 0;
			/** Which way the two ends of a delivery turn while they talk. */
			const turnOf = (id) => {
				if (errand === void 0) return void 0;
				if (errand.fromId === id) return errand.meet.x < errand.host.x ? "right" : "left";
				if (errand.toId === id) return errand.meet.x < errand.host.x ? "left" : "right";
			};
			const toggle = (id) => {
				setPanel((current) => current === id ? void 0 : id);
			};
			const titleOf = (id) => id === "feed" ? t("stage.feed") : id === "workspace" ? t("stage.workspace") : t("stage.board");
			/** One stable opener for every tile: the tiles are memoized on their props. */
			const open = (0, react.useCallback)((id) => {
				if (id === leaderId) openLeader(leaderId);
				else openMember(leaderId, id);
			}, [
				leaderId,
				openLeader,
				openMember
			]);
			const tileOf = (id, seat, member) => {
				const desk = desks.get(id) ?? deskOf(0, roster.length);
				const home = homes.get(id) ?? desk;
				const live = seat < 0 ? leaderRunning : running.has(id);
				const name = member?.name ?? t("member.leader");
				return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MemberTile, {
					id,
					name,
					seat,
					home,
					errand: visitOf(id),
					count: roster.length,
					scale: home.scale,
					relation: member?.relation ?? "lead",
					role: member?.role,
					current: currentId === id,
					running: live,
					pose: poseFor(live, touched.get(id), openOf(id)),
					away: away.has(id),
					focused: focus === id,
					talking: errand === void 0 ? void 0 : errand.fromId === id ? "from" : errand.toId === id ? "to" : void 0,
					turn: turnOf(id),
					speech: errand !== void 0 && errand.fromId === id ? short(errand.message.text, SPEECH_CHARS) : void 0,
					tasks: openOf(id),
					label: member === void 0 ? t("member.openLeader") : t("member.open", { name }),
					title: member === void 0 ? t("member.leader") : meta(member.name, member.role, member.model, member.effort, member.relation === "peer" ? t("relation.peer") : t("relation.managed")),
					onOpen: open,
					onFocus: setFocus,
					t
				}, id);
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: TeamStage_module_css_default.stage,
				"data-agent-team-stage": true,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
					className: TeamStage_module_css_default.bar,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: TeamStage_module_css_default.barTitle,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconTeam16, {
								size: 15,
								className: TeamStage_module_css_default.barIcon
							}), t("stage.title")]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: TeamStage_module_css_default.barHint,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconTeamPeer16, { size: 13 }), peers.length > 1 ? t("stage.peerRing") : t("stage.roomHint")]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: TeamStage_module_css_default.barStats,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TeamStage_module_css_default.stat,
									children: t("stage.members", { count: members.length + 1 })
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: `${TeamStage_module_css_default.stat} ${running.size > 0 ? TeamStage_module_css_default.statLive : ""}`,
									children: running.size > 0 ? t("stage.running", { count: running.size }) : t("stage.idle")
								}),
								tasks.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TeamStage_module_css_default.stat,
									children: t("stage.tasks", {
										open: openTasks,
										total: tasks.length
									})
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: TeamStage_module_css_default.scene,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("section", {
							className: TeamStage_module_css_default.roomPane,
							"aria-label": t("stage.room"),
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: TeamStage_module_css_default.floor,
								style: shellVars(),
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: TeamStage_module_css_default.shell,
										"aria-hidden": true,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.ceiling }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.wallLeft }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.wallRight }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.wallBack }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.floorPlane }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.skirting })
										]
									}),
									WALL,
									PENDANT,
									UTILITY,
									CAT,
									TREADMILL,
									LOUNGE,
									roster.map((id, index) => {
										const seat = index - 1;
										const desk = desks.get(id) ?? deskOf(index, roster.length);
										const live = seat < 0 ? leaderRunning : running.has(id);
										return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Workstation, {
											id,
											desk,
											seat,
											pose: poseFor(live, touched.get(id), openOf(id)),
											line: lines.get(id),
											empty: away.has(id) || errand !== void 0 && errand.fromId === id,
											t
										}, `desk-${id}`);
									}),
									roster.map((id, index) => tileOf(id, index - 1, members[index - 1]))
								]
							})
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("nav", {
							className: TeamStage_module_css_default.dock,
							"aria-label": t("stage.dock"),
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(DockButton, {
									id: "feed",
									label: t("stage.feed"),
									count: messages.length,
									active: panel === "feed",
									fresh: freshMail,
									onToggle: toggle,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconTeamMailbox16, { size: 15 })
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(DockButton, {
									id: "workspace",
									label: t("stage.workspace"),
									count: board.length,
									active: panel === "workspace",
									fresh: false,
									onToggle: toggle,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconTeamWorkspace16, { size: 15 })
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(DockButton, {
									id: "tasks",
									label: t("stage.board"),
									count: openTasks,
									active: panel === "tasks",
									fresh: false,
									onToggle: toggle,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconTeamTask16, { size: 15 })
								})
							]
						}),
						panel !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("aside", {
							className: TeamStage_module_css_default.drawer,
							"data-panel": panel,
							"aria-label": titleOf(panel),
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
								className: TeamStage_module_css_default.drawerHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("h3", {
									className: TeamStage_module_css_default.paneTitle,
									children: [
										panel === "feed" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconTeamMailbox16, { size: 13 }),
										panel === "workspace" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconTeamWorkspace16, { size: 13 }),
										panel === "tasks" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconTeamTask16, { size: 13 }),
										titleOf(panel),
										panel === "workspace" && boardAt !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: TeamStage_module_css_default.paneNote,
											title: t("stage.boardStale"),
											children: t("stage.boardAt", { time: clock(boardAt) })
										})
									]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: TeamStage_module_css_default.drawerClose,
									onClick: () => {
										setPanel(void 0);
									},
									"aria-label": t("drawer.close"),
									children: "×"
								})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: TeamStage_module_css_default.drawerBody,
								children: [
									panel === "feed" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MessageFeed, {
										roster: roster.map((id, index) => ({
											id,
											name: names.get(id) ?? id,
											seat: index - 1,
											running: index === 0 ? leaderRunning : running.has(id),
											open: openOf(id)
										})),
										messages,
										names,
										seats,
										leaderLabel: t("member.leader"),
										focus,
										onFocus: setFocus,
										t
									}),
									panel === "workspace" && (board.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: TeamStage_module_css_default.empty,
										children: t("stage.noNotes")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: TeamStage_module_css_default.emptyHint,
										children: t("stage.noNotesHint")
									})] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: TeamStage_module_css_default.notes,
										children: board.map((entry, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(NoteCard, {
											entry,
											index,
											seats,
											focused: focus === entry.authorId,
											onFocus: setFocus
										}, entry.key))
									})),
									panel === "tasks" && (tasks.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: TeamStage_module_css_default.empty,
										children: t("stage.noTasks")
									}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: TeamStage_module_css_default.columns,
										children: COLUMNS.map((status) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TaskColumn, {
											status,
											tasks: tasks.filter((task) => task.status === status),
											names,
											seats,
											focus,
											onFocus: setFocus,
											t
										}, status))
									}))
								]
							})]
						})
					]
				})]
			});
		}
		/** One door on the dock: an icon, a count of what waits behind it, a pulse for news. */
		function DockButton(props) {
			const { id, label, count, active, fresh, onToggle, children } = props;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				className: TeamStage_module_css_default.dockButton,
				"aria-label": label,
				title: label,
				"aria-pressed": active,
				"data-panel-id": id,
				"data-fresh": fresh ? "true" : void 0,
				onClick: () => {
					onToggle(id);
				},
				children: [children, count > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: TeamStage_module_css_default.dockCount,
					children: count > 99 ? "99+" : count
				})]
			});
		}
		/**
		* The delivery in flight as an errand between two members. Absent when either
		* end is off the roster (a dismissed sender) or when nobody had to move.
		*/
		function errandOf(message, leaderId, homes) {
			if (message === void 0) return void 0;
			const fromId = message.from ?? leaderId;
			const toId = message.to ?? leaderId;
			const from = homes.get(fromId);
			const host = homes.get(toId);
			if (from === void 0 || host === void 0 || fromId === toId) return void 0;
			return {
				message,
				fromId,
				toId,
				host,
				meet: visitAt(host, from.x)
			};
		}
		/**
		* The back wall of the room, and everything hung on it.
		*
		* Every fixture is placed by the SAME floor coordinate a member would stand at
		* to look at it: `onWall` maps a place on the plan onto the wall's own width,
		* so the window somebody wanders over to is the window they end up under. The
		* wall itself is a face of the shell; this is only what is screwed to it.
		*/
		function RoomWall() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: TeamStage_module_css_default.wall,
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: TeamStage_module_css_default.calendar,
						"data-prop": "calendar",
						style: { left: `${onWall(4)}%` },
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.calendarHead }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.calendarGrid })]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: TeamStage_module_css_default.whiteboard,
						"data-prop": "whiteboard",
						style: { left: `${onWall(15.5)}%` },
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.boardGhost }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.boardInk }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: TeamStage_module_css_default.boardNote,
								"data-note": "a"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: TeamStage_module_css_default.boardNote,
								"data-note": "b"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.boardTray }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.boardTrayTop }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.boardPens }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.boardEraser })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: TeamStage_module_css_default.hanger,
						style: { left: `${onWall(26)}%` },
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.hangerBracket }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Plant, {
							kind: "pothos",
							className: TeamStage_module_css_default.hangerPlant
						})]
					}),
					[36.5, 65].map((where) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: TeamStage_module_css_default.window,
						"data-prop": "window",
						style: { left: `${onWall(where)}%` },
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: TeamStage_module_css_default.pane,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.sky }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: TeamStage_module_css_default.cloud,
										"data-cloud": "near"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: TeamStage_module_css_default.cloud,
										"data-cloud": "far"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.sea }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.sail })
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.reveal }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.mullion }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.sillTop }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.sill }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.beam })
						]
					}, where)),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: TeamStage_module_css_default.shelf,
						"data-prop": "shelf",
						style: { left: `${onWall(50)}%` },
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.books }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.bookLeaning }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.trophy }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Plant, {
								kind: "cactus",
								className: TeamStage_module_css_default.shelfPlant
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.plankTop }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.plank }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.plankBracket })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: TeamStage_module_css_default.clockProp,
						"data-prop": "clock",
						style: { left: `${onWall(79)}%` },
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.clockTicks }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: TeamStage_module_css_default.clockHand,
								"data-hand": "hour"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: TeamStage_module_css_default.clockHand,
								"data-hand": "minute"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: TeamStage_module_css_default.clockHand,
								"data-hand": "second"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.clockPin })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.airConditioner,
						"data-prop": "ac",
						style: { left: `${onWall(89.5)}%` },
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AirConditionerFigure, {})
					})
				]
			});
		}
		/**
		* One workstation: the desk, the computer on it, the keyboard and the mug. It
		* belongs to the member whose desk it is and stays furnished while its owner
		* is away — a member walks off, its screen keeps working. Memoized on a plan
		* that only changes when the facts do.
		*/
		const Workstation = (0, react.memo)(function Workstation(props) {
			const { id, desk, seat, pose, line, empty, t } = props;
			const screen = pose === "working" ? "working" : line !== void 0 ? "reading" : "off";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: TeamStage_module_css_default.desk,
				style: {
					...at(desk, desk.scale),
					...accentOf(seat)
				},
				"data-desk": id,
				"data-screen": screen,
				"data-empty": empty ? "true" : void 0,
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: TeamStage_module_css_default.deskTop,
						"data-prop": "desk",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.deskFlank }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.deskSurface }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.deskApron }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.deskGrain })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.deskLegs }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.deskModesty }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: TeamStage_module_css_default.monitor,
						"data-prop": "monitor",
						title: line,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: TeamStage_module_css_default.screen,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ScreenApp, { app: appOf(seat) }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: TeamStage_module_css_default.screenText,
										children: line ?? t("screen.working")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.glare })
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.neck }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.base })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.keyboard,
						"data-prop": "keyboard"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.mug,
						"data-prop": "mug"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.papers,
						"data-prop": "papers"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.deskPlant,
						"data-prop": "deskPlant",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Plant, { kind: plantOf(seat + 2) })
					})
				]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: TeamStage_module_css_default.chair,
				style: {
					...at(desk, desk.scale),
					...chairDelay(seat)
				},
				"data-chair": id,
				"data-prop": "chair",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ChairFigure, {})
			})] });
		});
		/**
		* One member of the team, standing — or walking — where its own state puts it.
		* Memoized: the room re-renders whenever the pointer moves, and only the tile
		* under the pointer (or the one it left) has actually changed.
		*/
		const MemberTile = (0, react.memo)(function MemberTile(props) {
			const { id, name, seat, home, errand, count, scale, relation, role, current, running, pose, away, focused, talking, turn, speech, tasks, label, title, onOpen, onFocus, t } = props;
			const obstacles = (0, react.useMemo)(() => obstaclesOf(Array.from({ length: count }, (_, index) => deskOf(index, count))), [count]);
			const loose = seat >= 0 && pose === "idle" && errand === void 0 && talking === void 0;
			const wander = useIdleErrand(seat, loose);
			const walk = useWalk(home, errand ?? (loose ? wander ?? home : home), obstacles, scale);
			const mask = maskOf(seat);
			const outfit = outfitOf(seat);
			const shoes = shoeOf(seat);
			const seated = !walk.walking && !away && talking === void 0 && wander === void 0;
			const facing = walk.walking ? walk.facing : turn ?? (seated ? "back" : "front");
			const relationLabel = relation === "lead" ? void 0 : relation === "peer" ? t("relation.peer") : t("relation.managed");
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				ref: walk.ref,
				className: TeamStage_module_css_default.person,
				style: {
					...accentOf(seat),
					...chairDelay(seat),
					...stagger(seat + 1)
				},
				onClick: () => {
					onOpen(id);
				},
				onMouseEnter: () => {
					onFocus(id);
				},
				onMouseLeave: () => {
					onFocus(void 0);
				},
				"aria-label": label,
				"aria-current": current,
				title,
				"data-member": id,
				"data-relation": relation,
				"data-species": mask,
				"data-pose": pose,
				"data-away": away ? "true" : void 0,
				"data-walk": walk.walking ? "true" : void 0,
				"data-facing": facing,
				"data-running": running ? "true" : void 0,
				"data-focus": focused ? "true" : void 0,
				"data-talking": talking,
				children: [
					speech !== void 0 && !walk.walking && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.speech,
						"data-speech": id,
						children: speech
					}),
					talking === "to" && !walk.walking && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.listening,
						"aria-hidden": true,
						children: "···"
					}),
					pose === "idle" && !away && talking === void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.doze,
						"aria-hidden": true,
						children: "zZ"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: TeamStage_module_css_default.body,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Crew, {
								kind: mask,
								back: facing === "back" || facing === "away",
								outfit,
								shoes,
								hair: hairOf(seat),
								gear: gearOf(seat),
								tone: toneOf(seat),
								skin: skinOf(seat),
								className: TeamStage_module_css_default.figure
							}),
							relation === "lead" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: TeamStage_module_css_default.crown,
								"aria-hidden": true,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconTeamLeader16, { size: 12 })
							}),
							tasks > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: TeamStage_module_css_default.load,
								children: tasks
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: TeamStage_module_css_default.plate,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: TeamStage_module_css_default.plateName,
							children: name
						}), (role !== void 0 || relationLabel !== void 0) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: TeamStage_module_css_default.plateMeta,
							children: meta(role, relationLabel)
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.state,
						title: t(running ? "status.running" : "status.idle"),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, {
							state: running ? "ongoing" : "done",
							size: 6
						})
					})
				]
			});
		});
		/**
		* The mailbox, as a log rather than a chat: a roster strip that keeps one
		* refreshed line per member — the newest thing it said or was told, truncated
		* so a long turn cannot push the room's cast off the pane — over the traffic
		* itself, newest last. Every member of the team writes on the same side; the
		* right-hand side belongs to the reader, and the reader does not post here.
		*/
		function MessageFeed(props) {
			const { roster, messages, names, seats, leaderLabel, focus, onFocus, t } = props;
			const scroller = (0, react.useRef)(null);
			const lastId = messages.length > 0 ? messages[messages.length - 1].messageId : void 0;
			const latestOf = (0, react.useMemo)(() => {
				const out = /* @__PURE__ */ new Map();
				for (let index = messages.length - 1; index >= 0; index -= 1) {
					const message = messages[index];
					if (message === void 0) continue;
					if (message.from !== void 0 && !out.has(message.from)) out.set(message.from, {
						text: message.text,
						way: "sent"
					});
					if (message.to !== void 0 && !out.has(message.to)) out.set(message.to, {
						text: message.text,
						way: "got"
					});
				}
				return out;
			}, [messages]);
			(0, react.useEffect)(() => {
				const node = scroller.current;
				if (node !== null) node.scrollTop = node.scrollHeight;
			}, [lastId]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: TeamStage_module_css_default.feed,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: TeamStage_module_css_default.crewList,
						"aria-label": t("feed.crew"),
						children: roster.map((row) => {
							const latest = latestOf.get(row.id);
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: TeamStage_module_css_default.crewRow,
								"data-crew-row": row.id,
								"data-focus": focus === row.id ? "true" : void 0,
								onMouseEnter: () => {
									onFocus(row.id);
								},
								onMouseLeave: () => {
									onFocus(void 0);
								},
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: TeamStage_module_css_default.cameoDot,
										"aria-hidden": true,
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Cameo, {
											seat: row.seat,
											name: row.name
										})
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: TeamStage_module_css_default.crewName,
										children: row.name
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: TeamStage_module_css_default.crewState,
										"data-state": row.running ? "running" : "idle",
										children: t(row.running ? "status.running" : "status.idle")
									}),
									row.open > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: TeamStage_module_css_default.crewOpen,
										children: t("feed.open", { count: row.open })
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: TeamStage_module_css_default.crewLine,
										title: latest?.text,
										children: latest === void 0 ? t("feed.quiet") : `${latest.way === "got" ? "←" : "→"} ${short(latest.text, CREW_CHARS)}`
									})
								]
							}, row.id);
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h4", {
						className: TeamStage_module_css_default.feedTitle,
						children: t("feed.log")
					}),
					messages.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: TeamStage_module_css_default.empty,
						children: t("stage.noMessages")
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: TeamStage_module_css_default.log,
						ref: scroller,
						children: messages.map((message, index) => {
							const partner = message.from ?? message.to;
							return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LogRow, {
								message,
								index,
								names,
								seats,
								leaderLabel,
								focused: partner !== void 0 && focus === partner,
								onFocus,
								t
							}, message.messageId);
						})
					})
				]
			});
		}
		/** One row of the log: who said what to whom, on one line, cut to fit. Memoized
		*  so a hover re-renders the row it lit and the row it unlit, nothing else. */
		const LogRow = (0, react.memo)(function LogRow(props) {
			const { message, index, names, seats, leaderLabel, focused, onFocus, t } = props;
			const label = (id) => id === void 0 ? leaderLabel : names.get(id) ?? id.slice(0, SHORT_ID);
			const partner = message.from ?? message.to;
			const author = label(message.from);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: TeamStage_module_css_default.logRow,
				"data-message-kind": message.kind,
				"data-hop": message.hop === void 0 ? void 0 : String(message.hop),
				"data-focus": focused ? "true" : void 0,
				style: stagger(index),
				onMouseEnter: () => {
					onFocus(partner);
				},
				onMouseLeave: () => {
					onFocus(void 0);
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.logAvatar,
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Cameo, {
							seat: message.from === void 0 ? -1 : seats.get(message.from),
							name: author
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: TeamStage_module_css_default.logBody,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: TeamStage_module_css_default.logHead,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TeamStage_module_css_default.logAuthor,
									children: author
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TeamStage_module_css_default.logArrow,
									children: "→"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TeamStage_module_css_default.logTo,
									children: label(message.to)
								}),
								message.kind !== "message" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TeamStage_module_css_default.logKind,
									children: message.kind === "report" ? t("message.report") : t("message.settled")
								}),
								message.hop !== void 0 && message.hop > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TeamStage_module_css_default.logHop,
									title: t("message.hopHint"),
									children: t("message.hop", { hop: message.hop })
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TeamStage_module_css_default.logTime,
									children: clock(message.time)
								})
							]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: TeamStage_module_css_default.logText,
							title: message.text,
							children: short(message.text, LOG_CHARS)
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.logTail,
						"aria-hidden": true,
						children: message.from === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconTeamSend16, { size: 12 }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconTeamMessage16, { size: 12 })
					})
				]
			});
		});
		/** One note pinned to the shared workspace, as the leader last saw it. Memoized
		*  like the log rows: a hover re-renders only the note it lit. */
		const NoteCard = (0, react.memo)(function NoteCard(props) {
			const { entry, index, seats, focused, onFocus } = props;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: TeamStage_module_css_default.note,
				"data-note-key": entry.key,
				"data-focus": focused ? "true" : void 0,
				style: stagger(index),
				onMouseEnter: () => {
					onFocus(entry.authorId);
				},
				onMouseLeave: () => {
					onFocus(void 0);
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.noteKey,
						title: entry.key,
						children: entry.key
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.notePreview,
						title: entry.preview,
						children: entry.preview
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: TeamStage_module_css_default.noteFoot,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: TeamStage_module_css_default.noteAuthor,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: TeamStage_module_css_default.cameoDot,
								"aria-hidden": true,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Cameo, {
									seat: seats.get(entry.authorId),
									name: entry.authorName
								})
							}), entry.authorName]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: TeamStage_module_css_default.noteTime,
							children: clock(entry.updatedAt)
						})]
					})
				]
			});
		});
		/** One lane of the shared task board. */
		function TaskColumn(props) {
			const { status, tasks, names, seats, focus, onFocus, t } = props;
			const title = status === "done" ? t("task.done") : status === "active" ? t("task.active") : t("task.pending");
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: TeamStage_module_css_default.column,
				"data-column": status,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("h4", {
					className: TeamStage_module_css_default.columnTitle,
					children: [title, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.columnCount,
						children: tasks.length
					})]
				}), tasks.map((task, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: TeamStage_module_css_default.card,
					"data-task-status": task.status,
					"data-focus": task.assigneeId !== void 0 && focus === task.assigneeId ? "true" : void 0,
					style: stagger(index),
					onMouseEnter: () => {
						onFocus(task.assigneeId);
					},
					onMouseLeave: () => {
						onFocus(void 0);
					},
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: TeamStage_module_css_default.cardTitle,
						title: task.title,
						children: task.title
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: TeamStage_module_css_default.cardFoot,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: TeamStage_module_css_default.cardWho,
							children: [task.assigneeId !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: TeamStage_module_css_default.cameoDot,
								"aria-hidden": true,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Cameo, {
									seat: seats.get(task.assigneeId),
									name: names.get(task.assigneeId) ?? task.assigneeId
								})
							}), task.assigneeId === void 0 ? t("task.unassigned") : names.get(task.assigneeId) ?? task.assigneeId.slice(0, SHORT_ID)]
						}), task.note !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: TeamStage_module_css_default.cardNote,
							title: task.note,
							children: task.note
						})]
					})]
				}, task.taskId))]
			});
		}
		//#endregion
		//#region src/client/composer.tsx
		/**
		* The composer seat, while the team room is on screen.
		*
		* A conversation view tab cannot reach the composer on its own — the composer
		* chain's selectors never see which view is active — so the plugin body puts
		* this entry on the chain for exactly as long as a stage is mounted. Winning
		* the election hides the whole composer stack (the card, its docks and the
		* stats line) without touching one node of the host tree, and the marker
		* attribute hands the freed height to the view: the room gets the tab, and the
		* reader gets its input back the moment it opens another tab.
		*/
		/** The empty composer: a zero-height marker where the input card would be. */
		function ComposerAway() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: TeamStage_module_css_default.composerAway,
				"data-conversation-composer-overlay": true,
				"aria-hidden": true
			});
		}
		//#endregion
		//#region src/client/model-badge.tsx
		function TeammateModelBadge({ sessionId, store, sessions }) {
			const [open, setOpen] = (0, react.useState)(false);
			const teamState = (0, react.useSyncExternalStore)(store.subscribe, store.getSnapshot);
			const listState = (0, react.useSyncExternalStore)(sessions.list.subscribe, sessions.list.getSnapshot);
			const currentId = sessionId ?? listState.current;
			if (!currentId) return null;
			const summary = listState.byId[currentId];
			if (!(summary?.origin === "subagent" || sessions.subagentAddress(currentId) !== void 0)) return null;
			let member = teamState.members.find((m) => m.memberId === currentId || summary?.displayTitle && summary.displayTitle.includes(m.name));
			if (!member && summary?.parentId) {
				const parentBinding = sessions.binding(summary.parentId);
				if (parentBinding) {
					const parentTeam = parentBinding.session.projections.faceOf("team")?.getSnapshot();
					if (parentTeam) member = parentTeam.members.find((m) => m.memberId === currentId || summary?.displayTitle && summary.displayTitle.includes(m.name));
				}
			}
			const title = summary?.displayTitle ?? "";
			let fallbackName = title;
			let fallbackModel = "";
			let fallbackProvider = "";
			if (!member) {
				if (/grok/i.test(title)) {
					fallbackName = "Grok";
					fallbackModel = "grok-4.6";
					fallbackProvider = "grok";
				} else if (/glm/i.test(title)) {
					fallbackName = "GLM";
					fallbackModel = "glm-5.3-flash";
					fallbackProvider = "opencode-go";
				} else if (/gemini/i.test(title)) {
					fallbackName = "Gemini";
					fallbackModel = "gemini-3.8-flash";
					fallbackProvider = "antigravity";
				} else if (/codex|gpt|luna/i.test(title)) {
					fallbackName = "Codex";
					fallbackModel = "gpt-5.6-luna";
					fallbackProvider = "codex";
				}
			}
			const name = member?.name ?? fallbackName;
			const provider = member?.provider ?? (fallbackProvider || "inherited");
			const model = member?.model ?? (fallbackModel || "default");
			const effort = member?.effort;
			const label = `${model}${effort ? ` · ${effort}` : ""}`;
			const items = [
				{
					type: "label",
					id: "header-label",
					text: "子智能体模型配置（已锁定）"
				},
				{
					id: "member-info",
					label: `成员：${name}`,
					disabled: true
				},
				{
					id: "provider-info",
					label: `提供方：${provider}`,
					disabled: true
				},
				{
					id: "model-info",
					label: `模型：${model}`,
					disabled: true
				},
				...effort ? [{
					id: "effort-info",
					label: `推理等级：${effort}`,
					disabled: true
				}] : [],
				{
					type: "separator",
					id: "sep"
				},
				{
					id: "hint-info",
					label: "模型在派生时已固定，切换需解散重建",
					disabled: true
				}
			];
			const anchor = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen((prev) => !prev),
				"aria-label": `子智能体模型: ${label}`,
				style: {
					display: "inline-flex",
					alignItems: "center",
					gap: "5px",
					padding: "2px 8px",
					borderRadius: "12px",
					backgroundColor: open ? "var(--dsw-alias-interactive-bg-active, rgba(125, 125, 125, 0.2))" : "var(--dsw-alias-interactive-bg-hover, rgba(125, 125, 125, 0.12))",
					border: "1px solid var(--dsw-alias-border-l2, rgba(125, 125, 125, 0.25))",
					color: "var(--dsw-alias-label-secondary, #888)",
					fontSize: "12px",
					lineHeight: "18px",
					fontFamily: "inherit",
					cursor: "pointer",
					userSelect: "none",
					marginRight: "8px",
					outline: "none"
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
						width: "12",
						height: "12",
						viewBox: "0 0 16 16",
						fill: "currentColor",
						style: {
							opacity: .7,
							flexShrink: 0
						},
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M4 6V4a4 4 0 1 1 8 0v2h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2zm2 0h4V4a2 2 0 1 0-4 0v2z" })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						style: {
							fontWeight: 500,
							color: "var(--dsw-alias-label-primary, inherit)"
						},
						children: label
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						style: {
							fontSize: "10px",
							opacity: .7,
							padding: "0 3px",
							borderRadius: "3px",
							border: "1px solid currentColor",
							lineHeight: "12px"
						},
						children: "锁定"
					})
				]
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Menu, {
				open,
				anchor,
				items,
				onSelect: () => {},
				onClose: () => setOpen(false),
				side: "top",
				align: "end",
				portal: true,
				compact: true
			});
		}
		//#endregion
		//#region src/client/locales.ts
		/** Locale copy for the agent-team stage view. Product copy is Chinese. */
		const NS = "team";
		const zh = {
			"view.title": "Agent 团队",
			"stage.title": "团队协作室",
			"stage.room": "协作室",
			"stage.feed": "消息流",
			"stage.board": "任务板",
			"stage.workspace": "共享工作区",
			"stage.members": "{count} 名成员",
			"stage.running": "{count} 名工作中",
			"stage.idle": "全部空闲",
			"stage.tasks": "{open}/{total} 项任务",
			"stage.noTeam": "这个会话还没有组建团队",
			"stage.noTeamHint": "让主会话调用 team_spawn 派生第一名队友。",
			"stage.noMessages": "还没有消息往来",
			"stage.noTasks": "还没有任务",
			"stage.noNotes": "共享工作区还是空的",
			"stage.noNotesHint": "成员用 team_note 把结论写在这里，不必互相发消息。",
			"stage.boardAt": "{time} 的快照",
			"stage.boardStale": "队友的写入直接进持久工作区，不经过主会话的日志——这里是主会话最后一次读写时的样子",
			"stage.peerRing": "同级成员可以直接走过去找对方；受管成员只找主会话",
			"stage.roomHint": "每个成员都有自己的工位；要说话就走过去说",
			"stage.dock": "协作面板",
			"drawer.close": "收起面板",
			"feed.crew": "成员状态",
			"feed.log": "往来记录",
			"feed.open": "在手 {count}",
			"feed.quiet": "还没有往来",
			"screen.working": "工作中…",
			"member.leader": "主会话",
			"member.open": "打开 {name} 的会话",
			"member.openLeader": "回到主会话",
			"relation.managed": "受管",
			"relation.peer": "同级",
			"status.running": "工作中",
			"status.idle": "空闲",
			"task.pending": "待办",
			"task.active": "进行中",
			"task.done": "已完成",
			"task.unassigned": "未指派",
			"message.report": "汇报",
			"message.settled": "已收工",
			"message.hop": "第 {hop} 跳",
			"message.hopHint": "这条消息在一次队友间对话里的转发深度；深度用完只能回到主会话"
		};
		const en = {
			"view.title": "Agent team",
			"stage.title": "Team room",
			"stage.room": "Team room",
			"stage.feed": "Mailbox",
			"stage.board": "Task board",
			"stage.workspace": "Shared workspace",
			"stage.members": "{count} members",
			"stage.running": "{count} working",
			"stage.idle": "All idle",
			"stage.tasks": "{open}/{total} tasks",
			"stage.noTeam": "This session has no team yet",
			"stage.noTeamHint": "Ask the main session to call team_spawn for the first teammate.",
			"stage.noMessages": "No messages yet",
			"stage.noTasks": "No tasks yet",
			"stage.noNotes": "The shared workspace is empty",
			"stage.noNotesHint": "Members write conclusions here with team_note instead of messaging them around.",
			"stage.boardAt": "as of {time}",
			"stage.boardStale": "Teammates write straight to the durable workspace, which no session log records — this is how it looked when the main session last read or wrote it",
			"stage.peerRing": "Peers may walk straight over to each other; managed members only reach the main session",
			"stage.roomHint": "Everyone keeps a desk of their own and walks over to say something",
			"stage.dock": "Panels",
			"drawer.close": "Close the panel",
			"feed.crew": "Who is doing what",
			"feed.log": "Traffic",
			"feed.open": "{count} open",
			"feed.quiet": "Nothing said yet",
			"screen.working": "working…",
			"member.leader": "Main session",
			"member.open": "Open the session of {name}",
			"member.openLeader": "Back to the main session",
			"relation.managed": "Managed",
			"relation.peer": "Peer",
			"status.running": "Working",
			"status.idle": "Idle",
			"task.pending": "To do",
			"task.active": "In progress",
			"task.done": "Done",
			"task.unassigned": "Unassigned",
			"message.report": "report",
			"message.settled": "finished",
			"message.hop": "hop {hop}",
			"message.hopHint": "How far this delivery relayed inside one teammate conversation; a spent budget leaves only the leader"
		};
		//#endregion
		//#region src/client/index.ts
		/**
		* Browser half of dsh-team: follow the current session's `team` projection and
		* contribute the team stage as one conversation view tab.
		*
		* There is no client-side fold. The host computes the team value once and the
		* framework pushes it here (history tail baseline + `session/projection`
		* frames), so this module only tracks WHICH session's value is on screen — and
		* whether that session has a team at all, because the tab exists exactly while
		* it does: an ordinary conversation never grows a view it cannot fill.
		*/
		/** Required services: the slot registry, the session domain, and locale. */
		const inject = [
			"slots",
			"sessions",
			"locale"
		];
		/** No session in view, or a session with no team. */
		const EMPTY = {
			members: [],
			tasks: [],
			messages: [],
			board: []
		};
		/** View-ring position: after the shipped chat and trajectory tabs. */
		const VIEW_ORDER = 20;
		/**
		* Chain position of the empty composer: tried after everything else, so a
		* pending approval — or any other takeover — keeps the seat and the blocked
		* agent can still be answered from this tab.
		*/
		const COMPOSER_LAST = 100;
		/** Project one session's folded team value into the stage state. */
		function panelState(leaderId, currentId, team) {
			return {
				leaderId,
				currentId,
				members: team.members,
				tasks: team.tasks,
				messages: team.messages,
				board: team.board,
				...team.boardAt !== void 0 ? { boardAt: team.boardAt } : {}
			};
		}
		/** Whether the state on screen names a team worth a tab of its own. */
		function present(state) {
			return state.leaderId !== void 0 && state.members.length > 0;
		}
		/**
		* Register the locale dictionary and the view tab, and keep the stage store
		* pointed at the right session.
		* @param ctx - client root context.
		*/
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "dsh-team: dictionaries");
			const t = ctx.locale.bind(NS);
			const sessions = ctx.sessions;
			const store = (0, _deepseek_ai_dsh_client_runtime_client.createSnapshotStore)(EMPTY);
			let followed;
			let disposeFace = null;
			/**
			* The leader's own projection, watched while somebody else's transcript is
			* the one on screen. Reading a teammate attaches the follower to a session
			* that folds no team of its own, so without this the room would freeze at the
			* last value it saw — and would go on drawing a team that had already been
			* disbanded. Watching the leader keeps the room live, and lets it close.
			*/
			let disposeLeader = null;
			const dropLeader = () => {
				disposeLeader?.();
				disposeLeader = null;
			};
			/** No team on screen: the room, and the tab it lives in, both go. */
			const clear = () => {
				dropLeader();
				store.set(EMPTY);
			};
			/**
			* Follow the leader of the team on screen while its own transcript is not.
			* @param leaderId - the session whose log owns the team.
			* @param current - the session being read, kept as the "you are here" marker.
			*/
			const watchLeader = (leaderId, current) => {
				dropLeader();
				const binding = sessions.binding(leaderId);
				if (binding === void 0) return;
				const face = binding.session.projections.faceOf("team");
				const pull = () => {
					const team = face.getSnapshot();
					if (team === void 0 || team.members.length === 0) {
						clear();
						return;
					}
					store.set(panelState(leaderId, current, team));
				};
				disposeLeader = face.subscribe(pull);
				pull();
			};
			/**
			* The session in view folds no team of its own. While it belongs to the team
			* already on screen, keep showing that team and just move the "you are here"
			* marker — navigating into a member must not make the stage vanish under the
			* cursor — and follow the leader from there, so the room closes with the team.
			*/
			const holdOrClear = (current) => {
				const held = store.getSnapshot();
				if (held.leaderId === void 0 || !held.members.some((member) => member.memberId === current)) {
					clear();
					return;
				}
				store.set({
					...held,
					currentId: current
				});
				watchLeader(held.leaderId, current);
			};
			const follow = () => {
				const current = sessions.list.getSnapshot().current;
				if (current === followed && (current === void 0 || disposeFace !== null)) return;
				followed = current;
				disposeFace?.();
				disposeFace = null;
				if (current === void 0) {
					clear();
					return;
				}
				const binding = sessions.binding(current);
				if (binding === void 0) {
					holdOrClear(current);
					return;
				}
				const face = binding.session.projections.faceOf("team");
				const pull = () => {
					const team = face.getSnapshot();
					if (team !== void 0 && team.members.length > 0) {
						dropLeader();
						store.set(panelState(current, current, team));
						return;
					}
					holdOrClear(current);
				};
				pull();
				disposeFace = face.subscribe(pull);
			};
			follow();
			const disposeList = sessions.list.subscribe(follow);
			ctx.effect(() => () => {
				disposeList();
				disposeFace?.();
				disposeFace = null;
				dropLeader();
				followed = void 0;
				store.set(EMPTY);
			}, "dsh-team: session follower");
			/** Open one teammate transcript through its durable direct-parent address. */
			const openMember = (leaderId, memberId) => {
				const address = sessions.subagentAddress(memberId) ?? {
					parentSessionId: leaderId,
					childSessionId: memberId,
					mode: "continuable"
				};
				try {
					sessions.openSubagent(address);
				} catch {
					sessions.refreshSubagents(leaderId).then(() => {
						try {
							sessions.openSubagent(address);
						} catch {}
					}, () => {});
				}
			};
			/**
			* How many stages are on screen. A view tab renders once, but the seat is
			* keyed on the count: a re-mount that overlaps its own teardown must not
			* hand the composer back under a live room.
			*/
			const rooms = (0, _deepseek_ai_dsh_client_runtime_client.createSnapshotStore)(0);
			/** Take the composer seat for one mounted stage; the disposer gives it back. */
			const holdComposer = () => {
				rooms.set(rooms.getSnapshot() + 1);
				let held = true;
				return () => {
					if (!held) return;
					held = false;
					rooms.set(Math.max(0, rooms.getSnapshot() - 1));
				};
			};
			const injectFace = () => ({
				hooks: { team: store },
				openMember,
				openLeader: (leaderId) => {
					sessions.open(leaderId);
				},
				holdComposer
			});
			/**
			* The composer chain entry that empties the composer seat while a room is on
			* screen. Registering and withdrawing it is what re-runs the election — the
			* selector itself cannot see the active view — so the seat follows the tab
			* without the stage ever touching a node it does not own.
			*/
			ctx.slots.inject("conversation.composer", () => {
				let disposeSeat = null;
				const sync = () => {
					const wanted = rooms.getSnapshot() > 0;
					if (wanted === (disposeSeat !== null)) return;
					if (!wanted) {
						disposeSeat?.();
						disposeSeat = null;
						return;
					}
					disposeSeat = ctx.slots.register({
						name: "conversation.composer",
						priority: COMPOSER_LAST,
						select: () => ({})
					}, ComposerAway);
				};
				sync();
				const disposeStore = rooms.subscribe(sync);
				return () => {
					disposeStore();
					disposeSeat?.();
					disposeSeat = null;
				};
			});
			/**
			* The tab follows the team, not the plugin: it is registered while a team is
			* on screen and withdrawn when the team ends, so the view ring shows an
			* agent-team tab exactly in the sessions that have one. An unknown active
			* view id falls back to chat, so withdrawing the tab under the reader is safe.
			*/
			ctx.slots.inject("conversation.view", () => {
				let disposeTab = null;
				const sync = () => {
					const wanted = present(store.getSnapshot());
					if (wanted === (disposeTab !== null)) return;
					if (!wanted) {
						disposeTab?.();
						disposeTab = null;
						return;
					}
					disposeTab = ctx.slots.register({
						name: "conversation.view",
						id: "agent-team",
						order: VIEW_ORDER,
						locale: NS,
						label: () => t("view.title"),
						inject: injectFace
					}, TeamStage);
				};
				sync();
				const disposeStore = store.subscribe(sync);
				return () => {
					disposeStore();
					disposeTab?.();
					disposeTab = null;
				};
			});
			/**
			* Teammate Model Badge: displays the fixed model and reasoning effort of
			* this teammate in the bottom-right of the input card (before the Send button).
			*/
			ctx.slots.inject("conversation.input.right", () => {
				return ctx.slots.register({
					name: "conversation.input.right",
					id: "teammate-model-badge",
					order: 10
				}, (props) => {
					const activeId = props.sessionId ?? props.session?.sessionId;
					return (0, react.createElement)(TeammateModelBadge, {
						...activeId !== void 0 ? { sessionId: activeId } : {},
						store,
						sessions
					});
				});
			});
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map