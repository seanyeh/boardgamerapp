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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/abacus-light.svg":
/*!*********************************!*\
  !*** ./images/abacus-light.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fal\" data-icon=\"abacus\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" class=\"svg-inline--fa fa-abacus fa-w-18 fa-7x\"><path fill=\"currentColor\" d=\"M560 0c-8.84 0-16 7.16-16 16v64h-64V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v16h-96V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v16h-32V64c0-17.67-14.33-32-32-32H96c-17.67 0-32 14.33-32 32v16H32V16c0-8.84-7.16-16-16-16S0 7.16 0 16v488c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-72h32v16c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-16h32v16c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-16h96v16c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-16h64v72c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V16c0-8.84-7.16-16-16-16zM416 64h32v64h-32V64zm-192 0h32v64h-32V64zM96 64h32v64H96V64zm32 384H96v-64h32v64zm128 0h-32v-64h32v64zm192 0h-32v-64h32v64zm96-48h-64v-16c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v16h-96v-16c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v16h-32v-16c0-17.67-14.33-32-32-32H96c-17.67 0-32 14.33-32 32v16H32V272h32v16c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-16h32v16c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-16h32v16c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-16h128v128zM96 288v-64h32v64H96zm128 0v-64h32v64h-32zm128 0v-64h32v64h-32zm192-48H416v-16c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v16h-32v-16c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v16h-32v-16c0-17.67-14.33-32-32-32H96c-17.67 0-32 14.33-32 32v16H32V112h32v16c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-16h32v16c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-16h96v16c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-16h64v128z\" class></path></svg>"

/***/ }),

/***/ "./images/abacus-solid.svg":
/*!*********************************!*\
  !*** ./images/abacus-solid.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"abacus\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" class=\"svg-inline--fa fa-abacus fa-w-18 fa-7x\"><path fill=\"currentColor\" d=\"M32 0C14.33 0 0 14.33 0 32v464c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V32C64 14.33 49.67 0 32 0zm512 0c-17.67 0-32 14.33-32 32v464c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V32c0-17.67-14.33-32-32-32zm-80 32h-32c-8.84 0-16 7.16-16 16v24H256V48c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v24h-32V48c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h32v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h160v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16zM352 208c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v24h-32v-24c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v24h-32v-24c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h32v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h32v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h128v-48H352v-24zm112 144h-32c-8.84 0-16 7.16-16 16v24H256v-24c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v24h-32v-24c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h32v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h160v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16z\" class></path></svg>"

/***/ }),

/***/ "./images/calculator-light.svg":
/*!*************************************!*\
  !*** ./images/calculator-light.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fal\" data-icon=\"calculator\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-calculator fa-w-14 fa-7x\"><path fill=\"currentColor\" d=\"M80 448h288c8.84 0 16-7.16 16-16V240c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v192c0 8.84 7.16 16 16 16zm208-96v-96h64v160h-64v-64zm-96-96h64v64h-64v-64zm0 96h64v64h-64v-64zm-96-96h64v64H96v-64zm0 96h64v64H96v-64zM400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zm16 464c0 7.93-8.07 16-16 16H48c-7.93 0-16-8.07-16-16V192h384v272zm0-304H32V48c0-7.93 8.07-16 16-16h352c7.93 0 16 8.07 16 16v112z\" class></path></svg>"

/***/ }),

/***/ "./images/calculator-solid.svg":
/*!*************************************!*\
  !*** ./images/calculator-solid.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"calculator\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-calculator fa-w-14 fa-7x\"><path fill=\"currentColor\" d=\"M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z\" class></path></svg>"

/***/ }),

/***/ "./images/coins-light.svg":
/*!********************************!*\
  !*** ./images/coins-light.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fal\" data-icon=\"coins\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-coins fa-w-16 fa-7x\"><path fill=\"currentColor\" d=\"M336 32c-48.6 0-92.6 9-124.5 23.4-.9.4-51.5 21-51.5 56.6v16.7C76.1 132.2 0 163.4 0 208v192c0 44.2 78.8 80 176 80s176-35.8 176-80v-16.4c89.7-3.7 160-37.9 160-79.6V112c0-37-62.1-80-176-80zm-16 368c0 13.9-50.5 48-144 48S32 413.9 32 400v-50.1c31.8 20.6 84.4 34.1 144 34.1s112.2-13.5 144-34.1V400zm0-96c0 13.9-50.5 48-144 48S32 317.9 32 304v-50.1c31.8 20.6 84.4 34.1 144 34.1s112.2-13.5 144-34.1V304zm-144-48c-81 0-146.7-21.5-146.7-48S95 160 176 160s146.7 21.5 146.7 48S257 256 176 256zm304 48c0 13.1-45 43.6-128 47.3v-64.1c52.8-2.2 99.1-14.6 128-33.3V304zm0-96c0 13.1-45.1 43.4-128 47.2V208c0-5.6-1.7-11-4.1-16.3 54.6-1.7 102.4-14.5 132.1-33.8V208zm-144-48c-7.3 0-14-.5-20.9-.9-36.9-21.7-85-28.2-115.6-30-6.3-5.3-10.1-11-10.1-17.1 0-26.5 65.7-48 146.7-48s146.7 21.5 146.7 48S417 160 336 160z\" class></path></svg>"

/***/ }),

/***/ "./images/coins-solid.svg":
/*!********************************!*\
  !*** ./images/coins-solid.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"coins\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-coins fa-w-16 fa-7x\"><path fill=\"currentColor\" d=\"M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z\" class></path></svg>"

/***/ }),

/***/ "./images/dice-light.svg":
/*!*******************************!*\
  !*** ./images/dice-light.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fal\" data-icon=\"dice\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\" class=\"svg-inline--fa fa-dice fa-w-20 fa-7x\"><path fill=\"currentColor\" d=\"M480 328c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zM224 200c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm96 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm-192 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm96 96c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm0-192c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm352 88H439.38c-2.89-5.17-6.26-10.15-10.65-14.54L270.54 19.28C257.69 6.42 240.84 0 224 0s-33.69 6.42-46.54 19.28L19.28 177.46c-25.7 25.7-25.7 67.38 0 93.08l158.18 158.18C190.31 441.57 207.16 448 224 448s33.69-6.43 46.54-19.28L320 379.26V448c0 35.35 28.65 64 64 64h192c35.35 0 64-28.65 64-64V256c0-35.35-28.65-64-64-64zM247.27 405.45c-6.21 6.21-14.48 9.64-23.27 9.64s-17.05-3.42-23.27-9.64L42.55 247.27c-6.21-6.22-9.64-14.48-9.64-23.27s3.42-17.05 9.64-23.27L200.73 42.55c6.21-6.21 14.48-9.64 23.27-9.64s17.05 3.42 23.27 9.64l158.18 158.18c6.22 6.21 9.64 14.48 9.64 23.27s-3.42 17.05-9.64 23.27L247.27 405.45zM608 448c0 17.64-14.36 32-32 32H384c-17.64 0-32-14.36-32-32V347.26l76.72-76.72C441.57 257.69 448 240.84 448 224h128c17.64 0 32 14.36 32 32v192z\" class></path></svg>"

/***/ }),

/***/ "./images/dice-solid.svg":
/*!*******************************!*\
  !*** ./images/dice-solid.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"dice\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\" class=\"svg-inline--fa fa-dice fa-w-20 fa-7x\"><path fill=\"currentColor\" d=\"M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z\" class></path></svg>"

/***/ }),

/***/ "./images/dieRed1.png":
/*!****************************!*\
  !*** ./images/dieRed1.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/9994b07c760083d23ad5b4b1265592d4.png";

/***/ }),

/***/ "./images/dieRed2.png":
/*!****************************!*\
  !*** ./images/dieRed2.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/1b97ab1bf053640d2bc39e0b2179c334.png";

/***/ }),

/***/ "./images/dieRed3.png":
/*!****************************!*\
  !*** ./images/dieRed3.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/c500b67fca0ab1845bbaef492b7ce348.png";

/***/ }),

/***/ "./images/dieRed4.png":
/*!****************************!*\
  !*** ./images/dieRed4.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/d516ca1a8b634a8789df98e79d45ef2b.png";

/***/ }),

/***/ "./images/dieRed5.png":
/*!****************************!*\
  !*** ./images/dieRed5.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/79f342edbd060ef567a8b78d135474d7.png";

/***/ }),

/***/ "./images/dieRed6.png":
/*!****************************!*\
  !*** ./images/dieRed6.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/6c2b3eb2554382db4844d2c5e3c98110.png";

/***/ }),

/***/ "./images/dieWhite1.png":
/*!******************************!*\
  !*** ./images/dieWhite1.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/7949897d5d23674c09c229c8ae2f9f43.png";

/***/ }),

