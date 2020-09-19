"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _default(_ref) {
  var upload = _ref.upload,
      allPosts = _ref.allPosts;

  var router = _express["default"].Router(); // get all posts


  router.get('/', /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              allPosts(function (err, files) {
                var posts = files.map(function (file) {
                  return _path["default"].join("/images/posts", file);
                });
                res.send({
                  posts: posts
                });
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }()); // Create a new post

  router.post('/', upload, /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
      var media;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              media = req.files.map(function (file) {
                return {
                  url: "/images/posts/".concat(file.filename),
                  type: 'image'
                };
              });
              res.send({
                media: media
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x4, _x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  return router;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BMDEwMzY4OTIvQkNJVC9hc3NpZ25tZW50X2FwcHMvZWMyX3MzX2ltYWdlX3VwbG9hZC9leHByZXNzLWJhY2stZW5kL3NyYy9wb3N0cy5qcyJdLCJuYW1lcyI6WyJ1cGxvYWQiLCJhbGxQb3N0cyIsInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZXJyIiwiZmlsZXMiLCJwb3N0cyIsIm1hcCIsImZpbGUiLCJwYXRoIiwiam9pbiIsInNlbmQiLCJwb3N0IiwibWVkaWEiLCJ1cmwiLCJmaWxlbmFtZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFZSx3QkFBNkI7QUFBQSxNQUFuQkEsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXOztBQUMxQyxNQUFNQyxNQUFNLEdBQUdDLG9CQUFRQyxNQUFSLEVBQWYsQ0FEMEMsQ0FHMUM7OztBQUNBRixFQUFBQSxNQUFNLENBQUNHLEdBQVAsQ0FBVyxHQUFYO0FBQUEsOEZBQWdCLGlCQUFlQyxHQUFmLEVBQW9CQyxHQUFwQixFQUF5QkMsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkUCxjQUFBQSxRQUFRLENBQUMsVUFBQ1EsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3ZCLG9CQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSx5QkFBSUMsaUJBQUtDLElBQUwsQ0FBVSxlQUFWLEVBQTJCRixJQUEzQixDQUFKO0FBQUEsaUJBQWQsQ0FBZDtBQUNBTixnQkFBQUEsR0FBRyxDQUFDUyxJQUFKLENBQVM7QUFBQ0wsa0JBQUFBLEtBQUssRUFBTEE7QUFBRCxpQkFBVDtBQUNELGVBSE8sQ0FBUjs7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUowQyxDQVcxQzs7QUFDQVQsRUFBQUEsTUFBTSxDQUFDZSxJQUFQLENBQVksR0FBWixFQUFpQmpCLE1BQWpCO0FBQUEsOEZBQXlCLGtCQUFlTSxHQUFmLEVBQW9CQyxHQUFwQixFQUF5QkMsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCVSxjQUFBQSxLQURpQixHQUNUWixHQUFHLENBQUNJLEtBQUosQ0FBVUUsR0FBVixDQUFjLFVBQUFDLElBQUk7QUFBQSx1QkFBSztBQUNuQ00sa0JBQUFBLEdBQUcsMEJBQW1CTixJQUFJLENBQUNPLFFBQXhCLENBRGdDO0FBRW5DQyxrQkFBQUEsSUFBSSxFQUFFO0FBRjZCLGlCQUFMO0FBQUEsZUFBbEIsQ0FEUztBQU12QmQsY0FBQUEsR0FBRyxDQUFDUyxJQUFKLENBQVM7QUFBQ0UsZ0JBQUFBLEtBQUssRUFBTEE7QUFBRCxlQUFUOztBQU51QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBLFNBQU9oQixNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oe3VwbG9hZCwgYWxsUG9zdHN9KSB7XG4gIGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxuICAvLyBnZXQgYWxsIHBvc3RzXG4gIHJvdXRlci5nZXQoJy8nLCBhc3luYyBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICAgIGFsbFBvc3RzKChlcnIsIGZpbGVzKSA9PiB7XG4gICAgICBjb25zdCBwb3N0cyA9IGZpbGVzLm1hcChmaWxlID0+IHBhdGguam9pbihcIi9pbWFnZXMvcG9zdHNcIiwgZmlsZSkpXG4gICAgICByZXMuc2VuZCh7cG9zdHN9KVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gQ3JlYXRlIGEgbmV3IHBvc3RcbiAgcm91dGVyLnBvc3QoJy8nLCB1cGxvYWQsIGFzeW5jIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgY29uc3QgbWVkaWEgPSByZXEuZmlsZXMubWFwKGZpbGUgPT4gKHtcbiAgICAgIHVybDogYC9pbWFnZXMvcG9zdHMvJHtmaWxlLmZpbGVuYW1lfWAsXG4gICAgICB0eXBlOiAnaW1hZ2UnXG4gICAgfSkpXG4gICAgXG4gICAgcmVzLnNlbmQoe21lZGlhfSlcbiAgfSlcblxuICByZXR1cm4gcm91dGVyXG59XG5cbiJdLCJmaWxlIjoicG9zdHMuanMifQ==
