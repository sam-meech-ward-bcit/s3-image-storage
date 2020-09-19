"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var database = _interopRequireWildcard(require("./mysqlDatabase"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// process.env.MYSQL_HOST = 'localhost',
// process.env.MYSQL_USERNAME = 'root',
// process.env.MYSQL_PASSWORD = '',
// process.env.MYSQL_DATABASE = 'instasam_tests'
var wait = function wait(time) {
  return new Promise(function (res) {
    return setTimeout(res, time);
  });
};

function wipeDatabase() {
  return _wipeDatabase.apply(this, arguments);
}

function _wipeDatabase() {
  _wipeDatabase = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return database.run("DELETE FROM comment_hashtags");

          case 2:
            _context12.next = 4;
            return database.run("DELETE FROM post_hashtags");

          case 4:
            _context12.next = 6;
            return database.run("DELETE FROM hashtags");

          case 6:
            _context12.next = 8;
            return database.run("DELETE FROM comment_mention");

          case 8:
            _context12.next = 10;
            return database.run("DELETE FROM post_mention");

          case 10:
            _context12.next = 12;
            return database.run("DELETE FROM comment_likes");

          case 12:
            _context12.next = 14;
            return database.run("DELETE FROM post_likes");

          case 14:
            _context12.next = 16;
            return database.run("DELETE FROM comments");

          case 16:
            _context12.next = 18;
            return database.run("DELETE FROM media_items");

          case 18:
            _context12.next = 20;
            return database.run("DELETE FROM posts");

          case 20:
            _context12.next = 22;
            return database.run("DELETE FROM filters");

          case 22:
            _context12.next = 24;
            return database.run("DELETE FROM followers");

          case 24:
            _context12.next = 26;
            return database.run("DELETE FROM login_activity");

          case 26:
            _context12.next = 28;
            return database.run("DELETE FROM users");

          case 28:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _wipeDatabase.apply(this, arguments);
}

