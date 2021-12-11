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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: \"Outfit\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n}\n\n.content {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  background-color: #00a1ff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  padding: 0.5rem 1rem;\n}\n\n.logo {\n  cursor: default;\n}\n\n.add-todo {\n  color: #00a1ff;\n  font-size: 1.5rem;\n  font-weight: 700;\n  background-color: white;\n  height: 2rem;\n  width: 2rem;\n  border: 0.05rem solid #00000038;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-todo:hover {\n  background-color: #00a1ff;\n  color: white;\n}\n\n.main {\n  height: 100%;\n  display: flex;\n  gap: 0.05rem;\n  background-color: #00000038;\n  border-top: #00000038 solid 0.05rem;\n}\n\n.list {\n  background-color: #dfdfdf;\n  width: 15rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todos {\n  background-color: white;\n  flex: 1;\n}\n\n/*Modal CSS*/\n\n.modal-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(2px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.modal-bg-active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.modal-div {\n  padding: 1rem;\n  background-color: white;\n  width: 50%;\n  height: 50%;\n  border: 0.2rem solid #00a1ff;\n  border-radius: 0.5rem;\n}\n\n.modal-div form {\n  display: flex;\n  gap: 1rem;\n}\n\n.form-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.form-header h2 {\n  color: #868686;\n}\n\n.priority label {\n  margin-right: 1rem;\n}\n\n#close-btn {\n  font-size: 2rem;\n  color: #868686;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n.btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n#reset-btn,\n#submit-btn {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  border: 0.2rem solid #00a1ff;\n  border-radius: 0.5rem;\n  font-weight: bold;\n}\n\n#reset-btn {\n  color: #00a1ff;\n  background-color: white;\n}\n#reset-btn:hover {\n  color: white;\n  background-color: #00a1ff;\n}\n\n#submit-btn {\n  color: white;\n  background-color: #00a1ff;\n}\n\n#submit-btn:hover {\n  color: #00a1ff;\n  background-color: white;\n}\n\n/* Todos list items CSS */\n\n.todos-ul {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n\n.todos-ul li {\n  padding: 0.2rem;\n  list-style-type: none;\n  display: flex;\n  border: 0.1rem solid #868686;\n}\n\n.todos-ul .urgent {\n  border-left: 0.2rem solid red;\n}\n\n.todos-ul .normal {\n  border-left: 0.2rem solid green;\n}\n\n.todo-title {\n  margin-right: auto;\n}\n\n.todo-date {\n  margin-right: 1rem;\n}\n\n.todo-delete {\n  padding-right: 0.5rem;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #868686;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n/* lists CSS */\n\n.todos-lists {\n  padding: 0 1.5rem;\n  padding-top: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.todos-lists li {\n  display: flex;\n  justify-content: space-between;\n}\n\n.todos-lists .active {\n  font-weight: bold;\n}\n\n/* lists button CSS */\n\n.add-folder {\n  all: unset;\n  color: black;\n  cursor: pointer;\n  padding: 0.5rem;\n  margin: 1rem;\n  align-self: flex-end;\n  border: 0.15rem solid black;\n}\n\n.add-folder:hover {\n  outline: #000000 0.1rem solid;\n}\n\n.add-folder-input {\n  margin: 0 1.5rem;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.active {\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n\n/* Delete folder button CSS */\n\n.delete-folder {\n  /* padding: 0.2rem; */\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  background-color: #dfdfdf;\n  border: none;\n  cursor: pointer;\n  float: right;\n  visibility: hidden;\n  opacity: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;700;900&display=swap\");\n\n* {\n  font-family: \"Outfit\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n}\n\n.content {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  background-color: #00a1ff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  padding: 0.5rem 1rem;\n}\n\n.logo {\n  cursor: default;\n}\n\n.add-todo {\n  color: #00a1ff;\n  font-size: 1.5rem;\n  font-weight: 700;\n  background-color: white;\n  height: 2rem;\n  width: 2rem;\n  border: 0.05rem solid #00000038;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-todo:hover {\n  background-color: #00a1ff;\n  color: white;\n}\n\n.main {\n  height: 100%;\n  display: flex;\n  gap: 0.05rem;\n  background-color: #00000038;\n  border-top: #00000038 solid 0.05rem;\n}\n\n.list {\n  background-color: #dfdfdf;\n  width: 15rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todos {\n  background-color: white;\n  flex: 1;\n}\n\n/*Modal CSS*/\n\n.modal-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(2px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.modal-bg-active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.modal-div {\n  padding: 1rem;\n  background-color: white;\n  width: 50%;\n  height: 50%;\n  border: 0.2rem solid #00a1ff;\n  border-radius: 0.5rem;\n}\n\n.modal-div form {\n  display: flex;\n  gap: 1rem;\n}\n\n.form-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.form-header h2 {\n  color: #868686;\n}\n\n.priority label {\n  margin-right: 1rem;\n}\n\n#close-btn {\n  font-size: 2rem;\n  color: #868686;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n.btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n#reset-btn,\n#submit-btn {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  border: 0.2rem solid #00a1ff;\n  border-radius: 0.5rem;\n  font-weight: bold;\n}\n\n#reset-btn {\n  color: #00a1ff;\n  background-color: white;\n}\n#reset-btn:hover {\n  color: white;\n  background-color: #00a1ff;\n}\n\n#submit-btn {\n  color: white;\n  background-color: #00a1ff;\n}\n\n#submit-btn:hover {\n  color: #00a1ff;\n  background-color: white;\n}\n\n/* Todos list items CSS */\n\n.todos-ul {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n\n.todos-ul li {\n  padding: 0.2rem;\n  list-style-type: none;\n  display: flex;\n  border: 0.1rem solid #868686;\n}\n\n.todos-ul .urgent {\n  border-left: 0.2rem solid red;\n}\n\n.todos-ul .normal {\n  border-left: 0.2rem solid green;\n}\n\n.todo-title {\n  margin-right: auto;\n}\n\n.todo-date {\n  margin-right: 1rem;\n}\n\n.todo-delete {\n  padding-right: 0.5rem;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #868686;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n/* lists CSS */\n\n.todos-lists {\n  padding: 0 1.5rem;\n  padding-top: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.todos-lists li {\n  display: flex;\n  justify-content: space-between;\n}\n\n.todos-lists .active {\n  font-weight: bold;\n}\n\n/* lists button CSS */\n\n.add-folder {\n  all: unset;\n  color: black;\n  cursor: pointer;\n  padding: 0.5rem;\n  margin: 1rem;\n  align-self: flex-end;\n  border: 0.15rem solid black;\n}\n\n.add-folder:hover {\n  outline: #000000 0.1rem solid;\n}\n\n.add-folder-input {\n  margin: 0 1.5rem;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.active {\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n\n/* Delete folder button CSS */\n\n.delete-folder {\n  /* padding: 0.2rem; */\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  background-color: #dfdfdf;\n  border: none;\n  cursor: pointer;\n  float: right;\n  visibility: hidden;\n  opacity: 0;\n}\n"],"sourceRoot":""}]);
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
        _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].setLocalData();

        const form = document.querySelector(".modal-form");
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
            _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].setLocalData();

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
    const listItems = document.querySelectorAll(".todos-lists li p");

    listItems.forEach((item) => {
      item.addEventListener("click", _Logic__WEBPACK_IMPORTED_MODULE_0__["default"].filterTodos);
    });
  };

  const deleteTodo = (todo) => {
    const todoLi = document.getElementById(todo.path[1].id);
    todoLi.remove();

    _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].todoArr = _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].todoArr.filter((task) => +task.id !== +todo.path[1].id);
    _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].deleteLocalData();
    localStorage.setItem("todoArr", JSON.stringify(_Todo__WEBPACK_IMPORTED_MODULE_1__["default"].todoArr));
  };

  const deleteFolder = (folder) => {
    const folderLi = document.querySelector(`.active`);
    folderLi.parentElement.remove();

    _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].lists = _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].lists.filter(
      (item) => item.text !== folder.path[1].firstChild.innerText
    );

    _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].deleteLocalList();
    localStorage.setItem("folders", JSON.stringify(_Todo__WEBPACK_IMPORTED_MODULE_1__["default"].lists));

    _Logic__WEBPACK_IMPORTED_MODULE_0__["default"].clearTodos();
    _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].todoArr.forEach(_Logic__WEBPACK_IMPORTED_MODULE_0__["default"].displayTodo);
  };

  return { modalBtns, deleteTodo, filterTodos, deleteFolder };
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
    const p = document.createElement("p");

    p.innerText = list.text;

    p.innerText === "All" ? p.classList.add("active") : "";

    listItem.appendChild(p);

    if (list.text !== "All" && list.text !== "Today") {
      const btn = document.createElement("button");
      btn.classList.add("delete-folder");
      btn.innerText = `×`;
      btn.addEventListener("click", _Dom__WEBPACK_IMPORTED_MODULE_0__["default"].deleteFolder);
      listItem.appendChild(btn);
    }
    listsUl.appendChild(listItem);
  };

  const clearTodos = () => {
    const children = document.querySelectorAll(".todos-ul li");
    children.forEach((child) => child.remove());
  };

  const clearBaldness = () => {
    const listItems = document.querySelectorAll(".active");
    listItems.forEach((item) => item.classList.remove("active"));
  };

  const filterTodos = (list) => {
    clearTodos();
    clearBaldness();

    if (list.target.innerText === "All") {
      list.target.classList.add("active");
      return _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].todoArr.forEach(displayTodo);
    }

    if (list.target.innerText === "Today") {
      list.target.classList.add("active");
      const todayTodos = _Todo__WEBPACK_IMPORTED_MODULE_1__["default"].todoArr.filter((todo) => todo.today);
      return todayTodos.forEach(displayTodo);
    }

    list.target.classList.add("active");
    list.target.nextSibling.classList.add("active");

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

  let lists = [
    {
      text: "All",
      selected: true,
    },
    {
      text: "Today",
    },
  ];

  const setLocalData = () => {
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
    localStorage.setItem("folders", JSON.stringify(lists));
  };

  const getLocalData = () => {
    if (
      !JSON.parse(localStorage.getItem("todoArr")) ||
      !JSON.parse(localStorage.getItem("folders"))
    ) {
      return console.log("false");
    }
    todoArr = JSON.parse(localStorage.getItem("todoArr"));
    lists = JSON.parse(localStorage.getItem("folders"));
  };

  const deleteLocalData = () => {
    localStorage.removeItem("todoArr");
  };

  const deleteLocalList = () => {
    localStorage.removeItem("folders");
  };

  getLocalData();

  return {
    createTodo,
    todoArr,
    lists,
    setLocalData,
    getLocalData,
    deleteLocalData,
    deleteLocalList,
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLGdHQUFnRyxJQUFJLElBQUksSUFBSSxJQUFJLG9CQUFvQixPQUFPLHdDQUF3QyxjQUFjLGVBQWUsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsR0FBRyxjQUFjLGtCQUFrQixpQkFBaUIsa0JBQWtCLDJCQUEyQixHQUFHLGFBQWEsOEJBQThCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLGlCQUFpQix5QkFBeUIsR0FBRyxXQUFXLG9CQUFvQixHQUFHLGVBQWUsbUJBQW1CLHNCQUFzQixxQkFBcUIsNEJBQTRCLGlCQUFpQixnQkFBZ0Isb0NBQW9DLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0IsR0FBRyxxQkFBcUIsOEJBQThCLGlCQUFpQixHQUFHLFdBQVcsaUJBQWlCLGtCQUFrQixpQkFBaUIsZ0NBQWdDLHdDQUF3QyxHQUFHLFdBQVcsOEJBQThCLGlCQUFpQixrQkFBa0IsMkJBQTJCLEdBQUcsWUFBWSw0QkFBNEIsWUFBWSxHQUFHLGdDQUFnQyxvQkFBb0IsV0FBVyxZQUFZLGlCQUFpQixpQkFBaUIsa0JBQWtCLHlDQUF5QywrQkFBK0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLGVBQWUsR0FBRyxzQkFBc0Isd0JBQXdCLGVBQWUsR0FBRyxnQkFBZ0Isa0JBQWtCLDRCQUE0QixlQUFlLGdCQUFnQixpQ0FBaUMsMEJBQTBCLEdBQUcscUJBQXFCLGtCQUFrQixjQUFjLEdBQUcsa0JBQWtCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEdBQUcscUJBQXFCLG1CQUFtQixHQUFHLHFCQUFxQix1QkFBdUIsR0FBRyxnQkFBZ0Isb0JBQW9CLG1CQUFtQixpQkFBaUIsNEJBQTRCLG9CQUFvQixHQUFHLFdBQVcsa0JBQWtCLDhCQUE4QixjQUFjLEdBQUcsOEJBQThCLHlCQUF5QixvQkFBb0IsaUNBQWlDLDBCQUEwQixzQkFBc0IsR0FBRyxnQkFBZ0IsbUJBQW1CLDRCQUE0QixHQUFHLG9CQUFvQixpQkFBaUIsOEJBQThCLEdBQUcsaUJBQWlCLGlCQUFpQiw4QkFBOEIsR0FBRyx1QkFBdUIsbUJBQW1CLDRCQUE0QixHQUFHLDZDQUE2QyxrQkFBa0Isa0JBQWtCLDJCQUEyQixnQkFBZ0IsR0FBRyxrQkFBa0Isb0JBQW9CLDBCQUEwQixrQkFBa0IsaUNBQWlDLEdBQUcsdUJBQXVCLGtDQUFrQyxHQUFHLHVCQUF1QixvQ0FBb0MsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLGtCQUFrQiwwQkFBMEIsb0JBQW9CLHNCQUFzQixtQkFBbUIsaUJBQWlCLDRCQUE0QixvQkFBb0IsR0FBRyxxQ0FBcUMsc0JBQXNCLG1CQUFtQixrQkFBa0IsMkJBQTJCLGdCQUFnQiwwQkFBMEIsb0JBQW9CLEdBQUcscUJBQXFCLGtCQUFrQixtQ0FBbUMsR0FBRywwQkFBMEIsc0JBQXNCLEdBQUcsMkNBQTJDLGVBQWUsaUJBQWlCLG9CQUFvQixvQkFBb0IsaUJBQWlCLHlCQUF5QixnQ0FBZ0MsR0FBRyx1QkFBdUIsa0NBQWtDLEdBQUcsdUJBQXVCLHFCQUFxQix1QkFBdUIsZUFBZSxHQUFHLGFBQWEsbUNBQW1DLDBCQUEwQixHQUFHLHNEQUFzRCx3QkFBd0Isd0JBQXdCLHNCQUFzQixpQkFBaUIsOEJBQThCLGlCQUFpQixvQkFBb0IsaUJBQWlCLHVCQUF1QixlQUFlLEdBQUcscUJBQXFCO0FBQzc0VTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QyxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmpEO0FBQ0Y7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qix3REFBZTtBQUN2QyxRQUFRLDBEQUFpQjtBQUN6QixRQUFRLDBEQUFpQjs7QUFFekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFFBQVEsMERBQWlCO0FBQ3pCOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFlLEdBQUcsc0JBQXNCO0FBQ3BELFlBQVksMERBQWlCOztBQUU3QixZQUFZLHlEQUFnQjtBQUM1QixZQUFZLDJEQUFrQixDQUFDLDJEQUFrQjtBQUNqRDtBQUNBLFlBQVksMERBQWlCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQywwREFBaUI7QUFDdEQsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHFEQUFZLEdBQUcsNERBQW1CO0FBQ3RDLElBQUksNkRBQW9CO0FBQ3hCLG1EQUFtRCxxREFBWTtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxtREFBVSxHQUFHLDBEQUFpQjtBQUNsQztBQUNBOztBQUVBLElBQUksNkRBQW9CO0FBQ3hCLG1EQUFtRCxtREFBVTs7QUFFN0QsSUFBSSx5REFBZ0I7QUFDcEIsSUFBSSw2REFBb0IsQ0FBQywwREFBaUI7QUFDMUM7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25ISztBQUNFOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdURBQWM7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5REFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLDZEQUFvQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLDREQUFtQjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCLDREQUFtQjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDJEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SE87O0FBRXJCO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUNrQzs7QUFFbkM7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixvREFBTzs7QUFFekI7O0FBRUEsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlESTtBQUNFO0FBQ0U7QUFDTTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQW1CO0FBQzNDO0FBQ0EsSUFBSSxzREFBYTtBQUNqQixJQUFJLDZEQUFvQixDQUFDLDBEQUFpQjtBQUMxQyxJQUFJLDJEQUFrQixDQUFDLDJEQUFrQjtBQUN6QyxJQUFJLHdEQUFlO0FBQ25CLElBQUksMERBQWlCO0FBQ3JCOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLEVBQUUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7QUMvRUc7QUFDWTs7QUFFakMsZ0JBQWdCLGlFQUFhOzs7Ozs7O1VDSDdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvRG9tLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTG9naWMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Nb2RhbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Ub2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU91dGZpdDp3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPdXRmaXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICBjb2xvcjogIzAwYTFmZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXI6IDAuMDVyZW0gc29saWQgIzAwMDAwMDM4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZmY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMzg7XFxuICBib3JkZXItdG9wOiAjMDAwMDAwMzggc29saWQgMC4wNXJlbTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4vKk1vZGFsIENTUyovXFxuXFxuLm1vZGFsLWJnIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1vZGFsLWJnLWFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm1vZGFsLWRpdiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjMDBhMWZmO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ubW9kYWwtZGl2IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIgaDIge1xcbiAgY29sb3I6ICM4Njg2ODY7XFxufVxcblxcbi5wcmlvcml0eSBsYWJlbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbiNjbG9zZS1idG4ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICM4Njg2ODY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNyZXNldC1idG4sXFxuI3N1Ym1pdC1idG4ge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjMDBhMWZmO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNyZXNldC1idG4ge1xcbiAgY29sb3I6ICMwMGExZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI3Jlc2V0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWZmO1xcbn1cXG5cXG4jc3VibWl0LWJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWZmO1xcbn1cXG5cXG4jc3VibWl0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzAwYTFmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBUb2RvcyBsaXN0IGl0ZW1zIENTUyAqL1xcblxcbi50b2Rvcy11bCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLnRvZG9zLXVsIGxpIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjODY4Njg2O1xcbn1cXG5cXG4udG9kb3MtdWwgLnVyZ2VudCB7XFxuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHJlZDtcXG59XFxuXFxuLnRvZG9zLXVsIC5ub3JtYWwge1xcbiAgYm9yZGVyLWxlZnQ6IDAuMnJlbSBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udG9kby1kYXRlIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8tZGVsZXRlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICM4Njg2ODY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogbGlzdHMgQ1NTICovXFxuXFxuLnRvZG9zLWxpc3RzIHtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb3MtbGlzdHMgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG9zLWxpc3RzIC5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIGxpc3RzIGJ1dHRvbiBDU1MgKi9cXG5cXG4uYWRkLWZvbGRlciB7XFxuICBhbGw6IHVuc2V0O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgYmxhY2s7XFxufVxcblxcbi5hZGQtZm9sZGVyOmhvdmVyIHtcXG4gIG91dGxpbmU6ICMwMDAwMDAgMC4xcmVtIHNvbGlkO1xcbn1cXG5cXG4uYWRkLWZvbGRlci1pbnB1dCB7XFxuICBtYXJnaW46IDAgMS41cmVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIERlbGV0ZSBmb2xkZXIgYnV0dG9uIENTUyAqL1xcblxcbi5kZWxldGUtZm9sZGVyIHtcXG4gIC8qIHBhZGRpbmc6IDAuMnJlbTsgKi9cXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGlDQUFpQztFQUNqQyxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLE9BQU87QUFDVDs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQSw2QkFBNkI7O0FBRTdCO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU91dGZpdDp3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPdXRmaXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICBjb2xvcjogIzAwYTFmZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXI6IDAuMDVyZW0gc29saWQgIzAwMDAwMDM4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZmY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMzg7XFxuICBib3JkZXItdG9wOiAjMDAwMDAwMzggc29saWQgMC4wNXJlbTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4vKk1vZGFsIENTUyovXFxuXFxuLm1vZGFsLWJnIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1vZGFsLWJnLWFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm1vZGFsLWRpdiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjMDBhMWZmO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ubW9kYWwtZGl2IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIgaDIge1xcbiAgY29sb3I6ICM4Njg2ODY7XFxufVxcblxcbi5wcmlvcml0eSBsYWJlbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbiNjbG9zZS1idG4ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICM4Njg2ODY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNyZXNldC1idG4sXFxuI3N1Ym1pdC1idG4ge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjMDBhMWZmO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNyZXNldC1idG4ge1xcbiAgY29sb3I6ICMwMGExZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI3Jlc2V0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWZmO1xcbn1cXG5cXG4jc3VibWl0LWJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWZmO1xcbn1cXG5cXG4jc3VibWl0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzAwYTFmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBUb2RvcyBsaXN0IGl0ZW1zIENTUyAqL1xcblxcbi50b2Rvcy11bCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLnRvZG9zLXVsIGxpIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjODY4Njg2O1xcbn1cXG5cXG4udG9kb3MtdWwgLnVyZ2VudCB7XFxuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHJlZDtcXG59XFxuXFxuLnRvZG9zLXVsIC5ub3JtYWwge1xcbiAgYm9yZGVyLWxlZnQ6IDAuMnJlbSBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udG9kby1kYXRlIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8tZGVsZXRlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICM4Njg2ODY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogbGlzdHMgQ1NTICovXFxuXFxuLnRvZG9zLWxpc3RzIHtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb3MtbGlzdHMgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG9zLWxpc3RzIC5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIGxpc3RzIGJ1dHRvbiBDU1MgKi9cXG5cXG4uYWRkLWZvbGRlciB7XFxuICBhbGw6IHVuc2V0O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgYmxhY2s7XFxufVxcblxcbi5hZGQtZm9sZGVyOmhvdmVyIHtcXG4gIG91dGxpbmU6ICMwMDAwMDAgMC4xcmVtIHNvbGlkO1xcbn1cXG5cXG4uYWRkLWZvbGRlci1pbnB1dCB7XFxuICBtYXJnaW46IDAgMS41cmVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIERlbGV0ZSBmb2xkZXIgYnV0dG9uIENTUyAqL1xcblxcbi5kZWxldGUtZm9sZGVyIHtcXG4gIC8qIHBhZGRpbmc6IDAuMnJlbTsgKi9cXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBMb2dpYyBmcm9tIFwiLi9Mb2dpY1wiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9kb1wiO1xuXG5jb25zdCBEb20gPSAoKCkgPT4ge1xuICBjb25zdCBtb2RhbEJ0bnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3Blbk1vZGFsQnRuID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG9cIik7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJnXCIpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYmctYWN0aXZlXCIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS5mb2N1cygpO1xuICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSAoKCkgPT4ge1xuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1idG5cIik7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJnXCIpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtYmctYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHN1Ym1pdFRvZG9CdG4gPSAoKCkgPT4ge1xuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXQtYnRuXCIpO1xuXG4gICAgICBjb25zdCBzdWJtaXRUb2RvID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvXCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb2xkZXJzXCIpLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSBUb2RvLmNyZWF0ZVRvZG8odGl0bGUsIG5ldyBEYXRlKGR1ZURhdGUpLCBwcmlvLCBmb2xkZXIpO1xuICAgICAgICBUb2RvLnRvZG9BcnIucHVzaChuZXdUb2RvKTtcbiAgICAgICAgVG9kby5zZXRMb2NhbERhdGEoKTtcblxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1mb3JtXCIpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJnXCIpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtYmctYWN0aXZlXCIpO1xuXG4gICAgICAgIExvZ2ljLmRpc3BsYXlUb2RvKG5ld1RvZG8pO1xuICAgICAgfTtcblxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRUb2RvKTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgYWRkRm9sZGVyQnRuID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWZvbGRlclwiKTtcblxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtZm9sZGVyLWlucHV0XCIpO1xuICAgICAgICBmaWVsZC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICAgICAgZmllbGQuZm9jdXMoKTtcblxuICAgICAgICBmaWVsZC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJcIikgcmV0dXJuO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgVG9kby5saXN0cy5wdXNoKHsgdGV4dDogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICBUb2RvLnNldExvY2FsRGF0YSgpO1xuXG4gICAgICAgICAgICBMb2dpYy5jbGVhckxpc3RzKCk7XG4gICAgICAgICAgICBUb2RvLmxpc3RzLmZvckVhY2goTG9naWMuZGlzcGxheUxpc3RzKTtcbiAgICAgICAgICAgIGZpbHRlclRvZG9zKCk7XG4gICAgICAgICAgICBMb2dpYy51cGRhdGVMaXN0cygpO1xuXG4gICAgICAgICAgICBmaWVsZC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBmaWVsZC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pKCk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyVG9kb3MgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2Rvcy1saXN0cyBsaSBwXCIpO1xuXG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIExvZ2ljLmZpbHRlclRvZG9zKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvLnBhdGhbMV0uaWQpO1xuICAgIHRvZG9MaS5yZW1vdmUoKTtcblxuICAgIFRvZG8udG9kb0FyciA9IFRvZG8udG9kb0Fyci5maWx0ZXIoKHRhc2spID0+ICt0YXNrLmlkICE9PSArdG9kby5wYXRoWzFdLmlkKTtcbiAgICBUb2RvLmRlbGV0ZUxvY2FsRGF0YSgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0FyclwiLCBKU09OLnN0cmluZ2lmeShUb2RvLnRvZG9BcnIpKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyTGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWN0aXZlYCk7XG4gICAgZm9sZGVyTGkucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcblxuICAgIFRvZG8ubGlzdHMgPSBUb2RvLmxpc3RzLmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBpdGVtLnRleHQgIT09IGZvbGRlci5wYXRoWzFdLmZpcnN0Q2hpbGQuaW5uZXJUZXh0XG4gICAgKTtcblxuICAgIFRvZG8uZGVsZXRlTG9jYWxMaXN0KCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb2xkZXJzXCIsIEpTT04uc3RyaW5naWZ5KFRvZG8ubGlzdHMpKTtcblxuICAgIExvZ2ljLmNsZWFyVG9kb3MoKTtcbiAgICBUb2RvLnRvZG9BcnIuZm9yRWFjaChMb2dpYy5kaXNwbGF5VG9kbyk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbW9kYWxCdG5zLCBkZWxldGVUb2RvLCBmaWx0ZXJUb2RvcywgZGVsZXRlRm9sZGVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBEb207XG4iLCJpbXBvcnQgRG9tIGZyb20gXCIuL0RvbVwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9kb1wiO1xuXG5jb25zdCBMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlUb2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLXVsXCIpO1xuXG4gICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdG9kb0l0ZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgdG9kby5pZCk7XG4gICAgdG9kby5wcmlvcml0eSA9PT0gXCJ1cmdlbnRcIlxuICAgICAgPyB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidXJnZW50XCIpXG4gICAgICA6IHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJub3JtYWxcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgZHVlRGF0ZS5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICBjb25zdCBkZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlbGV0ZVwiKTtcbiAgICBkZWxldGVUb2RvLmlubmVyVGV4dCA9IGDDl2A7XG4gICAgZGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRG9tLmRlbGV0ZVRvZG8pO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG8pO1xuXG4gICAgdG9kb1VsLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckxpc3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2Rvcy1saXN0cyBsaVwiKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQucmVtb3ZlKCkpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlMaXN0cyA9IChsaXN0KSA9PiB7XG4gICAgY29uc3QgbGlzdHNVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3MtbGlzdHNcIik7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgcC5pbm5lclRleHQgPSBsaXN0LnRleHQ7XG5cbiAgICBwLmlubmVyVGV4dCA9PT0gXCJBbGxcIiA/IHAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSA6IFwiXCI7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChwKTtcblxuICAgIGlmIChsaXN0LnRleHQgIT09IFwiQWxsXCIgJiYgbGlzdC50ZXh0ICE9PSBcIlRvZGF5XCIpIHtcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1mb2xkZXJcIik7XG4gICAgICBidG4uaW5uZXJUZXh0ID0gYMOXYDtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRG9tLmRlbGV0ZUZvbGRlcik7XG4gICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cbiAgICBsaXN0c1VsLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfTtcblxuICBjb25zdCBjbGVhclRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2Rvcy11bCBsaVwiKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQucmVtb3ZlKCkpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQmFsZG5lc3MgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIik7XG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyVG9kb3MgPSAobGlzdCkgPT4ge1xuICAgIGNsZWFyVG9kb3MoKTtcbiAgICBjbGVhckJhbGRuZXNzKCk7XG5cbiAgICBpZiAobGlzdC50YXJnZXQuaW5uZXJUZXh0ID09PSBcIkFsbFwiKSB7XG4gICAgICBsaXN0LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgcmV0dXJuIFRvZG8udG9kb0Fyci5mb3JFYWNoKGRpc3BsYXlUb2RvKTtcbiAgICB9XG5cbiAgICBpZiAobGlzdC50YXJnZXQuaW5uZXJUZXh0ID09PSBcIlRvZGF5XCIpIHtcbiAgICAgIGxpc3QudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBjb25zdCB0b2RheVRvZG9zID0gVG9kby50b2RvQXJyLmZpbHRlcigodG9kbykgPT4gdG9kby50b2RheSk7XG4gICAgICByZXR1cm4gdG9kYXlUb2Rvcy5mb3JFYWNoKGRpc3BsYXlUb2RvKTtcbiAgICB9XG5cbiAgICBsaXN0LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGxpc3QudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICBjb25zdCBmaWx0ZXJlZCA9IFRvZG8udG9kb0Fyci5maWx0ZXIoXG4gICAgICAodG9kbykgPT4gdG9kby5mb2xkZXIgPT09IGxpc3QudGFyZ2V0LmlubmVyVGV4dFxuICAgICk7XG5cbiAgICBmaWx0ZXJlZC5mb3JFYWNoKGRpc3BsYXlUb2RvKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVMaXN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1mb3JtXCIpO1xuICAgIGNvbnN0IHNlbGVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9sZGVyc1wiKTtcblxuICAgIGlmIChzZWxlY3REaXYuZmlyc3RDaGlsZCkge1xuICAgICAgc2VsZWN0RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuXG4gICAgVG9kby5saXN0cy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIGlmIChvcHRpb24udGV4dCA9PT0gXCJUb2RheVwiKSByZXR1cm47XG4gICAgICByZXR1cm4gc2VsZWN0RGl2LmFkZChcbiAgICAgICAgbmV3IE9wdGlvbihvcHRpb24udGV4dCwgb3B0aW9uLnZhbHVlLCBvcHRpb24uc2VsZWN0ZWQpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgZm9ybURpdi5pbnNlcnRCZWZvcmUoc2VsZWN0RGl2LCBmb3JtRGl2LmNoaWxkcmVuWzhdKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlUb2RvLFxuICAgIGRpc3BsYXlMaXN0cyxcbiAgICBmaWx0ZXJUb2RvcyxcbiAgICBjbGVhclRvZG9zLFxuICAgIGNsZWFyTGlzdHMsXG4gICAgdXBkYXRlTGlzdHMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpYztcbiIsImltcG9ydCBMb2dpYyBmcm9tIFwiLi9Mb2dpY1wiO1xuXG5leHBvcnQgY29uc3QgTW9kYWxzID0gKCgpID0+IHtcbiAgY29uc3QgYWRkVG9kb01vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsQkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsQkcuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJnXCIpO1xuXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsRGl2LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1kaXZcIik7XG4gICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWZvcm1cIik7XG4gICAgbW9kYWxEaXYuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gICAgZm9ybURpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImZvcm0taGVhZGVyXCI+XG4gICAgICAgICAgPGgyPkFkZCBUb2RvPC9oMj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtYnRuXCI+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGFzazo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCIgcmVxdWlyZWQvPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBkYXRlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgLz5cbiAgICAgICAgPGxhYmVsIGZvcj1cInByaW9cIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBpZD1cIm5vcm1hbFwiXG4gICAgICAgICAgICBuYW1lPVwicHJpb1wiXG4gICAgICAgICAgICB2YWx1ZT1cIm5vcm1hbFwiXG4gICAgICAgICAgICBjaGVja2VkPVwiY2hlY2tlZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+Tm9ybWFsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ1cmdlbnRcIiBuYW1lPVwicHJpb1wiIHZhbHVlPVwidXJnZW50XCIgLz5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+VXJnZW50PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJjYXJzXCI+Rm9sZGVyOjwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJmb2xkZXJzXCI+PC9zZWxlY3Q+IFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuc1wiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInJlc2V0XCIgaWQ9XCJyZXNldC1idG5cIj5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0LWJ0blwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5gO1xuXG4gICAgbW9kYWxCRy5hcHBlbmRDaGlsZChtb2RhbERpdik7XG5cbiAgICByZXR1cm4gbW9kYWxCRztcbiAgfTtcblxuICByZXR1cm4geyBhZGRUb2RvTW9kYWwgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBpc1RvZGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IFRvZG8gPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZm9sZGVyKSA9PiB7XG4gICAgY29uc3QgaWQgPSBNYXRoLnJhbmRvbSgpO1xuXG4gICAgY29uc3QgdG9kYXkgPSBpc1RvZGF5KGR1ZURhdGUpO1xuXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGR1ZURhdGUudG9EYXRlU3RyaW5nKCk7XG5cbiAgICByZXR1cm4geyB0aXRsZSwgZHVlRGF0ZTogZm9ybWF0dGVkRGF0ZSwgcHJpb3JpdHksIGZvbGRlciwgaWQsIHRvZGF5IH07XG4gIH07XG5cbiAgbGV0IHRvZG9BcnIgPSBbXTtcblxuICBsZXQgbGlzdHMgPSBbXG4gICAge1xuICAgICAgdGV4dDogXCJBbGxcIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJUb2RheVwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3Qgc2V0TG9jYWxEYXRhID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0FyclwiLCBKU09OLnN0cmluZ2lmeSh0b2RvQXJyKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb2xkZXJzXCIsIEpTT04uc3RyaW5naWZ5KGxpc3RzKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TG9jYWxEYXRhID0gKCkgPT4ge1xuICAgIGlmIChcbiAgICAgICFKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0FyclwiKSkgfHxcbiAgICAgICFKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9sZGVyc1wiKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImZhbHNlXCIpO1xuICAgIH1cbiAgICB0b2RvQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9BcnJcIikpO1xuICAgIGxpc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvbGRlcnNcIikpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUxvY2FsRGF0YSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRvZG9BcnJcIik7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlTG9jYWxMaXN0ID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZm9sZGVyc1wiKTtcbiAgfTtcblxuICBnZXRMb2NhbERhdGEoKTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVRvZG8sXG4gICAgdG9kb0FycixcbiAgICBsaXN0cyxcbiAgICBzZXRMb2NhbERhdGEsXG4gICAgZ2V0TG9jYWxEYXRhLFxuICAgIGRlbGV0ZUxvY2FsRGF0YSxcbiAgICBkZWxldGVMb2NhbExpc3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiaW1wb3J0IERvbSBmcm9tIFwiLi9Eb21cIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL1RvZG9cIjtcbmltcG9ydCBMb2dpYyBmcm9tIFwiLi9Mb2dpY1wiO1xuaW1wb3J0IHsgTW9kYWxzIH0gZnJvbSBcIi4vTW9kYWxzXCI7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgY29uc3QgZ2VuZXJhdGVVSSA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICAgICAgbG9nby5pbm5lclRleHQgPSBcIlRvZG8gTGlzdFwiO1xuXG4gICAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZChcImFkZC10b2RvXCIpO1xuICAgICAgYWRkVG9kb0J0bi5pbm5lclRleHQgPSBcIitcIjtcblxuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGFkZFRvZG9CdG4pO1xuXG4gICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBtYWluID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xuXG4gICAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0b2Rvcy5jbGFzc0xpc3QuYWRkKFwidG9kb3NcIik7XG5cbiAgICAgIGNvbnN0IHRvZG9zVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICB0b2Rvc1VsLmNsYXNzTGlzdC5hZGQoXCJ0b2Rvcy11bFwiKTtcblxuICAgICAgY29uc3QgbGlzdHNVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgIGxpc3RzVWwuY2xhc3NMaXN0LmFkZChcInRvZG9zLWxpc3RzXCIpO1xuXG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtZm9sZGVyXCIpO1xuICAgICAgYnRuLmlubmVySFRNTCA9IFwiQWRkIEZvbGRlciA8Yj4rPC9iPlwiO1xuXG4gICAgICBjb25zdCBmb2xkZXJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICBmb2xkZXJGb3JtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJhZGQtZm9sZGVyLWlucHV0XCIpO1xuICAgICAgZm9sZGVyRm9ybS5hcHBlbmRDaGlsZChmaWVsZCk7XG5cbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdHNVbCk7XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGZvbGRlckZvcm0pO1xuICAgICAgdG9kb3MuYXBwZW5kQ2hpbGQodG9kb3NVbCk7XG4gICAgICBtYWluLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0b2Rvcyk7XG5cbiAgICAgIHJldHVybiBtYWluO1xuICAgIH0pKCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKE1vZGFscy5hZGRUb2RvTW9kYWwoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBEb20ubW9kYWxCdG5zKCk7XG4gICAgVG9kby50b2RvQXJyLmZvckVhY2goTG9naWMuZGlzcGxheVRvZG8pO1xuICAgIFRvZG8ubGlzdHMuZm9yRWFjaChMb2dpYy5kaXNwbGF5TGlzdHMpO1xuICAgIERvbS5maWx0ZXJUb2RvcygpO1xuICAgIExvZ2ljLnVwZGF0ZUxpc3RzKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2VuZXJhdGVVSSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL2NvbXBvbmVudHMvVUlcIjtcblxud2luZG93Lm9ubG9hZCA9IFVJLmdlbmVyYXRlVUkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua29kaW5fdG9kb19saXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua29kaW5fdG9kb19saXN0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX3NvdXItZDcxZGYzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=