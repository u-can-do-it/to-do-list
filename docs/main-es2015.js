(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <div class=\"todo-wrapper\">\n    <app-header></app-header>\n    <app-todo-controller></app-todo-controller>\n    <app-todo-list></app-todo-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h2 class=\"header\">To do list</h2>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/todo-controller/todo-controller.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/todo-controller/todo-controller.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-controller\">\n  <input\n    class=\"todo-controller__input\"\n    type=\"text\"\n    [(ngModel)]=\"taskText\"\n    placeholder=\"Add a new task\"\n    name=\"task\"\n    (keydown)=\"onKeydown($event)\"\n  />\n  <div class=\"todo-controller__btns\">\n    <button class=\"btn todo-controller-add\" (click)=\"addTask()\">Add</button>\n    <button class=\"btn todo-controller-remove\" (click)=\"removeTask()\">\n      Remove\n    </button>\n    <button class=\"btn todo-controller-clear\" (click)=\"clearTasks()\">\n      Clear\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/todo-list/todo-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/todo-list/todo-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-wrapper\">\n  <ul class=\"list\">\n    <li class=\"list__item\" *ngFor=\"let task of todoService.getTasks()\">\n      <p class=\"pargraph\">\n        {{ task.text }}\n      </p>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  margin: 0 0 20px;\n  background-color: #3c4249;\n  border-radius: 5px;\n  min-width: 320px;\n  min-height: 50%;\n  -webkit-animation: appear 1s forwards;\n          animation: appear 1s forwards;\n  box-shadow: 0px 6px 36px 3px rgba(0, 0, 0, 0.55);\n}\n@media only screen and (max-width: 25em) {\n  .app {\n    top: unset;\n    left: unset;\n    -webkit-transform: none;\n            transform: none;\n    min-width: unset;\n    width: 100%;\n    height: 100vh;\n    margin: 0;\n    border-radius: unset;\n    overflow: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERBVEFcXERPQ1VNRU5UU1xcSkFWQV9MRUFSTklOR1xcZnJvbnRcXEFuZ3VsYXJcXHRvZG9saXN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Q6XFxEQVRBXFxET0NVTUVOVFNcXEpBVkFfTEVBUk5JTkdcXGZyb250XFxBbmd1bGFyXFx0b2RvbGlzdC9zcmNcXHN0eWxlc1xcZ2xvYmFsXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL0Q6XFxEQVRBXFxET0NVTUVOVFNcXEpBVkFfTEVBUk5JTkdcXGZyb250XFxBbmd1bGFyXFx0b2RvbGlzdC9zcmNcXHN0eWxlc1xcZ2xvYmFsXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkNMYztFRE1kLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFRU9BLGdEQUFBO0FDUkY7QURhSTtFRnRCSjtJQWNJLFVBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7WUFBQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7SUFDQSxvQkFBQTtJQUNBLGNBQUE7RUdERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmFwcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgbWFyZ2luOiAwIDAgMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWluLXdpZHRoOiAzMjBweDtcclxuICBtaW4taGVpZ2h0OiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBhcHBlYXIgMXMgZm9yd2FyZHM7XHJcbiAgQGluY2x1ZGUgc2hhZG93O1xyXG5cclxuICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XHJcbiAgICB0b3A6IHVuc2V0O1xyXG4gICAgbGVmdDogdW5zZXQ7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbn1cclxuIiwiJGNvbG9yLXdoaXRlOiB3aGl0ZTtcclxuJGNvbG9yLWJsYWNrOiBibGFjaztcclxuJGNvbG9yLWJjay1ncmFkLTE6ICM4ZTJkZTI7XHJcbiRjb2xvci1iY2stZ3JhZC0yOiAjNGEwMGUwO1xyXG4kY29sb3ItcHJpbWFyeTogIzNjNDI0OTtcclxuJGNvbG9yLWRhcms6ICMzNDNhM2Y7XHJcbiRjb2xvci1ib3JkZXI6ICMyZDMzM2E7XHJcbiRjb2xvci1mb250LWRhcms6ICM5Mjk5YTU7XHJcbiRjb2xvci1yb3lhbC1ibHVlOiAjNWYxYWU3O1xyXG4iLCJAbWl4aW4gYWJzQ2VudGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5AbWl4aW4gaG9yaXpvbnRhbENlbnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRlZEJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3ItYmNrLWdyYWQtMSwgJGNvbG9yLWJjay1ncmFkLTIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xyXG4gIGFuaW1hdGlvbjogYmNrR3JhZGllbnQgMTBzIGVhc2UgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBtaXhpbiBzaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggMzZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU1KTtcclxufVxyXG5cclxuQG1peGluIHJlc3BvbmQoJGJyZWFrcG9pbnQpIHtcclxuICBAaWYgJGJyZWFrcG9pbnQgPT0gcGhvbmUge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNWVtKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfSAvLzQwMHB4XHJcbiAgfVxyXG59XHJcbiIsIi5hcHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjNDI0OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBtaW4taGVpZ2h0OiA1MCU7XG4gIGFuaW1hdGlvbjogYXBwZWFyIDFzIGZvcndhcmRzO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDM2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC41NSk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1ZW0pIHtcbiAgLmFwcCB7XG4gICAgdG9wOiB1bnNldDtcbiAgICBsZWZ0OiB1bnNldDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiB1bnNldDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "todolist";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var _components_todo_controller_todo_controller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/todo-controller/todo-controller.component */ "./src/app/components/todo-controller/todo-controller.component.ts");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_todo_controller_todo_controller_component__WEBPACK_IMPORTED_MODULE_8__["TodoControllerComponent"],
            _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_9__["TodoListComponent"]
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        providers: [_services_todo_service__WEBPACK_IMPORTED_MODULE_7__["TodoService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  box-sizing: border-box;\n  text-align: center;\n  font-size: 24px;\n  text-transform: uppercase;\n  padding: 25px 25px 5px;\n  margin: 0 8px 25px;\n  border-bottom: solid 1px #343a3f;\n  letter-spacing: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXERBVEFcXERPQ1VNRU5UU1xcSkFWQV9MRUFSTklOR1xcZnJvbnRcXEFuZ3VsYXJcXHRvZG9saXN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2dsb2JhbC92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9nbG9iYWwvbWl4aW5zXCI7XHJcblxyXG4uaGVhZGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiAyNXB4IDI1cHggNXB4O1xyXG4gIG1hcmdpbjogMCA4cHggMjVweDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGNvbG9yLWRhcms7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDI1cHggMjVweCA1cHg7XG4gIG1hcmdpbjogMCA4cHggMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMzNDNhM2Y7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
    addTodo() { }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/todo-controller/todo-controller.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/todo-controller/todo-controller.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 25em) {\n  .todo-controller {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0);\n    width: 100vw;\n    z-index: 2;\n  }\n}\n.todo-controller__input {\n  display: block;\n  margin: 0 auto;\n  background-color: #343a3f;\n  border: 1px solid #2d333a;\n  width: 80%;\n  height: 20px;\n  color: #9299a5;\n  font-size: 1.6rem;\n  transition: all 0.2s;\n  padding-left: 8px;\n}\n.todo-controller__input:focus {\n  outline: none;\n  border-bottom: 1px solid #5f1ae7;\n}\n.todo-controller__btns {\n  margin: 10px 0 20px;\n  display: flex;\n  justify-content: center;\n}\n.btn,\n.btn:visited {\n  border-radius: 6px;\n  position: relative;\n  background-color: #343a3f;\n  border: none;\n  margin: 4px;\n  font-size: 16px;\n  color: #9299a5;\n  padding: 8px;\n  text-align: center;\n  transition: all 0.1s;\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n  box-shadow: 0 5px #25282b;\n  text-transform: uppercase;\n}\n.btn:hover {\n  -webkit-transform: translateY(1px);\n          transform: translateY(1px);\n  box-shadow: 0 4px #25282b;\n}\n.btn:active {\n  -webkit-transform: translateY(3px);\n          transform: translateY(3px);\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWNvbnRyb2xsZXIvRDpcXERBVEFcXERPQ1VNRU5UU1xcSkFWQV9MRUFSTklOR1xcZnJvbnRcXEFuZ3VsYXJcXHRvZG9saXN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0b2RvLWNvbnRyb2xsZXJcXHRvZG8tY29udHJvbGxlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWNvbnRyb2xsZXIvRDpcXERBVEFcXERPQ1VNRU5UU1xcSkFWQV9MRUFSTklOR1xcZnJvbnRcXEFuZ3VsYXJcXHRvZG9saXN0L3N0ZGluIiwic3JjL2FwcC9jb21wb25lbnRzL3RvZG8tY29udHJvbGxlci90b2RvLWNvbnRyb2xsZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1jb250cm9sbGVyL0Q6XFxEQVRBXFxET0NVTUVOVFNcXEpBVkFfTEVBUk5JTkdcXGZyb250XFxBbmd1bGFyXFx0b2RvbGlzdC9zcmNcXHN0eWxlc1xcZ2xvYmFsXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJJO0VDdEJKO0lBRUksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLHFDQUFBO1lBQUEsNkJBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQ0ZGO0FBQ0Y7QURJRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJFWFM7RUZZVCx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0ViYztFRmNkLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FESUk7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7QUNGTjtBREtFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNISjtBRE1BOztFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVuQ1c7RUZvQ1gsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0VyQ2dCO0VGc0NoQixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDSEY7QURNQTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSx5QkFBQTtBQ0hGO0FES0E7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1jb250cm9sbGVyL3RvZG8tY29udHJvbGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBhYnNDZW50ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbkBtaXhpbiBob3Jpem9udGFsQ2VudGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuQG1peGluIGFuaW1hdGVkQmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRjb2xvci1iY2stZ3JhZC0xLCAkY29sb3ItYmNrLWdyYWQtMik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XHJcbiAgYW5pbWF0aW9uOiBiY2tHcmFkaWVudCAxMHMgZWFzZSBpbmZpbml0ZTtcclxufVxyXG5cclxuQG1peGluIHNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xyXG59XHJcblxyXG5AbWl4aW4gcmVzcG9uZCgkYnJlYWtwb2ludCkge1xyXG4gIEBpZiAkYnJlYWtwb2ludCA9PSBwaG9uZSB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1ZW0pIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9IC8vNDAwcHhcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9nbG9iYWwvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvZ2xvYmFsL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnRvZG8tY29udHJvbGxlciB7XHJcbiAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgJl9faW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYXJrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvcmRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogJGNvbG9yLWZvbnQtZGFyaztcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1yb3lhbC1ibHVlO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19idG5zIHtcclxuICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbi5idG4sXHJcbi5idG46dmlzaXRlZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGFyaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAkY29sb3ItZm9udC1kYXJrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4ICMyNTI4MmI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggIzI1MjgyYjtcclxufVxyXG4uYnRuOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1ZW0pIHtcbiAgLnRvZG8tY29udHJvbGxlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbn1cbi50b2RvLWNvbnRyb2xsZXJfX2lucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTNmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmQzMzNhO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjOTI5OWE1O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLnRvZG8tY29udHJvbGxlcl9faW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVmMWFlNztcbn1cbi50b2RvLWNvbnRyb2xsZXJfX2J0bnMge1xuICBtYXJnaW46IDEwcHggMCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bixcbi5idG46dmlzaXRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTNmO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjOTI5OWE1O1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDVweCAjMjUyODJiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4ICMyNTI4MmI7XG59XG5cbi5idG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59IiwiJGNvbG9yLXdoaXRlOiB3aGl0ZTtcclxuJGNvbG9yLWJsYWNrOiBibGFjaztcclxuJGNvbG9yLWJjay1ncmFkLTE6ICM4ZTJkZTI7XHJcbiRjb2xvci1iY2stZ3JhZC0yOiAjNGEwMGUwO1xyXG4kY29sb3ItcHJpbWFyeTogIzNjNDI0OTtcclxuJGNvbG9yLWRhcms6ICMzNDNhM2Y7XHJcbiRjb2xvci1ib3JkZXI6ICMyZDMzM2E7XHJcbiRjb2xvci1mb250LWRhcms6ICM5Mjk5YTU7XHJcbiRjb2xvci1yb3lhbC1ibHVlOiAjNWYxYWU3O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/todo-controller/todo-controller.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/todo-controller/todo-controller.component.ts ***!
  \*************************************************************************/
/*! exports provided: TodoControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoControllerComponent", function() { return TodoControllerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/todo.service */ "./src/app/services/todo.service.ts");



let TodoControllerComponent = class TodoControllerComponent {
    constructor(todoService) {
        this.todoService = todoService;
        this.taskText = "";
    }
    ngOnInit() { }
    addTask() {
        this.todoService.addTask(this.taskText);
        this.taskText = "";
    }
    // calling addTask when user press the enter in a input form.
    onKeydown(event) {
        event.key === "Enter" ? this.addTask() : null;
    }
    clearTasks() {
        this.todoService.clearTasks();
    }
    removeTask() {
        this.todoService.removeTasks();
    }
};
TodoControllerComponent.ctorParameters = () => [
    { type: _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }
];
TodoControllerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-todo-controller",
        template: __webpack_require__(/*! raw-loader!./todo-controller.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/todo-controller/todo-controller.component.html"),
        styles: [__webpack_require__(/*! ./todo-controller.component.scss */ "./src/app/components/todo-controller/todo-controller.component.scss")]
    })
], TodoControllerComponent);



