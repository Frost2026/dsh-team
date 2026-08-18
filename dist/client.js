window.__ModuleLoader__.load({
	id: "dsh-team",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let _deepseek_ai_dsh_client_runtime_client = require("@deepseek-ai/dsh-client-runtime/client");
		let react = require("react");
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
		const LOUNGE = {
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
		* fourth member shares the first.
		* @param index - the member's index among those on a break.
		* @returns the place it stands.
		*/
		function breakAt(index) {
			const spots = [
				{
					x: LOUNGE.x + 8,
					y: LOUNGE.y + 29
				},
				{
					x: LOUNGE.x + 20,
					y: LOUNGE.y + 34
				},
				{
					x: LOUNGE.x + 14,
					y: LOUNGE.y + 23
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
				x: LOUNGE.x + 2.3,
				y: LOUNGE.y + 1,
				w: 14.5,
				h: 7
			}),
			(
			/** The low table in front of it. */
			{
				x: LOUNGE.x + 4.9,
				y: LOUNGE.y + 11,
				w: 10,
				h: 4.5
			}),
			(
			/** The plant, in the far corner. */
			{
				x: LOUNGE.x + 21,
				y: LOUNGE.y + 2,
				w: 6,
				h: 6
			}),
			(
			/** The water cooler, against the right wall. */
			{
				x: LOUNGE.x + 22,
				y: LOUNGE.y + 12,
				w: 6,
				h: 6.5
			}),
			(
			/** The filing cabinet and printer, along the left wall of the room. */
			{
				x: .5,
				y: 24,
				w: 6,
				h: 7
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
			const clear = (a, b) => !blocks.some((rect) => crossesRect(a, b, rect));
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
				for (const [index, cost] of best.entries()) if (!done[index] && cost < (at < 0 ? Infinity : best[at])) at = index;
				if (at < 0 || at === goal) break;
				done[at] = true;
				const here = nodes[at];
				for (const [index, node] of nodes.entries()) {
					if (done[index] || index === at || !clear(here, node)) continue;
					const cost = best[at] + span(here, node);
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
			scale.current = base;
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
				place(at.current);
			}, [place, base]);
			(0, react.useEffect)(() => {
				const start = at.current;
				if (Math.abs(start.x - target.x) < NEAR && Math.abs(start.y - target.y) < NEAR) return void 0;
				if (still()) {
					at.current = {
						x: target.x,
						y: target.y
					};
					place(at.current);
					setPose({
						facing: "front",
						walking: false
					});
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
					return;
				}
				/** Distance along the path at which each corner is reached. */
				const marks = [0];
				for (let index = 1; index < path.length; index += 1) marks.push(marks[index - 1] + Math.hypot(path[index].x - path[index - 1].x, path[index].y - path[index - 1].y));
				const span = walkMs(total);
				const began = now();
				const from = gait.current;
				let frame = 0;
				const tick = () => {
					const through = Math.min(1, (now() - began) / span);
					const covered = ease(through) * total;
					let leg = 1;
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
				place
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
		//#region \0dsh-css:/home/huxint/projects/dsh-team/src/client/TeamStage.module.css.mjs
		const css = ".nesYQG_stage,.nesYQG_stage *,.nesYQG_stage :before,.nesYQG_stage :after{box-sizing:border-box}.nesYQG_stage{--team-page:var(--dsw-alias-bg-base);--team-ink:var(--dsw-alias-label-primary);--team-surface-1:color-mix(in srgb, var(--team-ink) 4%, var(--team-page));--team-surface-2:color-mix(in srgb, var(--team-ink) 9%, var(--team-page));--team-surface-3:color-mix(in srgb, var(--team-ink) 16%, var(--team-page));--team-hue:var(--dsw-alias-state-business-primary);--team-warm:var(--dsw-alias-state-warn-primary);--team-leaf:var(--dsw-alias-state-success-primary);flex-direction:column;gap:8px;height:100%;min-height:0;padding:10px 14px 12px;animation:.26s cubic-bezier(.22,1,.36,1) both nesYQG_team-stage-in;display:flex;overflow:hidden;container-type:inline-size}.nesYQG_composerAway{pointer-events:none;height:0;display:block;overflow:hidden}.nesYQG_bar{flex:none;align-items:center;gap:10px;display:flex}.nesYQG_barTitle{color:var(--dsw-alias-label-primary);align-items:center;gap:7px;font-size:13px;font-weight:600;display:flex}.nesYQG_barIcon{color:var(--team-hue)}.nesYQG_barStats{align-items:center;gap:6px;margin-left:auto;display:flex}.nesYQG_stat{border:1px solid var(--dsw-alias-border-l2);font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-tertiary);white-space:nowrap;border-radius:999px;padding:1px 8px;font-size:11px}.nesYQG_statLive{color:var(--team-hue);border-color:var(--team-hue)}.nesYQG_barHint{white-space:nowrap;text-overflow:ellipsis;min-width:0;color:var(--dsw-alias-label-tertiary);align-items:center;gap:5px;font-size:10.5px;display:flex;overflow:hidden}.nesYQG_scene{flex:1;gap:10px;min-height:0;display:flex;position:relative}.nesYQG_roomPane{z-index:0;isolation:isolate;flex:1;min-width:0;min-height:0;position:relative}.nesYQG_dock{z-index:40;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-overlay);border-radius:999px;flex-direction:column;flex:none;align-self:flex-start;align-items:center;gap:8px;width:44px;padding:6px 0;display:flex;position:relative}.nesYQG_dockButton{width:34px;height:34px;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;border-radius:50%;place-items:center;padding:0;transition:background .16s,color .16s;display:grid;position:relative}.nesYQG_dockButton:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.nesYQG_dockButton[aria-pressed=true]{background:var(--dsw-alias-brand-primary);color:var(--dsw-alias-label-primary-inverted)}.nesYQG_dockCount{border:2px solid var(--dsw-alias-bg-overlay);background:var(--team-surface-3);min-width:15px;height:15px;color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums;border-radius:8px;place-items:center;padding:0 4px;font-size:9px;font-weight:600;display:grid;position:absolute;top:-3px;right:-4px}.nesYQG_dockButton[data-fresh=true]{color:var(--team-hue)}.nesYQG_dockButton[data-fresh=true]:after{content:\"\";border:1.5px solid var(--team-hue);pointer-events:none;border-radius:50%;animation:2.2s cubic-bezier(.22,1,.36,1) infinite nesYQG_team-halo;position:absolute;inset:0}.nesYQG_drawer{z-index:50;border:1px solid var(--dsw-alias-border-l2);background:color-mix(in srgb, var(--dsw-alias-bg-overlay) 88%, transparent);backdrop-filter:blur(10px);width:min(408px,78cqw);box-shadow:-12px 10px 34px var(--dsw-alias-bg-mask-1);border-radius:14px;flex-direction:column;animation:.22s cubic-bezier(.22,1,.36,1) both nesYQG_team-drawer-in;display:flex;position:absolute;top:0;bottom:0;right:54px;overflow:hidden}.nesYQG_drawerHead{border-bottom:1px solid var(--dsw-alias-border-l1);flex:none;align-items:center;gap:6px;padding:10px 12px 8px;display:flex}.nesYQG_drawerHead .nesYQG_paneTitle{flex:1;min-width:0;margin:0}.nesYQG_drawerClose{width:24px;height:24px;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:none;border-radius:50%;flex:none;place-items:center;padding:0;font-size:15px;line-height:1;display:grid}.nesYQG_drawerClose:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.nesYQG_drawerBody{overscroll-behavior:contain;flex-direction:column;flex:1;min-height:0;padding:10px 12px 12px;display:flex;overflow-y:auto}.nesYQG_drawer[data-panel=feed] .nesYQG_drawerBody{overflow:hidden}.nesYQG_paneTitle{letter-spacing:.06em;text-transform:uppercase;color:var(--dsw-alias-label-tertiary);flex:none;align-items:center;gap:6px;margin:0 0 8px;font-size:10.5px;font-weight:600;display:flex}.nesYQG_empty{color:var(--dsw-alias-label-tertiary);margin:2px 0;font-size:12px}.nesYQG_blankTitle{text-align:center;color:var(--dsw-alias-label-secondary);margin:40px 0 4px;font-size:13px}.nesYQG_blankHint{text-align:center;color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px}.nesYQG_floor{border:1px solid var(--dsw-alias-border-l2);background:var(--team-page);border-radius:14px;width:100%;height:100%;min-height:300px;position:relative;overflow:hidden;container-type:size}.nesYQG_shell{z-index:0;pointer-events:none;position:absolute;inset:0}.nesYQG_shell>*{content:\"\";position:absolute;inset:0}.nesYQG_ceiling{clip-path:polygon(0 0, 100% 0, calc(100% - var(--team-far-inset)) var(--team-wall-top), var(--team-far-inset) var(--team-wall-top));background:linear-gradient(180deg, color-mix(in srgb, var(--team-ink) 13%, var(--team-page)) 0, color-mix(in srgb, var(--team-ink) 5%, var(--team-page)) 100%)}.nesYQG_wallBack{clip-path:polygon(var(--team-far-inset) var(--team-wall-top), calc(100% - var(--team-far-inset)) var(--team-wall-top), calc(100% - var(--team-far-inset)) var(--team-floor-top), var(--team-far-inset) var(--team-floor-top));background:linear-gradient(180deg, color-mix(in srgb, var(--team-hue) 11%, var(--team-page)) 0, color-mix(in srgb, var(--team-hue) 5%, var(--team-page)) 62%, color-mix(in srgb, var(--team-hue) 8%, var(--team-page)) 100%)}.nesYQG_wallLeft,.nesYQG_wallRight{background:color-mix(in srgb, var(--team-hue) 15%, var(--team-page))}.nesYQG_wallLeft{clip-path:polygon(0 0, var(--team-far-inset) var(--team-wall-top), var(--team-far-inset) var(--team-floor-top), 0 100%);background:linear-gradient(92deg, color-mix(in srgb, var(--team-ink) 17%, var(--team-page)) 0, color-mix(in srgb, var(--team-hue) 12%, var(--team-page)) 100%)}.nesYQG_wallRight{clip-path:polygon(100% 0, calc(100% - var(--team-far-inset)) var(--team-wall-top), calc(100% - var(--team-far-inset)) var(--team-floor-top), 100% 100%);background:linear-gradient(88deg, color-mix(in srgb, var(--team-hue) 12%, var(--team-page)) 0, color-mix(in srgb, var(--team-ink) 21%, var(--team-page)) 100%)}.nesYQG_floorPlane{clip-path:polygon(0 100%, 100% 100%, calc(100% - var(--team-far-inset)) var(--team-floor-top), var(--team-far-inset) var(--team-floor-top));background:radial-gradient(ellipse 26% 30% at 34% 62%, color-mix(in srgb, var(--team-warm) 22%, transparent) 0, transparent 70%), radial-gradient(ellipse 26% 30% at 66% 62%, color-mix(in srgb, var(--team-warm) 22%, transparent) 0, transparent 70%), linear-gradient(180deg, transparent 0 27.4%, color-mix(in srgb, var(--team-warm) 30%, transparent) 27.4% 27.6%, transparent 27.6% 32.2%, color-mix(in srgb, var(--team-warm) 30%, transparent) 32.2% 32.5%, transparent 32.5% 37.6%, color-mix(in srgb, var(--team-warm) 30%, transparent) 37.6% 37.9%, transparent 37.9% 43.5%, color-mix(in srgb, var(--team-warm) 30%, transparent) 43.5% 43.9%, transparent 43.9% 50.2%, color-mix(in srgb, var(--team-warm) 30%, transparent) 50.2% 50.6%, transparent 50.6% 57.7%, color-mix(in srgb, var(--team-warm) 30%, transparent) 57.7% 58.2%, transparent 58.2% 66.2%, color-mix(in srgb, var(--team-warm) 30%, transparent) 66.2% 66.8%, transparent 66.8% 75.8%, color-mix(in srgb, var(--team-warm) 30%, transparent) 75.8% 76.5%, transparent 76.5% 87%, color-mix(in srgb, var(--team-warm) 30%, transparent) 87% 87.8%, transparent 87.8% 100%), linear-gradient(180deg, color-mix(in srgb, var(--team-warm) 13%, var(--team-page)) 0, color-mix(in srgb, var(--team-warm) 19%, var(--team-page)) 100%)}.nesYQG_skirting{clip-path:polygon(var(--team-far-inset) var(--team-floor-top), calc(100% - var(--team-far-inset)) var(--team-floor-top), calc(100% - var(--team-far-inset)) calc(var(--team-floor-top) + 1.5%), var(--team-far-inset) calc(var(--team-floor-top) + 1.5%));background:linear-gradient(180deg, color-mix(in srgb, var(--team-page) 44%, var(--team-ink)) 0 22%, color-mix(in srgb, var(--team-ink) 26%, var(--team-page)) 22% 100%)}.nesYQG_wallLeft:after,.nesYQG_wallRight:after{content:\"\";background:color-mix(in srgb, var(--team-ink) 24%, var(--team-page));position:absolute;inset:0}.nesYQG_wallLeft:after{clip-path:polygon(0 100%, var(--team-far-inset) var(--team-floor-top), var(--team-far-inset) calc(var(--team-floor-top) + 1.5%), 0 calc(100% + 1.5%))}.nesYQG_wallRight:after{clip-path:polygon(100% 100%, calc(100% - var(--team-far-inset)) var(--team-floor-top), calc(100% - var(--team-far-inset)) calc(var(--team-floor-top) + 1.5%), 100% calc(100% + 1.5%))}.nesYQG_wall{--team-unit:clamp(72px, 24cqh, 182px);inset:var(--team-wall-top) var(--team-far-inset) calc(100% - var(--team-floor-top)) var(--team-far-inset);z-index:1;pointer-events:none;position:absolute}.nesYQG_wall>*{position:absolute;transform:translate(-50%)}.nesYQG_window{width:calc(var(--team-unit) * .5);height:60%;top:14%}.nesYQG_pane{box-shadow:inset 0 0 0 2px color-mix(in srgb, var(--team-ink) 30%, var(--team-page)), inset 0 -4px 8px color-mix(in srgb, var(--team-hue) 34%, transparent);border-radius:2px;position:absolute;inset:0;overflow:hidden}.nesYQG_sky{background:linear-gradient(180deg, color-mix(in srgb, var(--team-hue) 16%, var(--team-page)) 0, color-mix(in srgb, var(--team-hue) 30%, var(--team-page)) 100%);position:absolute;inset:0}.nesYQG_cloud{background:color-mix(in srgb, var(--team-page) 74%, transparent);border-radius:50%;animation:42s linear infinite nesYQG_team-drift;position:absolute}.nesYQG_cloud[data-cloud=near]{width:46%;height:16%;box-shadow:26% -60% 0 -4% color-mix(in srgb, var(--team-page) 74%, transparent), 62% -20% 0 -2% color-mix(in srgb, var(--team-page) 74%, transparent);top:14%;left:-40%}.nesYQG_cloud[data-cloud=far]{opacity:.62;width:30%;height:9%;animation-duration:71s;animation-delay:-24s;top:32%;left:-30%}.nesYQG_sea{background:repeating-linear-gradient(180deg, color-mix(in srgb, var(--team-page) 22%, transparent) 0 1px, transparent 1px 7px), linear-gradient(180deg, color-mix(in srgb, var(--team-hue) 52%, var(--team-page)) 0, color-mix(in srgb, var(--team-hue) 74%, var(--team-page)) 100%);position:absolute;inset:52% 0 0}.nesYQG_sail{background:color-mix(in srgb, var(--team-page) 88%, transparent);clip-path:polygon(50% 0,100% 82%,0 82%);width:9%;height:9%;animation:96s linear infinite nesYQG_team-sail;position:absolute;top:47%;left:24%}.nesYQG_reveal{z-index:-1;background:linear-gradient(100deg, color-mix(in srgb, var(--team-ink) 20%, var(--team-page)) 0 46%, color-mix(in srgb, var(--team-ink) 9%, var(--team-page)) 46% 100%);box-shadow:inset 0 3px 5px color-mix(in srgb, var(--team-ink) 22%, transparent);border-radius:3px;position:absolute;inset:-6% -7%}.nesYQG_mullion{background:linear-gradient(90deg, color-mix(in srgb, var(--team-ink) 28%, var(--team-page)) 0 60%, color-mix(in srgb, var(--team-page) 60%, var(--team-ink)) 60% 100%) no-repeat 50% 0 / 2.5px 100%, linear-gradient(180deg, color-mix(in srgb, var(--team-ink) 28%, var(--team-page)) 0 60%, color-mix(in srgb, var(--team-page) 60%, var(--team-ink)) 60% 100%) no-repeat 0 46% / 100% 2.5px;position:absolute;inset:0}.nesYQG_sillTop{background:color-mix(in srgb, var(--team-page) 62%, var(--team-surface-3));clip-path:polygon(4% 0,100% 0,96% 100%,0 100%);height:5%;position:absolute;top:100%;left:-11%;right:-11%}.nesYQG_sill{background:linear-gradient(180deg, var(--team-surface-3) 0 40%, color-mix(in srgb, var(--team-ink) 18%, var(--team-page)) 40% 100%);clip-path:polygon(0 0,100% 0,96% 100%,4% 100%);border-radius:0 0 2px 2px;height:6%;position:absolute;top:105%;left:-11%;right:-11%}.nesYQG_beam{background:linear-gradient(180deg, color-mix(in srgb, var(--team-page) 34%, transparent) 0, transparent 100%);clip-path:polygon(30% 0,70% 0,100% 100%,0 100%);opacity:.5;width:160%;height:320%;position:absolute;top:100%;left:-30%}.nesYQG_whiteboard{width:calc(var(--team-unit) * .78);border:2px solid color-mix(in srgb, var(--team-ink) 18%, var(--team-page));background:linear-gradient(160deg, color-mix(in srgb, var(--team-page) 96%, var(--team-hue)) 0 58%, color-mix(in srgb, var(--team-page) 88%, var(--team-hue)) 58% 100%);height:58%;box-shadow:0 3px 6px var(--dsw-alias-bg-mask-2), inset 0 1px 0 var(--dsw-static-neutral-00);border-radius:3px;top:15%}.nesYQG_boardGhost{background:color-mix(in srgb, var(--team-ink) 5%, transparent);border-radius:40% 60% 55% 45%;position:absolute;inset:14% 10% 30%}.nesYQG_boardInk{background:linear-gradient(90deg, var(--team-hue) 0 60%, transparent 60%) no-repeat 0 4% / 100% 2px, linear-gradient(90deg, var(--dsw-alias-state-error-primary) 0 32%, transparent 32%) no-repeat 0 34% / 100% 2px, linear-gradient(90deg, var(--team-leaf) 0 76%, transparent 76%) no-repeat 0 64% / 100% 2px, linear-gradient(90deg, var(--team-hue) 0 100%, transparent 0) no-repeat 4% 84% / 24% 2px, linear-gradient(180deg, var(--team-hue) 0 100%, transparent 0) no-repeat 4% 84% / 2px 14%;opacity:.72;position:absolute;inset:14% 11%}.nesYQG_boardNote{aspect-ratio:1;width:15%;box-shadow:1px 2px 3px var(--dsw-alias-bg-mask-2);border-radius:1px;position:absolute}.nesYQG_boardNote[data-note=a]{background:color-mix(in srgb, var(--team-warm) 46%, var(--dsw-static-neutral-00));top:16%;right:9%;transform:rotate(-5deg)}.nesYQG_boardNote[data-note=b]{background:color-mix(in srgb, var(--team-leaf) 34%, var(--dsw-static-neutral-00));top:52%;right:8%;transform:rotate(4deg)}.nesYQG_boardTrayTop{background:color-mix(in srgb, var(--team-page) 52%, var(--dsw-static-neutral-400));clip-path:polygon(3% 0,100% 0,97% 100%,0 100%);height:3.5%;position:absolute;top:100%;left:13%;right:13%}.nesYQG_boardTray{background:linear-gradient(180deg, color-mix(in srgb, var(--team-ink) 16%, var(--team-page)) 0 34%, color-mix(in srgb, var(--team-ink) 30%, var(--team-page)) 34% 100%);clip-path:polygon(0 0,100% 0,97% 100%,3% 100%);border-radius:0 0 2px 2px;height:4.5%;position:absolute;top:103.5%;left:13%;right:13%}.nesYQG_boardPens{background:linear-gradient(90deg, var(--dsw-alias-state-error-primary) 0 30%, transparent 30% 36%, var(--team-hue) 36% 66%, transparent 66% 72%, var(--team-leaf) 72% 100%);border-radius:1px;width:34%;height:2.6%;position:absolute;top:101%;left:18%}.nesYQG_boardEraser{background:linear-gradient(180deg, var(--dsw-static-neutral-300) 0 44%, color-mix(in srgb, var(--team-hue) 40%, var(--dsw-static-neutral-500)) 44% 100%);border-radius:1px;width:11%;height:3.4%;position:absolute;top:100.6%;right:18%}.nesYQG_shelf{width:calc(var(--team-unit) * .42);height:calc(var(--team-unit) * .2);top:34%}.nesYQG_plankTop{left:0;right:0;bottom:calc(var(--team-unit) * .035);height:calc(var(--team-unit) * .018);background:color-mix(in srgb, var(--team-warm) 28%, var(--dsw-static-neutral-200));clip-path:polygon(2% 0,100% 0,98% 100%,0 100%);position:absolute}.nesYQG_plank{left:0;right:0;bottom:calc(var(--team-unit) * .017);height:calc(var(--team-unit) * .018);background:linear-gradient(180deg, color-mix(in srgb, var(--team-warm) 40%, var(--dsw-static-neutral-400)) 0 40%, color-mix(in srgb, var(--team-warm) 52%, var(--dsw-static-neutral-600)) 40% 100%);box-shadow:0 3px 5px var(--dsw-alias-bg-mask-2);clip-path:polygon(0 0,100% 0,98% 100%,2% 100%);border-radius:0 0 2px 2px;position:absolute}.nesYQG_plankBracket{height:calc(var(--team-unit) * .02);background:linear-gradient(color-mix(in srgb, var(--team-ink) 32%, var(--team-page)) 0 0) no-repeat 4% 0 / 5% 100%, linear-gradient(color-mix(in srgb, var(--team-ink) 32%, var(--team-page)) 0 0) no-repeat 96% 0 / 5% 100%;clip-path:polygon(0 0,100% 0,84% 100%,16% 100%);position:absolute;bottom:0;left:12%;right:12%}.nesYQG_books{left:6%;bottom:calc(var(--team-unit) * .052);width:62%;height:calc(var(--team-unit) * .11);background:linear-gradient(color-mix(in srgb, var(--team-hue) 66%, var(--dsw-static-neutral-600)) 0 0) no-repeat 0 0 / 12% 100%, linear-gradient(color-mix(in srgb, var(--dsw-alias-state-warn-primary) 70%, var(--dsw-static-neutral-500)) 0 0) no-repeat 15% 8% / 9% 92%, linear-gradient(color-mix(in srgb, var(--team-leaf) 72%, var(--dsw-static-neutral-500)) 0 0) no-repeat 27% 20% / 13% 80%, linear-gradient(color-mix(in srgb, var(--dsw-alias-state-error-primary) 62%, var(--dsw-static-neutral-600)) 0 0) no-repeat 43% 4% / 10% 96%, linear-gradient(color-mix(in srgb, var(--dsw-static-neutral-00) 74%, var(--dsw-static-neutral-400)) 0 0) no-repeat 56% 26% / 11% 74%, linear-gradient(color-mix(in srgb, var(--team-hue) 40%, var(--dsw-static-neutral-700)) 0 0) no-repeat 70% 12% / 8% 88%, linear-gradient(color-mix(in srgb, var(--dsw-alias-state-warn-primary) 40%, var(--dsw-static-neutral-700)) 0 0) no-repeat 81% 30% / 12% 70%;position:absolute}.nesYQG_bookLeaning{left:46%;bottom:calc(var(--team-unit) * .052);width:4%;height:calc(var(--team-unit) * .09);transform-origin:50% 100%;background:color-mix(in srgb, var(--team-leaf) 50%, var(--dsw-static-neutral-700));position:absolute;transform:rotate(15deg)}.nesYQG_trophy{right:6%;bottom:calc(var(--team-unit) * .052);width:8%;height:calc(var(--team-unit) * .06);background:linear-gradient(color-mix(in srgb, var(--dsw-alias-state-warn-primary) 76%, var(--dsw-static-neutral-500)) 0 0) no-repeat 50% 100% / 100% 22%, linear-gradient(color-mix(in srgb, var(--dsw-alias-state-warn-primary) 64%, var(--dsw-static-neutral-300)) 0 0) no-repeat 50% 60% / 26% 40%, radial-gradient(ellipse 60% 100% at 50% 0, color-mix(in srgb, var(--dsw-alias-state-warn-primary) 70%, var(--dsw-static-neutral-300)) 0 96%, transparent 98%) no-repeat 50% 0 / 100% 58%;position:absolute}.nesYQG_shelfPlant{right:20%;bottom:calc(var(--team-unit) * .05);width:calc(var(--team-unit) * .09);height:calc(var(--team-unit) * .115);position:absolute}.nesYQG_clockProp{width:calc(var(--team-unit) * .17);aspect-ratio:1;background:radial-gradient(circle at 50% 50%, var(--team-page) 0 76%, transparent 78%), linear-gradient(150deg, color-mix(in srgb, var(--team-page) 50%, var(--team-ink)) 0, color-mix(in srgb, var(--team-ink) 34%, var(--team-page)) 100%);box-shadow:1px 2px 4px var(--dsw-alias-bg-mask-2);border-radius:50%;top:20%}.nesYQG_clockTicks{background:conic-gradient(from 0deg, var(--dsw-alias-label-tertiary) 0 2deg, transparent 2deg 28deg, var(--dsw-alias-label-tertiary) 28deg 30deg, transparent 30deg 58deg, var(--dsw-alias-label-tertiary) 58deg 60deg, transparent 60deg 88deg, var(--dsw-alias-label-tertiary) 88deg 90deg, transparent 90deg);border-radius:50%;position:absolute;inset:16%;transform:rotate(0);-webkit-mask:radial-gradient(circle,#0000 0 82%,#000 84%);mask:radial-gradient(circle,#0000 0 82%,#000 84%)}.nesYQG_clockHand{background:var(--dsw-alias-label-secondary);transform-origin:50% 100%;border-radius:1px;width:2px;margin-left:-1px;position:absolute;top:50%;left:50%}.nesYQG_clockHand[data-hand=hour]{height:26%;transform:translateY(-100%)rotate(-55deg)}.nesYQG_clockHand[data-hand=minute]{height:34%;transform:translateY(-100%)rotate(55deg)}.nesYQG_clockHand[data-hand=second]{background:var(--dsw-alias-state-error-primary);width:1px;height:36%;margin-left:-.5px;animation:60s steps(60,end) infinite nesYQG_team-tick;transform:translateY(-100%)rotate(0)}.nesYQG_clockPin{aspect-ratio:1;background:var(--dsw-alias-label-secondary);border-radius:50%;width:12%;margin:-6% 0 0 -6%;position:absolute;top:50%;left:50%}.nesYQG_poster{width:calc(var(--team-unit) * .26);background:color-mix(in srgb, var(--team-page) 70%, var(--dsw-static-neutral-400));height:44%;box-shadow:1px 3px 5px var(--dsw-alias-bg-mask-2);border-radius:2px;padding:5%;top:20%}.nesYQG_posterArt{background:radial-gradient(circle at 72% 30%, color-mix(in srgb, var(--dsw-alias-state-warn-primary) 70%, transparent) 0 14%, transparent 16%), linear-gradient(180deg, color-mix(in srgb, var(--team-hue) 26%, var(--team-page)) 0 54%, color-mix(in srgb, var(--team-hue) 66%, var(--team-page)) 54% 100%);position:absolute;inset:6%}.nesYQG_calendar{width:calc(var(--team-unit) * .2);background:var(--dsw-static-neutral-00);height:38%;box-shadow:1px 2px 4px var(--dsw-alias-bg-mask-2);border-radius:2px;top:22%;overflow:hidden}.nesYQG_calendarHead{background:color-mix(in srgb, var(--team-hue) 56%, var(--team-page));height:30%;position:absolute;top:0;left:0;right:0}.nesYQG_calendarGrid{background:repeating-linear-gradient(90deg, var(--dsw-static-neutral-300) 0 1px, transparent 1px 20%), repeating-linear-gradient(180deg, var(--dsw-static-neutral-300) 0 1px, transparent 1px 25%);position:absolute;inset:34% 10% 10%}.nesYQG_hanger{width:calc(var(--team-unit) * .16);height:calc(var(--team-unit) * .24);top:26%}.nesYQG_hangerBracket{background:color-mix(in srgb, var(--team-ink) 34%, var(--team-page));border-radius:0 0 40% 40%;width:46%;height:16%;margin-left:-23%;position:absolute;top:0;left:50%}.nesYQG_hangerPlant{width:100%;height:92%;position:absolute;inset:8% 0 0}.nesYQG_pendant{top:var(--team-wall-top);z-index:2;width:calc(var(--team-unit) * .2);height:calc(var(--team-floor-top) - var(--team-wall-top));pointer-events:none;position:absolute;transform:translate(-50%)}.nesYQG_pendantSvg{width:100%;height:100%;display:block;overflow:visible}.nesYQG_pendantFlex{fill:none;stroke:color-mix(in srgb, var(--team-ink) 46%, var(--team-page));stroke-width:1.6px}.nesYQG_pendantShade{fill:color-mix(in srgb, var(--team-warm) 50%, var(--dsw-static-neutral-600));stroke:color-mix(in srgb, var(--team-ink) 18%, transparent);stroke-width:.8px}.nesYQG_pendantMouth{fill:color-mix(in srgb, var(--team-warm) 68%, var(--dsw-static-neutral-300))}.nesYQG_pendantBulb{fill:color-mix(in srgb, var(--dsw-static-neutral-00) 86%, var(--team-warm));filter:blur(.6px)}.nesYQG_pendantGlow{fill:color-mix(in srgb, var(--team-warm) 26%, transparent);animation:7.5s ease-in-out infinite nesYQG_team-glow}.nesYQG_cat{z-index:40;pointer-events:none;opacity:0;width:clamp(34px,9cqh,74px);animation:47s linear infinite nesYQG_team-prowl;position:absolute;bottom:3%;left:0}.nesYQG_catSvg{width:100%;height:100%;display:block;overflow:visible}.nesYQG_catBody{fill:color-mix(in srgb, var(--team-warm) 46%, var(--dsw-static-neutral-600))}.nesYQG_catLeg,.nesYQG_catTail{fill:color-mix(in srgb, var(--team-warm) 52%, var(--dsw-static-neutral-700))}.nesYQG_catEar{fill:color-mix(in srgb, var(--team-warm) 36%, var(--dsw-static-neutral-700))}.nesYQG_catEye{fill:var(--team-leaf)}.nesYQG_catStripe{fill:none;stroke:color-mix(in srgb, var(--team-ink) 22%, transparent);stroke-width:2px;stroke-linecap:round}.nesYQG_catWhisker{fill:none;stroke:color-mix(in srgb, var(--team-page) 70%, transparent);stroke-width:.8px;stroke-linecap:round}.nesYQG_utility{--team-unit:clamp(72px, 24cqh, 182px);width:calc(var(--team-unit) * .34);height:calc(var(--team-unit) * .62);transform:translate(-50%, -100%) scale(var(--team-scale,1));transform-origin:50% 100%;z-index:calc(6 + var(--team-depth,0));pointer-events:none;position:absolute}.nesYQG_utility>*{display:block;position:absolute}.nesYQG_utilityCabinet{width:74%;height:100%;bottom:0;left:-34%}.nesYQG_utilityPrinter{width:92%;height:46%;bottom:0;left:34%}.nesYQG_utilityCoffee{width:52%;height:46%;bottom:44%;left:46%}.nesYQG_lounge{--team-unit:clamp(72px, 24cqh, 182px);--team-fabric:color-mix(in srgb, var(--team-warm) 52%, var(--dsw-static-neutral-600));--team-fabric-lit:color-mix(in srgb, var(--team-warm) 62%, var(--dsw-static-neutral-300));--team-fabric-dark:color-mix(in srgb, var(--team-ink) 22%, var(--team-fabric));z-index:5;pointer-events:none;position:absolute;inset:0}.nesYQG_lounge>*{position:absolute;transform:translate(-50%,-100%)}.nesYQG_rug{background:repeating-radial-gradient(ellipse at 50% 50%, transparent 0 84%, color-mix(in srgb, var(--team-hue) 12%, transparent) 84% 88%, transparent 88% 94%, color-mix(in srgb, var(--team-hue) 16%, transparent) 94% 97%, transparent 97% 100%), radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--team-hue) 5%, var(--team-page)) 0 56%, color-mix(in srgb, var(--team-hue) 10%, var(--team-page)) 58% 100%);border-radius:50%;width:100%;height:100%}.nesYQG_sofa{background:linear-gradient(color-mix(in srgb, var(--team-ink) 15%, transparent) 0 0) no-repeat 33.3% 16% / 1.5px 70%, linear-gradient(color-mix(in srgb, var(--team-ink) 15%, transparent) 0 0) no-repeat 66.6% 16% / 1.5px 70%, linear-gradient(180deg, var(--team-fabric-lit) 0 26%, var(--team-fabric) 26% 88%, var(--team-fabric-dark) 88% 100%);width:100%;height:100%;box-shadow:0 8px 13px var(--dsw-alias-bg-mask-2);border-radius:9px 9px 2px 2px}.nesYQG_sofa:before{content:\"\";background:linear-gradient(color-mix(in srgb, var(--team-ink) 14%, transparent) 0 0) no-repeat 50% 8% / 1.5px 46%, linear-gradient(180deg, color-mix(in srgb, var(--dsw-static-neutral-00) 22%, var(--team-fabric-lit)) 0 18%, var(--team-fabric-lit) 18% 44%, var(--team-fabric) 44% 66%, var(--team-fabric-dark) 66% 100%);border-radius:5px 5px 4px 4px;height:86%;position:absolute;top:78%;left:-4%;right:-4%}.nesYQG_sofa:after{content:\"\";background:linear-gradient(180deg, var(--team-fabric-lit) 0 26%, var(--team-fabric) 26% 82%, var(--team-fabric-dark) 82% 100%) no-repeat 0 0 / 11% 100%, linear-gradient(180deg, var(--team-fabric-lit) 0 26%, var(--team-fabric) 26% 82%, var(--team-fabric-dark) 82% 100%) no-repeat 100% 0 / 11% 100%;border-radius:7px;height:118%;position:absolute;top:52%;left:-9%;right:-9%}.nesYQG_table{background:radial-gradient(ellipse at 74% 32%, color-mix(in srgb, var(--dsw-alias-state-warn-primary) 74%, var(--dsw-static-neutral-600)) 0 52%, transparent 56%) no-repeat 68% 18% / 16% 18%, linear-gradient(color-mix(in srgb, var(--dsw-static-neutral-00) 62%, transparent) 0 0) no-repeat 16% 20% / 20% 24%, linear-gradient(180deg, color-mix(in srgb, var(--team-warm) 32%, var(--dsw-static-neutral-00)) 0 34%, color-mix(in srgb, var(--team-warm) 40%, var(--dsw-static-neutral-00)) 34% 62%, color-mix(in srgb, var(--team-warm) 52%, var(--dsw-static-neutral-600)) 62% 100%);width:100%;height:100%;box-shadow:0 6px 9px var(--dsw-alias-bg-mask-2);border-radius:3px}.nesYQG_table:before{content:\"\";background:linear-gradient(color-mix(in srgb, var(--team-warm) 32%, var(--dsw-static-neutral-600)) 0 0) no-repeat 3% 0 / 6% 100%, linear-gradient(color-mix(in srgb, var(--team-warm) 32%, var(--dsw-static-neutral-600)) 0 0) no-repeat 97% 0 / 6% 100%;height:150%;position:absolute;top:100%;left:8%;right:8%}.nesYQG_table:after{content:\"\";aspect-ratio:4/5;background:linear-gradient(180deg, var(--dsw-static-neutral-00) 0 26%, color-mix(in srgb, var(--team-hue) 62%, var(--dsw-static-neutral-00)) 26% 100%);border-radius:1px 1px 44% 44%;width:8%;position:absolute;bottom:78%;right:22%}.nesYQG_lamp{pointer-events:none;width:100%;height:100%}.nesYQG_lamp:before{content:\"\";background:linear-gradient(90deg, color-mix(in srgb, var(--team-ink) 38%, var(--team-page)) 0 30%, color-mix(in srgb, var(--team-page) 30%, var(--team-ink)) 30% 60%, color-mix(in srgb, var(--team-ink) 38%, var(--team-page)) 60% 100%) no-repeat 50% 22% / 16% 70%, radial-gradient(ellipse at 50% 100%, color-mix(in srgb, var(--team-ink) 30%, var(--team-page)) 0 54%, transparent 58%) no-repeat 50% 100% / 92% 13%;height:100%;position:absolute;bottom:0;left:0;right:0}.nesYQG_lamp:after{content:\"\";background:linear-gradient(180deg, color-mix(in srgb, var(--team-warm) 38%, var(--dsw-static-neutral-300)) 0 52%, color-mix(in srgb, var(--team-warm) 62%, var(--dsw-static-neutral-600)) 52% 100%);height:34%;box-shadow:inset 0 -2px 4px color-mix(in srgb, var(--team-warm) 70%, transparent), 0 0 14px color-mix(in srgb, var(--team-warm) 46%, transparent);border-radius:50% 50% 10% 10%/72% 72% 8% 8%;animation:9.2s ease-in-out infinite nesYQG_team-glow;position:absolute;top:0;left:0;right:0}.nesYQG_plant{width:100%;height:136%;filter:drop-shadow(3px 6px 5px var(--dsw-alias-bg-mask-1))}.nesYQG_cooler{--team-cooler:var(--team-surface-2);--team-cooler-lit:color-mix(in srgb, var(--team-page) 30%, var(--team-cooler));--team-cooler-dark:color-mix(in srgb, var(--team-ink) 16%, var(--team-page));--team-cooler-bottle:color-mix(in srgb, var(--team-hue) 30%, var(--team-page));--team-cooler-bottle-lit:color-mix(in srgb, var(--team-page) 26%, var(--team-cooler-bottle));--team-cooler-bottle-dark:color-mix(in srgb, var(--team-hue) 62%, var(--team-page));--team-cooler-water:color-mix(in srgb, var(--team-hue) 58%, var(--team-page));--team-cooler-water-lit:color-mix(in srgb, var(--team-hue) 34%, var(--team-page));pointer-events:none;height:168%;filter:drop-shadow(2px 5px 4px var(--dsw-alias-bg-mask-1))}.nesYQG_coolerSvg{width:100%;height:100%;display:block;overflow:visible}.nesYQG_coolerCabinet{stroke:none}.nesYQG_coolerCabinetEdge{fill:none;stroke:color-mix(in srgb, var(--team-ink) 14%, transparent);stroke-width:1px}.nesYQG_coolerPanel{fill:color-mix(in srgb, var(--team-ink) 5%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 10%, transparent);stroke-width:.8px}.nesYQG_coolerDoorSeam{fill:none;stroke:color-mix(in srgb, var(--team-ink) 10%, transparent);stroke-width:.8px;stroke-linecap:round}.nesYQG_coolerTap{fill:none;stroke:color-mix(in srgb, var(--team-ink) 36%, var(--team-page));stroke-width:2px;stroke-linecap:round}.nesYQG_coolerHandleWarm{fill:var(--dsw-alias-state-error-primary)}.nesYQG_coolerHandleCool{fill:var(--team-hue)}.nesYQG_coolerDrip{fill:color-mix(in srgb, var(--team-ink) 20%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 24%, transparent);stroke-width:.6px}.nesYQG_coolerDripWell{fill:color-mix(in srgb, var(--team-hue) 26%, var(--team-page))}.nesYQG_coolerBottle,.nesYQG_coolerNeck,.nesYQG_coolerWater{stroke:color-mix(in srgb, var(--team-hue) 42%, transparent);stroke-width:.7px}.nesYQG_coolerCap{fill:color-mix(in srgb, var(--team-hue) 66%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 16%, transparent);stroke-width:.6px}.nesYQG_coolerShine{fill:color-mix(in srgb, var(--team-page) 46%, transparent)}.nesYQG_coolerBubble{fill:color-mix(in srgb, var(--team-page) 56%, transparent);transform-box:fill-box;transform-origin:50%;animation:6.4s ease-in infinite nesYQG_team-bubble}.nesYQG_propSvg{width:100%;height:100%;filter:drop-shadow(2px 4px 4px var(--dsw-alias-bg-mask-1));display:block;overflow:visible}.nesYQG_propShade{fill:color-mix(in srgb, var(--team-ink) 11%, transparent)}.nesYQG_propFront{fill:var(--team-surface-2)}.nesYQG_propTop{fill:color-mix(in srgb, var(--team-page) 42%, var(--team-surface-2))}.nesYQG_propSide{fill:color-mix(in srgb, var(--team-ink) 15%, var(--team-surface-2))}.nesYQG_propSeam{fill:none;stroke:color-mix(in srgb, var(--team-ink) 15%, transparent);stroke-width:1px}.nesYQG_propInset{fill:color-mix(in srgb, var(--team-ink) 9%, var(--team-page));stroke:color-mix(in srgb, var(--team-ink) 12%, transparent);stroke-width:.8px}.nesYQG_propTray{fill:color-mix(in srgb, var(--team-ink) 18%, var(--team-page))}.nesYQG_propPaper{fill:var(--dsw-static-neutral-00);stroke:var(--dsw-static-neutral-300);stroke-width:.7px}.nesYQG_propHandle{fill:color-mix(in srgb, var(--team-ink) 40%, var(--team-page))}.nesYQG_propLabel{fill:color-mix(in srgb, var(--team-warm) 40%, var(--dsw-static-neutral-00))}.nesYQG_propFolder{fill:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 56%, var(--dsw-static-neutral-300))}.nesYQG_propBox{fill:color-mix(in srgb, var(--team-warm) 34%, var(--dsw-static-neutral-300))}.nesYQG_propBoxTop{fill:color-mix(in srgb, var(--team-warm) 22%, var(--dsw-static-neutral-200))}.nesYQG_propGlass{fill:color-mix(in srgb, var(--team-page) 62%, transparent);stroke:color-mix(in srgb, var(--team-ink) 16%, transparent);stroke-width:.7px}.nesYQG_propBrew{fill:color-mix(in srgb, var(--dsw-static-amber-600) 72%, var(--dsw-static-neutral-800))}.nesYQG_propCup{fill:var(--dsw-static-neutral-00);stroke:var(--dsw-static-neutral-300);stroke-width:.7px}.nesYQG_propSpout{fill:none;stroke:color-mix(in srgb, var(--team-ink) 40%, var(--team-page));stroke-width:1.6px;stroke-linecap:round}.nesYQG_propLampLive{fill:var(--team-leaf);animation:3.4s ease-in-out infinite nesYQG_team-blink}.nesYQG_propLampIdle{fill:color-mix(in srgb, var(--team-ink) 22%, var(--team-page))}.nesYQG_flora{width:100%;height:100%;display:block;overflow:visible}.nesYQG_floraShade{fill:color-mix(in srgb, var(--team-ink) 10%, transparent)}.nesYQG_floraSaucer{fill:color-mix(in srgb, var(--dsw-static-amber-600) 60%, var(--dsw-static-neutral-700))}.nesYQG_floraPot{fill:color-mix(in srgb, var(--dsw-static-amber-600) 66%, var(--dsw-static-neutral-500))}.nesYQG_floraPotShade{fill:color-mix(in srgb, var(--team-ink) 16%, transparent)}.nesYQG_floraGlaze{fill:color-mix(in srgb, var(--dsw-static-neutral-00) 34%, transparent)}.nesYQG_floraRim{fill:color-mix(in srgb, var(--dsw-static-amber-600) 56%, var(--dsw-static-neutral-400))}.nesYQG_floraRimLip{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 40%, transparent);stroke-width:1.4px;stroke-linecap:round}.nesYQG_floraSoil{fill:color-mix(in srgb, var(--dsw-static-amber-600) 30%, var(--dsw-static-neutral-800))}.nesYQG_floraCrumb{fill:color-mix(in srgb, var(--dsw-static-amber-600) 50%, var(--dsw-static-neutral-700))}.nesYQG_floraStem{fill:none;stroke:color-mix(in srgb, var(--team-leaf) 46%, var(--dsw-static-neutral-800));stroke-width:2.2px;stroke-linecap:round}.nesYQG_floraBlade{fill:color-mix(in srgb, var(--team-leaf) 62%, var(--dsw-static-neutral-900))}.nesYQG_floraBladeLit{fill:color-mix(in srgb, var(--team-leaf) 74%, var(--dsw-static-neutral-400))}.nesYQG_floraVein{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-900) 22%, transparent);stroke-width:.9px;stroke-linecap:round}.nesYQG_floraLeaf{transform-box:fill-box;transform-origin:50% 100%;animation:7.4s ease-in-out infinite nesYQG_team-sway;animation-delay:var(--team-leaf-delay,0s)}.nesYQG_floraLeaf[data-hang=true]{transform-origin:50% 0;animation-duration:9.1s}.nesYQG_floraSpine{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 70%, transparent);stroke-width:1px;stroke-linecap:round}.nesYQG_floraBloom{fill:color-mix(in srgb, var(--dsw-alias-state-error-primary) 62%, var(--dsw-static-neutral-00))}.nesYQG_floraBloomHeart{fill:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 72%, var(--dsw-static-neutral-00))}.nesYQG_desk{--team-unit:clamp(72px, 24cqh, 182px);--team-figure:calc(var(--team-unit) * .6);--team-wood:color-mix(in srgb, var(--team-warm) 42%, var(--team-surface-2));width:calc(var(--team-figure) * 1.6);height:calc(var(--team-unit) * .13);transform:translate(-56%, calc(-100% - var(--team-unit) * .19)) scale(var(--team-scale,1));transform-origin:56% 100%;z-index:calc(6 + var(--team-depth,0));pointer-events:none;position:absolute}.nesYQG_deskTop{filter:drop-shadow(5px 9px 14px var(--dsw-alias-bg-mask-2));border-radius:2px;position:absolute;inset:0}.nesYQG_deskSurface{background:linear-gradient(200deg, color-mix(in srgb, var(--team-wood) 66%, var(--dsw-static-neutral-00)) 0 40%, var(--team-wood) 40% 82%, color-mix(in srgb, var(--team-ink) 20%, var(--team-wood)) 82% 100%);clip-path:polygon(0 12%,100% 0,100% 100%,0 100%);border-radius:2px;position:absolute;inset:0 5% 22%}.nesYQG_deskApron{background:linear-gradient(180deg, color-mix(in srgb, var(--team-ink) 16%, var(--team-wood)) 0 22%, color-mix(in srgb, var(--team-ink) 30%, var(--team-wood)) 22% 100%);clip-path:polygon(0 0,100% 0,98% 100%,2% 100%);height:18%;position:absolute;bottom:4%;left:5%;right:5%}.nesYQG_deskFlank{background:linear-gradient(180deg, color-mix(in srgb, var(--team-ink) 12%, var(--team-wood)) 0, color-mix(in srgb, var(--team-ink) 26%, var(--team-wood)) 100%);clip-path:polygon(100% 14%,100% 100%,0 100%,0 0);width:10%;height:78%;position:absolute;top:0;right:5%}.nesYQG_deskGrain{background:linear-gradient(105deg, transparent 46%, color-mix(in srgb, var(--team-page) 22%, transparent) 46% 47.4%, transparent 47.4% 72%, color-mix(in srgb, var(--team-page) 18%, transparent) 72% 73.2%, transparent 73.2%);opacity:.8;position:absolute;inset:6% 12% 30%}.nesYQG_deskLegs{background:linear-gradient(color-mix(in srgb, var(--team-ink) 26%, var(--team-page)) 0 0) no-repeat 2% 0 / 4% 100%, linear-gradient(color-mix(in srgb, var(--team-ink) 26%, var(--team-page)) 0 0) no-repeat 98% 0 / 4% 100%;height:150%;position:absolute;top:100%;left:7%;right:7%}.nesYQG_deskModesty{background:linear-gradient(180deg, color-mix(in srgb, var(--team-wood) 60%, var(--dsw-static-neutral-500)) 0, color-mix(in srgb, var(--team-ink) 26%, var(--team-wood)) 100%);clip-path:polygon(0 0,100% 0,98% 100%,2% 100%);height:60%;position:absolute;top:100%;left:7%;right:7%}.nesYQG_chair{--team-unit:clamp(72px, 24cqh, 182px);--team-figure:calc(var(--team-unit) * .6);--team-chair:color-mix(in srgb, var(--team-hue) 26%, var(--dsw-static-neutral-600));--team-chair-lit:color-mix(in srgb, var(--team-hue) 14%, var(--dsw-static-neutral-300));--team-chair-dark:color-mix(in srgb, var(--team-hue) 36%, var(--dsw-static-neutral-800));width:calc(var(--team-figure) * .56);height:calc(var(--team-unit) * .5);transform:translate(-50%, -100%) scale(var(--team-scale,1));transform-origin:50% 100%;z-index:calc(12 + var(--team-depth,0));pointer-events:none;filter:drop-shadow(2px 4px 3px var(--dsw-alias-bg-mask-1));position:absolute}.nesYQG_chairSvg{width:100%;height:100%;display:block;overflow:visible}.nesYQG_chairRide{transform-box:fill-box;transform-origin:50% 100%;animation:6.8s ease-in-out infinite nesYQG_team-chair-rise;animation-delay:var(--team-chair-delay,0s)}.nesYQG_chairShell{stroke:none}.nesYQG_chairShellEdge{fill:none;stroke:color-mix(in srgb, var(--team-ink) 22%, transparent);stroke-width:1.2px}.nesYQG_chairMesh{stroke:color-mix(in srgb, var(--team-ink) 16%, transparent);stroke-width:.8px}.nesYQG_chairMeshLine{fill:none;stroke:color-mix(in srgb, var(--team-ink) 10%, transparent);stroke-width:1px;stroke-linecap:round}.nesYQG_chairLumbar{stroke:color-mix(in srgb, var(--team-ink) 18%, transparent);stroke-width:.9px}.nesYQG_chairPan{fill:var(--team-chair-dark);stroke:color-mix(in srgb, var(--team-ink) 16%, transparent);stroke-width:.8px}.nesYQG_chairPanTop{fill:color-mix(in srgb, var(--team-chair-lit) 70%, var(--team-chair))}.nesYQG_chairSpine,.nesYQG_chairMechanism{fill:var(--team-chair-dark);stroke:color-mix(in srgb, var(--team-ink) 14%, transparent);stroke-width:.7px}.nesYQG_chairLift{transform-box:fill-box;transform-origin:50% 100%;animation:6.8s ease-in-out infinite nesYQG_team-chair-stretch;animation-delay:var(--team-chair-delay,0s);stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.5px}.nesYQG_chairHub{fill:var(--team-chair-dark)}.nesYQG_chairSpokes path{fill:none;stroke:var(--team-chair-dark);stroke-width:3px;stroke-linecap:round}.nesYQG_chairCasters circle,.nesYQG_chairCasters ellipse{fill:var(--dsw-static-neutral-800);stroke:color-mix(in srgb, var(--team-page) 42%, transparent);stroke-width:.8px}.nesYQG_monitor{flex-direction:column;align-items:center;width:58%;display:flex;position:absolute;bottom:88%;left:0}.nesYQG_screen{aspect-ratio:16/10;border:4px solid color-mix(in srgb, var(--team-ink) 62%, var(--team-page));background:color-mix(in srgb, var(--team-hue) 8%, var(--team-page));width:100%;box-shadow:0 5px 10px var(--dsw-alias-bg-mask-2);border-radius:8px 8px 4px 4px;padding:18% 8% 7%;position:relative;overflow:hidden}.nesYQG_screen:before{content:\"\";background:radial-gradient(circle at 8% 50%, var(--dsw-alias-state-error-primary) 0 1.8px, transparent 2.1px), radial-gradient(circle at 18% 50%, var(--team-warm) 0 1.8px, transparent 2.1px), radial-gradient(circle at 28% 50%, var(--team-leaf) 0 1.8px, transparent 2.1px), linear-gradient(90deg, color-mix(in srgb, var(--team-hue) 22%, var(--team-page)) 0 62%, color-mix(in srgb, var(--team-hue) 12%, var(--team-page)) 62%);height:19%;position:absolute;top:0;left:0;right:0}.nesYQG_glare{pointer-events:none;background:linear-gradient(116deg, transparent 0 44%, color-mix(in srgb, var(--team-page) 42%, transparent) 44% 57%, transparent 57%);position:absolute;inset:0}.nesYQG_desk[data-screen=off] .nesYQG_screenApp{opacity:.4;filter:saturate(.5)}.nesYQG_desk[data-screen=working] .nesYQG_screen{background:color-mix(in srgb, var(--team-hue) 15%, var(--team-page));animation:2.4s ease-in-out infinite nesYQG_team-screen}.nesYQG_desk[data-empty=true] .nesYQG_screen{opacity:.86}.nesYQG_screenText{clip-path:inset(50%);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}.nesYQG_neck{background:color-mix(in srgb, var(--team-ink) 46%, var(--team-page));width:15%;height:13px}.nesYQG_base{background:color-mix(in srgb, var(--team-ink) 52%, var(--team-page));width:52%;height:7px;box-shadow:0 2px 6px var(--dsw-alias-bg-mask-2);border-radius:1px 1px 5px 5px}.nesYQG_keyboard{width:38%;height:calc(var(--team-unit) * .03);background:repeating-linear-gradient(90deg, color-mix(in srgb, var(--team-ink) 30%, var(--team-page)) 0 2.5px, color-mix(in srgb, var(--team-ink) 52%, var(--team-page)) 2.5px 4.5px);box-shadow:0 1.5px 3px var(--dsw-alias-bg-mask-2);border-radius:2.5px;position:absolute;bottom:6%;left:35%}.nesYQG_mug{width:calc(var(--team-unit) * .065);aspect-ratio:3/4;background:color-mix(in srgb, var(--team-hue) 72%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg));box-shadow:0 1.5px 2.5px var(--dsw-alias-bg-mask-2);border-radius:1px 1px 40% 40%;position:absolute;bottom:14%;left:82%}.nesYQG_mug:after{content:\"\";border:1.4px solid color-mix(in srgb, var(--team-hue) 72%, var(--dsw-static-neutral-00));border-left:none;border-radius:0 50% 50% 0;width:58%;height:50%;position:absolute;top:20%;left:88%}.nesYQG_papers{width:calc(var(--team-unit) * .11);height:calc(var(--team-unit) * .024);background:var(--dsw-static-neutral-00);box-shadow:0 0 0 1px var(--dsw-static-neutral-300), 2px -2.5px 0 -1px var(--dsw-static-neutral-00), 2px -2.5px 0 0 var(--dsw-static-neutral-300);border-radius:1px;position:absolute;bottom:8%;left:8%}.nesYQG_deskPlant{width:calc(var(--team-unit) * .09);height:calc(var(--team-unit) * .115);filter:drop-shadow(1px 2px 2px var(--dsw-alias-bg-mask-1));position:absolute;bottom:78%;right:0}.nesYQG_person{--team-unit:clamp(72px, 24cqh, 182px);--team-figure:calc(var(--team-unit) * .6);width:var(--team-figure);cursor:pointer;transform:translate(-50%, -100%) scale(calc(var(--team-scale,1) * var(--team-sit,1)));transform-origin:50% 100%;z-index:calc(10 + var(--team-depth,0));background:0 0;border:none;padding:0;animation:.32s cubic-bezier(.34,1.56,.64,1) both nesYQG_team-person-in;display:block;position:absolute}.nesYQG_person:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px;border-radius:10px}.nesYQG_person[data-walk=true]{z-index:calc(14 + var(--team-depth,0))}.nesYQG_body{height:var(--team-unit);filter:drop-shadow(6px 9px 6px var(--dsw-alias-bg-mask-1));transition:transform .18s cubic-bezier(.22,1,.36,1);display:block;position:relative}.nesYQG_person:hover .nesYQG_body,.nesYQG_person[data-focus=true] .nesYQG_body{transform:scale(1.07)}.nesYQG_figure{width:100%;height:100%;display:block;overflow:visible}.nesYQG_person[data-facing=back]{--team-sit:.93;animation:.32s cubic-bezier(.34,1.56,.64,1) both nesYQG_team-person-in,6.8s ease-in-out infinite nesYQG_team-person-sit;animation-delay:0s, var(--team-chair-delay,0s)}.nesYQG_person[data-facing=back] .nesYQG_figure{transform:none}.nesYQG_person[data-facing=back] .nesYQG_crewLimbBack,.nesYQG_person[data-facing=back] .nesYQG_crewLimbFront{display:none}.nesYQG_person[data-facing=right] .nesYQG_figure{transform:rotate(3deg)}.nesYQG_person[data-facing=away] .nesYQG_figure{transform:rotate(-2deg)}.nesYQG_person[data-facing=away] .nesYQG_crewLimbBack,.nesYQG_person[data-facing=away] .nesYQG_crewLimbFront{display:none}.nesYQG_person[data-facing=left] .nesYQG_figure{transform:scaleX(-1)rotate(3deg)}.nesYQG_crew{width:100%;height:100%;overflow:visible}.nesYQG_crewHood{fill:color-mix(in srgb, var(--team-hue) 86%, var(--dsw-static-neutral-1000));filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crew[data-kind=beluga] .nesYQG_crewHood{fill:color-mix(in srgb, var(--team-hue) 34%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewBelly,.nesYQG_crewPatch,.nesYQG_crewMelon{fill:color-mix(in srgb, var(--team-hue) 15%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewKnob{fill:var(--dsw-static-neutral-00);opacity:.55}.nesYQG_crewEye{fill:var(--dsw-static-neutral-00)}.nesYQG_crewPupil{fill:var(--dsw-static-neutral-900)}.nesYQG_crewSmile,.nesYQG_crewMouth{fill:none;stroke:var(--dsw-static-neutral-700);stroke-width:1.4px;stroke-linecap:round;opacity:.6}.nesYQG_crewMouth{stroke:var(--dsw-static-neutral-00);opacity:.7}.nesYQG_crewFace,.nesYQG_crewHand,.nesYQG_crewNeck,.nesYQG_crewEar{fill:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 24%, var(--dsw-static-neutral-00))}.nesYQG_crew[data-skin=\"1\"] .nesYQG_crewFace,.nesYQG_crew[data-skin=\"1\"] .nesYQG_crewHand,.nesYQG_crew[data-skin=\"1\"] .nesYQG_crewNeck,.nesYQG_crew[data-skin=\"1\"] .nesYQG_crewEar{fill:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 44%, var(--dsw-static-neutral-00))}.nesYQG_crew[data-skin=\"2\"] .nesYQG_crewFace,.nesYQG_crew[data-skin=\"2\"] .nesYQG_crewHand,.nesYQG_crew[data-skin=\"2\"] .nesYQG_crewNeck,.nesYQG_crew[data-skin=\"2\"] .nesYQG_crewEar{fill:color-mix(in srgb, var(--dsw-static-amber-600) 58%, var(--dsw-static-neutral-00))}.nesYQG_crew[data-skin=\"3\"] .nesYQG_crewFace,.nesYQG_crew[data-skin=\"3\"] .nesYQG_crewHand,.nesYQG_crew[data-skin=\"3\"] .nesYQG_crewNeck,.nesYQG_crew[data-skin=\"3\"] .nesYQG_crewEar{fill:color-mix(in srgb, var(--dsw-static-amber-700) 62%, var(--dsw-static-neutral-00))}.nesYQG_crewBrow{fill:none;stroke:var(--dsw-static-neutral-600);stroke-width:1.1px;stroke-linecap:round;opacity:.6}.nesYQG_crewEyeGlint{fill:var(--dsw-static-neutral-00)}.nesYQG_crewBlush{fill:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 48%, var(--dsw-static-neutral-00));opacity:.45}.nesYQG_crewHair{fill:color-mix(in srgb, var(--dsw-static-amber-700) 38%, var(--dsw-static-neutral-800))}.nesYQG_crew[data-tone=\"1\"] .nesYQG_crewHair{fill:var(--dsw-static-neutral-900)}.nesYQG_crew[data-tone=\"2\"] .nesYQG_crewHair{fill:color-mix(in srgb, var(--dsw-static-amber-600) 52%, var(--dsw-static-neutral-900))}.nesYQG_crew[data-tone=\"3\"] .nesYQG_crewHair{fill:color-mix(in srgb, var(--dsw-static-amber-600) 76%, var(--dsw-static-neutral-400))}.nesYQG_crew[data-tone=\"4\"] .nesYQG_crewHair{fill:color-mix(in srgb, var(--dsw-static-neutral-00) 80%, var(--dsw-static-neutral-600))}.nesYQG_crewHairShine{fill:color-mix(in srgb, var(--dsw-static-neutral-00) 34%, transparent);opacity:.5}.nesYQG_crewHoodSheen{fill:color-mix(in srgb, var(--dsw-static-neutral-00) 46%, var(--team-hue));filter:hue-rotate(var(--team-accent-shift,0deg));opacity:.5}.nesYQG_crewHoodShade{fill:color-mix(in srgb, var(--team-hue) 90%, var(--dsw-static-neutral-1000));filter:hue-rotate(var(--team-accent-shift,0deg));opacity:.24}.nesYQG_crew[data-kind=shark] .nesYQG_crewHood{fill:color-mix(in srgb, var(--team-hue) 30%, var(--dsw-static-neutral-400));filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crew[data-kind=shark] .nesYQG_crewBelly{fill:color-mix(in srgb, var(--team-hue) 8%, var(--dsw-static-neutral-00))}.nesYQG_crewGill{fill:none;stroke:color-mix(in srgb, var(--team-hue) 55%, var(--dsw-static-neutral-600));stroke-width:1.1px;stroke-linecap:round;opacity:.75}.nesYQG_crewTusk{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 88%, var(--team-hue));stroke-width:3.4px;stroke-linecap:round}.nesYQG_crewSpout{fill:none;stroke:color-mix(in srgb, var(--team-hue) 45%, transparent);stroke-width:2.6px;stroke-linecap:round}.nesYQG_crewShirt{fill:color-mix(in srgb, var(--team-hue) 38%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewSleeve{fill:color-mix(in srgb, var(--team-hue) 52%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crew[data-outfit=tee] .nesYQG_crewShirt{fill:color-mix(in srgb, var(--team-hue) 46%, var(--dsw-static-neutral-00))}.nesYQG_crew[data-outfit=polo] .nesYQG_crewShirt{fill:color-mix(in srgb, var(--team-hue) 36%, var(--dsw-static-neutral-00))}.nesYQG_crew[data-outfit=sweater] .nesYQG_crewShirt{fill:color-mix(in srgb, var(--team-hue) 50%, var(--dsw-static-neutral-00))}.nesYQG_crew[data-outfit=hoodie] .nesYQG_crewShirt{fill:color-mix(in srgb, var(--team-hue) 30%, var(--dsw-static-neutral-00))}.nesYQG_crew[data-outfit=tunic] .nesYQG_crewShirt{fill:color-mix(in srgb, var(--team-hue) 44%, var(--dsw-static-neutral-00))}.nesYQG_crew[data-outfit=vest] .nesYQG_crewShirt{fill:color-mix(in srgb, var(--team-hue) 26%, var(--dsw-static-neutral-00))}.nesYQG_crew[data-outfit=jacket] .nesYQG_crewShirt{fill:color-mix(in srgb, var(--team-hue) 60%, var(--dsw-static-neutral-00))}.nesYQG_crew[data-outfit=stripes] .nesYQG_crewShirt{fill:color-mix(in srgb, var(--team-hue) 24%, var(--dsw-static-neutral-00))}.nesYQG_crew[data-outfit=dungarees] .nesYQG_crewShirt{fill:color-mix(in srgb, var(--team-hue) 36%, var(--dsw-static-neutral-00))}.nesYQG_crewVest,.nesYQG_crewJacket,.nesYQG_crewBib{fill:color-mix(in srgb, var(--team-hue) 46%, var(--dsw-static-neutral-00));stroke:color-mix(in srgb, var(--team-hue) 60%, var(--dsw-static-neutral-00));stroke-width:.6px;filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewStripes{fill:none;stroke:color-mix(in srgb, var(--team-hue) 62%, var(--dsw-static-neutral-00));stroke-width:1.4px;opacity:.8;filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewSeam{fill:none;stroke:color-mix(in srgb, var(--team-hue) 56%, var(--dsw-static-neutral-00));stroke-width:.8px;stroke-linecap:round;opacity:.5}.nesYQG_crewCuff{fill:none;stroke:color-mix(in srgb, var(--team-hue) 60%, var(--dsw-static-neutral-00));stroke-width:1px;stroke-linecap:round;opacity:.55}.nesYQG_crewCollar{fill:none;stroke:var(--dsw-static-neutral-00);stroke-width:1.8px;stroke-linecap:round;opacity:.65}.nesYQG_crewPlacket,.nesYQG_crewStitch{fill:none;stroke:color-mix(in srgb, var(--team-hue) 64%, var(--dsw-static-neutral-00));stroke-width:.8px;stroke-linecap:round;opacity:.55}.nesYQG_crewButton{fill:color-mix(in srgb, var(--team-hue) 60%, var(--dsw-static-neutral-00));stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 70%, transparent);stroke-width:.4px}.nesYQG_crewRib{fill:color-mix(in srgb, var(--team-hue) 58%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewHoodFabric{fill:color-mix(in srgb, var(--team-hue) 34%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg));opacity:.92}.nesYQG_crewDraw{fill:none;stroke:color-mix(in srgb, var(--team-hue) 64%, var(--dsw-static-neutral-00));stroke-width:1px;stroke-linecap:round}.nesYQG_crewPocket{fill:color-mix(in srgb, var(--team-hue) 20%, var(--dsw-static-neutral-00));stroke:color-mix(in srgb, var(--team-hue) 48%, var(--dsw-static-neutral-00));stroke-width:.7px;filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewNeckBand{fill:color-mix(in srgb, var(--team-hue) 54%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewBelt{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-800) 78%, var(--team-hue));stroke-width:2.2px;stroke-linecap:round}.nesYQG_crewCans{pointer-events:none}.nesYQG_crewGlasses rect{fill:color-mix(in srgb, var(--team-hue) 34%, transparent);stroke:var(--dsw-static-neutral-800);stroke-width:1.2px}.nesYQG_crewGlasses path{fill:none;stroke:var(--dsw-static-neutral-800);stroke-width:1px;stroke-linecap:round}.nesYQG_crewCansBand{fill:none;stroke:var(--dsw-static-neutral-800);stroke-width:3.4px}.nesYQG_crewCansCup{fill:color-mix(in srgb, var(--team-hue) 64%, var(--dsw-static-neutral-00));stroke:var(--dsw-static-neutral-800);stroke-width:.8px;filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewScarf{fill:color-mix(in srgb, var(--team-hue) 66%, var(--dsw-static-neutral-00));filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewCord{fill:none;stroke:color-mix(in srgb, var(--team-hue) 72%, var(--dsw-static-neutral-00));stroke-width:1.2px;stroke-linecap:round;filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewBadge{fill:var(--dsw-static-neutral-00);stroke:var(--dsw-static-neutral-300);stroke-width:.7px}.nesYQG_crewBadgeLine{fill:none;stroke:var(--dsw-static-neutral-500);stroke-width:.9px;stroke-linecap:round}.nesYQG_crewPack{fill:color-mix(in srgb, var(--team-hue) 52%, var(--dsw-static-neutral-700));stroke:color-mix(in srgb, var(--team-ink) 20%, transparent);stroke-width:.8px;filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewPackTrim{fill:none;stroke:color-mix(in srgb, var(--team-hue) 72%, var(--dsw-static-neutral-00));stroke-width:1.2px;stroke-linecap:round;filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewStrap{fill:none;stroke:color-mix(in srgb, var(--team-hue) 58%, var(--dsw-static-neutral-700));stroke-width:2.4px;stroke-linecap:round;filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crewTrouser,.nesYQG_crewShoe{fill:color-mix(in srgb, var(--team-hue) 34%, var(--dsw-static-neutral-600));filter:hue-rotate(var(--team-accent-shift,0deg))}.nesYQG_crew[data-shoes=boot] .nesYQG_crewShoe{fill:color-mix(in srgb, var(--team-hue) 58%, var(--dsw-static-neutral-800))}.nesYQG_crew[data-shoes=loafer] .nesYQG_crewShoe{fill:color-mix(in srgb, var(--team-hue) 16%, var(--dsw-static-neutral-500))}.nesYQG_crew[data-shoes=hightop] .nesYQG_crewShoe{fill:color-mix(in srgb, var(--team-hue) 50%, var(--dsw-static-neutral-00))}.nesYQG_crew[data-shoes=sandal] .nesYQG_crewShoe{fill:color-mix(in srgb, var(--dsw-static-amber-600) 64%, var(--dsw-static-neutral-700))}.nesYQG_crewShoeTrim{fill:none;stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 46%, transparent);stroke-width:1px;stroke-linecap:round}.nesYQG_crew[data-shoes=boot] .nesYQG_crewShoeTrim,.nesYQG_crew[data-shoes=hightop] .nesYQG_crewShoeTrim{stroke:color-mix(in srgb, var(--dsw-static-neutral-00) 30%, transparent)}.nesYQG_crewLimbBack,.nesYQG_crewLimbFront,.nesYQG_crewArmBack,.nesYQG_crewArmFront{transform-box:fill-box;transform-origin:50% 0}.nesYQG_person[data-walk=true] .nesYQG_crewLimbBack,.nesYQG_person[data-walk=true] .nesYQG_crewArmFront{animation:1s linear infinite paused nesYQG_team-swing;animation-delay:calc(var(--team-gait,0) * -1s)}.nesYQG_person[data-walk=true] .nesYQG_crewLimbFront,.nesYQG_person[data-walk=true] .nesYQG_crewArmBack{animation:1s linear infinite reverse paused nesYQG_team-swing;animation-delay:calc(var(--team-gait,0) * -1s)}.nesYQG_person[data-walk=true] .nesYQG_body{animation:1s ease-in-out infinite paused nesYQG_team-bob;animation-delay:calc(var(--team-gait,0) * -1s)}.nesYQG_person[data-pose=working]:not([data-walk=true]) .nesYQG_crewArmFront,.nesYQG_person[data-pose=working]:not([data-walk=true]) .nesYQG_crewArmBack{animation:.9s ease-in-out infinite alternate nesYQG_team-type}.nesYQG_crown{width:20px;height:20px;color:var(--dsw-static-neutral-900);background:var(--dsw-alias-state-warn-secondary);box-shadow:0 1px 3px var(--dsw-alias-bg-mask-2);border-radius:50%;place-items:center;margin-left:-10px;display:grid;position:absolute;top:-6%;left:50%}.nesYQG_load{border:2px solid var(--dsw-alias-bg-overlay);font-variant-numeric:tabular-nums;min-width:16px;height:16px;color:var(--dsw-alias-label-primary-inverted);background:var(--dsw-alias-state-success-primary);border-radius:8px;place-items:center;padding:0 4px;font-size:9.5px;font-weight:600;display:grid;position:absolute;top:47%;right:-13%}.nesYQG_speech{z-index:2;border:1px solid color-mix(in srgb, var(--team-hue) 45%, transparent);background:var(--dsw-alias-bg-overlay);width:max-content;max-width:210px;color:var(--dsw-alias-label-primary);white-space:nowrap;text-overflow:ellipsis;box-shadow:0 3px 10px var(--dsw-alias-bg-mask-1);border-radius:10px 10px 10px 3px;padding:4px 8px;font-size:10.5px;line-height:1.35;animation:.2s cubic-bezier(.22,1,.36,1) both nesYQG_team-say-in;position:absolute;bottom:calc(100% + 2px);left:50%;overflow:hidden;transform:translate(-50%)}.nesYQG_listening,.nesYQG_doze{z-index:2;letter-spacing:.08em;color:var(--dsw-alias-label-dimmed);font-size:11px;font-weight:600;position:absolute;top:4%;right:0}.nesYQG_listening{animation:1.4s ease-in-out infinite nesYQG_team-listen}.nesYQG_doze{animation:3s ease-in-out infinite nesYQG_team-doze}.nesYQG_plate{background:color-mix(in srgb, var(--dsw-alias-bg-overlay) 72%, transparent);border-radius:6px;flex-direction:column;align-items:center;width:150%;padding:1px 4px;display:flex;position:absolute;top:calc(100% + 1px);left:50%;transform:translate(-50%)}.nesYQG_person[data-talking=from] .nesYQG_plate{visibility:hidden}.nesYQG_plateName{max-width:100%;color:var(--dsw-alias-label-primary);white-space:nowrap;text-overflow:ellipsis;font-size:11.5px;font-weight:600;overflow:hidden}.nesYQG_plateMeta{max-width:100%;color:var(--dsw-alias-label-tertiary);white-space:nowrap;text-overflow:ellipsis;font-size:9.5px;overflow:hidden}.nesYQG_state{display:flex;position:absolute;top:45%;left:-9%}.nesYQG_person[data-running=true] .nesYQG_body:after{content:\"\";border:1.5px solid var(--team-hue);pointer-events:none;border-radius:50%;animation:2.2s cubic-bezier(.22,1,.36,1) infinite nesYQG_team-halo;position:absolute;inset:-3% -7% 56%}.nesYQG_person[aria-current=true] .nesYQG_plateName{color:var(--dsw-alias-brand-primary);text-underline-offset:3px;text-decoration:underline}.nesYQG_feed{flex-direction:column;flex:1;gap:8px;min-height:0;display:flex}.nesYQG_crewList{border:1px solid var(--dsw-alias-border-l2);border-radius:10px;flex-direction:column;flex:none;display:flex;overflow:hidden}.nesYQG_crewRow{align-items:center;gap:6px;min-width:0;padding:5px 8px;font-size:11px;transition:background .16s;display:flex}.nesYQG_crewRow+.nesYQG_crewRow{border-top:1px solid var(--dsw-alias-border-l1)}.nesYQG_crewRow[data-focus=true]{background:var(--dsw-alias-interactive-bg-hover)}.nesYQG_crewName{max-width:84px;color:var(--dsw-alias-label-primary);white-space:nowrap;text-overflow:ellipsis;flex:none;font-weight:600;overflow:hidden}.nesYQG_crewState{color:var(--dsw-alias-label-tertiary);background:var(--team-surface-2);border-radius:999px;flex:none;padding:0 5px;font-size:9.5px}.nesYQG_crewState[data-state=running]{color:var(--team-hue);background:color-mix(in srgb, var(--team-hue) 14%, transparent)}.nesYQG_crewOpen{font-variant-numeric:tabular-nums;color:var(--dsw-alias-state-success-primary);border:1px solid color-mix(in srgb, var(--dsw-alias-state-success-primary) 45%, transparent);border-radius:999px;flex:none;padding:0 5px;font-size:9.5px}.nesYQG_crewLine{text-align:right;min-width:0;color:var(--dsw-alias-label-tertiary);white-space:nowrap;text-overflow:ellipsis;flex:1;overflow:hidden}.nesYQG_feedTitle{letter-spacing:.06em;text-transform:uppercase;color:var(--dsw-alias-label-dimmed);flex:none;margin:2px 0 0;font-size:10px;font-weight:600}.nesYQG_log{overscroll-behavior:contain;flex-direction:column;flex:1;gap:6px;min-height:0;padding-right:2px;display:flex;overflow-y:auto}.nesYQG_logRow{border:1px solid var(--dsw-alias-border-l2);background:var(--team-surface-1);border-radius:10px;align-items:flex-start;gap:7px;padding:5px 6px;transition:border-color .16s,background .16s;animation:.24s cubic-bezier(.22,1,.36,1) both nesYQG_team-row-in;display:flex}.nesYQG_logRow[data-focus=true]{border-color:var(--team-hue);background:var(--dsw-alias-interactive-bg-hover)}.nesYQG_logRow[data-message-kind=report]{border-left:2px solid var(--dsw-alias-state-success-primary)}.nesYQG_logRow[data-message-kind=settled]{opacity:.72;border-style:dashed}.nesYQG_logAvatar{width:22px;height:22px;color:var(--dsw-alias-label-secondary);background:var(--team-surface-2);border-radius:50%;flex:none;place-items:center;display:grid;overflow:hidden}.nesYQG_logBody{flex-direction:column;flex:1;gap:1px;min-width:0;display:flex}.nesYQG_logHead{color:var(--dsw-alias-label-tertiary);align-items:center;gap:4px;font-size:10px;display:flex}.nesYQG_logAuthor{color:var(--dsw-alias-label-secondary);font-weight:600}.nesYQG_logArrow{opacity:.55}.nesYQG_logTo{color:var(--dsw-alias-label-secondary);font-weight:600}.nesYQG_logKind{background:var(--team-surface-2);color:var(--dsw-alias-label-secondary);border-radius:999px;padding:0 5px}.nesYQG_logHop{font-variant-numeric:tabular-nums;border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-tertiary);border-radius:999px;padding:0 5px}.nesYQG_logRow[data-hop=\"3\"] .nesYQG_logHop,.nesYQG_logRow[data-hop=\"4\"] .nesYQG_logHop,.nesYQG_logRow[data-hop=\"5\"] .nesYQG_logHop{color:var(--dsw-alias-state-warn-primary);border-color:var(--dsw-alias-state-warn-primary)}.nesYQG_logTime{font-variant-numeric:tabular-nums;margin-left:auto}.nesYQG_logText{color:var(--dsw-alias-label-primary);-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:12px;line-height:1.45;display:-webkit-box;overflow:hidden}.nesYQG_logTail{color:var(--dsw-alias-label-dimmed);flex:none;align-self:center;display:flex}.nesYQG_logRow[data-message-kind=message] .nesYQG_logTail{color:var(--team-hue)}.nesYQG_cameo{place-items:center;width:100%;height:100%;display:grid}.nesYQG_cameoCrew{width:88%;height:auto}.nesYQG_cameoDot{background:var(--team-surface-2);border-radius:50%;flex:none;place-items:center;width:18px;height:18px;display:grid;overflow:hidden}.nesYQG_cameoDot .nesYQG_discGlyph{font-size:9px}.nesYQG_discGlyph{font-size:11px;font-weight:600;line-height:1}.nesYQG_paneNote{letter-spacing:0;text-transform:none;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-dimmed);margin-left:auto;font-weight:400}.nesYQG_emptyHint{color:var(--dsw-alias-label-dimmed);margin:2px 0 0;font-size:11.5px}.nesYQG_drawer[data-panel=workspace] .nesYQG_drawerBody{background-image:radial-gradient(var(--team-surface-2) 1px, transparent 1.4px);background-size:14px 14px}.nesYQG_notes{flex-direction:column;gap:10px;padding:4px 2px;display:flex}.nesYQG_note{border:1px solid color-mix(in srgb, var(--dsw-alias-state-warn-primary) 30%, var(--dsw-alias-border-l2));background:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 8%, var(--dsw-alias-bg-overlay));box-shadow:0 4px 9px var(--dsw-alias-bg-mask-1);transform:rotate(var(--team-tilt,0deg));border-radius:8px;flex-direction:column;gap:3px;padding:10px 10px 8px;transition:border-color .16s,background .16s,transform .16s;display:flex;position:relative}.nesYQG_note:nth-child(odd){--team-tilt:-1.2deg}.nesYQG_note:nth-child(2n){--team-tilt:1deg}.nesYQG_note:before{content:\"\";background:var(--dsw-alias-brand-primary);width:8px;height:8px;box-shadow:0 2px 3px var(--dsw-alias-bg-mask-1);border-radius:50%;margin-left:-4px;position:absolute;top:-4px;left:50%}.nesYQG_note:hover,.nesYQG_note[data-focus=true]{transform:none}.nesYQG_note[data-focus=true]{border-color:var(--team-hue);background:var(--dsw-alias-interactive-bg-hover)}.nesYQG_noteKey{color:var(--dsw-alias-label-primary);text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:600;overflow:hidden}.nesYQG_notePreview{color:var(--dsw-alias-label-secondary);-webkit-line-clamp:3;-webkit-box-orient:vertical;font-size:11.5px;line-height:1.45;display:-webkit-box;overflow:hidden}.nesYQG_noteFoot{color:var(--dsw-alias-label-tertiary);align-items:center;gap:6px;font-size:10.5px;display:flex}.nesYQG_noteAuthor{color:var(--dsw-alias-label-secondary);align-items:center;gap:5px;display:inline-flex}.nesYQG_noteTime{font-variant-numeric:tabular-nums;margin-left:auto}.nesYQG_columns{flex-direction:column;gap:14px;display:flex}.nesYQG_column{flex-direction:column;gap:6px;min-width:0;display:flex}.nesYQG_column+.nesYQG_column{border-top:1px dashed var(--dsw-alias-border-l2);padding-top:12px}.nesYQG_columnTitle{color:var(--dsw-alias-label-secondary);align-items:center;gap:6px;margin:0;font-size:11px;font-weight:600;display:flex}.nesYQG_columnTitle:before{content:\"\";background:var(--team-surface-3);border-radius:50%;width:7px;height:7px}.nesYQG_column[data-column=active] .nesYQG_columnTitle:before{background:var(--team-hue)}.nesYQG_column[data-column=done] .nesYQG_columnTitle:before{background:var(--dsw-alias-state-success-primary)}.nesYQG_columnCount{font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-dimmed)}.nesYQG_card{border:1px solid var(--dsw-alias-border-l2);border-radius:10px;flex-direction:column;gap:4px;padding:7px 9px;transition:border-color .16s,background .16s;animation:.24s cubic-bezier(.22,1,.36,1) both nesYQG_team-row-in;display:flex}.nesYQG_card[data-focus=true]{border-color:var(--team-hue);background:var(--dsw-alias-interactive-bg-hover)}.nesYQG_card[data-task-status=active]{border-left:2px solid var(--team-hue)}.nesYQG_card[data-task-status=done] .nesYQG_cardTitle{color:var(--dsw-alias-label-tertiary);text-decoration:line-through}.nesYQG_cardTitle{color:var(--dsw-alias-label-primary);-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:12.5px;line-height:1.4;display:-webkit-box;overflow:hidden}.nesYQG_cardFoot{color:var(--dsw-alias-label-tertiary);align-items:center;gap:6px;font-size:10.5px;display:flex}.nesYQG_cardWho{color:var(--dsw-alias-label-secondary);flex:none;align-items:center;gap:5px;display:inline-flex}.nesYQG_cardNote{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.nesYQG_screenApp{width:100%;height:100%;display:flex}.nesYQG_screenApp i{font-style:normal;display:block}.nesYQG_screenApp[data-app=chart]{align-items:flex-end;gap:1.5px}.nesYQG_screenApp[data-app=chart] i{background:color-mix(in srgb, var(--team-hue) 85%, var(--dsw-alias-bg-overlay));border-radius:1px;flex:1}.nesYQG_screenApp[data-app=chart] i:first-child{height:38%}.nesYQG_screenApp[data-app=chart] i:nth-child(2){height:72%}.nesYQG_screenApp[data-app=chart] i:nth-child(3){height:52%}.nesYQG_screenApp[data-app=chart] i:nth-child(4){height:92%}.nesYQG_screenApp[data-app=chart] i:nth-child(5){background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 80%, var(--dsw-alias-bg-overlay));height:64%}.nesYQG_screenApp[data-app=code]{flex-direction:column;justify-content:center;gap:2px;padding-left:22%;position:relative}.nesYQG_screenApp[data-app=code]:before{content:\"\";background:var(--team-surface-3);border-radius:1px;width:16%;position:absolute;top:0;bottom:0;left:0}.nesYQG_screenApp[data-app=code] i{background:var(--dsw-alias-label-tertiary);opacity:.85;border-radius:1px;height:2px}.nesYQG_screenApp[data-app=code] i:first-child{background:var(--team-hue);opacity:1;width:62%}.nesYQG_screenApp[data-app=code] i:nth-child(2){width:88%;margin-left:10%}.nesYQG_screenApp[data-app=code] i:nth-child(3){width:46%;margin-left:10%}.nesYQG_screenApp[data-app=code] i:nth-child(4){width:70%;margin-left:20%}.nesYQG_screenApp[data-app=code] i:nth-child(5){width:34%}.nesYQG_screenApp[data-app=doc]{flex-direction:column;gap:2.5px}.nesYQG_screenApp[data-app=doc] i{background:var(--dsw-alias-label-tertiary);opacity:.75;border-radius:1px;height:2px}.nesYQG_screenApp[data-app=doc] i:first-child{background:var(--dsw-alias-label-secondary);opacity:1;width:46%;height:3.5px}.nesYQG_screenApp[data-app=doc] i:nth-child(2){width:94%}.nesYQG_screenApp[data-app=doc] i:nth-child(3){width:88%}.nesYQG_screenApp[data-app=doc] i:nth-child(4){width:62%}.nesYQG_screenApp[data-app=mail]{flex-direction:column;justify-content:center;gap:2.5px}.nesYQG_screenApp[data-app=mail] i{background:var(--dsw-alias-label-dimmed);border-radius:3px;height:26%}.nesYQG_screenApp[data-app=mail] i:first-child{width:62%}.nesYQG_screenApp[data-app=mail] i:nth-child(2){background:var(--team-hue);align-self:flex-end;width:56%}.nesYQG_screenApp[data-app=mail] i:nth-child(3){width:44%}.nesYQG_screenApp[data-app=grid]{grid-template-columns:1fr 1fr;gap:2px;display:grid}.nesYQG_screenApp[data-app=grid] i{background:var(--dsw-alias-label-dimmed);border-radius:1.5px}.nesYQG_screenApp[data-app=grid] i:first-child{background:var(--team-hue)}.nesYQG_screenApp[data-app=grid] i:nth-child(4){background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 75%, var(--dsw-alias-bg-overlay))}.nesYQG_screenApp[data-app=term]{background:color-mix(in srgb, var(--dsw-alias-label-secondary) 92%, transparent);border-radius:1px;flex-direction:column;gap:2.5px;padding:2px}.nesYQG_screenApp[data-app=term] i{background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 92%, transparent);border-radius:1px;height:2px}.nesYQG_screenApp[data-app=term] i:first-child{width:58%}.nesYQG_screenApp[data-app=term] i:nth-child(2){opacity:.6;width:82%}.nesYQG_screenApp[data-app=term] i:nth-child(3){opacity:.6;width:40%}.nesYQG_screenApp[data-app=term] i:nth-child(4){width:12%;height:3px;animation:1.1s step-end infinite nesYQG_team-caret}@container (width<=640px){.nesYQG_barHint,.nesYQG_stat{display:none}.nesYQG_stat:first-child{display:inline-block}}@keyframes nesYQG_team-chair-rise{0%,to{transform:translateY(0)}5%,9%{transform:translateY(-2.5%)}13%{transform:translateY(0)}}@keyframes nesYQG_team-chair-stretch{0%,to{transform:scaleY(1)}5%,9%{transform:scaleY(1.14)}13%{transform:scaleY(1)}}@keyframes nesYQG_team-person-sit{0%,to{transform:translate(-50%, -100%) scale(calc(var(--team-scale,1) * var(--team-sit,1)))}5%,9%{transform:translate(-50%, calc(-100% - 1.15%)) scale(calc(var(--team-scale,1) * var(--team-sit,1)))}13%{transform:translate(-50%, -100%) scale(calc(var(--team-scale,1) * var(--team-sit,1)))}}@keyframes nesYQG_team-stage-in{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}@keyframes nesYQG_team-person-in{0%{opacity:0;transform:translate(-50%, -90%) scale(calc(var(--team-scale,1) * var(--team-sit,1) * .82))}to{opacity:1;transform:translate(-50%, -100%) scale(calc(var(--team-scale,1) * var(--team-sit,1)))}}@keyframes nesYQG_team-row-in{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}@keyframes nesYQG_team-drawer-in{0%{opacity:0;transform:translate(14px)}to{opacity:1;transform:none}}@keyframes nesYQG_team-say-in{0%{opacity:0;transform:translate(-50%,4px)}to{opacity:1;transform:translate(-50%)}}@keyframes nesYQG_team-swing{0%,to{transform:rotate(-17deg)}50%{transform:rotate(17deg)}}@keyframes nesYQG_team-bob{0%,to{transform:translateY(0)}25%{transform:translateY(-3%)}50%{transform:translateY(0)}75%{transform:translateY(-3%)}}@keyframes nesYQG_team-drift{0%{translate:0}to{translate:230%}}@keyframes nesYQG_team-sail{0%{translate:0}to{translate:340%}}@keyframes nesYQG_team-glow{0%,to{opacity:.55}50%{opacity:.95}}@keyframes nesYQG_team-sway{0%,to{transform:rotate(-2.6deg)}50%{transform:rotate(2.6deg)}}@keyframes nesYQG_team-bubble{0%{opacity:0;translate:0}12%{opacity:1}88%{opacity:.8}to{opacity:0;translate:0 -44%}}@keyframes nesYQG_team-prowl{0%,to{opacity:0;left:-12%;transform:scaleX(1)}2%{opacity:1}46%{opacity:1;left:42%;transform:scaleX(1)}50%{opacity:1;left:50%;transform:scaleX(1)}54%{opacity:1;left:62%;transform:scaleX(-1)}92%{opacity:1;left:-12%;transform:scaleX(-1)}94%,to{opacity:0}}@keyframes nesYQG_team-tick{0%{transform:translateY(-100%)rotate(0)}to{transform:translateY(-100%)rotate(360deg)}}@keyframes nesYQG_team-blink{0%,to{opacity:1}50%{opacity:.25}}@keyframes nesYQG_team-type{0%{transform:rotate(-4deg)}to{transform:rotate(4deg)}}@keyframes nesYQG_team-listen{0%,to{opacity:.3}50%{opacity:1}}@keyframes nesYQG_team-doze{0%{opacity:.2;transform:translateY(2px)}50%{opacity:1;transform:translateY(-3px)}to{opacity:.2;transform:translateY(2px)}}@keyframes nesYQG_team-screen{0%,to{filter:brightness()}50%{filter:brightness(1.14)}}@keyframes nesYQG_team-caret{0%,49%{opacity:1}50%,to{opacity:0}}@keyframes nesYQG_team-halo{0%{opacity:.7;transform:scale(1)}70%{opacity:0;transform:scale(1.3)}to{opacity:0;transform:scale(1.3)}}@media (prefers-reduced-motion:reduce){.nesYQG_stage,.nesYQG_person,.nesYQG_drawer,.nesYQG_logRow,.nesYQG_card,.nesYQG_note,.nesYQG_speech,.nesYQG_chairRide,.nesYQG_chairLift,.nesYQG_lamp:after,.nesYQG_pendantGlow,.nesYQG_cloud,.nesYQG_sail,.nesYQG_coolerBubble,.nesYQG_floraLeaf,.nesYQG_cat,.nesYQG_clockHand[data-hand=second],.nesYQG_propLampLive,.nesYQG_chairRide,.nesYQG_chairLift,.nesYQG_person[data-facing=back],.nesYQG_person[data-walk=true] .nesYQG_body,.nesYQG_person[data-walk=true] .nesYQG_crewLimbBack,.nesYQG_person[data-walk=true] .nesYQG_crewLimbFront,.nesYQG_person[data-walk=true] .nesYQG_crewArmBack,.nesYQG_person[data-walk=true] .nesYQG_crewArmFront,.nesYQG_person[data-pose=working] .nesYQG_crewArmFront,.nesYQG_person[data-pose=working] .nesYQG_crewArmBack,.nesYQG_person[data-running=true] .nesYQG_body:after,.nesYQG_desk[data-screen=working] .nesYQG_screen,.nesYQG_dockButton[data-fresh=true]:after,.nesYQG_screenApp[data-app=term] i:nth-child(4),.nesYQG_listening,.nesYQG_doze{animation:none}.nesYQG_person,.nesYQG_body,.nesYQG_dockButton,.nesYQG_card{transition:none}}";
		const tagId = "dsh-team/TeamStage.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-team";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var TeamStage_module_css_default = {
			"screenApp": "nesYQG_screenApp",
			"books": "nesYQG_books",
			"crewCansBand": "nesYQG_crewCansBand",
			"floraGlaze": "nesYQG_floraGlaze",
			"boardPens": "nesYQG_boardPens",
			"blankHint": "nesYQG_blankHint",
			"crewLimbFront": "nesYQG_crewLimbFront",
			"coolerSvg": "nesYQG_coolerSvg",
			"crewJacket": "nesYQG_crewJacket",
			"wallBack": "nesYQG_wallBack",
			"wallLeft": "nesYQG_wallLeft",
			"floraShade": "nesYQG_floraShade",
			"team-screen": "nesYQG_team-screen",
			"crewSpout": "nesYQG_crewSpout",
			"mug": "nesYQG_mug",
			"crewBadge": "nesYQG_crewBadge",
			"team-say-in": "nesYQG_team-say-in",
			"stage": "nesYQG_stage",
			"person": "nesYQG_person",
			"chairLift": "nesYQG_chairLift",
			"team-doze": "nesYQG_team-doze",
			"floraSoil": "nesYQG_floraSoil",
			"neck": "nesYQG_neck",
			"crewVest": "nesYQG_crewVest",
			"shelfPlant": "nesYQG_shelfPlant",
			"team-drawer-in": "nesYQG_team-drawer-in",
			"crewPackTrim": "nesYQG_crewPackTrim",
			"logRow": "nesYQG_logRow",
			"chairSpine": "nesYQG_chairSpine",
			"logKind": "nesYQG_logKind",
			"floraRimLip": "nesYQG_floraRimLip",
			"papers": "nesYQG_papers",
			"plank": "nesYQG_plank",
			"floraPot": "nesYQG_floraPot",
			"propHandle": "nesYQG_propHandle",
			"team-halo": "nesYQG_team-halo",
			"monitor": "nesYQG_monitor",
			"crewBelt": "nesYQG_crewBelt",
			"crewScarf": "nesYQG_crewScarf",
			"crewHair": "nesYQG_crewHair",
			"deskApron": "nesYQG_deskApron",
			"crewHoodShade": "nesYQG_crewHoodShade",
			"catSvg": "nesYQG_catSvg",
			"boardEraser": "nesYQG_boardEraser",
			"coolerWater": "nesYQG_coolerWater",
			"noteTime": "nesYQG_noteTime",
			"crewShoe": "nesYQG_crewShoe",
			"drawer": "nesYQG_drawer",
			"floraBladeLit": "nesYQG_floraBladeLit",
			"crewHoodSheen": "nesYQG_crewHoodSheen",
			"crewGlasses": "nesYQG_crewGlasses",
			"barTitle": "nesYQG_barTitle",
			"skirting": "nesYQG_skirting",
			"propTop": "nesYQG_propTop",
			"plankTop": "nesYQG_plankTop",
			"catEar": "nesYQG_catEar",
			"propFolder": "nesYQG_propFolder",
			"cameoDot": "nesYQG_cameoDot",
			"body": "nesYQG_body",
			"chairRide": "nesYQG_chairRide",
			"coolerHandleWarm": "nesYQG_coolerHandleWarm",
			"crewPack": "nesYQG_crewPack",
			"shelf": "nesYQG_shelf",
			"trophy": "nesYQG_trophy",
			"floraVein": "nesYQG_floraVein",
			"dockCount": "nesYQG_dockCount",
			"doze": "nesYQG_doze",
			"crewList": "nesYQG_crewList",
			"logTail": "nesYQG_logTail",
			"paneTitle": "nesYQG_paneTitle",
			"cardTitle": "nesYQG_cardTitle",
			"propGlass": "nesYQG_propGlass",
			"coolerCap": "nesYQG_coolerCap",
			"deskSurface": "nesYQG_deskSurface",
			"statLive": "nesYQG_statLive",
			"coolerShine": "nesYQG_coolerShine",
			"floraCrumb": "nesYQG_floraCrumb",
			"deskModesty": "nesYQG_deskModesty",
			"crewNeckBand": "nesYQG_crewNeckBand",
			"coolerTap": "nesYQG_coolerTap",
			"composerAway": "nesYQG_composerAway",
			"team-stage-in": "nesYQG_team-stage-in",
			"barStats": "nesYQG_barStats",
			"ceiling": "nesYQG_ceiling",
			"catStripe": "nesYQG_catStripe",
			"propBrew": "nesYQG_propBrew",
			"flora": "nesYQG_flora",
			"chairCasters": "nesYQG_chairCasters",
			"crewStripes": "nesYQG_crewStripes",
			"floorPlane": "nesYQG_floorPlane",
			"team-blink": "nesYQG_team-blink",
			"crown": "nesYQG_crown",
			"feed": "nesYQG_feed",
			"pendantBulb": "nesYQG_pendantBulb",
			"utility": "nesYQG_utility",
			"screenText": "nesYQG_screenText",
			"note": "nesYQG_note",
			"column": "nesYQG_column",
			"cardWho": "nesYQG_cardWho",
			"team-sway": "nesYQG_team-sway",
			"coolerCabinetEdge": "nesYQG_coolerCabinetEdge",
			"dock": "nesYQG_dock",
			"logHead": "nesYQG_logHead",
			"chairShellEdge": "nesYQG_chairShellEdge",
			"listening": "nesYQG_listening",
			"floraSpine": "nesYQG_floraSpine",
			"floraSaucer": "nesYQG_floraSaucer",
			"crewNeck": "nesYQG_crewNeck",
			"sillTop": "nesYQG_sillTop",
			"stat": "nesYQG_stat",
			"chairHub": "nesYQG_chairHub",
			"desk": "nesYQG_desk",
			"propSpout": "nesYQG_propSpout",
			"cat": "nesYQG_cat",
			"table": "nesYQG_table",
			"clockTicks": "nesYQG_clockTicks",
			"coolerDripWell": "nesYQG_coolerDripWell",
			"floraBlade": "nesYQG_floraBlade",
			"team-listen": "nesYQG_team-listen",
			"pendantMouth": "nesYQG_pendantMouth",
			"cameoCrew": "nesYQG_cameoCrew",
			"pendantFlex": "nesYQG_pendantFlex",
			"feedTitle": "nesYQG_feedTitle",
			"deskTop": "nesYQG_deskTop",
			"chairMeshLine": "nesYQG_chairMeshLine",
			"lounge": "nesYQG_lounge",
			"noteAuthor": "nesYQG_noteAuthor",
			"calendar": "nesYQG_calendar",
			"chair": "nesYQG_chair",
			"sea": "nesYQG_sea",
			"crew": "nesYQG_crew",
			"crewShirt": "nesYQG_crewShirt",
			"roomPane": "nesYQG_roomPane",
			"blankTitle": "nesYQG_blankTitle",
			"whiteboard": "nesYQG_whiteboard",
			"coolerNeck": "nesYQG_coolerNeck",
			"barHint": "nesYQG_barHint",
			"boardTrayTop": "nesYQG_boardTrayTop",
			"cloud": "nesYQG_cloud",
			"team-chair-rise": "nesYQG_team-chair-rise",
			"cardFoot": "nesYQG_cardFoot",
			"screen": "nesYQG_screen",
			"crewCuff": "nesYQG_crewCuff",
			"chairShell": "nesYQG_chairShell",
			"coolerHandleCool": "nesYQG_coolerHandleCool",
			"catTail": "nesYQG_catTail",
			"crewOpen": "nesYQG_crewOpen",
			"crewTusk": "nesYQG_crewTusk",
			"coolerDrip": "nesYQG_coolerDrip",
			"crewDraw": "nesYQG_crewDraw",
			"crewShoeTrim": "nesYQG_crewShoeTrim",
			"propSvg": "nesYQG_propSvg",
			"hanger": "nesYQG_hanger",
			"coolerBubble": "nesYQG_coolerBubble",
			"logArrow": "nesYQG_logArrow",
			"crewBelly": "nesYQG_crewBelly",
			"deskFlank": "nesYQG_deskFlank",
			"hangerPlant": "nesYQG_hangerPlant",
			"team-bob": "nesYQG_team-bob",
			"drawerHead": "nesYQG_drawerHead",
			"emptyHint": "nesYQG_emptyHint",
			"noteFoot": "nesYQG_noteFoot",
			"crewEye": "nesYQG_crewEye",
			"crewKnob": "nesYQG_crewKnob",
			"propInset": "nesYQG_propInset",
			"pendant": "nesYQG_pendant",
			"crewSeam": "nesYQG_crewSeam",
			"crewPocket": "nesYQG_crewPocket",
			"chairSvg": "nesYQG_chairSvg",
			"coolerPanel": "nesYQG_coolerPanel",
			"sky": "nesYQG_sky",
			"chairLumbar": "nesYQG_chairLumbar",
			"pane": "nesYQG_pane",
			"boardGhost": "nesYQG_boardGhost",
			"team-person-sit": "nesYQG_team-person-sit",
			"crewLimbBack": "nesYQG_crewLimbBack",
			"crewCollar": "nesYQG_crewCollar",
			"shell": "nesYQG_shell",
			"paneNote": "nesYQG_paneNote",
			"drawerClose": "nesYQG_drawerClose",
			"coolerBottle": "nesYQG_coolerBottle",
			"notePreview": "nesYQG_notePreview",
			"logHop": "nesYQG_logHop",
			"crewCansCup": "nesYQG_crewCansCup",
			"logAvatar": "nesYQG_logAvatar",
			"team-glow": "nesYQG_team-glow",
			"drawerBody": "nesYQG_drawerBody",
			"crewLine": "nesYQG_crewLine",
			"barIcon": "nesYQG_barIcon",
			"posterArt": "nesYQG_posterArt",
			"window": "nesYQG_window",
			"lamp": "nesYQG_lamp",
			"boardTray": "nesYQG_boardTray",
			"catWhisker": "nesYQG_catWhisker",
			"coolerCabinet": "nesYQG_coolerCabinet",
			"plateName": "nesYQG_plateName",
			"clockPin": "nesYQG_clockPin",
			"team-person-in": "nesYQG_team-person-in",
			"hangerBracket": "nesYQG_hangerBracket",
			"propBoxTop": "nesYQG_propBoxTop",
			"sofa": "nesYQG_sofa",
			"propTray": "nesYQG_propTray",
			"deskGrain": "nesYQG_deskGrain",
			"deskPlant": "nesYQG_deskPlant",
			"floraPotShade": "nesYQG_floraPotShade",
			"crewSmile": "nesYQG_crewSmile",
			"crewStrap": "nesYQG_crewStrap",
			"card": "nesYQG_card",
			"load": "nesYQG_load",
			"boardInk": "nesYQG_boardInk",
			"logAuthor": "nesYQG_logAuthor",
			"utilityCabinet": "nesYQG_utilityCabinet",
			"crewMelon": "nesYQG_crewMelon",
			"cameo": "nesYQG_cameo",
			"calendarHead": "nesYQG_calendarHead",
			"crewPupil": "nesYQG_crewPupil",
			"crewButton": "nesYQG_crewButton",
			"columnCount": "nesYQG_columnCount",
			"logBody": "nesYQG_logBody",
			"speech": "nesYQG_speech",
			"deskLegs": "nesYQG_deskLegs",
			"floraStem": "nesYQG_floraStem",
			"propLampIdle": "nesYQG_propLampIdle",
			"rug": "nesYQG_rug",
			"coolerDoorSeam": "nesYQG_coolerDoorSeam",
			"glare": "nesYQG_glare",
			"logTime": "nesYQG_logTime",
			"logText": "nesYQG_logText",
			"cardNote": "nesYQG_cardNote",
			"propLabel": "nesYQG_propLabel",
			"pendantGlow": "nesYQG_pendantGlow",
			"chairMechanism": "nesYQG_chairMechanism",
			"crewArmFront": "nesYQG_crewArmFront",
			"noteKey": "nesYQG_noteKey",
			"propShade": "nesYQG_propShade",
			"floraBloom": "nesYQG_floraBloom",
			"utilityCoffee": "nesYQG_utilityCoffee",
			"crewPatch": "nesYQG_crewPatch",
			"crewFace": "nesYQG_crewFace",
			"propFront": "nesYQG_propFront",
			"crewArmBack": "nesYQG_crewArmBack",
			"plate": "nesYQG_plate",
			"state": "nesYQG_state",
			"boardNote": "nesYQG_boardNote",
			"wall": "nesYQG_wall",
			"clockHand": "nesYQG_clockHand",
			"propBox": "nesYQG_propBox",
			"crewGill": "nesYQG_crewGill",
			"chairMesh": "nesYQG_chairMesh",
			"discGlyph": "nesYQG_discGlyph",
			"catBody": "nesYQG_catBody",
			"team-sail": "nesYQG_team-sail",
			"crewEar": "nesYQG_crewEar",
			"crewTrouser": "nesYQG_crewTrouser",
			"floor": "nesYQG_floor",
			"bookLeaning": "nesYQG_bookLeaning",
			"plateMeta": "nesYQG_plateMeta",
			"crewStitch": "nesYQG_crewStitch",
			"crewBib": "nesYQG_crewBib",
			"floraBloomHeart": "nesYQG_floraBloomHeart",
			"dockButton": "nesYQG_dockButton",
			"propSide": "nesYQG_propSide",
			"team-caret": "nesYQG_team-caret",
			"catLeg": "nesYQG_catLeg",
			"poster": "nesYQG_poster",
			"chairPanTop": "nesYQG_chairPanTop",
			"clockProp": "nesYQG_clockProp",
			"crewHoodFabric": "nesYQG_crewHoodFabric",
			"crewCord": "nesYQG_crewCord",
			"team-drift": "nesYQG_team-drift",
			"catEye": "nesYQG_catEye",
			"plant": "nesYQG_plant",
			"propCup": "nesYQG_propCup",
			"floraRim": "nesYQG_floraRim",
			"chairSpokes": "nesYQG_chairSpokes",
			"floraLeaf": "nesYQG_floraLeaf",
			"crewHood": "nesYQG_crewHood",
			"wallRight": "nesYQG_wallRight",
			"crewBadgeLine": "nesYQG_crewBadgeLine",
			"crewHairShine": "nesYQG_crewHairShine",
			"team-swing": "nesYQG_team-swing",
			"team-bubble": "nesYQG_team-bubble",
			"pendantSvg": "nesYQG_pendantSvg",
			"propLampLive": "nesYQG_propLampLive",
			"keyboard": "nesYQG_keyboard",
			"propSeam": "nesYQG_propSeam",
			"figure": "nesYQG_figure",
			"crewState": "nesYQG_crewState",
			"sill": "nesYQG_sill",
			"beam": "nesYQG_beam",
			"scene": "nesYQG_scene",
			"base": "nesYQG_base",
			"utilityPrinter": "nesYQG_utilityPrinter",
			"crewPlacket": "nesYQG_crewPlacket",
			"crewName": "nesYQG_crewName",
			"calendarGrid": "nesYQG_calendarGrid",
			"mullion": "nesYQG_mullion",
			"crewHand": "nesYQG_crewHand",
			"team-row-in": "nesYQG_team-row-in",
			"columns": "nesYQG_columns",
			"team-type": "nesYQG_team-type",
			"crewSleeve": "nesYQG_crewSleeve",
			"chairPan": "nesYQG_chairPan",
			"team-chair-stretch": "nesYQG_team-chair-stretch",
			"crewRow": "nesYQG_crewRow",
			"cooler": "nesYQG_cooler",
			"reveal": "nesYQG_reveal",
			"crewMouth": "nesYQG_crewMouth",
			"team-prowl": "nesYQG_team-prowl",
			"sail": "nesYQG_sail",
			"team-tick": "nesYQG_team-tick",
			"empty": "nesYQG_empty",
			"logTo": "nesYQG_logTo",
			"notes": "nesYQG_notes",
			"log": "nesYQG_log",
			"pendantShade": "nesYQG_pendantShade",
			"plankBracket": "nesYQG_plankBracket",
			"crewBrow": "nesYQG_crewBrow",
			"crewBlush": "nesYQG_crewBlush",
			"crewRib": "nesYQG_crewRib",
			"bar": "nesYQG_bar",
			"propPaper": "nesYQG_propPaper",
			"crewCans": "nesYQG_crewCans",
			"crewEyeGlint": "nesYQG_crewEyeGlint",
			"columnTitle": "nesYQG_columnTitle"
		};
		//#endregion
		//#region src/client/crew.tsx
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
			const toe = flip ? 41.5 : 22.5;
			const way = flip ? -1 : 1;
			if (kind === "boot") return `M${toe} 79 H${inner} V95 Q${inner} 100 ${inner - way * 3.5} 100 H${outer + way * 1.6} Q${outer} 100 ${outer} 98.4 L${outer} 94 L${outer + way * 2} 92.6 L${toe} 91 Z`;
			if (kind === "loafer") return `M${toe} 94 H${inner} V97 Q${inner} 100 ${inner - way * 3.5} 100 H${outer + way * 1.6} Q${outer} 100 ${outer} 98.4 Q${outer} 96.8 ${outer + way * 2} 95.9 L${toe} 94.8 Z`;
			if (kind === "hightop") return `M${toe} 86 H${inner} V96 Q${inner} 100 ${inner - way * 3.5} 100 H${outer + way * 1.6} Q${outer} 100 ${outer} 98.2 Q${outer} 96 ${outer + way * 2} 95 L${toe} 93.6 Z`;
			if (kind === "sandal") return `M${toe} 95.5 H${inner} V97.5 Q${inner} 100 ${inner - way * 3.5} 100 H${outer + way * 1.6} Q${outer} 100 ${outer} 98.6 Q${outer} 97.4 ${outer + way * 2} 96.8 L${toe} 96.2 Z`;
			return `M${toe} 91 H${inner} V97 Q${inner} 100 ${inner - way * 3.5} 100 H${outer + way * 1.6} Q${outer} 100 ${outer} 98.4 Q${outer} 96.6 ${outer + way * 2} 95.6 L${toe} 94.6 Z`;
		}
		/** The sole edge under a shoe, and the laces or straps across it. */
		function shoeTrim(kind, side) {
			const at = side === "right" ? 37 : 27;
			if (kind === "sandal") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				className: TeamStage_module_css_default.crewShoeTrim,
				d: `M${at - 4} 97.5 L${at + 4} 96.5 M${at - 4} 99 L${at + 4} 98.2`
			});
			if (kind === "boot") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				className: TeamStage_module_css_default.crewShoeTrim,
				d: `M${at - 4.2} 83 H${at + 4.2} M${at - 4.2} 88 H${at + 4.2}`
			});
			if (kind === "hightop") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				className: TeamStage_module_css_default.crewShoeTrim,
				d: `M${at - 3.6} 89 H${at + 3.6} M${at - 3.6} 92.5 H${at + 3.6}`
			});
			if (kind === "loafer") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				className: TeamStage_module_css_default.crewShoeTrim,
				d: `M${at - 3.4} 96 H${at + 3.4}`
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				className: TeamStage_module_css_default.crewShoeTrim,
				d: `M${at - 3.6} 93.4 H${at + 3.6} M${at - 3} 95.6 H${at + 3}`
			});
		}
		/** The whale worn as a hood: flukes at the left, snout out to the right. */
		const WHALE = "M10 10 C10 -6 21 -16 37 -16 C51 -16 61 -8 65 2 C66.5 5 65 9 61 9.5 C52 11 44 15 36 20 C28 25 19 26 14 24 C10.5 22 10 17 10 10 Z";
		/** The flukes, one lobe over the back of the head and one below it. */
		const FLUKES = "M11 3 C5 -1 1 -7 0 -14 C6 -11 10 -6 13 -1 Z M10 14 C5 17 1 22 -1 28 C5 27 10 23 13.5 18 Z";
		/** The pale underside, from the throat to the tip of the jaw. */
		const BELLY = "M15 21 C21 24 29 23 36 19 C43 15 52 10.5 60 9.5 C52 15 44 19 36 22.5 C28 26 19 26 15 21 Z";
		/** The shirt: shoulders, a straight body, a hem over the hips. */
		const SHIRT = "M32 46 C40 46 45.5 50.5 46.5 58.5 L47.5 76 C47.5 79 45.8 80.5 42.8 80.5 L21.2 80.5 C18.2 80.5 16.5 79 16.5 76 L17.5 58.5 C18.5 50.5 24 46 32 46 Z";
		/** The seam over each shoulder, where the sleeve is set into the body. */
		const SHOULDER_SEAM = "M21.5 51.5 C23.5 55 24 60 24 64 M42.5 51.5 C40.5 55 40 60 40 64";
		/** The fold the hem falls into over the hips. */
		const HEM_FOLD = "M18 77.5 C24 79.5 40 79.5 46 77.5";
		/**
		* The back of the head is not a bald oval: whichever way a member is turned it
		* has hair on it, cut in one of the room's six styles. The cap is the mass
		* that shows either way; the back view fills in everything below it.
		*/
		const CAPS = {
			fringe: "M18 30 C18 18 23 11 32 11 C41 11 46 18 46 30 C46 33 44.5 35 42.5 35 C40 35 39 32 36 32 C33 32 32 35 29 35 C26 35 25 32 23 32 C21 32 19.5 34 18 34 Z",
			crop: "M18.5 28 C18.5 17.5 24 11 32 11 C40 11 45.5 17.5 45.5 28 C45.5 30.4 44.4 31.2 42.8 30.4 C40.6 29.3 39.4 26 32 26 C24.6 26 23.4 29.3 21.2 30.4 C19.6 31.2 18.5 30.4 18.5 28 Z",
			buzz: "M19 27 C19 17.5 24.5 11.5 32 11.5 C39.5 11.5 45 17.5 45 27 C45 28.6 44 29 43 28.2 C40.5 26 37 24.6 32 24.6 C27 24.6 23.5 26 21 28.2 C20 29 19 28.6 19 27 Z",
			curls: "M18 29 C18 18 23 11 32 11 C41 11 46 18 46 29 C46 32 44 33 42.6 31.6 C41.4 30.4 40.4 31.6 39 31 C37.6 30.4 37.4 28.6 35.6 28.6 C33.8 28.6 33.4 30.6 32 30.6 C30.6 30.6 30.2 28.6 28.4 28.6 C26.6 28.6 26.4 30.4 25 31 C23.6 31.6 22.6 30.4 21.4 31.6 C20 33 18 32 18 29 Z",
			bun: "M18.5 29 C18.5 18 23.5 11 32 11 C40.5 11 45.5 18 45.5 29 C45.5 31.5 44 33 42 32 C40 31 39 27 32 27 C25 27 24 31 22 32 C20 33 18.5 31.5 18.5 29 Z",
			ponytail: "M18.5 30 C18.5 18 23.5 11 32 11 C40.5 11 45.5 18 45.5 30 C45.5 32.5 44 33.5 42 32.5 C40 31.5 39 27.5 32 27.5 C25 27.5 24 31.5 22 32.5 C20 33.5 18.5 32.5 18.5 30 Z"
		};
		/** The mass of hair that only shows when you are looking at the back of a head. */
		const NAPE = "M19 27 C19 39.5 24 44.5 32 44.5 C40 44.5 45 39.5 45 27 Z";
		/** A soft highlight across the crown of the hair. */
		const HAIR_SHINE = "M24 21 C26 16 29 13.5 33 13 C30.5 16.5 28.5 20 27.5 24 Z";
		/** A cool highlight along the whale hood's back, so it reads as a smooth hood. */
		const HOOD_SHEEN = "M17 -3 C18 -10 23 -15 30 -16 C25 -12 21 -8 19 -2 Z";
		/** A soft shadow under the whale's jaw, where the hood meets the collar. */
		const HOOD_SHADE = "M14 21 C20 24.5 28 24.5 35 21.5 C42 18.5 50 14 59 11 C52 15.5 45 18.5 38 21 C30 23.8 21 24.5 14 21 Z";
		/** A ribbed hem across the bottom of a sweater. */
		const RIB_HEM = "M16.5 74 L47.5 74 L47.5 80.5 L16.5 80.5 Z";
		/** A kangaroo pocket across the front of a hoodie. */
		const POCKET = "M27 57 C29 53.5 35 53.5 37 57 L38 63 L26 63 Z";
		/** The hood lying around the neck of a hoodie. */
		const HOOD_FABRIC = "M24 44 C24 33 28 28.5 32 28.5 C36 28.5 40 33 40 44 L40 47 C36 48 28 48 24 47 Z";
		/** A knitted vest, open at the neck and stopping short of the hem. */
		const VEST = "M32 47 C38 47 42.5 50.5 43.5 57 L44.5 73 C44.5 75.5 43 76.5 40.5 76.5 L23.5 76.5 C21 76.5 19.5 75.5 19.5 73 L20.5 57 C21.5 50.5 26 47 32 47 Z M32 47 L27 56 L32 62 L37 56 Z";
		/** The two front panels of an open jacket. */
		const JACKET = "M23.5 47.5 C20.5 50 18.8 54.5 18.3 59 L17.4 76.5 L27 76.5 L29 52 Z M40.5 47.5 C43.5 50 45.2 54.5 45.7 59 L46.6 76.5 L37 76.5 L35 52 Z";
		/** The bib and straps of a pair of dungarees. */
		const BIB = "M25.5 58 H38.5 V72 H25.5 Z";
		/** The straps over the shoulders of a pair of dungarees. */
		const STRAPS = "M26 58 L23.5 48 M38 58 L40.5 48";
		/** Stripes across the front of a jersey. */
		const STRIPES = "M18 56 H46 M17.7 62 H46.3 M17.5 68 H46.5 M17.3 74 H46.7";
		/** What one kind wears behind the whale, so its base merges into the hood. */
		function behind(kind) {
			switch (kind) {
				case "orca": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHood,
					d: "M26 -12 C27 -22 32 -29 40 -32 C37 -24 33 -17 32 -12 Z"
				});
				case "humpback": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHood,
					d: "M43 16 C50 20 56 26 60 34 C58 24 52 17 45 13 Z"
				});
				case "narwhal": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewTusk,
					d: "M63 6 L81 -2"
				});
				case "sperm": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHood,
					d: "M40 -15 L58 -15 C62 -15 65 -12 65 -8 L65 9.5 C56 10.5 47 14 40 17 Z"
				});
				case "shark": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHood,
					d: "M36 -20 C38 -27 43 -32 51 -34 C48 -25 44 -18 40 -11 Z"
				});
				default: return null;
			}
		}
		/** What one kind adds over the whale. */
		function front(kind) {
			switch (kind) {
				case "orca": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
					className: TeamStage_module_css_default.crewPatch,
					cx: "47",
					cy: "-4",
					rx: "6.5",
					ry: "3.2",
					transform: "rotate(-16 47 -4)"
				});
				case "humpback": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: [
					[45, -6],
					[51, -2],
					[56, 1],
					[60, 3.5]
				].map(([x, y]) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
					className: TeamStage_module_css_default.crewKnob,
					cx: x,
					cy: y,
					r: "1.5"
				}, `${x}`)) });
				case "beluga": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewMelon,
					d: "M22 -9 C28 -18 42 -18 50 -11 C40 -12.5 29 -11.5 22 -9 Z"
				});
				case "shark": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewGill,
						d: "M39 5 C41.5 6.5 41.5 9.5 39 11"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewGill,
						d: "M43 4 C45.5 5.5 45.5 8.5 43 10"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewGill,
						d: "M47 3.5 C49 5 49 7.5 47 9"
					})
				] });
				case "blue": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewSpout,
						d: "M44 -15 C43 -21 42 -25 39 -28"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewSpout,
						d: "M44 -15 C46 -21 48 -24 52 -26"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewSpout,
						d: "M44 -15 C41 -19 38 -21 34 -22"
					})
				] });
				default: return null;
			}
		}
		/** The part of a hairstyle that hangs behind the head, drawn under the face. */
		function hairBehind(kind, back) {
			if (kind === "ponytail") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				className: TeamStage_module_css_default.crewHair,
				d: back ? "M32 24 C36 24 38 28 38 34 C38 42 36.5 48 34.5 52 L29.5 52 C31.5 48 33 42 33 34 C33 28 30 26 32 24 Z" : "M44 26 C48 28 50 33 49.5 39 C49 45 46.5 49 44 51 C46 46 46.5 40 45.5 35 C44.8 31 44 28 44 26 Z"
			});
			if (kind === "curls" && back) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				className: TeamStage_module_css_default.crewHair,
				d: "M17 30 C13.5 32 13 38 16 41 C18 43 20 42 20.5 39 Z M47 30 C50.5 32 51 38 48 41 C46 43 44 42 43.5 39 Z"
			});
			return null;
		}
		/** The part of a hairstyle that sits over everything, like a bun. */
		function hairAbove(kind) {
			if (kind !== "bun") return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
				className: TeamStage_module_css_default.crewHair,
				cx: "32",
				cy: "8",
				r: "6.2"
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				className: TeamStage_module_css_default.crewHairShine,
				d: "M28.5 5.5 C29.5 3.5 31.5 2.6 33.5 3 C31.5 3.6 30 4.6 29.4 6.4 Z"
			})] });
		}
		/**
		* Gear worn UNDER the hood. Headphones go on before the whale does: the band
		* runs over the head and the hood lies over it where they cross, so the cups
		* hang under the jaw instead of being glued to the outside of it.
		*/
		function headGearUnder(kind, back) {
			if (kind !== "headphones") return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
				className: TeamStage_module_css_default.crewCans,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewCansBand,
						d: "M16.5 31 C16.5 16 23.5 9 32 9 C40.5 9 47.5 16 47.5 31"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.crewCansCup,
						x: "12.6",
						y: "26",
						width: "8",
						height: "12",
						rx: "4"
					}),
					back && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.crewCansCup,
						x: "43.4",
						y: "26",
						width: "8",
						height: "12",
						rx: "4"
					})
				]
			});
		}
		/**
		* Gear worn OVER everything: glasses sit on the face, and the hood's jaw
		* stays clear of them, so the lenses read as lenses and not as a strip under
		* the whale's chin.
		*/
		function headGearOver(kind, back) {
			if (kind !== "glasses" || back) return null;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
				className: TeamStage_module_css_default.crewGlasses,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						x: "21",
						y: "26.6",
						width: "9.4",
						height: "7.4",
						rx: "3.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						x: "33.6",
						y: "26.6",
						width: "9.4",
						height: "7.4",
						rx: "3.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M30.4 29.8 H33.6 M21 29.4 L17.6 30.4 M43 29.4 L46.4 30.4" })
				]
			});
		}
		/** Whatever a member wears over its clothes. */
		function bodyGear(kind, back) {
			switch (kind) {
				case "scarf": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewScarf,
					d: "M23 45 C27 50 37 50 41 45 L42.5 53 C37 56.5 27 56.5 21.5 53 Z"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewScarf,
					d: back ? "M29 54 L27.5 68 L33 68.5 L34.5 54 Z" : "M39 54 L41.5 69 L36 69.5 L34.5 54 Z"
				})] });
				case "lanyard": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewCord,
						d: "M27 48 L31 62 M37 48 L33 62"
					}),
					!back && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.crewBadge,
						x: "28.6",
						y: "61",
						width: "6.8",
						height: "9",
						rx: "1.4"
					}),
					!back && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewBadgeLine,
						d: "M30 64.5 H34 M30 67 H33"
					})
				] });
				case "backpack": return back ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewPack,
					d: "M23 52 C23 48.5 26 47 32 47 C38 47 41 48.5 41 52 L41 70 C41 73 38.5 74 32 74 C25.5 74 23 73 23 70 Z"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewPackTrim,
					d: "M25 62 H39 M28 55 H36"
				})] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewStrap,
					d: "M25.5 48 C25 56 25.5 64 26.5 71 M38.5 48 C39 56 38.5 64 37.5 71"
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
					cx: "17.5",
					cy: "32",
					rx: "3.4",
					ry: "3.8"
				}),
				back && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
					className: TeamStage_module_css_default.crewEar,
					cx: "46.5",
					cy: "32",
					rx: "3.4",
					ry: "3.8"
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewFace,
					d: "M32 12 C41.5 12 46 20 46 29 C46 38.5 40 44 32 44 C24 44 18 38.5 18 29 C18 20 22.5 12 32 12 Z"
				}),
				back && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHair,
					d: NAPE
				}),
				!back && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewBrow,
						d: "M22 25.5 Q26 23 30.2 24.6"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewBrow,
						d: "M33.8 24.6 Q38 23 42 25.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewPupil,
						cx: "27",
						cy: "30",
						r: "1.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewPupil,
						cx: "37",
						cy: "30",
						r: "1.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewEyeGlint,
						cx: "27.6",
						cy: "29.4",
						r: "0.55"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewEyeGlint,
						cx: "37.6",
						cy: "29.4",
						r: "0.55"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewSmile,
						d: "M28.5 35.5 Q32 38.5 35.5 35.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewBlush,
						cx: "21.5",
						cy: "33",
						r: "1.9"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewBlush,
						cx: "42.5",
						cy: "33",
						r: "1.9"
					})
				] }),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHair,
					d: CAPS[hair]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewHairShine,
					d: HAIR_SHINE
				}),
				headGearUnder(gear, back),
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
						front(kind),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewHoodSheen,
							d: HOOD_SHEEN
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewHoodShade,
							d: HOOD_SHADE
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewEye,
							cx: "53",
							cy: "0",
							r: "2.6"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewPupil,
							cx: "53.7",
							cy: "0.4",
							r: "1.2"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.crewEyeGlint,
							cx: "54.2",
							cy: "-0.1",
							r: "0.45"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.crewMouth,
							d: "M49 9.6 C54 7.7 59 6.1 63 5.7"
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
				case "shirt": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewCollar,
						d: "M25.5 48.5 C28 52.5 36 52.5 38.5 48.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewPlacket,
						d: "M32 50 L32 79"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewButton,
						cx: "32",
						cy: "55",
						r: "0.8"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewButton,
						cx: "32",
						cy: "63",
						r: "0.8"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewButton,
						cx: "32",
						cy: "71",
						r: "0.8"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewStitch,
						d: "M38 57 H44 V64 H38 Z"
					})
				] });
				case "polo": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewCollar,
						d: "M25.5 48.5 C28 52.5 36 52.5 38.5 48.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewPlacket,
						d: "M32 49 L32 60"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewButton,
						cx: "32",
						cy: "54",
						r: "0.8"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewButton,
						cx: "32",
						cy: "58.5",
						r: "0.8"
					})
				] });
				case "tee": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewNeckBand,
					d: "M25 48 C28 51.5 36 51.5 39 48 C38 53 26 53 25 48 Z"
				});
				case "sweater": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewNeckBand,
					d: "M24.5 46.5 C28 51 36 51 39.5 46.5 C38 53.5 26 53.5 24.5 46.5 Z"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewRib,
					d: RIB_HEM
				})] });
				case "hoodie": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewDraw,
						d: "M29 47 L30.5 55"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewDraw,
						d: "M35 47 L33.5 55"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewPocket,
						d: POCKET
					})
				] });
				case "tunic": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewStitch,
					d: "M21 50 L21 78 M43 50 L43 78"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewBelt,
					d: "M18 68 Q32 72 46 68"
				})] });
				case "vest": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewCollar,
						d: "M25.5 48.5 C28 52.5 36 52.5 38.5 48.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewVest,
						d: VEST
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewRib,
						d: "M19.5 73 L44.5 73 L44.5 76.5 L19.5 76.5 Z"
					})
				] });
				case "jacket": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewJacket,
						d: JACKET
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewCollar,
						d: "M24 48 L29 52 M40 48 L35 52"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewButton,
						cx: "28",
						cy: "62",
						r: "0.9"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewButton,
						cx: "28",
						cy: "70",
						r: "0.9"
					})
				] });
				case "stripes": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewNeckBand,
					d: "M25 48 C28 51.5 36 51.5 39 48 C38 53 26 53 25 48 Z"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewStripes,
					d: STRIPES
				})] });
				default: return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.crewNeckBand,
						d: "M25 48 C28 51.5 36 51.5 39 48 C38 53 26 53 25 48 Z"
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
						cx: "26.6",
						cy: "58.6",
						r: "0.9"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.crewButton,
						cx: "37.4",
						cy: "58.6",
						r: "0.9"
					})
				] });
			}
		}
		/** What one outfit adds over the plain body, seen from behind. */
		function outfitBack(outfit) {
			switch (outfit) {
				case "shirt":
				case "polo": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewCollar,
					d: "M25 49 L39 49"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewStitch,
					d: "M26 57 C29 60 35 60 38 57"
				})] });
				case "sweater":
				case "vest": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewRib,
					d: RIB_HEM
				});
				case "jacket": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewStitch,
					d: "M32 48 L32 79"
				});
				case "stripes": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewStripes,
					d: STRIPES
				});
				case "dungarees": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
					className: TeamStage_module_css_default.crewDraw,
					d: "M26 76 L23.5 48 M38 76 L40.5 48"
				});
				default: return null;
			}
		}
		/**
		* One member of the crew.
		* @param props - the whale it wears, whether you are behind it, whether only
		* the head is wanted (a portrait), and everything it is dressed in.
		* @returns the character.
		*/
		function Crew(props) {
			const { kind, className, back = false, portrait = false, outfit = "shirt", shoes = "sneaker", hair = "crop", gear = "none", tone = 0, skin = 0 } = props;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: `${TeamStage_module_css_default.crew} ${className ?? ""}`,
				viewBox: portrait ? "-1 -20 70 70" : "-6 -26 80 134",
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
								x: "22.5",
								y: "70",
								width: "8.6",
								height: "27",
								rx: "3.8"
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
								x: "32.9",
								y: "70",
								width: "8.6",
								height: "27",
								rx: "3.8"
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
								x: "12",
								y: "53",
								width: "7.8",
								height: "22",
								rx: "3.9"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.crewCuff,
								d: "M12 71.5 H19.8"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
								className: TeamStage_module_css_default.crewHand,
								cx: "15.9",
								cy: "76.5",
								r: "3.8"
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("g", {
						className: TeamStage_module_css_default.crewArmFront,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
								className: TeamStage_module_css_default.crewSleeve,
								x: "44.2",
								y: "53",
								width: "7.8",
								height: "22",
								rx: "3.9"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.crewCuff,
								d: "M44.2 71.5 H52"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
								className: TeamStage_module_css_default.crewHand,
								cx: "48.1",
								cy: "76.5",
								r: "3.8"
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						className: TeamStage_module_css_default.crewNeck,
						x: "28.2",
						y: "40",
						width: "7.6",
						height: "11",
						rx: "3.2"
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
		}
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
		/** A split leaf: two notches cut into each side of a broad heart. */
		const MONSTERA = "M0 -2 C-4 -10 -12 -13 -17 -17 L-9 -19 C-13 -23 -19 -25 -22 -30 L-11.5 -30.5 C-16 -36 -14 -42 0 -46 C14 -42 16 -36 11.5 -30.5 L22 -30 C19 -25 13 -23 9 -19 L17 -17 C12 -13 4 -10 0 -2 Z";
		/** The midrib of a split leaf, with a pair of ribs running into each lobe. */
		const MONSTERA_VEIN = "M0 -3 L0 -42 M0 -14 L-14 -18 M0 -14 L14 -18 M0 -24 L-17 -29 M0 -24 L17 -29 M0 -33 L-11 -38 M0 -33 L11 -38";
		/** An upright sword, thickest at the middle and drawn to a point. */
		const SWORD = "M0 0 C-5 -7 -7.5 -22 -6.5 -36 C-5.5 -48 -3 -56 0 -60 C3 -56 5.5 -48 6.5 -36 C7.5 -22 5 -7 0 0 Z";
		/** The pale stripe up the edge of a snake plant's blade. */
		const SWORD_EDGE = "M4.6 -12 C6 -24 6.4 -40 3.4 -52 C5.4 -42 5 -26 3 -12 Z";
		/** A heart, hanging point-down the way a trailing leaf does. */
		const HEART = "M0 0 C-8 -4 -13 -10 -13 -16.5 C-13 -22 -8.5 -25 -4.5 -23 C-2 -21.6 -0.6 -19.4 0 -17.4 C0.6 -19.4 2 -21.6 4.5 -23 C8.5 -25 13 -22 13 -16.5 C13 -10 8 -4 0 0 Z";
		/** The midrib of a hanging heart. */
		const HEART_VEIN = "M0 -2 L0 -18 M0 -8 L-7 -14 M0 -8 L7 -14";
		/** A plain oval leaf, for a plant whose interest is in how many it has. */
		const OVAL = "M0 0 C-6 -5 -9 -11 -9 -17 C-9 -23 -5 -27 0 -28 C5 -27 9 -23 9 -17 C9 -11 6 -5 0 0 Z";
		/** A long frond, tapering to a point. */
		const FROND = "M0 0 C-3.5 -14 -6 -28 -4 -42 L0 -50 L4 -42 C6 -28 3.5 -14 0 0 Z";
		/** The leaflets combed off both sides of a frond. */
		const FROND_VEIN = "M0 -2 L0 -47 M0 -10 L-5.5 -16 M0 -10 L5.5 -16 M0 -19 L-6 -25 M0 -19 L6 -25 M0 -28 L-5.5 -34 M0 -28 L5.5 -34 M0 -36 L-4 -41 M0 -36 L4 -41";
		/** A ribbed column, for the one plant in the room nobody has to water. */
		const COLUMN = "M0 0 C-9.5 0 -12.5 -5 -12.5 -15 L-12.5 -34 C-12.5 -45 -8 -50 0 -50 C8 -50 12.5 -45 12.5 -34 L12.5 -15 C12.5 -5 9.5 0 0 0 Z";
		/** A shorter column, for an arm off the side of one. */
		const LIMB = "M0 0 C-6.5 0 -8.5 -3.5 -8.5 -10 L-8.5 -22 C-8.5 -30 -5.5 -33.5 0 -33.5 C5.5 -33.5 8.5 -30 8.5 -22 L8.5 -10 C8.5 -3.5 6.5 0 0 0 Z";
		/** The ribs down a cactus, and the ones down its arms. */
		const RIBS = "M-6 -6 C-7.5 -18 -7.5 -32 -6 -43 M0 -4 L0 -47 M6 -6 C7.5 -18 7.5 -32 6 -43";
		/** The blades of one kind, back layer first. */
		function bladesOf(kind) {
			switch (kind) {
				case "monstera": return [
					{
						d: MONSTERA,
						at: "translate(50 82) rotate(-38) scale(0.86)",
						vein: MONSTERA_VEIN
					},
					{
						d: MONSTERA,
						at: "translate(50 82) rotate(36) scale(0.9)",
						vein: MONSTERA_VEIN
					},
					{
						d: MONSTERA,
						at: "translate(50 80) rotate(-14) scale(1.02)",
						lit: true,
						vein: MONSTERA_VEIN
					},
					{
						d: MONSTERA,
						at: "translate(50 80) rotate(16) scale(0.94)",
						lit: true,
						vein: MONSTERA_VEIN
					},
					{
						d: MONSTERA,
						at: "translate(50 78) rotate(2) scale(0.74)",
						lit: true,
						vein: MONSTERA_VEIN
					}
				];
				case "sansevieria": return [
					{
						d: SWORD,
						at: "translate(50 84) rotate(-22) scale(0.82)"
					},
					{
						d: SWORD,
						at: "translate(50 84) rotate(20) scale(0.88)"
					},
					{
						d: SWORD,
						at: "translate(50 84) rotate(-8) scale(1)",
						lit: true,
						vein: SWORD_EDGE
					},
					{
						d: SWORD,
						at: "translate(50 84) rotate(7) scale(0.94)",
						lit: true,
						vein: SWORD_EDGE
					},
					{
						d: SWORD,
						at: "translate(50 84) rotate(-15) scale(0.66)",
						lit: true,
						vein: SWORD_EDGE
					}
				];
				case "pothos": return [
					{
						d: SWORD,
						at: "translate(50 82) rotate(-10) scale(0.5)"
					},
					{
						d: SWORD,
						at: "translate(50 82) rotate(12) scale(0.44)",
						lit: true
					},
					{
						d: HEART,
						at: "translate(28 84) rotate(196) scale(0.78)",
						hang: true,
						vein: HEART_VEIN
					},
					{
						d: HEART,
						at: "translate(22 96) rotate(184) scale(0.7)",
						hang: true,
						lit: true,
						vein: HEART_VEIN
					},
					{
						d: HEART,
						at: "translate(74 86) rotate(166) scale(0.76)",
						hang: true,
						vein: HEART_VEIN
					},
					{
						d: HEART,
						at: "translate(80 99) rotate(176) scale(0.66)",
						hang: true,
						lit: true,
						vein: HEART_VEIN
					},
					{
						d: HEART,
						at: "translate(50 70) rotate(180) scale(0.6)",
						hang: true,
						lit: true,
						vein: HEART_VEIN
					}
				];
				case "cactus": return [
					{
						d: LIMB,
						at: "translate(30 62) rotate(-24)",
						vein: RIBS
					},
					{
						d: LIMB,
						at: "translate(70 58) rotate(22) scale(0.9)",
						vein: RIBS
					},
					{
						d: COLUMN,
						at: "translate(50 82)",
						lit: true,
						vein: RIBS
					}
				];
				case "ficus": return [
					{
						d: OVAL,
						at: "translate(36 56) rotate(-40)"
					},
					{
						d: OVAL,
						at: "translate(64 54) rotate(42)"
					},
					{
						d: OVAL,
						at: "translate(32 70) rotate(-62) scale(0.86)"
					},
					{
						d: OVAL,
						at: "translate(68 68) rotate(64) scale(0.86)"
					},
					{
						d: OVAL,
						at: "translate(44 42) rotate(-16)",
						lit: true
					},
					{
						d: OVAL,
						at: "translate(58 40) rotate(18)",
						lit: true
					},
					{
						d: OVAL,
						at: "translate(50 32) rotate(0) scale(0.9)",
						lit: true
					}
				];
				default: return [
					{
						d: FROND,
						at: "translate(50 82) rotate(-52) scale(0.92)",
						vein: FROND_VEIN
					},
					{
						d: FROND,
						at: "translate(50 82) rotate(50) scale(0.96)",
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
						at: "translate(50 80) rotate(24) scale(0.96)",
						lit: true,
						vein: FROND_VEIN
					},
					{
						d: FROND,
						at: "translate(50 78) rotate(-2) scale(0.88)",
						lit: true,
						vein: FROND_VEIN
					}
				];
			}
		}
		/** The woody stems a kind shows between the soil and its foliage. */
		function stemsOf(kind) {
			switch (kind) {
				case "monstera": return "M50 84 C46 72 40 66 34 62 M50 84 C54 72 60 68 65 64 M50 84 L50 66";
				case "ficus": return "M50 84 L50 40 M50 68 C46 62 42 58 37 55 M50 66 C54 60 59 56 63 53 M50 56 C47 50 45 46 43 43 M50 54 C53 48 55 45 57 42";
				case "pothos": return "M48 82 C40 80 32 82 28 86 M52 82 C60 80 68 82 74 88 M28 86 C24 90 22 94 22 97 M74 88 C78 92 80 96 80 100";
				case "palm": return "M50 84 C48 78 44 72 38 66 M50 84 C52 78 56 72 62 66";
				default: return;
			}
		}
		/**
		* One plant, pot and all.
		* @param props - which kind it is, and the class the room sizes it with.
		* @returns the plant.
		*/
		function Plant(props) {
			const { kind, className } = props;
			const blades = bladesOf(kind);
			const stems = stemsOf(kind);
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
						cy: "121",
						rx: "27",
						ry: "5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.floraSaucer,
						d: "M29 116 H71 Q75 116 75 119.5 Q75 123 71 123 H29 Q25 123 25 119.5 Q25 116 29 116 Z"
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
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: blade.lit === true ? TeamStage_module_css_default.floraBladeLit : TeamStage_module_css_default.floraBlade,
								d: blade.d
							}), blade.vein !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.floraVein,
								d: blade.vein
							})]
						})
					}, `${blade.at}-${index}`)),
					kind === "cactus" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
							className: TeamStage_module_css_default.floraSpine,
							d: "M42 44 L38 41 M42 54 L38 51 M42 64 L38 61 M58 42 L62 39 M58 52 L62 49 M58 62 L62 59"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.floraBloom,
							cx: "50",
							cy: "31",
							r: "3.6"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
							className: TeamStage_module_css_default.floraBloomHeart,
							cx: "50",
							cy: "31",
							r: "1.5"
						})
					] }),
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
						d: "M36 92 C33.5 101 34 110 36.5 117 L40 117 C37.5 109 37 101 39 92 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.floraRim,
						d: "M25 79 H75 Q78 79 78 82 V86 Q78 89 75 89 H25 Q22 89 22 86 V82 Q22 79 25 79 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.floraRimLip,
						d: "M24 80.5 H76"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.floraSoil,
						cx: "50",
						cy: "81.5",
						rx: "24",
						ry: "4"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.floraCrumb,
						cx: "40",
						cy: "81",
						r: "1.4"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.floraCrumb,
						cx: "59",
						cy: "82.5",
						r: "1.1"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.floraCrumb,
						cx: "52",
						cy: "79.6",
						r: "0.9"
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
		* The water cooler: a bottled jug on a cabinet with a real lid and flank, its
		* own water line, two taps and a drip tray that reads as a tray because it is
		* drawn as an ellipse seen from above rather than as a bar.
		* @returns the cooler.
		*/
		function CoolerFigure() {
			const uid = safeId((0, react.useId)());
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.coolerSvg,
				viewBox: "0 0 72 100",
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
									offset: "0.3",
									style: { stopColor: "var(--team-cooler-bottle)" }
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("stop", {
									offset: "0.66",
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
						cx: "34",
						cy: "92",
						rx: "26",
						ry: "6"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSide,
						d: "M52 48 L62 41 L62 84 Q62 88 58 90 L52 90 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerCabinet,
						d: "M12 48 H52 V85 Q52 90 47 90 H17 Q12 90 12 85 Z",
						fill: `url(#${uid}-cabinet)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propTop,
						d: "M12 48 L22 41 H62 L52 48 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerCabinetEdge,
						d: "M12 48 H52 V85 Q52 90 47 90 H17 Q12 90 12 85 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerPanel,
						d: "M17 58 H47 V80 H17 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerDoorSeam,
						d: "M32 58 V80"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerTap,
						d: "M22 62 H30 M34 62 H42"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerHandleWarm,
						cx: "26",
						cy: "59",
						r: "2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerHandleCool,
						cx: "38",
						cy: "59",
						r: "2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.coolerDrip,
						cx: "32",
						cy: "84",
						rx: "15",
						ry: "3.4"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.coolerDripWell,
						cx: "32",
						cy: "83.6",
						rx: "12",
						ry: "2.2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerBottle,
						d: "M19 48 C19 33 22.5 21 28 14 L40 14 C45.5 21 49 33 49 48 Z",
						fill: `url(#${uid}-bottle)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerWater,
						d: "M21 48 C21 35.5 23.8 24 28.3 18.5 L39.7 18.5 C44.2 24 47 35.5 47 48 Z",
						fill: `url(#${uid}-water)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerNeck,
						d: "M28 14 L28 6 C28 4.5 29 3.5 30.5 3.5 L37.5 3.5 C39 3.5 40 4.5 40 6 L40 14 Z",
						fill: `url(#${uid}-bottle)`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ellipse", {
						className: TeamStage_module_css_default.coolerCap,
						cx: "34",
						cy: "3",
						rx: "8",
						ry: "2.6"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.coolerShine,
						d: "M22.5 46 C22.5 34.5 25.3 23.5 30 17 C27.2 23 24.5 32.5 24.5 46 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerBubble,
						cx: "28",
						cy: "34",
						r: "1",
						style: { animationDelay: "0s" }
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerBubble,
						cx: "39",
						cy: "39",
						r: "1.3",
						style: { animationDelay: "-1.7s" }
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerBubble,
						cx: "33",
						cy: "29",
						r: "0.8",
						style: { animationDelay: "-3.1s" }
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.coolerBubble,
						cx: "43",
						cy: "30",
						r: "0.9",
						style: { animationDelay: "-4.4s" }
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
								className: TeamStage_module_css_default.chairLumbar,
								d: "M20 30 C24 27.5 40 27.5 44 30 L44 37 C40 40 24 40 20 37 Z",
								fill: `url(#${uid}-shell)`
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.chairPan,
								d: "M15 52 H49 Q52 52 52 55 L50 61 Q49.5 63 47 63 H17 Q14.5 63 14 61 L12 55 Q12 52 15 52 Z"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
								className: TeamStage_module_css_default.chairPanTop,
								d: "M15 52 H49 Q52 52 52 54.5 H12 Q12 52 15 52 Z"
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
						className: TeamStage_module_css_default.propPaper,
						d: "M32 16 L41 10.5 H60 L51 16 Z"
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
						className: TeamStage_module_css_default.propInset,
						d: "M12 52 H58 V64 H12 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSeam,
						d: "M12 58 H58"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.propLampLive,
						cx: "52",
						cy: "30",
						r: "2"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.propLampIdle,
						cx: "45",
						cy: "30",
						r: "2"
					})
				]
			});
		}
		/**
		* The coffee machine: a hopper, a group head with a cup under it, and a jug on
		* a warmer plate. Somebody's mug is on top, because somebody's mug always is.
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
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propSeam,
						d: "M20 42 H40"
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
						className: TeamStage_module_css_default.propCup,
						d: "M25 55 H35 L33.5 62 Q33 63.5 30 63.5 Q27 63.5 26.5 62 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propTray,
						d: "M14 78 H46 V81 H14 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propGlass,
						d: "M20 66 H40 L38 77 H22 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.propBrew,
						d: "M21.4 71 H38.6 L38 77 H22 Z"
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
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				className: TeamStage_module_css_default.pendantSvg,
				viewBox: "0 0 60 100",
				"aria-hidden": true,
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.pendantFlex,
						d: "M30 0 V74"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.pendantGlow,
						d: "M30 88 L58 100 H2 Z"
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
						d: "M12 24 C4 22 2 14 7 9 C5 15 8 20 13 20 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catBody,
						d: "M14 22 C14 15 20 12 30 12 C41 12 47 15 47 22 L47 30 C47 34 44 36 40 36 L21 36 C17 36 14 34 14 30 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catLeg,
						d: "M20 32 H24 V37 H20 Z M28 32 H32 V37 H28 Z M36 32 H40 V37 H36 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catBody,
						d: "M44 16 C51 16 55 20 55 25 C55 30 51 33 45 33 C41 33 39 30 39 25 C39 20 41 16 44 16 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catEar,
						d: "M42 17 L41 9 L48 14 Z M52 14 L57 9 L57 17 Z"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.catEye,
						cx: "48",
						cy: "24",
						r: "1.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
						className: TeamStage_module_css_default.catEye,
						cx: "54",
						cy: "24",
						r: "1.5"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catWhisker,
						d: "M52 28 L60 26 M52 29 L60 30"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: TeamStage_module_css_default.catStripe,
						d: "M22 14 L24 20 M29 13 L31 19 M36 14 L38 20"
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
		/** A member as a tiny portrait: its own mask in its own accent. */
		function Cameo(props) {
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
		}
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
			const sessions = useSessions((snapshot) => snapshot);
			/** The member the pointer is over, anywhere on the stage. */
			const [focus, setFocus] = (0, react.useState)(void 0);
			/** Which ledger the drawer is showing; the room stands alone by default. */
			const [panel, setPanel] = (0, react.useState)(void 0);
			const { leaderId, currentId, members, tasks, messages, board, boardAt } = state;
			const visit = useVisit(messages[messages.length - 1]);
			(0, react.useEffect)(() => holdComposer?.(), [holdComposer]);
			const running = (0, react.useMemo)(() => new Set(members.filter((member) => sessions.byId[member.memberId]?.running === true).map((member) => member.memberId)), [members, sessions.byId]);
			/** The last thing the visible mailbox tail says about each member. */
			const touched = (0, react.useMemo)(() => {
				const out = /* @__PURE__ */ new Map();
				for (const message of messages.slice(-4)) {
					if (message.from !== void 0) out.set(message.from, message.kind === "message" ? "sent" : "reported");
					if (message.to !== void 0) out.set(message.to, "got");
				}
				return out;
			}, [messages]);
			/** Mail counted as read: everything that had arrived when the feed was last open. */
			const seenMessages = (0, react.useRef)(messages.length);
			(0, react.useEffect)(() => {
				if (panel === "feed") seenMessages.current = messages.length;
			}, [panel, messages.length]);
			const freshMail = panel !== "feed" && messages.length > seenMessages.current;
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
			const names = /* @__PURE__ */ new Map([[leaderId, t("member.leader")]]);
			for (const member of members) names.set(member.memberId, member.name);
			/** Roster seat per member id, so the ledgers can draw the same cast. */
			const seats = /* @__PURE__ */ new Map([[leaderId, -1]]);
			members.forEach((member, index) => seats.set(member.memberId, index));
			const openOf = (memberId) => tasks.filter((task) => task.assigneeId === memberId && task.status !== "done").length;
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
			/**
			* Where one piece of the break corner stands, and how large it draws there.
			* A piece is placed by its OWN plan rectangle — the same rectangle a walk
			* goes around — so the furniture it is drawn as and the furniture it is
			* walked around as are the same furniture, and it can never creep off the
			* floor and up a wall.
			*/
			const loungePiece = (rect) => {
				const screen = project({
					x: rect.x + rect.w / 2,
					y: rect.y + rect.h / 2
				});
				return {
					left: `${screen.left}%`,
					top: `${screen.top}%`,
					width: `${Math.round(rect.w * screen.scale * 100) / 100}%`,
					height: `${Math.round(rect.h * screen.scale * 100) / 100}%`,
					"--team-depth": Math.round(rect.y + rect.h / 2)
				};
			};
			/** The rug and the floor lamp are furniture too, so they get plan rects. */
			const rugRect = {
				x: 70.5,
				y: 53.5,
				w: 21,
				h: 7.5
			};
			const lampRect = {
				x: 70,
				y: 47.5,
				w: 3,
				h: 7
			};
			const [sofaBlock, tableBlock, plantBlock, coolerBlock] = ROOM_BLOCKS;
			const peers = members.filter((member) => member.relation === "peer");
			const openTasks = tasks.filter((task) => task.status !== "done").length;
			const leaderRunning = sessions.byId[leaderId]?.running === true;
			/** The delivery on its feet: who carries it, to whom, and where they meet. */
			const errand = errandOf(visit, leaderId, homes);
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
					onOpen: () => {
						if (member === void 0) openLeader(leaderId);
						else openMember(leaderId, id);
					},
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
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(RoomWall, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: TeamStage_module_css_default.pendant,
										style: { left: `${onWall(50)}%` },
										"aria-hidden": true,
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PendantFigure, {})
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: TeamStage_module_css_default.utility,
										style: at({
											x: 3.5,
											y: 31
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
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: TeamStage_module_css_default.cat,
										"data-prop": "cat",
										"aria-hidden": true,
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CatFigure, {})
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: TeamStage_module_css_default.lounge,
										"aria-hidden": true,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: TeamStage_module_css_default.rug,
												"data-prop": "rug",
												style: loungePiece(rugRect)
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: TeamStage_module_css_default.sofa,
												"data-prop": "sofa",
												style: loungePiece(sofaBlock)
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: TeamStage_module_css_default.table,
												"data-prop": "table",
												style: loungePiece(tableBlock)
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: TeamStage_module_css_default.lamp,
												"data-prop": "lamp",
												style: loungePiece(lampRect)
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: TeamStage_module_css_default.plant,
												"data-prop": "plant",
												style: loungePiece(plantBlock),
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Plant, { kind: plantOf(0) })
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: TeamStage_module_css_default.cooler,
												"data-prop": "cooler",
												style: loungePiece(coolerBlock),
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CoolerFigure, {})
											})
										]
									}),
									roster.map((id, index) => {
										const seat = index - 1;
										const desk = desks.get(id) ?? deskOf(index, roster.length);
										const live = seat < 0 ? leaderRunning : running.has(id);
										return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Workstation, {
											id,
											desk,
											seat,
											pose: poseFor(live, touched.get(id), openOf(id)),
											line: screenLineOf(id, tasks, messages),
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
											focus,
											onFocus: (onFocus) => {
												setFocus(onFocus);
											}
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
		* What one member's monitor is showing: the task it is on, or the last thing
		* that was said to it. A screen with nothing on it is a screen switched off.
		*/
		function screenLineOf(memberId, tasks, messages) {
			const active = tasks.find((task) => task.assigneeId === memberId && task.status === "active") ?? tasks.find((task) => task.assigneeId === memberId && task.status !== "done");
			if (active !== void 0) return short(active.title, 34);
			const inbound = [...messages].reverse().find((message) => message.to === memberId);
			return inbound === void 0 ? void 0 : short(inbound.text, 34);
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
						className: TeamStage_module_css_default.whiteboard,
						"data-prop": "whiteboard",
						style: { left: `${onWall(16)}%` },
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
						style: { left: `${onWall(25)}%` },
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.hangerBracket }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Plant, {
							kind: "pothos",
							className: TeamStage_module_css_default.hangerPlant
						})]
					}),
					[30, 62].map((where) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
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
						style: { left: `${onWall(46)}%` },
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
						style: { left: `${onWall(74)}%` },
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
						className: TeamStage_module_css_default.poster,
						"data-prop": "poster",
						style: { left: `${onWall(86)}%` },
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.posterArt })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: TeamStage_module_css_default.calendar,
						"data-prop": "calendar",
						style: { left: `${onWall(8)}%` },
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.calendarHead }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: TeamStage_module_css_default.calendarGrid })]
					})
				]
			});
		}
		/**
		* One workstation: the desk, the computer on it, the keyboard and the mug. It
		* belongs to the member whose desk it is and stays furnished while its owner
		* is away — a member walks off, its screen keeps working.
		*/
		function Workstation(props) {
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
		}
		/** One member of the team, standing — or walking — where its own state puts it. */
		function MemberTile(props) {
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
				onClick: onOpen,
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
		}
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
			(0, react.useEffect)(() => {
				const node = scroller.current;
				if (node !== null) node.scrollTop = node.scrollHeight;
			}, [messages.length]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: TeamStage_module_css_default.feed,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: TeamStage_module_css_default.crewList,
						"aria-label": t("feed.crew"),
						children: roster.map((row) => {
							const latest = latestOf(row.id, messages);
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
										children: latest === void 0 ? t("feed.quiet") : `${latest.way === "got" ? "←" : "→"} ${short(latest.text, 40)}`
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
						children: messages.map((message, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LogRow, {
							message,
							index,
							names,
							seats,
							leaderLabel,
							focus,
							onFocus,
							t
						}, message.messageId))
					})
				]
			});
		}
		/** The newest traffic naming one member, and which way it went. */
		function latestOf(memberId, messages) {
			for (let index = messages.length - 1; index >= 0; index -= 1) {
				const message = messages[index];
				if (message === void 0) continue;
				if (message.from === memberId) return {
					text: message.text,
					way: "sent"
				};
				if (message.to === memberId) return {
					text: message.text,
					way: "got"
				};
			}
		}
		/** One row of the log: who said what to whom, on one line, cut to fit. */
		function LogRow(props) {
			const { message, index, names, seats, leaderLabel, focus, onFocus, t } = props;
			const label = (id) => id === void 0 ? leaderLabel : names.get(id) ?? id.slice(0, 6);
			const partner = message.from ?? message.to;
			const author = label(message.from);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: TeamStage_module_css_default.logRow,
				"data-message-kind": message.kind,
				"data-hop": message.hop === void 0 ? void 0 : String(message.hop),
				"data-focus": partner !== void 0 && focus === partner ? "true" : void 0,
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
		}
		/** One note pinned to the shared workspace, as the leader last saw it. */
		function NoteCard(props) {
			const { entry, index, seats, focus, onFocus } = props;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: TeamStage_module_css_default.note,
				"data-note-key": entry.key,
				"data-focus": focus === entry.authorId ? "true" : void 0,
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
		}
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
							}), task.assigneeId === void 0 ? t("task.unassigned") : names.get(task.assigneeId) ?? task.assigneeId.slice(0, 6)]
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
			"member.here": "你正在看这个会话",
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
			"member.here": "You are reading this session",
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
					});
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
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map