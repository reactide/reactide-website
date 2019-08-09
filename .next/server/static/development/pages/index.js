module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/apple-logo.png":
/*!**************************************!*\
  !*** ./assets/images/apple-logo.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/apple-logo-2c4dc89fde0502eea4f80714ae3bccaa.png";

/***/ }),

/***/ "./assets/images/github-logo.png":
/*!***************************************!*\
  !*** ./assets/images/github-logo.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADnklEQVRIiY2WT2hdRRjFf+fyCCGGRwgiVUqQWqU8nUuXVdwUaSOliMQSbRCKitIKJQr+QdoYYiwGS4tFu7HYhWgtqBRUAlIEF6IguPBOqG0oXQStUEp9hBJCCO+4uPOel5DEfDDMzGXmfH/PN1esITFGgC229wCDkh4C+oFlYB64DHwPTAOzIYRVcbQG8GZgDNhXAW0Ci+lYt+26pK6k7BtgHLi2UlG2itIngF+Al9L+A2Cn7QDcl8aDknYCU8AC8Gy6M5IMXN2DGONB4FRS/BEwGUK4tarv/92pA2/afk1SljyfanuiSlj2Al+nMBwGPgshtNYDrygBGALOAHXguXS/E6J7gNO2swT+KVCPMQ7HGDf/D/gm2yPAj7ZfBJZtnwC2Vj04bfvlFJbRPM9bMcYnbV8AliSN2/65UklN24Wk7baPAb2SXgDOAhO235Z0HthfizEOAMOSmsBEJSyZJIAu4JikFlBrWy5pOc3tb1kIgaIojgPPA3tsNzJgN3AncC6EcLPi/Ryw1L5cBU9SW/HtMkCe57clnQXqkvZmtgdtt1I4qrLDds02GxnA9kqJfmt7yfauTFJD0ryk2UriasBbkjJJbGQAo5QVhO1rkpqSGhnQZ3uBkqmkAw9QVtaGxfYWyg4AJbsXgXrNdid5McYeoLO33baus67OQHWdAVmMMUuYLdvUJM0DA8Cw7cWUnLrtBUk9KxWtnCvr28B+2/8kA/slzdeAGWAbUJM0nUKVSboDOLoSbB05DryT5zkxxkeBHtu/ZsDF5F4IIdwKIbRCCMu2J4GplJ9OSKpzWi8AJ22/W+mku5LBF5WI9lty634gB3YA76d8NICnKVv3torFs8B54EvgUpugMcZe4A/Kino4CyHMpYN9tseBn4C7gQlKds7Y/oIVRLPdDZwKIcy0wYuiAHidspqmgUvtZvee7TngIDBi+wjwDPB3URR/Sfrd9tZqiIAB26NVpZKGgDds3wDGQggdq64DhyRdAD5MoXnM9m5JvcBhSZuAbuAcsC/1pkcq7B0CztiuSXoVuEpKLiEE8jyfpmzVXZI+SdZ9FUI4aftP24eSIRO2r9o+APQAfcAk8DlliY9R9jU6CtoSQvgYeAq4LukV4EpRFCeAu4B524upZFtAZrsBXLF9lJK9B6i8ZrD+o38EGAb6E9GaQC9wIymEMvFN4DvWePTXZFCMEdv3Snrc9qCkRgLOgJu2L0n6wfa0pDV/W/4FYRDmfCzZA6cAAAAASUVORK5CYII="

/***/ }),

/***/ "./assets/images/linux-logo.png":
/*!**************************************!*\
  !*** ./assets/images/linux-logo.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/linux-logo-3f5e60cb8624bce0019c735ef39739f1.png";

/***/ }),

/***/ "./assets/images/reactide-demo.png":
/*!*****************************************!*\
  !*** ./assets/images/reactide-demo.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/reactide-demo-c472587bcca62c811de5ff35956a46e1.png";

/***/ }),

/***/ "./assets/images/reactide-demo2.png":
/*!******************************************!*\
  !*** ./assets/images/reactide-demo2.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/reactide-demo2-513ad5975e741644a43ecd77ed076449.png";

/***/ }),

