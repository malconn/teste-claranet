(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["$"] = factory();
	else
		root["$"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/components/TogglePassword.js":
/*!****************************************************!*\
  !*** ./assets/src/js/components/TogglePassword.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ togglePassword)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./assets/src/js/utils/index.js");

function togglePassword() {
  try {
    _utils__WEBPACK_IMPORTED_MODULE_0__.inputTogglePassword.addEventListener("click", HandleTogglePassword);
  } catch (error) {
    console.error(error);
  }
}

var HandleTogglePassword = function HandleTogglePassword(event) {
  var changeTextTogglebtn = {
    hide: function hide() {
      return event.target.innerText = "Mostrar";
    },
    show: function show() {
      return event.target.innerText = "Esconder";
    }
  };
  var changeAttributeToggle = {
    text: function text() {
      return _utils__WEBPACK_IMPORTED_MODULE_0__.inputPassword.setAttribute("type", "text");
    },
    password: function password() {
      return _utils__WEBPACK_IMPORTED_MODULE_0__.inputPassword.setAttribute("type", "password");
    }
  };
  _utils__WEBPACK_IMPORTED_MODULE_0__.inputPassword.getAttribute("type") === "password" ? changeAttributeToggle.text() : changeAttributeToggle.password();
  _utils__WEBPACK_IMPORTED_MODULE_0__.inputPassword.getAttribute("type") === "password" ? changeTextTogglebtn.hide() : changeTextTogglebtn.show();
};

/***/ }),

/***/ "./assets/src/js/utils/index.js":
/*!**************************************!*\
  !*** ./assets/src/js/utils/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "formSubmit": () => (/* binding */ formSubmit),
/* harmony export */   "inputPassword": () => (/* binding */ inputPassword),
/* harmony export */   "inputTogglePassword": () => (/* binding */ inputTogglePassword)
/* harmony export */ });
var inputPassword = document.querySelector("[data-password]");
var inputTogglePassword = document.querySelector("[data-toggle-password]");
var form = document.querySelector("[data-form]");
var formSubmit = document.querySelector("[data-submit-form]");

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./assets/src/js/app.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TogglePassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TogglePassword */ "./assets/src/js/components/TogglePassword.js");

(0,_components_TogglePassword__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index_budle.js.map