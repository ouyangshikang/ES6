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

	{
	    var regex = new RegExp('xyz', 'i');
	    var regex2 = new RegExp(/xyz/i);
	    var result = regex.test('xyz123');
	    var result2 = regex.test('xyz123');
	    console.log(result, result2);

	    var regex3 = new RegExp(/xyz/ig, 'i'); //后面的修饰符会覆盖前面的修饰符，flags用来获取修饰符
	    console.log(regex3.flags);
	}

	{
	    //y 修饰符
	    var s = 'bbb_bb_b';
	    var a = /b+/g;
	    var b = new RegExp('b+', 'y');
	    console.log('第一次匹配:', a.exec(s), b.exec(s)); // 结果一样
	    console.log('第二次匹配:', a.exec(s), b.exec(s)); // y修饰符的没有匹配到结果，null
	    console.log('第三次匹配:', a.exec(s), b.exec(s)); // y修饰符的没有匹配到结果，null
	    console.log('第四次匹配:', a.exec(s), b.exec(s)); // y修饰符的没有匹配到结果，null
	    console.log('第五次匹配:', a.exec(s), b.exec(s)); // y修饰符的没有匹配到结果，null
	    // y和g都是全局匹配，不同的是g从上一次匹配的位置继续匹配，y匹配的必须是紧跟着下一个的字符(_)开始匹配
	    console.log(a.sticky, b.sticky); //es6新增sticky属性判断是否开启y修饰符
	}

	{
	    // U修饰符,处理Unicode字符
	    console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A')); //'\uD83D\uDC2A'当成两个字节
	    console.log('u-2', /^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('\uD83D\uDC2A')); // '\uD83D\uDC2A'当成一个字符，所以为false

	    console.log('\uD842\uDFB7');
	    var str = '𠮷';
	    console.log(/^.$/.test(str)); // false   .只能匹配小于2个字节长度的任意字符
	    console.log(/^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(str)); // true
	}

/***/ })
/******/ ]);