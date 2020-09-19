"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _morgan = _interopRequireDefault(require("morgan"));

var _posts = _interopRequireDefault(require("./routes/posts"));

var _status = _interopRequireDefault(require("./routes/status"));

var _imageUploader = _interopRequireDefault(require("./imageUploader"));

var _s3Manager = _interopRequireDefault(require("./s3Manager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bucketName = process.env.BUCKET_NAME || "";
var region = process.env.BUCKET_REGION || "";
var s3 = (0, _s3Manager.default)({
  bucketName,
  region
});

function _default(_x) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator(function* (params) {
    var app = (0, _express.default)();
    app.use(_express.default.static(_path.default.join(__dirname, '../build')));
    app.use((0, _morgan.default)(':method :url :status :res[content-length] - :response-time ms'));
    app.use(_express.default.json());
    app.use(_express.default.urlencoded({
      extended: false
    }));
    app.use('/api/posts', (0, _posts.default)({
      upload: _imageUploader.default.uploadPosts,
      s3,
      uploadsDir: _imageUploader.default.fullPostsDir,
      allPosts: _imageUploader.default.allPosts
    }));
    app.use('/api/status', (0, _status.default)());

    function handleFileRequest(filePath, res) {
      _fs.default.access(filePath, err => {
        if (err) {
          console.log("The file does not exist.");
          res.sendStatus(404);
          return;
        }

        res.sendFile(filePath);
      });
    } // app.get('/images/posts/:filename', (req, res, next) => {
    //   const imagePath = path.join(imageUploader.fullPostsDir, req.params.filename)
    //   handleFileRequest(imagePath, res)
    // })


    app.get('/images/posts/:fileKey', (req, res, next) => {
      var {
        fileKey
      } = req.params;
      var stream = s3.getStream({
        fileKey
      });
      res.sendFile(stream);
    });
    app.get('/s3', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* (req, res) {
        try {
          var buckets = yield s3.listBuckets();
          var objects = yield s3.listObjects();
          res.send({
            buckets,
            objects
          });
        } catch (error) {
          res.status(500).send({
            error
          });
        }
      });

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());
    app.get('*', (req, res) => {
      res.sendFile(_path.default.join(__dirname, '../build/index.html'));
    });
    return app;
  });
  return _ref.apply(this, arguments);
}