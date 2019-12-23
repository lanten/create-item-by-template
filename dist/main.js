module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/commands/create-file.ts":
/*!*************************************!*\
  !*** ./src/commands/create-file.ts ***!
  \*************************************/
/*! exports provided: createFile, registerCreateFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFile", function() { return createFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCreateFile", function() { return registerCreateFile; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);

function createFile() {
    console.log('createFile');
}
function registerCreateFile() {
    vscode__WEBPACK_IMPORTED_MODULE_0___default.a.commands.registerCommand('cmd.createFile', createFile);
}


/***/ }),

/***/ "./src/commands/create-folder.ts":
/*!***************************************!*\
  !*** ./src/commands/create-folder.ts ***!
  \***************************************/
/*! exports provided: createFolder, registerCreateFolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFolder", function() { return createFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCreateFolder", function() { return registerCreateFolder; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);

function createFolder() {
    console.log('createFolder');
}
function registerCreateFolder() {
    vscode__WEBPACK_IMPORTED_MODULE_0___default.a.commands.registerCommand('cmd.createFolder', createFolder);
}


/***/ }),

/***/ "./src/commands/edit-template-global.ts":
/*!**********************************************!*\
  !*** ./src/commands/edit-template-global.ts ***!
  \**********************************************/
/*! exports provided: editTemplateGlobal, registerEditTemplateGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTemplateGlobal", function() { return editTemplateGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEditTemplateGlobal", function() { return registerEditTemplateGlobal; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);

function editTemplateGlobal() {
    console.log('editTemplateGlobal');
}
function registerEditTemplateGlobal() {
    vscode__WEBPACK_IMPORTED_MODULE_0___default.a.commands.registerCommand('cmd.editTemplateGlobal', editTemplateGlobal);
}


/***/ }),

/***/ "./src/commands/edit-template-workspace.ts":
/*!*************************************************!*\
  !*** ./src/commands/edit-template-workspace.ts ***!
  \*************************************************/
/*! exports provided: editTemplateWorkspace, registerEditTemplateWorkspace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTemplateWorkspace", function() { return editTemplateWorkspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEditTemplateWorkspace", function() { return registerEditTemplateWorkspace; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);

function editTemplateWorkspace() {
    console.log('editTemplateWorkspace');
}
function registerEditTemplateWorkspace() {
    vscode__WEBPACK_IMPORTED_MODULE_0___default.a.commands.registerCommand('cmd.editTemplateWorkspace', editTemplateWorkspace);
}


/***/ }),

/***/ "./src/commands/index.ts":
/*!*******************************!*\
  !*** ./src/commands/index.ts ***!
  \*******************************/
/*! exports provided: createFolder, registerCreateFolder, createFile, registerCreateFile, editTemplateGlobal, registerEditTemplateGlobal, editTemplateWorkspace, registerEditTemplateWorkspace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-folder */ "./src/commands/create-folder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFolder", function() { return _create_folder__WEBPACK_IMPORTED_MODULE_0__["createFolder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerCreateFolder", function() { return _create_folder__WEBPACK_IMPORTED_MODULE_0__["registerCreateFolder"]; });

/* harmony import */ var _create_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-file */ "./src/commands/create-file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFile", function() { return _create_file__WEBPACK_IMPORTED_MODULE_1__["createFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerCreateFile", function() { return _create_file__WEBPACK_IMPORTED_MODULE_1__["registerCreateFile"]; });

/* harmony import */ var _edit_template_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-template-global */ "./src/commands/edit-template-global.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editTemplateGlobal", function() { return _edit_template_global__WEBPACK_IMPORTED_MODULE_2__["editTemplateGlobal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEditTemplateGlobal", function() { return _edit_template_global__WEBPACK_IMPORTED_MODULE_2__["registerEditTemplateGlobal"]; });

/* harmony import */ var _edit_template_workspace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-template-workspace */ "./src/commands/edit-template-workspace.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editTemplateWorkspace", function() { return _edit_template_workspace__WEBPACK_IMPORTED_MODULE_3__["editTemplateWorkspace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEditTemplateWorkspace", function() { return _edit_template_workspace__WEBPACK_IMPORTED_MODULE_3__["registerEditTemplateWorkspace"]; });







/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: activate, deactivate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activate", function() { return activate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactivate", function() { return deactivate; });
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands */ "./src/commands/index.ts");

function activate(ctx) {
    global.ctx = ctx;
    // if (!$ext.WORKSPACE_PATH) {
    //   vscode.window.showWarningMessage($ext.localize.getLocalize('text.noWorkspace'))
    // }
    Object(_commands__WEBPACK_IMPORTED_MODULE_0__["registerCreateFolder"])();
    Object(_commands__WEBPACK_IMPORTED_MODULE_0__["registerCreateFile"])();
    Object(_commands__WEBPACK_IMPORTED_MODULE_0__["registerEditTemplateGlobal"])();
    Object(_commands__WEBPACK_IMPORTED_MODULE_0__["registerEditTemplateWorkspace"])();
}
function deactivate() {
    // this method is called when your extension is deactivated
}


/***/ }),

/***/ "vscode":
/*!*************************!*\
  !*** external "vscode" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vscode");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map