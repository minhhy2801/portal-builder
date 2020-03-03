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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".portal-builder-header {\\n    background-color: DodgerBlue;\\n    width: 100%;\\n    height: 60px;\\n}\\n\\n.portal-builder-header .btn-portal-builder-header {\\n    background-color: DodgerBlue;\\n    padding-right: 3vw;\\n}\\n\\n.btn-icon {\\n    background-color: transparent;\\n    border: none;\\n    height: inherit;\\n    min-height: 40px;\\n    cursor: pointer;\\n}\\n\\n.portal-builder-header .btn-icon, .portal-builder-content-left .btn-icon, \\n.portal-builder-content-main .tabs-container .tabs-content .btn-icon {\\n    float: right;\\n}\\n\\n.portal-builder-header .btn-portal-builder-header i {\\n    color: white;\\n}\\n\\n.portal-builder-content-left, .portal-builder-content-right, .portal-builder-content-main {\\n    border: 1px solid #cccccc;\\n    min-height: 80vh;\\n}\\n\\n.portal-builder-content-left {\\n    width: 20vw;\\n}\\n\\n.portal-builder-content-right {\\n    width: 25vw;\\n}\\n\\n.portal-builder-content-main {\\n    width: 55vw;\\n}\\n\\n.portal-builder-content-left .portal-item {\\n    min-height: 40px;\\n    line-height: 40px;\\n    cursor: pointer;\\n    margin-left: 5px;\\n}\\n\\n.portal-builder-content-right .widget-item {\\n    min-height: 60px;\\n    cursor: pointer;\\n    width: 47%;\\n    border: 1px solid #cccccc;\\n    display: inline-block;\\n    margin: 5px;\\n}\\n\\n.portal-builder-content-right .widget-item .btn-icon {\\n    width: 100%;\\n}\\n\\n.portal-builder-content-right .widget-item span {\\n    width: 100%;\\n    display: inline-block;\\n    text-align: center;\\n}\\n\\n.portal-builder-content-main .tabs-container {\\n    border: 1px solid #cccccc;\\n    min-height: 50vh;\\n    padding: 10px;\\n    margin: 20px;\\n}\\n\\n.portal-builder-content-main .tabs-container .tabs-tabpane {\\n    border: 1px solid #8c8c8c;\\n    background-color: #cccccc;\\n    border-right: 0;\\n    height: 30px;\\n    line-height: 30px;\\n    display: inline-block;\\n    padding-left: 20px;\\n    padding-right: 20px;\\n}\\n\\n.tabs-tabpane-active {\\n    background-color: white !important;\\n}\\n\\n.portal-builder-content-main .tabs-container .tabs-tabpane:last-child {\\n    border-right: 1px solid #8c8c8c;\\n}\\n\\n/* TABS_CLASS: 'tabs-container', */\\n\\n/* TABPANE_CLASS: 'tabs-tabpane' */\\n\\n.flex-display, .portal-builder-container {\\n    display: flex;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Router.js":
/*!***********************!*\
  !*** ./src/Router.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resource_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource/constant */ \"./src/resource/constant.js\");\n/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/util */ \"./src/utils/util.js\");\n/* harmony import */ var _view_PortalBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/PortalBuilder */ \"./src/view/PortalBuilder/index.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nlet views = {};\n\nlet viewPage = (path, render) => {\n  return views[`/${path}`] = render;\n};\n\nviewPage('home', () => {\n  let rootDOM = document.getElementById(_resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"APP_ID\"]);\n  rootDOM.innerHTML = \"\";\n  const link1 = Object(_utils_util__WEBPACK_IMPORTED_MODULE_1__[\"createLinkRouter\"])('portal-builder', 'Go to portal-builder', '#/portal-builder');\n  const link2 = Object(_utils_util__WEBPACK_IMPORTED_MODULE_1__[\"createLinkRouter\"])('settings-builder', 'Go to settings-builder', '#/settings-builder');\n  rootDOM.appendChild(link1);\n  return rootDOM.appendChild(link2);\n});\nviewPage('portal-builder', () => {\n  let rootDOM = document.getElementById(_resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"APP_ID\"]);\n  rootDOM.innerHTML = \"\";\n  return rootDOM.appendChild(Object(_view_PortalBuilder__WEBPACK_IMPORTED_MODULE_2__[\"PortalBuilder\"])());\n});\nviewPage('settings-builder', () => {\n  let rootDOM = document.getElementById(_resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"APP_ID\"]);\n  rootDOM.innerHTML = \"\";\n  return rootDOM.appendChild(SettingsBuilder());\n});\n\nlet resolveRoute = path => {\n  try {\n    return views[path];\n  } catch (error) {\n    throw new Error(\"The route is not defined\");\n  }\n};\n\nlet router = evt => {\n  const url = window.location.hash.slice(1) || \"/home\";\n  const routeResolved = resolveRoute(url);\n  routeResolved();\n};\n\nwindow.addEventListener('load', router);\nwindow.addEventListener('hashchange', router);\n\n//# sourceURL=webpack:///./src/Router.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/resource/constant.js":
