"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(input) {
  return Object.fromEntries(input.trim().split(/\n/g).filter(a => a).map(a => a.split("=").map(a => a.trim())));
}