(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _film_detail_film_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./film-detail/film-detail.component */ "./src/app/film-detail/film-detail.component.ts");
/* harmony import */ var _film_category_film_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./film-category/film-category.component */ "./src/app/film-category/film-category.component.ts");





var routes = [
    {
        path: 'film/list',
        component: _film_category_film_category_component__WEBPACK_IMPORTED_MODULE_4__["FilmCategoryComponent"]
    },
    {
        path: 'film/:id',
        component: _film_detail_film_detail_component__WEBPACK_IMPORTED_MODULE_3__["FilmDetailComponent"]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'film/list'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _film_list_film_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./film-list/film-list.component */ "./src/app/film-list/film-list.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _film_detail_film_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./film-detail/film-detail.component */ "./src/app/film-detail/film-detail.component.ts");
/* harmony import */ var _film_category_film_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./film-category/film-category.component */ "./src/app/film-category/film-category.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _film_list_film_list_component__WEBPACK_IMPORTED_MODULE_5__["FilmListComponent"],
                _film_detail_film_detail_component__WEBPACK_IMPORTED_MODULE_8__["FilmDetailComponent"],
                _film_category_film_category_component__WEBPACK_IMPORTED_MODULE_9__["FilmCategoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/film-category/film-category.component.html":
/*!************************************************************!*\
  !*** ./src/app/film-category/film-category.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let film of films\">\r\n    <app-film-list [title]=\"film.title\" [filmList]=\"film.films\"></app-film-list>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/film-category/film-category.component.scss":
/*!************************************************************!*\
  !*** ./src/app/film-category/film-category.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbG0tY2F0ZWdvcnkvZmlsbS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/film-category/film-category.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/film-category/film-category.component.ts ***!
  \**********************************************************/
/*! exports provided: FilmCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmCategoryComponent", function() { return FilmCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _film_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../film.service */ "./src/app/film.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var FilmCategoryComponent = /** @class */ (function () {
    function FilmCategoryComponent(filmService) {
        this.filmService = filmService;
        this.films = [];
        this.getfilms(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production);
    }
    FilmCategoryComponent.prototype.getfilms = function (production) {
        var _this = this;
        if (!production) {
            this.films = [
                {
                    title: '上映中電影',
                    films: [
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0MzA1ODg5M15BMl5BanBnXkFtZTYwODYxMTU3._V1_SX300.jpg',
                            Title: '1',
                        },
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0MzA1ODg5M15BMl5BanBnXkFtZTYwODYxMTU3._V1_SX300.jpg',
                            Title: '1',
                        },
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0MzA1ODg5M15BMl5BanBnXkFtZTYwODYxMTU3._V1_SX300.jpg',
                            Title: '1',
                        },
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0MzA1ODg5M15BMl5BanBnXkFtZTYwODYxMTU3._V1_SX300.jpg',
                            Title: '1',
                        },
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0MzA1ODg5M15BMl5BanBnXkFtZTYwODYxMTU3._V1_SX300.jpg',
                            Title: '1',
                        }
                    ]
                },
                {
                    title: '喜愛的電影',
                    films: [
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                            Title: '1',
                        },
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                            Title: '1',
                        },
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                            Title: '1',
                        }
                    ]
                },
                {
                    title: '近期上映',
                    films: [
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                            Title: '1',
                        },
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                            Title: '1',
                        },
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                            Title: '1',
                        },
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                            Title: '1',
                        },
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                            Title: '1',
                        },
                        {
                            Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                            Title: '1',
                        }
                    ]
                },
            ];
            return;
        }
        Object.keys(this.filmService.films).forEach(function (filmTypeTitle) {
            var httprequests = _this.filmService.films[filmTypeTitle].map(function (movieTitle) {
                return _this.filmService.getFilms(movieTitle);
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(httprequests).subscribe(function (resp) {
                console.log(resp);
                _this.films.push({
                    title: filmTypeTitle,
                    films: resp.slice()
                });
                console.log(filmTypeTitle, resp);
            });
        });
    };
    FilmCategoryComponent.prototype.ngOnInit = function () {
    };
    FilmCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film-category',
            template: __webpack_require__(/*! ./film-category.component.html */ "./src/app/film-category/film-category.component.html"),
            styles: [__webpack_require__(/*! ./film-category.component.scss */ "./src/app/film-category/film-category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_film_service__WEBPACK_IMPORTED_MODULE_3__["FilmService"]])
    ], FilmCategoryComponent);
    return FilmCategoryComponent;
}());



/***/ }),

