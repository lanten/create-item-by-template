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

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, displayName, description, version, icon, publisher, engines, categories, activationEvents, main, author, homepage, repository, bugs, keywords, contributes, scripts, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"create-item-by-template\",\"displayName\":\"Create Item By Template\",\"description\":\"Create a folder quickly using a template\",\"version\":\"2.0.0\",\"icon\":\"images/icon.png\",\"publisher\":\"lanten\",\"engines\":{\"vscode\":\"^1.29.0\"},\"categories\":[\"Other\"],\"activationEvents\":[\"*\"],\"main\":\"./dist/main.js\",\"author\":{\"name\":\"Lanten\",\"url\":\"https://www.lanten.me/\",\"email\":\"lanten233@qq.com\"},\"homepage\":\"https://github.com/lanten/create-by-template\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/lanten/create-by-template.git\"},\"bugs\":{\"url\":\"https://github.com/lanten/create-by-template/issues\",\"email\":\"lanten233@qq.com\"},\"keywords\":[\"create item\",\"create item by template\",\"create folder\",\"create file\"],\"contributes\":{\"commands\":[{\"command\":\"cmd.createFolder\",\"title\":\"%cmd.createFolder.title%\"},{\"command\":\"cmd.createFile\",\"title\":\"%cmd.createFile.title%\"},{\"command\":\"cmd.editTemplateGlobal\",\"title\":\"%cmd.editTemplateGlobal.title%\"},{\"command\":\"cmd.editTemplateWorkspace\",\"title\":\"%cmd.editTemplateWorkspace.title%\"}],\"menus\":{\"explorer/context\":[{\"group\":\"1_creatItemByTemplate@1\",\"command\":\"cmd.createFolder\",\"when\":\"explorerResourceIsFolder\"},{\"group\":\"1_creatItemByTemplate@2\",\"command\":\"cmd.createFile\",\"when\":\"explorerResourceIsFolder\"}]},\"configuration\":{\"title\":\"createItemByTemplate\",\"properties\":{\"createItemByTemplate.defaultFolderTemplate\":{\"type\":\"string\",\"description\":\"%text.config.defaultFolderTemplate%\",\"default\":\"\"},\"createItemByTemplate.defaultFileTemplate\":{\"type\":\"string\",\"description\":\"%text.config.defaultFileTemplate%\",\"default\":\"\"}}}},\"scripts\":{\"vscode:prepublish\":\"yarn run build\",\"build\":\"rm -rf ./dist && webpack --mode production\",\"compile\":\"webpack --mode development\",\"watch\":\"webpack --mode development --watch\",\"watch-ts\":\"tsc -watch -p ./\"},\"devDependencies\":{\"@types/node\":\"^10.12.21\",\"@types/node-fetch\":\"^2.5.2\",\"@types/vscode\":\"^1.38.0\",\"@typescript-eslint/eslint-plugin\":\"^2.3.1\",\"@typescript-eslint/parser\":\"^2.3.1\",\"eslint\":\"^6.4.0\",\"eslint-config-prettier\":\"^6.3.0\",\"eslint-loader\":\"^3.0.1\",\"eslint-plugin-prettier\":\"^3.1.1\",\"prettier\":\"^1.18.2\",\"standard-version\":\"^7.0.0\",\"ts-loader\":\"^6.1.2\",\"typescript\":\"^3.3.1\",\"webpack\":\"^4.41.0\",\"webpack-cli\":\"^3.3.9\"}}");

/***/ }),

/***/ "./package.nls.json":
/*!**************************!*\
  !*** ./package.nls.json ***!
  \**************************/