/*!**********************************!*\
  !*** ./src/resource/constant.js ***!
  \**********************************/
/*! exports provided: APP_ID, HEADER_CLASS, BUTTON_HEADER_CLASS, BUTTON_ICON_CLASS, CONTAINTER_CLASS, LEFT_CONTENT_CLASS, RIGHT_CONTENT_CLASS, MAIN_CONTENT_CLASS, PORTAL_CLASS, FLEX_CLASS, WIDGET_CLASS, TABS, ICON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"APP_ID\", function() { return APP_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADER_CLASS\", function() { return HEADER_CLASS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BUTTON_HEADER_CLASS\", function() { return BUTTON_HEADER_CLASS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BUTTON_ICON_CLASS\", function() { return BUTTON_ICON_CLASS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CONTAINTER_CLASS\", function() { return CONTAINTER_CLASS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LEFT_CONTENT_CLASS\", function() { return LEFT_CONTENT_CLASS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RIGHT_CONTENT_CLASS\", function() { return RIGHT_CONTENT_CLASS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAIN_CONTENT_CLASS\", function() { return MAIN_CONTENT_CLASS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PORTAL_CLASS\", function() { return PORTAL_CLASS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FLEX_CLASS\", function() { return FLEX_CLASS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WIDGET_CLASS\", function() { return WIDGET_CLASS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TABS\", function() { return TABS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ICON\", function() { return ICON; });\nconst APP_ID = 'app';\nconst HEADER_CLASS = 'portal-builder-header';\nconst LEFT_CONTENT_CLASS = 'portal-builder-content-left';\nconst CONTAINTER_CLASS = 'portal-builder-container';\nconst RIGHT_CONTENT_CLASS = 'portal-builder-content-right';\nconst MAIN_CONTENT_CLASS = 'portal-builder-content-main';\nconst PORTAL_CLASS = 'portal-item';\nconst WIDGET_CLASS = 'widget-item';\nconst TABS = {\n  TABS_CLASS: 'tabs-container',\n  TABPANE_CLASS: 'tabs-tabpane',\n  TABCONTENT_CLASS: 'tabs-content',\n  TABPANE_ACTIVE_CLASS: 'tabs-tabpane-active'\n};\nconst BUTTON_HEADER_CLASS = 'btn-portal-builder-header';\nconst FLEX_CLASS = 'flex-display';\nconst BUTTON_ICON_CLASS = 'btn-icon';\nconst ICON = {\n  SIZE_2x: 'fa-2x',\n  SIZE_3x: 'fa-3x',\n  SETTING: 'fas fa-cog',\n  DEPLOY: 'fas fa-rocket',\n  ADD: 'fas fa-plus',\n  IFRAME: 'fas fa-columns',\n  HTML: 'fas fa-code'\n};\n\n\n//# sourceURL=webpack:///./src/resource/constant.js?");

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! exports provided: createLinkRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLinkRouter\", function() { return createLinkRouter; });\nconst createLinkRouter = (title, text, href) => {\n  let p = document.createElement('p');\n  let a = document.createElement('a');\n  let linkText = document.createTextNode(text);\n  a.appendChild(linkText);\n  a.title = title;\n  a.href = href;\n  p.appendChild(a);\n  return p;\n};\n\n\n\n//# sourceURL=webpack:///./src/utils/util.js?");

/***/ }),

/***/ "./src/view/PortalBuilder/AddPortal.js":
/*!*********************************************!*\
  !*** ./src/view/PortalBuilder/AddPortal.js ***!
  \*********************************************/