/***/ "./src/app/film-detail/film-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/film-detail/film-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"fa fa-times fa-2x\" (click)=\"backToList()\"></div>\r\n    <div class=\"detail\">\r\n        <div class=\"media\">\r\n            <img [src]=\"filmData.Poster\" alt=\"actor\">\r\n            <div class=\"media-body\">\r\n                <h5>{{ filmData.Title }}</h5>\r\n                <div class=\"actor-designation\">\r\n                    <a class=\"rating\" href=\"javascript:void(0)\"><i class=\"fa fa-star\"></i>{{ filmData.imdbRating }}/10</a>\r\n                </div>\r\n                <div class=\"actor-biodata\">\r\n                    <p><span class=\"title\">發行日期</span>:<span>{{ filmData.Released | date }}</span></p>\r\n                    <p><span class=\"title\">電影時長</span>:<span>{{ filmData.Runtime }}</span></p>\r\n                    <p><span class=\"title\">演員</span>:<span>{{ filmData.Actors }}</span></p>\r\n                    <p><span class=\"title\">國家</span>:<span>{{ filmData.Country }}</span></p>\r\n                    <p><span class=\"title\">導演</span>: <span>{{ filmData.Director}}</span></p>\r\n                    <p><span class=\"title\">語言</span>:<span>{{ filmData.Language }}</span></p>\r\n                    <p><span class=\"title\">製造商</span>: <span>{{ filmData.Production }}</span></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"description\">\r\n        <h5 class=\"section-title-3\">情節描述</h5>\r\n        <p>{{ filmData.Plot }}</p>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/film-detail/film-detail.component.scss":
/*!********************************************************!*\
  !*** ./src/app/film-detail/film-detail.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  margin-right: 30px; }\n\n.media-body {\n  margin-top: 17px; }\n\n.actor-designation {\n  margin-bottom: 14px; }\n\n.actor-designation a {\n  color: #9b9b9b; }\n\n.actor-designation .rating {\n  margin-right: 10px; }\n\n.actor-designation a i {\n  color: #ffab00;\n  margin-right: 5px; }\n\n.actor-biodata span {\n  font-weight: 300;\n  margin-left: 15px; }\n\n.actor-biodata .title {\n  width: 105px;\n  display: inline-block;\n  margin-left: 0;\n  font-weight: 500; }\n\nh5 {\n  font-size: 22px;\n  font-weight: 400; }\n\n.section-title-3 {\n  border-left: 4px solid #ffab00;\n  line-height: 40px;\n  padding-left: 17px;\n  margin-bottom: 30px; }\n\n.detail {\n  margin-bottom: 65px;\n  margin-top: 30px; }\n\n.container {\n  position: relative; }\n\n.fa.fa-times {\n  position: absolute;\n  right: 10px;\n  cursor: pointer; }\n\n@media (max-width: 767px) {\n  .media {\n    display: block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbS1kZXRhaWwvQzpcXFVzZXJzXFxBbGJlcnRcXERvY3VtZW50c1xcZGV2ZWxvcFxcaW1kYi1maWxtcy9zcmNcXGFwcFxcZmlsbS1kZXRhaWxcXGZpbG0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHakI7RUFDRTtJQUNFLGNBQWMsRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZmlsbS1kZXRhaWwvZmlsbS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLm1lZGlhLWJvZHkge1xyXG4gIG1hcmdpbi10b3A6IDE3cHg7XHJcbn1cclxuLmFjdG9yLWRlc2lnbmF0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG59XHJcblxyXG4uYWN0b3ItZGVzaWduYXRpb24gYSB7XHJcbiAgY29sb3I6ICM5YjliOWI7XHJcbn1cclxuXHJcbi5hY3Rvci1kZXNpZ25hdGlvbiAucmF0aW5nIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5hY3Rvci1kZXNpZ25hdGlvbiBhIGkge1xyXG4gIGNvbG9yOiAjZmZhYjAwO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5hY3Rvci1iaW9kYXRhIHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5hY3Rvci1iaW9kYXRhIC50aXRsZSB7XHJcbiAgd2lkdGg6IDEwNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlLTMge1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZmYWIwMDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmRldGFpbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjVweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mYS5mYS10aW1lcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLm1lZGlhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/film-detail/film-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/film-detail/film-detail.component.ts ***!
  \******************************************************/
/*! exports provided: FilmDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmDetailComponent", function() { return FilmDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _film_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../film.service */ "./src/app/film.service.ts");




var FilmDetailComponent = /** @class */ (function () {
    function FilmDetailComponent(route, filmService, router) {
        this.route = route;
        this.filmService = filmService;
        this.router = router;
    }
    FilmDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.filmService.getFilms(id).subscribe(function (film) {
            _this.filmData = film;
        });
    };
    FilmDetailComponent.prototype.backToList = function () {
        this.router.navigate([''], { relativeTo: this.route });
    };
    FilmDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film-detail',
            template: __webpack_require__(/*! ./film-detail.component.html */ "./src/app/film-detail/film-detail.component.html"),
            styles: [__webpack_require__(/*! ./film-detail.component.scss */ "./src/app/film-detail/film-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _film_service__WEBPACK_IMPORTED_MODULE_3__["FilmService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FilmDetailComponent);
    return FilmDetailComponent;
}());



