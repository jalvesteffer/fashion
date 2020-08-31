(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./reports/reports.module": [
		"./src/app/reports/reports.module.ts",
		"reports-reports-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _shop_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop/checkout/checkout.component */ "./src/app/shop/checkout/checkout.component.ts");
/* harmony import */ var _shop_account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shop/account/account.component */ "./src/app/shop/account/account.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _register_returns_returns_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/returns/returns.component */ "./src/app/register/returns/returns.component.ts");







//import { CustomerComponent } from './shop/customer/customer.component';




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
                path: "gcfashions/sales",
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
            },
            {
                path: "gcfashions/sales/returns",
                component: _register_returns_returns_component__WEBPACK_IMPORTED_MODULE_10__["ReturnsComponent"],
            },
            {
                path: "gcfashions/shop/products",
                component: _shop_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
            },
            {
                path: "gcfashions/shop/myaccount",
                component: _shop_account_account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"],
            },
            {
                path: "gcfashions/shop/checkout",
                component: _shop_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutComponent"],
            },
            {
                path: "gcfashions/dashboard",
                loadChildren: "./reports/reports.module#ReportsModule",
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

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _common_product_sort_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/product-sort.pipe */ "./src/app/common/product-sort.pipe.ts");
/* harmony import */ var _shop_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shop/checkout/checkout.component */ "./src/app/shop/checkout/checkout.component.ts");
/* harmony import */ var _shop_account_account_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shop/account/account.component */ "./src/app/shop/account/account.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _register_returns_returns_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/returns/returns.component */ "./src/app/register/returns/returns.component.ts");
/* harmony import */ var _common_category_sort_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/category-sort.pipe */ "./src/app/common/category-sort.pipe.ts");
/* harmony import */ var _common_subcategory_sort_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./common/subcategory-sort.pipe */ "./src/app/common/subcategory-sort.pipe.ts");

















//import { CustomerComponent } from './shop/customer/customer.component';






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
                _shop_products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"],
                _common_product_sort_pipe__WEBPACK_IMPORTED_MODULE_16__["ProductSortPipe"],
                //    CustomerComponent,
                _shop_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_17__["CheckoutComponent"],
                _shop_account_account_component__WEBPACK_IMPORTED_MODULE_18__["AccountComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _register_returns_returns_component__WEBPACK_IMPORTED_MODULE_20__["ReturnsComponent"],
                _common_category_sort_pipe__WEBPACK_IMPORTED_MODULE_21__["CategorySortPipe"],
                _common_subcategory_sort_pipe__WEBPACK_IMPORTED_MODULE_22__["SubcategorySortPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            providers: [_common_services_shop_service__WEBPACK_IMPORTED_MODULE_14__["ShopService"], _common_services_pager_service__WEBPACK_IMPORTED_MODULE_15__["PagerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/category-sort.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/common/category-sort.pipe.ts ***!
  \**********************************************/
/*! exports provided: CategorySortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySortPipe", function() { return CategorySortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategorySortPipe = /** @class */ (function () {
    function CategorySortPipe() {
    }
    CategorySortPipe.prototype.transform = function (input) {
        if (input) {
            return input.sort(function (a, b) {
                var an1 = a.catName.toLowerCase();
                var an2 = b.catName.toLowerCase();
                return an1 < an2 ? -1 : an1 > an2 ? 1 : 0;
            });
        }
    };
    CategorySortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'categorySort'
        })
    ], CategorySortPipe);
    return CategorySortPipe;
}());



/***/ }),

/***/ "./src/app/common/product-sort.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/common/product-sort.pipe.ts ***!
  \*********************************************/
/*! exports provided: ProductSortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSortPipe", function() { return ProductSortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductSortPipe = /** @class */ (function () {
    function ProductSortPipe() {
    }
    ProductSortPipe.prototype.transform = function (input) {
        if (input) {
            return input.sort(function (a, b) {
                var an1 = a.productName.toLowerCase();
                var an2 = b.productName.toLowerCase();
                return an1 < an2 ? -1 : an1 > an2 ? 1 : 0;
            });
        }
    };
    ProductSortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'productSort'
        })
    ], ProductSortPipe);
    return ProductSortPipe;
}());



/***/ }),

/***/ "./src/app/common/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server.service */ "./src/app/common/services/server.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var baseUrl = "http://ec2-3-19-141-180.us-east-2.compute.amazonaws.com:8085";
var AuthService = /** @class */ (function () {
    function AuthService(router, server, http) {
        this.router = router;
        this.server = server;
        this.http = http;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        console.log('Auth Service');
        var userData = localStorage.getItem('user');
        if (userData) {
            var user = JSON.parse(userData);
            this.token = user.token;
            this.server.setLoggedIn(true, this.token);
            this.loggedIn.next(true);
            console.log('Logged in from memory');
            if (this.userRole == "CUSTOMER") {
                this.router.navigate(['/gcfashions/shop/myaccount']);
            }
            else if (this.userRole == "SALES") {
                this.router.navigate(['/gcfashions/sales']);
            }
        }
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        var _this = this;
        if (user.username !== '' && user.password !== '') {
            var res_1 = this.http.post(baseUrl + '/login', user, { observe: 'response' }).subscribe(function (response) {
                if (response.headers.get("Authorization")) {
                    _this.token = response.headers.get("Authorization");
                    _this.userId = response.headers.get("UserId");
                    _this.userRole = response.headers.get("UserRole");
                    _this.server.setLoggedIn(true, _this.token);
                    _this.loggedIn.next(true);
                    var userData = {
                        token: _this.token
                    };
                    localStorage.setItem('user', JSON.stringify(userData));
                    localStorage.setItem('userId', _this.userId);
                    localStorage.setItem('userRole', _this.userRole);
                    if (_this.userRole == "CUSTOMER") {
                        _this.router.navigate(['/gcfashions/shop/myaccount']);
                    }
                    else if (_this.userRole == "SALES") {
                        _this.router.navigate(['/gcfashions/sales']);
                    }
                    else if (_this.userRole == "MANAGEMENT") {
                        _this.router.navigate(['/gcfashions/dashboard']);
                    }
                    return res_1;
                }
                else {
                    return new Error(status);
                }
            });
        }
        else {
            return new Error;
        }
    };
    AuthService.prototype.logout = function () {
        this.server.setLoggedIn(false);
        delete this.token;
        this.loggedIn.next(false);
        localStorage.clear();
        this.router.navigate(['/gcfashions/home']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AuthService);
    return AuthService;
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

/***/ "./src/app/common/services/server.service.ts":
/*!***************************************************!*\
  !*** ./src/app/common/services/server.service.ts ***!
  \***************************************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var baseUrl = "";
var ServerService = /** @class */ (function () {
    function ServerService(http) {
        this.http = http;
        this.loggedIn = false;
    }
    ServerService.prototype.setLoggedIn = function (loggedIn, token) {
        this.loggedIn = loggedIn;
        this.token = token;
    };
    ServerService.prototype.request = function (method, route, data) {
        if (method === 'GET') {
            console.log("get", route, data);
            return this.get(route, data);
        }
        var header = (this.loggedIn) ? { Authorization: "" + this.token } : undefined;
        console.log(header, "" + this.token);
        return this.http.request(method, baseUrl + route, {
            body: data,
            responseType: 'json',
            observe: 'body',
            headers: header
        });
    };
    ServerService.prototype.get = function (route, data) {
        var header = (this.loggedIn) ? { Authorization: "" + this.token } : undefined;
        console.log(header, "" + this.token);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (data !== undefined) {
            Object.getOwnPropertyNames(data).forEach(function (key) {
                params = params.set(key, data[key]);
            });
        }
        console.log("http get", baseUrl + route);
        return this.http.get(baseUrl + route, {
            responseType: 'json',
            headers: header,
            params: params
        });
    };
    ServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServerService);
    return ServerService;
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
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server.service */ "./src/app/common/services/server.service.ts");



var ShopService = /** @class */ (function () {
    function ShopService(server) {
        this.server = server;
    }
    ShopService.prototype.getAll = function (url) {
        return this.server.request("GET", url);
    };
    ShopService.prototype.deleteObj = function (url) {
        return this.server.request("DELETE", url);
    };
    ShopService.prototype.updateObj = function (url, obj) {
        return this.server.request("PUT", url, obj);
    };
    ShopService.prototype.postObj = function (url, obj) {
        return this.server.request("POST", url, obj);
    };
    ShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]])
    ], ShopService);
    return ShopService;
}());



/***/ }),

/***/ "./src/app/common/subcategory-sort.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/common/subcategory-sort.pipe.ts ***!
  \*************************************************/