/*! exports provided: cmd.createFolder.title, cmd.createFile.title, cmd.editTemplateGlobal.title, cmd.editTemplateWorkspace.title, menu.createFolder.title, menu.createFile.title, text.noWorkspace, text.source.global, text.source.workspace, text.templateListItemDetail, text.templateListItemPlaceholder, text.inputBoxPathPlaceholder, text.inputBoxNamePlaceholder, text.config.defaultFolderTemplate, text.config.defaultFileTemplate, text.success.create, text.error.templateFunction, text.error.templateFunction.run, text.error.templateSelect, text.error.inputPath, text.error.templateConfig, text.error.createFolder, text.error.createFile, text.error.workspacePath, text.warning.folderExisted, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cmd.createFolder.title\":\"Create: Create item by template\",\"cmd.createFile.title\":\"Create: Create file by template\",\"cmd.editTemplateGlobal.title\":\"Create: Edit template (Global)\",\"cmd.editTemplateWorkspace.title\":\"Create: Edit template (Workspace)\",\"menu.createFolder.title\":\"Create item by template\",\"menu.createFile.title\":\"Create file by template\",\"text.noWorkspace\":\"Must be in the workspace\",\"text.source.global\":\"Global\",\"text.source.workspace\":\"Workspace\",\"text.templateListItemDetail\":\"Template source: ${1} config\",\"text.templateListItemPlaceholder\":\"Please select a template to start creating\",\"text.inputBoxPathPlaceholder\":\"Folder path\",\"text.inputBoxNamePlaceholder\":\"Folder name\",\"text.config.defaultFolderTemplate\":\"Template used by default when creating folders\",\"text.config.defaultFileTemplate\":\"Template used by default when creating files\",\"text.success.create\":\"Create: Create ${1} successful\",\"text.error.templateFunction\":\"Create Error: ${1} Not a correct function\",\"text.error.templateFunction.run\":\"Create Error: Template function failed to run ${1}\",\"text.error.templateSelect\":\"Create Error: Template selection error\",\"text.error.inputPath\":\"Create Error: Path input is incorrect\",\"text.error.templateConfig\":\"Create Error: Template configuration is incorrect\",\"text.error.createFolder\":\"Create Error: Failed to create folder: ${1}\",\"text.error.createFile\":\"Create Error: Failed to create file: ${1}\",\"text.error.workspacePath\":\"Create Error: Please open a project first\",\"text.warning.folderExisted\":\"Create Warning:  Folder existed ${1}\"}");

/***/ }),

/***/ "./package.nls.zh-cn.json":
/*!********************************!*\
  !*** ./package.nls.zh-cn.json ***!
  \********************************/
/*! exports provided: cmd.createFolder.title, cmd.createFile.title, cmd.editTemplateGlobal.title, cmd.editTemplateWorkspace.title, menu.createFolder.title, menu.createFile.title, text.noWorkspace, text.source.global, text.source.workspace, text.templateListItemDetail, text.templateListItemPlaceholder, text.inputBoxPathPlaceholder, text.inputBoxNamePlaceholder, text.config.defaultFolderTemplate, text.config.defaultFileTemplate, text.success.create, text.error.templateFunction, text.error.templateFunction.run, text.error.templateSelect, text.error.inputPath, text.error.templateConfig, text.error.createFolder, text.error.createFile, text.error.workspacePath, text.warning.folderExisted, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cmd.createFolder.title\":\"Create: 从模板创建文件夹\",\"cmd.createFile.title\":\"Create: 从模板创建文件\",\"cmd.editTemplateGlobal.title\":\"Create: 编辑模板 (全局)\",\"cmd.editTemplateWorkspace.title\":\"Create: 编辑模板 (工作区)\",\"menu.createFolder.title\":\"从模板创建文件夹\",\"menu.createFile.title\":\"从模板创建文件\",\"text.noWorkspace\":\"需要工作区\",\"text.source.global\":\"全局\",\"text.source.workspace\":\"工作区\",\"text.templateListItemDetail\":\"模板来源: ${1}配置\",\"text.templateListItemPlaceholder\":\"选择一个模板开始创建\",\"text.inputBoxPathPlaceholder\":\"文件夹路径\",\"text.inputBoxNamePlaceholder\":\"文件夹名称\",\"text.config.defaultFolderTemplate\":\"创建文件夹时默认使用的模板\",\"text.config.defaultFileTemplate\":\"创建文件时默认使用的模板\",\"text.success.create\":\"Create: 创建 ${1} 成功\",\"text.error.templateFunction\":\"Create Error: ${1} 不是一个正确的函数\",\"text.error.templateFunction.run\":\"Create Error: 模板函数运行失败 ${1}\",\"text.error.templateSelect\":\"Create Error: 模板选择错误\",\"text.error.inputPath\":\"Create Error: 路径输入有误\",\"text.error.templateConfig\":\"Create Error: 模板配置不正确\",\"text.error.createFolder\":\"Create Error: 创建文件夹失败: ${1}\",\"text.error.createFile\":\"Create Error: 创建文件失败: ${1}\",\"text.error.workspacePath\":\"Create Error: 请先打开一个项目\",\"text.warning.folderExisted\":\"Create Warning:  文件夹已存在 ${1}\"}");

/***/ }),

