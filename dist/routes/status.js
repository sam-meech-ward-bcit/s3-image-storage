"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var ec2Meta = _interopRequireWildcard(require("../aws/ec2Meta"));

var systemHelper = _interopRequireWildcard(require("../aws/systemHelper"));

var awsData = _interopRequireWildcard(require("../aws/awsData"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

var Readable = require('stream').Readable;

function _default(_ref) {
  var {
    s3,
    fileDir
  } = _ref;

  var router = _express.default.Router();

  router.post('/s3', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (req, res) {
      var data = req.body.token;

      var filePath = _path.default.join(fileDir, 'token.txt');

      _fs.default.writeFileSync(filePath, data);

      var upload = yield s3.upload({
        file: filePath
      });
      res.send("");
    });

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  router.get('/s3', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* (req, res) {
      try {
        var buckets = yield s3.listBuckets();
        res.status(500).send({
          error: "Your IAM role can do too much"
        }); // const acl = await s3.getBucketAcl()
        // res.send({buckets, objects, acl})
      } catch (error) {
        // res.status(500).send({error})
        try {
          var objects = yield s3.listObjects();

          var filePath = _path.default.join(fileDir, 'timestamp.txt');

          _fs.default.writeFileSync(filePath, Date());

          var upload = yield s3.upload({
            file: filePath
          });
          var download = yield s3.getStream({
            fileKey: 'timestamp.txt'
          });
          var chunks = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;

          var _iteratorError;

          try {
            for (var _iterator = _asyncIterator(download), _step, _value; _step = yield _iterator.next(), _iteratorNormalCompletion = _step.done, _value = yield _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
              var chunk = _value;
              chunks.push(chunk);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                yield _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          var buffer = Buffer.concat(chunks);
          var date = buffer.toString("utf-8");
          res.send({
            date
          });
        } catch (error) {
          res.status(200).send({
            error
          });
        }
      }
    });

    return function (_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }());
  router.get('/', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* (req, res) {
      var ec2 = {};

      try {
        ec2.ipv4 = yield ec2Meta.ipv4();
        ec2.hostname = yield ec2Meta.hostname();
        ec2.instanceId = yield ec2Meta.instanceId();
        ec2.iam = yield ec2Meta.iam();
      } catch (err) {
        console.log(err);
        ec2 = "error";
      }

      var other = {};
      var data = {
        ec2,
        env: {
          bucketRegion: process.env.BUCKET_REGION,
          bucketName: process.env.BUCKET_NAME,
          appName: process.env.APP_NAME
        },
        other
      };
      console.log(data);
      res.send(data);
    });

    return function (_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }());
  router.get("/service", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(function* (req, res) {
      try {
        var output = yield systemHelper.describeService("nodeserver.service");
        res.send(output);
      } catch (error) {
        res.send(error);
      }
    });

    return function (_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }());
  router.get("/securityGroups", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(function* (req, res) {
      try {
        var securityGroupId = yield ec2Meta.securityGroupId();
        var region = yield ec2Meta.region();
        console.log({
          region,
          securityGroupId
        });
        var output = yield awsData.describeSecurityGroups({
          region,
          securityGroupId
        });
        res.send(output);
      } catch (error) {
        console.log(error);
        res.send(error);
      }
    });

    return function (_x9, _x10) {
      return _ref6.apply(this, arguments);
    };
  }());
  router.get("/iaminfo", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(function* (req, res) {
      try {
        var iam = yield ec2Meta.iam(); //       InstanceProfileArn: "arn:aws:iam::978762696487:instance-profile/image-uploader",
        // InstanceProfileId: "AIPA6HYWNQ4TRU6DYUAN3"

        res.send(iam);
      } catch (error) {
        console.log(error);
        res.send(error);
      }
    });

    return function (_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }());
  return router;
}