/***/ }),

/***/ "./src/app/film-list/film-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/film-list/film-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"dark\">{{ title }}</h5>\r\n\r\n<div class=\"image-container\">\r\n    <div *ngFor=\"let film of filmList\"\r\n        class=\"image\"\r\n        [ngStyle]=\"{ 'background-image': 'url(' + film.Poster + ')'}\"\r\n        (click)=\"clickImage(film)\">\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/film-list/film-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/film-list/film-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-container {\n  width: 100%;\n  overflow-x: scroll;\n  -webkit-overflow-scrolling: touch;\n  white-space: nowrap;\n  padding: 0 1rem .5rem 1rem; }\n  .image-container .image {\n    position: relative;\n    height: 400px;\n    width: 250px;\n    overflow: hidden;\n    display: inline-block;\n    cursor: pointer;\n    background-size: cover;\n    background-repeat: no-repeat; }\n  .image-container .image:not(:last-child) {\n      margin-right: 10px; }\n  h5 {\n  margin-left: 1rem;\n  margin-top: .5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbS1saXN0L0M6XFxVc2Vyc1xcQWxiZXJ0XFxEb2N1bWVudHNcXGRldmVsb3BcXGltZGItZmlsbXMvc3JjXFxhcHBcXGZpbG0tbGlzdFxcZmlsbS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLDBCQUEwQixFQUFBO0VBTDVCO0lBT0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQVhjO0lBWWQsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDRCQUE0QixFQUFBO0VBZGhDO01BaUJNLGtCQUFrQixFQUFBO0VBS3hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmlsbS1saXN0L2ZpbG0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRpbWFnZVdpZHRoOiAyNTBweDtcclxuXHJcbi5pbWFnZS1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAuNXJlbSAxcmVtO1xyXG4gIC5pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6ICRpbWFnZVdpZHRoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmg1IHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAuNXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/film-list/film-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/film-list/film-list.component.ts ***!
  \**************************************************/
/*! exports provided: FilmListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmListComponent", function() { return FilmListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FilmListComponent = /** @class */ (function () {
    function FilmListComponent(router, route) {
        this.router = router;
        this.route = route;
        this.title = '';
        this.filmList = [];
    }
    FilmListComponent.prototype.ngOnInit = function () {
    };
    FilmListComponent.prototype.clickImage = function (film) {
        this.router.navigate(['/film', film.Title], { relativeTo: this.route });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilmListComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilmListComponent.prototype, "filmList", void 0);
    FilmListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film-list',
            template: __webpack_require__(/*! ./film-list.component.html */ "./src/app/film-list/film-list.component.html"),
            styles: [__webpack_require__(/*! ./film-list.component.scss */ "./src/app/film-list/film-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FilmListComponent);
    return FilmListComponent;
}());



/***/ }),

/***/ "./src/app/film.service.ts":
/*!*********************************!*\
  !*** ./src/app/film.service.ts ***!
  \*********************************/
/*! exports provided: FilmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmService", function() { return FilmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var FilmService = /** @class */ (function () {
    function FilmService(http) {
        this.http = http;
        this.films = {
            '上映中電影': [
                'ALITA BATTLE ANGEL',
                'Run the Race',
                'Prosecuting Evil',
                'The Upside',
                'A Dog\'s Way Home',
                'Glass',
                'Arctic',
                'Isn\'t It Romantic',
                'Happy Death Day 2U',
                'To Dust',
                'Untogether',
                'The Man Who Killed Hitler and Then The Bigfoot',
            ],
            '喜愛的電影': [
                'How to Train Your Dragon: The Hidden World',
                'Fighting with My Family',
                'Total Dhamaal',
                'Escape Room',
                'Braid',
                'Serenity',
                'The Kid Who Would Be King',
                'The Prodigy',
                'Cold Pursuit',
            ],
            '近期上映': [
                'HAN DAN',
                'The Lego Movie 2: The Second Part',
                'They Shall Not Grow Old',
                'What Men Want',
                'Cold Pursuit',
                'Miss Bala',
                'The Unicorn',
                'Piercing',
            ]
        };
        this.apiPath = 'https://www.omdbapi.com/';
        this.filmDetail = {};
    }
    FilmService.prototype.getFilms = function (title) {
        var _this = this;
        if (this.filmDetail[title] !== undefined) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.filmDetail[title]);
        }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]({
            fromObject: {
                apikey: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiKey,
                t: title,
                plot: 'full'
            }
        });
        return this.http.get(this.apiPath, {
            params: params,
            responseType: 'json',
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            _this.filmDetail[title] = resp;
            return resp;
        }));
    };
    FilmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], FilmService);
    return FilmService;
}());



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
var environment = {
    production: false,
    apiKey: '964946f1'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Albert\Documents\develop\imdb-films\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map