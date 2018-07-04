/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	{
	    // Array.from()把一些伪数组或集合转化为真正的数组
	    var obj = {
	        '0': 'a',
	        '1': 'b',
	        '2': 'c',
	        length: 3
	    };
	    var arrObj = Array.from(obj);
	    console.log(arrObj);

	    console.log(Array.from([1, 2, 3], function (item) {
	        return item * 2; // [2, 4, 6]
	    }));
	}

	{
	    // Array.of()把一组数据变量转化为数组类型
	    var arr = Array.of(3, 4, 7, 9, 11);
	    console.log(arr); // [3, 4, 7, 9, 11]

	    var empty = Array.of();
	    console.log('empty', empty); // []
	}

	{
	    // fill(value, [start, end)) 用指定值替换数组元素 
	    console.log([1, 'a', undefined].fill(7)); // [7, 7, 7]
	    console.log([1, 'a', undefined].fill(7, 1, 2)); // [1, 7, undefined]
	}

	{
	    var _arr = [1, 'a', 'b'];

	    for (var _i = 0; _i < _arr.length; _i++) {
	        var value = _arr[_i];
	        console.log('遍历数组元素值', value); // 1, 'a', 'b'
	    }
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = [1, 'a', 'b'].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var index = _step.value;

	            console.log('这样遍历就变成数组索引了', index); // 0, 1, 2
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = [1, 'a', 'b'].values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var _value = _step2.value;

	            console.log('遍历数组元素值', _value); // 1, 'a', 'b'
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }

	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	        for (var _iterator3 = [1, 'a', 'b'].entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var _step3$value = _slicedToArray(_step3.value, 2),
	                _index = _step3$value[0],
	                _value2 = _step3$value[1];

	            console.log('遍历数组索引及元素值', _index, _value2); // 0  1, 1 a, 2 b
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }
	}

	{
	    // copyWithin(target, [start, end))   将指定位置的元素复制(覆盖)到从target位置开始的数据，返回当前数组
	    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [4, 2, 3, 4, 5]
	}

	{
	    // find() 找到符合条件的第一个数组元素
	    console.log([1, 2, 3, 4, 5, 6].find(function (item) {
	        return item > 3; // 4
	    }));
	    // findIndex() 找到符合条件的第一个数组元素的索引
	    console.log([1, 2, 3, 4, 5, 6].findIndex(function (item) {
	        return item > 3; // 3
	    }));
	}

	{
	    // includes(value, [fromIndex]) 数组中是否包含某个元素
	    console.log([1, 2, NaN].includes(1)); // true
	    console.log([1, 2, NaN].includes(NaN)); // true
	}

/***/ })
/******/ ]);