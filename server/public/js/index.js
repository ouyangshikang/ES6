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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	{
	  // 基本定义和生成实例,继承父类及覆盖
	  var Song = function Song() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '稻香';
	    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://www.zhoujielun.com';

	    _classCallCheck(this, Song);

	    this.name = name;
	    this.url = url;
	  };
	  // 继承父类Song


	  var SongChild = function (_Song) {
	    _inherits(SongChild, _Song);

	    function SongChild() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '周杰伦的稻香';

	      _classCallCheck(this, SongChild);

	      // 子类向父类传递参数,super一定要放在第一行
	      var _this = _possibleConstructorReturn(this, (SongChild.__proto__ || Object.getPrototypeOf(SongChild)).call(this, name));

	      _this.type = '中国风';
	      return _this;
	    }

	    return SongChild;
	  }(Song);

	  var l_song = new SongChild('周杰伦的等你回家');
	  console.log(l_song); // SongChild {name: "周杰伦的等你回家", url: “https://www.zhoujielun.com”, type: "中国风"}
	}

	{
	  // getter, setter
	  var _Song2 = function () {
	    function _Song2() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '稻香';

	      _classCallCheck(this, _Song2);

	      this.name = name;
	    }

	    _createClass(_Song2, [{
	      key: 'fullName',
	      get: function get() {
	        return '\u5468\u6770\u4F26\u7684' + this.name;
	      },
	      set: function set(value) {
	        this.name = value;
	      }
	    }]);

	    return _Song2;
	  }();

	  var singerSong = new _Song2();
	  console.log('getter', singerSong.fullName); // getter 周杰伦的稻香

	  console.log('setter', singerSong.fullName = '周杰伦的等你下课'); // setter 周杰伦的等你下课
	}

	{
	  // 静态方法 static
	  var _Song3 = function () {
	    function _Song3() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '稻香';

	      _classCallCheck(this, _Song3);

	      this.name = name;
	    }

	    _createClass(_Song3, null, [{
	      key: 'singSongs',
	      value: function singSongs() {
	        console.log('周杰伦在唱歌');
	      }
	    }]);

	    return _Song3;
	  }();

	  _Song3.singSongs(); // 周杰伦在唱歌
	}

	{
	  // 静态属性 
	  var _Song4 = function () {
	    function _Song4() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '稻香';

	      _classCallCheck(this, _Song4);

	      this.name = name;
	    }

	    _createClass(_Song4, null, [{
	      key: 'singSongs',
	      value: function singSongs() {
	        console.log('周杰伦在唱歌');
	      }
	    }]);

	    return _Song4;
	  }();

	  _Song4.type = '中国风';

	  console.log(_Song4.type); // 中国风
	}

/***/ })
/******/ ]);