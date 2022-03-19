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

/***/ "./assets/src/js/components/LoginGoogle.js":
/*!*************************************************!*\
  !*** ./assets/src/js/components/LoginGoogle.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginGoogle)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./assets/src/js/utils/index.js");

function LoginGoogle() {
  _utils__WEBPACK_IMPORTED_MODULE_0__.googleBtn.addEventListener("click", HandleGoogleClick);
}

var HandleGoogleClick = function HandleGoogleClick() {
  return window.location.href = "https://claranet.com.br";
};

/***/ }),

/***/ "./assets/src/js/components/SelectThemes.js":
/*!**************************************************!*\
  !*** ./assets/src/js/components/SelectThemes.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectTheme)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./assets/src/js/utils/index.js");

function SelectTheme() {
  _utils__WEBPACK_IMPORTED_MODULE_0__.selectTheme.addEventListener("click", HandleSelectTheme);
}

var HandleSelectTheme = function HandleSelectTheme() {
  _utils__WEBPACK_IMPORTED_MODULE_0__.selectTheme.value === "dark" ? darkTheme.label() : lightTheme.label();
  _utils__WEBPACK_IMPORTED_MODULE_0__.selectTheme.value === "dark" ? darkTheme.bg() : lightTheme.bg();
  _utils__WEBPACK_IMPORTED_MODULE_0__.selectTheme.value === "dark" ? darkTheme.title() : lightTheme.title();
  _utils__WEBPACK_IMPORTED_MODULE_0__.selectTheme.value === "dark" ? darkTheme.labelTheme() : lightTheme.labelTheme();
};

var darkTheme = {
  label: function label() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__.labelForget.classList.add("dark");
  },
  bg: function bg() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__.logon.classList.add("dark");
  },
  title: function title() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__.title.classList.add("dark");
  },
  labelTheme: function labelTheme() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__.labelTheme.classList.add("dark");
  }
};
var lightTheme = {
  label: function label() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__.labelForget.classList.remove("dark");
  },
  bg: function bg() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__.logon.classList.remove("dark");
  },
  title: function title() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__.title.classList.remove("dark");
  },
  labelTheme: function labelTheme() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__.labelTheme.classList.remove("dark");
  }
};

/***/ }),

/***/ "./assets/src/js/components/Submit.js":
/*!********************************************!*\
  !*** ./assets/src/js/components/Submit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Submit)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./assets/src/js/utils/index.js");

function Submit() {
  try {
    _utils__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener("submit", HandleSubmit);
  } catch (error) {
    console.error(error);
  }
}

var HandleSubmit = function HandleSubmit(event) {
  event.preventDefault();
  window.location.href = "https://claranet.com.br";
};

/***/ }),

/***/ "./assets/src/js/components/TogglePassword.js":
/*!****************************************************!*\
  !*** ./assets/src/js/components/TogglePassword.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TogglePassword)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./assets/src/js/utils/index.js");

function TogglePassword() {
  try {
    _utils__WEBPACK_IMPORTED_MODULE_0__.inputTogglePassword.addEventListener("click", HandleTogglePassword);
  } catch (error) {
    console.error(error);
  }
}

var HandleTogglePassword = function HandleTogglePassword(event) {
  var changeTextTogglebtn = {
    hide: function hide() {
      return event.target.innerHTML = "Mostrar";
    },
    show: function show() {
      return event.target.innerHTML = "Esconder";
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
/* harmony export */   "googleBtn": () => (/* binding */ googleBtn),
/* harmony export */   "inputPassword": () => (/* binding */ inputPassword),
/* harmony export */   "inputTogglePassword": () => (/* binding */ inputTogglePassword),
/* harmony export */   "labelForget": () => (/* binding */ labelForget),
/* harmony export */   "labelTheme": () => (/* binding */ labelTheme),
/* harmony export */   "logon": () => (/* binding */ logon),
/* harmony export */   "selectTheme": () => (/* binding */ selectTheme),
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
var inputPassword = document.querySelector("[data-password]");
var inputTogglePassword = document.querySelector("[data-toggle-password]");
var form = document.querySelector("[data-form]");
var googleBtn = document.querySelector("[data-google-login]");
var selectTheme = document.querySelector("[data-select-theme]");
var labelForget = document.querySelector("[data-label-forget]");
var logon = document.querySelector("[data-logon]");
var title = document.querySelector("[data-title]");
var labelTheme = document.querySelector("[data-label-theme]");

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
/* harmony import */ var _components_Submit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Submit */ "./assets/src/js/components/Submit.js");
/* harmony import */ var _components_LoginGoogle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LoginGoogle */ "./assets/src/js/components/LoginGoogle.js");
/* harmony import */ var _components_SelectThemes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SelectThemes */ "./assets/src/js/components/SelectThemes.js");




(0,_components_TogglePassword__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_components_Submit__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_LoginGoogle__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components_SelectThemes__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index_budle.js.map