/***/ "./images/dieWhite2.png":
/*!******************************!*\
  !*** ./images/dieWhite2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5776056d71db3a19ad848a87a085cedc.png";

/***/ }),

/***/ "./images/dieWhite3.png":
/*!******************************!*\
  !*** ./images/dieWhite3.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2887f7fabc04b54f069ca8c491ac91ea.png";

/***/ }),

/***/ "./images/dieWhite4.png":
/*!******************************!*\
  !*** ./images/dieWhite4.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/cbf874b9739754abd86cdcf013b2272f.png";

/***/ }),

/***/ "./images/dieWhite5.png":
/*!******************************!*\
  !*** ./images/dieWhite5.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/47a1e64f69c4ca84dd1a26e9ed5727ca.png";

/***/ }),

/***/ "./images/dieWhite6.png":
/*!******************************!*\
  !*** ./images/dieWhite6.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/11cc24ab8aebcf191108f3bead767afe.png";

/***/ }),

/***/ "./images/minus-circle-solid.svg":
/*!***************************************!*\
  !*** ./images/minus-circle-solid.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"minus-circle\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-minus-circle fa-w-16 fa-7x\"><path fill=\"currentColor\" d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z\" class></path></svg>"

/***/ }),

/***/ "./images/minus-solid.svg":
/*!********************************!*\
  !*** ./images/minus-solid.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"minus\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-minus fa-w-14 fa-7x\"><path fill=\"currentColor\" d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\" class></path></svg>"

/***/ }),

/***/ "./images/plus-circle-solid.svg":
/*!**************************************!*\
  !*** ./images/plus-circle-solid.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"plus-circle\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-plus-circle fa-w-16 fa-7x\"><path fill=\"currentColor\" d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z\" class></path></svg>"

/***/ }),

/***/ "./images/plus-solid.svg":
/*!*******************************!*\
  !*** ./images/plus-solid.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"plus\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-plus fa-w-14 fa-7x\"><path fill=\"currentColor\" d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\" class></path></svg>"

/***/ }),

/***/ "./images/redo-solid.svg":
/*!*******************************!*\
  !*** ./images/redo-solid.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"redo\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-redo fa-w-16 fa-7x\"><path fill=\"currentColor\" d=\"M500.333 0h-47.411c-6.853 0-12.314 5.729-11.986 12.574l3.966 82.759C399.416 41.899 331.672 8 256.001 8 119.34 8 7.899 119.526 8 256.187 8.101 393.068 119.096 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.354-12.561.482-17.433l-33.971-33.971c-4.466-4.466-11.64-4.717-16.38-.543C341.308 415.448 300.606 432 256 432c-97.267 0-176-78.716-176-176 0-97.267 78.716-176 176-176 60.892 0 114.506 30.858 146.099 77.8l-101.525-4.865c-6.845-.328-12.574 5.133-12.574 11.986v47.411c0 6.627 5.373 12 12 12h200.333c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12z\" class></path></svg>"

/***/ }),

/***/ "./images/times-circle-solid.svg":
/*!***************************************!*\
  !*** ./images/times-circle-solid.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"times-circle\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-times-circle fa-w-16 fa-7x\"><path fill=\"currentColor\" d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z\" class></path></svg>"

/***/ }),

/***/ "./images/user-cog-light.svg":
/*!***********************************!*\
  !*** ./images/user-cog-light.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fal\" data-icon=\"user-cog\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\" class=\"svg-inline--fa fa-user-cog fa-w-20 fa-7x\"><path fill=\"currentColor\" d=\"M628.3 358.3l-16.5-9.5c.8-8.5.8-17.1 0-25.6l16.6-9.5c9.5-5.5 13.8-16.7 10.5-27-7.2-23.4-19.9-45.4-36.7-63.5-7.4-8.1-19.3-9.9-28.7-4.4l-16.5 9.5c-7-5-14.4-9.3-22.2-12.8v-19c0-11-7.5-20.3-18.2-22.7-23.9-5.4-49.3-5.4-73.2 0-10.7 2.4-18.2 11.8-18.2 22.7v19c-7.8 3.5-15.2 7.8-22.2 12.8l-16.5-9.5c-9.5-5.5-21.3-3.7-28.7 4.4-16.7 18.1-29.4 40.1-36.7 63.4-3.3 10.4 1.2 21.8 10.6 27.2l16.5 9.5c-.8 8.5-.8 17.1 0 25.6l-16.6 9.5c-9.3 5.4-13.8 16.9-10.5 27.1 7.2 23.4 19.9 45.4 36.7 63.5 7.4 8 19.2 9.8 28.7 4.4l16.5-9.5c7 5 14.4 9.3 22.2 12.8v19c0 11 7.5 20.3 18.2 22.7 12 2.7 24.3 4 36.6 4s24.7-1.3 36.6-4c10.7-2.4 18.2-11.8 18.2-22.7v-19c7.8-3.5 15.2-7.8 22.2-12.8l16.5 9.5c9.4 5.4 21.3 3.6 28.7-4.4 16.7-18.1 29.4-40.1 36.7-63.4 3.3-10.4-1.2-21.9-10.6-27.3zm-51.6 7.2l29.4 17c-5.2 14.3-13 27.8-22.8 39.5l-29.4-17c-21.4 18.3-24.5 20.1-51.1 29.5v34c-15.1 2.6-30.6 2.6-45.6 0v-34c-26.9-9.5-30.2-11.7-51.1-29.5l-29.4 17c-9.8-11.8-17.6-25.2-22.8-39.5l29.4-17c-4.9-26.8-5.2-30.6 0-59l-29.4-17c5.2-14.3 13-27.7 22.8-39.5l29.4 17c21.4-18.3 24.5-20.1 51.1-29.5v-34c15.1-2.5 30.7-2.5 45.6 0v34c26.8 9.5 30.2 11.6 51.1 29.5l29.4-17c9.8 11.8 17.6 25.2 22.8 39.5l-29.4 17c4.9 26.8 5.2 30.6 0 59zm-96.7-94c-35.6 0-64.5 29-64.5 64.5s28.9 64.5 64.5 64.5 64.5-29 64.5-64.5-28.9-64.5-64.5-64.5zm0 97c-17.9 0-32.5-14.6-32.5-32.5s14.6-32.5 32.5-32.5 32.5 14.6 32.5 32.5-14.6 32.5-32.5 32.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zM48 480c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 19.2 0 38-3.3 56.5-8.7.5-11.6 1.8-23 4.2-34-8.9 2.7-30.1 10.7-60.7 10.7-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h337c-16-8.6-30.6-19.5-43.5-32H48z\" class></path></svg>"

/***/ }),

/***/ "./images/user-cog-solid.svg":
/*!***********************************!*\
  !*** ./images/user-cog-solid.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"user-cog\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\" class=\"svg-inline--fa fa-user-cog fa-w-20 fa-7x\"><path fill=\"currentColor\" d=\"M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z\" class></path></svg>"

/***/ }),

