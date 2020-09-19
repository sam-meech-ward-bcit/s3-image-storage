"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.status = status;
exports.end = end;
exports.run = run;
exports.getPosts = getPosts;
exports.getComments = getComments;
exports.getPost = getPost;
exports.createPost = createPost;
exports.likePost = likePost;
exports.addComment = addComment;
exports.getUser = getUser;
exports.getUserWithEmail = getUserWithEmail;
exports.createUser = createUser;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _mysql = _interopRequireDefault(require("mysql"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var dbDetails = {
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USERNAME || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'instasam'
};

var connection = _mysql["default"].createPool(dbDetails);

function status() {
  return _status.apply(this, arguments);
}

function _status() {
  _status = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              connection.getConnection(function (err, connection) {
                if (err) {
                  reject(err);
                  return;
                }

                resolve(_objectSpread(_objectSpread({}, connection), {}, {
                  host: dbDetails.host,
                  database: dbDetails.database
                }));
                connection.end();
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _status.apply(this, arguments);
}

function end() {
  connection.end();
}

function dateCompare(d1, d2) {
  var date1 = new Date(d1);
  var date2 = new Date(d2);
  return date2 - date1;
}

function parsePost(post) {
  return _objectSpread(_objectSpread({}, post), {}, {
    media: (JSON.parse(post.media) || []).filter(function (a) {
      return a;
    }),
    // Cause mysql will put null into an array
    comments: (JSON.parse(post.comments) || []).filter(function (a) {
      return a;
    }).sort(function (a, b) {
      return dateCompare(a.created, b.created);
    }),
    user: JSON.parse(post.user) || {}
  });
}

function parseComment(comment) {
  return _objectSpread(_objectSpread({}, comment), {}, {
    user: JSON.parse(comment.user) || {}
  });
}

function run(sql) {
  return new Promise(function (resolve, reject) {
    connection.query(sql, null, function (error, results, fields) {
      if (error) {
        reject(error);
        return;
      }

      resolve(results);
    });
  });
}

function _callProcedure(callback, name) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  var query = "CALL ".concat(name, "(").concat(params.map(function () {
    return '?';
  }).join(', '), ")");
  console.log(query, params);
  connection.query(query, params, function (error, results, fields) {
    if (error) {
      console.log(query, error);
      return callback(error);
    }

    callback(null, results[0]);
  });
}

function callProcedure(name) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    params[_key2 - 1] = arguments[_key2];
  }

  return new Promise(function (resolve, reject) {
    _callProcedure.apply(void 0, [function (err, rows) {
      if (err) {
        reject(err);
        return;
      }

      resolve(rows);
    }, name].concat(params));
  });
}

function getPosts(_ref) {
  var userId = _ref.userId,
      limit = _ref.limit;
  return callProcedure('get_posts', limit, userId).then(function (rows) {
    return rows.map(parsePost);
  });
}

function getComments(_ref2) {
  var postId = _ref2.postId,
      limit = _ref2.limit;
  return callProcedure('get_comments', limit, postId).then(function (rows) {
    return rows.map(parseComment);
  });
}

function getPost(_ref3) {
  var postId = _ref3.postId,
      userId = _ref3.userId;
  return callProcedure('get_post', postId, userId).then(function (rows) {
    return parsePost(rows[0]);
  });
}

function createPost(_x) {
  return _createPost.apply(this, arguments);
}

function _createPost() {
  _createPost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref4) {
    var userId, description, media, fistImage, result, post, order, _iterator, _step, image;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userId = _ref4.userId, description = _ref4.description, media = _ref4.media;
            media = (0, _toConsumableArray2["default"])(media);
            fistImage = media.shift();
            _context2.next = 5;
            return callProcedure('create_post', userId, description, fistImage.type, fistImage.url);

          case 5:
            result = _context2.sent;
            post = result[0];
            order = 2;
            _iterator = _createForOfIteratorHelper(media);
            _context2.prev = 9;

            _iterator.s();

          case 11:
            if ((_step = _iterator.n()).done) {
              _context2.next = 17;
              break;
            }

            image = _step.value;
            _context2.next = 15;
            return callProcedure('add_media_to_post', post.id, image.type, order++, image.url);

          case 15:
            _context2.next = 11;
            break;

          case 17:
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](9);

            _iterator.e(_context2.t0);

          case 22:
            _context2.prev = 22;

            _iterator.f();

            return _context2.finish(22);

          case 25:
            _context2.next = 27;
            return getPost({
              postId: post.id,
              userId: userId
            });

          case 27:
            return _context2.abrupt("return", _context2.sent);

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[9, 19, 22, 25]]);
  }));
  return _createPost.apply(this, arguments);
}