/***/ "./src/commands/create-file.ts":
/*!*************************************!*\
  !*** ./src/commands/create-file.ts ***!
  \*************************************/
/*! exports provided: createFile, registerCreateFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($ext) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFile", function() { return createFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCreateFile", function() { return registerCreateFile; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core */ "./src/core/index.ts");


function createFile() {
    console.log('createFile');
}
/** 注册命令 */
function registerCreateFile() {
    vscode__WEBPACK_IMPORTED_MODULE_0___default.a.commands.registerCommand('cmd.createFile', uri => {
        if (!$ext.WORKSPACE_PATH) {
            return vscode__WEBPACK_IMPORTED_MODULE_0___default.a.window.showErrorMessage($ext.localize.getLocalize('text.error.workspacePath'));
        }
        const initPath = Object(_core__WEBPACK_IMPORTED_MODULE_1__["getMenuRelativePath"])(uri);
        console.log(initPath);
    });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/utils */ "./src/utils/index.ts")))

/***/ }),

/***/ "./src/commands/create-folder.ts":
/*!***************************************!*\
  !*** ./src/commands/create-folder.ts ***!
  \***************************************/
/*! exports provided: createFolder, registerCreateFolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($ext) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFolder", function() { return createFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCreateFolder", function() { return registerCreateFolder; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core */ "./src/core/index.ts");


/** 创建文件夹 */
function createFolder(path) {
    console.log('createFolder');
}
/** 注册命令 */
function registerCreateFolder() {
    vscode__WEBPACK_IMPORTED_MODULE_0___default.a.commands.registerCommand('cmd.createFolder', uri => {
        if (!$ext.WORKSPACE_PATH) {
            return vscode__WEBPACK_IMPORTED_MODULE_0___default.a.window.showErrorMessage($ext.localize.getLocalize('text.error.workspacePath'));
        }
        const initPath = Object(_core__WEBPACK_IMPORTED_MODULE_1__["getMenuRelativePath"])(uri);
        Object(_core__WEBPACK_IMPORTED_MODULE_1__["showTemplateList"])(initPath);
        console.log(initPath);
    });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/utils */ "./src/utils/index.ts")))

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

/***/ "./src/core/before-create.ts":
/*!***********************************!*\
  !*** ./src/core/before-create.ts ***!
  \***********************************/
/*! exports provided: getMenuRelativePath, showTemplateList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($ext) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuRelativePath", function() { return getMenuRelativePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTemplateList", function() { return showTemplateList; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core */ "./src/core/index.ts");




/** init -------------------------------------------------------------- */
const templateListPicker = vscode__WEBPACK_IMPORTED_MODULE_2___default.a.window.createQuickPick();
templateListPicker.placeholder = $ext.localize.getLocalize('text.templateListItemPlaceholder');
/** ------------------------------------------------------------------- */
/**
 * 获取右键菜单相对路径
 * @param uri  右键菜单触发时传入的 uri
 */
function getMenuRelativePath(uri) {
    let pathStr = undefined;
    if (typeof uri === 'object') {
        pathStr = vscode__WEBPACK_IMPORTED_MODULE_2___default.a.workspace.asRelativePath(uri).replace(/\\/g, '/');
        const fstat = fs__WEBPACK_IMPORTED_MODULE_0___default.a.statSync(uri.fsPath);
        if (fstat.isFile()) {
            pathStr = path__WEBPACK_IMPORTED_MODULE_1___default.a.dirname(pathStr);
        }
        if (path__WEBPACK_IMPORTED_MODULE_1___default.a.isAbsolute(pathStr))
            pathStr = undefined;
    }
    return pathStr;
}
/**
 * 显示模板列表
 * @param initPath 初始路径
 */
