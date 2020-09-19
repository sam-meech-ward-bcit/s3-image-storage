"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _supertest = _interopRequireDefault(require("supertest"));

var _app = _interopRequireDefault(require("./app"));

var database = _interopRequireWildcard(require("./database/mockDatabase"));

// import * as database from './database/mysqlDatabase'
describe("app users", function () {
  var testApp;
  beforeEach(function () {
    return testApp = (0, _supertest["default"])((0, _app["default"])({
      database: database
    }));
  });
  describe('The posts path', function () {
    test("It should reject when there's no cookie", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var response;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return testApp.get('/api/posts');

            case 2:
              response = _context.sent;
              expect(response.forbidden).toBe(true);
              console.log(response);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))); // test("It should not reject when there's a cookie", async () => {
    //   console.log(testApp)
    //   const response = await (testApp.get('/api/posts').set({
    //     'Cookie': 'connect.sid=s%3AC9MTMeCmlpRvzeL6eS3LPcCFvv7_zFg7.vo7hETsqscbLpHPHEtbqvr%2B4cpRtKHj8jucTW9Tkshk',
    //     'Accept': '*/*'
    //   }
    //   ))
    //   expect(response.forbidden).toBe(false)
    // })
    // test('It should call create post', async () => {
    //   expect(database.createUser.callCount).toBe(0)
    //   const user = {email: 'sam@sam.sam', username: 'sam', password: 'sam', fullName: 'sam sam'}
    //   const response = await testApp.post('/api/users').send({user})
    //   expect(database.createUser.callCount).toBe(1)
    //   expect(database.createUser.params[0]).toEqual(user)
    // })
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BMDEwMzY4OTIvQkNJVC9hc3NpZ25tZW50X2FwcHMvZWMyX3MzX2ltYWdlX3VwbG9hZC9leHByZXNzLWJhY2stZW5kL3NyYy9wb3N0cy50ZXN0LmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwidGVzdEFwcCIsImJlZm9yZUVhY2giLCJkYXRhYmFzZSIsInRlc3QiLCJnZXQiLCJyZXNwb25zZSIsImV4cGVjdCIsImZvcmJpZGRlbiIsInRvQmUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7QUFHQUEsUUFBUSxDQUFDLFdBQUQsRUFBYyxZQUFNO0FBQzFCLE1BQUlDLE9BQUo7QUFDQUMsRUFBQUEsVUFBVSxDQUFDO0FBQUEsV0FBTUQsT0FBTyxHQUFHLDJCQUFRLHFCQUFJO0FBQUNFLE1BQUFBLFFBQVEsRUFBUkE7QUFBRCxLQUFKLENBQVIsQ0FBaEI7QUFBQSxHQUFELENBQVY7QUFFQUgsRUFBQUEsUUFBUSxDQUFDLGdCQUFELEVBQW1CLFlBQU07QUFDL0JJLElBQUFBLElBQUksQ0FBQyx5Q0FBRCw2RkFBNEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDdkJILE9BQU8sQ0FBQ0ksR0FBUixDQUFZLFlBQVosQ0FEdUI7O0FBQUE7QUFDeENDLGNBQUFBLFFBRHdDO0FBRTlDQyxjQUFBQSxNQUFNLENBQUNELFFBQVEsQ0FBQ0UsU0FBVixDQUFOLENBQTJCQyxJQUEzQixDQUFnQyxJQUFoQztBQUNBQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBWjs7QUFIOEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNUMsR0FBSixDQUQrQixDQU8vQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNELEdBMUJPLENBQVI7QUE2QkQsQ0FqQ08sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJ3N1cGVydGVzdCdcblxuaW1wb3J0IGFwcCBmcm9tICcuL2FwcCdcbmltcG9ydCAqIGFzIGRhdGFiYXNlIGZyb20gJy4vZGF0YWJhc2UvbW9ja0RhdGFiYXNlJ1xuLy8gaW1wb3J0ICogYXMgZGF0YWJhc2UgZnJvbSAnLi9kYXRhYmFzZS9teXNxbERhdGFiYXNlJ1xuXG5cbmRlc2NyaWJlKFwiYXBwIHVzZXJzXCIsICgpID0+IHtcbiAgbGV0IHRlc3RBcHBcbiAgYmVmb3JlRWFjaCgoKSA9PiB0ZXN0QXBwID0gcmVxdWVzdChhcHAoe2RhdGFiYXNlfSkpKVxuXG4gIGRlc2NyaWJlKCdUaGUgcG9zdHMgcGF0aCcsICgpID0+IHtcbiAgICB0ZXN0KFwiSXQgc2hvdWxkIHJlamVjdCB3aGVuIHRoZXJlJ3Mgbm8gY29va2llXCIsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGVzdEFwcC5nZXQoJy9hcGkvcG9zdHMnKVxuICAgICAgZXhwZWN0KHJlc3BvbnNlLmZvcmJpZGRlbikudG9CZSh0cnVlKVxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgfSlcblxuICAgIC8vIHRlc3QoXCJJdCBzaG91bGQgbm90IHJlamVjdCB3aGVuIHRoZXJlJ3MgYSBjb29raWVcIiwgYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2codGVzdEFwcClcbiAgICAvLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKHRlc3RBcHAuZ2V0KCcvYXBpL3Bvc3RzJykuc2V0KHtcbiAgICAvLyAgICAgJ0Nvb2tpZSc6ICdjb25uZWN0LnNpZD1zJTNBQzlNVE1lQ21scFJ2emVMNmVTM0xQY0NGdnY3X3pGZzcudm83aEVUc3FzY2JMcEhQSEV0YnF2ciUyQjRjcFJ0S0hqOGp1Y1RXOVRrc2hrJyxcbiAgICAvLyAgICAgJ0FjY2VwdCc6ICcqLyonXG4gICAgLy8gICB9XG4gICAgLy8gICApKVxuICAgIC8vICAgZXhwZWN0KHJlc3BvbnNlLmZvcmJpZGRlbikudG9CZShmYWxzZSlcbiAgICAvLyB9KVxuXG4gICAgLy8gdGVzdCgnSXQgc2hvdWxkIGNhbGwgY3JlYXRlIHBvc3QnLCBhc3luYyAoKSA9PiB7XG4gICAgLy8gICBleHBlY3QoZGF0YWJhc2UuY3JlYXRlVXNlci5jYWxsQ291bnQpLnRvQmUoMClcblxuICAgIC8vICAgY29uc3QgdXNlciA9IHtlbWFpbDogJ3NhbUBzYW0uc2FtJywgdXNlcm5hbWU6ICdzYW0nLCBwYXNzd29yZDogJ3NhbScsIGZ1bGxOYW1lOiAnc2FtIHNhbSd9XG4gICAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRlc3RBcHAucG9zdCgnL2FwaS91c2VycycpLnNlbmQoe3VzZXJ9KVxuXG4gICAgLy8gICBleHBlY3QoZGF0YWJhc2UuY3JlYXRlVXNlci5jYWxsQ291bnQpLnRvQmUoMSlcbiAgICAvLyAgIGV4cGVjdChkYXRhYmFzZS5jcmVhdGVVc2VyLnBhcmFtc1swXSkudG9FcXVhbCh1c2VyKVxuICAgIC8vIH0pXG4gIH0pXG5cbiBcbn0pIl0sImZpbGUiOiJwb3N0cy50ZXN0LmpzIn0=