/***/ "./images/users-cog-light.svg":
/*!************************************!*\
  !*** ./images/users-cog-light.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fal\" data-icon=\"users-cog\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\" class=\"svg-inline--fa fa-users-cog fa-w-20 fa-7x\"><path fill=\"currentColor\" d=\"M287.4 250.6c2.9-10.4 6.5-20.4 10.9-30-33.6-9.5-58.4-40.1-58.4-76.7 0-44.1 35.9-80 80-80 36.6 0 67.1 24.8 76.7 58.4 9.6-4.4 19.6-8.1 30-10.9C412.6 65.6 370.4 32 320 32c-61.9 0-112 50.1-112 112 0 50.4 33.6 92.6 79.4 106.6zM96 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm61.1 172.9c-11.9-8.1-26-12.9-41.1-12.9H76c-41.9 0-76 35.9-76 80 0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 19.8-48 44-48h40c5.5 0 10.8 1.2 15.7 3.3 7.5-8.5 16.1-16 25.4-22.4zM176 448c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 14.3 0 18.8 2.4 40.7 7.2-.2-3.8-1.4-13.4.6-32.6-16.3-4.3-26.4-6.6-41.3-6.6-36.3 0-71.6 16.2-92.3 46.9-12.4 18.4-19.6 40.5-19.6 64.3V432c0 26.5 21.5 48 48 48h209c-16-8.6-30.6-19.5-43.5-32H176zm304-208.5c-35.6 0-64.5 29-64.5 64.5s28.9 64.5 64.5 64.5 64.5-29 64.5-64.5-28.9-64.5-64.5-64.5zm0 97c-17.9 0-32.5-14.6-32.5-32.5s14.6-32.5 32.5-32.5 32.5 14.6 32.5 32.5-14.6 32.5-32.5 32.5zm148.3-10.2l-16.5-9.5c.8-8.5.8-17.1 0-25.6l16.6-9.5c9.5-5.5 13.8-16.7 10.5-27-7.2-23.4-19.9-45.4-36.7-63.5-7.4-8.1-19.3-9.9-28.8-4.4l-16.5 9.5c-7-5-14.4-9.3-22.2-12.8v-19c0-11-7.5-20.3-18.2-22.7-23.9-5.4-49.3-5.4-73.3 0-10.7 2.4-18.2 11.8-18.2 22.7v19c-7.8 3.5-15.3 7.8-22.2 12.8l-16.5-9.5c-9.5-5.5-21.3-3.7-28.7 4.4-16.8 18.1-29.4 40.1-36.7 63.4-3.3 10.4 1.2 21.8 10.6 27.2l16.5 9.5c-.8 8.5-.8 17.1 0 25.6l-16.6 9.5c-9.3 5.4-13.8 16.9-10.5 27.1 7.3 23.4 19.9 45.4 36.7 63.5 7.4 8 19.2 9.8 28.8 4.4l16.5-9.5c7 5 14.4 9.3 22.2 12.8v19c0 11 7.5 20.3 18.2 22.7 12 2.7 24.3 4 36.6 4s24.7-1.3 36.6-4c10.7-2.4 18.2-11.8 18.2-22.7v-19c7.8-3.5 15.2-7.8 22.2-12.8l16.5 9.5c9.4 5.4 21.3 3.6 28.7-4.4 16.8-18.1 29.4-40.1 36.7-63.4 3.4-10.4-1.1-21.9-10.5-27.3zm-51.6 7.2l29.4 17c-5.3 14.3-13 27.8-22.8 39.5l-29.4-17c-21.4 18.3-24.5 20.1-51.1 29.5v34c-15.1 2.6-30.6 2.6-45.6 0v-34c-26.9-9.5-30.2-11.7-51.1-29.5l-29.4 17c-9.8-11.8-17.6-25.2-22.8-39.5l29.4-17c-4.9-26.8-5.2-30.6 0-59l-29.4-17c5.2-14.3 13-27.7 22.8-39.5l29.4 17c21.4-18.3 24.5-20.1 51.1-29.5v-34c15.1-2.5 30.7-2.5 45.6 0v34c26.8 9.5 30.2 11.6 51.1 29.5l29.4-17c9.8 11.8 17.6 25.2 22.8 39.5l-29.4 17c4.9 26.8 5.2 30.6 0 59z\" class></path></svg>"

/***/ }),

/***/ "./images/users-cog-solid.svg":
/*!************************************!*\
  !*** ./images/users-cog-solid.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"users-cog\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\" class=\"svg-inline--fa fa-users-cog fa-w-20 fa-7x\"><path fill=\"currentColor\" d=\"M610.5 341.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 368.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm224 32c1.9 0 3.7-.5 5.6-.6 8.3-21.7 20.5-42.1 36.3-59.2 7.4-8 17.9-12.6 28.9-12.6 6.9 0 13.7 1.8 19.6 5.3l7.9 4.6c.8-.5 1.6-.9 2.4-1.4 7-14.6 11.2-30.8 11.2-48 0-61.9-50.1-112-112-112S208 82.1 208 144c0 61.9 50.1 112 112 112zm105.2 194.5c-2.3-1.2-4.6-2.6-6.8-3.9-8.2 4.8-15.3 9.8-27.5 9.8-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-10.7-34.5 24.9-49.7 25.8-50.3-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-3.8-2.2-7-5-9.8-8.1-3.3.2-6.5.6-9.8.6-24.6 0-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h255.4c-3.7-6-6.2-12.8-6.2-20.3v-9.2zM173.1 274.6C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z\" class></path></svg>"

/***/ }),

/***/ "./images/users-light.svg":
/*!********************************!*\
  !*** ./images/users-light.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fal\" data-icon=\"users\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\" class=\"svg-inline--fa fa-users fa-w-20 fa-7x\"><path fill=\"currentColor\" d=\"M544 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM320 256c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm0-192c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80zm244 192h-40c-15.2 0-29.3 4.8-41.1 12.9 9.4 6.4 17.9 13.9 25.4 22.4 4.9-2.1 10.2-3.3 15.7-3.3h40c24.2 0 44 21.5 44 48 0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.1-34.1-80-76-80zM96 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm304.1 180c-33.4 0-41.7 12-80.1 12-38.4 0-46.7-12-80.1-12-36.3 0-71.6 16.2-92.3 46.9-12.4 18.4-19.6 40.5-19.6 64.3V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM480 432c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 27.4 0 37.2 12 80.2 12s52.8-12 80.1-12c27.3 0 51.9 12.3 65.7 32.8 9.2 13.7 14.1 29.8 14.1 46.4V432zM157.1 268.9c-11.9-8.1-26-12.9-41.1-12.9H76c-41.9 0-76 35.9-76 80 0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 19.8-48 44-48h40c5.5 0 10.8 1.2 15.7 3.3 7.5-8.5 16.1-16 25.4-22.4z\" class></path></svg>"

/***/ }),

/***/ "./images/users-solid.svg":
/*!********************************!*\
  !*** ./images/users-solid.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"users\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\" class=\"svg-inline--fa fa-users fa-w-20 fa-7x\"><path fill=\"currentColor\" d=\"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z\" class></path></svg>"

/***/ }),