/*! exports provided: SubcategorySortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategorySortPipe", function() { return SubcategorySortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubcategorySortPipe = /** @class */ (function () {
    function SubcategorySortPipe() {
    }
    SubcategorySortPipe.prototype.transform = function (input) {
        if (input) {
            return input.sort(function (a, b) {
                var an1 = a.subcatName.toLowerCase();
                var an2 = b.subcatName.toLowerCase();
                return an1 < an2 ? -1 : an1 > an2 ? 1 : 0;
            });
        }
    };
    SubcategorySortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'subcategorySort'
        })
    ], SubcategorySortPipe);
    return SubcategorySortPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-size: 15px;\r\n    line-height: 1.5;\r\n}\r\n\r\np {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.main-head{\r\n    height: 150px;\r\n    background: #FFF;\r\n   \r\n}\r\n\r\n.sidenav {\r\n    height: 100%;\r\n    background-color: #000;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n\r\n.main {\r\n    padding: 0px 10px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n    .login-form{\r\n        margin-top: 10%;\r\n    }\r\n\r\n    .register-form{\r\n        margin-top: 10%;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 768px){\r\n    .main{\r\n        margin-left: 40%; \r\n    }\r\n\r\n    .sidenav{\r\n        width: 40%;\r\n        position: fixed;\r\n        z-index: 1;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    .login-form{\r\n        margin-top: 80%;\r\n    }\r\n\r\n    .register-form{\r\n        margin-top: 20%;\r\n    }\r\n}\r\n\r\n.login-main-text{\r\n    margin-top: 20%;\r\n    padding: 60px;\r\n    color: #fff;\r\n}\r\n\r\n.login-main-text h2{\r\n    font-weight: 300;\r\n}\r\n\r\n.btn-black{\r\n    background-color: #000 !important;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkI7O0FBSUQ7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCOztDQUVwQjs7QUFFRDtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjs7QUFHRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLFVBQVUsa0JBQWtCLENBQUM7Q0FDaEM7O0FBRUQ7SUFDSTtRQUNJLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjtDQUNKOztBQUVEO0lBQ0k7UUFDSSxpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxPQUFPO1FBQ1AsUUFBUTtLQUNYOztJQUVEO1FBQ0ksZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZ0JBQWdCO0tBQ25CO0NBQ0o7O0FBR0Q7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4ubWFpbi1oZWFke1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgIFxyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4ubWFpbiB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLmxvZ2luLWZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWdpc3Rlci1mb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLm1haW57XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTsgXHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGVuYXZ7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyLWZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmxvZ2luLW1haW4tdGV4dHtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxvZ2luLW1haW4tdGV4dCBoMntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5idG4tYmxhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n  <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\r\n  <script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n  <div class=\"sidenav\">\r\n    <div class=\"login-main-text\">\r\n       <h2 class=\"w3-jumbo w3-hide-small\">GC FASHION</h2>\r\n       <h2 class=\"w3-hide-large w3-hide-medium\">GC FASHION</h2>\r\n       <br>\r\n       <h2 class=\"w3-hide-small\">Login</h2>\r\n    </div>\r\n </div>\r\n \r\n<!-- <div class=\"grid-container\">\r\n  <div class=\"grid-x\">\r\n    <div class=\"small-12 medium-10 medium-offset-1 large-8 large-offset-2 cell\">\r\n       -->\r\n<div class=\"main\">\r\n  \r\n\r\n  <div class=\"col-md-6 col-sm-12\">\r\n    <!-- message bar -->\r\n  <div #alert class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeAlert()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    {{message}}\r\n  </div>\r\n    <br>\r\n    <div class=\"login-form\">\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n          <p *ngIf=\"loginInvalid == true\" style=\"color:danger;\"> Username and/or password is invalid.</p>\r\n          <label class=\"full-width-input\">\r\n            Username\r\n            <input type=\"text\" placeholder=\"Username\" formControlName=\"username\" required>\r\n          </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"full-width-input\">\r\n            Password\r\n            <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\r\n          </label>\r\n        </div>\r\n        \r\n\r\n        <!-- <button class=\"button\">Login</button> -->\r\n        <button class=\"btn btn-danger\" >Login</button>\r\n          \r\n        \r\n      </form>\r\n      <div class=\"register-link\">\r\n        Not yet registered?\r\n        <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding\"\r\n     onclick=\"document.getElementById('register').style.display='block'\">Register Now</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Register Modal -->\r\n<div id=\"register\" class=\"w3-modal\">\r\n  <div class=\"w3-modal-content w3-animate-zoom\" style=\"padding:32px\">\r\n    <div class=\"w3-container w3-white w3-center\">\r\n      <i onclick=\"document.getElementById('register').style.display='none'\"\r\n        class=\"fa fa-remove w3-right w3-button w3-transparent w3-xxlarge\"></i>\r\n      <h2 class=\"w3-wide\">REGISTER</h2>\r\n      <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Enter Full Name\"></p>\r\n      <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Create username\"></p>\r\n      <p><input class=\"w3-input w3-border\" type=\"password\" placeholder=\"Create password\"></p>\r\n      <button type=\"button\" class=\"w3-button w3-padding-large w3-red w3-margin-bottom\"\r\n        onclick=\"document.getElementById('register').style.display='none'\">Register</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.message = "No Message";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initializeFormGroup();
        this.closeAlert();
        if (localStorage.getItem('user') != null) {
            console.log('Logged in from memory');
            this.router.navigate(['/gcfashions/shop/myaccount']);
        }
    };
    HomeComponent.prototype.initializeFormGroup = function () {
        this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // this.registrationForm = new FormGroup({
        //   username: new FormControl(this.username),
        //   password: new FormControl(this.password),
        //   name: new FormControl(this.name),
        // });
    };
    HomeComponent.prototype.closeAlert = function () {
        this.alert.nativeElement.classList.remove('show');
    };
    HomeComponent.prototype.openAlert = function () {
        this.alert.nativeElement.classList.add('show');
    };
    HomeComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loginInvalid = false;
                this.formSubmitAttempt = false;
                if (this.form.valid) {
                    if (this.authService.login(this.form.value)) {
                    }
                    else {
                        this.loginInvalid = true;
                        this.message = "Username or Password is incorrect";
                        this.openAlert();
                    }
                }
                else {
                    this.formSubmitAttempt = true;
                    this.loginInvalid = true;
                    this.message = "Username and Password can not be blank.";
                    this.openAlert();
                }
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alert', {}),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "alert", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

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

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar/menu -->\r\n<nav class=\"menuBar w3-sidebar w3-bar-block w3-white w3-collapse w3-top\" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n  <div class=\"w3-container w3-display-container w3-padding-16\">\r\n    <i onclick=\"w3_close()\" class=\"fa fa-remove w3-hide-large w3-button w3-display-topright\"></i>\r\n    <h3 class=\"w3-wide\"><b>GC Fashion</b></h3>\r\n  </div>\r\n  <br><br>\r\n\r\n  <a routerLink=\"../../gcfashions/sales/returns\" class=\"w3-bar-item w3-button w3-padding-80\">Returns</a>\r\n  <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding\"\r\n    onclick=\"document.getElementById('newsletter').style.display='block'\">Newsletter</a>\r\n</nav>\r\n<!-- !PAGE CONTENT! -->\r\n<div class=\"w3-main\" style=\"margin-left:250px\">\r\n  <!-- Push down content on small screens -->\r\n  <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n\r\n  <!-- Top header -->\r\n  <header class=\"w3-container w3-xlarge\">\r\n    <div>\r\n      <h1 class=\"w3-left\">REGISTER</h1>\r\n    </div>\r\n\r\n    <!-- logout -->\r\n    <a class=\"w3-right\" id=\"cart\" (click)=\"logout()\"> Logout\r\n      <em click={}>&nbsp;</em>\r\n      <span class=\"p1 fa-stack fa-1x has-badge\">\r\n        <i type=\"button\" class=\"fa fa-sign-out fa-stack-1x\"></i>\r\n      </span>\r\n    </a>\r\n  </header>\r\n\r\n  <!-- Image header -->\r\n  <div class=\"w3-display-container w3-container\">\r\n    <img src=\"assets/images/thumbnails/sales.jpg\" style=\"width:100%\">\r\n    <div class=\"w3-display-topleft w3-text-white\" style=\"padding:24px 48px\">\r\n    </div>\r\n  </div><br>\r\n\r\n  <div class=\"w3-main\">\r\n    <div class=\"container\">\r\n      <!-- table -->\r\n      <div>\r\n        <!-- title -->\r\n        <!-- <div class=\"modal-header\">\r\n          <h2 class=\"modal-title w3-center  w3-wide\">REGISTER</h2>\r\n        </div> -->\r\n        <div class=\"row\">\r\n          <!-- results -->\r\n          <div class=\"w3-center col-6\">\r\n            <br>\r\n            <h3 *ngIf=\"sku != null\"class=\"w3-white w3-wide\">RESULTS</h3>\r\n            <hr *ngIf=\"sku != null\">\r\n            <a *ngIf=\"sku != null && sku != 'No SKU Matching Found.'\">SKU: </a> <a>{{sku}} </a>\r\n            <a *ngIf=\"sku != null && sku != 'No SKU Matching Found.'\"><button type=\"button\" class=\"btn btn-secondary\" (click)=\"addToCart(sku)\">Add</button>\r\n            </a>\r\n            <br>\r\n          </div>\r\n          <!-- search bar -->\r\n          <div class=\"w3-center col-6\">\r\n            <br>\r\n            <form [formGroup]=\"searchInventoryForm\">\r\n              <h4>Enter Sku:  </h4>\r\n              <br>\r\n              <input type=\"text\" class=\"form-control form-control\" formControlName=\"searchString\"\r\n                (input)=\"searchInventory()\" placeholder=\"SKU\" aria-label=\"Search\" />\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"modal-body\">\r\n          <h3 class=\"w3-white w3-wide\">CART</h3>\r\n          <br>\r\n          <table class=\"table\">\r\n            <thead class=\"thead-dark\">\r\n              <tr>\r\n                <th scope=\"col\">SKU</th>\r\n                <th scope=\"col\">Product</th>\r\n                <th scope=\"col\">Size</th>\r\n                <th scope=\"col\">Price</th>\r\n                <th scope=\"col\"></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let p of cartProducts\">\r\n              <tr>\r\n                <th scope=\"row\">{{p.inventory[0].sku}}</th>\r\n                <td>{{p.productName}}</td>\r\n                <td>{{p.inventory[0].size | uppercase}}</td>\r\n                <td>{{p.price | currency: $}}</td>\r\n                <td>\r\n                  <p class=\"w3-left\"><button type=\"button\" class=\"btn btn-warning btn-sm\"\r\n                      (click)=\"removeItem(p.inventory[0].sku)\">Remove</button></p>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <form [formGroup]=\"cartDetailsForm\">\r\n        <div class=\"w3-white w3-center\">\r\n          <p *ngIf=\"cartNumItems > 0\">Total Items: {{ cartNumItems }}</p>\r\n\r\n          <!-- Coupon code section -->\r\n          Enter a coupon code:\r\n          <input class=\"form-control form-control-lg\" id=\"couponCode\" formControlName=\"couponCode\">\r\n          <br>\r\n          <button type=\"button\" class=\"btn btn-secondary\"\r\n            (click)=\"addCouponCode(cartDetailsForm.controls.couponCode.value)\">APPLY COUPON</button>\r\n          <p *ngIf=\"couponCode && couponDiscount > 0\" class=\"mt-3 text-success\">Coupon code '{{couponCode}}'\r\n            applied<br>{{couponDescription}}</p>\r\n          <p *ngIf=\"couponCode == 0\" class=\"mt-3 text-danger\">Coupon code is not valid</p>\r\n          <hr>\r\n\r\n          <!-- Price calculations -->\r\n          <h5 class=\"text-right mr-5\" *ngIf=\"cartNumItems > 0\">Subtotal : {{ cartTotal | currency: $ }}\r\n          </h5>\r\n          <h5 *ngIf=\"couponCode && cartNumItems > 0\" class=\"text-right mr-5 text-success\">Discount :\r\n            ({{couponDiscount * cartTotal | currency: $}})</h5>\r\n          <h6 class=\"text-right mr-5\" *ngIf=\"cartNumItems > 0\">Tax (6%):\r\n            {{ (cartTotal - (couponDiscount * cartTotal)) * taxRate | currency: $ }}</h6>\r\n          <h5 class=\"text-right mr-5\" *ngIf=\"cartNumItems > 0\">Total :\r\n            {{ ((cartTotal - (couponDiscount * cartTotal)) + ((cartTotal - (couponDiscount * cartTotal)) * taxRate)) | currency: $ }}\r\n          </h5>\r\n          <hr>\r\n          <button type=\"button\" class=\"btn btn-danger w3-center w3-wide w3-margin-bottom\"\r\n            (click)=\"checkout((cartTotal - (couponDiscount * cartTotal)) * taxRate, ((cartTotal - (couponDiscount * cartTotal)) + ((cartTotal - (couponDiscount * cartTotal)) * taxRate)))\">\r\n            CHECK OUT</button>\r\n        </div>\r\n      </form>\r\n      </div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/shop.service */ "./src/app/common/services/shop.service.ts");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(shopService, authService, modalService, router) {
        this.shopService = shopService;
        this.authService = authService;
        this.modalService = modalService;
        this.router = router;
        this.cartTotal = 0;
        this.cartNumItems = 0;
        this.cartProducts = [];
        this.taxRate = 0.06;
        this.couponDiscount = 0;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.initializeFormGroup();
        this.loadCart(Number(localStorage.getItem('userId')));
    };
    RegisterComponent.prototype.initializeFormGroup = function () {
        this.cartDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            cartNumItems: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.cartNumItems),
            cartProducts: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.cartProducts),
            sizeChoice: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]([this.sizeChoice]),
            couponCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]([this.couponCode]),
        });
        this.searchInventoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            searchString: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.searchString),
        });
    };
    RegisterComponent.prototype.loadCart = function (userId) {
        var _this = this;
        this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getCartItemsURI + userId)
            .subscribe(function (res) {
            _this.cartProducts = res;
            _this.cartNumItems = _this.cartProducts.length;
            _this.cartTotal = 0;
            var p = null;
            for (var _i = 0, _a = _this.cartProducts; _i < _a.length; _i++) {
                p = _a[_i];
                _this.cartTotal += p.price;
            }
        }, function (error) {
            console.log("Error in loading Cart.");
        });
    };
    RegisterComponent.prototype.loadCoupon = function (userId) {
        var _this = this;
        this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getCouponURI + userId)
            .subscribe(function (res) {
            _this.couponApplied = res;
            if (_this.couponApplied) {
                _this.couponCode = _this.couponApplied.couponId;
                _this.couponDescription = _this.couponApplied.couponDesc;
                _this.couponDiscount = _this.couponApplied.discount;
            }
        }, function (error) {
            console.log("No coupons applied");
        });
    };
    RegisterComponent.prototype.addToCart = function (itemSku) {
        var _this = this;
        // create a new transaction with item user added to cart
        var transaction = {
            storeId: 1,
            paymentId: 123,
            userId: Number(localStorage.getItem('userId')),
            status: "open",
            inventory: [{
                    sku: itemSku
                }]
        };
        // call sales service to create the transaction if no open transaction already exists;
        // otherwise, the existing open transaction will be updated
        this.shopService.postObj("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].postTransactionURI, transaction)
            .subscribe(function (res) {
            _this.modalService.dismissAll();
            _this.loadCart(Number(localStorage.getItem('userId')));
        }, function (error) {
            console.log(error);
        });
    };
    RegisterComponent.prototype.removeItem = function (sku) {
        var _this = this;
        this.shopService.deleteObj("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].deleteTransactionURI + Number(localStorage.getItem('userId')) + "/sku/" + sku)
            .subscribe(function (res) {
            _this.loadCart(Number(localStorage.getItem('userId')));
        }, function (error) {
            console.log(error);
        });
    };
    RegisterComponent.prototype.addCouponCode = function (couponCode) {
        var _this = this;
        // create a new transaction with user's coupon code
        var transaction = {
            userId: Number(localStorage.getItem('userId')),
            coupons: [{
                    couponId: couponCode
                }]
        };
        // call sales service to create the transaction if no open transaction already exists;
        // otherwise, the existing open transaction will be updated
        this.shopService.postObj("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].postCouponURI, transaction)
            .subscribe(function (res) {
            _this.loadCoupon(Number(localStorage.getItem('userId')));
        }, function (error) {
            _this.couponCode = 0;
            _this.couponDiscount = 0;
            _this.loadCoupon(Number(localStorage.getItem('userId')));
        });
    };
    RegisterComponent.prototype.checkout = function (totalTax, totalBill) {
        var _this = this;
        console.log("Checkout method, Tax: " + totalTax.toFixed(2) + ", Total: " + totalBill.toFixed(2));
        var values = {
            userId: Number(localStorage.getItem('userId')),
            tax: totalTax,
            total: totalBill
        };
        this.shopService.updateObj("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].updateTransactionURI, values)
            .subscribe(function (res) {
            _this.modalService.dismissAll();
            _this.router.navigate(['gcfashions/shop/checkout']);
            //.navigate(['checkout']);
        }, function (error) {
            console.log(error);
        });
    };
    RegisterComponent.prototype.logout = function () {
        return this.authService.logout();
    };
    RegisterComponent.prototype.searchInventory = function () {
        var _this = this;
        var searchString = this.searchInventoryForm.value.searchString;
        if (searchString.length != "") {
            this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].salesUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getInventoryURI + searchString)
                .subscribe(function (res) {
                _this.inventory = res;
                _this.sku = _this.inventory.sku;
                _this.searchString = "";
            }, function (error) {
                _this.searchString = "";
                _this.inventory = [];
                _this.sku = "No SKU Matching Found.";
                console.log("mistake");
            });
        }
        else {
            this.inventory = [];
            this.sku = null;
            this.searchString = null;
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"],
            _common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/returns/returns.component.css":
/*!********************************************************!*\
  !*** ./src/app/register/returns/returns.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".borderless td,\r\n.borderless th {\r\n  border: none;\r\n}\r\n\r\n.borderless thead {\r\n  border-bottom: 1px dotted;\r\n  border-color: gray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmV0dXJucy9yZXR1cm5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBYTtDQUNkOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JldHVybnMvcmV0dXJucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlcmxlc3MgdGQsXHJcbi5ib3JkZXJsZXNzIHRoIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5ib3JkZXJsZXNzIHRoZWFkIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xyXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/register/returns/returns.component.html":
/*!*********************************************************!*\
  !*** ./src/app/register/returns/returns.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"w3-container w3-xlarge mt-4\">\r\n  <p class=\"w3-left\">{{headerText}}</p>\r\n</header>\r\n\r\n<!-- Image header -->\r\n<div class=\"w3-display-container w3-container\">\r\n  <img src=\"assets/images/thumbnails/{{headerImage}}.jpg\" alt=\"header2 image\" style=\"width:100%\">\r\n</div>\r\n\r\n<div class=\"w3-container\">\r\n  <!-- message bar -->\r\n  <div #alert class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeAlert()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    {{message}}\r\n  </div>\r\n\r\n  <!-- search bar -->\r\n  <form [formGroup]=\"searchForm\" class=\"form-inline d-flex mt-4\">\r\n    <h4>Enter Order Number to Refund: </h4>\r\n    <input type=\"text\" class=\"form-control ml-3\" formControlName=\"searchString\" (input)=\"search()\" placeholder=\"\"\r\n      aria-label=\"Search\" />\r\n  </form>\r\n</div>\r\n\r\n<!-- Transaction details / Credit Card Form -->\r\n<div class=\"w3-display-container w3-container mt-4\">\r\n  <table class=\"table borderless mb-5\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">\r\n          <h5>Order #</h5>\r\n        </th>\r\n        <th scope=\"col\">\r\n          <h5>Customer</h5>\r\n        </th>\r\n        <th scope=\"col\">\r\n          <h5>Store</h5>\r\n        </th>\r\n        <th scope=\"col\">\r\n          <h5>Total Paid</h5>\r\n        </th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let t of pagedTransactions; let i = index\">\r\n        <td>\r\n          {{t.transactionId}}\r\n        </td>\r\n        <td>\r\n          {{t.user.username}}\r\n        </td>\r\n        <td>\r\n          {{t.store.location}}\r\n        </td>\r\n        <td>\r\n          {{t.total | currency: $}}\r\n        </td>\r\n        <td>\r\n          <button type=\" button\" class=\"btn btn-outline-dark btn-block\" (click)=\"refund(t)\">Refund</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <!-- pagination -->\r\n  <div class=\"ds-l-row ds-u-margin-top--3\">\r\n    <div class=\"pagination justify-content-center\">\r\n      <ngb-pagination [collectionSize]=\"totalTransactions\" [(page)]=\"pager.currentPage\" [pageSize]=\"pageSize\"\r\n        [maxSize]=\"5\" [boundaryLinks]=\"true\" (pageChange)=\"setPage($event)\"></ngb-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/returns/returns.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/register/returns/returns.component.ts ***!
  \*******************************************************/
/*! exports provided: ReturnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnsComponent", function() { return ReturnsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/shop.service */ "./src/app/common/services/shop.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_services_pager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/pager.service */ "./src/app/common/services/pager.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");







var ReturnsComponent = /** @class */ (function () {
    function ReturnsComponent(shopService, pagerService, fb, authService) {
        this.shopService = shopService;
        this.pagerService = pagerService;
        this.fb = fb;
        this.authService = authService;
        this.headerText = "In-Store Returns";
        this.headerImage = "instore-returns-start";
        this.message = "No Message";
        // pagination
        this.pager = {};
        this.pageSize = 5;
    }
    ReturnsComponent.prototype.ngOnInit = function () {
        this.loadAllOpenTransactions();
        this.initializeFormGroup();
        this.closeAlert();
    };
    ReturnsComponent.prototype.initializeFormGroup = function () {
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            searchString: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.searchString),
        });
    };
    ReturnsComponent.prototype.closeAlert = function () {
        this.alert.nativeElement.classList.remove('show');
    };
    ReturnsComponent.prototype.openAlert = function () {
        this.alert.nativeElement.classList.add('show');
    };
    ReturnsComponent.prototype.search = function () {
        var _this = this;
        var searchString = this.searchForm.value.searchString;
        if (searchString.length != 0) {
            this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].salesUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].getCompleteTransactionsLikeURI + searchString)
                .subscribe(function (res) {
                console.log("res");
                _this.transactions = res;
                if (_this.transactions) {
                    _this.totalTransactions = _this.transactions.length;
                }
                else {
                    _this.totalTransactions = 0;
                    _this.transactions = [];
                }
                _this.searchString = "";
                _this.setPage(1);
            }, function (error) {
                console.log("err");
                _this.searchString = "";
                _this.transactions = [];
                _this.totalTransactions = 0;
                _this.setPage(1);
            });
        }
        else {
            this.searchString = "";
            this.loadAllOpenTransactions();
        }
    };
    ReturnsComponent.prototype.loadAllOpenTransactions = function () {
        var _this = this;
        this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].salesUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].getAllCompleteTransactionsURI)
            .subscribe(function (res) {
            _this.transactions = res;
            _this.totalTransactions = _this.transactions.length;
            _this.setPage(1);
        }, function (error) {
            console.log("Error in loadAllOpenTransactions()");
        });
    };
    ReturnsComponent.prototype.refund = function (transaction) {
        var _this = this;
        console.log("Refund transactionId initiated: " + transaction.transactionId);
        // package transactionId in JSON format
        var transactionIdObj = {
            transactionId: transaction.transactionId
        };
        this.shopService.updateObj("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].salesUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].instoreRefundURI, transactionIdObj)
            .subscribe(function (res) {
            _this.loadAllOpenTransactions();
            _this.setPage(1);
            _this.message = "Order Number " + transaction.transactionId + " for " + transaction.user.username + " has been refunded " + "$" + transaction.total.toFixed(2);
            _this.openAlert();
        }, function (error) {
            console.log("Error in refund()");
        });
    };
    ReturnsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalTransactions) {
            return;
        }
        this.pager = this.pagerService.getPager(this.totalTransactions, page, this.pageSize);
        this.pagedTransactions = this.transactions.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alert', {}),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ReturnsComponent.prototype, "alert", void 0);
    ReturnsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-returns',
            template: __webpack_require__(/*! ./returns.component.html */ "./src/app/register/returns/returns.component.html"),
            styles: [__webpack_require__(/*! ./returns.component.css */ "./src/app/register/returns/returns.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"],
            _common_services_pager_service__WEBPACK_IMPORTED_MODULE_4__["PagerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _common_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], ReturnsComponent);
    return ReturnsComponent;
}());