/*! exports provided: AddPortal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddPortal\", function() { return AddPortal; });\n/* harmony import */ var _resource_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource/constant */ \"./src/resource/constant.js\");\n/* harmony import */ var _components_Common_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Common/IconButton */ \"./src/view/components/Common/IconButton.js\");\n\n\n\nconst AddPortal = (name, className) => {\n  const addPortalDOM = document.createElement('div');\n  const addSpanDOM = document.createElement('span');\n  const addBtn = Object(_components_Common_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"])(_resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"ICON\"].ADD, _resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"ICON\"].SIZE_2x, _resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"BUTTON_ICON_CLASS\"]);\n  addSpanDOM.textContent = name;\n  addPortalDOM.className = `${_resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"PORTAL_CLASS\"]} ${className}`;\n  addPortalDOM.appendChild(addBtn);\n  addPortalDOM.appendChild(addSpanDOM);\n  return addPortalDOM;\n};\n\n\n\n//# sourceURL=webpack:///./src/view/PortalBuilder/AddPortal.js?");

/***/ }),

/***/ "./src/view/PortalBuilder/Portal.js":
/*!******************************************!*\
  !*** ./src/view/PortalBuilder/Portal.js ***!
  \******************************************/
/*! exports provided: Portal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Portal\", function() { return Portal; });\n/* harmony import */ var _resource_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource/constant */ \"./src/resource/constant.js\");\n/* harmony import */ var _components_Common_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Common/IconButton */ \"./src/view/components/Common/IconButton.js\");\n\n\n\nconst Portal = name => {\n  const portalDOM = document.createElement('div');\n  portalDOM.textContent = name;\n  portalDOM.className = _resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"PORTAL_CLASS\"];\n  const deployBtn = Object(_components_Common_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"])(_resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"ICON\"].DEPLOY, _resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"ICON\"].SIZE_2x, _resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"BUTTON_ICON_CLASS\"]);\n  portalDOM.appendChild(deployBtn);\n  return portalDOM;\n};\n\n\n\n//# sourceURL=webpack:///./src/view/PortalBuilder/Portal.js?");

/***/ }),

/***/ "./src/view/PortalBuilder/Widget.js":
/*!******************************************!*\
  !*** ./src/view/PortalBuilder/Widget.js ***!
  \******************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Widget\", function() { return Widget; });\n/* harmony import */ var _resource_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resource/constant */ \"./src/resource/constant.js\");\n/* harmony import */ var _components_Common_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Common/IconButton */ \"./src/view/components/Common/IconButton.js\");\n\n\n\nconst Widget = (iconName, iconSize, iconBtnClassName, name) => {\n  const widgetDOM = document.createElement('div');\n  const spanDOM = document.createElement('span');\n  const iconBtn = Object(_components_Common_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"])(iconName, iconSize, `${_resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"BUTTON_ICON_CLASS\"]} ${iconBtnClassName}`);\n  spanDOM.textContent = name;\n  widgetDOM.className = _resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"WIDGET_CLASS\"];\n  widgetDOM.appendChild(iconBtn);\n  widgetDOM.appendChild(spanDOM);\n  return widgetDOM;\n};\n\n\n\n//# sourceURL=webpack:///./src/view/PortalBuilder/Widget.js?");

/***/ }),

/***/ "./src/view/PortalBuilder/index.js":
/*!*****************************************!*\
  !*** ./src/view/PortalBuilder/index.js ***!
  \*****************************************/