/***/ "./node_modules/mithril/mithril.js":
/*!*****************************************!*\
  !*** ./node_modules/mithril/mithril.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, global) {;(function() {
"use strict"
function Vnode(tag, key, attrs0, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs0, children: children, text: text, dom: dom, domSize: undefined, state: undefined, _state: undefined, events: undefined, instance: undefined, skip: false}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node != null && typeof node !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined)
	return node
}
Vnode.normalizeChildren = function normalizeChildren(children) {
	for (var i = 0; i < children.length; i++) {
		children[i] = Vnode.normalize(children[i])
	}
	return children
}
var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty
function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}
function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}
function execSelector(state, attrs, children) {
	var hasAttrs = false, childList, text
	var className = attrs.className || attrs.class
	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}
		for(var key in attrs) {
			if (hasOwn.call(attrs, key)) {
				newAttrs[key] = attrs[key]
			}
		}
		attrs = newAttrs
	}
	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key)) {
			attrs[key] = state.attrs[key]
		}
	}
	if (className !== undefined) {
		if (attrs.class !== undefined) {
			attrs.class = undefined
			attrs.className = className
		}
		if (state.attrs.className != null) {
			attrs.className = state.attrs.className + " " + className
		}
	}
	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			hasAttrs = true
			break
		}
	}
	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		text = children[0].children
	} else {
		childList = children
	}
	return Vnode(state.tag, attrs.key, hasAttrs ? attrs : undefined, childList, text)
}
function hyperscript(selector) {
	// Because sloppy mode sucks
	var attrs = arguments[1], start = 2, children
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}
	if (typeof selector === "string") {
		var cached = selectorCache[selector] || compileSelector(selector)
	}
	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = 1
	}
	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}
	var normalized = Vnode.normalizeChildren(children)
	if (typeof selector === "string") {
		return execSelector(cached, attrs, normalized)
	} else {
		return Vnode(selector, attrs.key, attrs, normalized)
	}
}
hyperscript.trust = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}
hyperscript.fragment = function(attrs1, children) {
	return Vnode("[", attrs1.key, attrs1, Vnode.normalizeChildren(children), undefined, undefined)
}
var m = hyperscript
/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")
	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}
	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}
if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill
	var PromisePolyfill = window.Promise
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") global.Promise = PromisePolyfill
	var PromisePolyfill = global.Promise
} else {
}
var buildQueryString = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""
	var args = []
	for (var key0 in object) {
		destructure(key0, object[key0])
	}
	return args.join("&")
	function destructure(key0, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key0 + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key0 + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key0) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}
var FILE_PROTOCOL_REGEX = new RegExp("^file://", "i")
var _8 = function($window, Promise) {
	var callbackCount = 0
	var oncompletion
	function setCompletionCallback(callback) {oncompletion = callback}
	function finalizer() {
		var count = 0
		function complete() {if (--count === 0 && typeof oncompletion === "function") oncompletion()}
		return function finalize(promise0) {
			var then0 = promise0.then
			promise0.then = function() {
				count++
				var next = then0.apply(promise0, arguments)
				next.then(complete, function(e) {
					complete()
					if (count === 0) throw e
				})
				return finalize(next)
			}
			return promise0
		}
	}
	function normalize(args, extra) {
		if (typeof args === "string") {
			var url = args
			args = extra || {}
			if (args.url == null) args.url = url
		}
		return args
	}
	function request(args, extra) {
		var finalize = finalizer()
		args = normalize(args, extra)
		var promise0 = new Promise(function(resolve, reject) {
			if (args.method == null) args.method = "GET"
			args.method = args.method.toUpperCase()
			var useBody = (args.method === "GET" || args.method === "TRACE") ? false : (typeof args.useBody === "boolean" ? args.useBody : true)
			if (typeof args.serialize !== "function") args.serialize = typeof FormData !== "undefined" && args.data instanceof FormData ? function(value) {return value} : JSON.stringify
			if (typeof args.deserialize !== "function") args.deserialize = deserialize
			if (typeof args.extract !== "function") args.extract = extract
			args.url = interpolate(args.url, args.data)
			if (useBody) args.data = args.serialize(args.data)
			else args.url = assemble(args.url, args.data)
			var xhr = new $window.XMLHttpRequest(),
				aborted = false,
				_abort = xhr.abort
			xhr.abort = function abort() {
				aborted = true
				_abort.call(xhr)
			}
			xhr.open(args.method, args.url, typeof args.async === "boolean" ? args.async : true, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)
			if (args.serialize === JSON.stringify && useBody && !(args.headers && args.headers.hasOwnProperty("Content-Type"))) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (args.deserialize === deserialize && !(args.headers && args.headers.hasOwnProperty("Accept"))) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			for (var key in args.headers) if ({}.hasOwnProperty.call(args.headers, key)) {
				xhr.setRequestHeader(key, args.headers[key])
			}
			if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr
			xhr.onreadystatechange = function() {
				// Don't throw errors on xhr.abort().
				if(aborted) return
				if (xhr.readyState === 4) {
					try {
						var response = (args.extract !== extract) ? args.extract(xhr, args) : args.deserialize(args.extract(xhr, args))
						if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || FILE_PROTOCOL_REGEX.test(args.url)) {
							resolve(cast(args.type, response))
						}
						else {
							var error = new Error(xhr.responseText)
							for (var key in response) error[key] = response[key]
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}
			if (useBody && (args.data != null)) xhr.send(args.data)
			else xhr.send()
		})
		return args.background === true ? promise0 : finalize(promise0)
	}
	function jsonp(args, extra) {
		var finalize = finalizer()
		args = normalize(args, extra)
		var promise0 = new Promise(function(resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				script.parentNode.removeChild(script)
				resolve(cast(args.type, data))
				delete $window[callbackName]
			}
			script.onerror = function() {
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
				delete $window[callbackName]
			}
			if (args.data == null) args.data = {}
			args.url = interpolate(args.url, args.data)
			args.data[args.callbackKey || "callback"] = callbackName
			script.src = assemble(args.url, args.data)
			$window.document.documentElement.appendChild(script)
		})
		return args.background === true? promise0 : finalize(promise0)
	}
	function interpolate(url, data) {
		if (data == null) return url
		var tokens = url.match(/:[^\/]+/gi) || []
		for (var i = 0; i < tokens.length; i++) {
			var key = tokens[i].slice(1)
			if (data[key] != null) {
				url = url.replace(tokens[i], data[key])
			}
		}
		return url
	}
	function assemble(url, data) {
		var querystring = buildQueryString(data)
		if (querystring !== "") {
			var prefix = url.indexOf("?") < 0 ? "?" : "&"
			url += prefix + querystring
		}
		return url
	}
	function deserialize(data) {
		try {return data !== "" ? JSON.parse(data) : null}
		catch (e) {throw new Error(data)}
	}
	function extract(xhr) {return xhr.responseText}
	function cast(type0, data) {
		if (typeof type0 === "function") {
			if (Array.isArray(data)) {
				for (var i = 0; i < data.length; i++) {
					data[i] = new type0(data[i])
				}
			}
			else return new type0(data)
		}
		return data
	}
	return {request: request, jsonp: jsonp, setCompletionCallback: setCompletionCallback}
}
var requestService = _8(window, PromisePolyfill)
var coreRenderer = function($window) {
	var $doc = $window.document
	var $emptyFragment = $doc.createDocumentFragment()
	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}
	var onevent
	function setEventCallback(callback) {return onevent = callback}
	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": return createText(parent, vnode, nextSibling)
				case "<": return createHTML(parent, vnode, nextSibling)
				case "[": return createFragment(parent, vnode, hooks, ns, nextSibling)
				default: return createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else return createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
		return vnode.dom
	}
	function createHTML(parent, vnode, nextSibling) {
		var match1 = vnode.children.match(/^\s*?<(\w+)/im) || []
		var parent1 = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}[match1[1]] || "div"
		var temp = $doc.createElement(parent1)
		temp.innerHTML = vnode.children
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
		return fragment
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
		return fragment
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs2 = vnode.attrs
		var is = attrs2 && attrs2.is
		ns = getNameSpace(vnode) || ns
		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element
		if (attrs2 != null) {
			setAttrs(vnode, attrs2, ns)
		}
		insertNode(parent, element, nextSibling)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else {
			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text
				else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			}
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				setLateAttrs(vnode)
			}
		}
		return element
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		vnode._state = vnode.state
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		initLifecycle(vnode._state, vnode, hooks)
		vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			var element = createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
			insertNode(parent, element, nextSibling)
			return element
		}
		else {
			vnode.domSize = 0
			return $emptyFragment
		}
	}
	//update
	function updateNodes(parent, old, vnodes, recycling, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null) removeNodes(old, 0, old.length, vnodes)
		else {
			if (old.length === vnodes.length) {
				var isUnkeyed = false
				for (var i = 0; i < vnodes.length; i++) {
					if (vnodes[i] != null && old[i] != null) {
						isUnkeyed = vnodes[i].key == null && old[i].key == null
						break
					}
				}
				if (isUnkeyed) {
					for (var i = 0; i < old.length; i++) {
						if (old[i] === vnodes[i]) continue
						else if (old[i] == null && vnodes[i] != null) createNode(parent, vnodes[i], hooks, ns, getNextSibling(old, i + 1, nextSibling))
						else if (vnodes[i] == null) removeNodes(old, i, i + 1, vnodes)
						else updateNode(parent, old[i], vnodes[i], hooks, getNextSibling(old, i + 1, nextSibling), recycling, ns)
					}
					return
				}
			}
			recycling = recycling || isRecyclable(old, vnodes)
			if (recycling) {
				var pool = old.pool
				old = old.concat(old.pool)
			}
			var oldStart = 0, start = 0, oldEnd = old.length - 1, end = vnodes.length - 1, map
			while (oldEnd >= oldStart && end >= start) {
				var o = old[oldStart], v = vnodes[start]
				if (o === v && !recycling) oldStart++, start++
				else if (o == null) oldStart++
				else if (v == null) start++
				else if (o.key === v.key) {
					var shouldRecycle = (pool != null && oldStart >= old.length - pool.length) || ((pool == null) && recycling)
					oldStart++, start++
					updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), shouldRecycle, ns)
					if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
				}
				else {
					var o = old[oldEnd]
					if (o === v && !recycling) oldEnd--, start++
					else if (o == null) oldEnd--
					else if (v == null) start++
					else if (o.key === v.key) {
						var shouldRecycle = (pool != null && oldEnd >= old.length - pool.length) || ((pool == null) && recycling)
						updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns)
						if (recycling || start < end) insertNode(parent, toFragment(o), getNextSibling(old, oldStart, nextSibling))
						oldEnd--, start++
					}
					else break
				}
			}
			while (oldEnd >= oldStart && end >= start) {
				var o = old[oldEnd], v = vnodes[end]
				if (o === v && !recycling) oldEnd--, end--
				else if (o == null) oldEnd--
				else if (v == null) end--
				else if (o.key === v.key) {
					var shouldRecycle = (pool != null && oldEnd >= old.length - pool.length) || ((pool == null) && recycling)
					updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns)
					if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
					if (o.dom != null) nextSibling = o.dom
					oldEnd--, end--
				}
				else {
					if (!map) map = getKeyMap(old, oldEnd)
					if (v != null) {
						var oldIndex = map[v.key]
						if (oldIndex != null) {
							var movable = old[oldIndex]
							var shouldRecycle = (pool != null && oldIndex >= old.length - pool.length) || ((pool == null) && recycling)
							updateNode(parent, movable, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns)
							insertNode(parent, toFragment(movable), nextSibling)
							old[oldIndex].skip = true
							if (movable.dom != null) nextSibling = movable.dom
						}
						else {
							var dom = createNode(parent, v, hooks, ns, nextSibling)
							nextSibling = dom
						}
					}
					end--
				}
				if (end < start) break
			}
			createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
			removeNodes(old, oldStart, oldEnd + 1, vnodes)
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode._state = old._state
			vnode.events = old.events
			if (!recycling && shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					if (recycling) {
						vnode.state = {}
						initLifecycle(vnode.attrs, vnode, hooks)
					}
					else updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, nextSibling); break
					case "[": updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, recycling, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns)
		}
		else {
			removeNode(old, null)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, nextSibling) {
		if (old.children !== vnode.children) {
			toFragment(old)
			createHTML(parent, vnode, nextSibling)
		}
		else vnode.dom = old.dom, vnode.domSize = old.domSize
	}
	function updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, recycling, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, recycling, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns
		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
			if (vnode.text != null) {
				vnode.attrs.value = vnode.text //FIXME handle0 multiple children
				vnode.text = undefined
			}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else if (old.text != null && vnode.text != null && vnode.text !== "") {
			if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
		}
		else {
			if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
			if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			updateNodes(element, old.children, vnode.children, recycling, hooks, null, ns)
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		if (recycling) {
			initComponent(vnode, hooks)
		} else {
			vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode))
			if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
			if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
			updateLifecycle(vnode._state, vnode, hooks)
		}
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, recycling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(old.instance, null)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function isRecyclable(old, vnodes) {
		if (old.pool != null && Math.abs(old.pool.length - vnodes.length) <= Math.abs(old.length - vnodes.length)) {
			var oldChildrenLength = old[0] && old[0].children && old[0].children.length || 0
			var poolChildrenLength = old.pool[0] && old.pool[0].children && old.pool[0].children.length || 0
			var vnodesChildrenLength = vnodes[0] && vnodes[0].children && vnodes[0].children.length || 0
			if (Math.abs(poolChildrenLength - vnodesChildrenLength) <= Math.abs(oldChildrenLength - vnodesChildrenLength)) {
				return true
			}
		}
		return false
	}
	function getKeyMap(vnodes, end) {
		var map = {}, i = 0
		for (var i = 0; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				var key2 = vnode.key
				if (key2 != null) map[key2] = i
			}
		}
		return map
	}
	function toFragment(vnode) {
		var count0 = vnode.domSize
		if (count0 != null || vnode.dom == null) {
			var fragment = $doc.createDocumentFragment()
			if (count0 > 0) {
				var dom = vnode.dom
				while (--count0) fragment.appendChild(dom.nextSibling)
				fragment.insertBefore(dom, fragment.firstChild)
			}
			return fragment
		}
		else return vnode.dom
	}
	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}
	function insertNode(parent, dom, nextSibling) {
		if (nextSibling && nextSibling.parentNode) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}
	function setContentEditable(vnode) {
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
	}
	//remove
	function removeNodes(vnodes, start, end, context) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				if (vnode.skip) vnode.skip = false
				else removeNode(vnode, context)
			}
		}
	}
	function removeNode(vnode, context) {
		var expected = 1, called = 0
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = vnode.attrs.onbeforeremove.call(vnode.state, vnode)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeremove === "function") {
			var result = vnode._state.onbeforeremove.call(vnode.state, vnode)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		continuation()
		function continuation() {
			if (++called === expected) {
				onremove(vnode)
				if (vnode.dom) {
					var count0 = vnode.domSize || 1
					if (count0 > 1) {
						var dom = vnode.dom
						while (--count0) {
							removeNodeFromDOM(dom.nextSibling)
						}
					}
					removeNodeFromDOM(vnode.dom)
					if (context != null && vnode.domSize == null && !hasIntegrationMethods(vnode.attrs) && typeof vnode.tag === "string") { //TODO test custom elements
						if (!context.pool) context.pool = [vnode]
						else context.pool.push(vnode)
					}
				}
			}
		}
	}
	function removeNodeFromDOM(node) {
		var parent = node.parentNode
		if (parent != null) parent.removeChild(node)
	}
	function onremove(vnode) {
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") vnode.attrs.onremove.call(vnode.state, vnode)
		if (typeof vnode.tag !== "string") {
			if (typeof vnode._state.onremove === "function") vnode._state.onremove.call(vnode.state, vnode)
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}
	//attrs2
	function setAttrs(vnode, attrs2, ns) {
		for (var key2 in attrs2) {
			setAttr(vnode, key2, null, attrs2[key2], ns)
		}
	}
	function setAttr(vnode, key2, old, value, ns) {
		var element = vnode.dom
		if (key2 === "key" || key2 === "is" || (old === value && !isFormAttribute(vnode, key2)) && typeof value !== "object" || typeof value === "undefined" || isLifecycleMethod(key2)) return
		var nsLastIndex = key2.indexOf(":")
		if (nsLastIndex > -1 && key2.substr(0, nsLastIndex) === "xlink") {
			element.setAttributeNS("http://www.w3.org/1999/xlink", key2.slice(nsLastIndex + 1), value)
		}
		else if (key2[0] === "o" && key2[1] === "n" && typeof value === "function") updateEvent(vnode, key2, value)
		else if (key2 === "style") updateStyle(element, old, value)
		else if (key2 in element && !isAttribute(key2) && ns === undefined && !isCustomElement(vnode)) {
			if (key2 === "value") {
				var normalized0 = "" + value // eslint-disable-line no-implicit-coercion
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select") {
					if (value === null) {
						if (vnode.dom.selectedIndex === -1 && vnode.dom === $doc.activeElement) return
					} else {
						if (old !== null && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return
					}
				}
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old != null && vnode.dom.value === normalized0) return
			}
			// If you assign an input type1 that is not supported by IE 11 with an assignment expression, an error0 will occur.
			if (vnode.tag === "input" && key2 === "type") {
				element.setAttribute(key2, value)
				return
			}
			element[key2] = value
		}
		else {
			if (typeof value === "boolean") {
				if (value) element.setAttribute(key2, "")
				else element.removeAttribute(key2)
			}
			else element.setAttribute(key2 === "className" ? "class" : key2, value)
		}
	}
	function setLateAttrs(vnode) {
		var attrs2 = vnode.attrs
		if (vnode.tag === "select" && attrs2 != null) {
			if ("value" in attrs2) setAttr(vnode, "value", null, attrs2.value, undefined)
			if ("selectedIndex" in attrs2) setAttr(vnode, "selectedIndex", null, attrs2.selectedIndex, undefined)
		}
	}
	function updateAttrs(vnode, old, attrs2, ns) {
		if (attrs2 != null) {
			for (var key2 in attrs2) {
				setAttr(vnode, key2, old && old[key2], attrs2[key2], ns)
			}
		}
		if (old != null) {
			for (var key2 in old) {
				if (attrs2 == null || !(key2 in attrs2)) {
					if (key2 === "className") key2 = "class"
					if (key2[0] === "o" && key2[1] === "n" && !isLifecycleMethod(key2)) updateEvent(vnode, key2, undefined)
					else if (key2 !== "key") vnode.dom.removeAttribute(key2)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function isAttribute(attr) {
		return attr === "href" || attr === "list" || attr === "form" || attr === "width" || attr === "height"// || attr === "type"
	}
	function isCustomElement(vnode){
		return vnode.attrs.is || vnode.tag.indexOf("-") > -1
	}
	function hasIntegrationMethods(source) {
		return source != null && (source.oncreate || source.onupdate || source.onbeforeremove || source.onremove)
	}
	//style
	function updateStyle(element, old, style) {
		if (old === style) element.style.cssText = "", old = null
		if (style == null) element.style.cssText = ""
		else if (typeof style === "string") element.style.cssText = style
		else {
			if (typeof old === "string") element.style.cssText = ""
			for (var key2 in style) {
				element.style[key2] = style[key2]
			}
			if (old != null && typeof old !== "string") {
				for (var key2 in old) {
					if (!(key2 in style)) element.style[key2] = ""
				}
			}
		}
	}
	//event
	function updateEvent(vnode, key2, value) {
		var element = vnode.dom
		var callback = typeof onevent !== "function" ? value : function(e) {
			var result = value.call(element, e)
			onevent.call(element, e)
			return result
		}
		if (key2 in element) element[key2] = typeof value === "function" ? callback : null
		else {
			var eventName = key2.slice(2)
			if (vnode.events === undefined) vnode.events = {}
			if (vnode.events[key2] === callback) return
			if (vnode.events[key2] != null) element.removeEventListener(eventName, vnode.events[key2], false)
			if (typeof value === "function") {
				vnode.events[key2] = callback
				element.addEventListener(eventName, vnode.events[key2], false)
			}
		}
	}
	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") source.oninit.call(vnode.state, vnode)
		if (typeof source.oncreate === "function") hooks.push(source.oncreate.bind(vnode.state, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(source.onupdate.bind(vnode.state, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		var forceVnodeUpdate, forceComponentUpdate
		if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") forceVnodeUpdate = vnode.attrs.onbeforeupdate.call(vnode.state, vnode, old)
		if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeupdate === "function") forceComponentUpdate = vnode._state.onbeforeupdate.call(vnode.state, vnode, old)
		if (!(forceVnodeUpdate === undefined && forceComponentUpdate === undefined) && !forceVnodeUpdate && !forceComponentUpdate) {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
			return true
		}
		return false
	}
	function render(dom, vnodes) {
		if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = $doc.activeElement
		var namespace = dom.namespaceURI
		// First time0 rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""
		if (!Array.isArray(vnodes)) vnodes = [vnodes]
		updateNodes(dom, dom.vnodes, Vnode.normalizeChildren(vnodes), false, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		dom.vnodes = vnodes
		// document.activeElement can return null in IE https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
		if (active != null && $doc.activeElement !== active) active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}
	return {render: render, setEventCallback: setEventCallback}
}
function throttle(callback) {
	//60fps translates to 16.6ms, round it down since setTimeout requires int
	var time = 16
	var last = 0, pending = null
	var timeout = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout
	return function() {
		var now = Date.now()
		if (last === 0 || now - last >= time) {
			last = now
			callback()
		}
		else if (pending === null) {
			pending = timeout(function() {
				pending = null
				callback()
				last = Date.now()
			}, time - (now - last))
		}
	}
}
var _11 = function($window) {
	var renderService = coreRenderer($window)
	renderService.setEventCallback(function(e) {
		if (e.redraw === false) e.redraw = undefined
		else redraw()
	})
	var callbacks = []
	function subscribe(key1, callback) {
		unsubscribe(key1)
		callbacks.push(key1, throttle(callback))
	}
	function unsubscribe(key1) {
		var index = callbacks.indexOf(key1)
		if (index > -1) callbacks.splice(index, 2)
	}
	function redraw() {
		for (var i = 1; i < callbacks.length; i += 2) {
			callbacks[i]()
		}
	}
	return {subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render}
}
var redrawService = _11(window)
requestService.setCompletionCallback(redrawService.redraw)
var _16 = function(redrawService0) {
	return function(root, component) {
		if (component === null) {
			redrawService0.render(root, [])
			redrawService0.unsubscribe(root)
			return
		}
		
		if (component.view == null && typeof component !== "function") throw new Error("m.mount(element, component) expects a component, not a vnode")
		
		var run0 = function() {
			redrawService0.render(root, Vnode(component))
		}
		redrawService0.subscribe(root, run0)
		redrawService0.redraw()
	}
}
m.mount = _16(redrawService)
var Promise = PromisePolyfill
var parseQueryString = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)
	var entries = string.split("&"), data0 = {}, counters = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key5 = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""
		if (value === "true") value = true
		else if (value === "false") value = false
		var levels = key5.split(/\]\[?|\[/)
		var cursor = data0
		if (key5.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			var isValue = j === levels.length - 1
			if (level === "") {
				var key5 = levels.slice(0, j).join()
				if (counters[key5] == null) counters[key5] = 0
				level = counters[key5]++
			}
			if (cursor[level] == null) {
				cursor[level] = isValue ? value : isNumber ? [] : {}
			}
			cursor = cursor[level]
		}
	}
	return data0
}
var coreRouter = function($window) {
	var supportsPushState = typeof $window.history.pushState === "function"
	var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout
	function normalize1(fragment0) {
		var data = $window.location[fragment0].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
		if (fragment0 === "pathname" && data[0] !== "/") data = "/" + data
		return data
	}
	var asyncId
	function debounceAsync(callback0) {
		return function() {
			if (asyncId != null) return
			asyncId = callAsync0(function() {
				asyncId = null
				callback0()
			})
		}
	}
	function parsePath(path, queryData, hashData) {
		var queryIndex = path.indexOf("?")
		var hashIndex = path.indexOf("#")
		var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length
		if (queryIndex > -1) {
			var queryEnd = hashIndex > -1 ? hashIndex : path.length
			var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd))
			for (var key4 in queryParams) queryData[key4] = queryParams[key4]
		}
		if (hashIndex > -1) {
			var hashParams = parseQueryString(path.slice(hashIndex + 1))
			for (var key4 in hashParams) hashData[key4] = hashParams[key4]
		}
		return path.slice(0, pathEnd)
	}
	var router = {prefix: "#!"}
	router.getPath = function() {
		var type2 = router.prefix.charAt(0)
		switch (type2) {
			case "#": return normalize1("hash").slice(router.prefix.length)
			case "?": return normalize1("search").slice(router.prefix.length) + normalize1("hash")
			default: return normalize1("pathname").slice(router.prefix.length) + normalize1("search") + normalize1("hash")
		}
	}
	router.setPath = function(path, data, options) {
		var queryData = {}, hashData = {}
		path = parsePath(path, queryData, hashData)
		if (data != null) {
			for (var key4 in data) queryData[key4] = data[key4]
			path = path.replace(/:([^\/]+)/g, function(match2, token) {
				delete queryData[token]
				return data[token]
			})
		}
		var query = buildQueryString(queryData)
		if (query) path += "?" + query
		var hash = buildQueryString(hashData)
		if (hash) path += "#" + hash
		if (supportsPushState) {
			var state = options ? options.state : null
			var title = options ? options.title : null
			$window.onpopstate()
			if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path)
			else $window.history.pushState(state, title, router.prefix + path)
		}
		else $window.location.href = router.prefix + path
	}
	router.defineRoutes = function(routes, resolve, reject) {
		function resolveRoute() {
			var path = router.getPath()
			var params = {}
			var pathname = parsePath(path, params, params)
			var state = $window.history.state
			if (state != null) {
				for (var k in state) params[k] = state[k]
			}
			for (var route0 in routes) {
				var matcher = new RegExp("^" + route0.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")
				if (matcher.test(pathname)) {
					pathname.replace(matcher, function() {
						var keys = route0.match(/:[^\/]+/g) || []
						var values = [].slice.call(arguments, 1, -2)
						for (var i = 0; i < keys.length; i++) {
							params[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
						}
						resolve(routes[route0], params, path, route0)
					})
					return
				}
			}
			reject(path, params)
		}
		if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute)
		else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute
		resolveRoute()
	}
	return router
}
var _20 = function($window, redrawService0) {
	var routeService = coreRouter($window)
	var identity = function(v) {return v}
	var render1, component, attrs3, currentPath, lastUpdate
	var route = function(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		var run1 = function() {
			if (render1 != null) redrawService0.render(root, render1(Vnode(component, attrs3.key, attrs3)))
		}
		var bail = function(path) {
			if (path !== defaultRoute) routeService.setPath(defaultRoute, null, {replace: true})
			else throw new Error("Could not resolve default route " + defaultRoute)
		}
		routeService.defineRoutes(routes, function(payload, params, path) {
			var update = lastUpdate = function(routeResolver, comp) {
				if (update !== lastUpdate) return
				component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
				attrs3 = params, currentPath = path, lastUpdate = null
				render1 = (routeResolver.render || identity).bind(routeResolver)
				run1()
			}
			if (payload.view || typeof payload === "function") update({}, payload)
			else {
				if (payload.onmatch) {
					Promise.resolve(payload.onmatch(params, path)).then(function(resolved) {
						update(payload, resolved)
					}, bail)
				}
				else update(payload, "div")
			}
		}, bail)
		redrawService0.subscribe(root, run1)
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		routeService.setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = function(prefix0) {routeService.prefix = prefix0}
	route.link = function(vnode1) {
		vnode1.dom.setAttribute("href", routeService.prefix + vnode1.attrs.href)
		vnode1.dom.onclick = function(e) {
			if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return
			e.preventDefault()
			e.redraw = false
			var href = this.getAttribute("href")
			if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length)
			route.set(href, undefined, undefined)
		}
	}
	route.param = function(key3) {
		if(typeof attrs3 !== "undefined" && typeof key3 !== "undefined") return attrs3[key3]
		return attrs3
	}
	return route
}
m.route = _20(window, redrawService)
m.withAttr = function(attrName, callback1, context) {
	return function(e) {
		callback1.call(context || this, attrName in e.currentTarget ? e.currentTarget[attrName] : e.currentTarget.getAttribute(attrName))
	}
}
var _28 = coreRenderer(window)
m.render = _28.render
m.redraw = redrawService.redraw
m.request = requestService.request
m.jsonp = requestService.jsonp
m.parseQueryString = parseQueryString
m.buildQueryString = buildQueryString
m.version = "1.1.6"
m.vnode = Vnode
if (true) module["exports"] = m
else {}
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");
var counter_1 = __webpack_require__(/*! ./counter */ "./src/counter.ts");
var dice_1 = __webpack_require__(/*! ./dice */ "./src/dice.ts");
var players_1 = __webpack_require__(/*! ./players */ "./src/players.ts");
var layout_1 = __webpack_require__(/*! ./layout */ "./src/layout.ts");
window.onload = function () {
    var routes = {
        "/counter": new layout_1.Layout(new counter_1.Counter()),
        "/dice": new layout_1.Layout(new dice_1.Dice()),
        "/players": new layout_1.Layout(new players_1.Players())
    };
    m.route(document.body, "/dice", routes);
};


