(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["aUtils"] = factory(require("lodash"));
	else
		root["aUtils"] = factory(root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/*! exports provided: chunk, chunk2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return chunk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk2\", function() { return chunk2; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* \r\n将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组\r\n*/\r\n\r\n\r\nfunction chunk (array, size) {\r\n  if (array.length===0) {\r\n    return []\r\n  }\r\n  size = size || 1\r\n\r\n  const bigArr = []\r\n  let smallArr = []\r\n\r\n  array.forEach(item => {\r\n    if (smallArr.length===0) {\r\n      bigArr.push(smallArr)\r\n    }\r\n    smallArr.push(item)\r\n    if (smallArr.length===size) {\r\n      smallArr = []\r\n    }\r\n  })\r\n  \r\n  return bigArr\r\n}\r\n\r\nfunction chunk2(array, size) {\r\n  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chunk(array, size)\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/compact.js":
/*!******************************!*\
  !*** ./src/array/compact.js ***!
  \******************************/
/*! exports provided: compact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return compact; });\n/* \r\ncompact(array): 返回数组中所有真值元素组成的新数组\r\n*/\r\nfunction compact (array) {\r\n  return array.filter(item => item)\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/compact.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return concat; });\n/* \r\n  1. concat()\r\n    语法: var new_array = concat(old_array, value1[, value2[, ...[, valueN]]]) \r\n    功能: 将n个数组或值与当前数组合并生成一个新数组\r\n*/\r\nfunction concat (array, ...values) {\r\n  const arr = [...array]\r\n  values.forEach(value => { \r\n    if (Array.isArray(value)) {\r\n      arr.push(...value)\r\n    } else {\r\n      arr.push(value)\r\n    }\r\n  })\r\n  return arr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/declares.js":
/*!*******************************!*\
  !*** ./src/array/declares.js ***!
  \*******************************/
/*! exports provided: map, reduce, filter, find, findIndex, every, some, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return findIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return every; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return some; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\n/* \r\n实现数组声明式处理系列工具函数\r\n*/\r\n\r\n/* \r\n实现map()\r\n*/\r\nfunction map (array, callback) {\r\n  const arr = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    arr.push(callback(array[index], index))\r\n  }\r\n  return arr\r\n}\r\n\r\n/*\r\n实现reduce() \r\n*/\r\nfunction reduce (array, callback, initValue) {\r\n  let result = initValue\r\n  for (let index = 0; index < array.length; index++) {\r\n    // 调用回调函数将返回的结果赋值给result\r\n    result = callback(result, array[index], index)\r\n  }\r\n  return result\r\n}\r\n\r\n/* \r\n实现filter()\r\n*/\r\nfunction filter(array, callback) {\r\n  \r\n  const arr = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    if (callback(array[index], index)) {\r\n      arr.push(array[index])\r\n    }\r\n  }\r\n  return arr\r\n}\r\n\r\n/* \r\n实现find()\r\n*/\r\nfunction find (array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    if (callback(array[index], index)) {\r\n      return array[index]\r\n    }\r\n  }\r\n  return undefined\r\n}\r\n\r\n/* \r\n实现findIndex()\r\n*/\r\nfunction findIndex (array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    if (callback(array[index], index)) {\r\n      return index\r\n    }\r\n  }\r\n  return -1\r\n}\r\n\r\n /* \r\n 实现every()\r\n */\r\n function every (array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    if (!callback(array[index], index)) { // 只有一个结果为false, 直接返回false\r\n      return false\r\n    }\r\n  }\r\n  return true\r\n}\r\n\r\n/* \r\n实现some()\r\n*/\r\nfunction some (array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    if (callback(array[index], index)) { // 只有一个结果为true, 直接返回true\r\n      return true\r\n    }\r\n  }\r\n  return false\r\n}\r\n\r\nfunction test() {\r\n  console.log('test()222')\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/declares.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/*! exports provided: difference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return difference; });\n/* \r\ndifference(arr1, arr2): 得到arr1中所有不在arr2中的元素组成的数组(不改变原数组)\r\n    如: [1,3,5,7].difference([5, 8])  ==> [1, 3, 7]\r\n*/\r\nfunction difference (arr1, arr2) {\r\n  if (arr1.length===0) {\r\n    return []\r\n  } else if (arr2.length===0) {\r\n    return arr1.slice()\r\n  }\r\n  return arr1.filter(item => arr2.indexOf(item)===-1)\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/*! exports provided: drop, dropRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return dropRight; });\n/* \r\n1. drop(array, count): \r\n    得到数组过滤掉左边count个后剩余元素组成的数组\r\n    说明: 不改变当前数组, count默认是1\r\n    如: drop([1,3,5,7], 2) ===> [5, 7]\r\n2. dropRight(array, count): \r\n    得到数组过滤掉右边count个后剩余元素组成的数组\r\n    说明: 不改变数组, count默认是1\r\n    如: dropRight([1,3,5,7], 2) ===> [1, 3]\r\n*/\r\n\r\nfunction drop (array, count) {\r\n  if (array.length === 0 || count >= array.length) {\r\n    return []\r\n  }\r\n  count = count || 1\r\n  \r\n  return array.filter((item, index) => index>=count)\r\n}\r\n\r\nfunction dropRight (array, count) {\r\n  if (array.length === 0 || count >= array.length) {\r\n    return []\r\n  }\r\n  count = count || 1\r\n\r\n  return array.filter((item, index) => index < array.length-count)\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/*! exports provided: flatten1, flatten2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return flatten1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return flatten2; });\n/* \r\n数组扁平化: 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中\r\n  如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]\r\n*/\r\n\r\n/*\r\n方法一: 递归 + reduce() + concat()\r\n*/\r\nfunction flatten1 (array) {\r\n\r\n  return array.reduce((pre, item) => {\r\n    if (Array.isArray(item) && item.some((cItem => Array.isArray(cItem)))) {\r\n      return pre.concat(flatten1(item))\r\n    } else {\r\n      return pre.concat(item)\r\n    }\r\n  }, [])\r\n}\r\n\r\n/*\r\n方法二: ... + some() + concat()\r\n*/\r\nfunction flatten2 (array) {\r\n\r\n  let arr = [].concat(...array)\r\n  while (arr.some(item => Array.isArray(item))) {\r\n    arr = [].concat(...arr)\r\n  }\r\n  return arr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/merge.js":
/*!****************************!*\
  !*** ./src/array/merge.js ***!
  \****************************/
/*! exports provided: mergeArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeArray\", function() { return mergeArray; });\n/* \r\nmerge(arr1, arr2): 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)\r\n  如: merge([1,3,5,7,5], [1, 5, 8]) ==> [1, 3, 5, 7, 5, 8]\r\n*/\r\n\r\nfunction mergeArray (arr1, arr2) {\r\n  var result = arr1.slice()\r\n  if (!arr2 || arr2.length===0) {\r\n    return result\r\n  }\r\n  arr2.forEach(item => {\r\n    if (result.indexOf(item)===-1) {\r\n      result.push(item)\r\n    }\r\n  })\r\n  \r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/merge.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/*! exports provided: pull, pullAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return pull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return pullAll; });\n/* \r\n1. pull(array, ...values): \r\n    删除数组中与value相同的元素, 返回所有删除元素的数组\r\n    说明: 数组发生了改变\r\n    如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 数组变为[1, 5], 返回值为[3,3,7]\r\n2. pullAll(array, values): \r\n    功能与pull一致, 只是参数变为数组\r\n    如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组变为[1, 5], 返回值为[3,3,7]\r\n*/\r\n\r\nfunction pull (array, ...values) {\r\n  if (array.length===0 || values.length===0) {\r\n    return []\r\n  }\r\n  values = Array.from(new Set(values))\r\n  var result = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const item = array[index];\r\n     if (values.indexOf(item)!==-1) {\r\n      array.splice(index, 1)\r\n      result.push(item)\r\n      index--\r\n    }\r\n  }\r\n  return result\r\n}\r\n\r\nfunction pullAll (array, values) {\r\n  if (!values || !Array.isArray(values)) {\r\n    return []\r\n  }\r\n  return pull(array, ...values)\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\n/* \r\n  语法: var new_array = slice(oldArr, [begin[, end]])\r\n  功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变\r\n*/\r\nfunction slice (array, begin, end) {\r\n  // 如果当前数组是[], 直接返回[]\r\n  if (array.length === 0) {\r\n    return []\r\n  }\r\n\r\n  // 如果begin超过最大下标, 直接返回[]\r\n  begin = begin || 0\r\n  if (begin >= array.length) {\r\n    return []\r\n  }\r\n\r\n  // 如果end不大于begin, 直接返回[]\r\n  end = end || array.length\r\n  if (end > array.length) {\r\n    end = array.length\r\n  }\r\n  if (end <= begin) {\r\n    return []\r\n  }\r\n\r\n  // 取出下标在[begin, end)区间的元素, 并保存到最终的数组中\r\n  const arr = []\r\n  for (let index = begin; index < end; index++) {\r\n    arr.push(array[index])\r\n  }\r\n\r\n  return arr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/*! exports provided: unique1, unique2, unique3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return unique1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return unique2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return unique3; });\n/*\r\n方法1: 利用forEach()和indexOf()\r\n  说明: 本质是双重遍历, 效率差些\r\n*/\r\nfunction unique1 (array) {\r\n  const arr = []\r\n  array.forEach(item => {\r\n    if (arr.indexOf(item)===-1) {\r\n      arr.push(item)\r\n    }\r\n  })\r\n  return arr\r\n}\r\n\r\n/*\r\n方法2: 利用forEach() + 对象容器\r\n  说明: 只需一重遍历, 效率高些\r\n*/\r\nfunction unique2 (array) {\r\n  const arr = []\r\n  const obj = {}\r\n  array.forEach(item => {\r\n    if (!obj.hasOwnProperty(item)) {\r\n      obj[item] = true\r\n      arr.push(item)\r\n    }\r\n  })\r\n  return arr\r\n}\r\n\r\n/*\r\n方法3: 利用ES6语法\r\n    1). from + Set\r\n    2). ... + Set\r\n    说明: 编码简洁\r\n*/\r\nfunction unique3 (array) {\r\n  // return Array.from(new Set(array))\r\n  return [...new Set(array)]\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/unique.js?");

/***/ }),

/***/ "./src/axios/index.js":
/*!****************************!*\
  !*** ./src/axios/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* \r\n  1. 函数的返回值为promise, 成功的结果为response, 失败的结果为error\r\n  2. 能处理多种类型的请求: GET/POST/PUT/DELETE\r\n  3. 函数的参数为一个配置对象\r\n      {\r\n        url: '',   // 请求地址\r\n        method: '',   // 请求方式GET/POST/PUT/DELETE\r\n        params: {},  // GET/DELETE请求的query参数\r\n        data: {}, // POST或DELETE请求的请求体参数 \r\n      }\r\n  4. 响应json数据自动解析为js的对象/数组\r\n*/\r\n/* 发送任意类型请求的函数 */\r\nfunction axios({\r\n  url,\r\n  method='GET',\r\n  params={},\r\n  data={}\r\n}) {\r\n  // 返回一个promise对象\r\n  return new Promise((resolve, reject) => {\r\n\r\n    // 处理method(转大写)\r\n    method = method.toUpperCase()\r\n\r\n    // 处理query参数(拼接到url上)   id=1&xxx=abc\r\n    /* \r\n    {\r\n      id: 1,\r\n      xxx: 'abc'\r\n    }\r\n    */\r\n    let queryString = ''\r\n    Object.keys(params).forEach(key => {\r\n      queryString += `${key}=${params[key]}&`\r\n    })\r\n    if (queryString) { // id=1&xxx=abc&\r\n      // 去除最后的&\r\n      queryString = queryString.substring(0, queryString.length-1)\r\n      // 接到url\r\n      url += '?' + queryString\r\n    }\r\n\r\n\r\n    // 1. 执行异步ajax请求\r\n    // 创建xhr对象\r\n    const request = new XMLHttpRequest()\r\n    // 打开连接(初始化请求, 没有请求)\r\n    request.open(method, url, true)\r\n\r\n    // 发送请求\r\n    if (method==='GET') {\r\n      request.send()\r\n    } else if (method==='POST' || method==='PUT' || method==='DELETE'){\r\n      request.setRequestHeader('Content-Type', 'application/json;charset=utf-8') // 告诉服务器请求体的格式是json\r\n      request.send(JSON.stringify(data)) // 发送json格式请求体参数\r\n    }\r\n\r\n    // 绑定状态改变的监听\r\n    request.onreadystatechange = function () {\r\n      // 如果请求没有完成, 直接结束\r\n      if (request.readyState!==4) {\r\n        return\r\n      }\r\n      // 如果响应状态码在[200, 300)之间代表成功, 否则失败\r\n      const {status, statusText} = request\r\n      // 2.1. 如果请求成功了, 调用resolve()\r\n      if (status>=200 && status<=299) {\r\n        // 准备结果数据对象response\r\n        const response = {\r\n          data: JSON.parse(request.response),\r\n          status,\r\n          statusText\r\n        }\r\n        resolve(response)\r\n      } else { // 2.2. 如果请求失败了, 调用reject()\r\n        reject(new Error('request error status is ' + status))\r\n      }\r\n    }\r\n  })\r\n}\r\n\r\n/* 发送特定请求的静态方法 */\r\naxios.get = function (url, options) {\r\n  return axios(Object.assign(options, {url, method: 'GET'}))\r\n}\r\naxios.delete = function (url, options) {\r\n  return axios(Object.assign(options, {url, method: 'DELETE'}))\r\n}\r\naxios.post = function (url, data, options) {\r\n  return axios(Object.assign(options, {url, data, method: 'POST'}))\r\n}\r\naxios.put = function (url, data, options) {\r\n  return axios(Object.assign(options, {url, data, method: 'PUT'}))\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (axios);\n\n//# sourceURL=webpack://aUtils/./src/axios/index.js?");

/***/ }),

/***/ "./src/event-bus/index.js":
/*!********************************!*\
  !*** ./src/event-bus/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst eventBus = {}\r\n\r\n/* \r\n{\r\n  add:  [callback1, callback2]\r\n  delete: [callback3]\r\n}\r\n*/\r\nlet callbacksObj = {}\r\n\r\n/* \r\n绑定事件监听\r\n*/\r\neventBus.on = function (eventName, callback) {\r\n  const callbacks = callbacksObj[eventName]\r\n  if (callbacks) {\r\n    callbacks.push(callback)\r\n  } else {\r\n    callbacksObj[eventName] = [callback]\r\n  }\r\n}\r\n\r\n/* \r\n分发事件\r\n*/\r\neventBus.emit = function (eventName, data) {\r\n  const callbacks = callbacksObj[eventName]\r\n  if (callbacks && callbacks.length > 0) {\r\n    callbacks.forEach(callback => {\r\n      callback(data)\r\n    })\r\n  }\r\n}\r\n\r\n/* \r\n移除事件监听\r\n*/\r\neventBus.off = function (eventName) {\r\n  if (eventName) {\r\n    delete callbacksObj[eventName]\r\n  } else {\r\n    callbacksObj = {}\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventBus);\n\n//# sourceURL=webpack://aUtils/./src/event-bus/index.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/*! exports provided: apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return apply; });\n/* \r\n自定义函数对象的apply方法\r\n*/\r\nfunction apply (fn, obj, args) {\r\n  // 如果传入的是null/undefined, this指定为window\r\n  if (obj===null || obj===undefined) {\r\n    obj = obj || window\r\n  }\r\n  // 给obj添加一个方法: 属性名任意, 属性值必须当前调用call的函数对象\r\n  obj.tempFn = fn\r\n  // 通过obj调用这个方法\r\n  const result = obj.tempFn(...args)\r\n  // 删除新添加的方法\r\n  delete obj.tempFn\r\n  // 返回函数调用的结果\r\n  return result\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return bind; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\n/* \r\n  自定义函数对象的bind方法\r\n  重要技术:\r\n    高阶函数\r\n    闭包\r\n    call()\r\n    三点运算符\r\n*/\r\nfunction bind (fn, obj, ...args) {\r\n  if (obj===null || obj===undefined) {\r\n    obj = obj || window\r\n  }\r\n  \r\n  return function (...args2) {\r\n    Object(_call__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(fn, obj, ...args, ...args2)\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/*! exports provided: call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return call; });\n/* \r\n自定义函数对象的call方法\r\n*/\r\nfunction call (fn, obj, ...args) {\r\n  // 如果传入的是null/undefined, this指定为window\r\n  if (obj===null || obj===undefined) {\r\n    obj = obj || window\r\n  }\r\n  // 给obj添加一个方法: 属性名任意, 属性值必须当前调用call的函数对象\r\n  obj.tempFn = fn\r\n  // 通过obj调用这个方法\r\n  const result = obj.tempFn(...args)\r\n  // 删除新添加的方法\r\n  delete obj.tempFn\r\n  // 返回函数调用的结果\r\n  return result\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* \r\n实现函数防抖的函数\r\n*/\r\nfunction debounce(callback, delay) {\r\n  return function () {\r\n    console.log('debounce 事件...')\r\n    // 保存this和arguments\r\n    const that = this\r\n    const args = arguments\r\n    \r\n    // 清除待执行的定时器任务\r\n    if (callback.timeoutId) {\r\n      clearTimeout(callback.timeoutId)\r\n    }\r\n    // 每隔delay的时间, 启动一个新的延迟定时器, 去准备调用callback\r\n    callback.timeoutId = setTimeout(function () {\r\n      callback.apply(that, args)\r\n      // 如果定时器回调执行了, 删除标记\r\n      delete callback.timeoutId\r\n    }, delay)\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* \r\n实现函数节流的函数\r\n*/\r\n\r\nfunction throttle(callback, delay) {\r\n  let start = 0 // 必须保存第一次点击立即调用\r\n  return function () { // 它的this是谁就得让callback()中的this是谁, 它接收的所有实参都直接交给callback()\r\n    console.log('throttle 事件')\r\n    const current = Date.now()\r\n    if (current - start > delay) { // 从第2次点击开始, 需要间隔时间超过delay\r\n      callback.apply(this, arguments)\r\n      start = current\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: chunk, chunk2, compact, concat, map, filter, reduce, find, findIndex, every, some, test, difference, drop, dropRight, flatten1, flatten2, mergeArray, pull, pullAll, slice, unique1, unique2, unique3, apply, bind, call, debounce, throttle, clone1, clone2, deepClone1, deepClone2, deepClone3, deepClone4, mergeObject, myInstanceOf, newInstance, reverseString, palindrome, truncate, axios, eventBus, Promise, PubSub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return _array_chunk__WEBPACK_IMPORTED_MODULE_0__[\"chunk\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunk2\", function() { return _array_chunk__WEBPACK_IMPORTED_MODULE_0__[\"chunk2\"]; });\n\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return _array_compact__WEBPACK_IMPORTED_MODULE_1__[\"compact\"]; });\n\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _array_concat__WEBPACK_IMPORTED_MODULE_2__[\"concat\"]; });\n\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_3__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_3__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_3__[\"reduce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_3__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_3__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_3__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_3__[\"some\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_3__[\"test\"]; });\n\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_4__[\"difference\"]; });\n\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_5__[\"drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_5__[\"dropRight\"]; });\n\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_6__[\"flatten1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_6__[\"flatten2\"]; });\n\n/* harmony import */ var _array_merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/merge */ \"./src/array/merge.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeArray\", function() { return _array_merge__WEBPACK_IMPORTED_MODULE_7__[\"mergeArray\"]; });\n\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_8__[\"pull\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_8__[\"pullAll\"]; });\n\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _array_slice__WEBPACK_IMPORTED_MODULE_9__[\"slice\"]; });\n\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_10__[\"unique1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_10__[\"unique2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_10__[\"unique3\"]; });\n\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_11__[\"apply\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_12__[\"bind\"]; });\n\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_13__[\"call\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_14__[\"debounce\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_15__[\"throttle\"]; });\n\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_16__[\"clone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_16__[\"clone2\"]; });\n\n/* harmony import */ var _object_deepClone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/deepClone */ \"./src/object/deepClone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_17__[\"deepClone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_17__[\"deepClone2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_17__[\"deepClone3\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone4\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_17__[\"deepClone4\"]; });\n\n/* harmony import */ var _object_merge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/merge */ \"./src/object/merge.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return _object_merge__WEBPACK_IMPORTED_MODULE_18__[\"mergeObject\"]; });\n\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_19__[\"myInstanceOf\"]; });\n\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return _object_newInstance__WEBPACK_IMPORTED_MODULE_20__[\"newInstance\"]; });\n\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./string */ \"./src/string/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"reverseString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"palindrome\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"truncate\"]; });\n\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./axios */ \"./src/axios/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"axios\", function() { return _axios__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./event-bus */ \"./src/event-bus/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"eventBus\", function() { return _event_bus__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./promise */ \"./src/promise/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Promise\", function() { return _promise__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pub-sub */ \"./src/pub-sub/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PubSub\", function() { return _pub_sub__WEBPACK_IMPORTED_MODULE_25__[\"default\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/index.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/*! exports provided: clone1, clone2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return clone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return clone2; });\n/* \r\n实现浅拷贝\r\n    方法一: 利用ES6语法\r\n    方法二: 利用ES5语法: for...in\r\n*/\r\n/* 方法一: 利用ES6语法*/\r\nfunction clone1(target) {\r\n  if (target instanceof Array) {\r\n    // return target.slice()\r\n    // return target.filter(() => true)\r\n    // return target.map(item => item)\r\n    return [...target]\r\n  } else if (target instanceof Object){\r\n    // return Object.assign({}, target)\r\n    return {...target}\r\n  } else {\r\n    return target\r\n  }\r\n} \r\n\r\n/* 方法二: 利用ES5语法: for...in */\r\nfunction clone2(target) {\r\n  if (target!=null && typeof target==='object') {\r\n    const cloneTarget = Array.isArray(target) ? [] : {}\r\n    for (let key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        cloneTarget[key] = target[key]\r\n      }\r\n    }\r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*\
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/*! exports provided: deepClone1, deepClone2, deepClone3, deepClone4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return deepClone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return deepClone2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return deepClone3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone4\", function() { return deepClone4; });\n/* \r\n深度克隆\r\n1). 大众乞丐版\r\n    问题1: 函数属性会丢失\r\n    问题2: 循环引用会出错\r\n2). 面试基础版本\r\n    解决问题1: 函数属性还没丢失\r\n3). 面试加强版本\r\n    解决问题2: 循环引用正常\r\n4). 面试加强版本2(优化遍历性能)\r\n    数组: while | for | forEach() 优于 for-in | keys()&forEach() \r\n    对象: for-in 与 keys()&forEach() 差不多\r\n*/\r\n/* \r\n1). 大众乞丐版\r\n  问题1: 函数属性会丢失\r\n  问题2: 循环引用会出错\r\n*/\r\nfunction deepClone1(target) {\r\n  return JSON.parse(JSON.stringify(target))\r\n}\r\n\r\n/* \r\n获取数据的类型字符串名\r\n*/\r\nfunction getType(data) {\r\n  return Object.prototype.toString.call(data).slice(8, -1)\r\n}\r\n\r\n/*\r\n2). 面试基础版本\r\n  解决问题1: 函数属性还没丢失\r\n*/\r\nfunction deepClone2(target) {\r\n  const type = getType(target)\r\n\r\n  if (type==='Object' || type==='Array') {\r\n    const cloneTarget = type === 'Array' ? [] : {}\r\n    for (const key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        cloneTarget[key] = deepClone2(target[key])\r\n      }\r\n    }\r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\r\n\r\n/* \r\n3). 面试加强版本\r\n  解决问题2: 循环引用正常\r\n*/\r\nfunction deepClone3(target, map = new Map()) {\r\n  const type = getType(target)\r\n  if (type==='Object' || type==='Array') {\r\n    let cloneTarget = map.get(target)\r\n    if (cloneTarget) {\r\n      return cloneTarget\r\n    }\r\n    cloneTarget = type==='Array' ? [] : {}\r\n    map.set(target, cloneTarget)\r\n    for (const key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        cloneTarget[key] = deepClone3(target[key], map)\r\n      }\r\n    }\r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\r\n\r\n/* \r\n4). 面试加强版本2(优化遍历性能)\r\n    数组: while | for | forEach() 优于 for-in | keys()&forEach() \r\n    对象: for-in 与 keys()&forEach() 差不多\r\n*/\r\nfunction deepClone4(target, map = new Map()) {\r\n  const type = getType(target)\r\n  if (type==='Object' || type==='Array') {\r\n    let cloneTarget = map.get(target)\r\n    if (cloneTarget) {\r\n      return cloneTarget\r\n    }\r\n\r\n    if (type==='Array') {\r\n      cloneTarget = []\r\n      map.set(target, cloneTarget)\r\n      target.forEach((item, index) => {\r\n        cloneTarget[index] = deepClone4(item, map)\r\n      })\r\n    } else {\r\n      cloneTarget = {}\r\n      map.set(target, cloneTarget)\r\n      Object.keys(target).forEach(key => {\r\n        cloneTarget[key] = deepClone4(target[key], map)\r\n      })\r\n    }\r\n\r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/deepClone.js?");

/***/ }),

/***/ "./src/object/merge.js":
/*!*****************************!*\
  !*** ./src/object/merge.js ***!
  \*****************************/
/*! exports provided: mergeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return mergeObject; });\n/* \r\nmerge(...objs): 合并多个对象, 返回一个合并后对象(不改变原对象)\r\n{ a: [{ x: 2 }, { y: 4 }], b: 1}\r\n{ a: { z: 3}, b: [2, 3], c: 'foo'}\r\n合并后: { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }\r\n*/\r\nfunction mergeObject(...objs) {\r\n  return objs.reduce((pre, obj) => {\r\n    return Object.keys(obj).reduce((p, key) => {\r\n      p[key] = !p.hasOwnProperty(key) ? obj[key] : [].concat(p[key], obj[key])\r\n      return p\r\n    }, pre)\r\n  }, {})\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/merge.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/*! exports provided: myInstanceOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return myInstanceOf; });\n/* \r\n自定义instanceof工具函数: \r\n  语法: myInstanceOf(obj, Type)\r\n  功能: 判断obj是否是Type类型的实例\r\n  实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回true, 否则返回false\r\n*/\r\nfunction myInstanceOf(obj, Type) {\r\n  // 得到原型对象\r\n  let protoObj = obj.__proto__\r\n\r\n  // 只要原型对象存在\r\n  while(protoObj) {\r\n    // 如果原型对象是Type的原型对象, 返回true\r\n    if (protoObj === Type.prototype) {\r\n      return true\r\n    }\r\n    // 指定原型对象的原型对象\r\n    protoObj = protoObj.__proto__\r\n  }\r\n\r\n  return false\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/myInstanceOf.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/*! exports provided: newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return newInstance; });\n/* \r\n自定义new工具函数\r\n  语法: newInstance(Fn, ...args)\r\n  功能: 创建Fn构造函数的实例对象\r\n  实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj\r\n*/\r\nfunction newInstance(Fn, ...args) {\r\n  // 创建一个新的对象\r\n  const obj = {}\r\n  // 执行构造函数\r\n  const result = Fn.apply(obj, args) // 相当于: obj.Fn()\r\n  // 如果构造函数执行的结果是对象, 返回这个对象\r\n  if (result instanceof Object) {\r\n    return result\r\n  }\r\n  // 如果不是, 返回新创建的对象\r\n  obj.__proto__.constructor = Fn // 让原型对象的构造器属性指向Fn\r\n  \r\n  return obj\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/promise/index.js":
/*!******************************!*\
  !*** ./src/promise/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PENDING = 'pending' // 初始未确定的状态\r\nconst RESOLVED = 'resolved' // 成功的状态\r\nconst REJECTED = 'rejected' // 失败的状态\r\n\r\n/* \r\nPromise构造函数\r\n*/\r\nfunction Promise(excutor) {\r\n\r\n  const self = this // Promise的实例对象\r\n  self.status = PENDING // 状态属性, 初始值为pending, 代表初始未确定的状态\r\n  self.data = undefined // 用来存储结果数据的属性, 初始值为undefined\r\n  self.callbacks = [] // {onResolved(){}, onRejected(){}}\r\n\r\n  /* \r\n  将promise的状态改为成功, 指定成功的value\r\n  */\r\n  function resolve(value) {\r\n    // 如果当前不是pending, 直接结束\r\n    if (self.status !== PENDING) return\r\n\r\n    self.status = RESOLVED // 将状态改为成功\r\n    self.data = value // 保存成功的value\r\n\r\n    // 异步调用所有缓存的待执行成功的回调函数\r\n    if (self.callbacks.length > 0) {\r\n      // 启动一个延迟时间为0的定时器, 在定时器的回调中执行所有成功的回调\r\n      setTimeout(() => {\r\n        self.callbacks.forEach(cbsObj => {\r\n          cbsObj.onResolved(value)\r\n        })\r\n      })\r\n    }\r\n  }\r\n\r\n  /* \r\n  将promise的状态改为失败, 指定失败的reason\r\n  */\r\n  function reject(reason) {\r\n    // 如果当前不是pending, 直接结束\r\n    if (self.status !== PENDING) return\r\n\r\n    self.status = REJECTED // 将状态改为失败\r\n    self.data = reason // 保存reason数据\r\n\r\n    // 异步调用所有缓存的待执行失败的回调函数\r\n    if (self.callbacks.length > 0) {\r\n      // 启动一个延迟时间为0的定时器, 在定时器的回调中执行所有失败的回调\r\n      setTimeout(() => {\r\n        self.callbacks.forEach(cbsObj => {\r\n          cbsObj.onRejected(reason)\r\n        })\r\n      })\r\n    }\r\n  }\r\n\r\n  // 调用excutor来启动异步任务\r\n  try {\r\n    excutor(resolve, reject)\r\n  } catch (error) { // 执行器执行出错, 当前promise变为失败\r\n    console.log('-----')\r\n    reject(error)\r\n  }\r\n\r\n}\r\n\r\n/* \r\n用来指定成功/失败回调函数的方法\r\n    1). 如果当前promise是resolved, 异步执行成功的回调函数onResolved\r\n    2). 如果当前promise是rejected, 异步执行成功的回调函数onRejected\r\n    3). 如果当前promise是pending, 保存回调函数\r\n返回一个新的promise对象\r\n    它的结果状态由onResolved或者onRejected执行的结果决定\r\n    2.1). 抛出error ==> 变为rejected, 结果值为error\r\n    2.2). 返回值不是promise   ==> 变为resolved, 结果值为返回值\r\n    2.3). 返回值是promise    ===> 由这个promise的决定新的promise的结果(成功/失败)\r\n*/\r\nPromise.prototype.then = function (onResolved, onRejected) {\r\n  const self = this\r\n\r\n  onResolved = typeof onResolved === 'function' ? onResolved : value => value // 将value向下传递\r\n  onRejected = typeof onRejected === 'function' ? onRejected : reason => {\r\n    throw reason\r\n  } // 将reason向下传递\r\n\r\n  return new Promise((resolve, reject) => { // 什么时候改变它的状态\r\n\r\n    /* \r\n    1. 调用指定的回调函数\r\n    2. 根据回调执行结果来更新返回promise的状态\r\n    */\r\n    function handle(callback) {\r\n      try {\r\n        const result = callback(self.data)\r\n        if (!(result instanceof Promise)) { //  2.2). 返回值不是promise   ==> 变为resolved, 结果值为返回值\r\n          resolve(result)\r\n        } else { // 2.3). 返回值是promise    ===> 由这个promise的决定新的promise的结果(成功/失败)\r\n          result.then(\r\n            value => resolve(value),\r\n            reason => reject(reason)\r\n          )\r\n          // result.then(resolve, reject)\r\n        }\r\n      } catch (error) { // 2.1). 抛出error ==> 变为rejected, 结果值为error\r\n        reject(error)\r\n      }\r\n    }\r\n\r\n    if (self.status === RESOLVED) {\r\n      setTimeout(() => {\r\n        handle(onResolved)\r\n      })\r\n    } else if (self.status === REJECTED) {\r\n      setTimeout(() => {\r\n        handle(onRejected)\r\n      })\r\n    } else { // PENDING\r\n      self.callbacks.push({\r\n        onResolved(value) {\r\n          handle(onResolved)\r\n        },\r\n        onRejected(reason) {\r\n          handle(onRejected)\r\n        }\r\n      })\r\n    }\r\n  })\r\n}\r\n\r\n/* \r\n用来指定失败回调函数的方法\r\ncatch是then的语法糖\r\n*/\r\nPromise.prototype.catch = function (onRejected) {\r\n  return this.then(undefined, onRejected)\r\n}\r\n\r\n/* \r\n用来返回一个指定vlaue的成功的promise\r\nvalue可能是一个一般的值, 也可能是promise对象\r\n*/\r\nPromise.resolve = function (value) {\r\n  return new Promise((resolve, reject) => {\r\n    // 如果value是一个promise, 最终返回的promise的结果由value决定\r\n    if (value instanceof Promise) {\r\n      value.then(resolve, reject)\r\n    } else { // value不是promise, 返回的是成功的promise, 成功的值就是value\r\n      resolve(value)\r\n    }\r\n  })\r\n}\r\n\r\n/* \r\n用来返回一个指定reason的失败的promise\r\n*/\r\nPromise.reject = function (reason) {\r\n  return new Promise((resolve, reject) => {\r\n    reject(reason)\r\n  })\r\n}\r\n\r\n/* \r\n返回一个promise, 只有当数组中所有promise都成功才成功, 否则失败\r\n*/\r\nPromise.all = function (promises) {\r\n  return new Promise((resolve, reject) => {\r\n\r\n    let resolvedCount = 0 // 已经成功的数量 \r\n    const values = new Array(promises.length) // 用来保存成功promise的value值\r\n    // 遍历所有promise, 取其对应的结果\r\n    promises.forEach((p, index) => {\r\n      p.then(\r\n        value => {\r\n          resolvedCount++\r\n          values[index] = value\r\n          if (resolvedCount === promises.length) { // 都成功了\r\n            resolve(values)\r\n          }\r\n        },\r\n        reason => reject(reason)\r\n      )\r\n    })\r\n  })\r\n}\r\n\r\n/* \r\n返回一个promise, 由第一个完成promise决定\r\n*/\r\nPromise.race = function (promises) {\r\n  return new Promise((resolve, reject) => {\r\n    // 遍历所有promise, 取其对应的结果\r\n    promises.forEach(p => {\r\n      // 返回的promise由第一个完成p来决定其结果\r\n      p.then(resolve, reject)\r\n    })\r\n  })\r\n}\r\n\r\n/* \r\n返回一个延迟指定时间才成功(也可能失败)的promise\r\n*/\r\nPromise.resolveDelay = function (value, time) {\r\n  return new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      // 如果value是一个promise, 最终返回的promise的结果由value决定\r\n      if (value instanceof Promise) {\r\n        value.then(resolve, reject)\r\n      } else { // value不是promise, 返回的是成功的promise, 成功的值就是value\r\n        resolve(value)\r\n      }\r\n    }, time)\r\n  })\r\n}\r\n\r\n/* \r\n返回一个延迟指定时间才失败的promise\r\n*/\r\nPromise.rejectDelay = function (reason, time) {\r\n  return new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      reject(reason)\r\n    }, time)\r\n  })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Promise);\n\n//# sourceURL=webpack://aUtils/./src/promise/index.js?");

/***/ }),

/***/ "./src/pub-sub/index.js":
/*!******************************!*\
  !*** ./src/pub-sub/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* \r\n自定义消息订阅与发布\r\n*/\r\n\r\nconst PubSub = {}\r\n/* \r\n  {\r\n    add: {\r\n      token1: callback1, \r\n      token2: callback2\r\n    },\r\n    update: {\r\n      token3: callback3\r\n    }\r\n  }\r\n*/\r\nlet callbacksObj = {} // 保存所有回调的容器\r\nlet id = 0 // 用于生成token的标记\r\n\r\n// 1. 订阅消息\r\nPubSub.subscribe = function (msgName, callback) {\r\n\r\n  // 确定token\r\n  const token = 'token_' + ++id\r\n  // 取出当前消息对应的callbacks\r\n  const callbacks = callbacksObj[msgName]\r\n  if (!callbacks) {\r\n    callbacksObj[msgName] = {\r\n      [token]: callback\r\n    }\r\n  } else {\r\n    callbacks[token] = callback\r\n  }\r\n  // 返回token\r\n  return token\r\n}\r\n\r\n\r\n// 2. 发布异步的消息\r\nPubSub.publish = function (msgName, data) {\r\n  // 取出当前消息对应的callbacks\r\n  let callbacks = callbacksObj[msgName]\r\n  // 如果有值\r\n  if (callbacks) {\r\n    // callbacks = Object.assign({}, callbacks)\r\n    // 启动定时器, 异步执行所有的回调函数\r\n    setTimeout(() => {\r\n      Object.values(callbacks).forEach(callback => {\r\n        callback(data)\r\n      })\r\n    }, 0)\r\n  }\r\n}\r\n\r\n// 3. 发布同步的消息\r\nPubSub.publishSync = function (msgName, data) {\r\n  // 取出当前消息对应的callbacks\r\n  const callbacks = callbacksObj[msgName]\r\n  // 如果有值\r\n  if (callbacks) {\r\n    // 立即同步执行所有的回调函数\r\n    Object.values(callbacks).forEach(callback => {\r\n      callback(data)\r\n    })\r\n  }\r\n}\r\n\r\n/*\r\n4. 取消消息订阅\r\n  1). 没有传值, flag为undefined\r\n  2). 传入token字符串\r\n  3). msgName字符串\r\n*/\r\nPubSub.unsubscribe = function (flag) {\r\n  // 如果flag没有指定或者为null, 取消所有\r\n  if (flag === undefined) {\r\n    callbacksObj = {}\r\n  } else if (typeof flag === 'string') {\r\n    if (flag.indexOf('token_') === 0) { // flag是token\r\n      // 找到flag对应的callbacks\r\n      const callbacks = Object.values(callbacksObj).find(callbacks => callbacks.hasOwnProperty(flag))\r\n      // 如果存在, 删除对应的属性\r\n      if (callbacks) {\r\n        delete callbacks[flag]\r\n      }\r\n    } else { // flag是msgName\r\n      delete callbacksObj[flag]\r\n    }\r\n\r\n  } else {\r\n    throw new Error('如果传入参数, 必须是字符串类型')\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (PubSub);\n\n//# sourceURL=webpack://aUtils/./src/pub-sub/index.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/*! exports provided: reverseString, palindrome, truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return reverseString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return palindrome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return truncate; });\n/* \r\n1. 字符串倒序: reverseString(str)  生成一个倒序的字符串\r\n2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false\r\n3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束\r\n*/\r\n\r\n/* \r\n1. 字符串倒序: reverseString(str)  生成一个倒序的字符串\r\n*/\r\nfunction reverseString(str) {\r\n  // return str.split('').reverse().join('')\r\n  // return [...str].reverse().join('')\r\n  return Array.from(str).reverse().join('')\r\n}\r\n\r\n/* \r\n2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false\r\n*/\r\nfunction palindrome(str) {\r\n  return str === reverseString(str)\r\n}\r\n\r\n/* \r\n3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束\r\n*/\r\nfunction truncate(str, num) {\r\n  return str.length > num ? str.slice(0, num) + '...' : str\r\n}\n\n//# sourceURL=webpack://aUtils/./src/string/index.js?");

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://aUtils/external_%7B%22commonjs%22:%22lodash%22,%22commonjs2%22:%22lodash%22,%22amd%22:%22lodash%22,%22root%22:%22_%22%7D?");

/***/ })

/******/ });
});