/***/ }),

/***/ "./src/app/shop/account/account.component.css":
/*!****************************************************!*\
  !*** ./src/app/shop/account/account.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shop/account/account.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shop/account/account.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Sidebar/menu -->\r\n <nav class=\"menuBar w3-sidebar w3-bar-block w3-white w3-collapse w3-top\" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n   <div class=\"w3-container w3-display-container w3-padding-16\">\r\n     <i onclick=\"w3_close()\" class=\"fa fa-remove w3-hide-large w3-button w3-display-topright\"></i>\r\n     <h3 class=\"w3-wide\"><b>GC Fashion</b></h3>\r\n   </div>\r\n   <br><br>\r\n\r\n   <a href=\"#footer\" class=\"w3-bar-item w3-button w3-padding-80\">Contact</a>\r\n   <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding\"\r\n     onclick=\"document.getElementById('newsletter').style.display='block'\">Newsletter</a>\r\n   <a routerLink=\"../../../gcfashions/shop/products\" class=\"w3-bar-item w3-button w3-padding\">Shop</a>\r\n </nav><br>\r\n\r\n <!-- Top menu on small screens -->\r\n <header class=\"w3-bar w3-top w3-hide-large w3-black w3-xlarge\">\r\n  <!-- <div class=\"w3-bar-item w3-padding-24 w3-wide\">GC FASHION</div> -->\r\n  <!-- <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding-24 w3-right\" (onclick)=\"w3_open()\"><i\r\n      class=\"fa fa-bars\"></i></a> -->\r\n\r\n     <nav class=\"navbar mr-auto navbar-expand-lg navbar-light bg-dark\">\r\n       <div class=\"w3-bar-item w3-padding-24 w3-wide\">GC FASHION</div>\r\n       <button class=\"navbar-toggler w3-button w3-padding-24 w3-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\"  aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarTogglerDemo02\">\r\n         <span class=\"navbar-toggler-icon\"></span>\r\n       </button>\r\n\r\n       <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\" [ngbCollapse]=\"isCollapsed\">\r\n       <ul class=\"navbar-nav w3-left mr-auto mt-2 mt-lg-0\">\r\n         <!-- <li class=\"nav-item active\"> -->\r\n           <a href=\"#footer\" class=\"w3-bar-item w3-button w3-padding-80\">Contact</a>\r\n           <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding\"\r\n           onclick=\"document.getElementById('newsletter').style.display='block'\">Newsletter</a>\r\n           <a routerLink=\"../../../gcfashions/shop/products\" class=\"w3-bar-item w3-button w3-padding\">Shop</a>\r\n         \r\n           <!-- </li> -->\r\n       </ul>\r\n     </div>\r\n       </nav>\r\n\r\n</header>\r\n\r\n <!-- !PAGE CONTENT! -->\r\n <div class=\"w3-main\" style=\"margin-left:250px\">\r\n   <!-- Push down content on small screens -->\r\n   <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n\r\n   <!-- Top header -->\r\n   <header class=\"w3-container w3-xlarge\">\r\n\r\n     <div>\r\n       <h1 class=\"w3-left\">{{fullName}}'s Account</h1>\r\n     </div>\r\n\r\n     <!-- logout -->\r\n     <a class=\"w3-right\" id=\"cart\" (click)=\"logout()\"> Logout\r\n       <em click={}>&nbsp;</em>\r\n       <span class=\"p1 fa-stack fa-1x has-badge\">\r\n         <i type=\"button\" class=\"fa fa-sign-out fa-stack-1x\"></i>\r\n       </span>\r\n     </a>\r\n   </header>\r\n\r\n   <!-- Image header -->\r\n   <div class=\"w3-display-container w3-container\">\r\n     <img src=\"assets/images/thumbnails/account.jpg\" style=\"width:100%\">\r\n     <div class=\"w3-display-topleft w3-text-white\" style=\"padding:24px 48px\">\r\n       <!-- <h1 class=\"w3-jumbo w3-hide-small\">New arrivals</h1>\r\n    <h1 class=\"w3-hide-large w3-hide-medium\">New arrivals</h1>\r\n    <h1 class=\"w3-hide-small\">COLLECTION 2020</h1>\r\n    <p><a href=\"/gcfashions/shop/products\" class=\"w3-button w3-black w3-padding-large w3-large\">SHOP NOW</a></p>\r\n   -->\r\n     </div>\r\n   </div><br>\r\n\r\n   <div class=\"w3-main\">\r\n     <div class=\"container\">\r\n       <h2>{{fullName}}'s Account</h2>\r\n       <div class=\"row\">\r\n         <div class=\"col-sm\">\r\n           <p>PROFILE</p>\r\n           <hr>\r\n           <p>username: {{username}}</p>\r\n         </div>\r\n         <div class=\"col-sm\">\r\n           <p>BILLING ADDRESS</p>\r\n           <hr>\r\n           <p>{{address}}</p>\r\n         </div>\r\n       </div>\r\n     </div>\r\n     <!-- order History for user -->\r\n     <div>\r\n       <h2>Order History</h2>\r\n       <h4>Total Orders: {{totalTransactions}}</h4>\r\n\r\n\r\n       <table class=\"table table-sm\" *ngFor=\"let t of pagedTransaction; let i = index\">\r\n         <thead class=\"thead-dark\">\r\n           <tr>\r\n             <th scope=\"col\">Reference Number: {{t.transactionId}}</th>\r\n             <th scope=\"col\">Status: {{t.status}}</th>\r\n           </tr>\r\n         </thead>\r\n         <tbody class=\"tbody-light\">\r\n           <!-- <tr > -->\r\n           <!-- <tr *ngFor=\"let p of t.inventory\">\r\n           <td>Product SKU:{{p.sku}}</td>\r\n           <td>Size: {{p.size}}</td>\r\n         </tr>\r\n         <tr>\r\n           <td></td>\r\n           <td></td>\r\n         </tr> -->\r\n\r\n           <tr class=\"table-active\">\r\n             <th scope=\"row\">Order Summary</th>\r\n             <td></td>\r\n           </tr>\r\n           <tr class=\"table-active\">\r\n             <td>Merchandise</td>\r\n             <td>{{t.total - t.tax | currency: $}}</td>\r\n           </tr>\r\n           <tr class=\"table-active\">\r\n             <td>Sales Tax</td>\r\n             <td>{{t.tax | currency: $}}</td>\r\n           </tr>\r\n           <tr class=\"table-active\">\r\n             <td>Order Total</td>\r\n             <td><b>{{t.total | currency: $}}</b></td>\r\n           </tr>\r\n           <tr>\r\n\r\n           </tr>\r\n         </tbody>\r\n       </table>\r\n       <!-- pagination -->\r\n       <div class=\"ds-l-row ds-u-margin-top--3\">\r\n         <div id=\"two\" class=\"pagination justify-content-center\">\r\n           <ngb-pagination [collectionSize]=\"totalTransactions*2\" [(page)]=\"pager.currentPage\" [maxSize]=\"5\"\r\n             [boundaryLinks]=\"true\" (pageChange)=\"setPage($event)\"></ngb-pagination>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </div>\r\n\r\n <!-- Newsletter Modal -->\r\n <div id=\"newsletter\" class=\"w3-modal\">\r\n   <div class=\"w3-modal-content w3-animate-zoom\" style=\"padding:32px\">\r\n     <div class=\"w3-container w3-white w3-center\">\r\n       <i onclick=\"document.getElementById('newsletter').style.display='none'\"\r\n         class=\"fa fa-remove w3-right w3-button w3-transparent w3-xxlarge\"></i>\r\n       <h2 class=\"w3-wide\">NEWSLETTER</h2>\r\n       <p>Join our mailing list to receive updates on new arrivals and special offers.</p>\r\n       <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Enter e-mail\"></p>\r\n       <button type=\"button\" class=\"w3-button w3-padding-large w3-red w3-margin-bottom\"\r\n         onclick=\"document.getElementById('newsletter').style.display='none'\">Subscribe</button>\r\n     </div>\r\n   </div>\r\n </div>\r\n"

/***/ }),