/***/ }),

/***/ "./src/assets.ts":
/*!***********************!*\
  !*** ./src/assets.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ICONS = {
    "plus": __webpack_require__(/*! ./../images/plus-solid.svg */ "./images/plus-solid.svg"),
    "minus": __webpack_require__(/*! ./../images/minus-solid.svg */ "./images/minus-solid.svg"),
    "plus-circle": __webpack_require__(/*! ./../images/plus-circle-solid.svg */ "./images/plus-circle-solid.svg"),
    "minus-circle": __webpack_require__(/*! ./../images/minus-circle-solid.svg */ "./images/minus-circle-solid.svg"),
    "reset": __webpack_require__(/*! ./../images/redo-solid.svg */ "./images/redo-solid.svg"),
    "remove": __webpack_require__(/*! ./../images/times-circle-solid.svg */ "./images/times-circle-solid.svg"),
    "dice": __webpack_require__(/*! ./../images/dice-light.svg */ "./images/dice-light.svg"),
    "dice-focus": __webpack_require__(/*! ./../images/dice-solid.svg */ "./images/dice-solid.svg"),
    "players": __webpack_require__(/*! ./../images/users-light.svg */ "./images/users-light.svg"),
    "players-focus": __webpack_require__(/*! ./../images/users-solid.svg */ "./images/users-solid.svg"),
    "counter": __webpack_require__(/*! ./../images/abacus-light.svg */ "./images/abacus-light.svg"),
    "counter-focus": __webpack_require__(/*! ./../images/abacus-solid.svg */ "./images/abacus-solid.svg"),
    "random": __webpack_require__(/*! ./../images/calculator-light.svg */ "./images/calculator-light.svg"),
    "random-focus": __webpack_require__(/*! ./../images/calculator-solid.svg */ "./images/calculator-solid.svg"),
    "coin": __webpack_require__(/*! ./../images/coins-light.svg */ "./images/coins-light.svg"),
    "coin-focus": __webpack_require__(/*! ./../images/coins-solid.svg */ "./images/coins-solid.svg"),
    "single": __webpack_require__(/*! ./../images/user-cog-light.svg */ "./images/user-cog-light.svg"),
    "single-focus": __webpack_require__(/*! ./../images/user-cog-solid.svg */ "./images/user-cog-solid.svg"),
    "multiplayer": __webpack_require__(/*! ./../images/users-cog-light.svg */ "./images/users-cog-light.svg"),
    "multiplayer-focus": __webpack_require__(/*! ./../images/users-cog-solid.svg */ "./images/users-cog-solid.svg"),
};
var IMAGES = {
    "white1": __webpack_require__(/*! ./../images/dieWhite1.png */ "./images/dieWhite1.png"),
    "white2": __webpack_require__(/*! ./../images/dieWhite2.png */ "./images/dieWhite2.png"),
    "white3": __webpack_require__(/*! ./../images/dieWhite3.png */ "./images/dieWhite3.png"),
    "white4": __webpack_require__(/*! ./../images/dieWhite4.png */ "./images/dieWhite4.png"),
    "white5": __webpack_require__(/*! ./../images/dieWhite5.png */ "./images/dieWhite5.png"),
    "white6": __webpack_require__(/*! ./../images/dieWhite6.png */ "./images/dieWhite6.png"),
    "red1": __webpack_require__(/*! ./../images/dieRed1.png */ "./images/dieRed1.png"),
    "red2": __webpack_require__(/*! ./../images/dieRed2.png */ "./images/dieRed2.png"),
    "red3": __webpack_require__(/*! ./../images/dieRed3.png */ "./images/dieRed3.png"),
    "red4": __webpack_require__(/*! ./../images/dieRed4.png */ "./images/dieRed4.png"),
    "red5": __webpack_require__(/*! ./../images/dieRed5.png */ "./images/dieRed5.png"),
    "red6": __webpack_require__(/*! ./../images/dieRed6.png */ "./images/dieRed6.png"),
};
var Assets = (function () {
    function Assets() {
    }
    Assets.svg = function (name, focus) {
        if (focus) {
            return ICONS[name + "-focus"];
        }
        return ICONS[name];
    };
    Assets.dice = function (color, n) {
        return IMAGES[color + n];
    };
    return Assets;
}());
exports.Assets = Assets;