/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes bckGradient {\n  0% {\n    background-position: 0% 17%;\n  }\n  50% {\n    background-position: 100% 84%;\n  }\n  100% {\n    background-position: 0% 17%;\n  }\n}\n@keyframes bckGradient {\n  0% {\n    background-position: 0% 17%;\n  }\n  50% {\n    background-position: 100% 84%;\n  }\n  100% {\n    background-position: 0% 17%;\n  }\n}\n@-webkit-keyframes appear {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes appear {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes zza {\n  0% {\n    -webkit-transform: translateY(90deg);\n            transform: translateY(90deg);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes zza {\n  0% {\n    -webkit-transform: translateY(90deg);\n            transform: translateY(90deg);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.list {\n  opacity: 0;\n  -webkit-animation: appear 1s forwards;\n          animation: appear 1s forwards;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n  list-style-type: none;\n  padding: 0 20px 20px;\n}\n@media only screen and (max-width: 25em) {\n  .list {\n    height: 68vh;\n    overflow: auto;\n  }\n}\n.list__item {\n  opacity: 0;\n  -webkit-animation: appear 1s forwards;\n          animation: appear 1s forwards;\n  padding: 10px 0 10px 10px;\n  position: relative;\n}\n.list__item:not(:last-child)::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 90%;\n  height: 1px;\n  background-color: #2d333a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvRDpcXERBVEFcXERPQ1VNRU5UU1xcSkFWQV9MRUFSTklOR1xcZnJvbnRcXEFuZ3VsYXJcXHRvZG9saXN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0b2RvLWxpc3RcXHRvZG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RvZG8tbGlzdC9EOlxcREFUQVxcRE9DVU1FTlRTXFxKQVZBX0xFQVJOSU5HXFxmcm9udFxcQW5ndWxhclxcdG9kb2xpc3Qvc3RkaW4iLCJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1saXN0L0Q6XFxEQVRBXFxET0NVTUVOVFNcXEpBVkFfTEVBUk5JTkdcXGZyb250XFxBbmd1bGFyXFx0b2RvbGlzdC9zcmNcXHN0eWxlc1xcZ2xvYmFsXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1saXN0L0Q6XFxEQVRBXFxET0NVTUVOVFNcXEpBVkFfTEVBUk5JTkdcXGZyb250XFxBbmd1bGFyXFx0b2RvbGlzdC9zcmNcXHN0eWxlc1xcZ2xvYmFsXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDJCQUFBO0VDQ0Y7RURDQTtJQUNFLDZCQUFBO0VDQ0Y7RURDQTtJQUNFLDJCQUFBO0VDQ0Y7QUFDRjtBRFZBO0VBQ0U7SUFDRSwyQkFBQTtFQ0NGO0VEQ0E7SUFDRSw2QkFBQTtFQ0NGO0VEQ0E7SUFDRSwyQkFBQTtFQ0NGO0FBQ0Y7QURDQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0VEQ0E7SUFDRSxVQUFBO0VDQ0Y7QUFDRjtBRFBBO0VBQ0U7SUFDRSxVQUFBO0VDQ0Y7RURDQTtJQUNFLFVBQUE7RUNDRjtBQUNGO0FEQ0E7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNDRjtFRENBO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ0NGO0FBQ0Y7QURQQTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0NGO0VEQ0E7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDQ0Y7QUFDRjtBQ3RCQTtFQUNFLFVBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUR3QkY7QUVSSTtFRHJCSjtJQVFJLFlBQUE7SUFDQSxjQUFBO0VEeUJGO0FBQ0Y7QUN2QkU7RUFDRSxVQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUR5Qko7QUN0Qk07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJFeEJPO0FIZ0RmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBiY2tHcmFkaWVudCB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMTclO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA4NCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMTclO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHp6YSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcbiIsIkBrZXlmcmFtZXMgYmNrR3JhZGllbnQge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMTclO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA4NCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMTclO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFwcGVhciB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgenphIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4ubGlzdCB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogYXBwZWFyIDFzIGZvcndhcmRzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMCAyMHB4IDIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1ZW0pIHtcbiAgLmxpc3Qge1xuICAgIGhlaWdodDogNjh2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufVxuLmxpc3RfX2l0ZW0ge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGFwcGVhciAxcyBmb3J3YXJkcztcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxpc3RfX2l0ZW06bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMzNhO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvZ2xvYmFsL2FuaW1hdGlvbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9nbG9iYWwvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvZ2xvYmFsL21peGluc1wiO1xyXG5cclxuLmxpc3Qge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uOiBhcHBlYXIgMXMgZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwIDIwcHggMjBweDtcclxuXHJcbiAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xyXG4gICAgaGVpZ2h0OiA2OHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb246IGFwcGVhciAxcyBmb3J3YXJkcztcclxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3JkZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQG1peGluIGFic0NlbnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuQG1peGluIGhvcml6b250YWxDZW50ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0ZWRCYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGNvbG9yLWJjay1ncmFkLTEsICRjb2xvci1iY2stZ3JhZC0yKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuICBhbmltYXRpb246IGJja0dyYWRpZW50IDEwcyBlYXNlIGluZmluaXRlO1xyXG59XHJcblxyXG5AbWl4aW4gc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IDM2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC41NSk7XHJcbn1cclxuXHJcbkBtaXhpbiByZXNwb25kKCRicmVha3BvaW50KSB7XHJcbiAgQGlmICRicmVha3BvaW50ID09IHBob25lIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjVlbSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH0gLy80MDBweFxyXG4gIH1cclxufVxyXG4iLCIkY29sb3Itd2hpdGU6IHdoaXRlO1xyXG4kY29sb3ItYmxhY2s6IGJsYWNrO1xyXG4kY29sb3ItYmNrLWdyYWQtMTogIzhlMmRlMjtcclxuJGNvbG9yLWJjay1ncmFkLTI6ICM0YTAwZTA7XHJcbiRjb2xvci1wcmltYXJ5OiAjM2M0MjQ5O1xyXG4kY29sb3ItZGFyazogIzM0M2EzZjtcclxuJGNvbG9yLWJvcmRlcjogIzJkMzMzYTtcclxuJGNvbG9yLWZvbnQtZGFyazogIzkyOTlhNTtcclxuJGNvbG9yLXJveWFsLWJsdWU6ICM1ZjFhZTc7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/todo.service */ "./src/app/services/todo.service.ts");



let TodoListComponent = class TodoListComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ngOnInit() { }
};
TodoListComponent.ctorParameters = () => [
    { type: _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }
];
TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-todo-list",
        template: __webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/todo-list/todo-list.component.html"),
        styles: [__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/components/todo-list/todo-list.component.scss")]
    })
], TodoListComponent);



/***/ }),