/***/ "./assets/images/reactide-demo3.png":
/*!******************************************!*\
  !*** ./assets/images/reactide-demo3.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/reactide-demo3-c333b1afbc5859c990ac9a71f24ca737.png";

/***/ }),

/***/ "./assets/images/reactide-demo4.png":
/*!******************************************!*\
  !*** ./assets/images/reactide-demo4.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/reactide-demo4-45c2ba5c2610716aabe069068d5f3916.png";

/***/ }),

/***/ "./assets/images/reactide-logo.png":
/*!*****************************************!*\
  !*** ./assets/images/reactide-logo.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/reactide-logo-3cd2d05a646cac0abb4cebcc11569e7c.png";

/***/ }),

/***/ "./assets/images/reactide-screenshot2.png":
/*!************************************************!*\
  !*** ./assets/images/reactide-screenshot2.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/reactide-screenshot2-b3aeb19a1f6854f465422e4ba9b00a92.png";

/***/ }),

/***/ "./assets/images/reactide-text-logo.png":
/*!**********************************************!*\
  !*** ./assets/images/reactide-text-logo.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/reactide-text-logo-319e4938b765cd0a779dade2fa82468f.png";

/***/ }),

/***/ "./assets/images/windows-logo.png":
/*!****************************************!*\
  !*** ./assets/images/windows-logo.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/windows-logo-c4f14b925342a74ba1aac53bdaea2a09.png";

/***/ }),

/***/ "./components/Banner.js":
/*!******************************!*\
  !*** ./components/Banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_reactide_text_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/reactide-text-logo.png */ "./assets/images/reactide-text-logo.png");
/* harmony import */ var _assets_images_reactide_text_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reactide_text_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_reactide_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/reactide-logo.png */ "./assets/images/reactide-logo.png");
/* harmony import */ var _assets_images_reactide_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reactide_logo_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ep/Codesmith/reactide-website/components/Banner.js";



function Banner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_reactide_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_reactide_text_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "textLogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "The first dedicated IDE for React web application development"));
}

/***/ }),

/***/ "./components/Demo.js":
/*!****************************!*\
  !*** ./components/Demo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_reactide_screenshot2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/reactide-screenshot2.png */ "./assets/images/reactide-screenshot2.png");
/* harmony import */ var _assets_images_reactide_screenshot2_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reactide_screenshot2_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_reactide_demo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/reactide-demo.png */ "./assets/images/reactide-demo.png");
/* harmony import */ var _assets_images_reactide_demo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reactide_demo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_reactide_demo2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/reactide-demo2.png */ "./assets/images/reactide-demo2.png");
/* harmony import */ var _assets_images_reactide_demo2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reactide_demo2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_reactide_demo3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/reactide-demo3.png */ "./assets/images/reactide-demo3.png");
/* harmony import */ var _assets_images_reactide_demo3_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reactide_demo3_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_reactide_demo4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/reactide-demo4.png */ "./assets/images/reactide-demo4.png");
/* harmony import */ var _assets_images_reactide_demo4_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reactide_demo4_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/ep/Codesmith/reactide-website/components/Demo.js";






function Demo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "demo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "first",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "An extensible developer environment in one click"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Reactide runs an integrated Node server and custom browser simulator eliminating the need to configure any servers, build-tools, and even offers hot module reloading right out of the box.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_reactide_demo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "demoGif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "second",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_reactide_demo3_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "demoGif",
    id: "demoGif2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Streamlined configurations"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Save time on setting up configurations through Reactide's built-in NPM package that automates most of the process for you. All that is needed for getting started is to change the .js and .html entry points inside Reactide's universal configuration. Once those entry points are changed, go ahead and run:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "codeStyler",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "npm run reactide-server")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "third",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Components visualization"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Navigate through a live-representation of your app\u2019s architecture.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_reactide_demo4_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: "demoGif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })));
}

/***/ }),

/***/ "./components/Download.js":
/*!********************************!*\
  !*** ./components/Download.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Download; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_apple_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/apple-logo.png */ "./assets/images/apple-logo.png");
