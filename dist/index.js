/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: \"Outfit\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n}\n\n.content {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  background-color: #00a1ff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  padding: 0.5rem 1rem;\n}\n\n.logo {\n  cursor: default;\n}\n\n.add-todo {\n  color: #00a1ff;\n  font-size: 1.5rem;\n  font-weight: 700;\n  background-color: white;\n  height: 2rem;\n  width: 2rem;\n  border: 0.05rem solid #00000038;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-todo:hover {\n  background-color: #00a1ff;\n  color: white;\n}\n\n.main {\n  height: 100%;\n  display: flex;\n  gap: 0.05rem;\n  background-color: #00000038;\n  border-top: #00000038 solid 0.05rem;\n}\n\n.list {\n  background-color: #dfdfdf;\n  width: 15rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todos {\n  background-color: white;\n  flex: 1;\n}\n\n/*Modal CSS*/\n\n.modal-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(2px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.modal-bg-active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.modal-div {\n  padding: 1rem;\n  background-color: white;\n  width: 50%;\n  height: 50%;\n  border: 0.2rem solid #00a1ff;\n  border-radius: 0.5rem;\n}\n\n.modal-div form {\n  display: flex;\n  gap: 1rem;\n}\n\n.form-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.form-header h2 {\n  color: #868686;\n}\n\n.priority label {\n  margin-right: 1rem;\n}\n\n#close-btn {\n  font-size: 2rem;\n  color: #868686;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n.btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n#reset-btn,\n#submit-btn {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  border: 0.2rem solid #00a1ff;\n  border-radius: 0.5rem;\n  font-weight: bold;\n}\n\n#reset-btn {\n  color: #00a1ff;\n  background-color: white;\n}\n#reset-btn:hover {\n  color: white;\n  background-color: #00a1ff;\n}\n\n#submit-btn {\n  color: white;\n  background-color: #00a1ff;\n}\n\n#submit-btn:hover {\n  color: #00a1ff;\n  background-color: white;\n}\n\n/* Todos list items CSS */\n\n.todos-ul {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n\n.todos-ul li {\n  padding: 0.2rem;\n  list-style-type: none;\n  display: flex;\n  border: 0.1rem solid #868686;\n}\n\n.todos-ul .urgent {\n  border-left: 0.2rem solid red;\n}\n\n.todos-ul .normal {\n  border-left: 0.2rem solid green;\n}\n\n.todo-title {\n  margin-right: auto;\n}\n\n.todo-date {\n  margin-right: 1rem;\n}\n\n.todo-delete {\n  padding-right: 0.5rem;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #868686;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n/* lists CSS */\n\n.todos-lists {\n  padding: 0 1.5rem;\n  padding-top: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.todos-lists .active {\n  font-weight: bold;\n}\n\n/* lists button CSS */\n\n.add-folder {\n  all: unset;\n  color: black;\n  cursor: pointer;\n  padding: 0.5rem;\n  margin: 1rem;\n  align-self: flex-end;\n  border: 0.15rem solid black;\n}\n\n.add-folder:hover {\n  outline: #000000 0.1rem solid;\n}\n\n.add-folder-input {\n  margin: 0 1.5rem;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.active {\n  visibility: visible;\n  opacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,iCAAiC;EACjC,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,+BAA+B;EAC/B,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,2BAA2B;EAC3B,mCAAmC;AACrC;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,OAAO;AACT;;AAEA,YAAY;;AAEZ;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,0BAA0B;EAC1B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;EACV,WAAW;EACX,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,SAAS;AACX;;AAEA;;EAEE,oBAAoB;EACpB,eAAe;EACf,4BAA4B;EAC5B,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,uBAAuB;AACzB;;AAEA,yBAAyB;;AAEzB;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA,cAAc;;AAEd;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,qBAAqB;;AAErB;EACE,UAAU;EACV,YAAY;EACZ,eAAe;EACf,eAAe;EACf,YAAY;EACZ,oBAAoB;EACpB,2BAA2B;AAC7B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;700;900&display=swap\");\n\n* {\n  font-family: \"Outfit\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n}\n\n.content {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  background-color: #00a1ff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  padding: 0.5rem 1rem;\n}\n\n.logo {\n  cursor: default;\n}\n\n.add-todo {\n  color: #00a1ff;\n  font-size: 1.5rem;\n  font-weight: 700;\n  background-color: white;\n  height: 2rem;\n  width: 2rem;\n  border: 0.05rem solid #00000038;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-todo:hover {\n  background-color: #00a1ff;\n  color: white;\n}\n\n.main {\n  height: 100%;\n  display: flex;\n  gap: 0.05rem;\n  background-color: #00000038;\n  border-top: #00000038 solid 0.05rem;\n}\n\n.list {\n  background-color: #dfdfdf;\n  width: 15rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todos {\n  background-color: white;\n  flex: 1;\n}\n\n/*Modal CSS*/\n\n.modal-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(2px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.modal-bg-active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.modal-div {\n  padding: 1rem;\n  background-color: white;\n  width: 50%;\n  height: 50%;\n  border: 0.2rem solid #00a1ff;\n  border-radius: 0.5rem;\n}\n\n.modal-div form {\n  display: flex;\n  gap: 1rem;\n}\n\n.form-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.form-header h2 {\n  color: #868686;\n}\n\n.priority label {\n  margin-right: 1rem;\n}\n\n#close-btn {\n  font-size: 2rem;\n  color: #868686;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n.btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n#reset-btn,\n#submit-btn {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  border: 0.2rem solid #00a1ff;\n  border-radius: 0.5rem;\n  font-weight: bold;\n}\n\n#reset-btn {\n  color: #00a1ff;\n  background-color: white;\n}\n#reset-btn:hover {\n  color: white;\n  background-color: #00a1ff;\n}\n\n#submit-btn {\n  color: white;\n  background-color: #00a1ff;\n}\n\n#submit-btn:hover {\n  color: #00a1ff;\n  background-color: white;\n}\n\n/* Todos list items CSS */\n\n.todos-ul {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n\n.todos-ul li {\n  padding: 0.2rem;\n  list-style-type: none;\n  display: flex;\n  border: 0.1rem solid #868686;\n}\n\n.todos-ul .urgent {\n  border-left: 0.2rem solid red;\n}\n\n.todos-ul .normal {\n  border-left: 0.2rem solid green;\n}\n\n.todo-title {\n  margin-right: auto;\n}\n\n.todo-date {\n  margin-right: 1rem;\n}\n\n.todo-delete {\n  padding-right: 0.5rem;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #868686;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n/* lists CSS */\n\n.todos-lists {\n  padding: 0 1.5rem;\n  padding-top: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.todos-lists .active {\n  font-weight: bold;\n}\n\n/* lists button CSS */\n\n.add-folder {\n  all: unset;\n  color: black;\n  cursor: pointer;\n  padding: 0.5rem;\n  margin: 1rem;\n  align-self: flex-end;\n  border: 0.15rem solid black;\n}\n\n.add-folder:hover {\n  outline: #000000 0.1rem solid;\n}\n\n.add-folder-input {\n  margin: 0 1.5rem;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.active {\n  visibility: visible;\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Dom.js":
/*!*******************************!*\
  !*** ./src/components/Dom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic */ "./src/components/Logic.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ "./src/components/Todo.js");



