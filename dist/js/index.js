webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _base = __webpack_require__(1);

	//引入css
	__webpack_require__(2);
	//引入js

	//业务代码
	_base.Base.alert('ddd');

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Base = {
	    alert: function alert(msg) {
	        window.alert(msg);
	    }
	};
	exports.Base = Base;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);