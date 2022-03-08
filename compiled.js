"use strict";

var _recordTuplePolyfill = require("@bloomberg/record-tuple-polyfill");

var tuple1 = (0, _recordTuplePolyfill.Tuple)(1, 2, 3);
var tuple2 = (0, _recordTuplePolyfill.Tuple)(1, 2, 3);
var record1 = (0, _recordTuplePolyfill.Record)({
  name: '01'
});
var record2 = (0, _recordTuplePolyfill.Record)({
  name: '02'
});
console.log(tuple1 === tuple2, record1 === record2);