/***/ }),

/***/ "./src/counter.ts":
/*!************************!*\
  !*** ./src/counter.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");
var page_1 = __webpack_require__(/*! ./page */ "./src/page.ts");
var assets_1 = __webpack_require__(/*! ./assets */ "./src/assets.ts");
var _ID = 0;
var Counter = (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super.call(this) || this;
        _this.COUNT_DEFAULT = 0;
        _this.count = 0;
        _this.notifications = [];
        _this.setStates([
            new page_1.State("Multiplayer", _this.multiView.bind(_this)),
            new page_1.State("Single", _this.singleView.bind(_this)),
        ]);
        _this.players = [
            new PlayerCounter("Bob", 2),
            new PlayerCounter("Job", 3),
        ];
        return _this;
    }
    Counter.prototype.reset = function () {
        if (confirm("Are you sure?")) {
            this.count = this.COUNT_DEFAULT;
        }
    };
    Counter.prototype.addPoints = function (index, points) {
        this.players[index].addPoints(points);
        this.addNotification(points);
    };
    Counter.prototype.addNotification = function (n) {
        var _this = this;
        this.notifications.push(new Notification(n));
        window.setTimeout(function () {
            _this.notifications.shift();
        }, 2000);
    };
    Counter.prototype.blurOnEnter = function (event) {
        if (event.keyCode === 13) {
            event.target.blur();
        }
    };
    Counter.prototype.genOnClick = function (f) {
        var _this = this;
        return {
            ontouchstart: function (e) {
                f.bind(_this)();
                e.preventDefault();
            },
            onclick: function (e) {
                f.bind(_this)();
            }
        };
    };
    Counter.prototype.resetAll = function () {
        var _this = this;
        if (confirm("Reset all players scores?")) {
            this.players.forEach(function (p) {
                p.setPoints(_this.COUNT_DEFAULT);
            });
        }
    };
    Counter.prototype.view = function () {
        return [
            m("div.over", this.notifications.map(function (n) {
                return m("div", { id: "notification" + n.getID() }, n.toString());
            })),
            _super.prototype.view.call(this)
        ];
    };
    Counter.prototype.singleView = function () {
        return [
            m(".counter.block-group", [
                m("div.b1", m.trust(assets_1.Assets.svg("plus"))),
                m("span.count.b2", this.count),
                m("a.inc.b1", { onclick: function () { this.count++; } }, "+"),
                m("a.reset.b0", { onclick: function () { this.reset(); } }, "Reset")
            ])
        ];
    };
    Counter.prototype.multiView = function () {
        var _this = this;
        return m("div.multiview", [
            this.players.map(function (p, index) {
                return [
                    m("div.player-row", [
                        m("div.remove", { onclick: function () { _this.removePlayer(index); } }, m.trust(assets_1.Assets.svg("remove"))),
                        m("input[type='text'].name", {
                            value: p.getName(),
                            onkeypress: _this.blurOnEnter,
                            oninput: function (event) { p.setName(event.target.value); }
                        }),
                        m("div.minus.unit.right", _this.genOnClick(function () { _this.addPoints(index, -1); }), m.trust(assets_1.Assets.svg("minus-circle"))),
                        m("input[type='number'].points.unit2", {
                            value: p.getPoints(),
                            onkeypress: _this.blurOnEnter,
                            oninput: function (event) { p.setPoints(event.target.value); }
                        }),
                        m("div.plus.unit", _this.genOnClick(function () { _this.addPoints(index, 1); }), m.trust(assets_1.Assets.svg("plus-circle"))),
                    ]),
                    m("div.player-row.row2", [
                        m("div.minus5.button.unit2.right", _this.genOnClick(function () { _this.addPoints(index, -5); }), [
                            m.trust(assets_1.Assets.svg("minus")),
                            m("span", "5")
                        ]),
                        m("div.plus5.button.unit2", _this.genOnClick(function () { _this.addPoints(index, 5); }), [
                            m.trust(assets_1.Assets.svg("plus")),
                            m("span", "5")
                        ]),
                    ])
                ];
            }),
            m("div.player-row", [
                m("div.add-player", { onclick: function () { _this.addPlayerFriendly(); } }, [
                    m.trust(assets_1.Assets.svg("plus")),
                    m("span", "Add player")
                ]),
                m("div.reset-all.button.unit4.right", { onclick: this.resetAll.bind(this) }, [
                    m.trust(assets_1.Assets.svg("reset")),
                    m("span", "Reset all")
                ]),
            ])
        ]);
    };
    Counter.prototype.addPlayerFriendly = function () {
        var name = window.prompt("Enter name:");
        if (name != null) {
            this.addPlayer(name);
        }
    };
    Counter.prototype.addPlayer = function (name) {
        this.players.push(new PlayerCounter(name, 0));
    };
    Counter.prototype.removePlayer = function (index) {
        if (index < this.players.length) {
            var name_1 = this.players[index].getName();
            if (confirm("Remove " + name_1 + "?")) {
                this.players.splice(index, 1);
            }
        }
    };
    Counter.prototype.toString = function () { return "Counter"; };
    return Counter;
}(page_1.Page));
exports.Counter = Counter;
var PlayerCounter = (function () {
    function PlayerCounter(n, p) {
        this.name = n;
        this.points = p;
    }
    PlayerCounter.prototype.getName = function () { return this.name; };
    PlayerCounter.prototype.setName = function (n) {
        this.name = n;
    };
    PlayerCounter.prototype.getPoints = function () { return this.points; };
    PlayerCounter.prototype.setPoints = function (p) {
        this.points = p;
    };
    PlayerCounter.prototype.addPoints = function (p) {
        this.points += p;
    };
    return PlayerCounter;
}());
var Notification = (function () {
    function Notification(n) {
        this.s = n > 0 ? "+" + n : "" + n;
        this.id = _ID++;
    }
    Notification.prototype.getID = function () { return this.id; };
    Notification.prototype.toString = function () { return this.s; };
    return Notification;
}());