/* harmony import */ var _assets_images_apple_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_apple_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_windows_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/windows-logo.png */ "./assets/images/windows-logo.png");
/* harmony import */ var _assets_images_windows_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_windows_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_linux_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/linux-logo.png */ "./assets/images/linux-logo.png");
/* harmony import */ var _assets_images_linux_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_linux_logo_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ep/Codesmith/reactide-website/components/Download.js";




function Download() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dlContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "mac",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/reactide/reactide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_apple_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "dlLogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "dlp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "macOS 10.10+"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "windows",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/reactide/reactide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_windows_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "dlLogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "dlp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Windows 7, 8, 10"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "linux",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/reactide/reactide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_linux_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "dlLogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "dlp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Debian, Ubuntu")))));
}

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_github_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/github-logo.png */ "./assets/images/github-logo.png");
/* harmony import */ var _assets_images_github_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_github_logo_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ep/Codesmith/reactide-website/components/Footer.js";


function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "\xA9Copyright. All rights reserved."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/reactide/reactide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_github_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner */ "./components/banner.js");
/* harmony import */ var _Demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Demo */ "./components/Demo.js");
/* harmony import */ var _Download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Download */ "./components/Download.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/ep/Codesmith/reactide-website/components/Layout.js";






const Layout = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Demo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Download__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/banner.js":
/*!******************************!*\
  !*** ./components/banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_reactide_text_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/reactide-text-logo.png */ "./assets/images/reactide-text-logo.png");
/* harmony import */ var _assets_images_reactide_text_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reactide_text_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_reactide_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/reactide-logo.png */ "./assets/images/reactide-logo.png");
/* harmony import */ var _assets_images_reactide_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_reactide_logo_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ep/Codesmith/reactide-website/components/banner.js";



function Banner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_reactide_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_reactide_text_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "textLogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "The first dedicated IDE for React web application development"));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
var _jsxFileName = "/Users/ep/Codesmith/reactide-website/pages/index.js";




