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
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _shop_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop/products/products.component */ "./src/app/shop/products/products.component.ts");







var routes = [
    {
        path: "",
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: "",
                redirectTo: "gcfashions/home",
                pathMatch: "full",
            },
            {
                path: "gcfashions/home",
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            },
            {
                path: "gcfashions/shop",
                component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_5__["ShopComponent"],
            },
            {
                path: "gcfashions/shop/products",
                component: _shop_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
            },
        ]
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
        this.title = 'GC Fashion Store';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _shop_products_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shop/products/products.component */ "./src/app/shop/products/products.component.ts");
/* harmony import */ var _common_services_shop_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/services/shop.service */ "./src/app/common/services/shop.service.ts");
/* harmony import */ var _common_services_pager_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/services/pager.service */ "./src/app/common/services/pager.service.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_12__["ShopComponent"],
                _shop_products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ],
            providers: [_common_services_shop_service__WEBPACK_IMPORTED_MODULE_14__["ShopService"], _common_services_pager_service__WEBPACK_IMPORTED_MODULE_15__["PagerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/services/pager.service.ts":
/*!**************************************************!*\
  !*** ./src/app/common/services/pager.service.ts ***!
  \**************************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
// @Injectable({
//   providedIn: 'root'
// })
var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array(endPage + 1 - startPage), function (_, i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages,
        };
    };
    return PagerService;
}());



/***/ }),