function showTemplateList(initPath) {
    return new Promise((resolve, reject) => {
        templateListPicker.show();
        templateListPicker.busy = true;
        const templateConfig = Object(_core__WEBPACK_IMPORTED_MODULE_3__["getTemplateConfig"])();
        console.log({ templateConfig });
        // const items = []
        // for (const key in templateConfig) {
        //   const val = templateConfig[key]
        //   if (val) {
        //     const detail = $ext.localize.getLocalize(
        //       'text.templateListItemDetail',
        //       $ext.localize.getLocalize(`text.source.${key}`)
        //     )
        //     items.push(
        //       ...Object.keys(val).map(label => {
        //         return { label, detail, fn: val[label], initPath }
        //       })
        //     )
        //   }
        // }
        // templateListPicker.items = items
        // templateListPicker.busy = false
        // templateListPicker.onDidAccept(() => {
        //   const selectItem = templateListPicker.selectedItems[0]
        //   if (!selectItem) return vscode.window.showErrorMessage(localize.getLocalize('text.error.templateSelect'))
        //   if (typeof selectItem.fn !== 'function')
        //     return vscode.window.showErrorMessage(
        //       localize.getLocalize('text.error.templateFunction', selectItem.label)
        //     )
        //   createByTemplate(selectItem.fn, selectItem.menuPath).then(res => {
        //     vscode.window.showInformationMessage(localize.getLocalize('text.success.create', res))
        //     templateListPicker.hide()
        //   })
        // })
    });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/utils */ "./src/utils/index.ts")))

/***/ }),

/***/ "./src/core/get-templates.ts":
/*!***********************************!*\
  !*** ./src/core/get-templates.ts ***!
  \***********************************/
/*! exports provided: getTemplateConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($ext) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateConfig", function() { return getTemplateConfig; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


/** 获取模板配置 */
function getTemplateConfig() {
    const globalStoragePath = $ext.config.getGlobalStoragePath();
    const globalTemplatePath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(globalStoragePath, $ext.TEMPLATE_CONFIG_FILE_NAME);
    let globalTemplate = {};
    let workspaceTemplate = {};
    console.log(globalStoragePath);
    // globalTemplate = require('C:\\Users\\lanten\\AppData\\Roaming\\Code\\User\\globalStorage\\lanten.create-item-by-template\\create-item.template.js')
    if (!fs__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(globalTemplatePath)) {
        const defaultTemplatePath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join($ext.EXT_PATH, 'templates/default.template.js');
        const readable = fs__WEBPACK_IMPORTED_MODULE_1___default.a.createReadStream(defaultTemplatePath);
        readable.pipe(fs__WEBPACK_IMPORTED_MODULE_1___default.a.createWriteStream(globalTemplatePath));
    }
    globalTemplate = $ext.requireModule(globalTemplatePath);
    console.warn(globalTemplate);
    // if ($ext.WORKSPACE_PATH) {
    //   const workspaceConfigPath = path.join($ext.WORKSPACE_PATH, '.vscode', $ext.TEMPLATE_CONFIG_FILE_NAME)
    //   if (fs.existsSync(workspaceConfigPath)) {
    //     workspaceTemplate = require(workspaceConfigPath)
    //     delete require.cache[require.resolve(workspaceConfigPath)]
    //   }
    // }
    return {
        global: globalTemplate,
        workspace: workspaceTemplate,
    };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/utils */ "./src/utils/index.ts")))

/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/*! exports provided: getMenuRelativePath, showTemplateList, getTemplateConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _before_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./before-create */ "./src/core/before-create.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuRelativePath", function() { return _before_create__WEBPACK_IMPORTED_MODULE_0__["getMenuRelativePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTemplateList", function() { return _before_create__WEBPACK_IMPORTED_MODULE_0__["showTemplateList"]; });

/* harmony import */ var _get_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-templates */ "./src/core/get-templates.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTemplateConfig", function() { return _get_templates__WEBPACK_IMPORTED_MODULE_1__["getTemplateConfig"]; });





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

