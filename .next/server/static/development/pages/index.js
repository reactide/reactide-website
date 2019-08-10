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

module.exports = "/_next/static/images/reactide-demo-32c9f4881515a626f5e94de24a1b2e1f.png";

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

module.exports = "/_next/static/images/reactide-demo3-c3524e1475606b45f45808ba38b7f92c.png";

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
  }, "To get started, just input your .js and .html entry points inside Reactide's universal configuration. Once those entry points are changed, go ahead and run:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    id: "thirdGif",
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Download"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
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
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    class: "github-button",
    href: "https://github.com/reactide/reactide",
    "data-icon": "octicon-star",
    "data-show-count": "true",
    "aria-label": "Star ntkme/github-buttons on GitHub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Star"));
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
    className: "app",
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ep/Codesmith/reactide-website/pages/index.js";




function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    async: true,
    defer: true,
    src: "https://buttons.github.io/buttons.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3179683366",
    __self: this
  }, "body{overflow-x:hidden;margin:auto;}@media screen and (max-width:768px){.logo{height:30% !important;width:30% !important;margin-bottom:2em;}.textLogo{height:75% !important;width:75% !important;}.banner{padding:0 10px;}h1{font-size:4vw !important;}section{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#second{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.demoGif{min-width:90vw;}.dlContainer{margin-top:-3em;margin-bottom:-3em;}.download{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.dlLogo{height:65px;}.dlp{font-size:12px;}article{width:90vw;margin-bottom:1em;}}body{background-color:#1c1f2c;font-family:helvetica;}.layout{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}p{font-size:16px;color:white;line-height:1.5;}h1,h2,h3{color:white;line-height:1.5;}h1{font-size:2vw;font-weight:lighter;text-shadow:0 15px 15px black;margin-top:100px;}h2{font-size:20px;text-shadow:5px 10px 15px black;}.banner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:100px;padding-top:70px;margin-top:35px;}.logo{height:15%;width:15%;margin-bottom:2em;}.textLogo{height:40%;width:40%;}.demo{background-color:#272b3d;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:100vw;padding:10px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:-15px;margin-right:-15px;text-align:center;}article{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-right:4em;margin-left:4em;margin-top:-10px;}code{font-family:Courier,'New Courier',monospace;font-size:12px;}#codeStyler{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:20px;}pre{background-color:black;border-radius:3px;width:200px;padding:0px 5px 5px;}code{color:limegreen;}.demoGif{width:50%;height:50%;box-shadow:0 14px 25px 15px #1c1f2c;border-radius:5px;}#demoGif2{box-shadow:0 14px 25px 15px #13141c;}#first,#second,#third{padding:80px 25px 80px !important;}#first,#third{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 25px;}#third{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:10px;}#second{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#1c1f2c;}.dlContainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;padding:80px;}h3{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.download{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:25px 25px 0px 25px;text-align:center;}.mac{padding:1em;}.windows{padding:1em;}.linux{padding:1em;}.dlLogo{max-height:100px;max-width:100px;}h3{text-shadow:5px 10px 15px black;}.footer{text-align:center;margin-bottom:25px;margin-top:-25px;}h5{color:gray;opacity:0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcC9Db2Rlc21pdGgvcmVhY3RpZGUtd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXUyxBQUc2QixBQU9NLEFBTUEsQUFNekIsQUFHNEIsQUFJWixBQVNoQixBQVFBLEFBR21CLEFBTUgsQUFNaEIsQUFJQSxBQUdjLEFBUVksQUFLWixBQU1FLEFBTUgsQUFLRSxBQU9DLEFBS0YsQUFZRixBQU1BLEFBTWMsQUFZWixBQVUrQixBQUkvQixBQU1VLEFBUTFCLEFBR2EsQUFNMEIsQUFJRixBQUtyQixBQUtBLEFBT0EsQUFTQSxBQVFLLEFBSUQsQUFhTCxBQUlBLEFBSUEsQUFJSyxBQUtlLEFBSWYsQUFNTixVQXZGQSxDQTdHUyxBQXNEVixBQU1BLEFBeUlFLENBN01aLEFBaUNnQixBQWlKbEIsQUFJQSxBQUlBLEVBcEpzQixDQTdFcEIsQUF3QkEsQUFtQkEsQUF1QlksQUFrQm9CLENBeERYLEFBNEh2QixDQTZFa0IsQ0F2UEwsQUFnUVEsR0F4SUQsQUFNcEIsQUFpRHNDLENBeEtiLEFBTUEsQ0FzSkwsQUFvR3BCLEVBalBFLEFBbURzQixBQTBEVCxFQTlDRyxDQU1sQixDQXpCRSxDQWpFRixFQTJQQSxDQUpBLENBeEpnQyxBQXlGaEMsQ0F6SUUsQ0FvSUYsQ0E2RW1CLEVBeEluQixFQTJDYyxFQTVKUSxBQU1wQixBQXdFRixDQW1FZSxHQS9FZixBQTZCQSxNQStERCxDQTRGQyxHQWxGb0IsRUF2QkosRUFoSmQsR0F3RmlCLE9BeUhuQixBQUljLEVBeERkLENBNUkwQixBQTBCQSxBQTBCRixBQTZCQSxBQW9DQSxBQWNDLEFBZ0NMLEFBS1ksQUFPTCxBQVNGLENBakN6QixNQS9FQSxFQTZIZSxTQWpDZixPQTFEa0IsQUEwRWxCLEdBNUtFLGFBbUdhLGFBQ1Usd0JBM0dFLEFBMEJ6QixBQTBCdUIsQUE2QkEsQUFvQ0EsS0FnRk8sZ0JBaEVqQyxBQW1EeUIsZ0JBbkR4QixBQW9DRCxnQkFBQyxzQkE3RHdCLHdCQTNHRCxBQW9EdkIsQUE2QnFCLEFBb0NGLEFBbUVJLGlCQWxFTCxJQStFVyxZQTlFVixlQStFQyxFQTdFcEIsSUFib0IsWUEyRnBCLE1BMUZxQixJQTRFTixhQUNmLEVBNUVvQixFQTVHbEIsQUFnRmtCLGdCQTZCcEIsRUE1QnNCLG9CQUNILGlCQUdwQixnQkFBQyIsImZpbGUiOiIvVXNlcnMvZXAvQ29kZXNtaXRoL3JlYWN0aWRlLXdlYnNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiggICAgXG4gICAgPGJvZHk+XG4gICAgPEhlYWQ+XG4gICAgPHNjcmlwdCBhc3luYyBkZWZlciBzcmM9XCJodHRwczovL2J1dHRvbnMuZ2l0aHViLmlvL2J1dHRvbnMuanNcIj48L3NjcmlwdD5cbiAgICA8L0hlYWQ+XG4gICAgPExheW91dCBjbGFzc05hbWU9J2xheW91dCc+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBcbiAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50ZXh0TG9nbyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDc1JSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5iYW5uZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0dncgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3NlY29uZCB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGVtbyB7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGVtb0dpZiB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDkwdndcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGxDb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0zZW07XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZG93bmxvYWQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRsTG9nbyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHhcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGxwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGFydGljbGUge1xuICAgICAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzFmMmM7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgaDEsIGgyLCBoMyB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMTVweCAxNXB4IGJsYWNrO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDEwcHggMTVweCBibGFjaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHhcbiAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0TG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MCU7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLmRlbW8ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzJiM2Q7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0ZW07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICBjb2RlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IENvdXJpZXIsICdOZXcgQ291cmllcicsIG1vbm9zcGFjZTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O31cblxuICAgICAgICAjY29kZVN0eWxlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcHJlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHggNXB4XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICBjb2xvcjogbGltZWdyZWVuXG4gICAgICAgIH1cblxuICAgICAgICAuZGVtb0dpZiB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDE0cHggMjVweCAxNXB4ICMxYzFmMmM7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgICNkZW1vR2lmMiB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI1cHggMTVweCAjMTMxNDFjO1xuICAgICAgICB9XG5cbiAgICAgICAgI2ZpcnN0LCAjc2Vjb25kLCAjdGhpcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDgwcHggMjVweCA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAjZmlyc3QsICN0aGlyZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjdGhpcmQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHhcbiAgICAgICAgfVxuXG5cbiAgICAgICAgI3NlY29uZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZjJjO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLmRsQ29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGgze1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kb3dubG9hZCB7XG4gICAgICAgICAgYWxpZ24tc2VsZjpjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHBhZGRpbmc6IDI1cHggMjVweCAwcHggMjVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGxwIHtcbiAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWMge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53aW5kb3dzIHtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICAubGludXgge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kbExvZ28ge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCAxMHB4IDE1cHggYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDUge1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICBcbiAgICA8L0xheW91dD5cbiAgICA8L2JvZHk+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/ep/Codesmith/reactide-website/pages/index.js */")));
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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