"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ec2Meta = ec2Meta;
exports.ipv4 = ipv4;
exports.instanceId = instanceId;
exports.hostname = hostname;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _path = _interopRequireDefault(require("path"));

var baseURL = "http://169.254.169.254/latest/meta-data";

var instance = _axios["default"].create({
  baseURL: baseURL,
  timeout: 1000
});

function ec2Meta() {
  return _ec2Meta.apply(this, arguments);
}

function _ec2Meta() {
  _ec2Meta = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return instance.get();

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ec2Meta.apply(this, arguments);
}

function ipv4() {
  return _ipv.apply(this, arguments);
}

function _ipv() {
  _ipv = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return instance.get('/local-ipv4');

          case 2:
            result = _context2.sent;
            return _context2.abrupt("return", result.data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _ipv.apply(this, arguments);
}

function instanceId() {
  return _instanceId.apply(this, arguments);
}

function _instanceId() {
  _instanceId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return instance.get('/instance-id');

          case 2:
            result = _context3.sent;
            return _context3.abrupt("return", result.data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _instanceId.apply(this, arguments);
}

function hostname() {
  return _hostname.apply(this, arguments);
} // ipv4().then(console.log)


function _hostname() {
  _hostname = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return instance.get('/hostname');

          case 2:
            result = _context4.sent;
            return _context4.abrupt("return", result.data);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _hostname.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BMDEwMzY4OTIvQkNJVC9hc3NpZ25tZW50X2FwcHMvZWMyX3MzX2ltYWdlX3VwbG9hZC9leHByZXNzLWJhY2stZW5kL3NyYy9lYzJNZXRhLmpzIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJpbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwidGltZW91dCIsImVjMk1ldGEiLCJnZXQiLCJyZXN1bHQiLCJkYXRhIiwiaXB2NCIsImluc3RhbmNlSWQiLCJob3N0bmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyx5Q0FBaEI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHQyxrQkFBTUMsTUFBTixDQUFhO0FBQzVCSCxFQUFBQSxPQUFPLEVBQVBBLE9BRDRCO0FBRTVCSSxFQUFBQSxPQUFPLEVBQUU7QUFGbUIsQ0FBYixDQUFqQjs7U0FLc0JDLE87Ozs7OzJGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2dCSixRQUFRLENBQUNLLEdBQVQsRUFEaEI7O0FBQUE7QUFDQ0MsWUFBQUEsTUFERDtBQUFBLDZDQUVFQSxNQUFNLENBQUNDLElBRlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztTQUtlQyxJOzs7Ozt1RkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNnQlIsUUFBUSxDQUFDSyxHQUFULENBQWEsYUFBYixDQURoQjs7QUFBQTtBQUNDQyxZQUFBQSxNQUREO0FBQUEsOENBRUVBLE1BQU0sQ0FBQ0MsSUFGVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O1NBS2VFLFU7Ozs7OzhGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2dCVCxRQUFRLENBQUNLLEdBQVQsQ0FBYSxjQUFiLENBRGhCOztBQUFBO0FBQ0NDLFlBQUFBLE1BREQ7QUFBQSw4Q0FFRUEsTUFBTSxDQUFDQyxJQUZUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FLZUcsUTs7RUFLdEI7Ozs7NEZBTE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZ0JWLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLFdBQWIsQ0FEaEI7O0FBQUE7QUFDQ0MsWUFBQUEsTUFERDtBQUFBLDhDQUVFQSxNQUFNLENBQUNDLElBRlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmNvbnN0IGJhc2VVUkwgPSBcImh0dHA6Ly8xNjkuMjU0LjE2OS4yNTQvbGF0ZXN0L21ldGEtZGF0YVwiXG5cbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTCxcbiAgdGltZW91dDogMTAwMFxufSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVjMk1ldGEoKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGluc3RhbmNlLmdldCgpXG4gIHJldHVybiByZXN1bHQuZGF0YVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXB2NCgpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaW5zdGFuY2UuZ2V0KCcvbG9jYWwtaXB2NCcpXG4gIHJldHVybiByZXN1bHQuZGF0YVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zdGFuY2VJZCgpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaW5zdGFuY2UuZ2V0KCcvaW5zdGFuY2UtaWQnKVxuICByZXR1cm4gcmVzdWx0LmRhdGFcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhvc3RuYW1lKCkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBpbnN0YW5jZS5nZXQoJy9ob3N0bmFtZScpXG4gIHJldHVybiByZXN1bHQuZGF0YVxufVxuXG4vLyBpcHY0KCkudGhlbihjb25zb2xlLmxvZykiXSwiZmlsZSI6ImVjMk1ldGEuanMifQ==
