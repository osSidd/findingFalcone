"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfindingfalcone"] = self["webpackChunkfindingfalcone"] || []).push([["src_errorBoundary_errorBoundary_tsx"],{

/***/ "./src/errorBoundary/errorBoundary.tsx":
/*!*********************************************!*\
  !*** ./src/errorBoundary/errorBoundary.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar ErrorBoundary = /** @class */ (function (_super) {\n    __extends(ErrorBoundary, _super);\n    function ErrorBoundary() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.state = {\n            hasError: false\n        };\n        return _this;\n    }\n    ErrorBoundary.getDerivedStateFromError = function (_) {\n        return { hasError: true };\n    };\n    ErrorBoundary.prototype.render = function () {\n        if (this.state.hasError)\n            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Something went wrong...\");\n        return this.props.children;\n    };\n    return ErrorBoundary;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);\n\n\n//# sourceURL=webpack://findingfalcone/./src/errorBoundary/errorBoundary.tsx?");

/***/ })

}]);