/***/ "./src/app/shop/account/account.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shop/account/account.component.ts ***!
  \***************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/shop.service */ "./src/app/common/services/shop.service.ts");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _common_services_pager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/pager.service */ "./src/app/common/services/pager.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AccountComponent = /** @class */ (function () {
    function AccountComponent(shopService, pagerService, authService, modalService, fb) {
        this.shopService = shopService;
        this.pagerService = pagerService;
        this.authService = authService;
        this.modalService = modalService;
        this.fb = fb;
        // pagination
        this.pager = {};
        this.pageSize = 5;
    }
    AccountComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadAllTransactions()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountComponent.prototype.loadAllTransactions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                userData = localStorage.getItem('userId');
                return [2 /*return*/, this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].getUserURI + userData + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].getUserTransactionsURI)
                        .subscribe(function (res) {
                        _this.transactions = res;
                        var user = _this.transactions[0].user;
                        _this.username = user.username;
                        _this.fullName = user.fullName;
                        _this.address = user.address;
                        _this.totalTransactions = _this.transactions.length;
                        _this.setPage(1);
                    }, function (error) {
                        console.log("Error when loading All Products.");
                    })];
            });
        });
    };
    AccountComponent.prototype.logout = function () {
        return this.authService.logout();
    };
    AccountComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalTransactions) {
            return;
        }
        this.pager = this.pagerService.getPager(this.totalTransactions, page, this.pageSize);
        this.pagedTransaction = this.transactions.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/shop/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/shop/account/account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"],
            _common_services_pager_service__WEBPACK_IMPORTED_MODULE_4__["PagerService"],
            _common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/shop/checkout/checkout.component.css":