/***/ "./src/utils sync recursive":
/*!************************!*\
  !*** ./src/utils sync ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src/utils sync recursive";

/***/ }),

/***/ "./src/utils/config.ts":
/*!*****************************!*\
  !*** ./src/utils/config.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($ext) {/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ "./src/utils/const.ts");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log */ "./src/utils/log.ts");





const CONFIG_GROUP = 'createItemByTemplate';
class Config {
    /**
     * 获取全部配置
     */
    get extConfig() {
        return { ...this.getCodeConfig(), ...this.getLocalConfig() };
    }
    /**
     * 获取 vscode 配置
     */
    getCodeConfig() {
        const resConfig = {};
        _const__WEBPACK_IMPORTED_MODULE_3__["CONFIG_LIST"].forEach(configKey => {
            const settingsKey = `${CONFIG_GROUP}.${configKey}`;
            resConfig[configKey] = vscode__WEBPACK_IMPORTED_MODULE_0__["workspace"].getConfiguration().get(settingsKey);
        });
        return resConfig;
    }
    /**
     * 写入 vscode 配置
     * @param config
     */
    setCodeConfig(config) {
        for (const configKey in config) {
            const settingsKey = `${CONFIG_GROUP}.${configKey}`;
            const val = config[configKey];
            vscode__WEBPACK_IMPORTED_MODULE_0__["workspace"].getConfiguration().update(settingsKey, val, false);
        }
    }
    getChannelPath() {
        if (vscode__WEBPACK_IMPORTED_MODULE_0___default.a.env.appName.indexOf('Insiders') > 0) {
            return 'Code - Insiders';
        }
        else {
            return 'Code';
        }
    }
    /**
     * 获取全局配置文件路径
     * @param fileName 文件名
     */
    getGlobalStoragePath(fileName = '') {
        const appPath = process.env.APPDATA ||
            (process.platform === 'darwin' ? process.env.HOME + '/Library/Application Support' : '/var/local');
        const channelPath = this.getChannelPath();
        const storagePath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(channelPath, 'User', 'globalStorage', `${_const__WEBPACK_IMPORTED_MODULE_3__["PUBLISHER"]}.${_const__WEBPACK_IMPORTED_MODULE_3__["EXT_NAME"]}`);
        const globalStoragePath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(appPath, storagePath, fileName);
        // 如果不存在，则预创建
        if (!fs__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(globalStoragePath)) {
            try {
                $ext.mkdirRecursive(storagePath, appPath);
            }
            catch (error) {
                vscode__WEBPACK_IMPORTED_MODULE_0___default.a.window.showErrorMessage($ext.localize.getLocalize('text.error.createFolder', globalStoragePath));
            }
        }
        return globalStoragePath;
    }
    /**
     * 获取本地文件配置
     */
    getLocalConfig() {
        let config = {};
        if (fs__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(_const__WEBPACK_IMPORTED_MODULE_3__["LOCAL_CONFIG_PATH"])) {
            const configStr = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(_const__WEBPACK_IMPORTED_MODULE_3__["LOCAL_CONFIG_PATH"], 'utf-8');
            try {
                config = JSON.parse(configStr);
            }
            catch (error) {
                _log__WEBPACK_IMPORTED_MODULE_4__["default"].error(error);
            }
        }
        else {
            fs__WEBPACK_IMPORTED_MODULE_1___default.a.writeFileSync(_const__WEBPACK_IMPORTED_MODULE_3__["LOCAL_CONFIG_PATH"], '{}');
            config = {};
        }
        return config;
    }
    /**
     * 写入本地文件配置
     * @param config
     */
    setLocalConfig(config) {
        const defaultConfig = this.getLocalConfig();
        try {
            const configStr = JSON.stringify(Object.assign({}, defaultConfig, config));
            return fs__WEBPACK_IMPORTED_MODULE_1___default.a.writeFileSync(_const__WEBPACK_IMPORTED_MODULE_3__["LOCAL_CONFIG_PATH"], configStr, 'utf-8');
        }
        catch (error) {
            _log__WEBPACK_IMPORTED_MODULE_4__["default"].error(error);
        }
    }
}
const config = new Config();
/* harmony default export */ __webpack_exports__["default"] = (config);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/utils */ "./src/utils/index.ts")))

