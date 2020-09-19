"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var ec2Meta = _interopRequireWildcard(require("../ec2Meta"));

function _default() {
  var router = _express["default"].Router();

  router.get('/', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var ec2, other, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ec2 = {};
              _context.prev = 1;
              _context.next = 4;
              return ec2Meta.ipv4();

            case 4:
              ec2.ipv4 = _context.sent;
              _context.next = 7;
              return ec2Meta.hostname();

            case 7:
              ec2.hostname = _context.sent;
              _context.next = 10;
              return ec2Meta.instanceId();

            case 10:
              ec2.instanceId = _context.sent;
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              ec2 = "error";

            case 17:
              other = {};
              data = {
                ec2: ec2,
                other: other
              };
              console.log(data);
              res.send(data);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  return router;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BMDEwMzY4OTIvQkNJVC9hc3NpZ25tZW50X2FwcHMvZWMyX3MzX2ltYWdlX3VwbG9hZC9leHByZXNzLWJhY2stZW5kL3NyYy9zdGF0dXMuanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsInJlcSIsInJlcyIsImVjMiIsImVjMk1ldGEiLCJpcHY0IiwiaG9zdG5hbWUiLCJpbnN0YW5jZUlkIiwiY29uc29sZSIsImxvZyIsIm90aGVyIiwiZGF0YSIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBOztBQUVlLG9CQUFXO0FBQ3hCLE1BQU1BLE1BQU0sR0FBR0Msb0JBQVFDLE1BQVIsRUFBZjs7QUFHQUYsRUFBQUEsTUFBTSxDQUFDRyxHQUFQLENBQVcsR0FBWDtBQUFBLDZGQUFnQixpQkFBT0MsR0FBUCxFQUFZQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdWQyxjQUFBQSxHQUhVLEdBR0osRUFISTtBQUFBO0FBQUE7QUFBQSxxQkFLS0MsT0FBTyxDQUFDQyxJQUFSLEVBTEw7O0FBQUE7QUFLWkYsY0FBQUEsR0FBRyxDQUFDRSxJQUxRO0FBQUE7QUFBQSxxQkFNU0QsT0FBTyxDQUFDRSxRQUFSLEVBTlQ7O0FBQUE7QUFNWkgsY0FBQUEsR0FBRyxDQUFDRyxRQU5RO0FBQUE7QUFBQSxxQkFPV0YsT0FBTyxDQUFDRyxVQUFSLEVBUFg7O0FBQUE7QUFPWkosY0FBQUEsR0FBRyxDQUFDSSxVQVBRO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTWkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSO0FBQ0FOLGNBQUFBLEdBQUcsR0FBRyxPQUFOOztBQVZZO0FBYVZPLGNBQUFBLEtBYlUsR0FhRixFQWJFO0FBZVJDLGNBQUFBLElBZlEsR0FlRDtBQUNYUixnQkFBQUEsR0FBRyxFQUFIQSxHQURXO0FBRVhPLGdCQUFBQSxLQUFLLEVBQUxBO0FBRlcsZUFmQztBQW1CZEYsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlFLElBQVo7QUFFQVQsY0FBQUEsR0FBRyxDQUFDVSxJQUFKLENBQVNELElBQVQ7O0FBckJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUJGLFNBQU9kLE1BQVA7QUFDQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICogYXMgZWMyTWV0YSBmcm9tICcuLi9lYzJNZXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5cbiAgcm91dGVyLmdldCgnLycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIFxuXG4gICAgbGV0IGVjMiA9IHt9XG4gICAgdHJ5IHtcbiAgICAgIGVjMi5pcHY0ID0gYXdhaXQgZWMyTWV0YS5pcHY0KClcbiAgICAgIGVjMi5ob3N0bmFtZSA9IGF3YWl0IGVjMk1ldGEuaG9zdG5hbWUoKVxuICAgICAgZWMyLmluc3RhbmNlSWQgPSBhd2FpdCBlYzJNZXRhLmluc3RhbmNlSWQoKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgZWMyID0gXCJlcnJvclwiXG4gICAgfVxuXG4gICAgbGV0IG90aGVyID0ge31cblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBlYzIsXG4gICAgICBvdGhlclxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgcmVzLnNlbmQoZGF0YSlcblxuICB9KVxuXG5yZXR1cm4gcm91dGVyXG59XG4iXSwiZmlsZSI6InN0YXR1cy5qcyJ9