/***/ "./src/app/common/services/shop.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/services/shop.service.ts ***!
  \*************************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ShopService = /** @class */ (function () {
    function ShopService(http) {
        this.http = http;
    }
    ShopService.prototype.getAll = function (url) {
        return this.http.get(url);
    };
    ShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ShopService);
    return ShopService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer\r\n<footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n  <div class=\"w3-row-padding\">\r\n    <div class=\"w3-col s4\">\r\n      <h4>Contact</h4>\r\n      <p>Questions? Go ahead.</p>\r\n      <form action=\"/action_page.php\" target=\"_blank\">\r\n        <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Name\" name=\"Name\" required></p>\r\n        <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Email\" name=\"Email\" required></p>\r\n        <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Subject\" name=\"Subject\" required></p>\r\n        <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Message\" name=\"Message\" required></p>\r\n        <button type=\"submit\" class=\"w3-button w3-block w3-black\">Send</button>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"w3-col s4\">\r\n      <h4>About</h4>\r\n      <p><a href=\"#\">About us</a></p>\r\n      <p><a href=\"#\">We're hiring</a></p>\r\n      <p><a href=\"#\">Support</a></p>\r\n      <p><a href=\"#\">Find store</a></p>\r\n      <p><a href=\"#\">Shipment</a></p>\r\n      <p><a href=\"#\">Payment</a></p>\r\n      <p><a href=\"#\">Gift card</a></p>\r\n      <p><a href=\"#\">Return</a></p>\r\n      <p><a href=\"#\">Help</a></p>\r\n    </div>\r\n\r\n    <div class=\"w3-col s4 w3-justify\">\r\n      <h4>Store</h4>\r\n      <p><i class=\"fa fa-fw fa-map-marker\"></i> Company Name</p>\r\n      <p><i class=\"fa fa-fw fa-phone\"></i> 0044123123</p>\r\n      <p><i class=\"fa fa-fw fa-envelope\"></i> ex@mail.com</p>\r\n      <h4>We accept</h4>\r\n      <p><i class=\"fa fa-fw fa-cc-amex\"></i> Amex</p>\r\n      <p><i class=\"fa fa-fw fa-credit-card\"></i> Credit Card</p>\r\n      <br>\r\n      <i class=\"fa fa-facebook-official w3-hover-opacity w3-large\"></i>\r\n      <i class=\"fa fa-instagram w3-hover-opacity w3-large\"></i>\r\n      <i class=\"fa fa-snapchat w3-hover-opacity w3-large\"></i>\r\n      <i class=\"fa fa-pinterest-p w3-hover-opacity w3-large\"></i>\r\n      <i class=\"fa fa-twitter w3-hover-opacity w3-large\"></i>\r\n      <i class=\"fa fa-linkedin w3-hover-opacity w3-large\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <p>\r\n    Copyright &copy; 2020 by Smoothstack, Inc. All Rights Reserved.\r\n  </p>\r\n</footer> -->\r\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top menu on small screens -->\r\n<header class=\"w3-bar w3-top w3-hide-large w3-black w3-xlarge\">\r\n  <div class=\"w3-bar-item w3-padding-24 w3-wide\">GC FASHION</div>\r\n  <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding-24 w3-right\" onclick=\"w3_open()\"><i\r\n      class=\"fa fa-bars\"></i></a>\r\n</header>\r\n\r\n<!-- Overlay effect when opening sidebar on small screens -->\r\n<div class=\"w3-overlay w3-hide-large\" onclick=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\"\r\n  id=\"myOverlay\"></div>\r\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'GC Fashion Store';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<router-outlet></router-outlet>\r\n<!-- <app-footer></app-footer> -->\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/shop/products/products.component.css":
/*!******************************************************!*\
  !*** ./src/app/shop/products/products.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shop/products/products.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shop/products/products.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Sidebar/menu -->\r\n <nav class=\"w3-sidebar w3-bar-block w3-white w3-collapse w3-top\" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n   <div class=\"w3-container w3-display-container w3-padding-16\">\r\n     <i onclick=\"w3_close()\" class=\"fa fa-remove w3-hide-large w3-button w3-display-topright\"></i>\r\n     <h3 class=\"w3-wide\"><b>GC Fashion</b></h3>\r\n   </div>\r\n   <div class=\"w3-padding-30 w3-large w3-text-grey\" style=\"font-weight:bold\" *ngFor=\"let c of categories\">\r\n     <!-- TO DO *ngIf=\"c.products.length\"  -->\r\n     <!-- if has subcategories -->\r\n     <!-- <a  class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"  \r\n     (click)=\"loadProductsByCategory(c.catId)\" *ngIf=\"c.subcategories.length > 0\">{{c.catName}}</a> -->\r\n     <a  class=\"nav-link dropdown-toggle\" (click)=\"loadProductsByCategory(c.catId)\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" a\r\n      *ngIf=\"c.subcategories.length > 0\">{{c.catName}}\r\n      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\" *ngFor=\"let sc of c.subcategories\">\r\n        <!-- TO DO *ngIf=\"sc.products.length\"  -->\r\n        <a class=\"dropdown-item\">{{sc.subcatName}}</a>\r\n      </div>\r\n    </a>\r\n     <!-- if no subcategories -->\r\n     <a  class=\"w3-bar-item w3-button\" (click)=\"loadProductsByCategory(c.catId)\" *ngIf=\"c.subcategories.length == 0\">{{c.catName}}</a>\r\n   </div>\r\n   \r\n   <br><br>\r\n\r\n   <a href=\"#footer\" class=\"w3-bar-item w3-button w3-padding-80\">Contact</a>\r\n   <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding\"\r\n     onclick=\"document.getElementById('newsletter').style.display='block'\">Newsletter</a>\r\n   <a href=\"#footer\" class=\"w3-bar-item w3-button w3-padding\">Subscribe</a>\r\n </nav><br>\r\n\r\n <!-- Top menu on small screens -->\r\n <header class=\"w3-bar w3-top w3-hide-large w3-black w3-xlarge\">\r\n   <div class=\"w3-bar-item w3-padding-24 w3-wide\">GC FASHION</div>\r\n   <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding-24 w3-right\" onclick=\"w3_open()\"><i\r\n       class=\"fa fa-bars\"></i></a>\r\n </header>\r\n\r\n <!-- Overlay effect when opening sidebar on small screens -->\r\n <div class=\"w3-overlay w3-hide-large\" onclick=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\"\r\n   id=\"myOverlay\"></div>\r\n\r\n\r\n <!-- !PAGE CONTENT! -->\r\n <div class=\"w3-main\" style=\"margin-left:250px\">\r\n\r\n\r\n   <!-- Push down content on small screens -->\r\n   <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n\r\n   <!-- Top header -->\r\n   <header class=\"w3-container w3-xlarge\">\r\n     <p class=\"w3-left\">Products</p>\r\n     <p class=\"w3-right\">\r\n       <i class=\"fa fa-shopping-cart w3-margin-right\"></i>\r\n       <i class=\"fa fa-search\"></i>\r\n     </p>\r\n   </header>\r\n\r\n   <!-- Image header -->\r\n   <div class=\"w3-display-container w3-container\">\r\n     <img src=\"assets/images/thumbnails/jeans.jpg\" alt=\"Jeans\" style=\"width:100%\">\r\n     <div class=\"w3-display-topleft w3-text-white\" style=\"padding:24px 48px\">\r\n       <h1 class=\"w3-jumbo w3-hide-small\">New arrivals</h1>\r\n       <h1 class=\"w3-hide-large w3-hide-medium\">New arrivals</h1>\r\n       <h1 class=\"w3-hide-small\">COLLECTION 2020</h1>\r\n       <p><a href=\"#jeans\" class=\"w3-button w3-black w3-padding-large w3-large\">SHOP NOW</a></p>\r\n     </div>\r\n   </div>\r\n\r\n   <div class=\"w3-container w3-text-grey\" id=\"jeans\">\r\n     <p>{{ totalProducts }} total items</p>\r\n   </div>\r\n\r\n   <!-- show products -->\r\n   <div class=\"w3-row w3-grayscale\">\r\n\r\n     <!-- if no products -->\r\n     <div class=\"w3-row l3 s6\" *ngIf=\"totalProducts == 0\">\r\n       <h1 class=\"w3-large w3-hide-medium\">Sorry No Products Found</h1>\r\n       <img src=\"assets/images/thumbnails/noProduct.PNG\" style=\"width:50%\">\r\n     </div>\r\n\r\n     <ng-container *ngFor=\"let p of pagedProduct; let i = index\">\r\n       <div class=\"w3-col l3 s6\" *ngIf=\"i % 4 == 0 && i != 0\">\r\n         <div class=\"w3-container\">\r\n           <div class=\"w3-display-container\">\r\n\r\n             <img src=\"assets/images/thumbnails/{{p.photo}}.jpg\" style=\"width:100%\">\r\n             <!-- <span class=\"w3-tag w3-display-topleft\">Sale</span> -->\r\n\r\n             <div class=\"w3-display-middle w3-display-hover\">\r\n               <button class=\"w3-button w3-black\" (click)=\"open(productDetailsModal, p)\">Buy now <i\r\n                   class=\"fa fa-shopping-cart\"></i></button>\r\n             </div> <!-- end div hover button -->\r\n\r\n             <p>{{p.productName}}<br><b>{{p.price | currency: $}}</b></p>\r\n\r\n           </div> <!-- end div display container -->\r\n         </div> <!-- end container -->\r\n       </div>\r\n\r\n       <div class=\"w3-col l3 s6\" *ngIf=\"i % 3 == 0 && i % 4 != 0 && i != 0\">\r\n         <div class=\"w3-container\">\r\n           <div class=\"w3-display-container\">\r\n\r\n             <img src=\"assets/images/thumbnails/{{p.photo}}.jpg\" style=\"width:100%\">\r\n             <!-- <span class=\"w3-tag w3-display-topleft\">New</span> -->\r\n\r\n             <div class=\"w3-display-middle w3-display-hover\">\r\n               <button class=\"w3-button w3-black\" (click)=\"open(productDetailsModal, p)\">Buy now <i\r\n                   class=\"fa fa-shopping-cart\"></i></button>\r\n             </div> <!-- end div hover button -->\r\n\r\n             <p>{{p.productName}}<br><b>{{p.price | currency: $}}</b></p>\r\n\r\n           </div> <!-- end div display container -->\r\n         </div> <!-- end container -->\r\n       </div>\r\n\r\n       <div class=\"w3-col l3 s6\" *ngIf=\"i % 2 == 0 && i % 3 != 0 && i % 4 != 0 && i != 0\">\r\n         <div class=\"w3-container\">\r\n           <div class=\"w3-display-container\">\r\n\r\n             <img src=\"assets/images/thumbnails/{{p.photo}}.jpg\" style=\"width:100%\">\r\n\r\n             <div class=\"w3-display-middle w3-display-hover\">\r\n               <button class=\"w3-button w3-black\" (click)=\"open(productDetailsModal, p)\">Buy now <i\r\n                   class=\"fa fa-shopping-cart\"></i></button>\r\n             </div> <!-- end div hover button -->\r\n\r\n             <p>{{p.productName}}<br><b>{{p.price | currency: $}}</b></p>\r\n\r\n           </div> <!-- end div display container -->\r\n         </div> <!-- end container -->\r\n       </div>\r\n\r\n       <div class=\"w3-col l3 s6\" *ngIf=\"i % 4 != 0 && i % 3 != 0 && i % 2 != 0 || i == 0\">\r\n         <div class=\"w3-container\">\r\n           <div class=\"w3-display-container\">\r\n\r\n             <img src=\"assets/images/thumbnails/{{p.photo}}.jpg\" style=\"width:100%\">\r\n\r\n             <div class=\"w3-display-middle w3-display-hover\">\r\n               <button class=\"w3-button w3-black\" (click)=\"open(productDetailsModal, p)\">Buy now <i\r\n                   class=\"fa fa-shopping-cart\"></i></button>\r\n             </div> <!-- end div hover button -->\r\n\r\n             <p>{{p.productName}}<br><b>{{p.price | currency: $}}</b></p>\r\n\r\n           </div> <!-- end div display container -->\r\n         </div> <!-- end container -->\r\n       </div>\r\n\r\n\r\n     </ng-container>\r\n   </div>\r\n\r\n\r\n   <!-- pagination -->\r\n   <div class=\"ds-l-row ds-u-margin-top--3\">\r\n     <div class=\"pagination justify-content-center\">\r\n       <ngb-pagination [collectionSize]=\"totalProducts\" [(page)]=\"pager.currentPage\" [maxSize]=\"5\"\r\n         [boundaryLinks]=\"true\" (pageChange)=\"setPage($event)\"></ngb-pagination>\r\n     </div>\r\n   </div>\r\n\r\n\r\n\r\n\r\n\r\n   <!-- Subscribe section -->\r\n   <div class=\"w3-container w3-black w3-padding-32\">\r\n     <h1>Subscribe</h1>\r\n     <p>To get special offers and VIP treatment:</p>\r\n     <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Enter e-mail\" style=\"width:100%\"></p>\r\n     <button type=\"button\" class=\"w3-button w3-red w3-margin-bottom\">Subscribe</button>\r\n   </div>\r\n\r\n   <!-- Footer -->\r\n   <!-- <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n     <div class=\"w3-row-padding\">\r\n       <div class=\"w3-col s4\">\r\n         <h4>Contact</h4>\r\n         <p>Questions? Go ahead.</p>\r\n         <form action=\"/action_page.php\" target=\"_blank\">\r\n           <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Name\" name=\"Name\" required></p>\r\n           <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Email\" name=\"Email\" required></p>\r\n           <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Subject\" name=\"Subject\" required></p>\r\n           <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Message\" name=\"Message\" required></p>\r\n           <button type=\"submit\" class=\"w3-button w3-block w3-black\">Send</button>\r\n         </form>\r\n       </div>\r\n\r\n       <div class=\"w3-col s4\">\r\n         <h4>About</h4>\r\n         <p><a href=\"#\">About us</a></p>\r\n         <p><a href=\"#\">We're hiring</a></p>\r\n         <p><a href=\"#\">Support</a></p>\r\n         <p><a href=\"#\">Find store</a></p>\r\n         <p><a href=\"#\">Shipment</a></p>\r\n         <p><a href=\"#\">Payment</a></p>\r\n         <p><a href=\"#\">Gift card</a></p>\r\n         <p><a href=\"#\">Return</a></p>\r\n         <p><a href=\"#\">Help</a></p>\r\n       </div>\r\n\r\n       <div class=\"w3-col s4 w3-justify\">\r\n         <h4>Store</h4>\r\n         <p><i class=\"fa fa-fw fa-map-marker\"></i> GC Fashion</p>\r\n         <p><i class=\"fa fa-fw fa-phone\"></i> 0044123123</p>\r\n         <p><i class=\"fa fa-fw fa-envelope\"></i> ShopGC@gcfashion.com</p>\r\n         <h4>We accept</h4>\r\n         <p><i class=\"fa fa-fw fa-cc-amex\"></i> Amex</p>\r\n         <p><i class=\"fa fa-fw fa-credit-card\"></i> Credit Card</p>\r\n         <br>\r\n         <i class=\"fa fa-facebook-official w3-hover-opacity w3-large\"></i>\r\n         <i class=\"fa fa-instagram w3-hover-opacity w3-large\"></i>\r\n         <i class=\"fa fa-snapchat w3-hover-opacity w3-large\"></i>\r\n         <i class=\"fa fa-pinterest-p w3-hover-opacity w3-large\"></i>\r\n         <i class=\"fa fa-twitter w3-hover-opacity w3-large\"></i>\r\n         <i class=\"fa fa-linkedin w3-hover-opacity w3-large\"></i>\r\n       </div>\r\n     </div>\r\n\r\n     <p>\r\n       Copyright &copy; 2020 by Smoothstack, Inc. All Rights Reserved.\r\n     </p>\r\n   </footer> -->\r\n\r\n\r\n </div>\r\n\r\n <!-- Newsletter Modal -->\r\n <div id=\"newsletter\" class=\"w3-modal\">\r\n   <div class=\"w3-modal-content w3-animate-zoom\" style=\"padding:32px\">\r\n     <div class=\"w3-container w3-white w3-center\">\r\n       <i onclick=\"document.getElementById('newsletter').style.display='none'\"\r\n         class=\"fa fa-remove w3-right w3-button w3-transparent w3-xxlarge\"></i>\r\n       <h2 class=\"w3-wide\">NEWSLETTER</h2>\r\n       <p>Join our mailing list to receive updates on new arrivals and special offers.</p>\r\n       <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Enter e-mail\"></p>\r\n       <button type=\"button\" class=\"w3-button w3-padding-large w3-red w3-margin-bottom\"\r\n         onclick=\"document.getElementById('newsletter').style.display='none'\">Subscribe</button>\r\n     </div>\r\n   </div>\r\n </div>\r\n\r\n <script>\r\n   // Accordion \r\n   function myAccFunc() {\r\n     var x = document.getElementById(\"demoAcc\");\r\n     if (x.className.indexOf(\"w3-show\") == -1) {\r\n       x.className += \" w3-show\";\r\n     } else {\r\n       x.className = x.className.replace(\" w3-show\", \"\");\r\n     }\r\n   }\r\n\r\n   // Click on the \"Jeans\" link on page load to open the accordion for demo purposes\r\n   document.getElementById(\"myBtn\").click();\r\n\r\n\r\n   // Open and close sidebar\r\n   function w3_open() {\r\n     document.getElementById(\"mySidebar\").style.display = \"block\";\r\n     document.getElementById(\"myOverlay\").style.display = \"block\";\r\n   }\r\n\r\n   function w3_close() {\r\n     document.getElementById(\"mySidebar\").style.display = \"none\";\r\n     document.getElementById(\"myOverlay\").style.display = \"none\";\r\n   }\r\n\r\n </script>\r\n\r\n\r\n <ng-template #productDetailsModal let-c=\"close\" let-d=\"dismiss\">\r\n   <form [formGroup]=\"productDetailsForm\">\r\n     <div class=\"modal-dialog\" role=\"document\">\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n           <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{ productDetailsForm.controls['productName'].value }}</h5>\r\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"c()\">\r\n             <span aria-hidden=\"true\">&times;</span>\r\n           </button>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n           <div class=\"form-group\">\r\n             <p>Details</p>\r\n             <!-- <input class=\"form-control\" id=\"authorName\" formControlName=\"authorName\" [ngClass]=\"{\r\n                'is-invalid': updateAuthorForm.controls['authorName'].errors\r\n              }\" /></p> -->\r\n\r\n             <!-- <div *ngIf=\"updateAuthorForm.controls['authorName'].errors\" class=\"error-msg\">\r\n              <div [hidden]=\"\r\n                  !updateAuthorForm.controls['authorName'].errors.required\r\n                \">\r\n                Author Name is required\r\n              </div>\r\n              <div [hidden]=\"\r\n                  updateAuthorForm.controls['authorName'].errors.maxLength ||\r\n                  updateAuthorForm.controls['authorName'].errors.minLength\r\n                \">\r\n                Author Name should be between 3-45 chars in length\r\n              </div>\r\n            </div> -->\r\n\r\n             <!-- <p>Books Written:\r\n              <ng-multiselect-dropdown [placeholder]=\"'Select Books(s)'\" [data]=\"totalBooks\" formControlName=\"books\"\r\n                [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\" (onSelectAll)=\"onSelectAll($event)\">\r\n              </ng-multiselect-dropdown>\r\n            </p> -->\r\n           </div>\r\n         </div>\r\n         <!-- <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"c()\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateAuthor()\"\r\n            [disabled]=\"updateAuthorForm.invalid\">Save changes</button>\r\n        </div> -->\r\n       </div>\r\n     </div>\r\n   </form>\r\n </ng-template>\r\n"

/***/ }),