/***/ }),

/***/ "./src/utils/const.ts":
/*!****************************!*\
  !*** ./src/utils/const.ts ***!
  \****************************/
/*! exports provided: WORKSPACE_PATH, CONFIG_LIST, EXT_NAME, PUBLISHER, EXT_PATH, LOCAL_CONFIG_PATH, TEMPLATE_CONFIG_FILE_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_PATH", function() { return WORKSPACE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_LIST", function() { return CONFIG_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXT_NAME", function() { return EXT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLISHER", function() { return PUBLISHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXT_PATH", function() { return EXT_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_CONFIG_PATH", function() { return LOCAL_CONFIG_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_CONFIG_FILE_NAME", function() { return TEMPLATE_CONFIG_FILE_NAME; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);



const { workspaceFolders } = vscode__WEBPACK_IMPORTED_MODULE_0___default.a.workspace;
/** 工作区路径 */
const WORKSPACE_PATH = workspaceFolders ? workspaceFolders[0].uri.fsPath.replace(/\\/g, '/') : undefined;
/** 插件设置 */
const CONFIG_LIST = ['defaultFolderTemplate', 'defaultFileTemplate'];
/** 插件名称 */
const EXT_NAME = _package_json__WEBPACK_IMPORTED_MODULE_1__.name;
/** 插件发布者 */
const PUBLISHER = _package_json__WEBPACK_IMPORTED_MODULE_1__.publisher;
/** 插件本体路径 */
const EXT_PATH = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '../');
/** 插件私有配置文件路径 */
const LOCAL_CONFIG_PATH = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(EXT_PATH, 'local.config.json');
/** 模板配置文件名 */
const TEMPLATE_CONFIG_FILE_NAME = 'create-item.template.js';


/***/ }),

/***/ "./src/utils/exec.ts":
/*!***************************!*\
  !*** ./src/utils/exec.ts ***!
  \***************************/
/*! exports provided: syncExec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncExec", function() { return syncExec; });
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ "child_process");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/utils/const.ts");


/**
 * 同步执行命令
 * @param {String} bash
 * @param {String} msg
 */
function syncExec(paramsSrc) {
    let params = paramsSrc;
    if (typeof params === 'string')
        params = { bash: params };
    const { bash, msg, inputPath = _const__WEBPACK_IMPORTED_MODULE_1__["WORKSPACE_PATH"] } = params;
    try {
        const res = Object(child_process__WEBPACK_IMPORTED_MODULE_0__["execSync"])(bash, {
            cwd: inputPath,
        }).toString();
        if (msg)
            console.log(`=> ${msg} 成功`);
        return res;
    }
    catch (ex) {
        if (msg)
            console.log(`=> ${msg} 失败\n`, ex);
        return ex.toString();
    }
}


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: localize, config, log, WORKSPACE_PATH, CONFIG_LIST, EXT_NAME, PUBLISHER, EXT_PATH, LOCAL_CONFIG_PATH, TEMPLATE_CONFIG_FILE_NAME, mkdirRecursive, requireModule, preSaveDocument, syncExec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/utils/const.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_PATH", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["WORKSPACE_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONFIG_LIST", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["CONFIG_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXT_NAME", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["EXT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PUBLISHER", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["PUBLISHER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXT_PATH", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["EXT_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOCAL_CONFIG_PATH", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["LOCAL_CONFIG_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_CONFIG_FILE_NAME", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["TEMPLATE_CONFIG_FILE_NAME"]; });