function likePost(_x2) {
  return _likePost.apply(this, arguments);
}

function _likePost() {
  _likePost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref5) {
    var likerId, postId, userId;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            likerId = _ref5.likerId, postId = _ref5.postId, userId = _ref5.userId;
            _context3.next = 3;
            return callProcedure('like_post', likerId, postId);

          case 3:
            _context3.next = 5;
            return getPost({
              postId: postId,
              userId: userId
            });

          case 5:
            return _context3.abrupt("return", _context3.sent);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _likePost.apply(this, arguments);
}

function addComment(_x3) {
  return _addComment.apply(this, arguments);
} // export async function likeComment({ userId, commentId }) {
//   await callProcedure('like_comment', userId, postId)
//   return await getPost({postId})
// }


function _addComment() {
  _addComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref6) {
    var userId, postId, message;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            userId = _ref6.userId, postId = _ref6.postId, message = _ref6.message;
            _context4.next = 3;
            return callProcedure('add_comment', userId, postId, message).then(function (rows) {
              return parseComment(rows[0]);
            });

          case 3:
            return _context4.abrupt("return", _context4.sent);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _addComment.apply(this, arguments);
}

function getUser(options) {
  return (options.id ? callProcedure('get_user_with_id', options.id) : callProcedure('get_user_with_email', options.email)).then(function (rows) {
    var user = rows[0];

    if (!user) {
      throw Error("Invalid email");
    }

    if (!options.password) {
      return user;
    }

    return new Promise(function (resolve, reject) {
      _bcryptjs["default"].compare(options.password, user.password, function (err, same) {
        if (err) {
          reject(err);
          return;
        }

        if (same) {
          resolve(user);
        } else {
          reject(Error("Passwords don't match"));
        }
      });
    });
  });
}

function getUserWithEmail(email) {
  return getUser({
    email: email
  });
}