/*! exports provided: PortalBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PortalBuilder\", function() { return PortalBuilder; });\n/* harmony import */ var _components_Common_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Common/Header */ \"./src/view/components/Common/Header.js\");\n/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/util */ \"./src/utils/util.js\");\n/* harmony import */ var _components_Common_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/Content */ \"./src/view/components/Common/Content.js\");\n/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Portal */ \"./src/view/PortalBuilder/Portal.js\");\n/* harmony import */ var _resource_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resource/constant */ \"./src/resource/constant.js\");\n/* harmony import */ var _AddPortal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddPortal */ \"./src/view/PortalBuilder/AddPortal.js\");\n/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Widget */ \"./src/view/PortalBuilder/Widget.js\");\n/* harmony import */ var _components_Common_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/Tabs */ \"./src/view/components/Common/Tabs.js\");\n\n\n\n\n\n\n\n\n\nconst PortalBuilder = () => {\n  const portalBuilder = document.createElement('div');\n  const title = document.createElement('h1');\n  title.textContent = 'Portal Builder';\n  const link2 = Object(_utils_util__WEBPACK_IMPORTED_MODULE_1__[\"createLinkRouter\"])('settings-builder', 'Go to settings-builder', '#/settings-builder');\n  const link1 = Object(_utils_util__WEBPACK_IMPORTED_MODULE_1__[\"createLinkRouter\"])('home', 'Go to home', '#/home');\n  portalBuilder.appendChild(link1);\n  portalBuilder.appendChild(link2);\n  portalBuilder.appendChild(title);\n  portalBuilder.appendChild(Object(_components_Common_Header__WEBPACK_IMPORTED_MODULE_0__[\"Header\"])());\n  const container = document.createElement('div');\n  container.className = _resource_constant__WEBPACK_IMPORTED_MODULE_4__[\"CONTAINTER_CLASS\"];\n  let listPortals = [];\n  listPortals.push(Object(_Portal__WEBPACK_IMPORTED_MODULE_3__[\"Portal\"])('Portal 1'));\n  listPortals.push(Object(_Portal__WEBPACK_IMPORTED_MODULE_3__[\"Portal\"])('Portal 2'));\n  listPortals.push(Object(_AddPortal__WEBPACK_IMPORTED_MODULE_5__[\"AddPortal\"])('New Portal', _resource_constant__WEBPACK_IMPORTED_MODULE_4__[\"FLEX_CLASS\"]));\n  let listWidgets = [];\n  listWidgets.push(Object(_Widget__WEBPACK_IMPORTED_MODULE_6__[\"Widget\"])(_resource_constant__WEBPACK_IMPORTED_MODULE_4__[\"ICON\"].IFRAME, _resource_constant__WEBPACK_IMPORTED_MODULE_4__[\"ICON\"].SIZE_3x, '', 'Iframe'));\n  listWidgets.push(Object(_Widget__WEBPACK_IMPORTED_MODULE_6__[\"Widget\"])(_resource_constant__WEBPACK_IMPORTED_MODULE_4__[\"ICON\"].HTML, _resource_constant__WEBPACK_IMPORTED_MODULE_4__[\"ICON\"].SIZE_3x, '', 'HTML'));\n  let dataTabs = [{\n    name: 'Standard Portal',\n    content: 'Standard Portal content'\n  }, {\n    name: 'My Email',\n    content: 'My Email, content'\n  }, {\n    name: 'Schedule',\n    content: 'Schedule, content'\n  }];\n  const tabs = Object(_components_Common_Tabs__WEBPACK_IMPORTED_MODULE_7__[\"Tabs\"])(dataTabs, _resource_constant__WEBPACK_IMPORTED_MODULE_4__[\"TABS\"].TABS_CLASS);\n  container.appendChild(Object(_components_Common_Content__WEBPACK_IMPORTED_MODULE_2__[\"Content\"])(listPortals, _resource_constant__WEBPACK_IMPORTED_MODULE_4__[\"LEFT_CONTENT_CLASS\"]));\n  container.appendChild(Object(_components_Common_Content__WEBPACK_IMPORTED_MODULE_2__[\"Content\"])([tabs], _resource_constant__WEBPACK_IMPORTED_MODULE_4__[\"MAIN_CONTENT_CLASS\"]));\n  container.appendChild(Object(_components_Common_Content__WEBPACK_IMPORTED_MODULE_2__[\"Content\"])(listWidgets, _resource_constant__WEBPACK_IMPORTED_MODULE_4__[\"RIGHT_CONTENT_CLASS\"]));\n  portalBuilder.appendChild(container);\n  return portalBuilder;\n};\n\n\n\n//# sourceURL=webpack:///./src/view/PortalBuilder/index.js?");

/***/ }),

/***/ "./src/view/components/Common/Content.js":
/*!***********************************************!*\
  !*** ./src/view/components/Common/Content.js ***!
  \***********************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\nconst Content = (contentChildDOM, className) => {\n  const contentDOM = document.createElement('div');\n  contentDOM.className = className;\n  contentChildDOM.forEach(element => {\n    contentDOM.appendChild(element);\n  });\n  return contentDOM;\n};\n\n\n\n//# sourceURL=webpack:///./src/view/components/Common/Content.js?");

/***/ }),

