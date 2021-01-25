"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeSecurityGroups = describeSecurityGroups;

var _execPromise = _interopRequireDefault(require("../helpers/execPromise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function describeSecurityGroups(_x) {
  return _describeSecurityGroups.apply(this, arguments);
}

function _describeSecurityGroups() {
  _describeSecurityGroups = _asyncToGenerator(function* (_ref) {
    var {
      region,
      securityGroupId
    } = _ref;
    return (0, _execPromise.default)("aws ec2 describe-security-groups --region ".concat(region, " --group-ids ").concat(securityGroupId));
  });
  return _describeSecurityGroups.apply(this, arguments);
}