function createUser(_ref7) {
  var email = _ref7.email,
      username = _ref7.username,
      password = _ref7.password,
      fullName = _ref7.fullName,
      profilePhoto = _ref7.profilePhoto;
  return new Promise(function (resolve, reject) {
    _bcryptjs["default"].hash(password, 12, function (error, encrypted) {
      if (error) {
        reject(error);
        return;
      }

      callProcedure('create_user', username, encrypted, email, fullName, profilePhoto).then(function (rows) {
        return resolve(rows[0]);
      })["catch"](reject);
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BMDEwMzY4OTIvQkNJVC9hc3NpZ25tZW50X2FwcHMvZWMyX3MzX2ltYWdlX3VwbG9hZC9leHByZXNzLWJhY2stZW5kL3NyYy9kYXRhYmFzZS9teXNxbERhdGFiYXNlLmpzIl0sIm5hbWVzIjpbImRiRGV0YWlscyIsImNvbm5lY3Rpb25MaW1pdCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiTVlTUUxfSE9TVCIsInVzZXIiLCJNWVNRTF9VU0VSTkFNRSIsInBhc3N3b3JkIiwiTVlTUUxfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIk1ZU1FMX0RBVEFCQVNFIiwiY29ubmVjdGlvbiIsIm15c3FsIiwiY3JlYXRlUG9vbCIsInN0YXR1cyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0Q29ubmVjdGlvbiIsImVyciIsImVuZCIsImRhdGVDb21wYXJlIiwiZDEiLCJkMiIsImRhdGUxIiwiRGF0ZSIsImRhdGUyIiwicGFyc2VQb3N0IiwicG9zdCIsIm1lZGlhIiwiSlNPTiIsInBhcnNlIiwiZmlsdGVyIiwiYSIsImNvbW1lbnRzIiwic29ydCIsImIiLCJjcmVhdGVkIiwicGFyc2VDb21tZW50IiwiY29tbWVudCIsInJ1biIsInNxbCIsInF1ZXJ5IiwiZXJyb3IiLCJyZXN1bHRzIiwiZmllbGRzIiwiX2NhbGxQcm9jZWR1cmUiLCJjYWxsYmFjayIsIm5hbWUiLCJwYXJhbXMiLCJtYXAiLCJqb2luIiwiY29uc29sZSIsImxvZyIsImNhbGxQcm9jZWR1cmUiLCJyb3dzIiwiZ2V0UG9zdHMiLCJ1c2VySWQiLCJsaW1pdCIsInRoZW4iLCJnZXRDb21tZW50cyIsInBvc3RJZCIsImdldFBvc3QiLCJjcmVhdGVQb3N0IiwiZGVzY3JpcHRpb24iLCJmaXN0SW1hZ2UiLCJzaGlmdCIsInR5cGUiLCJ1cmwiLCJyZXN1bHQiLCJvcmRlciIsImltYWdlIiwiaWQiLCJsaWtlUG9zdCIsImxpa2VySWQiLCJhZGRDb21tZW50IiwibWVzc2FnZSIsImdldFVzZXIiLCJvcHRpb25zIiwiZW1haWwiLCJFcnJvciIsImJjcnlwdCIsImNvbXBhcmUiLCJzYW1lIiwiZ2V0VXNlcldpdGhFbWFpbCIsImNyZWF0ZVVzZXIiLCJ1c2VybmFtZSIsImZ1bGxOYW1lIiwicHJvZmlsZVBob3RvIiwiaGFzaCIsImVuY3J5cHRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLGVBQWUsRUFBRyxFQURGO0FBRWhCQyxFQUFBQSxJQUFJLEVBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFaLElBQTBCLFdBRnJCO0FBR2hCQyxFQUFBQSxJQUFJLEVBQU9ILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxjQUFaLElBQThCLE1BSHpCO0FBSWhCQyxFQUFBQSxRQUFRLEVBQUdMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxjQUFaLElBQThCLEVBSnpCO0FBS2hCQyxFQUFBQSxRQUFRLEVBQUdQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxjQUFaLElBQThCO0FBTHpCLENBQWxCOztBQU9BLElBQU1DLFVBQVUsR0FBR0Msa0JBQU1DLFVBQU4sQ0FBaUJkLFNBQWpCLENBQW5COztTQUVzQmUsTTs7Ozs7MEZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUNFLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENOLGNBQUFBLFVBQVUsQ0FBQ08sYUFBWCxDQUF5QixVQUFTQyxHQUFULEVBQWNSLFVBQWQsRUFBMEI7QUFDakQsb0JBQUlRLEdBQUosRUFBUztBQUNQRixrQkFBQUEsTUFBTSxDQUFDRSxHQUFELENBQU47QUFDQTtBQUNEOztBQUNESCxnQkFBQUEsT0FBTyxpQ0FBS0wsVUFBTDtBQUFpQlYsa0JBQUFBLElBQUksRUFBRUYsU0FBUyxDQUFDRSxJQUFqQztBQUF1Q1Esa0JBQUFBLFFBQVEsRUFBRVYsU0FBUyxDQUFDVTtB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OztBQUVNLFNBQVNNLFVBQVQsUUFBeUU7QUFBQSxNQUFwRE4sS0FBb0QsU0FBcERBLEtBQW9EO0FBQUEsTUFBN0NPLFFBQTZDLFNBQTdDQSxRQUE2QztBQUFBLE1BQW5DL0UsUUFBbUMsU0FBbkNBLFFBQW1DO0FBQUEsTUFBekJnRixRQUF5QixTQUF6QkEsUUFBeUI7QUFBQSxNQUFmQyxZQUFlLFNBQWZBLFlBQWU7QUFDOUUsU0FBTyxJQUFJekUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q2dFLHlCQUFPUSxJQUFQLENBQVlsRixRQUFaLEVBQXNCLEVBQXRCLEVBQTBCLFVBQUNvQyxLQUFELEVBQVErQyxTQUFSLEVBQXNCO0FBQzlDLFVBQUkvQyxLQUFKLEVBQVc7QUFDVDFCLFFBQUFBLE1BQU0sQ0FBQzBCLEtBQUQsQ0FBTjtBQUFlO0FBQ2hCOztBQUVEVyxNQUFBQSxhQUFhLENBQUMsYUFBRCxFQUFnQmdDLFFBQWhCLEVBQTBCSSxTQUExQixFQUFxQ1gsS0FBckMsRUFBNENRLFFBQTVDLEVBQXNEQyxZQUF0RCxDQUFiLENBQ0M3QixJQURELENBQ00sVUFBQUosSUFBSTtBQUFBLGVBQUl2QyxPQUFPLENBQUN1QyxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQVg7QUFBQSxPQURWLFdBRU90QyxNQUZQO0FBR0QsS0FSRDtBQVNELEdBVk0sQ0FBUDtBQVlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcbmltcG9ydCBteXNxbCBmcm9tICdteXNxbCdcblxuY29uc3QgZGJEZXRhaWxzID0ge1xuICBjb25uZWN0aW9uTGltaXQgOiAxMCxcbiAgaG9zdCAgICAgOiBwcm9jZXNzLmVudi5NWVNRTF9IT1NUIHx8ICdsb2NhbGhvc3QnLFxuICB1c2VyICAgICA6IHByb2Nlc3MuZW52Lk1ZU1FMX1VTRVJOQU1FIHx8ICdyb290JyxcbiAgcGFzc3dvcmQgOiBwcm9jZXNzLmVudi5NWVNRTF9QQVNTV09SRCB8fCAnJyxcbiAgZGF0YWJhc2UgOiBwcm9jZXNzLmVudi5NWVNRTF9EQVRBQkFTRSB8fCAnaW5zdGFzYW0nXG59XG5jb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlUG9vbChkYkRldGFpbHMpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGF0dXMoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29ubmVjdGlvbi5nZXRDb25uZWN0aW9uKGZ1bmN0aW9uKGVyciwgY29ubmVjdGlvbikge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJlc29sdmUoey4uLmNvbm5lY3Rpb24sIGhvc3Q6IGRiRGV0YWlscy5ob3N0LCBkYXRhYmFzZTogZGJEZXRhaWxzLmRhdGFiYXNlfSlcbiAgICAgIGNvbm5lY3Rpb24uZW5kKClcbiAgICB9KTtcbiAgfSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kKCkge1xuICBjb25uZWN0aW9uLmVuZCgpXG59XG5cbmZ1bmN0aW9uIGRhdGVDb21wYXJlKGQxLCBkMikge1xuICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKGQxKVxuICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKGQyKVxuICBcbiAgcmV0dXJuIGRhdGUyIC0gZGF0ZTFcbn1cblxuZnVuY3Rpb24gcGFyc2VQb3N0KHBvc3QpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5wb3N0LFxuICAgIG1lZGlhOiAoSlNPTi5wYXJzZShwb3N0Lm1lZGlhKSB8fCBbXSkuZmlsdGVyKGEgPT4gYSksIC8vIENhdXNlIG15c3FsIHdpbGwgcHV0IG51bGwgaW50byBhbiBhcnJheVxuICAgIGNvbW1lbnRzOiAoSlNPTi5wYXJzZShwb3N0LmNvbW1lbnRzKSB8fCBbXSkuZmlsdGVyKGEgPT4gYSkuc29ydCgoYSxiKSA9PiBkYXRlQ29tcGFyZShhLmNyZWF0ZWQsIGIuY3JlYXRlZCkpLFxuICAgIHVzZXI6IChKU09OLnBhcnNlKHBvc3QudXNlcikgfHwge30pLFxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlQ29tbWVudChjb21tZW50KSB7XG4gIHJldHVybiB7XG4gICAgLi4uY29tbWVudCxcbiAgICB1c2VyOiAoSlNPTi5wYXJzZShjb21tZW50LnVzZXIpIHx8IHt9KSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuKHNxbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbm5lY3Rpb24ucXVlcnkoc3FsLCBudWxsLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdHMsIGZpZWxkcykge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7IHJldHVyblxuICAgICAgfVxuICAgICAgcmVzb2x2ZShyZXN1bHRzKVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIF9jYWxsUHJvY2VkdXJlKGNhbGxiYWNrLCBuYW1lLCAuLi5wYXJhbXMpIHtcbiAgbGV0IHF1ZXJ5ID0gYENBTEwgJHtuYW1lfSgke3BhcmFtcy5tYXAoKCkgPT4gJz8nKS5qb2luKCcsICcpfSlgO1xuXG4gIGNvbnNvbGUubG9nKHF1ZXJ5LCBwYXJhbXMpXG4gIGNvbm5lY3Rpb24ucXVlcnkocXVlcnksIHBhcmFtcywgZnVuY3Rpb24gKGVycm9yLCByZXN1bHRzLCBmaWVsZHMpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5LCBlcnJvcilcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcilcbiAgICB9XG4gICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0c1swXSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2FsbFByb2NlZHVyZShuYW1lLCAuLi5wYXJhbXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBfY2FsbFByb2NlZHVyZSgoZXJyLCByb3dzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpOyByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJlc29sdmUocm93cylcbiAgICB9LCBuYW1lLCAuLi5wYXJhbXMpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0cyh7dXNlcklkLCBsaW1pdH0pIHtcbiAgcmV0dXJuIGNhbGxQcm9jZWR1cmUoJ2dldF9wb3N0cycsIGxpbWl0LCB1c2VySWQpXG4gIC50aGVuKHJvd3MgPT4gcm93cy5tYXAocGFyc2VQb3N0KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbW1lbnRzKHtwb3N0SWQsIGxpbWl0fSkge1xuICByZXR1cm4gY2FsbFByb2NlZHVyZSgnZ2V0X2NvbW1lbnRzJywgbGltaXQsIHBvc3RJZClcbiAgLnRoZW4ocm93cyA9PiByb3dzLm1hcChwYXJzZUNvbW1lbnQpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdCh7cG9zdElkLCB1c2VySWR9KSB7XG4gIHJldHVybiBjYWxsUHJvY2VkdXJlKCdnZXRfcG9zdCcsIHBvc3RJZCwgdXNlcklkKVxuICAudGhlbihyb3dzID0+IHBhcnNlUG9zdChyb3dzWzBdKSlcbn1cblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3N0KHsgdXNlcklkLCBkZXNjcmlwdGlvbiwgbWVkaWEgfSkge1xuICBtZWRpYSA9IFsuLi5tZWRpYV1cbiAgY29uc3QgZmlzdEltYWdlID0gbWVkaWEuc2hpZnQoKVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsUHJvY2VkdXJlKCdjcmVhdGVfcG9zdCcsIHVzZXJJZCwgZGVzY3JpcHRpb24sIGZpc3RJbWFnZS50eXBlLCBmaXN0SW1hZ2UudXJsKVxuICBjb25zdCBwb3N0ID0gcmVzdWx0WzBdXG4gIFxuICBsZXQgb3JkZXIgPSAyXG4gIGZvciAoY29uc3QgaW1hZ2Ugb2YgbWVkaWEpIHtcbiAgICBhd2FpdCBjYWxsUHJvY2VkdXJlKCdhZGRfbWVkaWFfdG9fcG9zdCcsIHBvc3QuaWQsIGltYWdlLnR5cGUsIG9yZGVyKyssIGltYWdlLnVybClcbiAgfVxuXG4gIHJldHVybiBhd2FpdCBnZXRQb3N0KHtwb3N0SWQ6IHBvc3QuaWQsIHVzZXJJZH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaWtlUG9zdCh7IGxpa2VySWQsIHBvc3RJZCwgdXNlcklkfSkge1xuICBhd2FpdCBjYWxsUHJvY2VkdXJlKCdsaWtlX3Bvc3QnLCBsaWtlcklkLCBwb3N0SWQpXG4gIHJldHVybiBhd2FpdCBnZXRQb3N0KHtwb3N0SWQsIHVzZXJJZH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRDb21tZW50KHsgdXNlcklkLCBwb3N0SWQsIG1lc3NhZ2UgfSkge1xuICByZXR1cm4gYXdhaXQgY2FsbFByb2NlZHVyZSgnYWRkX2NvbW1lbnQnLCB1c2VySWQsIHBvc3RJZCwgbWVzc2FnZSkudGhlbihyb3dzID0+IHBhcnNlQ29tbWVudChyb3dzWzBdKSlcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpa2VDb21tZW50KHsgdXNlcklkLCBjb21tZW50SWQgfSkge1xuLy8gICBhd2FpdCBjYWxsUHJvY2VkdXJlKCdsaWtlX2NvbW1lbnQnLCB1c2VySWQsIHBvc3RJZClcbi8vICAgcmV0dXJuIGF3YWl0IGdldFBvc3Qoe3Bvc3RJZH0pXG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyKG9wdGlvbnMpIHtcbiAgcmV0dXJuIChvcHRpb25zLmlkID8gY2FsbFByb2NlZHVyZSgnZ2V0X3VzZXJfd2l0aF9pZCcsIG9wdGlvbnMuaWQpIDogY2FsbFByb2NlZHVyZSgnZ2V0X3VzZXJfd2l0aF9lbWFpbCcsIG9wdGlvbnMuZW1haWwpKVxuICAudGhlbihyb3dzID0+IHtcbiAgICBjb25zdCB1c2VyID0gcm93c1swXVxuICAgIGlmICghdXNlcikgIHtcbiAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBlbWFpbFwiKVxuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5wYXNzd29yZCkge1xuICAgICAgcmV0dXJuIHVzZXJcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgIGJjcnlwdC5jb21wYXJlKG9wdGlvbnMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQsIChlcnIsIHNhbWUpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTsgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzYW1lKSB7XG4gICAgICAgICAgICByZXNvbHZlKHVzZXIpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChFcnJvcihcIlBhc3N3b3JkcyBkb24ndCBtYXRjaFwiKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJXaXRoRW1haWwoZW1haWwpIHtcbiAgcmV0dXJuIGdldFVzZXIoe2VtYWlsfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVzZXIoe2VtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmQsIGZ1bGxOYW1lLCBwcm9maWxlUGhvdG99KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEyLCAoZXJyb3IsIGVuY3J5cHRlZCkgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7IHJldHVyblxuICAgICAgfVxuXG4gICAgICBjYWxsUHJvY2VkdXJlKCdjcmVhdGVfdXNlcicsIHVzZXJuYW1lLCBlbmNyeXB0ZWQsIGVtYWlsLCBmdWxsTmFtZSwgcHJvZmlsZVBob3RvKVxuICAgICAgLnRoZW4ocm93cyA9PiByZXNvbHZlKHJvd3NbMF0pKVxuICAgICAgLmNhdGNoKHJlamVjdClcbiAgICB9KVxuICB9KVxuXG59XG5cblxuICAiXSwiZmlsZSI6ImRhdGFiYXNlL215c3FsRGF0YWJhc2UuanMifQ==