const Dom = (() => {
  const modalBtns = () => {
    const openModalBtn = (() => {
      const btn = document.querySelector(".add-todo");
      btn.addEventListener("click", () => {
        const modal = document.querySelector(".modal-bg");
        modal.classList.add("modal-bg-active");

        const title = document.querySelector("#title").focus();
      });
    })();

    const closeModalBtn = (() => {
      const btn = document.querySelector("#close-btn");
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const modal = document.querySelector(".modal-bg");
        modal.classList.remove("modal-bg-active");
      });
    })();

    const submitTodoBtn = (() => {
      const btn = document.querySelector("#submit-btn");

      const submitTodo = (e) => {
        e.preventDefault();

        const title = document.querySelector("#title").value;
        const dueDate = document.querySelector("#date").value;
        const prio = document.querySelector('input[name="prio"]:checked').value;
        const folder = document.querySelector("#folders").value;

        const newTodo = _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].createTodo(title, new Date(dueDate), prio, folder);
        _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].todoArr.push(newTodo);

        const form = document.querySelector("form");
        form.reset();

        const modal = document.querySelector(".modal-bg");
        modal.classList.remove("modal-bg-active");

        _Logic__WEBPACK_IMPORTED_MODULE_0__["default"].displayTodo(newTodo);
      };

      btn.addEventListener("click", submitTodo);
    })();

    const addFolderBtn = (() => {
      const btn = document.querySelector(".add-folder");

      btn.addEventListener("click", () => {
        const field = document.querySelector(".add-folder-input");
        field.classList.toggle("active");
        field.setAttribute("required", "");
        field.focus();

        field.onkeydown = function (e) {
          if (e.keyCode == 13) {
            if (e.target.value === "") return;
            e.preventDefault();
            _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].lists.push({ text: e.target.value });

            _Logic__WEBPACK_IMPORTED_MODULE_0__["default"].clearLists();
            _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].lists.forEach(_Logic__WEBPACK_IMPORTED_MODULE_0__["default"].displayLists);
            filterTodos();
            _Logic__WEBPACK_IMPORTED_MODULE_0__["default"].updateLists();

            field.value = "";
            field.classList.toggle("active");
          }
        };
      });
    })();
  };

  const filterTodos = () => {
    const listItems = document.querySelectorAll(".todos-lists li");

    listItems.forEach((item) => {
      item.addEventListener("click", _Logic__WEBPACK_IMPORTED_MODULE_0__["default"].filterTodos);
    });
  };

  const deleteTodo = (todo) => {
    const todoLi = document.getElementById(todo.path[1].id);
    todoLi.remove();

    _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].todoArr = _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].todoArr.filter((task) => +task.id !== +todo.path[1].id);
  };

  return { modalBtns, deleteTodo, filterTodos };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);


/***/ }),

/***/ "./src/components/Logic.js":
/*!*********************************!*\
  !*** ./src/components/Logic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom */ "./src/components/Dom.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ "./src/components/Todo.js");



const Logic = (() => {
  const displayTodo = (todo) => {
    const todoUl = document.querySelector(".todos-ul");

    const todoItem = document.createElement("li");
    todoItem.setAttribute("id", todo.id);
    todo.priority === "urgent"
      ? todoItem.classList.add("urgent")
      : todoItem.classList.add("normal");

    const title = document.createElement("div");
    title.classList.add("todo-title");
    title.innerText = todo.title;
    todoItem.appendChild(title);

    const dueDate = document.createElement("div");
    dueDate.classList.add("todo-date");
    dueDate.innerText = todo.dueDate;
    todoItem.appendChild(dueDate);

    const deleteTodo = document.createElement("button");
    deleteTodo.classList.add("todo-delete");
    deleteTodo.innerText = `×`;
    deleteTodo.addEventListener("click", _Dom__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo);
    todoItem.appendChild(deleteTodo);

    todoUl.appendChild(todoItem);
  };

  const clearLists = () => {
    const children = document.querySelectorAll(".todos-lists li");
    children.forEach((child) => child.remove());
  };

  const displayLists = (list) => {
    const listsUl = document.querySelector(".todos-lists");
    const listItem = document.createElement("li");

    listItem.innerText = list.text;

    listItem.innerText === "All" ? listItem.classList.add("active") : "";

    listsUl.appendChild(listItem);
  };

  const clearTodos = () => {
    const children = document.querySelectorAll(".todos-ul li");
    children.forEach((child) => child.remove());
  };

  const clearBaldness = () => {
    const listItems = document.querySelectorAll(".todos-lists li");
    listItems.forEach((item) => item.classList.remove("active"));
  };

  const filterTodos = (list) => {
    clearTodos();
    clearBaldness();

    list.target.classList.add("active");
    if (list.target.innerText === "All") {
      return _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].todoArr.forEach(displayTodo);
    }

    if (list.target.innerText === "Today") {
      const todayTodos = _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].todoArr.filter((todo) => todo.today);
      return todayTodos.forEach(displayTodo);
    }

    const filtered = _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].todoArr.filter(
      (todo) => todo.folder === list.target.innerText
    );

    filtered.forEach(displayTodo);
  };

  const updateLists = () => {
    const formDiv = document.querySelector(".modal-form");
    const selectDiv = document.querySelector("#folders");

    if (selectDiv.firstChild) {
      selectDiv.innerHTML = "";
    }

    _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].lists.forEach((option) =>
      selectDiv.add(new Option(option.text, option.value, option.selected))
    );
    formDiv.insertBefore(selectDiv, formDiv.children[8]);
  };

  return {
    displayTodo,
    displayLists,
    filterTodos,
    clearTodos,
    clearLists,
    updateLists,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logic);


