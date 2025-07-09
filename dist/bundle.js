/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/GameSavingLoader.js":
/*!*********************************!*\
  !*** ./src/GameSavingLoader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameSavingLoader)
/* harmony export */ });
/* harmony import */ var _reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reader */ "./src/reader.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./src/parser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var GameSavingLoader = /*#__PURE__*/function () {
  function GameSavingLoader() {
    _classCallCheck(this, GameSavingLoader);
  }
  return _createClass(GameSavingLoader, null, [{
    key: "load",
    value: function load() {
      return (0,_reader__WEBPACK_IMPORTED_MODULE_0__["default"])().then(function (buffer) {
        return (0,_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(buffer);
      }).then(function (data) {
        return JSON.parse(data);
      })["catch"](function (error) {
        throw error;
      });
    }
  }]);
}();


/***/ }),

/***/ "./src/parser.js":
/*!***********************!*\
  !*** ./src/parser.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ json)
/* harmony export */ });
function json(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    }, 500);
  });
}

/***/ }),

/***/ "./src/reader.js":
/*!***********************!*\
  !*** ./src/reader.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ read)
/* harmony export */ });
function read() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
      return function (input) {
        var buffer = new ArrayBuffer(input.length * 2);
        var bufferView = new Uint16Array(buffer);
        for (var i = 0; i < input.length; i++) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      }(data);
    }, 1000);
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameSavingLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameSavingLoader */ "./src/GameSavingLoader.js");

_GameSavingLoader__WEBPACK_IMPORTED_MODULE_0__["default"].load().then(function (saving) {
  console.log('Game saving:', saving);
})["catch"](function (error) {
  console.error('Error loading game saving:', error);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vcHJvbWlzZXMvLi9zcmMvR2FtZVNhdmluZ0xvYWRlci5qcyIsIndlYnBhY2s6Ly9wcm9taXNlcy8uL3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vcHJvbWlzZXMvLi9zcmMvcmVhZGVyLmpzIiwid2VicGFjazovL3Byb21pc2VzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb21pc2VzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9taXNlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb21pc2VzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvbWlzZXMvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkIGZyb20gJy4vcmVhZGVyJztcclxuaW1wb3J0IGpzb24gZnJvbSAnLi9wYXJzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNhdmluZ0xvYWRlciB7XHJcbiAgc3RhdGljIGxvYWQoKSB7XHJcbiAgICByZXR1cm4gcmVhZCgpXHJcbiAgICAgIC50aGVuKGJ1ZmZlciA9PiBqc29uKGJ1ZmZlcikpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gSlNPTi5wYXJzZShkYXRhKSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ganNvbihkYXRhKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZXNvbHZlKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQxNkFycmF5KGRhdGEpKSk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH0pO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVhZCgpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSAne1wiaWRcIjo5LFwiY3JlYXRlZFwiOjE1NDYzMDA4MDAsXCJ1c2VySW5mb1wiOntcImlkXCI6MSxcIm5hbWVcIjpcIkhpdG1hblwiLFwibGV2ZWxcIjoxMCxcInBvaW50c1wiOjIwMDB9fSc7XHJcbiAgICAgIHJldHVybiAoaW5wdXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihpbnB1dC5sZW5ndGggKiAyKTtcclxuICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gbmV3IFVpbnQxNkFycmF5KGJ1ZmZlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgYnVmZmVyVmlld1tpXSA9IGlucHV0LmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUoYnVmZmVyKTtcclxuICAgICAgfSkoZGF0YSk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWVTYXZpbmdMb2FkZXIgZnJvbSAnLi9HYW1lU2F2aW5nTG9hZGVyJztcclxuXHJcbkdhbWVTYXZpbmdMb2FkZXIubG9hZCgpXHJcbiAgLnRoZW4oc2F2aW5nID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdHYW1lIHNhdmluZzonLCBzYXZpbmcpO1xyXG4gIH0pXHJcbiAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgZ2FtZSBzYXZpbmc6JywgZXJyb3IpO1xyXG4gIH0pOyJdLCJuYW1lcyI6WyJyZWFkIiwianNvbiIsIkdhbWVTYXZpbmdMb2FkZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImxvYWQiLCJ0aGVuIiwiYnVmZmVyIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiZGVmYXVsdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGx5IiwiVWludDE2QXJyYXkiLCJpbnB1dCIsIkFycmF5QnVmZmVyIiwibGVuZ3RoIiwiYnVmZmVyVmlldyIsImkiLCJjaGFyQ29kZUF0Iiwic2F2aW5nIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=