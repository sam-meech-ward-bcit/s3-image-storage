"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = describeService;

var _child_process = require("child_process");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function describeService(_x) {
  return _describeService.apply(this, arguments);
}

function _describeService() {
  _describeService = _asyncToGenerator(function* (cmd) {
    return new Promise((resolve, reject) => {
      (0, _child_process.exec)(cmd, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }

        if (stderr) {
          resolve(stderr);
          return;
        }

        resolve(stdout);
      });
    });
  });
  return _describeService.apply(this, arguments);
}