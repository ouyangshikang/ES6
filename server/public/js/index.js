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
	    console.log('二进制表示法:', 2 === 2); // true
	    console.log('八进制表示法:', 224 === 224); // true
	    console.log('----------------------');
	}
	{
	    console.log(Number.isFinite(15)); // true
	    console.log(Number.isFinite(true)); // false
	    console.log(Number.isFinite(0.8)); // true
	    console.log(Number.isFinite(NaN)); // false
	    console.log(Number.isFinite('string')); // false
	    console.log(Number.isFinite(Infinity)); // false
	    console.log('----------------------');
	}
	{
	    console.log(Number.isNaN(15));
	    console.log(Number.isNaN(NaN));
	    console.log(Number.isNaN(true));
	    console.log(Number.isNaN(0.4));
	    console.log(Number.isNaN('NaN'));
	}

/***/ })
/******/ ]);