/*!******************************************************!*\
  !*** ./src/app/shop/checkout/checkout.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".borderless td,\r\n.borderless th {\r\n  border: none;\r\n}\r\n\r\n.borderless thead {\r\n  border-bottom: 1px dotted;\r\n  border-color: gray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9zaG9wL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVybGVzcyB0ZCxcclxuLmJvcmRlcmxlc3MgdGgge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmJvcmRlcmxlc3MgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shop/checkout/checkout.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shop/checkout/checkout.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"w3-container w3-xlarge mt-4\">\r\n  <p class=\"w3-left\">{{headerText}}</p>\r\n</header>\r\n\r\n<!-- Image header -->\r\n<div class=\"w3-display-container w3-container\">\r\n  <img src=\"assets/images/thumbnails/{{headerImage}}.jpg\" alt=\"header image\" style=\"width:100%\">\r\n</div>\r\n\r\n<!-- Transaction details / Credit Card Form -->\r\n<div class=\"w3-display-container w3-container mt-4\">\r\n  <table class=\"table borderless\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">\r\n          <h5>{{name}}</h5>\r\n        </th>\r\n        <th scope=\"col\">\r\n          <h5>Credit Card Information:</h5>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>\r\n          Order Number: {{orderNum}}<br>\r\n          Address: {{address}}<br>\r\n          Total Due: {{orderTotal | currency: $}}\r\n        </td>\r\n        <td>\r\n          <form [formGroup]=\"checkoutForm\">\r\n            <!-- Credit card info goes here -->\r\n            <div>\r\n              <div id=\"card-element\"></div>\r\n            </div>\r\n\r\n            <!-- Errors will show here -->\r\n            <div id=\"card-errors\" role=\"alert\"></div>\r\n\r\n            <!-- Submit button -->\r\n            <div class=\"mt-4\">\r\n              <button id=\"submit\" (click)=\"submit()\">Pay Now</button>\r\n            </div>\r\n          </form>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <hr *ngIf=\"message\">\r\n\r\n  <div class=\"w3-display-container w3-container\">\r\n    <h3 class=\"text-center text-success mt-2\">{{message}}</h3>\r\n  </div>\r\n\r\n  <div class=\"w3-display-container w3-container\">\r\n    <p class=\"text-center mt-2\"><a href=\"/gcfashions/shop/products\">{{linkText}}</a></p>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shop/checkout/checkout.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shop/checkout/checkout.component.ts ***!
  \*****************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/shop.service */ "./src/app/common/services/shop.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(shopService) {
        this.shopService = shopService;
        this.headerText = "GC Fashion Checkout";
        this.headerImage = "checkout";
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.getTransactionDetails();
        this.initializeFormGroup();
    };
    CheckoutComponent.prototype.initializeFormGroup = function () {
        this.checkoutForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            cardHolderName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.cardHolderName),
        });
    };
    // called after component's view fully initialized
    CheckoutComponent.prototype.ngAfterViewInit = function () {
        var style = {
            base: {
                color: "#32325d",
            }
        };
        this.stripe = Stripe(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].stripePublishKey);
        var elements = this.stripe.elements();
        this.card = elements.create("card", { style: style });
        this.card.mount("#card-element");
        // displays error messages for invalid input
        this.card.on('change', function (_a) {
            var error = _a.error;
            var displayError = document.getElementById('card-errors');
            if (error) {
                displayError.textContent = error.message;
            }
            else {
                displayError.textContent = '';
            }
        });
    };
    CheckoutComponent.prototype.getTransactionDetails = function () {
        var _this = this;
        var userId = Number(localStorage.getItem('userId'));
        this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].getOpenTransactionURI + userId)
            .subscribe(function (res) {
            _this.openTransaction = res;
            _this.name = _this.openTransaction.user.fullName;
            _this.orderNum = _this.openTransaction.transactionId;
            _this.orderTotal = _this.openTransaction.total;
            _this.address = _this.openTransaction.user.address;
        }, function (error) {
            console.log("Error in getting Transaction details.");
        });
    };
    CheckoutComponent.prototype.submit = function () {
        var _this = this;
        console.log("submit method");
        // create a new transaction with item user added to cart
        var transaction = {
            userId: Number(localStorage.getItem('userId')),
            total: this.orderTotal
        };
        this.shopService.postObj("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].postCheckoutURI, transaction)
            .subscribe(function (res) {
            _this.clientSecret = res;
            _this.confirm();
        }, function (error) {
            throw new Error("Error in getTransactionDetails()");
        });
    };
    CheckoutComponent.prototype.confirm = function () {
        this.stripe.confirmCardPayment(this.clientSecret.client_secret, {
            payment_method: {
                card: this.card,
                billing_details: {
                    name: this.name
                }
            }
        }).then(function (result) {
            if (result.error) {
                // Show error to your customer (e.g., insufficient funds)
                console.log(result.error.message);
            }
            else {
                // The payment has been processed!
                if (result.paymentIntent.status === 'succeeded') {
                    // Show a success message to your customer
                    // There's a risk of the customer closing the window before callback
                    // execution. Set up a webhook or plugin to listen for the
                    // payment_intent.succeeded event that handles any business critical
                    // post-payment actions.
                    var button = document.querySelector('button');
                    button.disabled = true;
                }
            }
        });
        this.headerText = "Order Confirmed";
        this.headerImage = "confirmation";
        this.message = "Good News! Your Order has been Received!";
        this.linkText = "Return to Main Page";
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/shop/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/shop/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/shop/products/products.component.css":
/*!******************************************************!*\
  !*** ./src/app/shop/products/products.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cart .p1[data-count]:after {\r\n  position: absolute;\r\n  right: 10%;\r\n  top: 8%;\r\n  content: attr(data-count);\r\n  font-size: 40%;\r\n  padding: .2em;\r\n  border-radius: 10px;\r\n  line-height: 1em;\r\n  color: white;\r\n  background: #6394F8;\r\n  text-align: center;\r\n  min-width: 1em;\r\n}\r\n\r\n#cart .p3:hover {\r\n  color: gray;\r\n}\r\n\r\n#cart {\r\n  cursor: pointer;\r\n}\r\n\r\n#header-color {\r\n  background-color: black;\r\n  color: white;\r\n  /* color: black; */\r\n}\r\n\r\n/* Hide scrollbar for Chrome, Safari and Opera */\r\n\r\n.menuBar::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n/* Hide scrollbar for IE, Edge and Firefox */\r\n\r\n.menuBar {\r\n  -ms-overflow-style: none;\r\n  /* IE and Edge */\r\n  scrollbar-width: none;\r\n  /* Firefox */\r\n}\r\n\r\n.pagination {\r\n  /*z-index:90;  or more than your image */\r\n  /* position: relative; */\r\n  position: absolute;\r\n  z-index: 0;\r\n  align-items: center;\r\n  color: #000;\r\n  padding: 50px, 100px;\r\n}\r\n\r\n#navbarTogglerDemo02 {\r\n  height: 400px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxRQUFRO0VBQ1IsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBRUQsaURBQWlEOztBQUNqRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRCw2Q0FBNkM7O0FBQzdDO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsYUFBYTtDQUNkOztBQUVEO0VBQ0UseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1oscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXJ0IC5wMVtkYXRhLWNvdW50XTphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMCU7XHJcbiAgdG9wOiA4JTtcclxuICBjb250ZW50OiBhdHRyKGRhdGEtY291bnQpO1xyXG4gIGZvbnQtc2l6ZTogNDAlO1xyXG4gIHBhZGRpbmc6IC4yZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjNjM5NEY4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IDFlbTtcclxufVxyXG5cclxuI2NhcnQgLnAzOmhvdmVyIHtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuI2NhcnQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2hlYWRlci1jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qIGNvbG9yOiBibGFjazsgKi9cclxufVxyXG5cclxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xyXG4ubWVudUJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xyXG4ubWVudUJhciB7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gIC8qIElFIGFuZCBFZGdlICovXHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gIC8qei1pbmRleDo5MDsgIG9yIG1vcmUgdGhhbiB5b3VyIGltYWdlICovXHJcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgcGFkZGluZzogNTBweCwgMTAwcHg7XHJcbn1cclxuXHJcbiNuYXZiYXJUb2dnbGVyRGVtbzAyIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shop/products/products.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shop/products/products.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Sidebar/menu -->\r\n <nav class=\"menuBar w3-sidebar w3-bar-block w3-white w3-collapse w3-top\" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n   <div class=\"w3-container w3-display-container w3-padding-16\">\r\n     <i onclick=\"w3_close()\" class=\"fa fa-remove w3-hide-large w3-button w3-display-topright\"></i>\r\n     <h3 class=\"w3-wide\"><b>GC Fashion</b></h3>\r\n   </div>\r\n   <div class=\"w3-padding-30 w3-large w3-text-grey\" style=\"font-weight:bold\"\r\n     *ngFor=\"let c of categories | categorySort\">\r\n     <!-- *ngIf=\"c.products.length\"  -->\r\n     <a (click)=\"loadProductsByCategory(c)\" class=\"w3-bar-item w3-button\">{{c.catName}}</a>\r\n     <div *ngFor=\"let sc of c.subcategories | subcategorySort\">\r\n       <!-- *ngIf=\"sc.products.length\"  -->\r\n       <a class=\"small w3-button\"\r\n         (click)=\"loadProductsBySubCategory(sc.catId, sc.subcatId,c)\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{sc.subcatName}}</a>\r\n     </div>\r\n\r\n   </div><br><br>\r\n\r\n   <a href=\"#footer\" class=\"w3-bar-item w3-button w3-padding-80\">Contact</a>\r\n   <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding\"\r\n     onclick=\"document.getElementById('newsletter').style.display='block'\">Newsletter</a>\r\n   <a routerLink=\"../../../gcfashions/home\" class=\"w3-bar-item w3-button w3-padding\">My Account</a>\r\n </nav><br>\r\n\r\n <!-- Top menu on small screens -->\r\n <header class=\"w3-bar w3-top w3-hide-large w3-black w3-xlarge\" id=\"testBar\">\r\n   <!-- <div class=\"w3-bar-item w3-padding-24 w3-wide\">GC FASHION</div> -->\r\n   <!-- <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding-24 w3-right\" (onclick)=\"w3_open()\"><i\r\n       class=\"fa fa-bars\"></i></a> -->\r\n\r\n   <nav class=\"navbar mr-auto navbar-expand-lg navbar-light bg-dark\" id=\"topMenu\">\r\n     <div class=\"w3-bar-item w3-padding-24 w3-wide\">GC FASHION</div>\r\n     <button id=\"toggleButton\" class=\"navbar-toggler w3-button w3-button w3-display-topright\" type=\"button\"\r\n       data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\r\n       (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarTogglerDemo02\">\r\n       <span class=\"navbar-toggler-icon\"></span>\r\n     </button>\r\n\r\n     <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\" [ngbCollapse]=\"isCollapsed\">\r\n       <ul class=\"navbar-nav mr-auto mt-2\">\r\n         <li class=\"nav-item\" *ngFor=\"let c of categories | categorySort\">\r\n           <a (click)=\"loadProductsByCategory(c)\" (click)=\"isCollapsed = !isCollapsed\"\r\n             class=\"w3-bar-item w3-button w3-large\">{{c.catName}}</a>\r\n           <!-- <p class=\"nav-item active\" *ngFor=\"let sc of c.subcategories\">\r\n             <a class=\"small w3-button\"\r\n               (click)=\"loadProductsBySubCategory(sc.catId, sc.subcatId,c)\">{{sc.subcatName}}</a>\r\n           </p> -->\r\n         </li>\r\n       </ul>\r\n       <ul class=\"navbar-nav w3-left mr-auto mt-5\">\r\n         <li><a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-large\"\r\n             onclick=\"document.getElementById('newsletter').style.display='block'\">Newsletter</a></li>\r\n         <li><a routerLink=\"../../../gcfashions/home\" class=\"w3-bar-item w3-button w3-large\">My Account</a></li>\r\n       </ul>\r\n     </div>\r\n\r\n   </nav>\r\n\r\n </header>\r\n\r\n <!-- Overlay effect when opening sidebar on small screens -->\r\n <div class=\"w3-overlay w3-hide-large\" onclick=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\"\r\n   id=\"myOverlay\"></div>\r\n\r\n\r\n <!-- !PAGE CONTENT! -->\r\n <div class=\"w3-main\" style=\"margin-left:250px\">\r\n\r\n\r\n   <!-- Push down content on small screens -->\r\n   <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n\r\n   <!-- Top header -->\r\n   <header class=\"w3-container w3-xlarge\">\r\n     <p class=\"w3-left\">{{ selectedCategory | titlecase}}</p>\r\n\r\n     <!-- shopping cart -->\r\n     <a class=\"w3-right\" id=\"cart\" (click)=\"showCart(cartDetailsModal)\"> Cart({{ cartNumItems }})\r\n       <em click={}>&nbsp;</em>\r\n       <span class=\"p1 fa-stack fa-1x has-badge\">\r\n         <i type=\"button\" class=\"p3 fa fa-shopping-cart fa-stack-1x xfa-inverse\"></i>\r\n       </span>\r\n     </a>\r\n   </header>\r\n\r\n   <!-- Image header -->\r\n   <div class=\"w3-display-container w3-container\" *ngIf=\"selectedCategory != 'All Products'\">\r\n     <img src=\"assets/images/thumbnails/header/{{selectedCategoryInfo.catName}}.jpg\"\r\n       alt=\"{{selectedCategoryInfo.catName}}\" style=\"width:100%\">\r\n     <div class=\"w3-display-topleft w3-text-white\" style=\"padding:24px 48px\">\r\n       <h1 id='header-color' class=\"w3-jumbo w3-hide-small\">{{selectedCategoryInfo.catDesc}}</h1>\r\n       <h1 class=\"w3-hide-large w3-hide-medium\">{{selectedCategoryInfo.catDesc}}</h1>\r\n       <!-- <p><a href=\"/gcfashions/shop/products\" class=\"w3-button w3-black w3-padding-large w3-large\">SHOP NOW</a></p> -->\r\n     </div>\r\n   </div><br>\r\n   <!-- Image header -->\r\n   <div class=\"w3-display-container w3-container\" *ngIf=\"selectedCategory == 'All Products'\">\r\n     <img src=\"assets/images/thumbnails/header/jeans.jpg\" alt=\"Jeans\" style=\"width:100%\">\r\n     <div class=\"w3-display-topleft w3-text-white\" style=\"padding:24px 48px\">\r\n       <h1 class=\"w3-jumbo w3-hide-small\">New arrivals</h1>\r\n       <h1 class=\"w3-hide-large w3-hide-medium\">New arrivals</h1>\r\n       <h1 class=\"w3-hide-small\">COLLECTION 2020</h1>\r\n       <p><a href=\"/gcfashions/shop/products\" class=\"w3-button w3-black w3-padding-large w3-large\">SHOP NOW</a></p>\r\n     </div>\r\n   </div><br>\r\n\r\n\r\n   <div class=\"w3-container w3-text-grey\" id=\"jeans\">\r\n     <div class=\"w3-left col-lg-4\">\r\n       <p>{{ totalProducts }} total items</p>\r\n     </div>\r\n     <!-- search bar -->\r\n     <div class=\"w3-right col-lg-4\">\r\n       <form [formGroup]=\"searchProductForm\" class=\"form-inline d-flex justify-content-center md-form form-sm mt-0\">\r\n         <i class=\"fa fa-search\"></i>\r\n         <input type=\"text\" class=\"form-control form-control-sm ml-3 w-75\" formControlName=\"searchString\"\r\n           (input)=\"searchProducts()\" placeholder=\"Search\" aria-label=\"Search\" />\r\n       </form>\r\n     </div>\r\n   </div>\r\n\r\n\r\n\r\n   <!-- show products -->\r\n   <div class=\"w3-row w3-grayscale\">\r\n\r\n     <!-- if no products -->\r\n     <div class=\"w3-col l6 s12\" *ngIf=\"totalProducts == 0\">\r\n       <h1 class=\"w3-large w3-hide-medium\">Sorry No Products Found</h1>\r\n       <img src=\"assets/images/thumbnails/noProduct.PNG\" style=\"width:100%\">\r\n     </div>\r\n\r\n     <ng-container *ngFor=\"let p of pagedProduct | productSort; let i = index\">\r\n       <div class=\"w3-col l3 s6\" *ngIf=\"i % 4 == 0 && i != 0\">\r\n         <div class=\"w3-container\">\r\n           <div class=\"w3-display-container\">\r\n\r\n             <img src=\"assets/images/thumbnails/{{p.photo}}.jpg\" style=\"width:100%\">\r\n             <!-- <span class=\"w3-tag w3-display-topleft\">Sale</span> -->\r\n\r\n             <div class=\"w3-display-middle w3-display-hover\">\r\n               <button class=\"w3-button w3-black\" (click)=\"open(productDetailsModal, p)\">Buy now <i\r\n                   class=\"fa fa-shopping-cart\"></i></button>\r\n             </div> <!-- end div hover button -->\r\n\r\n             <p>{{p.productName}}<br><b>{{p.price | currency: $}}</b></p>\r\n\r\n           </div> <!-- end div display container -->\r\n         </div> <!-- end container -->\r\n       </div>\r\n\r\n       <div class=\"w3-col l3 s6\" *ngIf=\"i % 3 == 0 && i % 4 != 0 && i != 0\">\r\n         <div class=\"w3-container\">\r\n           <div class=\"w3-display-container\">\r\n\r\n             <img src=\"assets/images/thumbnails/{{p.photo}}.jpg\" style=\"width:100%\">\r\n             <!-- <span class=\"w3-tag w3-display-topleft\">New</span> -->\r\n\r\n             <div class=\"w3-display-middle w3-display-hover\">\r\n               <button class=\"w3-button w3-black\" (click)=\"open(productDetailsModal, p)\">Buy now <i\r\n                   class=\"fa fa-shopping-cart\"></i></button>\r\n             </div> <!-- end div hover button -->\r\n\r\n             <p>{{p.productName}}<br><b>{{p.price | currency: $}}</b></p>\r\n\r\n           </div> <!-- end div display container -->\r\n         </div> <!-- end container -->\r\n       </div>\r\n\r\n       <div class=\"w3-col l3 s6\" *ngIf=\"i % 2 == 0 && i % 3 != 0 && i % 4 != 0 && i != 0\">\r\n         <div class=\"w3-container\">\r\n           <div class=\"w3-display-container\">\r\n\r\n             <img src=\"assets/images/thumbnails/{{p.photo}}.jpg\" style=\"width:100%\">\r\n\r\n             <div class=\"w3-display-middle w3-display-hover\">\r\n               <button class=\"w3-button w3-black\" (click)=\"open(productDetailsModal, p)\">Buy now <i\r\n                   class=\"fa fa-shopping-cart\"></i></button>\r\n             </div> <!-- end div hover button -->\r\n\r\n             <p>{{p.productName}}<br><b>{{p.price | currency: $}}</b></p>\r\n\r\n           </div> <!-- end div display container -->\r\n         </div> <!-- end container -->\r\n       </div>\r\n\r\n       <div class=\"w3-col l3 s6\" *ngIf=\"i % 4 != 0 && i % 3 != 0 && i % 2 != 0 || i == 0\">\r\n         <div class=\"w3-container\">\r\n           <div class=\"w3-display-container\">\r\n\r\n             <img src=\"assets/images/thumbnails/{{p.photo}}.jpg\" style=\"width:100%\">\r\n\r\n             <div class=\"w3-display-middle w3-display-hover\">\r\n               <button class=\"w3-button w3-black\" (click)=\"open(productDetailsModal, p)\">Buy now <i\r\n                   class=\"fa fa-shopping-cart\"></i></button>\r\n             </div> <!-- end div hover button -->\r\n\r\n             <p>{{p.productName}}<br><b>{{p.price | currency: $}}</b></p>\r\n\r\n           </div> <!-- end div display container -->\r\n         </div> <!-- end container -->\r\n       </div>\r\n\r\n\r\n     </ng-container>\r\n   </div>\r\n\r\n\r\n   <!-- pagination -->\r\n   <!-- <div class=\"ds-l-row ds-u-margin-top--3\">\r\n     <div class=\"pagination justify-content-center\" id=\"pagination\">\r\n       <ngb-pagination [collectionSize]=\"totalProducts\" [(page)]=\"pager.currentPage\" [pageSize]=\"pageSize\" [maxSize]=\"5\"\r\n         [boundaryLinks]=\"true\" (pageChange)=\"setPage($event)\"></ngb-pagination>\r\n     </div>\r\n   </div> -->\r\n\r\n   <div class=\"row ds-u-margin-top--3\">\r\n     <div class=\"w3-col\"></div>\r\n     <div class=\"w3-col justify-content-center pagination\" id=\"pagination\">\r\n       <ngb-pagination [collectionSize]=\"totalProducts\" [(page)]=\"pager.currentPage\" [pageSize]=\"pageSize\" [maxSize]=\"5\"\r\n         [boundaryLinks]=\"true\" (pageChange)=\"setPage($event)\"></ngb-pagination>\r\n     </div>\r\n   </div>\r\n\r\n\r\n   <br><br><br><br>\r\n\r\n\r\n   <!-- Subscribe section -->\r\n   <div class=\"w3-container w3-black w3-padding-32\">\r\n     <h1>Subscribe</h1>\r\n     <p>To get special offers and VIP treatment:</p>\r\n     <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Enter e-mail\" style=\"width:100%\"></p>\r\n     <button type=\"button\" class=\"w3-button w3-red w3-margin-bottom\">Subscribe</button>\r\n   </div>\r\n\r\n   <!-- Footer -->\r\n   <!-- <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n     <div class=\"w3-row-padding\">\r\n       <div class=\"w3-col s4\">\r\n         <h4>Contact</h4>\r\n         <p>Questions? Go ahead.</p>\r\n         <form action=\"/action_page.php\" target=\"_blank\">\r\n           <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Name\" name=\"Name\" required></p>\r\n           <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Email\" name=\"Email\" required></p>\r\n           <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Subject\" name=\"Subject\" required></p>\r\n           <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Message\" name=\"Message\" required></p>\r\n           <button type=\"submit\" class=\"w3-button w3-block w3-black\">Send</button>\r\n         </form>\r\n       </div>\r\n\r\n       <div class=\"w3-col s4\">\r\n         <h4>About</h4>\r\n         <p><a href=\"#\">About us</a></p>\r\n         <p><a href=\"#\">We're hiring</a></p>\r\n         <p><a href=\"#\">Support</a></p>\r\n         <p><a href=\"#\">Find store</a></p>\r\n         <p><a href=\"#\">Shipment</a></p>\r\n         <p><a href=\"#\">Payment</a></p>\r\n         <p><a href=\"#\">Gift card</a></p>\r\n         <p><a href=\"#\">Return</a></p>\r\n         <p><a href=\"#\">Help</a></p>\r\n       </div>\r\n\r\n       <div class=\"w3-col s4 w3-justify\">\r\n         <h4>Store</h4>\r\n         <p><i class=\"fa fa-fw fa-map-marker\"></i> GC Fashion</p>\r\n         <p><i class=\"fa fa-fw fa-phone\"></i> 0044123123</p>\r\n         <p><i class=\"fa fa-fw fa-envelope\"></i> ShopGC@gcfashion.com</p>\r\n         <h4>We accept</h4>\r\n         <p><i class=\"fa fa-fw fa-cc-amex\"></i> Amex</p>\r\n         <p><i class=\"fa fa-fw fa-credit-card\"></i> Credit Card</p>\r\n         <br>\r\n         <i class=\"fa fa-facebook-official w3-hover-opacity w3-large\"></i>\r\n         <i class=\"fa fa-instagram w3-hover-opacity w3-large\"></i>\r\n         <i class=\"fa fa-snapchat w3-hover-opacity w3-large\"></i>\r\n         <i class=\"fa fa-pinterest-p w3-hover-opacity w3-large\"></i>\r\n         <i class=\"fa fa-twitter w3-hover-opacity w3-large\"></i>\r\n         <i class=\"fa fa-linkedin w3-hover-opacity w3-large\"></i>\r\n       </div>\r\n     </div>\r\n\r\n     <p>\r\n       Copyright &copy; 2020 by Smoothstack, Inc. All Rights Reserved.\r\n     </p>\r\n   </footer> -->\r\n\r\n\r\n </div>\r\n\r\n <!-- Newsletter Modal -->\r\n <div id=\"newsletter\" class=\"w3-modal\">\r\n   <div class=\"w3-modal-content w3-animate-zoom\" style=\"padding:32px\">\r\n     <div class=\"w3-container w3-white w3-center\">\r\n       <i onclick=\"document.getElementById('newsletter').style.display='none'\"\r\n         class=\"fa fa-remove w3-right w3-button w3-transparent w3-xxlarge\"></i>\r\n       <h2 class=\"w3-wide\">NEWSLETTER</h2>\r\n       <p>Join our mailing list to receive updates on new arrivals and special offers.</p>\r\n       <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Enter e-mail\"></p>\r\n       <button type=\"button\" class=\"w3-button w3-padding-large w3-red w3-margin-bottom\"\r\n         onclick=\"document.getElementById('newsletter').style.display='none'\">Subscribe</button>\r\n     </div>\r\n   </div>\r\n </div>\r\n\r\n <script>\r\n   // Accordion \r\n   function myAccFunc() {\r\n     var x = document.getElementById(\"demoAcc\");\r\n     if (x.className.indexOf(\"w3-show\") == -1) {\r\n       x.className += \" w3-show\";\r\n     } else {\r\n       x.className = x.className.replace(\" w3-show\", \"\");\r\n     }\r\n   }\r\n\r\n   // Click on the \"Jeans\" link on page load to open the accordion for demo purposes\r\n   document.getElementById(\"myBtn\").click();\r\n\r\n\r\n   // Open and close sidebar\r\n   function w3_open() {\r\n     document.getElementById(\"mySidebar\").style.display = \"block\";\r\n     document.getElementById(\"myOverlay\").style.display = \"block\";\r\n   }\r\n\r\n   function w3_close() {\r\n     document.getElementById(\"mySidebar\").style.display = \"none\";\r\n     document.getElementById(\"myOverlay\").style.display = \"none\";\r\n   }\r\n\r\n </script>\r\n <ng-template #cartDetailsModal let-c=\"close\" let-d=\"dismiss\">\r\n   <form [formGroup]=\"cartDetailsForm\">\r\n     <div class=\"modal-dialog\" style=\"padding:32px\" role=\"document\">\r\n       <div class=\"modal-content w3-white w3-center\">\r\n         <div class=\"modal-header\">\r\n           <h2 class=\"modal-title w3-center  w3-wide\">YOUR CART</h2>\r\n           <i button type=\"button\" class=\"close w3-right\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"c()\"\r\n             class=\"fa fa-remove w3-right w3-button w3-transparent w3-xxlarge\"></i>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n           <div class=\"form-group\">\r\n\r\n             <div class=\"w3-row\" *ngFor=\"let p of cartProducts\">\r\n               <!-- <div class=\"col-lg-5\" > -->\r\n               <img class=\"w3-left\" src=\"assets/images/thumbnails/{{p.photo}}.jpg\" style=\"height: 10%; width:20%\">\r\n               <div class=\"row\">\r\n                 <div class=\"col\">\r\n                   <h5 class=\"w3-left\">{{p.productName}}</h5><br>\r\n                 </div>\r\n               </div>\r\n\r\n               <div class=\"row\">\r\n                 <div class=\"col\">\r\n                   <p class=\"w3-left\">Size: {{p.inventory[0].size | uppercase}}</p>\r\n                 </div>\r\n                 <div class=\"col\">\r\n                   <p class=\"w3-left\"><button type=\"button\" class=\"btn btn-warning btn-sm\"\r\n                       (click)=\"removeItem(p.inventory[0].sku)\">Remove</button></p>\r\n                 </div>\r\n\r\n               </div>\r\n               <h4 class=\"w3-center\"><b>{{p.price | currency: $}}</b></h4>\r\n               <!-- </div> -->\r\n               <!-- <div class=\"col-lg-2\" ></div>\r\n              <div class=\"col-lg-5\" >\r\n                <h4 class=\"w3-left\">{{p.productName}}</h4><br><br>\r\n                <h1 class=\"w3-left\">Size: {{p.sizeChoice}}</h1><br>\r\n                <h3 class=\"w3-center\"><b>{{p.price | currency: $}}</b></h3>\r\n              </div> -->\r\n               <hr>\r\n\r\n\r\n             </div>\r\n             <p *ngIf=\"cartNumItems > 0\">Total Items: {{ cartNumItems }}</p>\r\n             <hr>\r\n\r\n             <!-- Coupon code section -->\r\n             Enter a coupon code:\r\n             <input class=\"form-control\" id=\"couponCode\" formControlName=\"couponCode\"><button type=\"button\"\r\n               class=\"btn btn-danger btn-sm\"\r\n               (click)=\"addCouponCode(cartDetailsForm.controls.couponCode.value)\">Submit</button>\r\n             <p *ngIf=\"couponCode && couponDiscount > 0\" class=\"mt-3 text-success\">Coupon code '{{couponCode}}'\r\n               applied<br>{{couponDescription}}</p>\r\n             <p *ngIf=\"couponCode == 0\" class=\"mt-3 text-danger\">Coupon code is not valid</p>\r\n             <hr>\r\n\r\n             <!-- Price calculations -->\r\n             <h5 class=\"text-right mr-5\" *ngIf=\"cartNumItems > 0\">Subtotal : {{ cartTotal | currency: $ }}\r\n             </h5>\r\n             <h5 *ngIf=\"couponCode && cartNumItems > 0\" class=\"text-right mr-5 text-success\">Discount :\r\n               ({{couponDiscount * cartTotal | currency: $}})</h5>\r\n             <h6 class=\"text-right mr-5\" *ngIf=\"cartNumItems > 0\">Tax (6%):\r\n               {{ (cartTotal - (couponDiscount * cartTotal)) * taxRate | currency: $ }}</h6>\r\n             <h5 class=\"text-right mr-5\" *ngIf=\"cartNumItems > 0\">Total :\r\n               {{ ((cartTotal - (couponDiscount * cartTotal)) + ((cartTotal - (couponDiscount * cartTotal)) * taxRate)) | currency: $ }}\r\n             </h5>\r\n             <hr>\r\n             <button type=\"button\" class=\"w3-center w3-wide w3-button w3-red w3-margin-bottom\"\r\n               (click)=\"checkout((cartTotal - (couponDiscount * cartTotal)) * taxRate, ((cartTotal - (couponDiscount * cartTotal)) + ((cartTotal - (couponDiscount * cartTotal)) * taxRate)))\">\r\n               CHECK OUT</button>\r\n\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </form>\r\n </ng-template>\r\n\r\n <ng-template #productDetailsModal let-c=\"close\" let-d=\"dismiss\">\r\n   <form [formGroup]=\"productDetailsForm\">\r\n     <div class=\"modal-dialog\" role=\"document\">\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n           <h4 class=\"modal-title\" id=\"exampleModalLabel\">{{ productDetailsForm.controls['productName'].value }}</h4>\r\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"c()\">\r\n             <span aria-hidden=\"true\">&times;</span>\r\n           </button>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n           <div class=\"form-group\">\r\n             <p><img src=\"assets/images/thumbnails/{{ productDetailsForm.controls['photo'].value }}.jpg\"\r\n                 style=\"width:100%\"></p>\r\n             <p>{{ productDetailsForm.controls['description'].value }}</p>\r\n             <h6 class=\"mt-5\">Price: {{ productDetailsForm.controls['price'].value | currency: $ }}</h6>\r\n\r\n             <h6 class=\"mt-4\">\r\n               Size:\r\n               <select class=\"custom-select\" formControlName=\"sizeChoice\">\r\n                 <option value=\"\" disabled>Available sizes:</option>\r\n                 <option *ngFor=\"let inv of productDetailsForm.controls['inventory'].value\" [ngValue]=\"inv.sku\">\r\n                   {{inv.size | uppercase}}</option>\r\n               </select>\r\n               <button type=\"button\" class=\"btn btn-dark mt-4 pull-right\"\r\n                 (click)=\"addToCart(productDetailsForm.controls.sizeChoice.value)\"\r\n                 [disabled]=\"productDetailsForm.controls.sizeChoice.value == 0\">Add to\r\n                 Cart</button>\r\n             </h6>\r\n\r\n\r\n           </div>\r\n         </div>\r\n         <!-- <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"c()\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateAuthor()\"\r\n            [disabled]=\"updateAuthorForm.invalid\">Save changes</button>\r\n        </div> -->\r\n       </div>\r\n     </div>\r\n   </form>\r\n </ng-template>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");









var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(shopService, pagerService, modalService, fb, router, authService) {
        this.shopService = shopService;
        this.pagerService = pagerService;
        this.modalService = modalService;
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        // routers: Router;
        // header
        this.selectedCategory = "All Products";
        // product data
        this.noProduct = 0;
        this.cartTotal = 0;
        this.cartNumItems = 0;
        this.cartProducts = [];
        this.taxRate = 0.06;
        this.couponDiscount = 0;
        // pagination
        this.pager = {};
        this.pageSize = 12;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.loadAllProducts();
        this.loadAllCategories();
        this.loadCart(Number(localStorage.getItem('userId')));
        this.initializeFormGroup();
    };
    ProductsComponent.prototype.w3_open = function () {
        console.log("here");
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("mySidebar").style.display = "block";
        console.log("here");
    };
    ProductsComponent.prototype.w3_close = function () {
        document.getElementById("mySidebar").style.display = "none";
    };
    ProductsComponent.prototype.initializeFormGroup = function () {
        this.productDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.productName),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.description),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.photo),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.price),
            inventory: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]([this.inventory]),
            sizeChoice: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]([this.sizeChoice]),
            productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]([this.productId]),
        });
        this.cartDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            cartNumItems: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.cartNumItems),
            cartProducts: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.cartProducts),
            sizeChoice: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]([this.sizeChoice]),
            couponCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]([this.couponCode]),
        });
        this.searchProductForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            searchString: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.searchString),
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
            console.log("Error in loading All Products.");
        });
    };
    ProductsComponent.prototype.loadAllCategories = function () {
        var _this = this;
        this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getCategoriesURI)
            .subscribe(function (res) {
            _this.categories = res;
            _this.totalCategories = _this.categories.length;
        }, function (error) {
            console.log("Error in loading All Categories.");
        });
    };
    ProductsComponent.prototype.loadProductsByCategory = function (cat) {
        var _this = this;
        this.selectedCategory = cat.catName;
        this.selectedCategoryInfo = cat;
        this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getCategoryURI + cat.catId + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getProductsURI)
            .subscribe(function (res) {
            _this.products = res;
            _this.totalProducts = _this.products.length;
            _this.setPage(1);
        }, function (error) {
            _this.products = [];
            _this.totalProducts = 0;
            _this.noProduct = 1;
            _this.setPage(1);
        });
    };
    ProductsComponent.prototype.loadCart = function (userId) {
        var _this = this;
        this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getCartItemsURI + userId)
            .subscribe(function (res) {
            _this.cartProducts = res;
            _this.cartNumItems = _this.cartProducts.length;
            _this.cartTotal = 0;
            var p = null;
            for (var _i = 0, _a = _this.cartProducts; _i < _a.length; _i++) {
                p = _a[_i];
                _this.cartTotal += p.price;
            }
        }, function (error) {
            console.log("Error in ehn loading Cart.");
        });
    };
    ProductsComponent.prototype.loadCoupon = function (userId) {
        var _this = this;
        this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getCouponURI + userId)
            .subscribe(function (res) {
            _this.couponApplied = res;
            if (_this.couponApplied) {
                _this.couponCode = _this.couponApplied.couponId;
                _this.couponDescription = _this.couponApplied.couponDesc;
                _this.couponDiscount = _this.couponApplied.discount;
            }
        }, function (error) {
            console.log("No coupons applied");
        });
    };
    ProductsComponent.prototype.addToCart = function (itemSku) {
        var _this = this;
        // create a new transaction with item user added to cart
        var transaction = {
            storeId: 1,
            paymentId: 123,
            userId: Number(localStorage.getItem('userId')),
            status: "open",
            inventory: [{
                    sku: itemSku
                }]
        };
        // call sales service to create the transaction if no open transaction already exists;
        // otherwise, the existing open transaction will be updated
        this.shopService.postObj("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].postTransactionURI, transaction)
            .subscribe(function (res) {
            _this.modalService.dismissAll();
            _this.loadCart(Number(localStorage.getItem('userId')));
        }, function (error) {
            console.log(error);
        });
    };
    ProductsComponent.prototype.removeItem = function (sku) {
        var _this = this;
        this.shopService.deleteObj("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].deleteTransactionURI + Number(localStorage.getItem('userId')) + "/sku/" + sku)
            .subscribe(function (res) {
            _this.loadCart(Number(localStorage.getItem('userId')));
        }, function (error) {
            console.log(error);
        });
    };
    ProductsComponent.prototype.addCouponCode = function (couponCode) {
        var _this = this;
        // create a new transaction with user's coupon code
        var transaction = {
            userId: Number(localStorage.getItem('userId')),
            coupons: [{
                    couponId: couponCode
                }]
        };
        // call sales service to create the transaction if no open transaction already exists;
        // otherwise, the existing open transaction will be updated
        this.shopService.postObj("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].postCouponURI, transaction)
            .subscribe(function (res) {
            _this.loadCoupon(Number(localStorage.getItem('userId')));
        }, function (error) {
            _this.couponCode = 0;
            _this.couponDiscount = 0;
            _this.loadCoupon(Number(localStorage.getItem('userId')));
        });
    };
    ProductsComponent.prototype.checkout = function (totalTax, totalBill) {
        var _this = this;
        console.log("Checkout method, Tax: " + totalTax.toFixed(2) + ", Total: " + totalBill.toFixed(2));
        var values = {
            userId: Number(localStorage.getItem('userId')),
            tax: totalTax,
            total: totalBill
        };
        this.shopService.updateObj("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].updateTransactionURI, values)
            .subscribe(function (res) {
            _this.modalService.dismissAll();
            _this.router.navigate(['gcfashions/shop/checkout']);
            //.navigate(['checkout']);
        }, function (error) {
            console.log(error);
        });
    };
    ProductsComponent.prototype.loadProductsBySubCategory = function (catId, subcatId, cat) {
        var _this = this;
        this.selectedCategory = cat.catName;
        this.selectedCategoryInfo = cat;
        this.shopService.getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getCategoryURI + catId + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getSubcategoryURI + subcatId)
            .subscribe(function (res) {
            _this.products = res;
            _this.totalProducts = _this.products.length;
            _this.setPage(1);
        }, function (error) {
            _this.products = [];
            _this.totalProducts = 0;
            _this.noProduct = 1;
            _this.setPage(1);
        });
    };
    ProductsComponent.prototype.searchProducts = function () {
        var _this = this;
        var searchString = this.searchProductForm.value.searchString;
        var dash = "/";
        if (searchString.length != 0) {
            this.shopService
                .getAll("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].shopUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].getProductsLikeURI + searchString)
                .subscribe(function (res) {
                _this.products = res;
                _this.totalProducts = _this.products.length;
                _this.searchString = "";
                _this.setPage(1);
            }, function (error) {
                _this.searchString = "";
                _this.products = [];
                _this.totalProducts = 0;
                _this.setPage(1);
                console.log("mistake");
            });
        }
        else {
            this.searchString = "";
            this.loadAllProducts();
        }
    };
    ProductsComponent.prototype.open = function (content, obj) {
        var _this = this;
        this.currentItem = obj;
        if (obj !== null) {
            this.productDetailsForm = this.fb.group({
                productName: obj.productName,
                description: obj.description,
                photo: obj.photo,
                price: obj.price,
                inventory: [obj.inventory],
                sizeChoice: [[obj.sizeChoice], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                productId: obj.productId,
            });
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
    ProductsComponent.prototype.showCart = function (content) {
        var _this = this;
        this.loadCoupon(Number(localStorage.getItem('userId')));
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
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _common_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
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

module.exports = "i {\r\n    font-size: 170px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImkge1xyXG4gICAgZm9udC1zaXplOiAxNzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- !PAGE CONTENT! -->\r\n<div class=\"w3-main\">\r\n\r\n\r\n  <!-- Push down content on small screens -->\r\n  <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n\r\n  <!-- Top header -->\r\n  <header class=\"w3-container w3-large\">\r\n    <p class=\"w3-left\">{{ selectedCategory | titlecase}}</p>\r\n  </header>\r\n\r\n  <!-- Image header -->\r\n  <div class=\"w3-display-container w3-container\">\r\n    <img src=\"assets/images/thumbnails/jeans.jpg\" alt=\"Jeans\" style=\"width:100%\">\r\n    <div class=\"w3-display-topleft w3-text-white\" style=\"padding:24px 48px\">\r\n      <h1 class=\"w3-jumbo w3-hide-small\">New arrivals</h1>\r\n      <h1 class=\"w3-hide-large w3-hide-medium\">New arrivals</h1>\r\n      <h1 class=\"w3-hide-small\">COLLECTION 2020</h1>\r\n      <p><a href=\"/gcfashions/shop/products\" class=\"w3-button w3-black w3-padding-large w3-large\">SHOP NOW</a></p>\r\n    </div>\r\n  </div><br>\r\n\r\n  <div class=\"row w3-container w3-text-grey\" id=\"jeans\">\r\n    <br>\r\n    <div class=\"col-lg-6\"> \r\n      <h1>Weclome to GC Fashion </h1>\r\n      <p>Our mission is to offer quality, name brands in an assortment of sizes and styles\r\n         to accommodate all varying body styles and shapes while not hurting our \r\n         environment.We use the greenest fabrics, which are made from renewable fibers that are easy to \r\n         grow or produce. They require limited water and energy to produce, and many are recyclable.</p>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6\"> \r\n      <i class=\"fa fa-globe\" aria-hidden=\"true\" style=\"padding-left: 10%;\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
            console.log("Error in load when loading products.");
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
    shopUrl: 'http://ec2-3-19-141-180.us-east-2.compute.amazonaws.com:8085/gcfashions/shop',
    accountUrl: 'http://ec2-3-19-141-180.us-east-2.compute.amazonaws.com:8085/gcfashions',
    salesUrl: 'http://ec2-3-19-141-180.us-east-2.compute.amazonaws.com:8085/gcfashions/sales',
    baseUrl: 'http://ec2-3-19-141-180.us-east-2.compute.amazonaws.com:8085/gcfashions',
    getProductsURI: '/products',
    getProductsLikeURI: '/products/like/',
    getOpenTransactionURI: '/transactions/open/userid/',
    getCompleteTransactionsLikeURI: '/transactions/complete/like/',
    getAllCompleteTransactionsURI: '/transactions/complete',
    getCartItemsURI: '/transactions/cart/userid/',
    getCategoriesURI: '/categories',
    getCategoryURI: '/categories/',
    getSubcategoryURI: '/subcategories/',
    getTransactionURI: '/transactions/',
    getInventoryURI: '/inventory/',
    getCouponURI: '/transactions/open/coupon/userid/',
    postTransactionURI: '/transactions',
    postCouponURI: '/transactions/open/coupon',
    postCheckoutURI: '/checkout',
    updateTransactionURI: '/checkout',
    instoreRefundURI: '/transactions/refund',
    deleteTransactionURI: '/transactions/open/userid/',
    getUserURI: '/account/users/',
    stripePublishKey: 'pk_test_51GxNidEC7SOZT967Mac1f9zlZaY3Habn9hqA07G1Zds5o5m7JL7VrQW6WYRvld7fveYnS3g98oz8gQOZA2hey6W7006MQxUvcV',
    getUserTransactionsURI: '/transactions',
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