"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default(_ref) {
  var {
    upload,
    s3,
    uploadsDir,
    allPosts
  } = _ref;

  var router = _express.default.Router(); // get all posts


  router.get('/', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (req, res, next) {
      try {
        var objects = yield s3.listObjects();
        var posts = objects.Contents.filter(object => !object.Key.endsWith(".txt")).map(object => _path.default.join("/images/posts", object.Key));
        res.send({
          posts
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          error: error.message
        });
      }
    });

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }()); // Create a new post

  router.post('/', upload, /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* (req, res, next) {
      var media = req.files.map(file => ({
        url: "/images/posts/".concat(file.filename),
        type: 'image',
        path: _path.default.join(uploadsDir, file.filename)
      }));

      try {
        var results = [];

        for (var file of media) {
          var result = yield s3.upload({
            file: file.path
          });
          results.push(result);
        }

        res.send({
          media,
          results
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          error: error.message
        });
      } // Delete the temporary files


      media.forEach(file => _fs.default.unlinkSync(file.path));
    });

    return function (_x4, _x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  return router;
}