/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./io */ "./src/utils/io.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mkdirRecursive", function() { return _io__WEBPACK_IMPORTED_MODULE_1__["mkdirRecursive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requireModule", function() { return _io__WEBPACK_IMPORTED_MODULE_1__["requireModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preSaveDocument", function() { return _io__WEBPACK_IMPORTED_MODULE_1__["preSaveDocument"]; });

/* harmony import */ var _exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exec */ "./src/utils/exec.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syncExec", function() { return _exec__WEBPACK_IMPORTED_MODULE_2__["syncExec"]; });

/* harmony import */ var _localize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localize */ "./src/utils/localize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localize", function() { return _localize__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/utils/config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log */ "./src/utils/log.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "log", function() { return _log__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./src/utils/io.ts":
/*!*************************!*\
  !*** ./src/utils/io.ts ***!
  \*************************/
/*! exports provided: mkdirRecursive, requireModule, preSaveDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mkdirRecursive", function() { return mkdirRecursive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requireModule", function() { return requireModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preSaveDocument", function() { return preSaveDocument; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ "./src/utils/const.ts");




/**
 * 递归创建路径
 * @param dir
 * @param inputPath
 * @param split
 */
function mkdirRecursive(dir, inputPath = _const__WEBPACK_IMPORTED_MODULE_3__["WORKSPACE_PATH"] || '', split = '/') {
    const dirArr = dir.split(split);
    const dir2 = dirArr.reduce((dirPath, folder) => {
        const p1 = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(inputPath, dirPath);
        if (!fs__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(p1))
            fs__WEBPACK_IMPORTED_MODULE_0___default.a.mkdirSync(p1);
        return dirPath + '/' + folder;
    });
    const p2 = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(inputPath, dir2);
    if (!fs__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(p2))
        fs__WEBPACK_IMPORTED_MODULE_0___default.a.mkdirSync(p2);
}
/**
 * 动态导入一个 JS 文件
 * @param modulePath 要导入的文件路径
 * @param filename 文件名
 */
function requireModule(modulePath, filename = 'bundle.js') {
    // let bundle: string
    // try {
    //   bundle = fs.readFileSync(modulePath, 'utf-8')
    // } catch (error) {
    //   throw new Error(error)
    // }
    // // @ts-ignore
    // const m = new module()
    // m._compile(bundle, 'bundle.js')
    // return m
    // ---------------------------------------------------------------------
    const res = __webpack_require__("./src/utils sync recursive")(modulePath);
    delete __webpack_require__.c[/*require.resolve*/(__webpack_require__("./src/utils sync recursive").resolve(modulePath))];
    console.warn(res);
    return res;
    // ---------------------------------------------------------------------
    // const m: any = { module: { exports: {} }, a: '' }
    // let moduleCode: string
    // try {
    //   moduleCode = fs.readFileSync(modulePath, 'utf-8')
    // } catch (error) {
    //   throw new Error(error)
    // }
    // // const wrapper = NativeModule.wrap(bundle)
    // // const script = new vm.Script(bundle, {
    // //   filename,
    // //   displayErrors: true,
    // // })
    // // const script = new vm.Script(wrapper, {
    // //   filename,
    // //   displayErrors: true,
    // // })
    // // const result = script.runInThisContext() // 此处可以指定代码的执行环境，此 api 在 nodejs 文档中有介绍
    // // console.warn({ filename, script, ss: result })
    // // result.call(m.exports, m.exports, require, m)
    // vm.createContext(m)
    // const res = vm.runInContext(moduleCode, m)
    // console.warn({ res, m, s: m.module, d: m.module.exports.miniprogram, f: m.a })
    // return m
}
/**
 * 打开一个未保存的文档
 * @param docStr
 * @param name
 */
function preSaveDocument(docStr, filePath) {
    const newFile = vscode__WEBPACK_IMPORTED_MODULE_2___default.a.Uri.parse((fs__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(filePath) ? 'file' : 'untitled') + ':' + filePath);
    return vscode__WEBPACK_IMPORTED_MODULE_2___default.a.workspace.openTextDocument(newFile).then(document => {
        const edit = new vscode__WEBPACK_IMPORTED_MODULE_2___default.a.WorkspaceEdit();
        const pMin = new vscode__WEBPACK_IMPORTED_MODULE_2___default.a.Position(0, 0);
        const pMax = new vscode__WEBPACK_IMPORTED_MODULE_2___default.a.Position(Infinity, Infinity);
        edit.replace(newFile, new vscode__WEBPACK_IMPORTED_MODULE_2___default.a.Range(pMin, pMax), docStr);
        return vscode__WEBPACK_IMPORTED_MODULE_2___default.a.workspace.applyEdit(edit).then(success => {
            if (success) {
                vscode__WEBPACK_IMPORTED_MODULE_2___default.a.window.showTextDocument(document);
            }
            else {
                vscode__WEBPACK_IMPORTED_MODULE_2___default.a.window.showInformationMessage('Error!'['document error']);
            }
            return success;
        });
    });
}


/***/ }),

/***/ "./src/utils/localize.ts":
/*!*******************************!*\
  !*** ./src/utils/localize.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_nls_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.nls.json */ "./package.nls.json");