/***/ }),

/***/ "./src/components/Modals.js":
/*!**********************************!*\
  !*** ./src/components/Modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modals": () => (/* binding */ Modals)
/* harmony export */ });
/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic */ "./src/components/Logic.js");


const Modals = (() => {
  const addTodoModal = () => {
    const modalBG = document.createElement("div");
    modalBG.classList.add("modal-bg");

    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal-div");
    const formDiv = document.createElement("form");
    formDiv.classList.add("modal-form");
    modalDiv.appendChild(formDiv);
    formDiv.innerHTML = `<div class="form-header">
          <h2>Add Todo</h2>
          <button id="close-btn">&times;</button>
        </div>
        <label for="title">Task:</label>
        <input type="text" name="title" id="title" required/>
        <label for="date">Due date:</label>
        <input type="date" name="date" id="date" />
        <label for="prio">Priority:</label>
        <div class="priority">
          <input
            type="radio"
            id="normal"
            name="prio"
            value="normal"
            checked="checked"
          />
          <label for="">Normal</label>
          <input type="radio" id="urgent" name="prio" value="urgent" />
          <label for="">Urgent</label>
        </div>
        <label for="cars">Folder:</label>
        <select id="folders"></select> 
        <div class="btns">
          <button type="reset" id="reset-btn">Reset</button>
          <button type="submit" id="submit-btn">Add</button>
        </div>`;

    modalBG.appendChild(modalDiv);

    return modalBG;
  };

  return { addTodoModal };
})();


/***/ }),

/***/ "./src/components/Todo.js":
/*!********************************!*\
  !*** ./src/components/Todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");


const Todo = (() => {
  const createTodo = (title, dueDate, priority, folder) => {
    const id = Math.random();

    const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(dueDate);

    const formattedDate = dueDate.toDateString();

    return { title, dueDate: formattedDate, priority, folder, id, today };
  };

  const todoArr = [];

  const lists = [
    {
      text: "All",
      selected: true,
    },
    {
      text: "Today",
    },
    {
      text: "Folder 1",
    },
  ];

  const dummyTodo = createTodo(
    "Finish Todo List",
    new Date("04-12-2021"),
    "urgent",
    "Folder 1"
  );

  const dummyTodo2 = createTodo(
    "Finish Todo List 2",
    new Date("04-12-2021"),
    "urgent",
    "Folder 2"
  );

  todoArr.push(dummyTodo);
  todoArr.push(dummyTodo2);

  return { createTodo, todoArr, lists };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/components/UI.js":
/*!******************************!*\
  !*** ./src/components/UI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom */ "./src/components/Dom.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ "./src/components/Todo.js");
/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logic */ "./src/components/Logic.js");
/* harmony import */ var _Modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modals */ "./src/components/Modals.js");






const UI = (() => {
  const generateUI = () => {
    const body = document.querySelector("body");
    const content = document.createElement("div");
    content.classList.add("content");

    const header = (() => {
      const header = document.createElement("div");
      header.classList.add("header");

      const logo = document.createElement("h1");
      logo.classList.add("logo");
      logo.innerText = "Todo List";

      const addTodoBtn = document.createElement("button");
      addTodoBtn.classList.add("add-todo");
      addTodoBtn.innerText = "+";

      header.appendChild(logo);
      header.appendChild(addTodoBtn);

      return header;
    })();

    const main = (() => {
      const main = document.createElement("div");
      main.classList.add("main");

      const list = document.createElement("div");
      list.classList.add("list");

      const todos = document.createElement("div");
      todos.classList.add("todos");

      const todosUl = document.createElement("ul");
      todosUl.classList.add("todos-ul");

      const listsUl = document.createElement("ul");
      listsUl.classList.add("todos-lists");

      const btn = document.createElement("button");
      btn.classList.add("add-folder");
      btn.innerHTML = "Add Folder <b>+</b>";

      const folderForm = document.createElement("form");
      folderForm.setAttribute("type", "submit");
      const field = document.createElement("input");
      field.classList.add("add-folder-input");
      folderForm.appendChild(field);

      list.appendChild(btn);
      list.appendChild(listsUl);
      list.appendChild(folderForm);
      todos.appendChild(todosUl);
      main.appendChild(list);
      main.appendChild(todos);

      return main;
    })();

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(_Modals__WEBPACK_IMPORTED_MODULE_3__.Modals.addTodoModal());
    body.appendChild(content);
    _Dom__WEBPACK_IMPORTED_MODULE_0__["default"].modalBtns();
    _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].todoArr.forEach(_Logic__WEBPACK_IMPORTED_MODULE_2__["default"].displayTodo);
    _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].lists.forEach(_Logic__WEBPACK_IMPORTED_MODULE_2__["default"].displayLists);
    _Dom__WEBPACK_IMPORTED_MODULE_0__["default"].filterTodos();
    _Logic__WEBPACK_IMPORTED_MODULE_2__["default"].updateLists();
  };

  return { generateUI };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/UI */ "./src/components/UI.js");



