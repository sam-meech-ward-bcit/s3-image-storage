"use strict";

var _equalsToObject = _interopRequireDefault(require("./equalsToObject"));

var _assert = _interopRequireDefault(require("assert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var input = "\nStartLimitInterval=10000000\nStartLimitBurst=5\n";
var output = {
  StartLimitInterval: "10000000",
  StartLimitBurst: "5"
};
describe("equalsToObject", () => {
  it("should work", () => {
    var result = (0, _equalsToObject.default)(input);

    _assert.default.deepStrictEqual(result, output);
  });
});