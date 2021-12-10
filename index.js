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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: \"Outfit\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n}\n\n.content {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  background-color: #00a1ff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  padding: 0.5rem 1rem;\n}\n\n.logo {\n  cursor: default;\n}\n\n.add-todo {\n  color: #00a1ff;\n  font-size: 1.5rem;\n  font-weight: 700;\n  background-color: white;\n  height: 2rem;\n  width: 2rem;\n  border: 0.05rem solid #00000038;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-todo:hover {\n  background-color: #00a1ff;\n  color: white;\n}\n\n.main {\n  height: 100%;\n  display: flex;\n  gap: 0.05rem;\n  background-color: #00000038;\n  border-top: #00000038 solid 0.05rem;\n}\n\n.list {\n  background-color: #dfdfdf;\n  width: 15rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todos {\n  background-color: white;\n  flex: 1;\n}\n\n/*Modal CSS*/\n\n.modal-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(2px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.modal-bg-active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.modal-div {\n  padding: 1rem;\n  background-color: white;\n  width: 50%;\n  height: 50%;\n  border: 0.2rem solid #00a1ff;\n  border-radius: 0.5rem;\n}\n\n.modal-div form {\n  display: flex;\n  gap: 1rem;\n}\n\n.form-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.form-header h2 {\n  color: #868686;\n}\n\n.priority label {\n  margin-right: 1rem;\n}\n\n#close-btn {\n  font-size: 2rem;\n  color: #868686;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n.btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n#reset-btn,\n#submit-btn {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  border: 0.2rem solid #00a1ff;\n  border-radius: 0.5rem;\n  font-weight: bold;\n}\n\n#reset-btn {\n  color: #00a1ff;\n  background-color: white;\n}\n#reset-btn:hover {\n  color: white;\n  background-color: #00a1ff;\n}\n\n#submit-btn {\n  color: white;\n  background-color: #00a1ff;\n}\n\n#submit-btn:hover {\n  color: #00a1ff;\n  background-color: white;\n}\n\n/* Todos list items CSS */\n\n.todos-ul {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n\n.todos-ul li {\n  padding: 0.2rem;\n  list-style-type: none;\n  display: flex;\n  border: 0.1rem solid #868686;\n}\n\n.todos-ul .urgent {\n  border-left: 0.2rem solid red;\n}\n\n.todos-ul .normal {\n  border-left: 0.2rem solid green;\n}\n\n.todo-title {\n  margin-right: auto;\n}\n\n.todo-date {\n  margin-right: 1rem;\n}\n\n.todo-delete {\n  padding-right: 0.5rem;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #868686;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n/* lists CSS */\n\n.todos-lists {\n  padding: 0 1.5rem;\n  padding-top: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.todos-lists li {\n  display: flex;\n  justify-content: space-between;\n}\n\n.todos-lists .active {\n  font-weight: bold;\n}\n\n/* lists button CSS */\n\n.add-folder {\n  all: unset;\n  color: black;\n  cursor: pointer;\n  padding: 0.5rem;\n  margin: 1rem;\n  align-self: flex-end;\n  border: 0.15rem solid black;\n}\n\n.add-folder:hover {\n  outline: #000000 0.1rem solid;\n}\n\n.add-folder-input {\n  margin: 0 1.5rem;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n/* Delete folder button CSS */\n\n.delete-folder {\n  /* padding: 0.2rem; */\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  background-color: #dfdfdf;\n  border: none;\n  cursor: pointer;\n  float: right;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;700;900&display=swap\");\n\n* {\n  font-family: \"Outfit\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n}\n\n.content {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  background-color: #00a1ff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  padding: 0.5rem 1rem;\n}\n\n.logo {\n  cursor: default;\n}\n\n.add-todo {\n  color: #00a1ff;\n  font-size: 1.5rem;\n  font-weight: 700;\n  background-color: white;\n  height: 2rem;\n  width: 2rem;\n  border: 0.05rem solid #00000038;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-todo:hover {\n  background-color: #00a1ff;\n  color: white;\n}\n\n.main {\n  height: 100%;\n  display: flex;\n  gap: 0.05rem;\n  background-color: #00000038;\n  border-top: #00000038 solid 0.05rem;\n}\n\n.list {\n  background-color: #dfdfdf;\n  width: 15rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todos {\n  background-color: white;\n  flex: 1;\n}\n\n/*Modal CSS*/\n\n.modal-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(2px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.modal-bg-active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.modal-div {\n  padding: 1rem;\n  background-color: white;\n  width: 50%;\n  height: 50%;\n  border: 0.2rem solid #00a1ff;\n  border-radius: 0.5rem;\n}\n\n.modal-div form {\n  display: flex;\n  gap: 1rem;\n}\n\n.form-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.form-header h2 {\n  color: #868686;\n}\n\n.priority label {\n  margin-right: 1rem;\n}\n\n#close-btn {\n  font-size: 2rem;\n  color: #868686;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n.btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n#reset-btn,\n#submit-btn {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  border: 0.2rem solid #00a1ff;\n  border-radius: 0.5rem;\n  font-weight: bold;\n}\n\n#reset-btn {\n  color: #00a1ff;\n  background-color: white;\n}\n#reset-btn:hover {\n  color: white;\n  background-color: #00a1ff;\n}\n\n#submit-btn {\n  color: white;\n  background-color: #00a1ff;\n}\n\n#submit-btn:hover {\n  color: #00a1ff;\n  background-color: white;\n}\n\n/* Todos list items CSS */\n\n.todos-ul {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n\n.todos-ul li {\n  padding: 0.2rem;\n  list-style-type: none;\n  display: flex;\n  border: 0.1rem solid #868686;\n}\n\n.todos-ul .urgent {\n  border-left: 0.2rem solid red;\n}\n\n.todos-ul .normal {\n  border-left: 0.2rem solid green;\n}\n\n.todo-title {\n  margin-right: auto;\n}\n\n.todo-date {\n  margin-right: 1rem;\n}\n\n.todo-delete {\n  padding-right: 0.5rem;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #868686;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n/* lists CSS */\n\n.todos-lists {\n  padding: 0 1.5rem;\n  padding-top: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.todos-lists li {\n  display: flex;\n  justify-content: space-between;\n}\n\n.todos-lists .active {\n  font-weight: bold;\n}\n\n/* lists button CSS */\n\n.add-folder {\n  all: unset;\n  color: black;\n  cursor: pointer;\n  padding: 0.5rem;\n  margin: 1rem;\n  align-self: flex-end;\n  border: 0.15rem solid black;\n}\n\n.add-folder:hover {\n  outline: #000000 0.1rem solid;\n}\n\n.add-folder-input {\n  margin: 0 1.5rem;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n/* Delete folder button CSS */\n\n.delete-folder {\n  /* padding: 0.2rem; */\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  background-color: #dfdfdf;\n  border: none;\n  cursor: pointer;\n  float: right;\n}\n"],"sourceRoot":""}]);
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
    console.log(folder);
  };

  return { modalBtns, deleteTodo, filterTodos, deleteList: deleteFolder };
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
    const listItems = document.querySelectorAll(".todos-lists li p");
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

  getLocalData();

  return {
    createTodo,
    todoArr,
    lists,
    setLocalData,
    getLocalData,
    deleteLocalData,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLGdHQUFnRyxJQUFJLElBQUksSUFB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0xvZ2ljLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTW9kYWxzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1VJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PdXRmaXQ6d2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3V0Zml0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uYWRkLXRvZG8ge1xcbiAgY29sb3I6ICMwMGExZmY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyOiAwLjA1cmVtIHNvbGlkICMwMDAwMDAzODtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdG9kbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWZmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjA1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDM4O1xcbiAgYm9yZGVyLXRvcDogIzAwMDAwMDM4IHNvbGlkIDAuMDVyZW07XFxufVxcblxcbi5saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XFxuICB3aWR0aDogMTVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLypNb2RhbCBDU1MqL1xcblxcbi5tb2RhbC1iZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5tb2RhbC1iZy1hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5tb2RhbC1kaXYge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgIzAwYTFmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLm1vZGFsLWRpdiBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0taGVhZGVyIGgyIHtcXG4gIGNvbG9yOiAjODY4Njg2O1xcbn1cXG5cXG4ucHJpb3JpdHkgbGFiZWwge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jY2xvc2UtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjODY4Njg2O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jcmVzZXQtYnRuLFxcbiNzdWJtaXQtYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgIzAwYTFmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcmVzZXQtYnRuIHtcXG4gIGNvbG9yOiAjMDBhMWZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbiNyZXNldC1idG46aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFmZjtcXG59XFxuXFxuI3N1Ym1pdC1idG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFmZjtcXG59XFxuXFxuI3N1Ym1pdC1idG46aG92ZXIge1xcbiAgY29sb3I6ICMwMGExZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogVG9kb3MgbGlzdCBpdGVtcyBDU1MgKi9cXG5cXG4udG9kb3MtdWwge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi50b2Rvcy11bCBsaSB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgIzg2ODY4NjtcXG59XFxuXFxuLnRvZG9zLXVsIC51cmdlbnQge1xcbiAgYm9yZGVyLWxlZnQ6IDAuMnJlbSBzb2xpZCByZWQ7XFxufVxcblxcbi50b2Rvcy11bCAubm9ybWFsIHtcXG4gIGJvcmRlci1sZWZ0OiAwLjJyZW0gc29saWQgZ3JlZW47XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnRvZG8tZGF0ZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi50b2RvLWRlbGV0ZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjODY4Njg2O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGxpc3RzIENTUyAqL1xcblxcbi50b2Rvcy1saXN0cyB7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuM3JlbTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9zLWxpc3RzIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2Rvcy1saXN0cyAuYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBsaXN0cyBidXR0b24gQ1NTICovXFxuXFxuLmFkZC1mb2xkZXIge1xcbiAgYWxsOiB1bnNldDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYWRkLWZvbGRlcjpob3ZlciB7XFxuICBvdXRsaW5lOiAjMDAwMDAwIDAuMXJlbSBzb2xpZDtcXG59XFxuXFxuLmFkZC1mb2xkZXItaW5wdXQge1xcbiAgbWFyZ2luOiAwIDEuNXJlbTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIERlbGV0ZSBmb2xkZXIgYnV0dG9uIENTUyAqL1xcblxcbi5kZWxldGUtZm9sZGVyIHtcXG4gIC8qIHBhZGRpbmc6IDAuMnJlbTsgKi9cXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsT0FBTztBQUNUOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBLDZCQUE2Qjs7QUFFN0I7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU91dGZpdDp3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPdXRmaXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICBjb2xvcjogIzAwYTFmZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXI6IDAuMDVyZW0gc29saWQgIzAwMDAwMDM4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZmY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMzg7XFxuICBib3JkZXItdG9wOiAjMDAwMDAwMzggc29saWQgMC4wNXJlbTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4vKk1vZGFsIENTUyovXFxuXFxuLm1vZGFsLWJnIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1vZGFsLWJnLWFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm1vZGFsLWRpdiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjMDBhMWZmO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ubW9kYWwtZGl2IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIgaDIge1xcbiAgY29sb3I6ICM4Njg2ODY7XFxufVxcblxcbi5wcmlvcml0eSBsYWJlbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbiNjbG9zZS1idG4ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICM4Njg2ODY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNyZXNldC1idG4sXFxuI3N1Ym1pdC1idG4ge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjMDBhMWZmO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNyZXNldC1idG4ge1xcbiAgY29sb3I6ICMwMGExZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI3Jlc2V0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWZmO1xcbn1cXG5cXG4jc3VibWl0LWJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWZmO1xcbn1cXG5cXG4jc3VibWl0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzAwYTFmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBUb2RvcyBsaXN0IGl0ZW1zIENTUyAqL1xcblxcbi50b2Rvcy11bCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLnRvZG9zLXVsIGxpIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjODY4Njg2O1xcbn1cXG5cXG4udG9kb3MtdWwgLnVyZ2VudCB7XFxuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHJlZDtcXG59XFxuXFxuLnRvZG9zLXVsIC5ub3JtYWwge1xcbiAgYm9yZGVyLWxlZnQ6IDAuMnJlbSBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udG9kby1kYXRlIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8tZGVsZXRlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICM4Njg2ODY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogbGlzdHMgQ1NTICovXFxuXFxuLnRvZG9zLWxpc3RzIHtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb3MtbGlzdHMgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG9zLWxpc3RzIC5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIGxpc3RzIGJ1dHRvbiBDU1MgKi9cXG5cXG4uYWRkLWZvbGRlciB7XFxuICBhbGw6IHVuc2V0O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgYmxhY2s7XFxufVxcblxcbi5hZGQtZm9sZGVyOmhvdmVyIHtcXG4gIG91dGxpbmU6ICMwMDAwMDAgMC4xcmVtIHNvbGlkO1xcbn1cXG5cXG4uYWRkLWZvbGRlci1pbnB1dCB7XFxuICBtYXJnaW46IDAgMS41cmVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogRGVsZXRlIGZvbGRlciBidXR0b24gQ1NTICovXFxuXFxuLmRlbGV0ZS1mb2xkZXIge1xcbiAgLyogcGFkZGluZzogMC4ycmVtOyAqL1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgTG9naWMgZnJvbSBcIi4vTG9naWNcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL1RvZG9cIjtcblxuY29uc3QgRG9tID0gKCgpID0+IHtcbiAgY29uc3QgbW9kYWxCdG5zID0gKCkgPT4ge1xuICAgIGNvbnN0IG9wZW5Nb2RhbEJ0biA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iZ1wiKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJnLWFjdGl2ZVwiKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikuZm9jdXMoKTtcbiAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjbG9zZU1vZGFsQnRuID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtYnRuXCIpO1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iZ1wiKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLWJnLWFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBzdWJtaXRUb2RvQnRuID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LWJ0blwiKTtcblxuICAgICAgY29uc3Qgc3VibWl0VG9kbyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb1wiXTpjaGVja2VkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9sZGVyc1wiKS52YWx1ZTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvID0gVG9kby5jcmVhdGVUb2RvKHRpdGxlLCBuZXcgRGF0ZShkdWVEYXRlKSwgcHJpbywgZm9sZGVyKTtcbiAgICAgICAgVG9kby50b2RvQXJyLnB1c2gobmV3VG9kbyk7XG4gICAgICAgIFRvZG8uc2V0TG9jYWxEYXRhKCk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZm9ybVwiKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iZ1wiKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLWJnLWFjdGl2ZVwiKTtcblxuICAgICAgICBMb2dpYy5kaXNwbGF5VG9kbyhuZXdUb2RvKTtcbiAgICAgIH07XG5cbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0VG9kbyk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGFkZEZvbGRlckJ0biA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1mb2xkZXJcIik7XG5cbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWZvbGRlci1pbnB1dFwiKTtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgICAgIGZpZWxkLmZvY3VzKCk7XG5cbiAgICAgICAgZmllbGQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiXCIpIHJldHVybjtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFRvZG8ubGlzdHMucHVzaCh7IHRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgVG9kby5zZXRMb2NhbERhdGEoKTtcblxuICAgICAgICAgICAgTG9naWMuY2xlYXJMaXN0cygpO1xuICAgICAgICAgICAgVG9kby5saXN0cy5mb3JFYWNoKExvZ2ljLmRpc3BsYXlMaXN0cyk7XG4gICAgICAgICAgICBmaWx0ZXJUb2RvcygpO1xuICAgICAgICAgICAgTG9naWMudXBkYXRlTGlzdHMoKTtcblxuICAgICAgICAgICAgZmllbGQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgZmllbGQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KSgpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlclRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb3MtbGlzdHMgbGkgcFwiKTtcblxuICAgIGxpc3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBMb2dpYy5maWx0ZXJUb2Rvcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9kb0xpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kby5wYXRoWzFdLmlkKTtcbiAgICB0b2RvTGkucmVtb3ZlKCk7XG5cbiAgICBUb2RvLnRvZG9BcnIgPSBUb2RvLnRvZG9BcnIuZmlsdGVyKCh0YXNrKSA9PiArdGFzay5pZCAhPT0gK3RvZG8ucGF0aFsxXS5pZCk7XG4gICAgVG9kby5kZWxldGVMb2NhbERhdGEoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9BcnJcIiwgSlNPTi5zdHJpbmdpZnkoVG9kby50b2RvQXJyKSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZvbGRlcik7XG4gIH07XG5cbiAgcmV0dXJuIHsgbW9kYWxCdG5zLCBkZWxldGVUb2RvLCBmaWx0ZXJUb2RvcywgZGVsZXRlTGlzdDogZGVsZXRlRm9sZGVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBEb207XG4iLCJpbXBvcnQgRG9tIGZyb20gXCIuL0RvbVwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9kb1wiO1xuXG5jb25zdCBMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlUb2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLXVsXCIpO1xuXG4gICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdG9kb0l0ZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgdG9kby5pZCk7XG4gICAgdG9kby5wcmlvcml0eSA9PT0gXCJ1cmdlbnRcIlxuICAgICAgPyB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidXJnZW50XCIpXG4gICAgICA6IHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJub3JtYWxcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgZHVlRGF0ZS5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICBjb25zdCBkZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlbGV0ZVwiKTtcbiAgICBkZWxldGVUb2RvLmlubmVyVGV4dCA9IGDDl2A7XG4gICAgZGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRG9tLmRlbGV0ZVRvZG8pO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG8pO1xuXG4gICAgdG9kb1VsLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckxpc3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2Rvcy1saXN0cyBsaVwiKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQucmVtb3ZlKCkpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlMaXN0cyA9IChsaXN0KSA9PiB7XG4gICAgY29uc3QgbGlzdHNVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3MtbGlzdHNcIik7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgcC5pbm5lclRleHQgPSBsaXN0LnRleHQ7XG5cbiAgICBwLmlubmVyVGV4dCA9PT0gXCJBbGxcIiA/IHAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSA6IFwiXCI7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChwKTtcblxuICAgIGlmIChsaXN0LnRleHQgIT09IFwiQWxsXCIgJiYgbGlzdC50ZXh0ICE9PSBcIlRvZGF5XCIpIHtcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1mb2xkZXJcIik7XG4gICAgICBidG4uaW5uZXJUZXh0ID0gYMOXYDtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRG9tLmRlbGV0ZUZvbGRlcik7XG4gICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cbiAgICBsaXN0c1VsLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfTtcblxuICBjb25zdCBjbGVhclRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2Rvcy11bCBsaVwiKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQucmVtb3ZlKCkpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQmFsZG5lc3MgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2Rvcy1saXN0cyBsaSBwXCIpO1xuICAgIGxpc3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlclRvZG9zID0gKGxpc3QpID0+IHtcbiAgICBjbGVhclRvZG9zKCk7XG4gICAgY2xlYXJCYWxkbmVzcygpO1xuXG4gICAgbGlzdC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgIGlmIChsaXN0LnRhcmdldC5pbm5lclRleHQgPT09IFwiQWxsXCIpIHtcbiAgICAgIHJldHVybiBUb2RvLnRvZG9BcnIuZm9yRWFjaChkaXNwbGF5VG9kbyk7XG4gICAgfVxuXG4gICAgaWYgKGxpc3QudGFyZ2V0LmlubmVyVGV4dCA9PT0gXCJUb2RheVwiKSB7XG4gICAgICBjb25zdCB0b2RheVRvZG9zID0gVG9kby50b2RvQXJyLmZpbHRlcigodG9kbykgPT4gdG9kby50b2RheSk7XG4gICAgICByZXR1cm4gdG9kYXlUb2Rvcy5mb3JFYWNoKGRpc3BsYXlUb2RvKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJlZCA9IFRvZG8udG9kb0Fyci5maWx0ZXIoXG4gICAgICAodG9kbykgPT4gdG9kby5mb2xkZXIgPT09IGxpc3QudGFyZ2V0LmlubmVyVGV4dFxuICAgICk7XG5cbiAgICBmaWx0ZXJlZC5mb3JFYWNoKGRpc3BsYXlUb2RvKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVMaXN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1mb3JtXCIpO1xuICAgIGNvbnN0IHNlbGVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9sZGVyc1wiKTtcblxuICAgIGlmIChzZWxlY3REaXYuZmlyc3RDaGlsZCkge1xuICAgICAgc2VsZWN0RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuXG4gICAgVG9kby5saXN0cy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIGlmIChvcHRpb24udGV4dCA9PT0gXCJUb2RheVwiKSByZXR1cm47XG4gICAgICByZXR1cm4gc2VsZWN0RGl2LmFkZChcbiAgICAgICAgbmV3IE9wdGlvbihvcHRpb24udGV4dCwgb3B0aW9uLnZhbHVlLCBvcHRpb24uc2VsZWN0ZWQpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgZm9ybURpdi5pbnNlcnRCZWZvcmUoc2VsZWN0RGl2LCBmb3JtRGl2LmNoaWxkcmVuWzhdKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlUb2RvLFxuICAgIGRpc3BsYXlMaXN0cyxcbiAgICBmaWx0ZXJUb2RvcyxcbiAgICBjbGVhclRvZG9zLFxuICAgIGNsZWFyTGlzdHMsXG4gICAgdXBkYXRlTGlzdHMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpYztcbiIsImltcG9ydCBMb2dpYyBmcm9tIFwiLi9Mb2dpY1wiO1xuXG5leHBvcnQgY29uc3QgTW9kYWxzID0gKCgpID0+IHtcbiAgY29uc3QgYWRkVG9kb01vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsQkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsQkcuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJnXCIpO1xuXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsRGl2LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1kaXZcIik7XG4gICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWZvcm1cIik7XG4gICAgbW9kYWxEaXYuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gICAgZm9ybURpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImZvcm0taGVhZGVyXCI+XG4gICAgICAgICAgPGgyPkFkZCBUb2RvPC9oMj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtYnRuXCI+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGFzazo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCIgcmVxdWlyZWQvPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBkYXRlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgLz5cbiAgICAgICAgPGxhYmVsIGZvcj1cInByaW9cIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBpZD1cIm5vcm1hbFwiXG4gICAgICAgICAgICBuYW1lPVwicHJpb1wiXG4gICAgICAgICAgICB2YWx1ZT1cIm5vcm1hbFwiXG4gICAgICAgICAgICBjaGVja2VkPVwiY2hlY2tlZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+Tm9ybWFsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ1cmdlbnRcIiBuYW1lPVwicHJpb1wiIHZhbHVlPVwidXJnZW50XCIgLz5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+VXJnZW50PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJjYXJzXCI+Rm9sZGVyOjwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJmb2xkZXJzXCI+PC9zZWxlY3Q+IFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuc1wiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInJlc2V0XCIgaWQ9XCJyZXNldC1idG5cIj5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0LWJ0blwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5gO1xuXG4gICAgbW9kYWxCRy5hcHBlbmRDaGlsZChtb2RhbERpdik7XG5cbiAgICByZXR1cm4gbW9kYWxCRztcbiAgfTtcblxuICByZXR1cm4geyBhZGRUb2RvTW9kYWwgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBpc1RvZGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IFRvZG8gPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZm9sZGVyKSA9PiB7XG4gICAgY29uc3QgaWQgPSBNYXRoLnJhbmRvbSgpO1xuXG4gICAgY29uc3QgdG9kYXkgPSBpc1RvZGF5KGR1ZURhdGUpO1xuXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGR1ZURhdGUudG9EYXRlU3RyaW5nKCk7XG5cbiAgICByZXR1cm4geyB0aXRsZSwgZHVlRGF0ZTogZm9ybWF0dGVkRGF0ZSwgcHJpb3JpdHksIGZvbGRlciwgaWQsIHRvZGF5IH07XG4gIH07XG5cbiAgbGV0IHRvZG9BcnIgPSBbXTtcblxuICBsZXQgbGlzdHMgPSBbXG4gICAge1xuICAgICAgdGV4dDogXCJBbGxcIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJUb2RheVwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3Qgc2V0TG9jYWxEYXRhID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0FyclwiLCBKU09OLnN0cmluZ2lmeSh0b2RvQXJyKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb2xkZXJzXCIsIEpTT04uc3RyaW5naWZ5KGxpc3RzKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TG9jYWxEYXRhID0gKCkgPT4ge1xuICAgIGlmIChcbiAgICAgICFKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0FyclwiKSkgfHxcbiAgICAgICFKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9sZGVyc1wiKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImZhbHNlXCIpO1xuICAgIH1cbiAgICB0b2RvQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9BcnJcIikpO1xuICAgIGxpc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvbGRlcnNcIikpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUxvY2FsRGF0YSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRvZG9BcnJcIik7XG4gIH07XG5cbiAgZ2V0TG9jYWxEYXRhKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUb2RvLFxuICAgIHRvZG9BcnIsXG4gICAgbGlzdHMsXG4gICAgc2V0TG9jYWxEYXRhLFxuICAgIGdldExvY2FsRGF0YSxcbiAgICBkZWxldGVMb2NhbERhdGEsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiaW1wb3J0IERvbSBmcm9tIFwiLi9Eb21cIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL1RvZG9cIjtcbmltcG9ydCBMb2dpYyBmcm9tIFwiLi9Mb2dpY1wiO1xuaW1wb3J0IHsgTW9kYWxzIH0gZnJvbSBcIi4vTW9kYWxzXCI7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgY29uc3QgZ2VuZXJhdGVVSSA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICAgICAgbG9nby5pbm5lclRleHQgPSBcIlRvZG8gTGlzdFwiO1xuXG4gICAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZChcImFkZC10b2RvXCIpO1xuICAgICAgYWRkVG9kb0J0bi5pbm5lclRleHQgPSBcIitcIjtcblxuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGFkZFRvZG9CdG4pO1xuXG4gICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBtYWluID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xuXG4gICAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0b2Rvcy5jbGFzc0xpc3QuYWRkKFwidG9kb3NcIik7XG5cbiAgICAgIGNvbnN0IHRvZG9zVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICB0b2Rvc1VsLmNsYXNzTGlzdC5hZGQoXCJ0b2Rvcy11bFwiKTtcblxuICAgICAgY29uc3QgbGlzdHNVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgIGxpc3RzVWwuY2xhc3NMaXN0LmFkZChcInRvZG9zLWxpc3RzXCIpO1xuXG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtZm9sZGVyXCIpO1xuICAgICAgYnRuLmlubmVySFRNTCA9IFwiQWRkIEZvbGRlciA8Yj4rPC9iPlwiO1xuXG4gICAgICBjb25zdCBmb2xkZXJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICBmb2xkZXJGb3JtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJhZGQtZm9sZGVyLWlucHV0XCIpO1xuICAgICAgZm9sZGVyRm9ybS5hcHBlbmRDaGlsZChmaWVsZCk7XG5cbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdHNVbCk7XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGZvbGRlckZvcm0pO1xuICAgICAgdG9kb3MuYXBwZW5kQ2hpbGQodG9kb3NVbCk7XG4gICAgICBtYWluLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0b2Rvcyk7XG5cbiAgICAgIHJldHVybiBtYWluO1xuICAgIH0pKCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKE1vZGFscy5hZGRUb2RvTW9kYWwoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBEb20ubW9kYWxCdG5zKCk7XG4gICAgVG9kby50b2RvQXJyLmZvckVhY2goTG9naWMuZGlzcGxheVRvZG8pO1xuICAgIFRvZG8ubGlzdHMuZm9yRWFjaChMb2dpYy5kaXNwbGF5TGlzdHMpO1xuICAgIERvbS5maWx0ZXJUb2RvcygpO1xuICAgIExvZ2ljLnVwZGF0ZUxpc3RzKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2VuZXJhdGVVSSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL2NvbXBvbmVudHMvVUlcIjtcblxud2luZG93Lm9ubG9hZCA9IFVJLmdlbmVyYXRlVUkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua29kaW5fdG9kb19saXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua29kaW5fdG9kb19saXN0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX3NvdXItZDcxZGYzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=