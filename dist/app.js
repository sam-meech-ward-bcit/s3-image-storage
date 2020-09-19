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

var _fs = _interopRequireDefault(require("fs"));

var _morgan = _interopRequireDefault(require("morgan"));

var _posts = _interopRequireDefault(require("./routes/posts"));

var _status = _interopRequireDefault(require("./routes/status"));

var _imageUploader = _interopRequireDefault(require("./imageUploader"));

var _s3Manager = _interopRequireDefault(require("./s3Manager"));

var bucketName = process.env.BUCKET_NAME || "";
var region = process.env.BUCKET_REGION || "";
var s3 = (0, _s3Manager["default"])({
  bucketName: bucketName,
  region: region
});

function _default(_x) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
    var app, handleFileRequest;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            handleFileRequest = function _handleFileRequest(filePath, res) {
              _fs["default"].access(filePath, function (err) {
                if (err) {
                  console.log("The file does not exist.");
                  res.sendStatus(404);
                  return;
                }

                res.sendFile(filePath);
              });
            };

            app = (0, _express["default"])();
            app.use(_express["default"]["static"](_path["default"].join(__dirname, '../build')));
            app.use((0, _morgan["default"])(':method :url :status :res[content-length] - :response-time ms'));
            app.use(_express["default"].json());
            app.use(_express["default"].urlencoded({
              extended: false
            }));
            app.use('/api/posts', (0, _posts["default"])({
              upload: _imageUploader["default"].uploadPosts,
              allPosts: _imageUploader["default"].allPosts
            }));
            app.use('/api/status', (0, _status["default"])());
            app.get('/images/posts/:filename', function (req, res, next) {
              var imagePath = _path["default"].join(_imageUploader["default"].fullPostsDir, req.params.filename);

              handleFileRequest(imagePath, res);
            });
            app.get('/images/avatars/:filename', function (req, res, next) {
              var imagePath = _path["default"].join(_imageUploader["default"].fullAvatarsDir, req.params.filename);

              handleFileRequest(imagePath, res);
            });
            app.get('/s3', function (req, res) {});
            app.get('*', function (req, res) {
              res.sendFile(_path["default"].join(__dirname, '../build/index.html'));
            });
            return _context.abrupt("return", app);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BMDEwMzY4OTIvQkNJVC9hc3NpZ25tZW50X2FwcHMvZWMyX3MzX2ltYWdlX3VwbG9hZC9leHByZXNzLWJhY2stZW5kL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYnVja2V0TmFtZSIsInByb2Nlc3MiLCJlbnYiLCJCVUNLRVRfTkFNRSIsInJlZ2lvbiIsIkJVQ0tFVF9SRUdJT04iLCJzMyIsInBhcmFtcyIsImhhbmRsZUZpbGVSZXF1ZXN0IiwiZmlsZVBhdGgiLCJyZXMiLCJmcyIsImFjY2VzcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzZW5kU3RhdHVzIiwic2VuZEZpbGUiLCJhcHAiLCJ1c2UiLCJleHByZXNzIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwidXBsb2FkIiwiaW1hZ2VVcGxvYWRlciIsInVwbG9hZFBvc3RzIiwiYWxsUG9zdHMiLCJnZXQiLCJyZXEiLCJuZXh0IiwiaW1hZ2VQYXRoIiwiZnVsbFBvc3RzRGlyIiwiZmlsZW5hbWUiLCJmdWxsQXZhdGFyc0RpciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBLElBQU1BLFVBQVUsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQVosSUFBMkIsRUFBOUM7QUFDQSxJQUFNQyxNQUFNLEdBQUdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxhQUFaLElBQTZCLEVBQTVDO0FBQ0EsSUFBTUMsRUFBRSxHQUFHLDJCQUFVO0FBQUNOLEVBQUFBLFVBQVUsRUFBVkEsVUFBRDtBQUFhSSxFQUFBQSxNQUFNLEVBQU5BO0FBQWIsQ0FBVixDQUFYOzs7Ozs7O3VGQUVlLGlCQUFlRyxNQUFmO0FBQUEsYUFZSkMsaUJBWkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlKQSxZQUFBQSxpQkFaSSwrQkFZY0MsUUFaZCxFQVl3QkMsR0FaeEIsRUFZNkI7QUFDeENDLDZCQUFHQyxNQUFILENBQVVILFFBQVYsRUFBb0IsVUFBQ0ksR0FBRCxFQUFTO0FBQzNCLG9CQUFJQSxHQUFKLEVBQVM7QUFDUEMsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaO0FBQ0FMLGtCQUFBQSxHQUFHLENBQUNNLFVBQUosQ0FBZSxHQUFmO0FBQ0E7QUFDRDs7QUFDRE4sZ0JBQUFBLEdBQUcsQ0FBQ08sUUFBSixDQUFhUixRQUFiO0FBQ0QsZUFQRDtBQVFELGFBckJZOztBQUNQUyxZQUFBQSxHQURPLEdBQ0QsMEJBREM7QUFHYkEsWUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVFDLDhCQUFlQyxpQkFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFVBQXJCLENBQWYsQ0FBUjtBQUVBTCxZQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSx3QkFBTywrREFBUCxDQUFSO0FBQ0FELFlBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxvQkFBUUksSUFBUixFQUFSO0FBQ0FOLFlBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxvQkFBUUssVUFBUixDQUFtQjtBQUFFQyxjQUFBQSxRQUFRLEVBQUU7QUFBWixhQUFuQixDQUFSO0FBRUFSLFlBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLFlBQVIsRUFBc0IsdUJBQVk7QUFBQ1EsY0FBQUEsTUFBTSxFQUFFQywwQkFBY0MsV0FBdkI7QUFBb0NDLGNBQUFBLFFBQVEsRUFBRUYsMEJBQWNFO0FBQTVELGFBQVosQ0FBdEI7QUFDQVosWUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsYUFBUixFQUFzQix5QkFBdEI7QUFhQUQsWUFBQUEsR0FBRyxDQUFDYSxHQUFKLENBQVEseUJBQVIsRUFBbUMsVUFBQ0MsR0FBRCxFQUFNdEIsR0FBTixFQUFXdUIsSUFBWCxFQUFvQjtBQUNyRCxrQkFBTUMsU0FBUyxHQUFHYixpQkFBS0MsSUFBTCxDQUFVTSwwQkFBY08sWUFBeEIsRUFBc0NILEdBQUcsQ0FBQ3pCLE1BQUosQ0FBVzZCLFFBQWpELENBQWxCOztBQUNBNUIsY0FBQUEsaUJBQWlCLENBQUMwQixTQUFELEVBQVl4QixHQUFaLENBQWpCO0FBQ0QsYUFIRDtBQUlBUSxZQUFBQSxHQUFHLENBQUNhLEdBQUosQ0FBUSwyQkFBUixFQUFxQyxVQUFDQyxHQUFELEVBQU10QixHQUFOLEVBQVd1QixJQUFYLEVBQW9CO0FBQ3ZELGtCQUFNQyxTQUFTLEdBQUdiLGlCQUFLQyxJQUFMLENBQVVNLDBCQUFjUyxjQUF4QixFQUF3Q0wsR0FBRyxDQUFDekIsTUFBSixDQUFXNkIsUUFBbkQsQ0FBbEI7O0FBQ0E1QixjQUFBQSxpQkFBaUIsQ0FBQzBCLFNBQUQsRUFBWXhCLEdBQVosQ0FBakI7QUFDRCxhQUhEO0FBS0FRLFlBQUFBLEdBQUcsQ0FBQ2EsR0FBSixDQUFRLEtBQVIsRUFBZSxVQUFDQyxHQUFELEVBQU10QixHQUFOLEVBQWMsQ0FFNUIsQ0FGRDtBQUlBUSxZQUFBQSxHQUFHLENBQUNhLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsR0FBRCxFQUFNdEIsR0FBTixFQUFhO0FBQ3hCQSxjQUFBQSxHQUFHLENBQUNPLFFBQUosQ0FBYUksaUJBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixxQkFBckIsQ0FBYjtBQUNELGFBRkQ7QUFwQ2EsNkNBd0NOTCxHQXhDTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ21vcmdhbidcblxuaW1wb3J0IHBvc3RzUm91dGVyIGZyb20gJy4vcm91dGVzL3Bvc3RzJ1xuaW1wb3J0IHN0YXR1c1JvdXRlciBmcm9tICcuL3JvdXRlcy9zdGF0dXMnXG5pbXBvcnQgaW1hZ2VVcGxvYWRlciBmcm9tICcuL2ltYWdlVXBsb2FkZXInXG5cbmltcG9ydCBzM01hbmFnZXIgZnJvbSAnLi9zM01hbmFnZXInXG5cbmNvbnN0IGJ1Y2tldE5hbWUgPSBwcm9jZXNzLmVudi5CVUNLRVRfTkFNRSB8fCBcIlwiXG5jb25zdCByZWdpb24gPSBwcm9jZXNzLmVudi5CVUNLRVRfUkVHSU9OIHx8IFwiXCJcbmNvbnN0IHMzID0gczNNYW5hZ2VyKHtidWNrZXROYW1lLCByZWdpb259KVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbihwYXJhbXMpIHtcbiAgY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbiAgYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vYnVpbGQnKSkpXG5cbiAgYXBwLnVzZShsb2dnZXIoJzptZXRob2QgOnVybCA6c3RhdHVzIDpyZXNbY29udGVudC1sZW5ndGhdIC0gOnJlc3BvbnNlLXRpbWUgbXMnKSlcbiAgYXBwLnVzZShleHByZXNzLmpzb24oKSlcbiAgYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpXG5cbiAgYXBwLnVzZSgnL2FwaS9wb3N0cycsIHBvc3RzUm91dGVyKHt1cGxvYWQ6IGltYWdlVXBsb2FkZXIudXBsb2FkUG9zdHMsIGFsbFBvc3RzOiBpbWFnZVVwbG9hZGVyLmFsbFBvc3RzfSkpXG4gIGFwcC51c2UoJy9hcGkvc3RhdHVzJyxzdGF0dXNSb3V0ZXIoKSApXG4gIFxuICBmdW5jdGlvbiBoYW5kbGVGaWxlUmVxdWVzdChmaWxlUGF0aCwgcmVzKSB7XG4gICAgZnMuYWNjZXNzKGZpbGVQYXRoLCAoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGZpbGUgZG9lcyBub3QgZXhpc3QuXCIpXG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDQwNClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IFxuICAgICAgcmVzLnNlbmRGaWxlKGZpbGVQYXRoKVxuICAgIH0pXG4gIH1cblxuICBhcHAuZ2V0KCcvaW1hZ2VzL3Bvc3RzLzpmaWxlbmFtZScsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IGltYWdlUGF0aCA9IHBhdGguam9pbihpbWFnZVVwbG9hZGVyLmZ1bGxQb3N0c0RpciwgcmVxLnBhcmFtcy5maWxlbmFtZSlcbiAgICBoYW5kbGVGaWxlUmVxdWVzdChpbWFnZVBhdGgsIHJlcylcbiAgfSlcbiAgYXBwLmdldCgnL2ltYWdlcy9hdmF0YXJzLzpmaWxlbmFtZScsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IGltYWdlUGF0aCA9IHBhdGguam9pbihpbWFnZVVwbG9hZGVyLmZ1bGxBdmF0YXJzRGlyLCByZXEucGFyYW1zLmZpbGVuYW1lKVxuICAgIGhhbmRsZUZpbGVSZXF1ZXN0KGltYWdlUGF0aCwgcmVzKVxuICB9KVxuXG4gIGFwcC5nZXQoJy9zMycsIChyZXEsIHJlcykgPT4ge1xuXG4gIH0pXG5cbiAgYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT57XG4gICAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9idWlsZC9pbmRleC5odG1sJykpO1xuICB9KVxuXG4gIHJldHVybiBhcHBcbn0iXSwiZmlsZSI6ImFwcC5qcyJ9