var _package_nls_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.nls.json */ "./package.nls.json", 1);
/* harmony import */ var _package_nls_zh_cn_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.nls.zh-cn.json */ "./package.nls.zh-cn.json");
var _package_nls_zh_cn_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.nls.zh-cn.json */ "./package.nls.zh-cn.json", 1);


const langs = {
    en: _package_nls_json__WEBPACK_IMPORTED_MODULE_0__,
    'zh-cn': _package_nls_zh_cn_json__WEBPACK_IMPORTED_MODULE_1__,
};
class Localize {
    constructor() {
        this.locale = '';
        this.localize = {};
    }
    init({ locale }) {
        this.locale = locale;
        this.localize = langs[locale];
    }
    getLocalize(key) {
        let res = this.localize[key] || key;
        if (arguments.length > 1) {
            const params = Object.assign([], arguments);
            params.forEach((val, i) => {
                if (i > 0)
                    res = res.replace(`\${${i}}`, val);
            });
        }
        return res;
    }
}
const localize = new Localize();
localize.init(JSON.parse(process.env.VSCODE_NLS_CONFIG || ''));
/* harmony default export */ __webpack_exports__["default"] = (localize);


/***/ }),

/***/ "./src/utils/log.ts":
/*!**************************!*\
  !*** ./src/utils/log.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/utils/const.ts");


class Log {
    constructor() {
        this.outputChannel = vscode__WEBPACK_IMPORTED_MODULE_0__["window"].createOutputChannel(_const__WEBPACK_IMPORTED_MODULE_1__["EXT_NAME"]);
    }
    // public get outputChannel(): OutputChannel {
    //   if (!this._channel) this._channel =
    //   return this._channel
    // }
    raw(...values) {
        this.outputChannel.appendLine(values.map(i => i.toString()).join(' '));
    }
    log(message, intend = 0) {
        this.outputChannel.appendLine(`${'\t'.repeat(intend)}${message}`);
    }
    info(message, intend = 0) {
        this.log(`[INFO] - ${Date.now()} : ${message}`, intend);
    }
    success(message, intend = 0) {
        this.log(`[SUCCESS] - ${Date.now()} : ${message}`, intend);
    }
    warn(message, intend = 0) {
        this.log(`[WARN] - ${Date.now()} : ${message}`, intend);
    }
    error(err, prompt = true, intend = 0) {
        if (prompt)
            vscode__WEBPACK_IMPORTED_MODULE_0__["window"].showErrorMessage(`${_const__WEBPACK_IMPORTED_MODULE_1__["EXT_NAME"]} Error: ${err.toString()}`);
        if (typeof err === 'string') {
            this.log(`[ERROR] - ${Date.now()} : ${err}`, intend);
        }
        else {
            this.log(`[ERROR] - ${Date.now()} : ${err.name}: ${err.message}\n${err.stack}`, intend);
        }
    }
    divider() {
        this.outputChannel.appendLine('\n――――――\n');
    }
}
const log = new Log();
/* harmony default export */ __webpack_exports__["default"] = (log);


/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

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