/***/ "./src/view/components/Common/Header.js":
/*!**********************************************!*\
  !*** ./src/view/components/Common/Header.js ***!
  \**********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var _resource_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../resource/constant */ \"./src/resource/constant.js\");\n/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconButton */ \"./src/view/components/Common/IconButton.js\");\n\n\n\nconst Header = () => {\n  const headerDOM = document.createElement('div');\n  const settingBtn = Object(_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"])(_resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"ICON\"].SETTING, _resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"ICON\"].SIZE_3x, `${_resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"BUTTON_HEADER_CLASS\"]} ${_resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"BUTTON_ICON_CLASS\"]}`);\n  headerDOM.className = _resource_constant__WEBPACK_IMPORTED_MODULE_0__[\"HEADER_CLASS\"];\n  headerDOM.appendChild(settingBtn);\n  return headerDOM;\n};\n\n\n\n//# sourceURL=webpack:///./src/view/components/Common/Header.js?");

/***/ }),

/***/ "./src/view/components/Common/IconButton.js":
/*!**************************************************!*\
  !*** ./src/view/components/Common/IconButton.js ***!
  \**************************************************/
/*! exports provided: IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconButton\", function() { return IconButton; });\nconst IconButton = (iconName, iconSize, btnClass) => {\n  const btn = document.createElement('button');\n  const icon = document.createElement('i');\n  btn.className = btnClass;\n  icon.className = `${iconName} ${iconSize}`;\n  btn.appendChild(icon);\n  return btn;\n};\n\n\n\n//# sourceURL=webpack:///./src/view/components/Common/IconButton.js?");

/***/ }),

/***/ "./src/view/components/Common/Tab.js":
/*!*******************************************!*\
  !*** ./src/view/components/Common/Tab.js ***!
  \*******************************************/
/*! exports provided: Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tab\", function() { return Tab; });\nconst Tab = (name, className) => {\n  const tabDOM = document.createElement('div');\n  tabDOM.textContent = name;\n  tabDOM.className = className;\n  return tabDOM;\n};\n\n\n\n//# sourceURL=webpack:///./src/view/components/Common/Tab.js?");

/***/ }),

/***/ "./src/view/components/Common/Tabs.js":
/*!********************************************!*\
  !*** ./src/view/components/Common/Tabs.js ***!
  \********************************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tabs\", function() { return Tabs; });\n/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab */ \"./src/view/components/Common/Tab.js\");\n/* harmony import */ var _resource_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../resource/constant */ \"./src/resource/constant.js\");\n/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconButton */ \"./src/view/components/Common/IconButton.js\");\n\n\n\n\nconst Tabs = (tabData, className) => {\n  const tabsDOM = document.createElement('div');\n  const tabContentDOM = document.createElement('div');\n  tabsDOM.className = className;\n  tabData.forEach((item, i) => {\n    let tab = null;\n    tab = Object(_Tab__WEBPACK_IMPORTED_MODULE_0__[\"Tab\"])(item.name, _resource_constant__WEBPACK_IMPORTED_MODULE_1__[\"TABS\"].TABPANE_CLASS);\n\n    if (i === 0) {\n      tab = Object(_Tab__WEBPACK_IMPORTED_MODULE_0__[\"Tab\"])(item.name, `${_resource_constant__WEBPACK_IMPORTED_MODULE_1__[\"TABS\"].TABPANE_CLASS} ${_resource_constant__WEBPACK_IMPORTED_MODULE_1__[\"TABS\"].TABPANE_ACTIVE_CLASS}`);\n    }\n\n    tabsDOM.appendChild(tab);\n  });\n  tabsDOM.appendChild(Object(_IconButton__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"])(_resource_constant__WEBPACK_IMPORTED_MODULE_1__[\"ICON\"].ADD, '', _resource_constant__WEBPACK_IMPORTED_MODULE_1__[\"BUTTON_ICON_CLASS\"]));\n  tabContentDOM.textContent = tabData[0].content;\n  tabContentDOM.className = _resource_constant__WEBPACK_IMPORTED_MODULE_1__[\"TABS\"].TABCONTENT_CLASS;\n  tabContentDOM.appendChild(Object(_IconButton__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"])(_resource_constant__WEBPACK_IMPORTED_MODULE_1__[\"ICON\"].SETTING, '', `${_resource_constant__WEBPACK_IMPORTED_MODULE_1__[\"BUTTON_ICON_CLASS\"]}`));\n  tabsDOM.appendChild(tabContentDOM);\n  tabsDOM.appendChild(tabContentDOM);\n  return tabsDOM;\n};\n\n\n\n//# sourceURL=webpack:///./src/view/components/Common/Tabs.js?");

/***/ })

/******/ });