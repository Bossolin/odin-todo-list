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

    _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].lists.forEach((option) => {
      if (option.text === "Today") return;
      return selectDiv.add(
        new Option(option.text, option.value, option.selected)
      );
    });

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

  let todoArr = [];
  let localTodoArr = JSON.parse(localStorage.getItem("todoArr"));

  let lists = [
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

  const setLocalData = function () {
    if (localTodoArr === null) {
      localStorage.setItem("todoArr", JSON.stringify(todoArr));
      localTodoArr = JSON.parse(localStorage.getItem("todoArr"));
    }
    localStorage.setItem("todoArr", JSON.stringify(localTodoArr));
  };
  setLocalData();

  console.log(localTodoArr);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvRG9tLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTG9naWMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Nb2RhbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Ub2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU91dGZpdDp3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPdXRmaXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICBjb2xvcjogIzAwYTFmZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXI6IDAuMDVyZW0gc29saWQgIzAwMDAwMDM4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZmY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMzg7XFxuICBib3JkZXItdG9wOiAjMDAwMDAwMzggc29saWQgMC4wNXJlbTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4vKk1vZGFsIENTUyovXFxuXFxuLm1vZGFsLWJnIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1vZGFsLWJnLWFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm1vZGFsLWRpdiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjMDBhMWZmO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ubW9kYWwtZGl2IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIgaDIge1xcbiAgY29sb3I6ICM4Njg2ODY7XFxufVxcblxcbi5wcmlvcml0eSBsYWJlbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbiNjbG9zZS1idG4ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICM4Njg2ODY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNyZXNldC1idG4sXFxuI3N1Ym1pdC1idG4ge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjMDBhMWZmO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNyZXNldC1idG4ge1xcbiAgY29sb3I6ICMwMGExZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI3Jlc2V0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWZmO1xcbn1cXG5cXG4jc3VibWl0LWJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWZmO1xcbn1cXG5cXG4jc3VibWl0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzAwYTFmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBUb2RvcyBsaXN0IGl0ZW1zIENTUyAqL1xcblxcbi50b2Rvcy11bCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLnRvZG9zLXVsIGxpIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjODY4Njg2O1xcbn1cXG5cXG4udG9kb3MtdWwgLnVyZ2VudCB7XFxuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHJlZDtcXG59XFxuXFxuLnRvZG9zLXVsIC5ub3JtYWwge1xcbiAgYm9yZGVyLWxlZnQ6IDAuMnJlbSBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udG9kby1kYXRlIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8tZGVsZXRlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICM4Njg2ODY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogbGlzdHMgQ1NTICovXFxuXFxuLnRvZG9zLWxpc3RzIHtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb3MtbGlzdHMgLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogbGlzdHMgYnV0dG9uIENTUyAqL1xcblxcbi5hZGQtZm9sZGVyIHtcXG4gIGFsbDogdW5zZXQ7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtYXJnaW46IDFyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCBibGFjaztcXG59XFxuXFxuLmFkZC1mb2xkZXI6aG92ZXIge1xcbiAgb3V0bGluZTogIzAwMDAwMCAwLjFyZW0gc29saWQ7XFxufVxcblxcbi5hZGQtZm9sZGVyLWlucHV0IHtcXG4gIG1hcmdpbjogMCAxLjVyZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsT0FBTztBQUNUOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3V0Zml0OndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIk91dGZpdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcbi5sb2dvIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmFkZC10b2RvIHtcXG4gIGNvbG9yOiAjMDBhMWZmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlcjogMC4wNXJlbSBzb2xpZCAjMDAwMDAwMzg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRvZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4wNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzODtcXG4gIGJvcmRlci10b3A6ICMwMDAwMDAzOCBzb2xpZCAwLjA1cmVtO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi8qTW9kYWwgQ1NTKi9cXG5cXG4ubW9kYWwtYmcge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubW9kYWwtYmctYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubW9kYWwtZGl2IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkICMwMGExZmY7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tb2RhbC1kaXYgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWhlYWRlciBoMiB7XFxuICBjb2xvcjogIzg2ODY4NjtcXG59XFxuXFxuLnByaW9yaXR5IGxhYmVsIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuI2Nsb3NlLWJ0biB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogIzg2ODY4NjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3Jlc2V0LWJ0bixcXG4jc3VibWl0LWJ0biB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkICMwMGExZmY7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3Jlc2V0LWJ0biB7XFxuICBjb2xvcjogIzAwYTFmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jcmVzZXQtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZmY7XFxufVxcblxcbiNzdWJtaXQtYnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZmY7XFxufVxcblxcbiNzdWJtaXQtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDBhMWZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIFRvZG9zIGxpc3QgaXRlbXMgQ1NTICovXFxuXFxuLnRvZG9zLXVsIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4udG9kb3MtdWwgbGkge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICM4Njg2ODY7XFxufVxcblxcbi50b2Rvcy11bCAudXJnZW50IHtcXG4gIGJvcmRlci1sZWZ0OiAwLjJyZW0gc29saWQgcmVkO1xcbn1cXG5cXG4udG9kb3MtdWwgLm5vcm1hbCB7XFxuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi50b2RvLWRhdGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udG9kby1kZWxldGUge1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzg2ODY4NjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBsaXN0cyBDU1MgKi9cXG5cXG4udG9kb3MtbGlzdHMge1xcbiAgcGFkZGluZzogMCAxLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNyZW07XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2Rvcy1saXN0cyAuYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBsaXN0cyBidXR0b24gQ1NTICovXFxuXFxuLmFkZC1mb2xkZXIge1xcbiAgYWxsOiB1bnNldDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYWRkLWZvbGRlcjpob3ZlciB7XFxuICBvdXRsaW5lOiAjMDAwMDAwIDAuMXJlbSBzb2xpZDtcXG59XFxuXFxuLmFkZC1mb2xkZXItaW5wdXQge1xcbiAgbWFyZ2luOiAwIDEuNXJlbTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgTG9naWMgZnJvbSBcIi4vTG9naWNcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL1RvZG9cIjtcblxuY29uc3QgRG9tID0gKCgpID0+IHtcbiAgY29uc3QgbW9kYWxCdG5zID0gKCkgPT4ge1xuICAgIGNvbnN0IG9wZW5Nb2RhbEJ0biA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iZ1wiKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJnLWFjdGl2ZVwiKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikuZm9jdXMoKTtcbiAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjbG9zZU1vZGFsQnRuID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtYnRuXCIpO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iZ1wiKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLWJnLWFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBzdWJtaXRUb2RvQnRuID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LWJ0blwiKTtcblxuICAgICAgY29uc3Qgc3VibWl0VG9kbyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb1wiXTpjaGVja2VkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9sZGVyc1wiKS52YWx1ZTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvID0gVG9kby5jcmVhdGVUb2RvKHRpdGxlLCBuZXcgRGF0ZShkdWVEYXRlKSwgcHJpbywgZm9sZGVyKTtcbiAgICAgICAgVG9kby50b2RvQXJyLnB1c2gobmV3VG9kbyk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJnXCIpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtYmctYWN0aXZlXCIpO1xuXG4gICAgICAgIExvZ2ljLmRpc3BsYXlUb2RvKG5ld1RvZG8pO1xuICAgICAgfTtcblxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRUb2RvKTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgYWRkRm9sZGVyQnRuID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWZvbGRlclwiKTtcblxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtZm9sZGVyLWlucHV0XCIpO1xuICAgICAgICBmaWVsZC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICAgICAgZmllbGQuZm9jdXMoKTtcblxuICAgICAgICBmaWVsZC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJcIikgcmV0dXJuO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgVG9kby5saXN0cy5wdXNoKHsgdGV4dDogZS50YXJnZXQudmFsdWUgfSk7XG5cbiAgICAgICAgICAgIExvZ2ljLmNsZWFyTGlzdHMoKTtcbiAgICAgICAgICAgIFRvZG8ubGlzdHMuZm9yRWFjaChMb2dpYy5kaXNwbGF5TGlzdHMpO1xuICAgICAgICAgICAgZmlsdGVyVG9kb3MoKTtcbiAgICAgICAgICAgIExvZ2ljLnVwZGF0ZUxpc3RzKCk7XG5cbiAgICAgICAgICAgIGZpZWxkLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSkoKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9zLWxpc3RzIGxpXCIpO1xuXG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIExvZ2ljLmZpbHRlclRvZG9zKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvLnBhdGhbMV0uaWQpO1xuICAgIHRvZG9MaS5yZW1vdmUoKTtcblxuICAgIFRvZG8udG9kb0FyciA9IFRvZG8udG9kb0Fyci5maWx0ZXIoKHRhc2spID0+ICt0YXNrLmlkICE9PSArdG9kby5wYXRoWzFdLmlkKTtcbiAgfTtcblxuICByZXR1cm4geyBtb2RhbEJ0bnMsIGRlbGV0ZVRvZG8sIGZpbHRlclRvZG9zIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBEb207XG4iLCJpbXBvcnQgRG9tIGZyb20gXCIuL0RvbVwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9kb1wiO1xuXG5jb25zdCBMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlUb2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLXVsXCIpO1xuXG4gICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdG9kb0l0ZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgdG9kby5pZCk7XG4gICAgdG9kby5wcmlvcml0eSA9PT0gXCJ1cmdlbnRcIlxuICAgICAgPyB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidXJnZW50XCIpXG4gICAgICA6IHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJub3JtYWxcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgZHVlRGF0ZS5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICBjb25zdCBkZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlbGV0ZVwiKTtcbiAgICBkZWxldGVUb2RvLmlubmVyVGV4dCA9IGDDl2A7XG4gICAgZGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRG9tLmRlbGV0ZVRvZG8pO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG8pO1xuXG4gICAgdG9kb1VsLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckxpc3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2Rvcy1saXN0cyBsaVwiKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQucmVtb3ZlKCkpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlMaXN0cyA9IChsaXN0KSA9PiB7XG4gICAgY29uc3QgbGlzdHNVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3MtbGlzdHNcIik7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICBsaXN0SXRlbS5pbm5lclRleHQgPSBsaXN0LnRleHQ7XG5cbiAgICBsaXN0SXRlbS5pbm5lclRleHQgPT09IFwiQWxsXCIgPyBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpIDogXCJcIjtcblxuICAgIGxpc3RzVWwuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyVG9kb3MgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9zLXVsIGxpXCIpO1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5yZW1vdmUoKSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJCYWxkbmVzcyA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9zLWxpc3RzIGxpXCIpO1xuICAgIGxpc3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlclRvZG9zID0gKGxpc3QpID0+IHtcbiAgICBjbGVhclRvZG9zKCk7XG4gICAgY2xlYXJCYWxkbmVzcygpO1xuXG4gICAgbGlzdC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBpZiAobGlzdC50YXJnZXQuaW5uZXJUZXh0ID09PSBcIkFsbFwiKSB7XG4gICAgICByZXR1cm4gVG9kby50b2RvQXJyLmZvckVhY2goZGlzcGxheVRvZG8pO1xuICAgIH1cblxuICAgIGlmIChsaXN0LnRhcmdldC5pbm5lclRleHQgPT09IFwiVG9kYXlcIikge1xuICAgICAgY29uc3QgdG9kYXlUb2RvcyA9IFRvZG8udG9kb0Fyci5maWx0ZXIoKHRvZG8pID0+IHRvZG8udG9kYXkpO1xuICAgICAgcmV0dXJuIHRvZGF5VG9kb3MuZm9yRWFjaChkaXNwbGF5VG9kbyk7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyZWQgPSBUb2RvLnRvZG9BcnIuZmlsdGVyKFxuICAgICAgKHRvZG8pID0+IHRvZG8uZm9sZGVyID09PSBsaXN0LnRhcmdldC5pbm5lclRleHRcbiAgICApO1xuXG4gICAgZmlsdGVyZWQuZm9yRWFjaChkaXNwbGF5VG9kbyk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTGlzdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZm9ybVwiKTtcbiAgICBjb25zdCBzZWxlY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZvbGRlcnNcIik7XG5cbiAgICBpZiAoc2VsZWN0RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHNlbGVjdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cblxuICAgIFRvZG8ubGlzdHMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBpZiAob3B0aW9uLnRleHQgPT09IFwiVG9kYXlcIikgcmV0dXJuO1xuICAgICAgcmV0dXJuIHNlbGVjdERpdi5hZGQoXG4gICAgICAgIG5ldyBPcHRpb24ob3B0aW9uLnRleHQsIG9wdGlvbi52YWx1ZSwgb3B0aW9uLnNlbGVjdGVkKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGZvcm1EaXYuaW5zZXJ0QmVmb3JlKHNlbGVjdERpdiwgZm9ybURpdi5jaGlsZHJlbls4XSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5VG9kbyxcbiAgICBkaXNwbGF5TGlzdHMsXG4gICAgZmlsdGVyVG9kb3MsXG4gICAgY2xlYXJUb2RvcyxcbiAgICBjbGVhckxpc3RzLFxuICAgIHVwZGF0ZUxpc3RzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naWM7XG4iLCJpbXBvcnQgTG9naWMgZnJvbSBcIi4vTG9naWNcIjtcblxuZXhwb3J0IGNvbnN0IE1vZGFscyA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFRvZG9Nb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbEJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbEJHLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1iZ1wiKTtcblxuICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbERpdi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGl2XCIpO1xuICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1mb3JtXCIpO1xuICAgIG1vZGFsRGl2LmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuICAgIGZvcm1EaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJmb3JtLWhlYWRlclwiPlxuICAgICAgICAgIDxoMj5BZGQgVG9kbzwvaDI+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWJ0blwiPiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRhc2s6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvXCI+UHJpb3JpdHk6PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgaWQ9XCJub3JtYWxcIlxuICAgICAgICAgICAgbmFtZT1cInByaW9cIlxuICAgICAgICAgICAgdmFsdWU9XCJub3JtYWxcIlxuICAgICAgICAgICAgY2hlY2tlZD1cImNoZWNrZWRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPk5vcm1hbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidXJnZW50XCIgbmFtZT1cInByaW9cIiB2YWx1ZT1cInVyZ2VudFwiIC8+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPlVyZ2VudDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bGFiZWwgZm9yPVwiY2Fyc1wiPkZvbGRlcjo8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGlkPVwiZm9sZGVyc1wiPjwvc2VsZWN0PiBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bnNcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJyZXNldFwiIGlkPVwicmVzZXQtYnRuXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdC1idG5cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+YDtcblxuICAgIG1vZGFsQkcuYXBwZW5kQ2hpbGQobW9kYWxEaXYpO1xuXG4gICAgcmV0dXJuIG1vZGFsQkc7XG4gIH07XG5cbiAgcmV0dXJuIHsgYWRkVG9kb01vZGFsIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBUb2RvID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGZvbGRlcikgPT4ge1xuICAgIGNvbnN0IGlkID0gTWF0aC5yYW5kb20oKTtcblxuICAgIGNvbnN0IHRvZGF5ID0gaXNUb2RheShkdWVEYXRlKTtcblxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkdWVEYXRlLnRvRGF0ZVN0cmluZygpO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIGR1ZURhdGU6IGZvcm1hdHRlZERhdGUsIHByaW9yaXR5LCBmb2xkZXIsIGlkLCB0b2RheSB9O1xuICB9O1xuXG4gIGxldCB0b2RvQXJyID0gW107XG4gIGxldCBsb2NhbFRvZG9BcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0FyclwiKSk7XG5cbiAgbGV0IGxpc3RzID0gW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiQWxsXCIsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiVG9kYXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiRm9sZGVyIDFcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHNldExvY2FsRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobG9jYWxUb2RvQXJyID09PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9BcnJcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0FycikpO1xuICAgICAgbG9jYWxUb2RvQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9BcnJcIikpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9BcnJcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxUb2RvQXJyKSk7XG4gIH07XG4gIHNldExvY2FsRGF0YSgpO1xuXG4gIGNvbnNvbGUubG9nKGxvY2FsVG9kb0Fycik7XG5cbiAgY29uc3QgZHVtbXlUb2RvID0gY3JlYXRlVG9kbyhcbiAgICBcIkZpbmlzaCBUb2RvIExpc3RcIixcbiAgICBuZXcgRGF0ZShcIjA0LTEyLTIwMjFcIiksXG4gICAgXCJ1cmdlbnRcIixcbiAgICBcIkZvbGRlciAxXCJcbiAgKTtcblxuICBjb25zdCBkdW1teVRvZG8yID0gY3JlYXRlVG9kbyhcbiAgICBcIkZpbmlzaCBUb2RvIExpc3QgMlwiLFxuICAgIG5ldyBEYXRlKFwiMDQtMTItMjAyMVwiKSxcbiAgICBcInVyZ2VudFwiLFxuICAgIFwiRm9sZGVyIDJcIlxuICApO1xuXG4gIHRvZG9BcnIucHVzaChkdW1teVRvZG8pO1xuICB0b2RvQXJyLnB1c2goZHVtbXlUb2RvMik7XG5cbiAgcmV0dXJuIHsgY3JlYXRlVG9kbywgdG9kb0FyciwgbGlzdHMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCJpbXBvcnQgRG9tIGZyb20gXCIuL0RvbVwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9kb1wiO1xuaW1wb3J0IExvZ2ljIGZyb20gXCIuL0xvZ2ljXCI7XG5pbXBvcnQgeyBNb2RhbHMgfSBmcm9tIFwiLi9Nb2RhbHNcIjtcbmltcG9ydCB7IGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICBjb25zdCBnZW5lcmF0ZVVJID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gICAgICBsb2dvLmlubmVyVGV4dCA9IFwiVG9kbyBMaXN0XCI7XG5cbiAgICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYWRkVG9kb0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvZG9cIik7XG4gICAgICBhZGRUb2RvQnRuLmlubmVyVGV4dCA9IFwiK1wiO1xuXG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWRkVG9kb0J0bik7XG5cbiAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IG1haW4gPSAoKCkgPT4ge1xuICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG5cbiAgICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRvZG9zLmNsYXNzTGlzdC5hZGQoXCJ0b2Rvc1wiKTtcblxuICAgICAgY29uc3QgdG9kb3NVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgIHRvZG9zVWwuY2xhc3NMaXN0LmFkZChcInRvZG9zLXVsXCIpO1xuXG4gICAgICBjb25zdCBsaXN0c1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgbGlzdHNVbC5jbGFzc0xpc3QuYWRkKFwidG9kb3MtbGlzdHNcIik7XG5cbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFkZC1mb2xkZXJcIik7XG4gICAgICBidG4uaW5uZXJIVE1MID0gXCJBZGQgRm9sZGVyIDxiPis8L2I+XCI7XG5cbiAgICAgIGNvbnN0IGZvbGRlckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIGZvbGRlckZvcm0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChcImFkZC1mb2xkZXItaW5wdXRcIik7XG4gICAgICBmb2xkZXJGb3JtLmFwcGVuZENoaWxkKGZpZWxkKTtcblxuICAgICAgbGlzdC5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0c1VsKTtcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZm9sZGVyRm9ybSk7XG4gICAgICB0b2Rvcy5hcHBlbmRDaGlsZCh0b2Rvc1VsKTtcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICBtYWluLmFwcGVuZENoaWxkKHRvZG9zKTtcblxuICAgICAgcmV0dXJuIG1haW47XG4gICAgfSkoKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoTW9kYWxzLmFkZFRvZG9Nb2RhbCgpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIERvbS5tb2RhbEJ0bnMoKTtcbiAgICBUb2RvLnRvZG9BcnIuZm9yRWFjaChMb2dpYy5kaXNwbGF5VG9kbyk7XG4gICAgVG9kby5saXN0cy5mb3JFYWNoKExvZ2ljLmRpc3BsYXlMaXN0cyk7XG4gICAgRG9tLmZpbHRlclRvZG9zKCk7XG4gICAgTG9naWMudXBkYXRlTGlzdHMoKTtcbiAgfTtcblxuICByZXR1cm4geyBnZW5lcmF0ZVVJIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vY29tcG9uZW50cy9VSVwiO1xuXG53aW5kb3cub25sb2FkID0gVUkuZ2VuZXJhdGVVSSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rb2Rpbl90b2RvX2xpc3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rb2Rpbl90b2RvX2xpc3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfc291ci1kNzFkZjNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==