function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1808122720",
    __self: this
  }, "@media screen and (max-width:768px){section{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#second{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.demoGif{min-width:80vw;}.dlContainer{margin-top:-3em;margin-bottom:-3em;}.download{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.dlLogo{height:65px;}.dlp{font-size:12px;}article{margin-bottom:1em;}}body{background-color:#1c1f2c;font-family:helvetica;}.layout{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}p{font-size:16px;color:white;line-height:1.5;}h1,h2,h3{color:white;line-height:1.5;}h1{font-size:30px;font-weight:lighter;text-shadow:0 15px 15px black;margin-top:100px;}h2{font-size:20px;text-shadow:5px 10px 15px black;}.banner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:100px;padding-top:70px;margin-top:35px;}.logo{height:15%;width:15%;}.textLogo{height:40%;width:40%;}.demo{background-color:#272b3d;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:100vw;padding:10px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:-15px;margin-right:-15px;text-align:center;}article{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-right:4em;margin-left:4em;margin-top:-10px;}code{font-family:Courier,'New Courier',monospace;font-size:12px;}#codeStyler{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:20px;}pre{background-color:black;width:200px;padding:0px 5px 5px;}code{color:limegreen;}.demoGif{width:50%;height:50%;box-shadow:0 14px 25px 15px #1c1f2c;border-radius:5px;}#demoGif2{box-shadow:0 14px 25px 15px #13141c;}#first,#second,#third{padding:80px 25px 80px !important;}#first,#third{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 25px;}#third{margin-top:10px;}#second{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#1c1f2c;margin-left:-15px;margin-right:-15px;}.dlContainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:80px;}.download{width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:25px;text-align:center;}.dlLogo{max-height:100px;max-width:100px;}.footer{text-align:center;}h5{color:gray;opacity:0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcC9Db2Rlc21pdGgvcmVhY3RpZGUtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTUyxBQUkwQixBQU9oQixBQUlBLEFBR21CLEFBS0gsQUFNaEIsQUFJQSxBQUlBLEFBSzBCLEFBS1osQUFNRSxBQU1ILEFBS0csQUFPQSxBQUtGLEFBV0YsQUFLQSxBQU1jLEFBWVosQUFVK0IsQUFJL0IsQUFNVSxBQU8xQixBQUdhLEFBTTBCLEFBSUYsQUFLckIsQUFNaEIsQUFHZ0IsQUFTQSxBQU1ELEFBdUJLLEFBS0EsQUFJTixVQXRFQSxDQXJERCxBQUtBLEFBdUhFLENBdkxaLEFBK0JnQixBQXdISCxHQXJLYixBQWtCQSxBQXFCWSxBQVdRLEFBT1ksQ0FyRFgsQUFzSHZCLEFBd0JBLENBMENrQixDQXRLaEIsQUEyS0YsR0F2SEEsQUFLQSxBQWdEc0MsRUFYeEIsQUFrRmQsRUExS3dCLEFBd0RULEVBNUNHLENBTWxCLEtBK0lBLENBcERBLENBcElFLEFBOEM4QixBQW1FakMsQ0FjQyxPQTNGQSxDQWlFZSxHQTdFZixBQTZCQSxRQTREQSxFQVVvQixFQXRCSixNQXRERyxTQTlETyxBQW1CQSxBQXdCRixBQTZCQSxBQWtDQSxBQWNDLEFBK0JMLEFBU08sQUFTRixDQTlCekIsT0E1RUEsSUFpSGdDLE1BeEJoQyxPQXpEa0IsQUFrRUUsR0EzSmxCLGFBMEZhLEVBa0VNLFdBakVJLFFBb0V6QixnQkFwSzJCLEFBbUJ6QixBQXdCdUIsQUE2QkEsQUFrQ0EscUJBZ0IxQixBQStDZ0IsYUFDZixHQWhEQSxZQXNEZSxhQUNLLGFBaEZJLEtBaUZ4QixtQkFqTHVCLEFBMkN2QixBQTZCcUIsQUFrQ0YsaUJBQ0QsZ0JBQ0MsaUJBRW5CLElBYm9CLGtCQUNDLG1CQUNELEVBbEdsQixBQXdFa0IsZ0JBMkJwQixFQTFCc0Isb0JBQ0gsaUJBRXBCLGdCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9lcC9Db2Rlc21pdGgvcmVhY3RpZGUtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Jhbm5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuKFxuICAgIDxib2R5PlxuXG4gICAgPExheW91dCBjbGFzc05hbWU9J2xheW91dCc+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2Vjb25kIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZW1vR2lmIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogODB2d1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kbENvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtM2VtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZG93bmxvYWQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRsTG9nbyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHhcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGxwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGFydGljbGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZjJjO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxLCBoMiwgaDMge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxNXB4IDE1cHggYmxhY2s7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggMTBweCAxNXB4IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzVweFxuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dExvZ28ge1xuICAgICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5kZW1vIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyYjNkO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJ0aWNsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNGVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0ZW07XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgY29kZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyLCAnTmV3IENvdXJpZXInLCBtb25vc3BhY2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDt9XG5cbiAgICAgICAgI2NvZGVTdHlsZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweFxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHByZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHggNXB4XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICBjb2xvcjogbGltZWdyZWVuXG4gICAgICAgIH1cblxuICAgICAgICAuZGVtb0dpZiB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDE0cHggMjVweCAxNXB4ICMxYzFmMmM7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgICNkZW1vR2lmMiB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI1cHggMTVweCAjMTMxNDFjO1xuICAgICAgICB9XG5cbiAgICAgICAgI2ZpcnN0LCAjc2Vjb25kLCAjdGhpcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDgwcHggMjVweCA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAjZmlyc3QsICN0aGlyZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjdGhpcmQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHhcbiAgICAgICAgfVxuXG4gICAgICAgICNzZWNvbmQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWYyYztcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC5kbENvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRvd25sb2FkIHtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGxwIHtcbiAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWMge1xuICAgICAgICB9XG5cbiAgICAgICAgLndpbmRvd3Mge1xuXG4gICAgICAgIH1cblxuICAgICAgICAubGludXgge1xuXG4gICAgICAgIH1cblxuICAgICAgICAuZGxMb2dvIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoNSB7XG4gICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICAgPC9ib2R5PlxuICApXG59Il19 */\n/*@ sourceURL=/Users/ep/Codesmith/reactide-website/pages/index.js */")));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ep/Codesmith/reactide-website/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map