"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ViewMoreButton: () => ViewMoreButton
});
module.exports = __toCommonJS(index_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function ViewMoreButton({ text, href }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 mb-10 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "a",
    {
      href,
      className: "group border-slate-200 text-slate-500/30 hover:text-slate-300 inline-flex items-center gap-2 rounded-md border bg-slate-900/20 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-slate-800/50",
      children: [
        "View all ",
        text
      ]
    }
  ) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ViewMoreButton
});