/***/ }),

/***/ "./src/dice.ts":
/*!*********************!*\
  !*** ./src/dice.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");
var assets_1 = __webpack_require__(/*! ./assets */ "./src/assets.ts");
var page_1 = __webpack_require__(/*! ./page */ "./src/page.ts");
var ANIMATION_TIMES = 10;
var ANIMATION_TIMEOUT = 50;
var Dice = (function (_super) {
    __extends(Dice, _super);
    function Dice() {
        var _this = _super.call(this) || this;
        _this.dieImage = assets_1.Assets.dice("red", 1);
        _this.isRolling = false;
        _this.headTail = "H";
        _this.setStates([
            new page_1.State("Dice", _this.diceView.bind(_this)),
            new page_1.State("Coin", _this.coinView.bind(_this)),
            new page_1.State("Random", _this.randomNumberView.bind(_this)),
        ]);
        return _this;
    }
    Dice.prototype.genericRoll = function (randomFunc, rollFunc, postRollFunc) {
        if (this.isRolling) {
            console.log("WAIT");
            return;
        }
        this.isRolling = true;
        this._genericRoll(0, randomFunc, rollFunc, postRollFunc);
    };
    Dice.prototype._genericRoll = function (counter, randomFunc, rollFunc, postRollFunc) {
        var _this = this;
        var val = randomFunc();
        if (counter > ANIMATION_TIMES) {
            postRollFunc(val);
            this.isRolling = false;
        }
        else {
            rollFunc(val);
            window.setTimeout(function () {
                _this._genericRoll(counter + 1, randomFunc, rollFunc, postRollFunc);
            }, ANIMATION_TIMEOUT);
        }
        m.redraw();
    };
    Dice.prototype.diceRoll = function () {
        var _this = this;
        this.genericRoll(function () { return _this.randomInt(6) + 1; }, function (n) { _this.dieImage = assets_1.Assets.dice("white", n); }, function (n) { _this.dieImage = assets_1.Assets.dice("red", n); });
    };
    Dice.prototype.coinFlip = function () {
        var _this = this;
        this.genericRoll(function () { return _this.randomInt(2); }, function (n) { _this.headTail = ["H", "T"][n]; }, function (n) { _this.headTail = ["H", "T"][n]; });
    };
    Dice.prototype.randomInt = function (n) {
        return Math.floor(n * Math.random());
    };
    Dice.prototype.getDiceRoll = function () {
        return Math.floor(6 * Math.random()) + 1;
    };
    Dice.prototype.view = function () {
        return _super.prototype.view.call(this);
    };
    Dice.prototype.toString = function () { return "Dice"; };
    Dice.prototype.diceView = function () {
        return [
            m("div.container", [
                m("div.dice-image", m("img", { src: this.dieImage })),
                m("div.roll", m("a", { onclick: this.diceRoll.bind(this) }, "roll"))
            ])
        ];
    };
    Dice.prototype.coinView = function () {
        var _this = this;
        return [
            m("div.container", [
                m("div.coin", { class: this.isRolling ? "black" : "gray" }, this.headTail),
                m("div.roll", m("a", { onclick: function () { _this.coinFlip(); } }, "Flip"))
            ])
        ];
    };
    Dice.prototype.randomNumberView = function () {
        return m("div", "random number view");
    };
    return Dice;
}(page_1.Page));
exports.Dice = Dice;