/***/ "./src/app/shop/products/products.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shop/products/products.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/shop.service */ "./src/app/common/services/shop.service.ts");
/* harmony import */ var _common_services_pager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/pager.service */ "./src/app/common/services/pager.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(shopService, pagerService, modalService, fb) {
        this.shopService = shopService;
        this.pagerService = pagerService;
        this.modalService = modalService;
        this.fb = fb;
        // product data
        this.noProduct = 0;
        // pagnation
        this.pager = {};
        this.pageSize = 12;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.loadAllProducts();
        this.loadAllCategories();
        this.initializeFormGroup();
    };
    ProductsComponent.prototype.initializeFormGroup = function () {
        this.productDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.productName),
        });
    };
    ProductsComponent.prototype.loadAllProducts = function () {
        var _this = this;
        this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getProductsURI)
            .subscribe(function (res) {
            _this.products = res;
            _this.totalProducts = _this.products.length;
            _this.setPage(1);
        }, function (error) {
            throw new Error("Error in loadAllProducts().");
        });
    };
    ProductsComponent.prototype.loadAllCategories = function () {
        var _this = this;
        this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getCategoriesURI)
            .subscribe(function (res) {
            _this.categories = res;
            _this.totalCategories = _this.categories.length;
        }, function (error) {
            throw new Error("Error in loadAllCategories().");
        });
    };
    ProductsComponent.prototype.loadProductsByCategory = function (catId) {
        var _this = this;
        this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getCategoryURI + catId + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getProductsURI)
            .subscribe(function (res) {
            _this.products = res;
            _this.totalProducts = _this.products.length;
            _this.setPage(1);
            console.log(_this.products);
        }, function (error) {
            _this.products = [];
            _this.totalProducts = 0;
            _this.noProduct = 1;
            _this.setPage(1);
            console.log("no items found");
        });
    };
    ProductsComponent.prototype.open = function (content, obj) {
        var _this = this;
        console.log("open called");
        // this.loadAllBooks();
        if (obj !== null) {
            this.productDetailsForm = this.fb.group({
                productName: obj.productName
                // authorId: obj.authorId,
                // authorName: [obj.authorName, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]]
            });
            // } else {
            //   this.updateAuthorForm = this.fb.group({
            //     books: null,
            //     authorId: null,
            //     authorName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(45)]]
            //   })
        }
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then(function (result) {
            _this.errMsg = "";
            _this.closeResult = "Closed with " + result;
        }, function (reason) {
            _this.errMsg = "";
            _this.closeResult = "Dismissed";
        });
    };
    ProductsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalProducts) {
            return;
        }
        this.pager = this.pagerService.getPager(this.totalProducts, page, this.pageSize);
        this.pagedProduct = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/shop/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/shop/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"],
            _common_services_pager_service__WEBPACK_IMPORTED_MODULE_3__["PagerService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Products</h2>\r\n<div>\r\n  <div *ngFor=\"let p of products\">\r\n    <p>{{ p.productName }}</p>\r\n    <p>Description: {{ p.description }}</p>\r\n    <br><br>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/shop.service */ "./src/app/common/services/shop.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var ShopComponent = /** @class */ (function () {
    function ShopComponent(shopService) {
        this.shopService = shopService;
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.loadAllProducts();
    };
    ShopComponent.prototype.loadAllProducts = function () {
        var _this = this;
        this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].getProductsURI)
            .subscribe(function (res) {
            _this.products = res;
        }, function (error) {
            throw new Error("Error in loadAllProducts().");
        });
    };
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]])
    ], ShopComponent);
    return ShopComponent;
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
    shopUrl: 'http://localhost:8085/gcfashions/shop',
    getProductsURI: '/products',
    getCategoriesURI: '/categories',
    getCategoryURI: '/categories/'
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

module.exports = __webpack_require__(/*! C:\Users\Lexie\git\fashion\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map