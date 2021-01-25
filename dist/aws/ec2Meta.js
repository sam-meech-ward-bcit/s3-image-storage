"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ec2Meta = ec2Meta;
exports.ipv4 = ipv4;
exports.instanceId = instanceId;
exports.iam = iam;
exports.hostname = hostname;
exports.mac = mac;
exports.securityGroupId = securityGroupId;
exports.availabilityZone = availabilityZone;
exports.region = region;

var _axios = _interopRequireDefault(require("axios"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var baseURL = "http://169.254.169.254/latest/meta-data";

var instance = _axios.default.create({
  baseURL,
  timeout: 1000
});

function ec2Meta() {
  return _ec2Meta.apply(this, arguments);
}

function _ec2Meta() {
  _ec2Meta = _asyncToGenerator(function* () {
    var result = yield instance.get();
    return result.data;
  });
  return _ec2Meta.apply(this, arguments);
}

function ipv4() {
  return _ipv.apply(this, arguments);
}

function _ipv() {
  _ipv = _asyncToGenerator(function* () {
    var result = yield instance.get('/local-ipv4');
    return result.data;
  });
  return _ipv.apply(this, arguments);
}

function instanceId() {
  return _instanceId.apply(this, arguments);
}

function _instanceId() {
  _instanceId = _asyncToGenerator(function* () {
    var result = yield instance.get('/instance-id');
    return result.data;
  });
  return _instanceId.apply(this, arguments);
}

function iam() {
  return _iam.apply(this, arguments);
}

function _iam() {
  _iam = _asyncToGenerator(function* () {
    var result = yield instance.get('/iam/info');
    return result.data;
  });
  return _iam.apply(this, arguments);
}

function hostname() {
  return _hostname.apply(this, arguments);
} // export async function iam() {
//   const result = await instance.get('/iam/info')
//   return result.data
// }


function _hostname() {
  _hostname = _asyncToGenerator(function* () {
    var result = yield instance.get('/hostname');
    return result.data;
  });
  return _hostname.apply(this, arguments);
}

function mac() {
  return _mac.apply(this, arguments);
}

function _mac() {
  _mac = _asyncToGenerator(function* () {
    var result = yield instance.get('/network/interfaces/macs');
    return result.data.replace("/", "");
  });
  return _mac.apply(this, arguments);
}

function securityGroupId() {
  return _securityGroupId.apply(this, arguments);
}

function _securityGroupId() {
  _securityGroupId = _asyncToGenerator(function* () {
    var m = yield mac();
    var result = yield instance.get("/network/interfaces/macs/".concat(m, "/security-group-ids"));
    return result.data;
  });
  return _securityGroupId.apply(this, arguments);
}

function availabilityZone() {
  return _availabilityZone.apply(this, arguments);
}

function _availabilityZone() {
  _availabilityZone = _asyncToGenerator(function* () {
    var result = yield instance.get('/placement/availability-zone');
    return result.data;
  });
  return _availabilityZone.apply(this, arguments);
}

function region() {
  return _region.apply(this, arguments);
} // ipv4().then(console.log)


function _region() {
  _region = _asyncToGenerator(function* () {
    var az = yield availabilityZone();
    var comps = az.split("-");
    return "".concat(comps[0], "-").concat(comps[1], "-").concat(comps[2][0]);
  });
  return _region.apply(this, arguments);
}