/***/ "./src/app/models/task/task.ts":
/*!*************************************!*\
  !*** ./src/app/models/task/task.ts ***!
  \*************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
class Task {
    constructor(id, text) {
        this.id = id;
        this.text = `Task number ${this.id + 1} ${text}`;
    }
}
Task.ctorParameters = () => [
    { type: Number },
    { type: String }
];


/***/ }),

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_task_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/task/task */ "./src/app/models/task/task.ts");



let TodoService = class TodoService {
    constructor() {
        this.localKey = "tasks";
        this.tasks = JSON.parse(localStorage.getItem(this.localKey));
        if (!this.tasks) {
            this.tasks = [];
        }
        this.nextId = this.tasks.length;
    }
    //adds task on the begining of the list
    addTask(text) {
        const task = new _models_task_task__WEBPACK_IMPORTED_MODULE_2__["Task"](this.nextId, text);
        this.tasks.unshift(task);
        this.nextId++;
        this.saveInLocalStorage(this.tasks);
    }
    getTasks() {
        return this.tasks;
    }
    //removes last task from list of tasks
    removeTasks() {
        this.tasks.splice(0, 1);
        this.nextId = this.tasks.length;
        this.saveInLocalStorage(this.tasks);
    }
    //deletes all tasks
    clearTasks() {
        this.tasks = [];
        this.nextId = 0;
        window.localStorage.removeItem(this.localKey);
    }
    saveInLocalStorage(tasks) {
        localStorage.setItem(this.localKey, JSON.stringify(this.tasks));
    }
};
TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], TodoService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\DATA\DOCUMENTS\JAVA_LEARNING\front\Angular\todolist\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map