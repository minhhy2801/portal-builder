/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Router.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Router.js":
/*!***********************!*\
  !*** ./src/Router.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_resource_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/resource/constant */ \"./src/components/resource/constant.js\");\n/* harmony import */ var _components_utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/utils/util */ \"./src/components/utils/util.js\");\n/* harmony import */ var _components_PortalBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PortalBuilder */ \"./src/components/PortalBuilder/index.js\");\n/* harmony import */ var _components_SettingBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SettingBuilder */ \"./src/components/SettingBuilder/index.js\");\n\n\n\n\nlet views = {};\n\nlet viewPage = (path, render) => {\n  return views[`/${path}`] = render;\n};\n\nviewPage('home', () => {\n  let rootDOM = document.getElementById(_components_resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"appDiv\"]);\n  rootDOM.innerHTML = \"\";\n  const link1 = Object(_components_utils_util__WEBPACK_IMPORTED_MODULE_1__[\"createLinkRouter\"])('portal-builder', 'Go to portal-builder', '#/portal-builder');\n  const link2 = Object(_components_utils_util__WEBPACK_IMPORTED_MODULE_1__[\"createLinkRouter\"])('settings-builder', 'Go to settings-builder', '#/settings-builder');\n  rootDOM.appendChild(link1);\n  return rootDOM.appendChild(link2);\n});\nviewPage('portal-builder', () => {\n  let rootDOM = document.getElementById(_components_resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"appDiv\"]);\n  rootDOM.innerHTML = \"\";\n  return rootDOM.appendChild(Object(_components_PortalBuilder__WEBPACK_IMPORTED_MODULE_2__[\"PortalBuilder\"])());\n});\nviewPage('settings-builder', () => {\n  let rootDOM = document.getElementById(_components_resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"appDiv\"]);\n  rootDOM.innerHTML = \"\";\n  return rootDOM.appendChild(Object(_components_SettingBuilder__WEBPACK_IMPORTED_MODULE_3__[\"SettingsBuilder\"])());\n});\n\nlet resolveRoute = path => {\n  try {\n    return views[path];\n  } catch (error) {\n    throw new Error(\"The route is not defined\");\n  }\n};\n\nlet router = evt => {\n  const url = window.location.hash.slice(1) || \"/home\";\n  const routeResolved = resolveRoute(url);\n  routeResolved();\n};\n\nwindow.addEventListener('load', router);\nwindow.addEventListener('hashchange', router);\n\n//# sourceURL=webpack:///./src/Router.js?");

/***/ }),

/***/ "./src/components/PortalBuilder/index.js":
/*!***********************************************!*\
  !*** ./src/components/PortalBuilder/index.js ***!
  \***********************************************/
/*! exports provided: PortalBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PortalBuilder\", function() { return PortalBuilder; });\n/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util */ \"./src/components/utils/util.js\");\n\n\nconst PortalBuilder = () => {\n  const portalBuilder = document.createElement('div');\n  const test = document.createElement('p');\n  test.textContent = 'Portal Builder';\n  const link2 = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[\"createLinkRouter\"])('settings-builder', 'Go to settings-builder', '#/settings-builder');\n  const link1 = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[\"createLinkRouter\"])('home', 'Go to home', '#/home');\n  portalBuilder.appendChild(link1);\n  portalBuilder.appendChild(link2);\n  portalBuilder.appendChild(test);\n  return portalBuilder;\n};\n\n\n\n//# sourceURL=webpack:///./src/components/PortalBuilder/index.js?");

/***/ }),

/***/ "./src/components/SettingBuilder/index.js":
/*!************************************************!*\
  !*** ./src/components/SettingBuilder/index.js ***!
  \************************************************/
/*! exports provided: SettingsBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SettingsBuilder\", function() { return SettingsBuilder; });\n/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util */ \"./src/components/utils/util.js\");\n\n\nconst SettingsBuilder = () => {\n  const settingsBuilder = document.createElement('div');\n  const test = document.createElement('p');\n  test.textContent = 'Settings Builder';\n  const link2 = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[\"createLinkRouter\"])('portal-builder', 'Go to portal-builder', '#/portal-builder');\n  const link1 = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__[\"createLinkRouter\"])('home', 'Go to home', '#/home');\n  settingsBuilder.appendChild(link1);\n  settingsBuilder.appendChild(link2);\n  settingsBuilder.appendChild(test);\n  return settingsBuilder;\n};\n\n\n\n//# sourceURL=webpack:///./src/components/SettingBuilder/index.js?");

/***/ }),

/***/ "./src/components/resource/constant.js":
/*!*********************************************!*\
  !*** ./src/components/resource/constant.js ***!
  \*********************************************/
/*! exports provided: appDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appDiv\", function() { return appDiv; });\nconst appDiv = 'app';\n\n\n//# sourceURL=webpack:///./src/components/resource/constant.js?");

/***/ }),

/***/ "./src/components/utils/util.js":
/*!**************************************!*\
  !*** ./src/components/utils/util.js ***!
  \**************************************/
/*! exports provided: createLinkRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLinkRouter\", function() { return createLinkRouter; });\nconst createLinkRouter = (title, text, href) => {\n  let p = document.createElement('p');\n  let a = document.createElement('a');\n  let linkText = document.createTextNode(text);\n  a.appendChild(linkText);\n  a.title = title;\n  a.href = href;\n  p.appendChild(a);\n  return p;\n};\n\n\n\n//# sourceURL=webpack:///./src/components/utils/util.js?");

/***/ })

/******/ });