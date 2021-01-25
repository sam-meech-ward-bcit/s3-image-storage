"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeService = describeService;

var _equalsToObject = _interopRequireDefault(require("../helpers/equalsToObject"));

var _execPromise = _interopRequireDefault(require("../helpers/execPromise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function describeService(_x) {
  return _describeService.apply(this, arguments);
}

function _describeService() {
  _describeService = _asyncToGenerator(function* (service) {
    return (0, _execPromise.default)("sudo systemctl show ".concat(service)).then(_equalsToObject.default);
  });
  return _describeService.apply(this, arguments);
}