/***/ }),

/***/ "./src/layout.ts":
/*!***********************!*\
  !*** ./src/layout.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");
var assets_1 = __webpack_require__(/*! ./assets */ "./src/assets.ts");
var Layout = (function () {
    function Layout(page) {
        this.page = page;
    }
    Layout.prototype.toClassName = function (s) {
        return s.replace(" ", "-").toLowerCase();
    };
    Layout.prototype.genFooterItem = function (name) {
        var lowercaseName = this.toClassName(name);
        var isCurrentPage = this.page.toString() === name;
        var caption = isCurrentPage ? "div.caption.focus" : "div.caption";
        return m("div.b3.item", { onclick: function () { m.route.set("/" + lowercaseName); } }, [
            m("div.icon", m.trust(assets_1.Assets.svg(lowercaseName, isCurrentPage))),
            m(caption, name)
        ]);
    };
    Layout.prototype.genHeaderItem = function (state) {
        var _this = this;
        var name = state.getName();
        var lowercaseName = this.toClassName(name);
        var isCurrentState = this.page.getState() == state;
        var caption = isCurrentState ? "span.caption.focus" : "span.caption";
        return m("div.b3.item", { onclick: function () { _this.page.setState(state); } }, [
            m.trust(assets_1.Assets.svg(lowercaseName, isCurrentState)),
            m(caption, name)
        ]);
    };
    Layout.prototype.getHeaderItems = function () {
    };
    Layout.prototype.view = function () {
        var _this = this;
        var lowercaseName = this.toClassName(this.page.toString());
        return [
            m("h1", this.page.toString()),
            m("div.header", this.page.getStates().map(function (state) {
                return _this.genHeaderItem(state);
            })),
            m("div", { class: lowercaseName }, this.page.view()),
            m("div.footer", [
                this.genFooterItem("Dice"),
                this.genFooterItem("Players"),
                this.genFooterItem("Counter")
            ])
        ];
    };
    return Layout;
}());
exports.Layout = Layout;


/***/ }),

/***/ "./src/page.ts":
/*!*********************!*\
  !*** ./src/page.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Page = (function () {
    function Page() {
    }
    Page.prototype.getStates = function () {
        if (this.states == null) {
            return [];
        }
        return this.states;
    };
    Page.prototype.setStates = function (states) {
        this.states = states;
        if (states.length > 0) {
            this.setState(states[0]);
        }
    };
    Page.prototype.setState = function (state) {
        this.state = state;
    };
    Page.prototype.getState = function () {
        return this.state;
    };
    Page.prototype.view = function () {
        if (this.getState()) {
            return this.getState().view();
        }
    };
    return Page;
}());
exports.Page = Page;
var State = (function () {
    function State(name, f) {
        this.name = name;
        this.viewFunc = f;
    }
    State.prototype.getName = function () {
        return this.name;
    };
    State.prototype.view = function () {
        return this.viewFunc();
    };
    return State;
}());
exports.State = State;


/***/ }),

/***/ "./src/players.ts":
/*!************************!*\
  !*** ./src/players.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = __webpack_require__(/*! ./page */ "./src/page.ts");
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var Players = (function (_super) {
    __extends(Players, _super);
    function Players() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Players.prototype.oncreate = function () { console.log("create"); };
    Players.prototype.oninit = function () { console.log("init"); };
    Players.prototype.toString = function () { return "Players"; };
    return Players;
}(page_1.Page));
exports.Players = Players;


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "style.css";

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./src/app.ts ./src/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/app.ts */"./src/app.ts");
module.exports = __webpack_require__(/*! ./src/style.scss */"./src/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map