describe("database", function () {
  beforeAll( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return wipeDatabase();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  afterAll( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return database.end();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  describe('users', function () {
    beforeEach( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return wipeDatabase();

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    test('should return undefined when no user exists', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      var error;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return database.getUserWithEmail('test@test.test');

            case 3:
              _context4.next = 8;
              break;

            case 5:
              _context4.prev = 5;
              _context4.t0 = _context4["catch"](0);
              error = _context4.t0;

            case 8:
              expect(error).not.toBe(undefined);

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 5]]);
    })));
    test('should create a new user', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      var userDetails, user, userQueried;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              userDetails = {
                username: 'sam',
                password: 'sam',
                email: 'sam@sam.sam',
                fullName: 'sam sam'
              };
              _context5.next = 3;
              return database.createUser(userDetails);

            case 3:
              user = _context5.sent;
              _context5.next = 6;
              return database.getUser(userDetails);

            case 6:
              userQueried = _context5.sent;
              expect(user).toEqual(userQueried);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    test('should give error when incorrect password is used', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
      var userDetails, error;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              userDetails = {
                username: 'sam',
                password: 'sam',
                email: 'sam@sam.sam',
                fullName: 'sam sam'
              };
              _context6.next = 3;
              return database.createUser(userDetails);

            case 3:
              _context6.prev = 3;
              _context6.next = 6;
              return database.getUser(_objectSpread(_objectSpread({}, userDetails), {}, {
                password: 'bad'
              }));

            case 6:
              _context6.next = 11;
              break;

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](3);
              error = _context6.t0;

            case 11:
              expect(error).not.toBe(undefined);

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[3, 8]]);
    })));
  });
  describe('posts', function () {
    var user;
    var userDetails = {
      username: 'postUser',
      password: 'sam',
      email: 'postUser@sam.sam',
      fullName: 'post user'
    };
    beforeAll( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return database.createUser(userDetails);

            case 2:
              user = _context7.sent;

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
    test("Post with single image", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
      var media, post;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              media = [{
                type: 'image',
                url: "some_url"
              }];
              _context8.next = 3;
              return database.createPost({
                userId: user.id,
                description: "This is a post",
                media: media
              });

            case 3:
              post = _context8.sent;
              expect(post.media.length).toBe(media.length);

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    })));
    test("Post with multi image", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
      var media, post;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              media = [{
                type: 'image',
                url: "some_url1"
              }, {
                type: 'image',
                url: "some_url2"
              }, {
                type: 'image',
                url: "some_url3"
              }];
              _context9.next = 3;
              return database.createPost({
                userId: user.id,
                description: "This is a post 2",
                media: media
              });

            case 3:
              post = _context9.sent;
              console.log(post.media, post.media.length, media.length);
              expect(post.media.length).toBe(media.length);

            case 6:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));
    test("Like a post", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
      var userDetails, likerUser, media, post;
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              userDetails = {
                username: 'liker',
                password: 'sam',
                email: 'liker@sam.sam',
                fullName: 'sam sam'
              };
              _context10.next = 3;
              return database.createUser(userDetails);

            case 3:
              likerUser = _context10.sent;
              media = [{
                type: 'image',
                url: "some_url"
              }];
              _context10.next = 7;
              return database.createPost({
                userId: user.id,
                description: "This is a post",
                media: media
              });

            case 7:
              post = _context10.sent;
              expect(post.total_likes).toBe(0);
              _context10.next = 11;
              return database.likePost({
                userId: likerUser.id,
                postId: post.id
              });

            case 11:
              post = _context10.sent;
              expect(post.total_likes).toBe(1);

            case 13:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    })));
    test("Comment a post", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
      var media, post, comment, comment3;
      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              media = [{
                type: 'image',
                url: "some_url"
              }];
              _context11.next = 3;
              return database.createPost({
                userId: user.id,
                description: "This is a post",
                media: media
              });

            case 3:
              post = _context11.sent;
              expect(post.messages.length).toBe(0);
              _context11.next = 7;
              return database.addComment({
                userId: user.id,
                postId: post.id,
                message: "This is a comment"
              });

            case 7:
              comment = _context11.sent;
              _context11.next = 10;
              return database.getPost({
                postId: post.id
              });

            case 10:
              post = _context11.sent;
              expect(post.messages.length).toBe(1);
              _context11.next = 14;
              return database.addComment({
                userId: user.id,
                postId: post.id,
                message: "This is another comment"
              });

            case 14:
              _context11.next = 16;
              return database.getPost({
                postId: post.id
              });

            case 16:
              post = _context11.sent;
              expect(post.messages.length).toBe(2);
              _context11.next = 20;
              return database.addComment({
                userId: user.id,
                postId: post.id,
                message: "This is another comment again"
              });

            case 20:
              comment3 = _context11.sent;
              _context11.next = 23;
              return database.getPost({
                postId: post.id
              });

            case 23:
              post = _context11.sent;
              expect(post.messages.length).toBe(2);
              expect(post.messages[0].id).toBe(comment3.id);
              console.log(post, comment3);

            case 27:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    })));
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BMDEwMzY4OTIvQkNJVC9hc3NpZ25tZW50X2FwcHMvZWMyX3MzX2ltYWdlX3VwbG9hZC9leHByZXNzLWJhY2stZW5kL3NyYy9kYXRhYmFzZS9teXNxbERhdGFiYXNlLnRlc3QuanMiXSwibmFtZXMiOlsid2FpdCIsInRpbWUiLCJQcm9taXNlIiwicmVzIiwic2V0VGltZW91dCIsIndpcGVEYXRhYmFzZSIsImRhdGFiYXNlIiwicnVuIiwiZGVzY3JpYmUiLCJiZWZvcmVBbGwiLCJhZnRlckFsbCIsImVuZCIsImJlZm9yZUVhY2giLCJ0ZXN0IiwiZ2V0VXNlcldpdGhFbWFpbCIsImVycm9yIiwiZXhwZWN0Iiwibm90IiwidG9CZSIsInVuZGVmaW5lZCIsInVzZXJEZXRhaWxzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImVtYWlsIiwiZnVsbE5hbWUiLCJjcmVhdGVVc2VyIiwidXNlciIsImdldFVzZXIiLCJ1c2VyUXVlcmllZCIsInRvRXF1YWwiLCJtZWRpYSIsInR5cGUiLCJ1cmwiLCJjcmVhdGVQb3N0IiwidXNlcklkIiwiaWQiLCJkZXNjcmlwdGlvbiIsInBvc3QiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibGlrZXJVc2VyIiwidG90YWxfbGlrZXMiLCJsaWtlUG9zdCIsInBvc3RJZCIsIm1lc3NhZ2VzIiwiYWRkQ29tbWVudCIsIm1lc3NhZ2UiLCJjb21tZW50IiwiZ2V0UG9zdCIsImNvbW1lbnQzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxJQUFEO0FBQUEsU0FBVSxJQUFJQyxPQUFKLENBQVksVUFBQUMsR0FBRztBQUFBLFdBQUlDLFVBQVUsQ0FBQ0QsR0FBRCxFQUFNRixJQUFOLENBQWQ7QUFBQSxHQUFmLENBQVY7QUFBQSxDQUFiOztTQUVlSSxZOzs7OztnR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDVUMsUUFBUSxDQUFDQyxHQUFULENBQWEsOEJBQWIsQ0FEVjs7QUFBQTtBQUFBO0FBQUEsbUJBRVVELFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLDJCQUFiLENBRlY7O0FBQUE7QUFBQTtBQUFBLG1CQUdVRCxRQUFRLENBQUNDLEdBQVQsQ0FBYSxzQkFBYixDQUhWOztBQUFBO0FBQUE7QUFBQSxtQkFJVUQsUUFBUSxDQUFDQyxHQUFULENBQWEsNkJBQWIsQ0FKVjs7QUFBQTtBQUFBO0FBQUEsbUJBS1VELFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLDBCQUFiLENBTFY7O0FBQUE7QUFBQTtBQUFBLG1CQU1VRCxRQUFRLENBQUNDLEdBQVQsQ0FBYSwyQkFBYixDQU5WOztBQUFBO0FBQUE7QUFBQSxtQkFPVUQsUUFBUSxDQUFDQyxHQUFULENBQWEsd0JBQWIsQ0FQVjs7QUFBQTtBQUFBO0FBQUEsbUJBUVVELFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLHNCQUFiLENBUlY7O0FBQUE7QUFBQTtBQUFBLG1CQVNVRCxRQUFRLENBQUNDLEdBQVQsQ0FBYSx5QkFBYixDQVRWOztBQUFBO0FBQUE7QUFBQSxtQkFVVUQsUUFBUSxDQUFDQyxHQUFULENBQWEsbUJBQWIsQ0FWVjs7QUFBQTtBQUFBO0FBQUEsbUJBV1VELFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLHFCQUFiLENBWFY7O0FBQUE7QUFBQTtBQUFBLG1CQVlVRCxRQUFRLENBQUNDLEdBQVQsQ0FBYSx1QkFBYixDQVpWOztBQUFBO0FBQUE7QUFBQSxtQkFhVUQsUUFBUSxDQUFDQyxHQUFULENBQWEsNEJBQWIsQ0FiVjs7QUFBQTtBQUFBO0FBQUEsbUJBY1VELFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLG1CQUFiLENBZFY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWlCQUMsUUFBUSxDQUFDLFVBQUQsRUFBYSxZQUFNO0FBRXpCQyxFQUFBQSxTQUFTLDZGQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNGSixZQUFZLEVBRFY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxHQUFUO0FBR0FLLEVBQUFBLFFBQVEsNkZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRURKLFFBQVEsQ0FBQ0ssR0FBVCxFQUZDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsR0FBUjtBQUtBSCxFQUFBQSxRQUFRLENBQUMsT0FBRCxFQUFVLFlBQU07QUFFdEJJLElBQUFBLFVBQVUsNkZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0hQLFlBQVksRUFEVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFELEdBQVY7QUFJQVEsSUFBQUEsSUFBSSxDQUFDLDZDQUFELDZGQUFnRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRzFDUCxRQUFRLENBQUNRLGdCQUFULENBQTBCLGdCQUExQixDQUgwQzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS2hEQyxjQUFBQSxLQUFLLGVBQUw7O0FBTGdEO0FBT2xEQyxjQUFBQSxNQUFNLENBQUNELEtBQUQsQ0FBTixDQUFjRSxHQUFkLENBQWtCQyxJQUFsQixDQUF1QkMsU0FBdkI7O0FBUGtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhELEdBQUo7QUFVQU4sSUFBQUEsSUFBSSxDQUFDLDBCQUFELDZGQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekJPLGNBQUFBLFdBRHlCLEdBQ1g7QUFDbEJDLGdCQUFBQSxRQUFRLEVBQUUsS0FEUTtBQUVsQkMsZ0JBQUFBLFFBQVEsRUFBRSxLQUZRO0FBR2xCQyxnQkFBQUEsS0FBSyxFQUFFLGFBSFc7QUFJbEJDLGdCQUFBQSxRQUFRLEVBQUU7QUFKUSxlQURXO0FBQUE7QUFBQSxxQkFPWmxCLFFBQVEsQ0FBQ21CLFVBQVQsQ0FBb0JMLFdBQXBCLENBUFk7O0FBQUE7QUFPekJNLGNBQUFBLElBUHlCO0FBQUE7QUFBQSxxQkFRTHBCLFFBQVEsQ0FBQ3FCLE9BQVQsQ0FBaUJQLFdBQWpCLENBUks7O0FBQUE7QUFRekJRLGNBQUFBLFdBUnlCO0FBUy9CWixjQUFBQSxNQUFNLENBQUNVLElBQUQsQ0FBTixDQUFhRyxPQUFiLENBQXFCRCxXQUFyQjs7QUFUK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBN0IsR0FBSjtBQVlBZixJQUFBQSxJQUFJLENBQUMsbURBQUQsNkZBQXNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsRE8sY0FBQUEsV0FEa0QsR0FDcEM7QUFDbEJDLGdCQUFBQSxRQUFRLEVBQUUsS0FEUTtBQUVsQkMsZ0JBQUFBLFFBQVEsRUFBRSxLQUZRO0FBR2xCQyxnQkFBQUEsS0FBSyxFQUFFLGFBSFc7QUFJbEJDLGdCQUFBQSxRQUFRLEVBQUU7QUFKUSxlQURvQztBQUFBO0FBQUEscUJBT2xEbEIsUUFBUSxDQUFDbUIsVUFBVCxDQUFvQkwsV0FBcEIsQ0FQa0Q7O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVWhEZCxRQUFRLENBQUNxQixPQUFULGlDQUFxQlAsV0FBckI7QUFBa0NFLGdCQUFBQSxRQUFRLEVBQUU7QUFBNUMsaUJBVmdEOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZdERQLGNBQUFBLEtBQUssZUFBTDs7QUFac0Q7QUFjeERDLGNBQUFBLE1BQU0sQ0FBQ0QsS0FBRCxDQUFOLENBQWNFLEdBQWQsQ0FBa0JDLElBQWxCLENBQXVCQyxTQUF2Qjs7QUFkd0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdEQsR0FBSjtBQWlCRCxHQTdDTyxDQUFSO0FBK0NBWCxFQUFBQSxRQUFRLENBQUMsT0FBRCxFQUFVLFlBQU07QUFFdEIsUUFBSWtCLElBQUo7QUFDQSxRQUFNTixXQUFXLEdBQUc7QUFDbEJDLE1BQUFBLFFBQVEsRUFBRSxVQURRO0FBRWxCQyxNQUFBQSxRQUFRLEVBQUUsS0FGUTtBQUdsQkMsTUFBQUEsS0FBSyxFQUFFLGtCQUhXO0FBSWxCQyxNQUFBQSxRQUFRLEVBQUU7QUFKUSxLQUFwQjtBQU1BZixJQUFBQSxTQUFTLDZGQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNLSCxRQUFRLENBQUNtQixVQUFULENBQW9CTCxXQUFwQixDQURMOztBQUFBO0FBQ1JNLGNBQUFBLElBRFE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRCxHQUFUO0FBSUFiLElBQUFBLElBQUksQ0FBQyx3QkFBRCw2RkFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCaUIsY0FBQUEsS0FEdUIsR0FDZixDQUNaO0FBQ0VDLGdCQUFBQSxJQUFJLEVBQUUsT0FEUjtBQUVFQyxnQkFBQUEsR0FBRyxFQUFFO0FBRlAsZUFEWSxDQURlO0FBQUE7QUFBQSxxQkFPVjFCLFFBQVEsQ0FBQzJCLFVBQVQsQ0FBb0I7QUFDckNDLGdCQUFBQSxNQUFNLEVBQUVSLElBQUksQ0FBQ1MsRUFEd0I7QUFFckNDLGdCQUFBQSxXQUFXLEVBQUUsZ0JBRndCO0FBR3JDTixnQkFBQUEsS0FBSyxFQUFMQTtBQUhxQyxlQUFwQixDQVBVOztBQUFBO0FBT3ZCTyxjQUFBQSxJQVB1QjtBQVk3QnJCLGNBQUFBLE1BQU0sQ0FBQ3FCLElBQUksQ0FBQ1AsS0FBTCxDQUFXUSxNQUFaLENBQU4sQ0FBMEJwQixJQUExQixDQUErQlksS0FBSyxDQUFDUSxNQUFyQzs7QUFaNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBM0IsR0FBSjtBQWVBekIsSUFBQUEsSUFBSSxDQUFDLHVCQUFELDZGQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEJpQixjQUFBQSxLQURzQixHQUNkLENBQ1o7QUFDRUMsZ0JBQUFBLElBQUksRUFBRSxPQURSO0FBRUVDLGdCQUFBQSxHQUFHLEVBQUU7QUFGUCxlQURZLEVBS1o7QUFDRUQsZ0JBQUFBLElBQUksRUFBRSxPQURSO0FBRUVDLGdCQUFBQSxHQUFHLEVBQUU7QUFGUCxlQUxZLEVBU1o7QUFDRUQsZ0JBQUFBLElBQUksRUFBRSxPQURSO0FBRUVDLGdCQUFBQSxHQUFHLEVBQUU7QUFGUCxlQVRZLENBRGM7QUFBQTtBQUFBLHFCQWVUMUIsUUFBUSxDQUFDMkIsVUFBVCxDQUFvQjtBQUNyQ0MsZ0JBQUFBLE1BQU0sRUFBRVIsSUFBSSxDQUFDUyxFQUR3QjtBQUVyQ0MsZ0JBQUFBLFdBQVcsRUFBRSxrQkFGd0I7QUFHckNOLGdCQUFBQSxLQUFLLEVBQUxBO0FBSHFDLGVBQXBCLENBZlM7O0FBQUE7QUFldEJPLGNBQUFBLElBZnNCO0FBb0I1QkUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQ1AsS0FBakIsRUFBd0JPLElBQUksQ0FBQ1AsS0FBTCxDQUFXUSxNQUFuQyxFQUEyQ1IsS0FBSyxDQUFDUSxNQUFqRDtBQUNBdEIsY0FBQUEsTUFBTSxDQUFDcUIsSUFBSSxDQUFDUCxLQUFMLENBQVdRLE1BQVosQ0FBTixDQUEwQnBCLElBQTFCLENBQStCWSxLQUFLLENBQUNRLE1BQXJDOztBQXJCNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMUIsR0FBSjtBQXdCQXpCLElBQUFBLElBQUksQ0FBQyxhQUFELDZGQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWk8sY0FBQUEsV0FGWSxHQUVFO0FBQ2xCQyxnQkFBQUEsUUFBUSxFQUFFLE9BRFE7QUFFbEJDLGdCQUFBQSxRQUFRLEVBQUUsS0FGUTtBQUdsQkMsZ0JBQUFBLEtBQUssRUFBRSxlQUhXO0FBSWxCQyxnQkFBQUEsUUFBUSxFQUFFO0FBSlEsZUFGRjtBQUFBO0FBQUEscUJBUU1sQixRQUFRLENBQUNtQixVQUFULENBQW9CTCxXQUFwQixDQVJOOztBQUFBO0FBUVpxQixjQUFBQSxTQVJZO0FBVVpYLGNBQUFBLEtBVlksR0FVSixDQUNaO0FBQ0VDLGdCQUFBQSxJQUFJLEVBQUUsT0FEUjtBQUVFQyxnQkFBQUEsR0FBRyxFQUFFO0FBRlAsZUFEWSxDQVZJO0FBQUE7QUFBQSxxQkFnQkQxQixRQUFRLENBQUMyQixVQUFULENBQW9CO0FBQ25DQyxnQkFBQUEsTUFBTSxFQUFFUixJQUFJLENBQUNTLEVBRHNCO0FBRW5DQyxnQkFBQUEsV0FBVyxFQUFFLGdCQUZzQjtBQUduQ04sZ0JBQUFBLEtBQUssRUFBTEE7QUFIbUMsZUFBcEIsQ0FoQkM7O0FBQUE7QUFnQmRPLGNBQUFBLElBaEJjO0FBcUJsQnJCLGNBQUFBLE1BQU0sQ0FBQ3FCLElBQUksQ0FBQ0ssV0FBTixDQUFOLENBQXlCeEIsSUFBekIsQ0FBOEIsQ0FBOUI7QUFyQmtCO0FBQUEscUJBc0JMWixRQUFRLENBQUNxQyxRQUFULENBQWtCO0FBQUNULGdCQUFBQSxNQUFNLEVBQUVPLFNBQVMsQ0FBQ04sRUFBbkI7QUFBdUJTLGdCQUFBQSxNQUFNLEVBQUVQLElBQUksQ0FBQ0Y7QUFBcEMsZUFBbEIsQ0F0Qks7O0FBQUE7QUFzQmxCRSxjQUFBQSxJQXRCa0I7QUF1QmxCckIsY0FBQUEsTUFBTSxDQUFDcUIsSUFBSSxDQUFDSyxXQUFOLENBQU4sQ0FBeUJ4QixJQUF6QixDQUE4QixDQUE5Qjs7QUF2QmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhCLEdBQUo7QUEwQkFMLElBQUFBLElBQUksQ0FBQyxnQkFBRCw2RkFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZpQixjQUFBQSxLQURlLEdBQ1AsQ0FDWjtBQUNFQyxnQkFBQUEsSUFBSSxFQUFFLE9BRFI7QUFFRUMsZ0JBQUFBLEdBQUcsRUFBRTtBQUZQLGVBRFksQ0FETztBQUFBO0FBQUEscUJBT0oxQixRQUFRLENBQUMyQixVQUFULENBQW9CO0FBQ25DQyxnQkFBQUEsTUFBTSxFQUFFUixJQUFJLENBQUNTLEVBRHNCO0FBRW5DQyxnQkFBQUEsV0FBVyxFQUFFLGdCQUZzQjtBQUduQ04sZ0JBQUFBLEtBQUssRUFBTEE7QUFIbUMsZUFBcEIsQ0FQSTs7QUFBQTtBQU9qQk8sY0FBQUEsSUFQaUI7QUFZckJyQixjQUFBQSxNQUFNLENBQUNxQixJQUFJLENBQUNRLFFBQUwsQ0FBY1AsTUFBZixDQUFOLENBQTZCcEIsSUFBN0IsQ0FBa0MsQ0FBbEM7QUFacUI7QUFBQSxxQkFjQ1osUUFBUSxDQUFDd0MsVUFBVCxDQUFvQjtBQUFDWixnQkFBQUEsTUFBTSxFQUFFUixJQUFJLENBQUNTLEVBQWQ7QUFBa0JTLGdCQUFBQSxNQUFNLEVBQUVQLElBQUksQ0FBQ0YsRUFBL0I7QUFBbUNZLGdCQUFBQSxPQUFPLEVBQUU7QUFBNUMsZUFBcEIsQ0FkRDs7QUFBQTtBQWNmQyxjQUFBQSxPQWRlO0FBQUE7QUFBQSxxQkFlUjFDLFFBQVEsQ0FBQzJDLE9BQVQsQ0FBaUI7QUFBQ0wsZ0JBQUFBLE1BQU0sRUFBRVAsSUFBSSxDQUFDRjtBQUFkLGVBQWpCLENBZlE7O0FBQUE7QUFlckJFLGNBQUFBLElBZnFCO0FBaUJyQnJCLGNBQUFBLE1BQU0sQ0FBQ3FCLElBQUksQ0FBQ1EsUUFBTCxDQUFjUCxNQUFmLENBQU4sQ0FBNkJwQixJQUE3QixDQUFrQyxDQUFsQztBQWpCcUI7QUFBQSxxQkFtQmZaLFFBQVEsQ0FBQ3dDLFVBQVQsQ0FBb0I7QUFBQ1osZ0JBQUFBLE1BQU0sRUFBRVIsSUFBSSxDQUFDUyxFQUFkO0FBQWtCUyxnQkFBQUEsTUFBTSxFQUFFUCxJQUFJLENBQUNGLEVBQS9CO0FBQW1DWSxnQkFBQUEsT0FBTyxFQUFFO0FBQTVDLGVBQXBCLENBbkJlOztBQUFBO0FBQUE7QUFBQSxxQkFvQlJ6QyxRQUFRLENBQUMyQyxPQUFULENBQWlCO0FBQUNMLGdCQUFBQSxNQUFNLEVBQUVQLElBQUksQ0FBQ0Y7QUFBZCxlQUFqQixDQXBCUTs7QUFBQTtBQW9CckJFLGNBQUFBLElBcEJxQjtBQXNCckJyQixjQUFBQSxNQUFNLENBQUNxQixJQUFJLENBQUNRLFFBQUwsQ0FBY1AsTUFBZixDQUFOLENBQTZCcEIsSUFBN0IsQ0FBa0MsQ0FBbEM7QUF0QnFCO0FBQUEscUJBd0JFWixRQUFRLENBQUN3QyxVQUFULENBQW9CO0FBQUNaLGdCQUFBQSxNQUFNLEVBQUVSLElBQUksQ0FBQ1MsRUFBZDtBQUFrQlMsZ0JBQUFBLE1BQU0sRUFBRVAsSUFBSSxDQUFDRixFQUEvQjtBQUFtQ1ksZ0JBQUFBLE9BQU8sRUFBRTtBQUE1QyxlQUFwQixDQXhCRjs7QUFBQTtBQXdCZkcsY0FBQUEsUUF4QmU7QUFBQTtBQUFBLHFCQXlCUjVDLFFBQVEsQ0FBQzJDLE9BQVQsQ0FBaUI7QUFBQ0wsZ0JBQUFBLE1BQU0sRUFBRVAsSUFBSSxDQUFDRjtBQUFkLGVBQWpCLENBekJROztBQUFBO0FBeUJyQkUsY0FBQUEsSUF6QnFCO0FBMkJyQnJCLGNBQUFBLE1BQU0sQ0FBQ3FCLElBQUksQ0FBQ1EsUUFBTCxDQUFjUCxNQUFmLENBQU4sQ0FBNkJwQixJQUE3QixDQUFrQyxDQUFsQztBQUNBRixjQUFBQSxNQUFNLENBQUNxQixJQUFJLENBQUNRLFFBQUwsQ0FBYyxDQUFkLEVBQWlCVixFQUFsQixDQUFOLENBQTRCakIsSUFBNUIsQ0FBaUNnQyxRQUFRLENBQUNmLEVBQTFDO0FBRUFJLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaLEVBQWtCYSxRQUFsQjs7QUE5QnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW5CLEdBQUo7QUFpQ0QsR0EvR08sQ0FBUjtBQWlIRCxDQTFLTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZGF0YWJhc2UgZnJvbSAnLi9teXNxbERhdGFiYXNlJ1xuXG4vLyBwcm9jZXNzLmVudi5NWVNRTF9IT1NUID0gJ2xvY2FsaG9zdCcsXG4vLyBwcm9jZXNzLmVudi5NWVNRTF9VU0VSTkFNRSA9ICdyb290Jyxcbi8vIHByb2Nlc3MuZW52Lk1ZU1FMX1BBU1NXT1JEID0gJycsXG4vLyBwcm9jZXNzLmVudi5NWVNRTF9EQVRBQkFTRSA9ICdpbnN0YXNhbV90ZXN0cydcblxuY29uc3Qgd2FpdCA9ICh0aW1lKSA9PiBuZXcgUHJvbWlzZShyZXMgPT4gc2V0VGltZW91dChyZXMsIHRpbWUpKVxuXG5hc3luYyBmdW5jdGlvbiB3aXBlRGF0YWJhc2UoKSB7XG4gICAgYXdhaXQgZGF0YWJhc2UucnVuKFwiREVMRVRFIEZST00gY29tbWVudF9oYXNodGFnc1wiKVxuICAgIGF3YWl0IGRhdGFiYXNlLnJ1bihcIkRFTEVURSBGUk9NIHBvc3RfaGFzaHRhZ3NcIilcbiAgICBhd2FpdCBkYXRhYmFzZS5ydW4oXCJERUxFVEUgRlJPTSBoYXNodGFnc1wiKVxuICAgIGF3YWl0IGRhdGFiYXNlLnJ1bihcIkRFTEVURSBGUk9NIGNvbW1lbnRfbWVudGlvblwiKVxuICAgIGF3YWl0IGRhdGFiYXNlLnJ1bihcIkRFTEVURSBGUk9NIHBvc3RfbWVudGlvblwiKVxuICAgIGF3YWl0IGRhdGFiYXNlLnJ1bihcIkRFTEVURSBGUk9NIGNvbW1lbnRfbGlrZXNcIilcbiAgICBhd2FpdCBkYXRhYmFzZS5ydW4oXCJERUxFVEUgRlJPTSBwb3N0X2xpa2VzXCIpXG4gICAgYXdhaXQgZGF0YWJhc2UucnVuKFwiREVMRVRFIEZST00gY29tbWVudHNcIilcbiAgICBhd2FpdCBkYXRhYmFzZS5ydW4oXCJERUxFVEUgRlJPTSBtZWRpYV9pdGVtc1wiKVxuICAgIGF3YWl0IGRhdGFiYXNlLnJ1bihcIkRFTEVURSBGUk9NIHBvc3RzXCIpXG4gICAgYXdhaXQgZGF0YWJhc2UucnVuKFwiREVMRVRFIEZST00gZmlsdGVyc1wiKVxuICAgIGF3YWl0IGRhdGFiYXNlLnJ1bihcIkRFTEVURSBGUk9NIGZvbGxvd2Vyc1wiKVxuICAgIGF3YWl0IGRhdGFiYXNlLnJ1bihcIkRFTEVURSBGUk9NIGxvZ2luX2FjdGl2aXR5XCIpXG4gICAgYXdhaXQgZGF0YWJhc2UucnVuKFwiREVMRVRFIEZST00gdXNlcnNcIilcbn1cblxuZGVzY3JpYmUoXCJkYXRhYmFzZVwiLCAoKSA9PiB7XG5cbiAgYmVmb3JlQWxsKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB3aXBlRGF0YWJhc2UoKVxuICB9KVxuICBhZnRlckFsbChhc3luYyAoKSA9PiB7XG4gICAgLy8gYXdhaXQgd2lwZURhdGFiYXNlKClcbiAgICBhd2FpdCBkYXRhYmFzZS5lbmQoKVxuICB9KVxuXG4gIGRlc2NyaWJlKCd1c2VycycsICgpID0+IHtcblxuICAgIGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgd2lwZURhdGFiYXNlKClcbiAgICB9KVxuXG4gICAgdGVzdCgnc2hvdWxkIHJldHVybiB1bmRlZmluZWQgd2hlbiBubyB1c2VyIGV4aXN0cycsIGFzeW5jICgpID0+IHtcbiAgICAgIGxldCBlcnJvclxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGF0YWJhc2UuZ2V0VXNlcldpdGhFbWFpbCgndGVzdEB0ZXN0LnRlc3QnKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlcnJvciA9IGVcbiAgICAgIH1cbiAgICAgIGV4cGVjdChlcnJvcikubm90LnRvQmUodW5kZWZpbmVkKVxuICAgIH0pXG5cbiAgICB0ZXN0KCdzaG91bGQgY3JlYXRlIGEgbmV3IHVzZXInLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB1c2VyRGV0YWlscyA9IHtcbiAgICAgICAgdXNlcm5hbWU6ICdzYW0nLFxuICAgICAgICBwYXNzd29yZDogJ3NhbScsXG4gICAgICAgIGVtYWlsOiAnc2FtQHNhbS5zYW0nLFxuICAgICAgICBmdWxsTmFtZTogJ3NhbSBzYW0nXG4gICAgICB9XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGF0YWJhc2UuY3JlYXRlVXNlcih1c2VyRGV0YWlscylcbiAgICAgIGNvbnN0IHVzZXJRdWVyaWVkID0gYXdhaXQgZGF0YWJhc2UuZ2V0VXNlcih1c2VyRGV0YWlscylcbiAgICAgIGV4cGVjdCh1c2VyKS50b0VxdWFsKHVzZXJRdWVyaWVkKVxuICAgIH0pXG5cbiAgICB0ZXN0KCdzaG91bGQgZ2l2ZSBlcnJvciB3aGVuIGluY29ycmVjdCBwYXNzd29yZCBpcyB1c2VkJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdXNlckRldGFpbHMgPSB7XG4gICAgICAgIHVzZXJuYW1lOiAnc2FtJyxcbiAgICAgICAgcGFzc3dvcmQ6ICdzYW0nLFxuICAgICAgICBlbWFpbDogJ3NhbUBzYW0uc2FtJyxcbiAgICAgICAgZnVsbE5hbWU6ICdzYW0gc2FtJ1xuICAgICAgfVxuICAgICAgYXdhaXQgZGF0YWJhc2UuY3JlYXRlVXNlcih1c2VyRGV0YWlscylcbiAgICAgIGxldCBlcnJvciBcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRhdGFiYXNlLmdldFVzZXIoey4uLnVzZXJEZXRhaWxzLCBwYXNzd29yZDogJ2JhZCd9KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlcnJvciA9IGVcbiAgICAgIH1cbiAgICAgIGV4cGVjdChlcnJvcikubm90LnRvQmUodW5kZWZpbmVkKVxuICAgIH0pXG5cbiAgfSlcblxuICBkZXNjcmliZSgncG9zdHMnLCAoKSA9PiB7XG5cbiAgICBsZXQgdXNlclxuICAgIGNvbnN0IHVzZXJEZXRhaWxzID0ge1xuICAgICAgdXNlcm5hbWU6ICdwb3N0VXNlcicsXG4gICAgICBwYXNzd29yZDogJ3NhbScsXG4gICAgICBlbWFpbDogJ3Bvc3RVc2VyQHNhbS5zYW0nLFxuICAgICAgZnVsbE5hbWU6ICdwb3N0IHVzZXInXG4gICAgfVxuICAgIGJlZm9yZUFsbChhc3luYyAoKSA9PiB7XG4gICAgICB1c2VyID0gYXdhaXQgZGF0YWJhc2UuY3JlYXRlVXNlcih1c2VyRGV0YWlscylcbiAgICB9KVxuXG4gICAgdGVzdChcIlBvc3Qgd2l0aCBzaW5nbGUgaW1hZ2VcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbWVkaWEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIHVybDogXCJzb21lX3VybFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBkYXRhYmFzZS5jcmVhdGVQb3N0KHtcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgcG9zdFwiLCBcbiAgICAgICAgbWVkaWFcbiAgICAgIH0pXG4gICAgICBleHBlY3QocG9zdC5tZWRpYS5sZW5ndGgpLnRvQmUobWVkaWEubGVuZ3RoKVxuICAgIH0pXG5cbiAgICB0ZXN0KFwiUG9zdCB3aXRoIG11bHRpIGltYWdlXCIsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1lZGlhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICB1cmw6IFwic29tZV91cmwxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgdXJsOiBcInNvbWVfdXJsMlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIHVybDogXCJzb21lX3VybDNcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgICBjb25zdCBwb3N0ID0gYXdhaXQgZGF0YWJhc2UuY3JlYXRlUG9zdCh7XG4gICAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHBvc3QgMlwiLCBcbiAgICAgICAgbWVkaWFcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhwb3N0Lm1lZGlhLCBwb3N0Lm1lZGlhLmxlbmd0aCwgbWVkaWEubGVuZ3RoKVxuICAgICAgZXhwZWN0KHBvc3QubWVkaWEubGVuZ3RoKS50b0JlKG1lZGlhLmxlbmd0aClcbiAgICB9KVxuXG4gICAgdGVzdChcIkxpa2UgYSBwb3N0XCIsIGFzeW5jICgpID0+IHtcblxuICAgICAgY29uc3QgdXNlckRldGFpbHMgPSB7XG4gICAgICAgIHVzZXJuYW1lOiAnbGlrZXInLFxuICAgICAgICBwYXNzd29yZDogJ3NhbScsXG4gICAgICAgIGVtYWlsOiAnbGlrZXJAc2FtLnNhbScsXG4gICAgICAgIGZ1bGxOYW1lOiAnc2FtIHNhbSdcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxpa2VyVXNlciA9IGF3YWl0IGRhdGFiYXNlLmNyZWF0ZVVzZXIodXNlckRldGFpbHMpXG5cbiAgICAgIGNvbnN0IG1lZGlhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICB1cmw6IFwic29tZV91cmxcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgICBsZXQgcG9zdCA9IGF3YWl0IGRhdGFiYXNlLmNyZWF0ZVBvc3Qoe1xuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBwb3N0XCIsIFxuICAgICAgICBtZWRpYVxuICAgICAgfSlcbiAgICAgIGV4cGVjdChwb3N0LnRvdGFsX2xpa2VzKS50b0JlKDApXG4gICAgICBwb3N0ID0gYXdhaXQgZGF0YWJhc2UubGlrZVBvc3Qoe3VzZXJJZDogbGlrZXJVc2VyLmlkLCBwb3N0SWQ6IHBvc3QuaWR9KVxuICAgICAgZXhwZWN0KHBvc3QudG90YWxfbGlrZXMpLnRvQmUoMSlcbiAgICB9KVxuXG4gICAgdGVzdChcIkNvbW1lbnQgYSBwb3N0XCIsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1lZGlhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICB1cmw6IFwic29tZV91cmxcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgICBsZXQgcG9zdCA9IGF3YWl0IGRhdGFiYXNlLmNyZWF0ZVBvc3Qoe1xuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBwb3N0XCIsIFxuICAgICAgICBtZWRpYVxuICAgICAgfSlcbiAgICAgIGV4cGVjdChwb3N0Lm1lc3NhZ2VzLmxlbmd0aCkudG9CZSgwKVxuXG4gICAgICBjb25zdCBjb21tZW50ID0gYXdhaXQgZGF0YWJhc2UuYWRkQ29tbWVudCh7dXNlcklkOiB1c2VyLmlkLCBwb3N0SWQ6IHBvc3QuaWQsIG1lc3NhZ2U6IFwiVGhpcyBpcyBhIGNvbW1lbnRcIn0pXG4gICAgICBwb3N0ID0gYXdhaXQgZGF0YWJhc2UuZ2V0UG9zdCh7cG9zdElkOiBwb3N0LmlkfSlcbiAgICAgIFxuICAgICAgZXhwZWN0KHBvc3QubWVzc2FnZXMubGVuZ3RoKS50b0JlKDEpXG5cbiAgICAgIGF3YWl0IGRhdGFiYXNlLmFkZENvbW1lbnQoe3VzZXJJZDogdXNlci5pZCwgcG9zdElkOiBwb3N0LmlkLCBtZXNzYWdlOiBcIlRoaXMgaXMgYW5vdGhlciBjb21tZW50XCJ9KVxuICAgICAgcG9zdCA9IGF3YWl0IGRhdGFiYXNlLmdldFBvc3Qoe3Bvc3RJZDogcG9zdC5pZH0pXG5cbiAgICAgIGV4cGVjdChwb3N0Lm1lc3NhZ2VzLmxlbmd0aCkudG9CZSgyKVxuXG4gICAgICBjb25zdCBjb21tZW50MyA9IGF3YWl0IGRhdGFiYXNlLmFkZENvbW1lbnQoe3VzZXJJZDogdXNlci5pZCwgcG9zdElkOiBwb3N0LmlkLCBtZXNzYWdlOiBcIlRoaXMgaXMgYW5vdGhlciBjb21tZW50IGFnYWluXCJ9KVxuICAgICAgcG9zdCA9IGF3YWl0IGRhdGFiYXNlLmdldFBvc3Qoe3Bvc3RJZDogcG9zdC5pZH0pXG5cbiAgICAgIGV4cGVjdChwb3N0Lm1lc3NhZ2VzLmxlbmd0aCkudG9CZSgyKVxuICAgICAgZXhwZWN0KHBvc3QubWVzc2FnZXNbMF0uaWQpLnRvQmUoY29tbWVudDMuaWQpXG5cbiAgICAgIGNvbnNvbGUubG9nKHBvc3QsIGNvbW1lbnQzKVxuICAgIH0pXG5cbiAgfSlcblxufSkiXSwiZmlsZSI6ImRhdGFiYXNlL215c3FsRGF0YWJhc2UudGVzdC5qcyJ9