window.onload = _components_UI__WEBPACK_IMPORTED_MODULE_1__["default"].generateUI();


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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-d71df3"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwrR0FBK0csSUFBSSxJQUFJLElBQUksSUFBSSxrQkFBa0I7QUFDako7QUFDQSw2Q0FBNkMsd0NBQXdDLGNBQWMsZUFBZSxHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQixHQUFHLGNBQWMsa0JBQWtCLGlCQUFpQixrQkFBa0IsMkJBQTJCLEdBQUcsYUFBYSw4QkFBOEIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsaUJBQWlCLHlCQUF5QixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsZUFBZSxtQkFBbUIsc0JBQXNCLHFCQUFxQiw0QkFBNEIsaUJBQWlCLGdCQUFnQixvQ0FBb0MsdUJBQXVCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixHQUFHLHFCQUFxQiw4QkFBOEIsaUJBQWlCLEdBQUcsV0FBVyxpQkFBaUIsa0JBQWtCLGlCQUFpQixnQ0FBZ0Msd0NBQXdDLEdBQUcsV0FBVyw4QkFBOEIsaUJBQWlCLGtCQUFrQiwyQkFBMkIsR0FBRyxZQUFZLDRCQUE0QixZQUFZLEdBQUcsZ0NBQWdDLG9CQUFvQixXQUFXLFlBQVksaUJBQWlCLGlCQUFpQixrQkFBa0IseUNBQXlDLCtCQUErQixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsZUFBZSxHQUFHLHNCQUFzQix3QkFBd0IsZUFBZSxHQUFHLGdCQUFnQixrQkFBa0IsNEJBQTRCLGVBQWUsZ0JBQWdCLGlDQUFpQywwQkFBMEIsR0FBRyxxQkFBcUIsa0JBQWtCLGNBQWMsR0FBRyxrQkFBa0Isa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLGdCQUFnQixvQkFBb0IsbUJBQW1CLGlCQUFpQiw0QkFBNEIsb0JBQW9CLEdBQUcsV0FBVyxrQkFBa0IsOEJBQThCLGNBQWMsR0FBRyw4QkFBOEIseUJBQXlCLG9CQUFvQixpQ0FBaUMsMEJBQTBCLHNCQUFzQixHQUFHLGdCQUFnQixtQkFBbUIsNEJBQTRCLEdBQUcsb0JBQW9CLGlCQUFpQiw4QkFBOEIsR0FBRyxpQkFBaUIsaUJBQWlCLDhCQUE4QixHQUFHLHVCQUF1QixtQkFBbUIsNEJBQTRCLEdBQUcsNkNBQTZDLGtCQUFrQixrQkFBa0IsMkJBQTJCLGdCQUFnQixHQUFHLGtCQUFrQixvQkFBb0IsMEJBQTBCLGtCQUFrQixpQ0FBaUMsR0FBRyx1QkFBdUIsa0NBQWtDLEdBQUcsdUJBQXVCLG9DQUFvQyxHQUFHLGlCQUFpQix1QkFBdUIsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsa0JBQWtCLDBCQUEwQixvQkFBb0Isc0JBQXNCLG1CQUFtQixpQkFBaUIsNEJBQTRCLG9CQUFvQixHQUFHLHFDQUFxQyxzQkFBc0IsbUJBQW1CLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLDBCQUEwQixvQkFBb0IsR0FBRywwQkFBMEIsc0JBQXNCLEdBQUcsMkNBQTJDLGVBQWUsaUJBQWlCLG9CQUFvQixvQkFBb0IsaUJBQWlCLHlCQUF5QixnQ0FBZ0MsR0FBRyx1QkFBdUIsa0NBQWtDLEdBQUcsdUJBQXVCLHFCQUFxQix1QkFBdUIsZUFBZSxHQUFHLGFBQWEsd0JBQXdCLGVBQWUsR0FBRyxTQUFTLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsZ0dBQWdHLElBQUksSUFBSSxJQUFJLElBQUksb0JBQW9CLE9BQU8sd0NBQXdDLGNBQWMsZUFBZSxHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQixHQUFHLGNBQWMsa0JBQWtCLGlCQUFpQixrQkFBa0IsMkJBQTJCLEdBQUcsYUFBYSw4QkFBOEIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsaUJBQWlCLHlCQUF5QixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsZUFBZSxtQkFBbUIsc0JBQXNCLHFCQUFxQiw0QkFBNEIsaUJBQWlCLGdCQUFnQixvQ0FBb0MsdUJBQXVCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixHQUFHLHFCQUFxQiw4QkFBOEIsaUJBQWlCLEdBQUcsV0FBVyxpQkFBaUIsa0JBQWtCLGlCQUFpQixnQ0FBZ0Msd0NBQXdDLEdBQUcsV0FBVyw4QkFBOEIsaUJBQWlCLGtCQUFrQiwyQkFBMkIsR0FBRyxZQUFZLDRCQUE0QixZQUFZLEdBQUcsZ0NBQWdDLG9CQUFvQixXQUFXLFlBQVksaUJBQWlCLGlCQUFpQixrQkFBa0IseUNBQXlDLCtCQUErQixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsZUFBZSxHQUFHLHNCQUFzQix3QkFBd0IsZUFBZSxHQUFHLGdCQUFnQixrQkFBa0IsNEJBQTRCLGVBQWUsZ0JBQWdCLGlDQUFpQywwQkFBMEIsR0FBRyxxQkFBcUIsa0JBQWtCLGNBQWMsR0FBRyxrQkFBa0Isa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLGdCQUFnQixvQkFBb0IsbUJBQW1CLGlCQUFpQiw0QkFBNEIsb0JBQW9CLEdBQUcsV0FBVyxrQkFBa0IsOEJBQThCLGNBQWMsR0FBRyw4QkFBOEIseUJBQXlCLG9CQUFvQixpQ0FBaUMsMEJBQTBCLHNCQUFzQixHQUFHLGdCQUFnQixtQkFBbUIsNEJBQTRCLEdBQUcsb0JBQW9CLGlCQUFpQiw4QkFBOEIsR0FBRyxpQkFBaUIsaUJBQWlCLDhCQUE4QixHQUFHLHVCQUF1QixtQkFBbUIsNEJBQTRCLEdBQUcsNkNBQTZDLGtCQUFrQixrQkFBa0IsMkJBQTJCLGdCQUFnQixHQUFHLGtCQUFrQixvQkFBb0IsMEJBQTBCLGtCQUFrQixpQ0FBaUMsR0FBRyx1QkFBdUIsa0NBQWtDLEdBQUcsdUJBQXVCLG9DQUFvQyxHQUFHLGlCQUFpQix1QkFBdUIsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsa0JBQWtCLDBCQUEwQixvQkFBb0Isc0JBQXNCLG1CQUFtQixpQkFBaUIsNEJBQTRCLG9CQUFvQixHQUFHLHFDQUFxQyxzQkFBc0IsbUJBQW1CLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLDBCQUEwQixvQkFBb0IsR0FBRywwQkFBMEIsc0JBQXNCLEdBQUcsMkNBQTJDLGVBQWUsaUJBQWlCLG9CQUFvQixvQkFBb0IsaUJBQWlCLHlCQUF5QixnQ0FBZ0MsR0FBRyx1QkFBdUIsa0NBQWtDLEdBQUcsdUJBQXVCLHFCQUFxQix1QkFBdUIsZUFBZSxHQUFHLGFBQWEsd0JBQXdCLGVBQWUsR0FBRyxxQkFBcUI7QUFDbGdUO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCakQ7QUFDRjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHdEQUFlO0FBQ3ZDLFFBQVEsMERBQWlCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsUUFBUSwwREFBaUI7QUFDekI7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWUsR0FBRyxzQkFBc0I7O0FBRXBELFlBQVkseURBQWdCO0FBQzVCLFlBQVksMkRBQWtCLENBQUMsMkRBQWtCO0FBQ2pEO0FBQ0EsWUFBWSwwREFBaUI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLDBEQUFpQjtBQUN0RCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUkscURBQVksR0FBRyw0REFBbUI7QUFDdEM7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHSztBQUNFOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdURBQWM7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQW9CO0FBQ2pDOztBQUVBO0FBQ0EseUJBQXlCLDREQUFtQjtBQUM1QztBQUNBOztBQUVBLHFCQUFxQiw0REFBbUI7QUFDeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSwyREFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkdPOztBQUVyQjtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlDa0M7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isb0RBQU87O0FBRXpCOztBQUVBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hESTtBQUNFO0FBQ0U7QUFDTTtBQUNDOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHdCQUF3Qix3REFBbUI7QUFDM0M7QUFDQSxJQUFJLHNEQUFhO0FBQ2pCLElBQUksNkRBQW9CLENBQUMsMERBQWlCO0FBQzFDLElBQUksMkRBQWtCLENBQUMsMkRBQWtCO0FBQ3pDLElBQUksd0RBQWU7QUFDbkIsSUFBSSwwREFBaUI7QUFDckI7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7OztBQ2hGRztBQUNZOztBQUVqQyxnQkFBZ0IsaUVBQWE7Ozs7Ozs7VUNIN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Eb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Mb2dpYy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL01vZGFscy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9VSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3V0Zml0OndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogXFxcIk91dGZpdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcbi5sb2dvIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmFkZC10b2RvIHtcXG4gIGNvbG9yOiAjMDBhMWZmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlcjogMC4wNXJlbSBzb2xpZCAjMDAwMDAwMzg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRvZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4wNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzODtcXG4gIGJvcmRlci10b3A6ICMwMDAwMDAzOCBzb2xpZCAwLjA1cmVtO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi8qTW9kYWwgQ1NTKi9cXG5cXG4ubW9kYWwtYmcge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubW9kYWwtYmctYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubW9kYWwtZGl2IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkICMwMGExZmY7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tb2RhbC1kaXYgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWhlYWRlciBoMiB7XFxuICBjb2xvcjogIzg2ODY4NjtcXG59XFxuXFxuLnByaW9yaXR5IGxhYmVsIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuI2Nsb3NlLWJ0biB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogIzg2ODY4NjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3Jlc2V0LWJ0bixcXG4jc3VibWl0LWJ0biB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkICMwMGExZmY7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3Jlc2V0LWJ0biB7XFxuICBjb2xvcjogIzAwYTFmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jcmVzZXQtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZmY7XFxufVxcblxcbiNzdWJtaXQtYnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZmY7XFxufVxcblxcbiNzdWJtaXQtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDBhMWZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIFRvZG9zIGxpc3QgaXRlbXMgQ1NTICovXFxuXFxuLnRvZG9zLXVsIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4udG9kb3MtdWwgbGkge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICM4Njg2ODY7XFxufVxcblxcbi50b2Rvcy11bCAudXJnZW50IHtcXG4gIGJvcmRlci1sZWZ0OiAwLjJyZW0gc29saWQgcmVkO1xcbn1cXG5cXG4udG9kb3MtdWwgLm5vcm1hbCB7XFxuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi50b2RvLWRhdGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udG9kby1kZWxldGUge1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzg2ODY4NjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBsaXN0cyBDU1MgKi9cXG5cXG4udG9kb3MtbGlzdHMge1xcbiAgcGFkZGluZzogMCAxLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNyZW07XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2Rvcy1saXN0cyAuYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBsaXN0cyBidXR0b24gQ1NTICovXFxuXFxuLmFkZC1mb2xkZXIge1xcbiAgYWxsOiB1bnNldDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYWRkLWZvbGRlcjpob3ZlciB7XFxuICBvdXRsaW5lOiAjMDAwMDAwIDAuMXJlbSBzb2xpZDtcXG59XFxuXFxuLmFkZC1mb2xkZXItaW5wdXQge1xcbiAgbWFyZ2luOiAwIDEuNXJlbTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxpQ0FBaUM7RUFDakMsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixPQUFPO0FBQ1Q7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsU0FBUztBQUNYOztBQUVBOztFQUVFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUEseUJBQXlCOztBQUV6QjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PdXRmaXQ6d2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3V0Zml0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uYWRkLXRvZG8ge1xcbiAgY29sb3I6ICMwMGExZmY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyOiAwLjA1cmVtIHNvbGlkICMwMDAwMDAzODtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdG9kbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWZmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjA1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDM4O1xcbiAgYm9yZGVyLXRvcDogIzAwMDAwMDM4IHNvbGlkIDAuMDVyZW07XFxufVxcblxcbi5saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XFxuICB3aWR0aDogMTVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLypNb2RhbCBDU1MqL1xcblxcbi5tb2RhbC1iZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5tb2RhbC1iZy1hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5tb2RhbC1kaXYge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgIzAwYTFmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLm1vZGFsLWRpdiBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0taGVhZGVyIGgyIHtcXG4gIGNvbG9yOiAjODY4Njg2O1xcbn1cXG5cXG4ucHJpb3JpdHkgbGFiZWwge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jY2xvc2UtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjODY4Njg2O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jcmVzZXQtYnRuLFxcbiNzdWJtaXQtYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgIzAwYTFmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcmVzZXQtYnRuIHtcXG4gIGNvbG9yOiAjMDBhMWZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbiNyZXNldC1idG46aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFmZjtcXG59XFxuXFxuI3N1Ym1pdC1idG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFmZjtcXG59XFxuXFxuI3N1Ym1pdC1idG46aG92ZXIge1xcbiAgY29sb3I6ICMwMGExZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogVG9kb3MgbGlzdCBpdGVtcyBDU1MgKi9cXG5cXG4udG9kb3MtdWwge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi50b2Rvcy11bCBsaSB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgIzg2ODY4NjtcXG59XFxuXFxuLnRvZG9zLXVsIC51cmdlbnQge1xcbiAgYm9yZGVyLWxlZnQ6IDAuMnJlbSBzb2xpZCByZWQ7XFxufVxcblxcbi50b2Rvcy11bCAubm9ybWFsIHtcXG4gIGJvcmRlci1sZWZ0OiAwLjJyZW0gc29saWQgZ3JlZW47XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnRvZG8tZGF0ZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi50b2RvLWRlbGV0ZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjODY4Njg2O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGxpc3RzIENTUyAqL1xcblxcbi50b2Rvcy1saXN0cyB7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuM3JlbTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9zLWxpc3RzIC5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIGxpc3RzIGJ1dHRvbiBDU1MgKi9cXG5cXG4uYWRkLWZvbGRlciB7XFxuICBhbGw6IHVuc2V0O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgYmxhY2s7XFxufVxcblxcbi5hZGQtZm9sZGVyOmhvdmVyIHtcXG4gIG91dGxpbmU6ICMwMDAwMDAgMC4xcmVtIHNvbGlkO1xcbn1cXG5cXG4uYWRkLWZvbGRlci1pbnB1dCB7XFxuICBtYXJnaW46IDAgMS41cmVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBMb2dpYyBmcm9tIFwiLi9Mb2dpY1wiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9kb1wiO1xuXG5jb25zdCBEb20gPSAoKCkgPT4ge1xuICBjb25zdCBtb2RhbEJ0bnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3Blbk1vZGFsQnRuID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIik7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJnXCIpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYmctYWN0aXZlXCIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS5mb2N1cygpO1xuICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSAoKCkgPT4ge1xuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1idG5cIik7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJnXCIpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtYmctYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHN1Ym1pdFRvZG9CdG4gPSAoKCkgPT4ge1xuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXQtYnRuXCIpO1xuXG4gICAgICBjb25zdCBzdWJtaXRUb2RvID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvXCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb2xkZXJzXCIpLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSBUb2RvLmNyZWF0ZVRvZG8odGl0bGUsIG5ldyBEYXRlKGR1ZURhdGUpLCBwcmlvLCBmb2xkZXIpO1xuICAgICAgICBUb2RvLnRvZG9BcnIucHVzaChuZXdUb2RvKTtcblxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcblxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1iZy1hY3RpdmVcIik7XG5cbiAgICAgICAgTG9naWMuZGlzcGxheVRvZG8obmV3VG9kbyk7XG4gICAgICB9O1xuXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdFRvZG8pO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBhZGRGb2xkZXJCdG4gPSAoKCkgPT4ge1xuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtZm9sZGVyXCIpO1xuXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1mb2xkZXItaW5wdXRcIik7XG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgICAgICBmaWVsZC5mb2N1cygpO1xuXG4gICAgICAgIGZpZWxkLm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIlwiKSByZXR1cm47XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBUb2RvLmxpc3RzLnB1c2goeyB0ZXh0OiBlLnRhcmdldC52YWx1ZSB9KTtcblxuICAgICAgICAgICAgTG9naWMuY2xlYXJMaXN0cygpO1xuICAgICAgICAgICAgVG9kby5saXN0cy5mb3JFYWNoKExvZ2ljLmRpc3BsYXlMaXN0cyk7XG4gICAgICAgICAgICBmaWx0ZXJUb2RvcygpO1xuICAgICAgICAgICAgTG9naWMudXBkYXRlTGlzdHMoKTtcblxuICAgICAgICAgICAgZmllbGQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgZmllbGQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KSgpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlclRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb3MtbGlzdHMgbGlcIik7XG5cbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTG9naWMuZmlsdGVyVG9kb3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9MaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG8ucGF0aFsxXS5pZCk7XG4gICAgdG9kb0xpLnJlbW92ZSgpO1xuXG4gICAgVG9kby50b2RvQXJyID0gVG9kby50b2RvQXJyLmZpbHRlcigodGFzaykgPT4gK3Rhc2suaWQgIT09ICt0b2RvLnBhdGhbMV0uaWQpO1xuICB9O1xuXG4gIHJldHVybiB7IG1vZGFsQnRucywgZGVsZXRlVG9kbywgZmlsdGVyVG9kb3MgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERvbTtcbiIsImltcG9ydCBEb20gZnJvbSBcIi4vRG9tXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvXCI7XG5cbmNvbnN0IExvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheVRvZG8gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9VbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3MtdWxcIik7XG5cbiAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB0b2RvSXRlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0b2RvLmlkKTtcbiAgICB0b2RvLnByaW9yaXR5ID09PSBcInVyZ2VudFwiXG4gICAgICA/IHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJ1cmdlbnRcIilcbiAgICAgIDogdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcIm5vcm1hbFwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcbiAgICBkdWVEYXRlLmlubmVyVGV4dCA9IHRvZG8uZHVlRGF0ZTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVsZXRlXCIpO1xuICAgIGRlbGV0ZVRvZG8uaW5uZXJUZXh0ID0gYMOXYDtcbiAgICBkZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBEb20uZGVsZXRlVG9kbyk7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlVG9kbyk7XG5cbiAgICB0b2RvVWwuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyTGlzdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9zLWxpc3RzIGxpXCIpO1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5yZW1vdmUoKSk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUxpc3RzID0gKGxpc3QpID0+IHtcbiAgICBjb25zdCBsaXN0c1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvcy1saXN0c1wiKTtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGxpc3RJdGVtLmlubmVyVGV4dCA9IGxpc3QudGV4dDtcblxuICAgIGxpc3RJdGVtLmlubmVyVGV4dCA9PT0gXCJBbGxcIiA/IGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIikgOiBcIlwiO1xuXG4gICAgbGlzdHNVbC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb3MtdWwgbGlcIik7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnJlbW92ZSgpKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckJhbGRuZXNzID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb3MtbGlzdHMgbGlcIik7XG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyVG9kb3MgPSAobGlzdCkgPT4ge1xuICAgIGNsZWFyVG9kb3MoKTtcbiAgICBjbGVhckJhbGRuZXNzKCk7XG5cbiAgICBsaXN0LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGlmIChsaXN0LnRhcmdldC5pbm5lclRleHQgPT09IFwiQWxsXCIpIHtcbiAgICAgIHJldHVybiBUb2RvLnRvZG9BcnIuZm9yRWFjaChkaXNwbGF5VG9kbyk7XG4gICAgfVxuXG4gICAgaWYgKGxpc3QudGFyZ2V0LmlubmVyVGV4dCA9PT0gXCJUb2RheVwiKSB7XG4gICAgICBjb25zdCB0b2RheVRvZG9zID0gVG9kby50b2RvQXJyLmZpbHRlcigodG9kbykgPT4gdG9kby50b2RheSk7XG4gICAgICByZXR1cm4gdG9kYXlUb2Rvcy5mb3JFYWNoKGRpc3BsYXlUb2RvKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJlZCA9IFRvZG8udG9kb0Fyci5maWx0ZXIoXG4gICAgICAodG9kbykgPT4gdG9kby5mb2xkZXIgPT09IGxpc3QudGFyZ2V0LmlubmVyVGV4dFxuICAgICk7XG5cbiAgICBmaWx0ZXJlZC5mb3JFYWNoKGRpc3BsYXlUb2RvKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVMaXN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1mb3JtXCIpO1xuICAgIGNvbnN0IHNlbGVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9sZGVyc1wiKTtcblxuICAgIGlmIChzZWxlY3REaXYuZmlyc3RDaGlsZCkge1xuICAgICAgc2VsZWN0RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuXG4gICAgVG9kby5saXN0cy5mb3JFYWNoKChvcHRpb24pID0+XG4gICAgICBzZWxlY3REaXYuYWRkKG5ldyBPcHRpb24ob3B0aW9uLnRleHQsIG9wdGlvbi52YWx1ZSwgb3B0aW9uLnNlbGVjdGVkKSlcbiAgICApO1xuICAgIGZvcm1EaXYuaW5zZXJ0QmVmb3JlKHNlbGVjdERpdiwgZm9ybURpdi5jaGlsZHJlbls4XSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5VG9kbyxcbiAgICBkaXNwbGF5TGlzdHMsXG4gICAgZmlsdGVyVG9kb3MsXG4gICAgY2xlYXJUb2RvcyxcbiAgICBjbGVhckxpc3RzLFxuICAgIHVwZGF0ZUxpc3RzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naWM7XG4iLCJpbXBvcnQgTG9naWMgZnJvbSBcIi4vTG9naWNcIjtcblxuZXhwb3J0IGNvbnN0IE1vZGFscyA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFRvZG9Nb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbEJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbEJHLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1iZ1wiKTtcblxuICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbERpdi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGl2XCIpO1xuICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1mb3JtXCIpO1xuICAgIG1vZGFsRGl2LmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuICAgIGZvcm1EaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJmb3JtLWhlYWRlclwiPlxuICAgICAgICAgIDxoMj5BZGQgVG9kbzwvaDI+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWJ0blwiPiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRhc2s6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvXCI+UHJpb3JpdHk6PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgaWQ9XCJub3JtYWxcIlxuICAgICAgICAgICAgbmFtZT1cInByaW9cIlxuICAgICAgICAgICAgdmFsdWU9XCJub3JtYWxcIlxuICAgICAgICAgICAgY2hlY2tlZD1cImNoZWNrZWRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPk5vcm1hbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidXJnZW50XCIgbmFtZT1cInByaW9cIiB2YWx1ZT1cInVyZ2VudFwiIC8+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPlVyZ2VudDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bGFiZWwgZm9yPVwiY2Fyc1wiPkZvbGRlcjo8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGlkPVwiZm9sZGVyc1wiPjwvc2VsZWN0PiBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bnNcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJyZXNldFwiIGlkPVwicmVzZXQtYnRuXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdC1idG5cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+YDtcblxuICAgIG1vZGFsQkcuYXBwZW5kQ2hpbGQobW9kYWxEaXYpO1xuXG4gICAgcmV0dXJuIG1vZGFsQkc7XG4gIH07XG5cbiAgcmV0dXJuIHsgYWRkVG9kb01vZGFsIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBUb2RvID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGZvbGRlcikgPT4ge1xuICAgIGNvbnN0IGlkID0gTWF0aC5yYW5kb20oKTtcblxuICAgIGNvbnN0IHRvZGF5ID0gaXNUb2RheShkdWVEYXRlKTtcblxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkdWVEYXRlLnRvRGF0ZVN0cmluZygpO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIGR1ZURhdGU6IGZvcm1hdHRlZERhdGUsIHByaW9yaXR5LCBmb2xkZXIsIGlkLCB0b2RheSB9O1xuICB9O1xuXG4gIGNvbnN0IHRvZG9BcnIgPSBbXTtcblxuICBjb25zdCBsaXN0cyA9IFtcbiAgICB7XG4gICAgICB0ZXh0OiBcIkFsbFwiLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlRvZGF5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkZvbGRlciAxXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBkdW1teVRvZG8gPSBjcmVhdGVUb2RvKFxuICAgIFwiRmluaXNoIFRvZG8gTGlzdFwiLFxuICAgIG5ldyBEYXRlKFwiMDQtMTItMjAyMVwiKSxcbiAgICBcInVyZ2VudFwiLFxuICAgIFwiRm9sZGVyIDFcIlxuICApO1xuXG4gIGNvbnN0IGR1bW15VG9kbzIgPSBjcmVhdGVUb2RvKFxuICAgIFwiRmluaXNoIFRvZG8gTGlzdCAyXCIsXG4gICAgbmV3IERhdGUoXCIwNC0xMi0yMDIxXCIpLFxuICAgIFwidXJnZW50XCIsXG4gICAgXCJGb2xkZXIgMlwiXG4gICk7XG5cbiAgdG9kb0Fyci5wdXNoKGR1bW15VG9kbyk7XG4gIHRvZG9BcnIucHVzaChkdW1teVRvZG8yKTtcblxuICByZXR1cm4geyBjcmVhdGVUb2RvLCB0b2RvQXJyLCBsaXN0cyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsImltcG9ydCBEb20gZnJvbSBcIi4vRG9tXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvXCI7XG5pbXBvcnQgTG9naWMgZnJvbSBcIi4vTG9naWNcIjtcbmltcG9ydCB7IE1vZGFscyB9IGZyb20gXCIuL01vZGFsc1wiO1xuaW1wb3J0IHsgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IGdlbmVyYXRlVUkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBoZWFkZXIgPSAoKCkgPT4ge1xuICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgICAgIGxvZ28uaW5uZXJUZXh0ID0gXCJUb2RvIExpc3RcIjtcblxuICAgICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG9kb1wiKTtcbiAgICAgIGFkZFRvZG9CdG4uaW5uZXJUZXh0ID0gXCIrXCI7XG5cbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChhZGRUb2RvQnRuKTtcblxuICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgbWFpbiA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbiAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcblxuICAgICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9kb3MuY2xhc3NMaXN0LmFkZChcInRvZG9zXCIpO1xuXG4gICAgICBjb25zdCB0b2Rvc1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgdG9kb3NVbC5jbGFzc0xpc3QuYWRkKFwidG9kb3MtdWxcIik7XG5cbiAgICAgIGNvbnN0IGxpc3RzVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICBsaXN0c1VsLmNsYXNzTGlzdC5hZGQoXCJ0b2Rvcy1saXN0c1wiKTtcblxuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWZvbGRlclwiKTtcbiAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIkFkZCBGb2xkZXIgPGI+KzwvYj5cIjtcblxuICAgICAgY29uc3QgZm9sZGVyRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgZm9sZGVyRm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKFwiYWRkLWZvbGRlci1pbnB1dFwiKTtcbiAgICAgIGZvbGRlckZvcm0uYXBwZW5kQ2hpbGQoZmllbGQpO1xuXG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RzVWwpO1xuICAgICAgbGlzdC5hcHBlbmRDaGlsZChmb2xkZXJGb3JtKTtcbiAgICAgIHRvZG9zLmFwcGVuZENoaWxkKHRvZG9zVWwpO1xuICAgICAgbWFpbi5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQodG9kb3MpO1xuXG4gICAgICByZXR1cm4gbWFpbjtcbiAgICB9KSgpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChNb2RhbHMuYWRkVG9kb01vZGFsKCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgRG9tLm1vZGFsQnRucygpO1xuICAgIFRvZG8udG9kb0Fyci5mb3JFYWNoKExvZ2ljLmRpc3BsYXlUb2RvKTtcbiAgICBUb2RvLmxpc3RzLmZvckVhY2goTG9naWMuZGlzcGxheUxpc3RzKTtcbiAgICBEb20uZmlsdGVyVG9kb3MoKTtcbiAgICBMb2dpYy51cGRhdGVMaXN0cygpO1xuICB9O1xuXG4gIHJldHVybiB7IGdlbmVyYXRlVUkgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBVSSBmcm9tIFwiLi9jb21wb25lbnRzL1VJXCI7XG5cbndpbmRvdy5vbmxvYWQgPSBVSS5nZW5lcmF0ZVVJKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtvZGluX3RvZG9fbGlzdFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtvZGluX3RvZG9fbGlzdFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9zb3VyLWQ3MWRmM1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9