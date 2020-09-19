"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeSession = storeSession;
exports.createUser = exports.getUserWithEmail = exports.getUser = exports.addComment = exports.likePost = exports.createPost = exports.getPost = exports.getPosts = exports.users = exports.posts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var posts = [{}];
exports.posts = posts;
var users = [{}];
exports.users = users;

function mockFunction(fn) {
  function newfn() {
    newfn.callCount++;

    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    newfn.params = params;
    return fn.apply(void 0, params);
  }

  newfn.callCount = 0;
  return newfn;
}

function storeSession() {}

var getPosts = mockFunction( /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var userId, limit;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = _ref.userId, limit = _ref.limit;
            return _context.abrupt("return", posts);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
exports.getPosts = getPosts;
var getPost = mockFunction( /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref3) {
    var postId;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            postId = _ref3.postId;
            return _context2.abrupt("return", posts[0]);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref4.apply(this, arguments);
  };
}());
exports.getPost = getPost;
var createPost = mockFunction( /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref5) {
    var userId, description, media, post;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            userId = _ref5.userId, description = _ref5.description, media = _ref5.media;
            post = {
              user_id: userId,
              description: description,
              media: media,
              id: posts.length + 1,
              total_likes: 0,
              comments: []
            };
            posts.push(post);
            return _context3.abrupt("return", post);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x3) {
    return _ref6.apply(this, arguments);
  };
}());
exports.createPost = createPost;
var likePost = mockFunction( /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref7) {
    var userId, postId, post;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            userId = _ref7.userId, postId = _ref7.postId;
            post = posts.find(function (post) {
              return post.id == postId;
            });
            post.total_likes++;
            return _context4.abrupt("return", post);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4) {
    return _ref8.apply(this, arguments);
  };
}());
exports.likePost = likePost;
var addComment = mockFunction( /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_ref9) {
    var userId, postId, message, post;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            userId = _ref9.userId, postId = _ref9.postId, message = _ref9.message;
            post = posts.find(function (post) {
              return post.id == postId;
            });
            post.comments.push({
              user_id: userId,
              message: message
            });
            return _context5.abrupt("return", post);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x5) {
    return _ref10.apply(this, arguments);
  };
}());
exports.addComment = addComment;
var getUser = mockFunction( /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(options) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", users.find(function (user) {
              return user.email === options.email;
            }));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x6) {
    return _ref11.apply(this, arguments);
  };
}());
exports.getUser = getUser;
var getUserWithEmail = mockFunction( /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(email) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", getUser({
              email: email
            }));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x7) {
    return _ref12.apply(this, arguments);
  };
}());
exports.getUserWithEmail = getUserWithEmail;
var createUser = mockFunction( /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(_ref13) {
    var email, username, password, fullName, user;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            email = _ref13.email, username = _ref13.username, password = _ref13.password, fullName = _ref13.fullName;
            user = {
              id: users.length + 1,
              email: email,
              username: username,
              password: password,
              full_name: fullName
            };
            console.log('create user', user);
            users.push(user);
            return _context8.abrupt("return", user);

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x8) {
    return _ref14.apply(this, arguments);
  };
}());
exports.createUser = createUser;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BMDEwMzY4OTIvQkNJVC9hc3NpZ25tZW50X2FwcHMvZWMyX3MzX2ltYWdlX3VwbG9hZC9leHByZXNzLWJhY2stZW5kL3NyYy9kYXRhYmFzZS9tb2NrRGF0YWJhc2UuanMiXSwibmFtZXMiOlsicG9zdHMiLCJ1c2VycyIsIm1vY2tGdW5jdGlvbiIsImZuIiwibmV3Zm4iLCJjYWxsQ291bnQiLCJwYXJhbXMiLCJzdG9yZVNlc3Npb24iLCJnZXRQb3N0cyIsInVzZXJJZCIsImxpbWl0IiwiZ2V0UG9zdCIsInBvc3RJZCIsImNyZWF0ZVBvc3QiLCJkZXNjcmlwdGlvbiIsIm1lZGlhIiwicG9zdCIsInVzZXJfaWQiLCJpZCIsImxlbmd0aCIsInRvdGFsX2xpa2VzIiwiY29tbWVudHMiLCJwdXNoIiwibGlrZVBvc3QiLCJmaW5kIiwiYWRkQ29tbWVudCIsIm1lc3NhZ2UiLCJnZXRVc2VyIiwib3B0aW9ucyIsInVzZXIiLCJlbWFpbCIsImdldFVzZXJXaXRoRW1haWwiLCJjcmVhdGVVc2VyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZ1bGxOYW1lIiwiZnVsbF9uYW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFJQSxLQUFLLEdBQUcsQ0FBQyxFQUFELENBQVo7O0FBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQUMsRUFBRCxDQUFaOzs7QUFFUCxTQUFTQyxZQUFULENBQXNCQyxFQUF0QixFQUEwQjtBQUN4QixXQUFTQyxLQUFULEdBQTBCO0FBQ3hCQSxJQUFBQSxLQUFLLENBQUNDLFNBQU47O0FBRHdCLHNDQUFSQyxNQUFRO0FBQVJBLE1BQUFBLE1BQVE7QUFBQTs7QUFFeEJGLElBQUFBLEtBQUssQ0FBQ0UsTUFBTixHQUFlQSxNQUFmO0FBQ0EsV0FBT0gsRUFBRSxNQUFGLFNBQU1HLE1BQU4sQ0FBUDtBQUNEOztBQUNERixFQUFBQSxLQUFLLENBQUNDLFNBQU4sR0FBa0IsQ0FBbEI7QUFDQSxTQUFPRCxL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QSxJQVorQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBwb3N0cyA9IFt7fV1cbmV4cG9ydCBsZXQgdXNlcnMgPSBbe31dXG5cbmZ1bmN0aW9uIG1vY2tGdW5jdGlvbihmbikge1xuICBmdW5jdGlvbiBuZXdmbiguLi5wYXJhbXMpIHtcbiAgICBuZXdmbi5jYWxsQ291bnQrK1xuICAgIG5ld2ZuLnBhcmFtcyA9IHBhcmFtc1xuICAgIHJldHVybiBmbiguLi5wYXJhbXMpXG4gIH1cbiAgbmV3Zm4uY2FsbENvdW50ID0gMFxuICByZXR1cm4gbmV3Zm5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlU2Vzc2lvbigpIHtcbiAgXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9IG1vY2tGdW5jdGlvbihhc3luYyBmdW5jdGlvbiAoe3VzZXJJZCwgbGltaXR9KSB7XG4gIHJldHVybiBwb3N0c1xufSlcblxuZXhwb3J0IGNvbnN0IGdldFBvc3QgPSBtb2NrRnVuY3Rpb24oYXN5bmMgZnVuY3Rpb24gKHtwb3N0SWR9KSB7XG4gIHJldHVybiBwb3N0c1swXVxufSlcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3QgPSBtb2NrRnVuY3Rpb24oYXN5bmMgZnVuY3Rpb24gKHsgdXNlcklkLCBkZXNjcmlwdGlvbiwgbWVkaWEgfSkge1xuICBjb25zdCBwb3N0ID0ge1xuICAgIHVzZXJfaWQ6IHVzZXJJZCwgXG4gICAgZGVzY3JpcHRpb24sIFxuICAgIG1lZGlhLFxuICAgIGlkOiBwb3N0cy5sZW5ndGgrMSxcbiAgICB0b3RhbF9saWtlczogMCxcbiAgICBjb21tZW50czogW11cbiAgfVxuICBwb3N0cy5wdXNoKHBvc3QpXG5cbiAgcmV0dXJuIHBvc3Rcbn0pXG5cbmV4cG9ydCBjb25zdCBsaWtlUG9zdCA9IG1vY2tGdW5jdGlvbihhc3luYyBmdW5jdGlvbiAoeyB1c2VySWQsIHBvc3RJZCB9KSB7XG4gIGNvbnN0IHBvc3QgPSBwb3N0cy5maW5kKHBvc3QgPT4gcG9zdC5pZCA9PSBwb3N0SWQpXG4gIHBvc3QudG90YWxfbGlrZXMrK1xuICByZXR1cm4gcG9zdFxufSlcblxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSBtb2NrRnVuY3Rpb24oYXN5bmMgZnVuY3Rpb24gKHsgdXNlcklkLCBwb3N0SWQsIG1lc3NhZ2UgfSkge1xuICBjb25zdCBwb3N0ID0gcG9zdHMuZmluZChwb3N0ID0+IHBvc3QuaWQgPT0gcG9zdElkKVxuICBwb3N0LmNvbW1lbnRzLnB1c2goe3VzZXJfaWQ6IHVzZXJJZCwgbWVzc2FnZX0pXG4gIHJldHVybiBwb3N0XG59KVxuXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IG1vY2tGdW5jdGlvbihhc3luYyBmdW5jdGlvbiAob3B0aW9ucykge1xuICByZXR1cm4gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIuZW1haWwgPT09IG9wdGlvbnMuZW1haWwpXG59KVxuXG5leHBvcnQgY29uc3QgZ2V0VXNlcldpdGhFbWFpbCA9IG1vY2tGdW5jdGlvbihhc3luYyBmdW5jdGlvbiAoZW1haWwpIHtcbiAgcmV0dXJuIGdldFVzZXIoe2VtYWlsfSlcbn0pXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gbW9ja0Z1bmN0aW9uKCBhc3luYyBmdW5jdGlvbiAoe2VtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmQsIGZ1bGxOYW1lfSkge1xuICBjb25zdCB1c2VyID0ge1xuICAgIGlkOiB1c2Vycy5sZW5ndGggKyAxLFxuICAgIGVtYWlsLFxuICAgIHVzZXJuYW1lLFxuICAgIHBhc3N3b3JkLFxuICAgIGZ1bGxfbmFtZTogZnVsbE5hbWVcbiAgfVxuICBjb25zb2xlLmxvZygnY3JlYXRlIHVzZXInLCB1c2VyKVxuXG4gIHVzZXJzLnB1c2godXNlcilcblxuICByZXR1cm4gdXNlclxufSlcblxuXG4gICJdLCJmaWxlIjoiZGF0YWJhc2UvbW9ja0RhdGFiYXNlLmpzIn0=
