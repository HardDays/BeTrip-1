webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-text-style{\r\n    font-size: 20px;\r\n    color: #000;\r\n    text-align: center;\r\n    padding: 10px 0 25px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-preloader *ngIf=\"Load\"></app-preloader>\r\n\r\n<div *ngIf=\"clientStatus=='web'&&canShow\">\r\n<section class=\"content all-pages\">\r\n  <div class=\"head\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row for-b\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"flex-nav-wr\">\r\n                    \r\n                    <div class=\"for-center\" (click)=\"Navigate()\">\r\n                        <img class=\"img-responsive width-logo\" src=\"../assets/img/Logo_icon.png\" alt=\"\">\r\n                         <div class=\"logo-title\">\r\n                            <p>BeTrip Alpha</p>\r\n                        </div>\r\n                    </div>\r\n                   \r\n                    <div class=\"right-side\">\r\n                        <ul>\r\n                            <li>\r\n                                <a routerLinkActive=\"active\" routerLink=\"/build\">Build</a>\r\n                            </li>\r\n                            <li>\r\n                                <a routerLinkActive=\"active\" routerLink=\"/best\">Routes</a>\r\n                            </li>\r\n                            <li>\r\n                                <a routerLinkActive=\"active\" routerLink=\"/places\">Places</a>\r\n                            </li>\r\n                            <li>\r\n                                <!--<a routerLinkActive=\"active\" routerLink=\"/trips\">trips</a>-->\r\n                            </li>\r\n                            <li class=\"for-drop-down-first-drop\">\r\n                                <a routerLinkActive=\"active\"  routerLink=\"/functionality\">About</a>\r\n                                <ul class=\"sub-menu\">\r\n                                    <li class=\"menu-item\">\r\n                                        <a routerLink=\"/functionality\" class=\"op-modal-sign-in\">Functionality</a>\r\n                                        <a routerLink=\"/download\" class=\"op-modal-sign-up\">Download</a>\r\n                                        <a routerLink=\"/faq\">FAQ</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </li>\r\n                            <li class=\"for-drop-down\">\r\n                                <img src=\"../assets/img/man.svg\" class=\"img-responsive\" alt=\"\">\r\n                                <ul class=\"sub-menu\">\r\n                                    <li class=\"menu-item\">\r\n                                        <a class=\"op-modal-sign-in\" *ngIf=\"!isLogined\" (click)=\"OpenModalSignIn()\">Sign In</a>\r\n                                        <a class=\"op-modal-sign-up\" *ngIf=\"!isLogined\" (click)=\"OpenModalSignUp()\">Sign Up</a>\r\n                                        <a *ngIf=\"isLogined\" (click)=\"Logout()\" >Sign Out</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n</section>\r\n\r\n<div class=\"modal login-modal\" id=\"login-modal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-contant\">\r\n          <div class=\"modal-body\">\r\n              <form #myForm=\"ngForm\" (submit)=\"myForm.reset()\" (ngSubmit)=\"Login()\" class=\"sign\">\r\n                  <img src=\"../assets/img/Logo_icon.png\" class=\"img-responsive\" alt=\"\">\r\n                  <h2>Sign In</h2>\r\n                  <div *ngIf=\"isLoginErr\" class=\"col-md-12\">\r\n                    <h2 class=\"error-text-style\" translate>Invalid email or password</h2>\r\n                    </div>\r\n                  <p class=\"name-inp\" >Email</p>\r\n                  <input type=\"text\" [(ngModel)]=\"LoginParams.email\" name=\"email\" (ngModelChange)=\"LoginParams.email = $event\">\r\n                  <p class=\"name-inp\" >Password</p>\r\n                  <input [(ngModel)]=\"LoginParams.password\" name=\"loginPassword\" (ngModelChange)=\"LoginParams.password = $event\"type=\"password\">\r\n                  <button class=\"butt-orange\" type=\"submit\" type=\"submit\">Login</button>\r\n                 <!-- <p class=\"name-inp sign-up-with\">Sign up with</p>\r\n                   <div class=\"sign-up-w-wrapp\">\r\n                      <img  src=\"../assets/img/fb.png\" (click)=\"signIn('facebook')\" class=\"img-responsive\" alt=\"\">\r\n                      <img src=\"../assets/img/google.png\" (click)=\"signIn('google')\" class=\"img-responsive\" alt=\"\">\r\n                      <img src=\"../assets/img/tw.png\" (click)=\"signIn('twitter')\" class=\"img-responsive\" alt=\"\">\r\n                  </div> -->\r\n              </form>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal login-modal\" id=\"regist-modal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-contant\">\r\n          <div class=\"modal-body\">\r\n              <form (ngSubmit)=\"Registration()\" class=\"sign\">\r\n                  <img src=\"../assets/img/Logo_icon.png\" class=\"img-responsive\" alt=\"\">\r\n                  <h2>Sign Up</h2>\r\n                  <p class=\"name-inp\" >Email</p>\r\n                  <input [ngModel]=\"RegisterParams.email\" name=\"registerEmail\" type=\"text\" (ngModelChange)=\"RegisterParams.email = $event\">\r\n                  <p class=\"name-inp\" >Password</p>\r\n                  <input type=\"password\" [(ngModel)]=\"RegisterParams.password\" name=\"registerPassword\" (ngModelChange)=\"RegisterParams.password = $event\">\r\n                  <button class=\"butt-orange\" type=\"submit\">Register</button>\r\n              </form>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"clientStatus!='web'&&canShow\">\r\n   <div id=\"wrapperMob\" style=\"height:1000px;\">\r\n\t\t<div class=\"containerMob\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t<h1 class=\"text\">BeTrip</h1>\r\n                    <h5 class=\"subtitleMob text\" style=\"font-weight: 300;\">New mobile version is coming</h5>\r\n                    <br>\r\n                    <img style=\"width:120px;\" src=\"../assets/img/Logo_icon.png\" alt=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-6 col-lg-offset-3\">\r\n\t\t\t\t\t\t<p class=\"copyrightMob\">&copy; BeTrip</p>\r\n                        <div class=\"creditsMob\">\r\n\r\n                            <a href=\"#\">Coming soon</a>\r\n                        </div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\t\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_main_service__ = __webpack_require__("../../../../../src/app/core/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(service, router, _auth) {
        var _this = this;
        this.service = service;
        this.router = router;
        this._auth = _auth;
        this.page = 'none';
        this.clientStatus = 'none';
        this.isShow = false;
        this.canShow = false;
        this.isBuildPage = true;
        this.isLoginErr = false;
        this.isLogined = false;
        this.Load = true;
        this.LoginParams = {
            email: '',
            password: ''
        };
        this.RegisterParams = {
            email: '',
            password: ''
        };
        this.service.getClient().
            subscribe(function (status) {
            _this.clientStatus = status.result;
            _this.canShow = true;
            _this.Load = false;
            console.log("client status: ", _this.clientStatus);
            // this.clientStatus="web2";
            if (_this.clientStatus == "web") {
                _this.isShow = true;
                _this.page = location.pathname;
                if (_this.page != '/build')
                    _this.isBuildPage = false;
                else
                    _this.isBuildPage = true;
                _this.service.onPageChange$.subscribe(function () {
                    _this.page = location.pathname;
                    if (_this.page != '/build')
                        _this.isBuildPage = false;
                    else
                        _this.isBuildPage = true;
                });
                if (localStorage.getItem('token')) {
                    _this.isLogined = true;
                    _this.service.BaseInit();
                }
                _this.service.onLoginChange$.subscribe(function () {
                    _this.isLogined = !_this.isLogined;
                });
            }
        });
    }
    AppComponent.prototype.OpenModalSignIn = function () {
        $("#login-modal").modal('show');
    };
    AppComponent.prototype.OpenModalSignUp = function () {
        $("#regist-modal").modal('show');
    };
    AppComponent.prototype.Login = function () {
        var _this = this;
        this.isLoginErr = false;
        this.service.login(this.LoginParams.email, this.LoginParams.password)
            .subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this.service.onLoginChange$.next(true);
            _this.isLogined = true;
            $("#login-modal").modal('hide');
        }, function (err) {
            console.log(err);
            _this.isLoginErr = true;
        });
    };
    AppComponent.prototype.Registration = function () {
        var _this = this;
        this.isLoginErr = false;
        console.log(this.RegisterParams.email, this.RegisterParams.password);
        this.service.register(this.RegisterParams.email, this.RegisterParams.password)
            .subscribe(function (res) {
            localStorage.setItem('token', res.token);
            $("#regist-modal").modal('hide');
        }, function (err) {
            console.log(err);
            _this.isLoginErr = true;
        });
    };
    AppComponent.prototype.Logout = function () {
        this.isLoginErr = false;
        console.log(this.RegisterParams.email, this.RegisterParams.password);
        this.service.logout();
        console.log("logout");
        localStorage.removeItem('token');
        this.service.onLoginChange$.next(false);
        this.isLogined = false;
    };
    AppComponent.prototype.signIn = function (provider) {
        var _this = this;
        console.log("1", provider);
        this.sub = this._auth.login(provider).subscribe(function (data) {
            console.log(data);
            console.log(data);
            _this.user = data;
            if (provider == 'google')
                _this.service.googleLogin(_this.user.token);
            localStorage.setItem('token', _this.user.token);
            _this.service.onLoginChange$.next(true);
            _this.isLogined = true;
            $("#login-modal").modal('hide');
        });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this._auth.logout().subscribe(function (data) { console.log(data); _this.user = null; });
    };
    AppComponent.prototype.Navigate = function () {
        this.router.navigate(['/build']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_social_login__["b" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__route_route_component__ = __webpack_require__("../../../../../src/app/route/route.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__build_build_component__ = __webpack_require__("../../../../../src/app/build/build.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__best_best_component__ = __webpack_require__("../../../../../src/app/best/best.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__download_download_component__ = __webpack_require__("../../../../../src/app/download/download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__functionality_functionality_component__ = __webpack_require__("../../../../../src/app/functionality/functionality.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__trips_trips_component__ = __webpack_require__("../../../../../src/app/trips/trips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__view_after_build_view_after_build_component__ = __webpack_require__("../../../../../src/app/view-after-build/view-after-build.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_services_main_service__ = __webpack_require__("../../../../../src/app/core/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_services_http_service__ = __webpack_require__("../../../../../src/app/core/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__preloader_preloader_component__ = __webpack_require__("../../../../../src/app/preloader/preloader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__places_places_component__ = __webpack_require__("../../../../../src/app/places/places.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ngu_carousel__ = __webpack_require__("../../../../@ngu/carousel/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var providers = {
    "google": {
        "clientId": "285182475617-gom13u0bp7ik48v4lc9ngg5s3rijbjav.apps.googleusercontent.com"
    },
    "facebook": {
        "clientId": "1604317082925030",
        "apiVersion": "v2.11" //like v2.4 
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__build_build_component__["a" /* BuildComponent */],
                __WEBPACK_IMPORTED_MODULE_9__best_best_component__["a" /* BestComponent */],
                __WEBPACK_IMPORTED_MODULE_10__download_download_component__["a" /* DownloadComponent */],
                __WEBPACK_IMPORTED_MODULE_11__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_12__functionality_functionality_component__["a" /* FunctionalityComponent */],
                __WEBPACK_IMPORTED_MODULE_13__trips_trips_component__["a" /* TripsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__view_after_build_view_after_build_component__["a" /* ViewAfterBuildComponent */],
                __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__route_route_component__["a" /* RouteComponent */],
                __WEBPACK_IMPORTED_MODULE_20__preloader_preloader_component__["a" /* PreloaderComponent */],
                __WEBPACK_IMPORTED_MODULE_21__places_places_component__["a" /* PlacesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_15__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBaq3qTokKJ_b2VP0h5h_eeYliQ80ME74M',
                    libraries: ["places"],
                    language: 'en'
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_19_angular2_social_login__["a" /* Angular2SocialLoginModule */],
                __WEBPACK_IMPORTED_MODULE_22__ngu_carousel__["a" /* NguCarouselModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__core_services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_17__core_services_http_service__["a" /* HttpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

__WEBPACK_IMPORTED_MODULE_19_angular2_social_login__["a" /* Angular2SocialLoginModule */].loadProvidersScripts(providers);


/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__build_build_component__ = __webpack_require__("../../../../../src/app/build/build.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__best_best_component__ = __webpack_require__("../../../../../src/app/best/best.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__download_download_component__ = __webpack_require__("../../../../../src/app/download/download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__functionality_functionality_component__ = __webpack_require__("../../../../../src/app/functionality/functionality.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__trips_trips_component__ = __webpack_require__("../../../../../src/app/trips/trips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__route_route_component__ = __webpack_require__("../../../../../src/app/route/route.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__places_places_component__ = __webpack_require__("../../../../../src/app/places/places.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__view_after_build_view_after_build_component__ = __webpack_require__("../../../../../src/app/view-after-build/view-after-build.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: 'build', pathMatch: 'full' },
    { path: 'build', component: __WEBPACK_IMPORTED_MODULE_4__build_build_component__["a" /* BuildComponent */] },
    { path: 'best', component: __WEBPACK_IMPORTED_MODULE_5__best_best_component__["a" /* BestComponent */] },
    { path: 'download', component: __WEBPACK_IMPORTED_MODULE_6__download_download_component__["a" /* DownloadComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_7__faq_faq_component__["a" /* FaqComponent */] },
    { path: 'functionality', component: __WEBPACK_IMPORTED_MODULE_8__functionality_functionality_component__["a" /* FunctionalityComponent */] },
    { path: 'trips', component: __WEBPACK_IMPORTED_MODULE_9__trips_trips_component__["a" /* TripsComponent */] },
    { path: 'routes', component: __WEBPACK_IMPORTED_MODULE_12__view_after_build_view_after_build_component__["a" /* ViewAfterBuildComponent */] },
    { path: 'route/:id', component: __WEBPACK_IMPORTED_MODULE_10__route_route_component__["a" /* RouteComponent */] },
    { path: 'places', component: __WEBPACK_IMPORTED_MODULE_11__places_places_component__["a" /* PlacesComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/best/best.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/best/best.component.html":
/***/ (function(module, exports) {

module.exports = "<app-preloader *ngIf=\"isLoading\"></app-preloader>\r\n\r\n<div class=\"best-wr\">\r\n  <div class=\"left-side\">\r\n      <div class=\"all-best-blocks\">\r\n          <ng-container *ngFor=\"let item of routes; let i = index\">\r\n          <div class=\"one-block\">\r\n              <div class=\"new-wrapp-for-shadow\">\r\n                  <div class=\"for-before-wr\">\r\n                      <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\" [ngStyle]=\"{'background-image':'url(' + item.image + ')' }\"></div>\r\n                  </div>\r\n                  <div class=\"ava\" style=\"background-image: url(../assets/img/ava.jpg)\"></div>\r\n                  <div class=\"padd-descript\">\r\n                      <p class=\"name\" (click)=\"onRoute(i)\">{{item.name}}</p>\r\n                      <p class=\"desc\"><strong>Distance</strong>{{(item.distance - item.distance % 1000) / 1000}} km</p>\r\n                      <p class=\"desc\"><strong>Time</strong>{{(item.duration - (item.duration % 3600))/3600}}h {{ (item.duration - item.duration % 60)/60 - ((item.duration - (item.duration % 3600))/3600)*60 }}min</p>\r\n                      <div class=\"button-wr\">\r\n                          <div class=\"one\" (click)=\"onRouteLike(item)\">\r\n                              <div class=\"bg\" [ngClass]=\"{'active': item.is_liked}\">\r\n                                  <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                                  <span>{{item.likes_count}}</span>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"one\" (click)=\"onRouteRepost(item.id)\">\r\n                              <div class=\"bg\">\r\n                                  <img src=\"../assets/img/share.png\" class=\"img-responsive\" alt=\"\">\r\n                                  <span>{{item.reposts_count}}</span>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"one\">\r\n                              <div class=\"bg\">\r\n                                  <img src=\"../assets/img/save.png\" class=\"img-responsive\" alt=\"\">\r\n                                  <span>{{0}}</span>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </ng-container>      \r\n      </div>\r\n  </div>\r\n  <div class=\"fixed-map\">\r\n     \r\n      \r\n      <!--Сюда карту-->\r\n      \r\n    <div class=\"for-position-map\">\r\n        <agm-map #gm [mapDraggable]=\"true\" [zoomControl]=\"true\" [latitude]=\"lat\" [longitude]=\"lng\" [fitBounds]=\"zoomBounds\" style=\"height: 100%;\" (mapClick)=\"mapClick()\" [styles]=\"mapStyle\">\r\n            \r\n            <!--<agm-marker [iconUrl]=\"'../assets/img/marker-yellow2.png'\" [latitude]=\"StepsCoord[0]?StepsCoord[0].lat:''\" [longitude]=\"StepsCoord[0]?StepsCoord[0].lng:''\"></agm-marker>-->\r\n            <agm-marker [iconUrl]=\"'../assets/img/marker-yellow2.png'\" *ngFor=\"let place of selectedRoute.places; let i = index\" [latitude]=\"place?place.lat:0\" [longitude]=\"place?place.lng:0\" (markerClick)=\"markerClick(i)\">\r\n                <agm-info-window [isOpen]=\"placeWindows[i]\">\r\n                <div class=\"cart-sight-wrapp\">\r\n                    <div class=\"img\" [ngStyle]=\"{'background-image':'url(' + place.image + ')'}\"></div>\r\n                    <div class=\"ava\" style=\"background-image: url(../assets/img/ava.jpg)\"></div>\r\n                    <p class=\"name-sight\">{{place.name}}</p>\r\n                </div>\r\n                </agm-info-window>\r\n            </agm-marker>\r\n            \r\n            <!--<agm-marker [iconUrl]=\"'../assets/img/marker-yellow2.png'\" [latitude]=\"StepsCoord[0]?StepsCoord[StepsCoord.length-1].lat:''\" [longitude]=\"StepsCoord[0]?StepsCoord[StepsCoord.length-1].lng:''\"></agm-marker>-->\r\n            \r\n            <agm-polyline [strokeColor]=\"'#FFC636'\" [strokeOpacity]=\"'0.8'\">\r\n                <ng-container>\r\n                    <agm-polyline-point *ngFor=\"let point of polyline; let i = index\" [latitude]=\"point.lat?point.lat:0\" [longitude]=\"point.lng?point.lng:0\"></agm-polyline-point>\r\n                </ng-container>\r\n            </agm-polyline>\r\n        </agm-map>\r\n    </div>\r\n    <div class=\"fixed-sights\" [ngClass]=\"{'visible': !isSliderOpen && isModalVisible}\">\r\n       <!--   <div class=\"flex-sights\">\r\n                <div *ngFor=\"let item of selectedRoute.places; let i = index\" class=\"one-sight\" (click)=\"onRoutePlace(i)\">\r\n                    <div class=\"for-before-wr\">\r\n                        <div class=\"img\" [ngStyle]=\"{'background-image':'url(' + item.image + ')'}\"></div>\r\n                    </div>\r\n                    <p><span>{{i + 1}}</span><strong>{{item.name}}</strong></p>\r\n                </div>\r\n          </div>-->\r\n            <ngu-carousel\r\n                [inputs]=\"carouselOne\"\r\n                class=\"pl-carousel\">\r\n                <ngu-item NguCarouselItem *ngFor=\"let item of selectedRoute.places; let i = index\" (click)=\"onRoutePlace(i)\"  >\r\n                    <div class=\"car-item\">\r\n                        <div class=\"bannerStyle\"  [ngStyle]=\"{'background-image':'url(' + item.image + ')'}\">\r\n                            <div style=\"height:100px;\">\r\n                            </div>                        \r\n                        </div>\r\n                        <p><span>{{i + 1}}</span><strong>{{item.name}}</strong></p>\r\n                    </div>\r\n                </ngu-item> \r\n                <button NguCarouselPrev class='left-arrow-car'>&lt;</button>\r\n                <button NguCarouselNext class='right-arrow-car'>&gt;</button>\r\n            </ngu-carousel>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal sights-slider\" id=\"sights-slider\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-contant\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"slider-init\">\r\n                    <div class=\"slide\" *ngFor=\"let item of selectedRoute.places; let i = index\">\r\n                        <div class=\"after-slide\">\r\n                            <div class=\"for-before-wr\">\r\n                                <div class=\"img\" [ngStyle]=\"{'background-image':'url(' + item.image + ')' }\"></div>\r\n                            </div>\r\n                            <div class=\"content-sights\">\r\n                                <p class=\"name\">{{item.name}}</p>\r\n                                <p>{{item.description}}</p>\r\n                                <p>{{item.address}}</p>\r\n\r\n                                <div class=\"for-flex-buttons\">\r\n                                    <div class=\"find-more\">\r\n                                        <p>Find more...</p>\r\n                                    </div>\r\n                                    <div class=\"one\" (click)=\"onPlaceLike(item)\">\r\n                                        <div class=\"bg\" [ngClass]=\"{'active': item.is_liked}\">\r\n                                            <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/best/best.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_main_service__ = __webpack_require__("../../../../../src/app/core/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_coords_model__ = __webpack_require__("../../../../../src/app/core/models/coords.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_models_route_model__ = __webpack_require__("../../../../../src/app/core/models/route.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_geodesy__ = __webpack_require__("../../../../geodesy/npm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_geodesy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_geodesy__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BestComponent = (function () {
    function BestComponent(service, mapsAPILoader) {
        this.service = service;
        this.mapsAPILoader = mapsAPILoader;
        this.isSliderOpen = true;
        this.isModalVisible = false;
        this.isLoading = true;
        this.routes = [];
        this.polyline = [];
        this.selectedRoute = new __WEBPACK_IMPORTED_MODULE_4__core_models_route_model__["a" /* RouteModel */]();
        this.placeWindows = [];
        this.params = {
            limit: 10,
            offset: 0
        };
        this.mapStyle = this.getMapStyle();
    }
    BestComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(".content").addClass("all-pages");
        this.service.onPageChange$.next(false);
        this.carouselOne = {
            grid: { xs: 2, sm: 3, md: 3, lg: 3, all: 0 },
            slide: 1,
            speed: 400,
            point: {
                visible: false,
                pointStyles: "\n          .ngucarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            position: absolute;\n            width: 100%;\n            bottom: 0px;\n            left: 0;\n            box-sizing: border-box;\n          }\n          .ngucarouselPoint li {\n            display: inline-block;\n            border-radius: 999px;\n            background: rgba(255, 255, 255, 0.55);\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s ease all;\n          }\n          .ngucarouselPoint li.active {\n              background: white;\n              width: 10px;\n          }\n        "
            },
            load: 2,
            loop: true,
            touch: true
        };
        $('#sights-slider').on('hidden.bs.modal', function () {
            $('.slider-init').slick('unslick');
        });
        this.mapsAPILoader.load().then(function () {
            _this.zoomBounds = new google.maps.LatLngBounds();
            _this.zoomBounds.extend(new google.maps.LatLng(61.29752, -9.27467));
            _this.zoomBounds.extend(new google.maps.LatLng(44.254402, 43.77806));
        });
        this.service.getBestRoutes(this.params).subscribe(function (res) {
            _this.routes = res;
            for (var i in res) {
                var route = _this.routes[i];
                route.image = _this.service.getImageUrl(route.cover_id);
                console.log(route.is_liked);
                for (var k in route.places) {
                    route.places[k].image = _this.service.getImageUrl(route.places[k].cover_id);
                }
            }
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
        });
        if ($(window).scrollTop() > 70) {
            $(".fixed-sights").addClass("transformed");
        }
        else {
            $(".fixed-sights").removeClass("transformed");
        }
        $(window).scroll(function () {
            if ($(window).scrollTop() > 70) {
                $(".fixed-sights").addClass("transformed");
            }
            else {
                $(".fixed-sights").removeClass("transformed");
            }
        });
        this.clearInfoWin();
    };
    BestComponent.prototype.clearInfoWin = function () {
        for (var i in this.placeWindows) {
            this.placeWindows[i] = false;
        }
    };
    BestComponent.prototype.mapClick = function () {
        this.clearInfoWin();
    };
    BestComponent.prototype.markerClick = function (i) {
        this.clearInfoWin();
        this.placeWindows[i] = !this.placeWindows[i];
        this.lat = this.selectedRoute.places[i].lat + 0.025;
        this.lng = this.selectedRoute.places[i].lng;
    };
    BestComponent.prototype.getCurvedLine = function (place, nextPlace, isRight) {
        var res = [];
        var p1 = new __WEBPACK_IMPORTED_MODULE_5_geodesy__["LatLonSpherical"](place.lat, place.lng);
        var p3 = new __WEBPACK_IMPORTED_MODULE_5_geodesy__["LatLonSpherical"](nextPlace.lat, nextPlace.lng);
        var middle = p1.midpointTo(p1, p3);
        var dist = p1.distanceTo(p3);
        var head = middle.bearingTo(p3);
        var p2 = p1.rhumbDestinationPoint(dist * 0.75, head + 30 * Math.pow(-1, isRight)); // new LatLonSpherical(middle.lat, middle.lon); //SphericalUtil.ComputeOffset(middle, dist * 0.2, head + 90 * Math.Pow(-1, isRight));
        for (var i = 0; i < 150; i++) {
            var T = i / 150.0;
            var x = Math.pow(1 - T, 2) * p1.lat + 2 * (1 - T) * T * p2.lat + Math.pow(T, 2) * p3.lat;
            var y = Math.pow(1 - T, 2) * p1.lon + 2 * (1 - T) * T * p2.lon + Math.pow(T, 2) * p3.lon;
            res.push(new __WEBPACK_IMPORTED_MODULE_3__core_models_coords_model__["a" /* CoordsModel */](x, y));
        }
        return res;
    };
    BestComponent.prototype.getRouteMiddle = function (route) {
        var minLat = 1000000.0;
        var minLng = 1000000.0;
        var maxLat = -1000000.0;
        var maxLng = -1000000.0;
        this.zoomBounds = new google.maps.LatLngBounds();
        for (var _i = 0, _a = route.places; _i < _a.length; _i++) {
            var place = _a[_i];
            this.zoomBounds.extend(new google.maps.LatLng(place.lat, place.lng));
            minLat = Math.min(minLat, place.lat);
            minLng = Math.min(minLng, place.lng);
            maxLat = Math.max(maxLat, place.lat);
            maxLng = Math.max(maxLng, place.lng);
        }
        //margin from top for carousel
        var dist = new __WEBPACK_IMPORTED_MODULE_5_geodesy__["LatLonSpherical"](maxLat, minLng).distanceTo(new __WEBPACK_IMPORTED_MODULE_5_geodesy__["LatLonSpherical"](minLat, maxLng));
        var to = new __WEBPACK_IMPORTED_MODULE_5_geodesy__["LatLonSpherical"](maxLat, minLng).rhumbDestinationPoint(dist * 0.5, 0);
        this.zoomBounds.extend(new google.maps.LatLng(to.lat, to.lon));
    };
    BestComponent.prototype.onRoute = function (index) {
        this.isModalVisible = true;
        this.selectedRoute = this.routes[index];
        /*if (!this.isSliderOpen) {
          $('.flex-sights').slick('unslick');
        }*/
        this.clearInfoWin();
        this.getRouteMiddle(this.selectedRoute);
        this.isSliderOpen = false;
        this.polyline = [];
        for (var i = 0; i < this.selectedRoute.places.length - 1; i++) {
            var res = this.getCurvedLine(this.selectedRoute.places[i], this.selectedRoute.places[i + 1], i % 2);
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var point = res_1[_i];
                this.polyline.push(point);
            }
        }
        /*setTimeout(() => {
          this.isModalVisible = true;
    
          $('.flex-sights').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false,
            responsive: [
              {
                breakpoint: 1601,
                settings: {
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 1301,
                settings: {
                  slidesToShow: 3
                }
              }
            ]
          });
        }, 200);*/
    };
    BestComponent.prototype.onRoutePlace = function (index) {
        $("#sights-slider").modal("show");
        console.log(index);
        $('.slider-init').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false
        });
        $('.slider-init').slick('slickGoTo', index, true);
    };
    BestComponent.prototype.getMapStyle = function () {
        return this.service.mapStyle();
    };
    BestComponent.prototype.onPlaceLike = function (place) {
        this.service.likePlace(place.id)
            .subscribe(function () {
            if (place.is_liked) {
                place.likes_count -= 1;
            }
            else {
                place.likes_count += 1;
            }
            place.is_liked = !place.is_liked;
        });
    };
    BestComponent.prototype.onRouteLike = function (route) {
        this.service.likeRoute(route.id)
            .subscribe(function () {
            if (route.is_liked) {
                route.likes_count -= 1;
            }
            else {
                route.likes_count += 1;
            }
            route.is_liked = !route.is_liked;
        });
    };
    BestComponent.prototype.onRouteRepost = function (id) {
        this.service.repostRoute(id)
            .subscribe(function () {
            console.log("OK REPOST");
        });
    };
    BestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-best',
            template: __webpack_require__("../../../../../src/app/best/best.component.html"),
            styles: [__webpack_require__("../../../../../src/app/best/best.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]])
    ], BestComponent);
    return BestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/build/build.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/build/build.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"build-content\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <h2>Make you trip unforgettable</h2>\r\n              <h1>Build route through most interesting places</h1>\r\n              <form class=\"from-to\" (ngSubmit)=\"buildMap()\">\r\n                  <div class=\"flex-iputs\">\r\n                      <div class=\"side\" [style.width]=\"(routeType === 'bidirectional') ? '50%' : '100%'\">\r\n                          <p>{{(routeType === 'bidirectional') ? 'From' : 'Where?'}}</p>\r\n                          <input type=\"text\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" placeholder=\"\" #searchFrom>\r\n                      </div>\r\n                      <div *ngIf=\"routeType === 'bidirectional'\" class=\"side\">\r\n                          <p>To</p>\r\n                          <input type=\"text\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" placeholder=\"\" #searchTo>\r\n                      </div>\r\n                      <div class=\"for-padd\">\r\n                          <button class=\"butt-orange\" [disabled]=\"(latFrom==0 && lngFrom==0) || (latTo==0 && lngTo==0 && routeType=='bidirectional')\" type=\"submit\">{{((latFrom==0 && lngFrom==0) || (latTo==0 && lngTo==0 && routeType=='bidirectional'))?'Enter address!':'Build'}}</button>\r\n                      </div>    \r\n                      <br>\r\n                  </div>\r\n                  <div class=\"change-route-type\" >\r\n                    <img [src]=\"'../assets/img/icon-change.png'\">\r\n                    <button type=\"button\" class=\"btn btn-link btn-change\" style=\"color: #fff;font-size: 16px;\" (click)=\"changeRouteType()\">{{(routeType === 'bidirectional') ? 'Switch to city routes' : 'Switch to routes between cities' }}</button>\r\n                  </div>\r\n                  <!--<div class=\"settings\">\r\n                      <img src=\"img/settings.svg\" class=\"img-responsive\" alt=\"\">\r\n                      <p class=\"set-text\">Дополнительные настройки</p>\r\n                  </div>-->\r\n              </form>\r\n          </div>\r\n      </div>\r\n  </div>  \r\n</div>\r\n<div class=\"check-boxes-wr\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <div class=\"for-relative\">\r\n                  <span class=\"arr\">\r\n                      You can also choose filters\r\n                      <img src=\"../assets/img/arr.png\" class=\"img-responsive\" alt=\"Icon\" width=\"87\" height=\"100\">\r\n                  </span>\r\n              </div>\r\n              <ul class=\"for-flex-check\">\r\n                  <li *ngFor=\"let cb of categories; let i = index\" (click)=\"changeCategory(i)\" [class.active] =\"cb.checked\">\r\n                      <div class=\"image\">\r\n                          <img [src]=\"'../assets/img/icons/'+ cb.image\" class=\"img-responsive max-width-icon-new\" alt=\"\">\r\n                      </div>\r\n                      <span>{{cb.name}}</span>\r\n                  </li>\r\n              </ul>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/build/build.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_main_service__ = __webpack_require__("../../../../../src/app/core/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuildComponent = (function () {
    function BuildComponent(service, mapsAPILoader, ngZone, router, params) {
        this.service = service;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.params = params;
        this.categories = [];
        this.latFrom = 0.0;
        this.lngFrom = 0.0;
        this.latTo = 0.0;
        this.lngTo = 0.0;
        this.routeType = "internal";
        this.service.onPageChange$.next(false);
    }
    BuildComponent.prototype.ngOnInit = function () {
        $(".content").removeClass("all-pages");
        this.createAutocompleteFrom();
        this.categories = this.service.allCategories();
    };
    BuildComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ref.changes.subscribe(function (result) {
            _this.searchElementTo = result.first;
            if (_this.routeType === 'bidirectional') {
                _this.createAutocompleteTo();
            }
        });
    };
    BuildComponent.prototype.createAutocompleteFrom = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementFrom.nativeElement, { types: ["(cities)"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    else {
                        _this.latFrom = autocomplete.getPlace().geometry.location.toJSON().lat;
                        _this.lngFrom = autocomplete.getPlace().geometry.location.toJSON().lng;
                    }
                });
            });
        });
    };
    BuildComponent.prototype.createAutocompleteTo = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementTo.nativeElement, { types: ["(cities)"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    else {
                        _this.latTo = autocomplete.getPlace().geometry.location.toJSON().lat;
                        _this.lngTo = autocomplete.getPlace().geometry.location.toJSON().lng;
                    }
                });
            });
        });
    };
    BuildComponent.prototype.changeRouteType = function () {
        if (this.routeType === 'internal') {
            this.routeType = 'bidirectional';
            this.latTo = 0.0;
            this.lngTo = 0.0;
            //  this.CreateAutocompleteTo();
        }
        else {
            this.routeType = 'internal';
        }
    };
    BuildComponent.prototype.changeCategory = function (i) {
        this.categories[i].checked = !this.categories[i].checked;
    };
    BuildComponent.prototype.buildMap = function () {
        var params = {
            from_lat: this.latFrom,
            from_lng: this.lngFrom,
            to_lat: this.latTo,
            to_lng: this.lngTo,
            route_type: this.routeType,
            categories: this.categories.filter(function (cat) { return cat.checked; }).map(function (cat) { return cat.value; })
        };
        this.router.navigate(['/routes', params]);
        //console.log(`build map`, this.placeFrom, this.placeTo, this.Category);
        /*this.service.RoutesCreate(this.latFrom, this.lngFrom, this.latTo, this.lngTo).subscribe(
          (res)=>{
            console.log('ok',res);
          }
        );*/
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('searchFrom'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], BuildComponent.prototype, "searchElementFrom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('searchTo'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], BuildComponent.prototype, "searchElementTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChildren */])('searchTo'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* QueryList */])
    ], BuildComponent.prototype, "ref", void 0);
    BuildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-build',
            template: __webpack_require__("../../../../../src/app/build/build.component.html"),
            styles: [__webpack_require__("../../../../../src/app/build/build.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BuildComponent);
    return BuildComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/checkbox.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxModel; });
var CheckboxModel = (function () {
    function CheckboxModel(name, value, image, checked) {
        this.name = name;
        this.value = value;
        this.image = image;
        this.checked = checked;
        if (!value)
            this.value = name;
        if (!checked)
            this.checked = false;
    }
    return CheckboxModel;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/coords.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoordsModel; });
var CoordsModel = (function () {
    function CoordsModel(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    return CoordsModel;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/route.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteModel; });
var RouteModel = (function () {
    function RouteModel() {
    }
    return RouteModel;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/token.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenModel; });
var TokenModel = (function () {
    function TokenModel(token) {
        this.token = token;
    }
    return TokenModel;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_token_model__ = __webpack_require__("../../../../../src/app/core/models/token.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.GoogleMapUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
        this.locUrl = "https://ipinfo.io";
        this.serverUrl = "http://104.40.181.0:3000"; //"http://localhost:3000"; // "http://213.196.32.20:3000";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]([]);
        this.token = new __WEBPACK_IMPORTED_MODULE_6__models_token_model__["a" /* TokenModel */]('');
        if (!this.headers.has('Content-Type'))
            this.headers.append('Content-Type', 'application/json');
    }
    HttpService.prototype.BaseInitByToken = function (data) {
        if (data) {
            if (this.headers.has('Authorization'))
                this.headers.delete('Authorization');
            this.headers.append('Authorization', data);
            this.token = new __WEBPACK_IMPORTED_MODULE_6__models_token_model__["a" /* TokenModel */](data);
        }
    };
    HttpService.prototype.GetToken = function () {
        return this.token;
    };
    HttpService.prototype.PostData = function (method, data) {
        if (!this.headers.has('Content-Type'))
            this.headers.append('Content-Type', 'application/json');
        return this.http.post(this.serverUrl + method, data, { headers: this.headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error); });
    };
    HttpService.prototype.GetData = function (method, params) {
        if (!this.headers.has('Content-Type'))
            this.headers.append('Content-Type', 'application/json');
        return this.http.get(this.serverUrl + method + "?" + params, { headers: this.headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error); });
    };
    HttpService.prototype.PutData = function (method, data) {
        if (!this.headers.has('Content-Type'))
            this.headers.append('Content-Type', 'application/json');
        return this.http.put(this.serverUrl + method, data, { headers: this.headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error); });
    };
    HttpService.prototype.DeleteData = function (method) {
        if (!this.headers.has('Content-Type'))
            this.headers.append('Content-Type', 'application/json');
        return this.http.delete(this.serverUrl + method, { headers: this.headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error); });
    };
    HttpService.prototype.GoogleGet = function (keyword) {
        return this.http.get(this.GoogleMapUrl + keyword).map(function (res) {
            var json = res.json();
            return json.results;
        });
    };
    HttpService.prototype.GetLocation = function () {
        if (!this.headers.has('Content-Type'))
            this.headers.append('Content-Type', 'application/json');
        return this.http.get(this.locUrl)
            .map(function (resp) { return resp.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error); });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_checkbox_model__ = __webpack_require__("../../../../../src/app/core/models/checkbox.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/core/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MainService = (function () {
    function MainService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.onPageChange$ = new __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__["b" /* Subject */]();
        this.onPageChange$.next(true);
        this.onLoginChange$ = new __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__["b" /* Subject */]();
        this.onLoginChange$.next(false);
        this.onLoginChange$.subscribe(function (login) {
            console.log("change login", login);
            if (login)
                _this.BaseInit();
        });
    }
    MainService.prototype.BaseInit = function () {
        this.http.BaseInitByToken(localStorage.getItem('token'));
    };
    MainService.prototype.getClient = function () {
        return this.http.GetData('/auth/client', '');
    };
    MainService.prototype.login = function (email, password) {
        var params = {
            email: email,
            password: password
        };
        return this.http.PostData('/auth', JSON.stringify(params));
    };
    MainService.prototype.googleLogin = function (token) {
        return this.http.PostData('/auth/google', JSON.stringify(token));
    };
    MainService.prototype.sendEmail = function (email) {
        var params = {
            email: email,
        };
        return this.http.PostData('/subscribe', JSON.stringify(params));
    };
    MainService.prototype.register = function (email, password) {
        var params = {
            email: email,
            password: password
        };
        return this.http.PostData('/users', JSON.stringify(params));
    };
    MainService.prototype.logout = function () {
        return this.http.PostData('auth/logout', '');
    };
    MainService.prototype.urlParams = function (params) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in params) {
            var prop = params[key];
            if (prop) {
                if (prop instanceof Array) {
                    for (var i in prop) {
                        if (prop[i])
                            options.append(key + "[]", prop[i]);
                    }
                }
                else
                    options.set(key, params[key]);
            }
        }
        return options.toString();
    };
    MainService.prototype.getBestRoutes = function (params) {
        return this.http.GetData('/routes/best', this.urlParams(params));
    };
    MainService.prototype.getRoute = function (id) {
        return this.http.GetData('/routes/' + id, '');
    };
    MainService.prototype.getBidirectionalRoute = function (latFrom, lngFrom, latTo, lngTo, categories) {
        var data = {
            from_lat: latFrom,
            from_lng: lngFrom,
            to_lat: latTo,
            to_lng: lngTo,
            categories: categories,
            language: 'en'
        };
        return this.http.GetData('/routes/bidirectional/venues', this.urlParams(data));
    };
    MainService.prototype.getCityRoute = function (latFrom, lngFrom, categories) {
        var data = {
            lat: latFrom,
            lng: lngFrom,
            categories: categories,
            language: 'en'
        };
        return this.http.GetData('/routes/internal/venues', this.urlParams(data));
    };
    MainService.prototype.getPlaces = function (lat, lng, categories) {
        var data = {
            lat: lat,
            lng: lng,
            language: 'en',
            radius: 5,
            categories: categories
        };
        return this.http.GetData('/places/venues', this.urlParams(data));
    };
    MainService.prototype.getImage = function (id) {
        return this.http.GetData('/images/' + id, '');
    };
    MainService.prototype.getImageUrl = function (id) {
        return this.http.serverUrl + '/images/' + id + '/pure';
    };
    MainService.prototype.likeRoute = function (route_id) {
        return this.http.PostData('/routes/' + route_id + '/likes', '');
    };
    MainService.prototype.repostRoute = function (route_id) {
        return this.http.PostData('/routes/repost/' + route_id, '');
    };
    MainService.prototype.likePlace = function (place_id) {
        return this.http.PostData('/places/' + place_id + '/likes', '');
    };
    MainService.prototype.getUserLocation = function () {
        return this.http.GetLocation();
    };
    MainService.prototype.allCategories = function () {
        return [
            new __WEBPACK_IMPORTED_MODULE_2__models_checkbox_model__["a" /* CheckboxModel */]("Water", "water", "1.png"),
            new __WEBPACK_IMPORTED_MODULE_2__models_checkbox_model__["a" /* CheckboxModel */]("Mountains", "mountains", "2.png"),
            new __WEBPACK_IMPORTED_MODULE_2__models_checkbox_model__["a" /* CheckboxModel */]("Architecture", "architecture", "3.png"),
            new __WEBPACK_IMPORTED_MODULE_2__models_checkbox_model__["a" /* CheckboxModel */]("Churches", "rel_building", "4.png"),
            new __WEBPACK_IMPORTED_MODULE_2__models_checkbox_model__["a" /* CheckboxModel */]("Nature", "nature", "5.png"),
            new __WEBPACK_IMPORTED_MODULE_2__models_checkbox_model__["a" /* CheckboxModel */]("Monuments", "monument", "6.png")
        ];
    };
    MainService.prototype.mapStyle = function () {
        return [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ];
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/app/download/download.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/download/download.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"cta\">\r\n  <div class=\"row cta-content\">\r\n      <div class=\"col-twelve\">\r\n          <h1 class=\"h01\">Get started now. Try Alpha version of BeTrip.</h1>\r\n          <p class=\"lead\">Download the app now. Available on the:</p>\r\n          <ul class=\"stores\">\r\n              <li class=\"play-store\">\r\n                  <a href=\"https://play.google.com/apps/testing/io.betrip.android\" class=\"button round large\" title=\"\"> <i class=\"icon ion-social-android\"></i>Play Store</a>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n  </div>\r\n  <!-- /cta-content -->\r\n</section>\r\n<section id=\"testimonials\">\r\n  <div class=\"row flex-container\">\r\n      <h3>Turn every trip into a journey</h3>\r\n      <br />\r\n      <div>\r\n          <img width=\"216\" height=\"384\" src=\"../assets/img/screenshots/screenshot-1.png\">\r\n          <img width=\"216\" height=\"384\" src=\"../assets/img/screenshots/screenshot-6.png\">\r\n          <img width=\"216\" height=\"384\" src=\"../assets/img/screenshots/screenshot-3.png\">\r\n          <img width=\"216\" height=\"384\" src=\"../assets/img/screenshots/screenshot-5.png\">\r\n          <img width=\"216\" height=\"384\" src=\"../assets/img/screenshots/screenshot-4.png\">\r\n          <img width=\"216\" height=\"384\" src=\"../assets/img/screenshots/screenshot-2.png\">\r\n      </div>\r\n  </div>\r\n  <!-- /flex-container -->\r\n \r\n</section>\r\n<app-footer></app-footer>\r\n<!-- /testimonials -->\r\n"

/***/ }),

/***/ "../../../../../src/app/download/download.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_main_service__ = __webpack_require__("../../../../../src/app/core/services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DownloadComponent = (function () {
    function DownloadComponent(service) {
        this.service = service;
    }
    DownloadComponent.prototype.ngOnInit = function () {
        $(".content").addClass("all-pages");
        this.service.onPageChange$.next(false);
    };
    DownloadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-download',
            template: __webpack_require__("../../../../../src/app/download/download.component.html"),
            styles: [__webpack_require__("../../../../../src/app/download/download.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_main_service__["a" /* MainService */]])
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"faq\">\r\n  <div class=\"row section-intro\">\r\n      <div class=\"col-twelve with-bottom-line\">\r\n          <h1>Frequently</h1>\r\n          <h1>Asked Questions</h1>\r\n          <p class=\"lead\"></p>\r\n      </div>\r\n  </div>\r\n  <div class=\"container\">\r\n      <div class=\"for-flex-new-row faq-content\">\r\n          <div class=\"col-md-6\">\r\n              <div class=\"bgrid\">\r\n                  <h3>How is BeTrip different from other navigators and other sights searching applications?</h3>\r\n                  <p>BeTrip is both. We build a route using social sites, what automatically means that we ask people's opinion about the places. We consider date, mood, comments number of each post and many more parameters including your own preferences.</p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n              <div class=\"bgrid\">\r\n                      <h3>If you analyze social sites don't you think that a lot of people can like also bad picture e.g. road pit?</h3>\r\n                      <p>We have complex system of estimation which includes many parameters. That is one of the reasons we estimate the beauty of a picture and the mood of comments. </p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n              <div class=\"bgrid\">\r\n                  <h3>How can I know how many days from my subscription left?</h3>\r\n                  <p>You can find it in your profile which is located in the main menu. There you can also renew your account by pressing \"Pay\" button.</p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n              <div class=\"bgrid\">\r\n                  <h3>Am I able to print my route and take it as helper with me?</h3>\r\n                  <p>Yes, after building all possible routes application will give you possibility to navigate throught one of them or print them.</p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n              <div class=\"bgrid\">\r\n                      <h3>Which devices can I use? </h3>\r\n                      <p>We have applications for IOS(6 and above) and Android(4.0 and up). You can also use BeTrip's web version. You can log in to BeTrip from as many of your devices as you like — all at the same time. Just use your account to log in everywhere.</p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n              <div class=\"bgrid\">\r\n                  <h3>In which country can I use your app?</h3>\r\n                  <p>You can use our app everywhere. If there are posts on Facebook, Twitter, Instagram etc. we will find for you an interesting route.</p>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <!-- /faq-content -->\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_main_service__ = __webpack_require__("../../../../../src/app/core/services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqComponent = (function () {
    function FaqComponent(service) {
        this.service = service;
    }
    FaqComponent.prototype.ngOnInit = function () {
        $(".content").addClass("all-pages");
        this.service.onPageChange$.next(false);
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_main_service__["a" /* MainService */]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"new-flex-footer-my\">\r\n                <img src=\"../assets/img/Logo.png\" class=\"max-w img-responsive\" alt=\"\">\r\n                <div class=\"logo-title\">\r\n                        <p>BeTrip</p>\r\n                </div>\r\n                </div>\r\n                <p>Russian Federation Tatarstan Republic, Innopolis Universitetskaya street 1, 420500 social@betrip.io</p>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <p class=\"head-tt\">Site Links</p>\r\n                <ul>\r\n                    <li><a routerLinkActive=\"active\" routerLink=\"/build\">Build</a></li>\r\n                    <li> <a routerLinkActive=\"active\" routerLink=\"/best\">Best</a></li>\r\n             \r\n                   \r\n                </ul>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <p class=\"head-tt\">Social</p>\r\n                <ul>\r\n                    <li><a href=\"https://twitter.com/BeTrip_io\">Twitter</a></li>\r\n                    <li><a href=\"https://www.facebook.com/betrip.io/\">Facebook</a></li>\r\n                    <li><a href=\"https://www.instagram.com/betrip.io/\">Instagram</a></li>\r\n                    <li><a href=\"https://vk.com/club155807523\">Vk</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <p class=\"head-tt\">Subscribe</p>\r\n                <p>Keep yourself updated. Subscribe to our newsletter.</p>\r\n                <form id=\"mc-form\" class=\"group\" novalidate=\"true\" (ngSubmit)=\"SubscribeEmail(submitFormSubscribe)\" #submitFormSubscribe=\"ngForm\">\r\n                    <input type=\"text\" name=\"email\" class=\"email\" placeholder=\"type email &amp; hit enter\" [ngModel]=\"\" email required> \r\n                    <button type=\"submit\" name=\"subscribe\" ></button>\r\n                    <label for=\"mc-email\" class=\"subscribe-message\"></label>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <p class=\"for-center\">© Copyright BeTrip 2017</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_main_service__ = __webpack_require__("../../../../../src/app/core/services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = (function () {
    function FooterComponent(service) {
        this.service = service;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.SubscribeEmail = function (form) {
        console.log(form);
        this.service.sendEmail(form.control.controls.email.value).subscribe(function (res) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('submitFormSubscribe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], FooterComponent.prototype, "form", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_main_service__["a" /* MainService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/functionality/functionality.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/functionality/functionality.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"func\">\r\n  <section id=\"features\">\r\n      <div class=\"row section-intro\">\r\n          <div class=\"col-twelve with-bottom-line\">\r\n              <h5>Our secrets</h5>\r\n              <h1>How it works?</h1> </div>\r\n      </div>\r\n      <div class=\"row process-content\">\r\n          <div class=\"left-side\">\r\n              <div class=\"item\" data-item=\"1\">\r\n                  <h5>Build</h5>\r\n                  <p>After you select your starting point and your destination we find the shortest route using real time information in order to make sure you reach your destination without unnecessary delay.</p>\r\n              </div>\r\n              <div class=\"item\" data-item=\"2\">\r\n                  <h5>Search</h5>\r\n                  <p>Then we analyse the posts on various social sites that are located close to your optimal route including Instagram, twitter etc. On top of that we include real time information including season, weather and the time of day.</p>\r\n              </div>\r\n          </div>\r\n          <!-- /left-side -->\r\n          <div class=\"right-side\">\r\n              <div class=\"item\" data-item=\"3\">\r\n                  <h5>Analyze</h5>\r\n                  <p>Then through our algorithm we rate every post. For example the beauty of pictures, the mood of comments, the number of likes and the ratings on social sights. Like that we can analyse the popularity and nature of a location. </p>\r\n              </div>\r\n              <div class=\"item\" data-item=\"4\">\r\n                  <h5>Create</h5>\r\n                  <p>According to our rating and your personal preferences and taste we build your personal route: A route that doesn’t only bring you quickly to your destination, but that also makes sure you miss nothing on the way.</p>\r\n              </div>\r\n          </div>\r\n          <!-- /right-side -->\r\n          <div class=\"image-part\"></div>\r\n      </div>\r\n      <!-- /process-content -->\r\n  </section>\r\n  <section id=\"features\">\r\n      <div class=\"row section-intro\">\r\n          <div class=\"col-twelve with-bottom-line\">\r\n              <h5>Features</h5>\r\n              <h1>Great features you'll love</h1>\r\n              <p class=\"lead\"></p>\r\n          </div>\r\n      </div>\r\n      <div class=\"container\">\r\n          <div class=\"for-flex-new-row\">\r\n              <div class=\"col-md-4 features-list\">\r\n                  <div class=\"bgrid feature\"> <span class=\"icon\"><i class=\"icon-window\"></i></span>\r\n                      <div class=\"service-content\">\r\n                          <h3 class=\"h05\">Set your own preferences</h3>\r\n                          <p>Each user has his own profile where the most prefered to see places can be chosen. It can be architecture, nature, museums, churches, views etc. Depending on the user's preference different routes will have highest priority throught the whole possible. </p>\r\n                      </div>\r\n                  </div>\r\n                  <!-- /bgrid -->\r\n              </div>\r\n              <div class=\"col-md-4 features-list\">\r\n                  <div class=\"bgrid feature\"> <span class=\"icon\"><i class=\"icon-eye\"></i></span>\r\n                      <div class=\"service-content\">\r\n                          <h3 class=\"h05\">Select the route you like</h3>\r\n                          <p>After departure and destination are chosen and button \"Build\" is pressed application will provide several different options of routes. Each route has different number of places, distance and time. </p>\r\n                      </div>\r\n                  </div>\r\n                  <!-- /bgrid -->\r\n              </div>\r\n              <div class=\"col-md-4 features-list\">\r\n                  <div class=\"bgrid feature\"> <span class=\"icon\"><i class=\"icon-paint-brush\"></i></span>\r\n                      <div class=\"service-content\">\r\n                          <h3 class=\"h05\">Change your route as you want</h3>\r\n                          <p>Chosen route can be changed by user. Every place in route can be deleted and information about the route will be automatically updated. </p>\r\n                      </div>\r\n                  </div>\r\n                  <!-- /bgrid -->\r\n              </div>\r\n              <div class=\"col-md-4 features-list\">\r\n                  <div class=\"bgrid feature\"> <span class=\"icon\"><i class=\"icon-file\"></i></span>\r\n                      <div class=\"service-content\">\r\n                          <h3 class=\"h05\">Get info about the places</h3>\r\n                          <p>Each place has its own description, name, address, recommendation of visit time and rating that was given by the other users of the application. </p>\r\n                      </div>\r\n                  </div>\r\n                  <!-- /bgrid -->\r\n              </div>\r\n              <div class=\"col-md-4 features-list\">\r\n                  <div class=\"bgrid feature\"> <span class=\"icon\"><i class=\"icon-layers\"></i></span>\r\n                      <div class=\"service-content\">\r\n                          <h3 class=\"h05\">Give &amp; Get recommendations</h3>\r\n                          <p>Application has its own rating system and each user can be a part of it. After visiting a place user will be able to rate it. Also user can mark chosen route after the trip. </p>\r\n                      </div>\r\n                  </div>\r\n                  <!-- /bgrid -->\r\n              </div>\r\n              <div class=\"col-md-4 features-list\">\r\n                  <div class=\"bgrid feature\"> <span class=\"icon\"><i class=\"icon-gift\"></i></span>\r\n                      <div class=\"service-content\">\r\n                          <h3 class=\"h05\">Share your routes</h3>\r\n                          <p>All user's routes are stored in their profiles where they can be rated and shared. Social links can be entered in user's profile. </p>\r\n                      </div>\r\n                  </div>\r\n                  <!-- /bgrid -->\r\n              </div>\r\n          </div>\r\n          <!-- features-content -->\r\n      </div>\r\n  </section>\r\n</section>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/functionality/functionality.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionalityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_main_service__ = __webpack_require__("../../../../../src/app/core/services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FunctionalityComponent = (function () {
    function FunctionalityComponent(service) {
        this.service = service;
    }
    FunctionalityComponent.prototype.ngOnInit = function () {
        $(".content").addClass("all-pages");
        this.service.onPageChange$.next(false);
    };
    FunctionalityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-functionality',
            template: __webpack_require__("../../../../../src/app/functionality/functionality.component.html"),
            styles: [__webpack_require__("../../../../../src/app/functionality/functionality.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_main_service__["a" /* MainService */]])
    ], FunctionalityComponent);
    return FunctionalityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/places/places.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/places/places.component.html":
/***/ (function(module, exports) {

module.exports = "<app-preloader *ngIf=\"isLoading\"></app-preloader>\r\n<div class=\"best-wr\">  \r\n  <div class=\"fixed-map page-view-after-build\">  \r\n      <div  class=\"for-position-map\">\r\n        <agm-map #gm [mapDraggable]=\"true\" [zoomControl]=\"true\" [latitude]=\"lat\" [zoom]=\"13\"  [longitude]=\"lng\" style=\"height: 100%;\" (mapClick)=\"mapClick()\" (centerChange)=\"onCenterChanged($event)\" [styles]=\"mapStyle\">   \r\n            <!--<agm-marker [iconUrl]=\"'../assets/img/marker-yellow2.png'\" [latitude]=\"StepsCoord[0]?StepsCoord[0].lat:''\" [longitude]=\"StepsCoord[0]?StepsCoord[0].lng:''\"></agm-marker>-->\r\n            <agm-marker [iconUrl]=\"'../assets/img/marker-yellow2.png'\" *ngFor=\"let place of places; let i = index\" [latitude]=\"place?place.lat:0\" [longitude]=\"place?place.lng:0\" (markerClick)=\"onMarkerClick(i)\">\r\n                <agm-info-window [isOpen]=\"placeWindows[i]\">\r\n                    <div class=\"cart-sight-wrapp\">\r\n                        <div class=\"img\" [ngStyle]=\"{'background-image':'url(' + place.image + ')'}\"></div>\r\n                        <div class=\"ava\" style=\"background-image: url(../assets/img/ava.jpg)\"></div>\r\n                        <p class=\"name-sight\">{{place.name}}</p>\r\n                    </div>\r\n                </agm-info-window>\r\n            </agm-marker>\r\n            \r\n            <!--<agm-marker [iconUrl]=\"'../assets/img/marker-yellow2.png'\" [latitude]=\"StepsCoord[0]?StepsCoord[StepsCoord.length-1].lat:''\" [longitude]=\"StepsCoord[0]?StepsCoord[StepsCoord.length-1].lng:''\"></agm-marker>-->\r\n        </agm-map>\r\n      </div>\r\n      \r\n      <div class=\"fixed-sights\" [ngClass]=\"{'visible': true}\">\r\n          \r\n          <!--<div class=\"flex-sights\">\r\n                <div *ngFor=\"let item of places; let i = index\" class=\"one-sight\" (click)=\"onRoutePlace(i)\">\r\n                    <div class=\"for-before-wr\">\r\n                        <div class=\"img\" [ngStyle]=\"{'background-image':'url(' + item.image + ')'}\"></div>\r\n                    </div>\r\n                    <p><span>{{i + 1}}</span><strong>{{item.name}}</strong></p>\r\n                </div>\r\n          </div>-->\r\n\r\n          <ngu-carousel\r\n                *ngIf=\"isFlexVisible\"\r\n                [inputs]=\"carouselOne\"\r\n                class=\"pl-carousel\">\r\n                <ngu-item NguCarouselItem *ngFor=\"let item of places; let i = index\" (click)=\"onRoutePlace(i)\"  >\r\n                    <div class=\"car-item\">\r\n                        <div class=\"bannerStyle\"  [ngStyle]=\"{'background-image':'url(' + item.image + ')'}\">\r\n                            <div style=\"height:100px;\">\r\n                            </div>                        \r\n                        </div>\r\n                        <p><span>{{i + 1}}</span><strong>{{item.name}}</strong></p>\r\n                    </div>\r\n                </ngu-item> \r\n                <button NguCarouselPrev class='left-arrow-car'>&lt;</button>\r\n                <button NguCarouselNext class='right-arrow-car'>&gt;</button>\r\n            </ngu-carousel>\r\n          \r\n          <div *ngIf=\"isShowVisible\" class=\"show-div\">\r\n            <button class=\"btn btn-default btn-show-out\" (click)=\"onShowHere()\">Show here</button>\r\n          </div>\r\n      </div>\r\n\r\n      <!--<div class=\"save-route\"></div>-->    \r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal sights-slider\" id=\"sights-slider\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-contant\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"slider-init\">\r\n                    <div class=\"slide\" *ngFor=\"let item of places; let i = index\">\r\n                        <div class=\"after-slide\">\r\n                            <div class=\"for-before-wr\">\r\n                                <div class=\"img\" [ngStyle]=\"{'background-image':'url(' + item.image + ')' }\"></div>\r\n                            </div>\r\n                            <div class=\"content-sights\">\r\n                                <p class=\"name\">{{item.name}}</p>\r\n                                <p>{{item.description}}</p>\r\n                                <p>{{item.address}}</p>\r\n\r\n                                <div class=\"for-flex-buttons\">\r\n                                    <div class=\"find-more\">\r\n                                        <p>Find more...</p>\r\n                                    </div>\r\n                                    <div class=\"one\" (click)=\"onPlaceLike(item)\">\r\n                                        <div class=\"bg\" [ngClass]=\"{'<act></act>ive': item.is_liked}\">\r\n                                            <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"cats-footer\">\r\n  <div class=\"check-boxes-wr\"  style=\"height:60px;\">\r\n    <div class=\"container\"  style=\"height:60px;\">\r\n        <div class=\"row\"  style=\"height:60px;\">\r\n            <div class=\"col-md-12\">\r\n                <ul class=\"for-flex-check\"  style=\"height:60px;\">\r\n                    <li *ngFor=\"let cb of categories; let i = index\" (click)=\"changeCategory(i)\" [class.active] =\"cb.checked\">\r\n                        <div class=\"image\">\r\n                            <img [src]=\"'../assets/img/icons/'+ cb.image\" class=\"img-responsive max-width-icon-new\" width=\"30px\" alt=\"\">\r\n                        </div>\r\n                        <span>{{cb.name}}</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/places/places.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_main_service__ = __webpack_require__("../../../../../src/app/core/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_geodesy__ = __webpack_require__("../../../../geodesy/npm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_geodesy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_geodesy__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlacesComponent = (function () {
    function PlacesComponent(zone, router, route, service, params, mapsAPILoader) {
        this.zone = zone;
        this.router = router;
        this.route = route;
        this.service = service;
        this.params = params;
        this.mapsAPILoader = mapsAPILoader;
        this.isSliderOpen = true;
        this.isFlexVisible = false;
        this.isLoading = true;
        this.isShowVisible = false;
        this.categories = [];
        this.places = [];
        this.collectedPlaces = [];
        this.placeWindows = [];
        this.lat = 55.78943;
        this.lng = 49.14663;
        this.curLat = 55.78943;
        this.curLng = 49.14663;
        this.lastLat = 55.78943;
        this.lastLng = 49.14663;
        this.flagForDropdown = false;
        this.InfoWindowHSize = 0;
        this.isVisible = true;
        this.mapStyle = this.getMapStyle();
    }
    PlacesComponent.prototype.ngOnInit = function () {
        $(".content").addClass("all-pages");
        this.service.onPageChange$.next(false);
        this.categories = this.service.allCategories();
        this.carouselOne = {
            grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
            slide: 1,
            speed: 400,
            point: {
                visible: false,
                pointStyles: "\n          .ngucarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            position: absolute;\n            width: 100%;\n            bottom: 0px;\n            left: 0;\n            box-sizing: border-box;\n          }\n          .ngucarouselPoint li {\n            display: inline-block;\n            border-radius: 999px;\n            background: rgba(255, 255, 255, 0.55);\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s ease all;\n          }\n          .ngucarouselPoint li.active {\n              background: white;\n              width: 10px;\n          }\n        "
            },
            load: 2,
            loop: true,
            touch: true
        };
        if ($(window).scrollTop() > 35) {
            $(".fixed-sights").addClass("transformed-small");
        }
        else {
            $(".fixed-sights").removeClass("transformed-small");
        }
        $(window).scroll(function () {
            if ($(window).scrollTop() > 35) {
                $(".fixed-sights").addClass("transformed-small");
            }
            else {
                $(".fixed-sights").removeClass("transformed-small");
            }
        });
        $('#sights-slider').on('hidden.bs.modal', function () {
            $('.slider-init').slick('unslick');
        });
        this.clearInfoWin();
    };
    PlacesComponent.prototype.getMapStyle = function () {
        return this.service.mapStyle();
    };
    PlacesComponent.prototype.onShowHere = function () {
        this.loadPlaces();
    };
    PlacesComponent.prototype.filterPlaces = function () {
        var cats = this.categories.filter(function (cat) { return cat.checked; }).map(function (cat) { return cat.value; });
        if (cats.length > 0) {
            this.places = this.collectedPlaces.filter(function (place) { return cats.indexOf(place.categories[0]) != -1; });
        }
        else {
            this.places = this.collectedPlaces;
        }
        this.isFlexVisible = this.places.length > 0;
        this.placeWindows = [];
        for (var i in this.places) {
            this.placeWindows.push(false);
        }
    };
    PlacesComponent.prototype.changeCategory = function (i) {
        this.categories[i].checked = !this.categories[i].checked;
        this.filterPlaces();
    };
    PlacesComponent.prototype.onCenterChanged = function (center) {
        this.curLat = center.lat;
        this.curLng = center.lng;
        var dist = new __WEBPACK_IMPORTED_MODULE_4_geodesy__["LatLonSpherical"](this.curLat, this.curLng).distanceTo(new __WEBPACK_IMPORTED_MODULE_4_geodesy__["LatLonSpherical"](this.lastLat, this.lastLng));
        this.isShowVisible = (dist > 7000);
    };
    PlacesComponent.prototype.loadPlaces = function () {
        var _this = this;
        this.isLoading = true;
        this.service.getPlaces(this.curLat, this.curLng, []).subscribe(function (res) {
            _this.collectedPlaces = res;
            for (var i in res) {
                var place = _this.collectedPlaces[i];
                place.image = _this.service.getImageUrl(place.cover_id);
            }
            _this.clearInfoWin();
            _this.filterPlaces();
            _this.lastLat = _this.curLat;
            _this.lastLng = _this.curLng;
            _this.isShowVisible = false;
            _this.zone.run(function () {
                _this.isLoading = false;
            });
        }, function (err) {
            console.log(err);
        });
    };
    /*
    updateFlex(){
      setTimeout(() => {
        this.isFlexVisible = true;
  
        $('.flex-sights').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          infinite: false,
          responsive: [
            {
              breakpoint: 1601,
              settings: {
                slidesToShow: 6
              }
            },
            {
              breakpoint: 1301,
              settings: {
                slidesToShow: 3
              }
            }
          ]
        });
      }, 200);
    }*/
    PlacesComponent.prototype.onPlaceLike = function (place) {
        this.service.likePlace(place.id)
            .subscribe(function () {
            if (place.is_liked) {
                place.likes_count -= 1;
            }
            else {
                place.likes_count += 1;
            }
            place.is_liked = !place.is_liked;
        });
    };
    PlacesComponent.prototype.onRoutePlace = function (index) {
        $("#sights-slider").modal("show");
        console.log(index);
        $('.slider-init').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false
        });
        $('.slider-init').slick('slickGoTo', index, true);
    };
    PlacesComponent.prototype.clearInfoWin = function (i) {
        for (var i_1 in this.placeWindows) {
            this.placeWindows[i_1] = false;
        }
    };
    PlacesComponent.prototype.mapClick = function () {
        this.clearInfoWin();
    };
    PlacesComponent.prototype.onMarkerClick = function (i) {
        this.clearInfoWin();
        this.placeWindows[i] = !this.placeWindows[i];
        this.lat = this.places[i].lat + 0.025;
        this.lng = this.places[i].lng;
    };
    PlacesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.service.getUserLocation().subscribe(function (res) {
            var geo = new google.maps.Geocoder();
            geo.geocode({ address: res.city + ' ' + res.country }, function (res, stat) {
                if (stat == google.maps.GeocoderStatus.OK) {
                    var loc = res[0].geometry.location;
                    _this.lat = loc.lat();
                    _this.lng = loc.lng();
                    _this.curLat = loc.lat();
                    _this.curLng = loc.lng();
                    _this.lastLat = loc.lat();
                    _this.lastLng = loc.lng();
                }
                _this.loadPlaces();
            });
        }, function (err) {
            _this.loadPlaces();
        });
        //$('.flex-sights').slick('unslick');
        /*setTimeout(() => {
    
          $('.flex-sights').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false,
            responsive: [
              {
                breakpoint: 1601,
                settings: {
                  slidesToShow: 6
                }
              },
              {
                breakpoint: 1301,
                settings: {
                  slidesToShow: 3
                }
              }
            ]
          });
        }, 300);*/
    };
    PlacesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'route',
            template: __webpack_require__("../../../../../src/app/places/places.component.html"),
            styles: [__webpack_require__("../../../../../src/app/places/places.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__core_services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */]])
    ], PlacesComponent);
    return PlacesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/preloader/preloader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.bg-preloader{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: #fff;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    z-index: 4000;\r\n}\r\n\r\n.chasing-dots {\r\n   width: 70px;\r\nheight: 70px;\r\n    position: relative;\r\n    text-align: center;\r\n    margin-right: 30px;\r\n    -webkit-animation: rotate 2.0s infinite linear;\r\n    animation: rotate 2.0s infinite linear;\r\n   \r\n}\r\n.chasing-dots .dot1, .chasing-dots .dot2 {\r\n    width: 60%;\r\n    height: 60%;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 0;\r\n    background-color: #240A30;\r\n    border-radius: 100%;\r\n    -webkit-animation: bounce 2.0s infinite ease-in-out;\r\n    animation: bounce 2.0s infinite ease-in-out;\r\n}\r\n.chasing-dots .dot2 {\r\n    top: auto;\r\n    bottom: 0;\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n}\r\n@-webkit-keyframes bounce{\r\n    0%, 100%{\r\n        -webkit-transform:scale(0);\r\n    }\r\n    50%{\r\n        -webkit-transform:scale(1);\r\n    }\r\n}\r\n@keyframes bounce{\r\n    0%, 100%{\r\n        transform:scale(0);\r\n        -webkit-transform:scale(0)\r\n    }\r\n    50%{\r\n        transform:scale(1);\r\n        -webkit-transform:scale(1)\r\n    }\r\n}\r\n@-webkit-keyframes rotate{\r\n    100%{\r\n        -webkit-transform:rotate(360deg)\r\n    }\r\n}\r\n@keyframes rotate{\r\n    100%{\r\n        transform:rotate(360deg);\r\n        -webkit-transform:rotate(360deg)\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/preloader/preloader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-preloader\">\r\n  <div class=\"chasing-dots selected\">\r\n    <div class=\"dot1\"></div>\r\n    <div class=\"dot2\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/preloader/preloader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreloaderComponent = (function () {
    function PreloaderComponent() {
    }
    PreloaderComponent.prototype.ngOnInit = function () {
    };
    PreloaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-preloader',
            template: __webpack_require__("../../../../../src/app/preloader/preloader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/preloader/preloader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreloaderComponent);
    return PreloaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/route/route.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/route/route.component.html":
/***/ (function(module, exports) {

module.exports = "<app-preloader *ngIf=\"isLoading\"></app-preloader>\r\n<div class=\"best-wr\">  \r\n  <div class=\"fixed-map page-view-after-build\">  \r\n      <div  class=\"for-position-map\">\r\n        <agm-map #gm [mapDraggable]=\"true\" [latitude]=\"lat\" [longitude]=\"lng\" [zoomControl]=\"true\" [fitBounds]=\"zoomBounds\" style=\"height: 100%;\" (mapClick)=\"mapClick()\" [styles]=\"mapStyle\">   \r\n            <!--<agm-marker [iconUrl]=\"'../assets/img/marker-yellow2.png'\" [latitude]=\"StepsCoord[0]?StepsCoord[0].lat:''\" [longitude]=\"StepsCoord[0]?StepsCoord[0].lng:''\"></agm-marker>-->\r\n            <agm-marker [iconUrl]=\"'../assets/img/marker-yellow2.png'\" *ngFor=\"let place of selectedRoute.places; let i = index\" [latitude]=\"place?place.lat:0\" [longitude]=\"place?place.lng:0\" (markerClick)=\"markerClick(i)\">\r\n                <agm-info-window [isOpen]=\"placeWindows[i]\">\r\n                <div class=\"cart-sight-wrapp\">\r\n                    <div class=\"img\" [ngStyle]=\"{'background-image':'url(' + place.image + ')'}\"></div>\r\n                    <div class=\"ava\" style=\"background-image: url(../assets/img/ava.jpg)\"></div>\r\n                    <p class=\"name-sight\">{{place.name}}</p>\r\n                </div>\r\n                </agm-info-window>\r\n            </agm-marker>\r\n            \r\n            <!--<agm-marker [iconUrl]=\"'../assets/img/marker-yellow2.png'\" [latitude]=\"StepsCoord[0]?StepsCoord[StepsCoord.length-1].lat:''\" [longitude]=\"StepsCoord[0]?StepsCoord[StepsCoord.length-1].lng:''\"></agm-marker>-->\r\n            \r\n            <agm-polyline [strokeColor]=\"'#FFC636'\" [strokeOpacity]=\"'0.8'\">\r\n                <ng-container>\r\n                    <agm-polyline-point *ngFor=\"let point of polyline; let i = index\" [latitude]=\"point.lat?point.lat:0\" [longitude]=\"point.lng?point.lng:0\"></agm-polyline-point>\r\n                </ng-container>\r\n            </agm-polyline>\r\n        </agm-map>\r\n      </div>\r\n      \r\n      <div class=\"fixed-sights\" [ngClass]=\"{'visible': 'true'}\">\r\n         <!-- <div class=\"flex-sights\">\r\n                <div *ngFor=\"let item of selectedRoute.places; let i = index\" class=\"one-sight\" (click)=\"onRoutePlace(i)\">\r\n                    <div class=\"for-before-wr\">\r\n                        <div class=\"img\" [ngStyle]=\"{'background-image':'url(' + item.image + ')'}\"></div>\r\n                    </div>\r\n                    <p><span>{{i + 1}}</span><strong>{{item.name}}</strong></p>\r\n                </div>\r\n          </div>-->\r\n           <ngu-carousel\r\n                [inputs]=\"carouselOne\"\r\n                class=\"pl-carousel\">\r\n                <ngu-item NguCarouselItem *ngFor=\"let item of selectedRoute.places; let i = index\" (click)=\"onRoutePlace(i)\"  >\r\n                    <div class=\"car-item\">\r\n                        <div class=\"bannerStyle\"  [ngStyle]=\"{'background-image':'url(' + item.image + ')'}\">\r\n                            <div style=\"height:100px;\">\r\n                            </div>                        \r\n                        </div>\r\n                        <p><span>{{i + 1}}</span><strong>{{item.name}}</strong></p>\r\n                    </div>\r\n                </ngu-item> \r\n                <button NguCarouselPrev class='left-arrow-car'>&lt;</button>\r\n                <button NguCarouselNext class='right-arrow-car'>&gt;</button>\r\n            </ngu-carousel>\r\n      </div>\r\n      <!--<div class=\"save-route\"></div>-->    \r\n  </div>\r\n</div>\r\n\r\n<!--новая карточка-->\r\n<div class=\"one-block avp\">\r\n    <div class=\"new-wrapp-for-shadow\">\r\n        <div class=\"for-before-wr\">\r\n            <div class=\"img\" [ngStyle]=\"{'background-image':'url(' + selectedRoute.image + ')'}\"></div>\r\n        </div>\r\n        <div class=\"ava\" style=\"background-image: url(../assets/img/ava.jpg)\"></div>\r\n        <div class=\"padd-descript\">\r\n            <p class=\"name\">{{selectedRoute.name}}</p>\r\n            <div class=\"button-wr\">\r\n                <div class=\"one\" (click)=\"likeRoute(selectedRoute)\">\r\n                    <div class=\"bg\" [ngClass]=\"{'active': selectedRoute.is_liked}\">\r\n                        <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\" >\r\n                        <span>{{selectedRoute.likes_count}}{{isILikeIt?'+':''}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"one\">\r\n                    <div class=\"bg\">\r\n                        <img src=\"../assets/img/share.png\" class=\"img-responsive\" alt=\"\">\r\n                        <span>{{selectedRoute.reposts_count}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"one\">\r\n                    <div class=\"bg\">\r\n                        <img src=\"../assets/img/save.png\" class=\"img-responsive\" alt=\"\">\r\n                        <span>3</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--/новая карточка-->\r\n<div class=\"modal sights-slider\" id=\"sights-slider\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-contant\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"slider-init\">\r\n                    <div class=\"slide\" *ngFor=\"let item of selectedRoute.places; let i = index\">\r\n                        <div class=\"after-slide\">\r\n                            <div class=\"for-before-wr\">\r\n                                <div class=\"img\" [ngStyle]=\"{'background-image':'url(' + item.image + ')' }\"></div>\r\n                            </div>\r\n                            <div class=\"content-sights\">\r\n                                <p class=\"name\">{{item.name}}</p>\r\n                                <p>{{item.description}}</p>\r\n                                <p>{{item.address}}</p>\r\n\r\n                                <div class=\"for-flex-buttons\">\r\n                                    <div class=\"find-more\">\r\n                                        <p>Find more...</p>\r\n                                    </div>\r\n                                    <div class=\"one\" (click)=\"onPlaceLike(item)\">\r\n                                        <div class=\"bg\" [ngClass]=\"{'active': item.is_liked}\">\r\n                                            <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/route/route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_main_service__ = __webpack_require__("../../../../../src/app/core/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_geodesy__ = __webpack_require__("../../../../geodesy/npm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_geodesy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_geodesy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_models_route_model__ = __webpack_require__("../../../../../src/app/core/models/route.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_models_coords_model__ = __webpack_require__("../../../../../src/app/core/models/coords.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RouteComponent = (function () {
    function RouteComponent(router, route, service, params, mapsAPILoader) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.params = params;
        this.mapsAPILoader = mapsAPILoader;
        this.isSliderOpen = true;
        this.isModalVisible = false;
        this.isLoading = true;
        this.polyline = [];
        this.selectedRoute = new __WEBPACK_IMPORTED_MODULE_5__core_models_route_model__["a" /* RouteModel */]();
        this.lat = 38.678418;
        this.lng = 40.809007;
        this.activeRoute = 0;
        this.CurrentRoute = null;
        this.placeWindows = [];
        this.allRoutsImages = [];
        this.RouteImage = null;
        this.StepsCoord = [];
        this.mapStyle = this.getMapStyle();
        this.flagForDropdown = false;
        this.InfoWindowHSize = 0;
        this.isILikeIt = false;
        this.isVisible = true;
        this.flagForOpenSlider = true;
        this.newFlagForVisible = false;
    }
    RouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.onPageChange$.next(false);
        // this.StepsCoord.push(new CoordsModel(this.lat,this.lng));
        this.carouselOne = {
            grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
            slide: 1,
            speed: 400,
            point: {
                visible: false,
                pointStyles: "\n          .ngucarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            position: absolute;\n            width: 100%;\n            bottom: 0px;\n            left: 0;\n            box-sizing: border-box;\n          }\n          .ngucarouselPoint li {\n            display: inline-block;\n            border-radius: 999px;\n            background: rgba(255, 255, 255, 0.55);\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s ease all;\n          }\n          .ngucarouselPoint li.active {\n              background: white;\n              width: 10px;\n          }\n        "
            },
            load: 2,
            loop: true,
            touch: true
        };
        this.route.params.subscribe(function (params) {
            _this.service.getRoute(params['id']).subscribe(function (res) {
                _this.selectedRoute = res;
                _this.selectedRoute.image = _this.service.getImageUrl(_this.selectedRoute.cover_id);
                for (var k in _this.selectedRoute.places) {
                    _this.placeWindows.push(false);
                    _this.selectedRoute.places[k].image = _this.service.getImageUrl(_this.selectedRoute.places[k].cover_id);
                }
                _this.isSliderOpen = false;
                _this.polyline = [];
                //this.getRouteMiddle(this.selectedRoute);
                for (var i = 0; i < _this.selectedRoute.places.length - 1; i++) {
                    var res = _this.getCurvedLine(_this.selectedRoute.places[i], _this.selectedRoute.places[i + 1], i % 2);
                    for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                        var point = res_1[_i];
                        _this.polyline.push(point);
                    }
                }
                _this.mapsAPILoader.load().then(function () {
                    _this.getRouteMiddle(_this.selectedRoute);
                });
                _this.isLoading = false;
            }, function (err) {
                console.log(err);
            });
        });
        $('#sights-slider').on('hidden.bs.modal', function () {
            $('.slider-init').slick('unslick');
        });
        //this.StepsCoord.push(new CoordsModel(this.lat+1,this.lng));
        if ($(window).scrollTop() > 35) {
            $(".fixed-sights").addClass("transformed-small");
        }
        else {
            $(".fixed-sights").removeClass("transformed-small");
        }
        $(window).scroll(function () {
            console.log($(window).scrollTop());
            if ($(window).scrollTop() > 35) {
                $(".fixed-sights").addClass("transformed-small");
            }
            else {
                $(".fixed-sights").removeClass("transformed-small");
            }
        });
        this.clearInfoWin();
    };
    RouteComponent.prototype.getMapStyle = function () {
        return this.service.mapStyle();
    };
    RouteComponent.prototype.getCurvedLine = function (place, nextPlace, isRight) {
        var res = [];
        var p1 = new __WEBPACK_IMPORTED_MODULE_4_geodesy__["LatLonSpherical"](place.lat, place.lng);
        var p3 = new __WEBPACK_IMPORTED_MODULE_4_geodesy__["LatLonSpherical"](nextPlace.lat, nextPlace.lng);
        var middle = p1.midpointTo(p1, p3);
        var dist = p1.distanceTo(p3);
        var head = middle.bearingTo(p3);
        var p2 = p1.rhumbDestinationPoint(dist * 0.75, head + 30 * Math.pow(-1, isRight)); // new LatLonSpherical(middle.lat, middle.lon); //SphericalUtil.ComputeOffset(middle, dist * 0.2, head + 90 * Math.Pow(-1, isRight));
        for (var i = 0; i < 150; i++) {
            var T = i / 150.0;
            var x = Math.pow(1 - T, 2) * p1.lat + 2 * (1 - T) * T * p2.lat + Math.pow(T, 2) * p3.lat;
            var y = Math.pow(1 - T, 2) * p1.lon + 2 * (1 - T) * T * p2.lon + Math.pow(T, 2) * p3.lon;
            res.push(new __WEBPACK_IMPORTED_MODULE_6__core_models_coords_model__["a" /* CoordsModel */](x, y));
        }
        return res;
    };
    RouteComponent.prototype.getRouteMiddle = function (route) {
        var minLat = 1000000.0;
        var minLng = 1000000.0;
        var maxLat = -1000000.0;
        var maxLng = -1000000.0;
        this.zoomBounds = new google.maps.LatLngBounds();
        for (var _i = 0, _a = route.places; _i < _a.length; _i++) {
            var place = _a[_i];
            this.zoomBounds.extend(new google.maps.LatLng(place.lat, place.lng));
            minLat = Math.min(minLat, place.lat);
            minLng = Math.min(minLng, place.lng);
            maxLat = Math.max(maxLat, place.lat);
            maxLng = Math.max(maxLng, place.lng);
        }
        //margin from top for carousel
        var dist = new __WEBPACK_IMPORTED_MODULE_4_geodesy__["LatLonSpherical"](maxLat, minLng).distanceTo(new __WEBPACK_IMPORTED_MODULE_4_geodesy__["LatLonSpherical"](minLat, maxLng));
        var to = new __WEBPACK_IMPORTED_MODULE_4_geodesy__["LatLonSpherical"](maxLat, maxLng).rhumbDestinationPoint(dist * 0.5, 60);
        this.zoomBounds.extend(new google.maps.LatLng(to.lat, to.lon));
    };
    RouteComponent.prototype.onPlaceLike = function (place) {
        this.service.likePlace(place.id)
            .subscribe(function () {
            if (place.is_liked) {
                place.likes_count -= 1;
            }
            else {
                place.likes_count += 1;
            }
            place.is_liked = !place.is_liked;
        });
    };
    RouteComponent.prototype.onRouteLike = function (route) {
        this.service.likeRoute(route.id)
            .subscribe(function () {
            if (route.is_liked) {
                route.likes_count -= 1;
            }
            else {
                route.likes_count += 1;
            }
            route.is_liked = !route.is_liked;
        });
    };
    RouteComponent.prototype.onRoutePlace = function (index) {
        $("#sights-slider").modal("show");
        console.log(index);
        $('.slider-init').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false
        });
        $('.slider-init').slick('slickGoTo', index, true);
    };
    RouteComponent.prototype.clearInfoWin = function () {
        for (var i in this.placeWindows) {
            this.placeWindows[i] = false;
        }
    };
    RouteComponent.prototype.mapClick = function () {
        this.clearInfoWin();
    };
    RouteComponent.prototype.markerClick = function (i) {
        //this.isInfoWinOpen[i]= !this.isInfoWinOpen[i];
        this.clearInfoWin();
        this.placeWindows[i] = !this.placeWindows[i];
        this.lat = this.selectedRoute.places[i].lat + 0.025;
        this.lng = this.selectedRoute.places[i].lng;
    };
    RouteComponent.prototype.ngAfterViewInit = function () {
        /*setTimeout(() => {
    
          $('.flex-sights').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false,
            responsive: [
              {
                breakpoint: 1601,
                settings: {
                  slidesToShow: 6
                }
              },
              {
                breakpoint: 1301,
                settings: {
                  slidesToShow: 3
                }
              }
            ]
          });
        }, 300);*/
    };
    RouteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'route',
            template: __webpack_require__("../../../../../src/app/route/route.component.html"),
            styles: [__webpack_require__("../../../../../src/app/route/route.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__core_services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */]])
    ], RouteComponent);
    return RouteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trips/trips.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trips/trips.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"best-wr\">\r\n  <div class=\"left-side\">\r\n      <div class=\"padd-my-tabs\">\r\n          <div class=\"my-tabs\">\r\n              <div class=\"my-tab\" [ngClass]=\"{'active': activetab == 'Past'}\" (click)=\"ChangeTab()\">Past</div>\r\n              <div class=\"my-tab\" [ngClass]=\"{'active': activetab == 'Upcoming'}\" (click)=\"ChangeTab()\">Upcoming</div>\r\n          </div>\r\n      </div>\r\n      <div class=\"all-best-blocks\">\r\n          <div class=\"one-block\">\r\n              <div class=\"new-wrapp-for-shadow\">\r\n                  <div class=\"for-before-wr\">\r\n                      <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                  </div>\r\n                  <div class=\"ava\" style=\"background-image: url(../assets/img/ava.jpg)\"></div>\r\n                  <div class=\"padd-descript\">\r\n                      <p class=\"name\" (click)=\"OpenSliderCart()\">Milan - Paris</p>\r\n                      <p class=\"desc\"><strong>Distance </strong>1345 km</p>\r\n                      <p class=\"desc\"><strong>Time </strong>13h 45min</p>\r\n                      <div class=\"button-wr\">\r\n\r\n                          <div class=\"one\">\r\n                              <div class=\"bg\">\r\n                                  <img src=\"../assets/img/share.png\" class=\"img-responsive\" alt=\"\">\r\n                                  <span>500</span>\r\n                              </div>\r\n                          </div>\r\n\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"one-block\">\r\n              <div class=\"new-wrapp-for-shadow\">\r\n                  <div class=\"for-before-wr\">\r\n                      <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                  </div>\r\n                  <div class=\"ava\" style=\"background-image: url(../assets/img/ava.jpg)\"></div>\r\n                  <div class=\"padd-descript\">\r\n                      <p class=\"name\" (click)=\"OpenSliderCart()\">Milan - Paris</p>\r\n                      <p class=\"desc\"><strong>Distance </strong>1345 km</p>\r\n                      <p class=\"desc\"><strong>Time </strong>13h 45min</p>\r\n                      <div class=\"button-wr\">\r\n\r\n                          <div class=\"one\">\r\n                              <div class=\"bg\">\r\n                                  <img src=\"../assets/img/share.png\" class=\"img-responsive\" alt=\"\">\r\n                                  <span>500</span>\r\n                              </div>\r\n                          </div>\r\n\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n         \r\n      </div>\r\n  </div>\r\n  <div class=\"fixed-map\">\r\n     \r\n      \r\n      <!--Сюда карту-->\r\n    <div class=\"for-position-map\">\r\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" style=\"height: 100%;\">\r\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n            </agm-map>\r\n    </div>\r\n      \r\n      \r\n      <div class=\"fixed-sights\"  [ngClass]=\"{ visible : !this.flagForOpenSlider }\">\r\n          <div class=\"flex-sights\">\r\n              \r\n              <div class=\"one-sight\" (click)=\"OpenModalSights()\">\r\n                  <div class=\"for-before-wr\">\r\n                      <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                  </div>\r\n                  <p><span>1</span>Holywood</p>\r\n              </div>\r\n              <div class=\"one-sight\" (click)=\"OpenModalSights()\">\r\n                  <div class=\"for-before-wr\">\r\n                      <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                  </div>\r\n                  <p><span>2</span>Holywood</p>\r\n              </div>\r\n              <div class=\"one-sight\" (click)=\"OpenModalSights()\">\r\n                  <div class=\"for-before-wr\">\r\n                      <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                  </div>\r\n                  <p><span>3</span>Holywood</p>\r\n              </div>\r\n              <div class=\"one-sight\" (click)=\"OpenModalSights()\">\r\n                  <div class=\"for-before-wr\">\r\n                      <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                  </div>\r\n                  <p><span>4</span>Holywood</p>\r\n              </div>\r\n              <div class=\"one-sight\" (click)=\"OpenModalSights()\">\r\n                  <div class=\"for-before-wr\">\r\n                      <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                  </div>\r\n                  <p><span>5</span>Holywood</p>\r\n              </div>\r\n              <div class=\"one-sight\" (click)=\"OpenModalSights()\">\r\n                  <div class=\"for-before-wr\">\r\n                      <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                  </div>\r\n                  <p><span>6</span>Holywood</p>\r\n              </div>\r\n              <div class=\"one-sight\" (click)=\"OpenModalSights()\">\r\n                  <div class=\"for-before-wr\">\r\n                      <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                  </div>\r\n                  <p><span>7</span>Holywood</p>\r\n              </div>\r\n              <div class=\"one-sight\" (click)=\"OpenModalSights()\">\r\n                  <div class=\"for-before-wr\">\r\n                      <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                  </div>\r\n                  <p><span>8</span>Holywood</p>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"modal sights-slider\" id=\"sights-slider\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-contant\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"slider-init\">\r\n                        <div class=\"slide\">\r\n                            <div class=\"after-slide\">\r\n                                <div class=\"for-before-wr\">\r\n                                    <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                                </div>\r\n                                <div class=\"content-sights\">\r\n                                    <p class=\"name\">Holywood</p>\r\n                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, </p>\r\n    \r\n                                    <div class=\"for-flex-buttons\">\r\n                                        <div class=\"find-more\">\r\n                                            <p>Find more...</p>\r\n                                        </div>\r\n                                        <div class=\"one\">\r\n                                            <div class=\"bg\">\r\n                                                <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"slide\">\r\n                            <div class=\"after-slide\">\r\n                                <div class=\"for-before-wr\">\r\n                                    <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                                </div>\r\n                                <div class=\"content-sights\">\r\n                                    <p class=\"name\">Holywood</p>\r\n                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, </p>\r\n    \r\n                                    <div class=\"for-flex-buttons\">\r\n                                        <div class=\"find-more\">\r\n                                            <p>Find more...</p>\r\n                                        </div>\r\n                                        <div class=\"one\">\r\n                                            <div class=\"bg\">\r\n                                                <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"slide\">\r\n                                <div class=\"after-slide\">\r\n                                    <div class=\"for-before-wr\">\r\n                                        <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                                    </div>\r\n                                    <div class=\"content-sights\">\r\n                                        <p class=\"name\">Holywood</p>\r\n                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, </p>\r\n        \r\n                                        <div class=\"for-flex-buttons\">\r\n                                            <div class=\"find-more\">\r\n                                                <p>Find more...</p>\r\n                                            </div>\r\n                                            <div class=\"one\">\r\n                                                <div class=\"bg\">\r\n                                                    <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"slide\">\r\n                                <div class=\"after-slide\">\r\n                                    <div class=\"for-before-wr\">\r\n                                        <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                                    </div>\r\n                                    <div class=\"content-sights\">\r\n                                        <p class=\"name\">Holywood</p>\r\n                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, </p>\r\n        \r\n                                        <div class=\"for-flex-buttons\">\r\n                                            <div class=\"find-more\">\r\n                                                <p>Find more...</p>\r\n                                            </div>\r\n                                            <div class=\"one\">\r\n                                                <div class=\"bg\">\r\n                                                    <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"slide\">\r\n                                    <div class=\"after-slide\">\r\n                                        <div class=\"for-before-wr\">\r\n                                            <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                                        </div>\r\n                                        <div class=\"content-sights\">\r\n                                            <p class=\"name\">Holywood</p>\r\n                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, </p>\r\n            \r\n                                            <div class=\"for-flex-buttons\">\r\n                                                <div class=\"find-more\">\r\n                                                    <p>Find more...</p>\r\n                                                </div>\r\n                                                <div class=\"one\">\r\n                                                    <div class=\"bg\">\r\n                                                        <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"slide\">\r\n                                    <div class=\"after-slide\">\r\n                                        <div class=\"for-before-wr\">\r\n                                            <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                                        </div>\r\n                                        <div class=\"content-sights\">\r\n                                            <p class=\"name\">Holywood</p>\r\n                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, </p>\r\n            \r\n                                            <div class=\"for-flex-buttons\">\r\n                                                <div class=\"find-more\">\r\n                                                    <p>Find more...</p>\r\n                                                </div>\r\n                                                <div class=\"one\">\r\n                                                    <div class=\"bg\">\r\n                                                        <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"slide\">\r\n                                        <div class=\"after-slide\">\r\n                                            <div class=\"for-before-wr\">\r\n                                                <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                                            </div>\r\n                                            <div class=\"content-sights\">\r\n                                                <p class=\"name\">Holywood</p>\r\n                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, </p>\r\n                \r\n                                                <div class=\"for-flex-buttons\">\r\n                                                    <div class=\"find-more\">\r\n                                                        <p>Find more...</p>\r\n                                                    </div>\r\n                                                    <div class=\"one\">\r\n                                                        <div class=\"bg\">\r\n                                                            <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                <div class=\"slide\">\r\n                                    <div class=\"after-slide\">\r\n                                        <div class=\"for-before-wr\">\r\n                                            <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n                                        </div>\r\n                                        <div class=\"content-sights\">\r\n                                            <p class=\"name\">Holywood</p>\r\n                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, </p>\r\n            \r\n                                            <div class=\"for-flex-buttons\">\r\n                                                <div class=\"find-more\">\r\n                                                    <p>Find more...</p>\r\n                                                </div>\r\n                                                <div class=\"one\">\r\n                                                    <div class=\"bg\">\r\n                                                        <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/trips/trips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_main_service__ = __webpack_require__("../../../../../src/app/core/services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripsComponent = (function () {
    function TripsComponent(service) {
        this.service = service;
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.flagForOpenSlider = true;
        this.activetab = "Past";
    }
    TripsComponent.prototype.ngOnInit = function () {
        this.service.onPageChange$.next(false);
        $('#sights-slider').on('hidden.bs.modal', function () {
            $('.slider-init').slick('unslick');
        });
        if ($(window).scrollTop() > 70) {
            $(".fixed-sights").addClass("transformed");
        }
        else {
            $(".fixed-sights").removeClass("transformed");
        }
        $(window).scroll(function () {
            if ($(window).scrollTop() > 70) {
                $(".fixed-sights").addClass("transformed");
            }
            else {
                $(".fixed-sights").removeClass("transformed");
            }
        });
    };
    TripsComponent.prototype.ChangeTab = function () {
        if (this.activetab == "Past") {
            this.activetab = "Upcoming";
        }
        else {
            this.activetab = "Past";
        }
    };
    TripsComponent.prototype.OpenSliderCart = function () {
        if (!this.flagForOpenSlider) {
            $('.flex-sights').slick('unslick');
        }
        this.flagForOpenSlider = false;
        $('.flex-sights').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false
        });
    };
    TripsComponent.prototype.OpenModalSights = function () {
        $("#sights-slider").modal("show");
        $('.slider-init').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false
        });
    };
    TripsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trips',
            template: __webpack_require__("../../../../../src/app/trips/trips.component.html"),
            styles: [__webpack_require__("../../../../../src/app/trips/trips.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_main_service__["a" /* MainService */]])
    ], TripsComponent);
    return TripsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-after-build/view-after-build.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-after-build/view-after-build.component.html":
/***/ (function(module, exports) {

module.exports = "<app-preloader *ngIf=\"isLoading\"></app-preloader>\r\n\r\n<div class=\"best-wr\">  \r\n  <div class=\"fixed-map page-view-after-build\">  \r\n      <div  class=\"for-position-map\">\r\n        <agm-map #gm [mapDraggable]=\"true\" [zoomControl]=\"true\" [latitude]=\"lat\" [longitude]=\"lng\" [fitBounds]=\"zoomBounds\" style=\"height: 100%;\" (mapClick)=\"mapClick()\" [styles]=\"mapStyle\">   \r\n            <!--<agm-marker [iconUrl]=\"'../assets/img/marker-yellow2.png'\" [latitude]=\"StepsCoord[0]?StepsCoord[0].lat:''\" [longitude]=\"StepsCoord[0]?StepsCoord[0].lng:''\"></agm-marker>-->\r\n            <agm-marker [iconUrl]=\"'../assets/img/marker-yellow2.png'\" *ngFor=\"let place of selectedRoute.places; let i = index\" [latitude]=\"place?place.lat:0\" [longitude]=\"place?place.lng:0\" (markerClick)=\"markerClick(i)\">\r\n                <agm-info-window [isOpen]=\"placeWindows[i]\">\r\n                <div class=\"cart-sight-wrapp\">\r\n                    <div class=\"img\" [ngStyle]=\"{'background-image':'url(' + place.image + ')'}\"></div>\r\n                    <div class=\"ava\" style=\"background-image: url(../assets/img/ava.jpg)\"></div>\r\n                    <p class=\"name-sight\">{{place.name}}</p>\r\n                </div>\r\n                </agm-info-window>\r\n            </agm-marker>\r\n            \r\n            <!--<agm-marker [iconUrl]=\"'../assets/img/marker-yellow2.png'\" [latitude]=\"StepsCoord[0]?StepsCoord[StepsCoord.length-1].lat:''\" [longitude]=\"StepsCoord[0]?StepsCoord[StepsCoord.length-1].lng:''\"></agm-marker>-->\r\n            \r\n            <agm-polyline [strokeColor]=\"'#FFC636'\" [strokeOpacity]=\"'0.8'\">\r\n                <ng-container>\r\n                    <agm-polyline-point *ngFor=\"let point of polyline; let i = index\" [latitude]=\"point.lat?point.lat:0\" [longitude]=\"point.lng?point.lng:0\"></agm-polyline-point>\r\n                </ng-container>\r\n            </agm-polyline>\r\n        </agm-map>\r\n      </div>\r\n      \r\n      <div class=\"fixed-sights\" [ngClass]=\"{'visible': 'true'}\">\r\n          <!--<div class=\"flex-sights\">\r\n                <div *ngFor=\"let item of selectedRoute.places; let i = index\" class=\"one-sight\" (click)=\"onRoutePlace(i)\">\r\n                    <div class=\"for-before-wr\">\r\n                        <div class=\"img\" [ngStyle]=\"{'background-image':'url(' + item.image + ')'}\"></div>\r\n                    </div>\r\n                    <p><span>{{i + 1}}</span><strong>{{item.name}}</strong></p>\r\n                </div>\r\n          </div>-->\r\n           <ngu-carousel\r\n                [inputs]=\"carouselOne\"\r\n                class=\"pl-carousel\">\r\n                <ngu-item NguCarouselItem *ngFor=\"let item of selectedRoute.places; let i = index\" (click)=\"onRoutePlace(i)\"  >\r\n                    <div class=\"car-item\">\r\n                        <div class=\"bannerStyle\"  [ngStyle]=\"{'background-image':'url(' + item.image + ')'}\">\r\n                            <div style=\"height:100px;\">\r\n                            </div>                        \r\n                        </div>\r\n                        <p><span>{{i + 1}}</span><strong>{{item.name}}</strong></p>\r\n                    </div>\r\n                </ngu-item> \r\n                <button NguCarouselPrev class='left-arrow-car'>&lt;</button>\r\n                <button NguCarouselNext class='right-arrow-car'>&gt;</button>\r\n            </ngu-carousel>\r\n      </div>\r\n      <!--<div class=\"save-route\"></div>-->    \r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"true\" class=\"routs-count\">\r\n    <div class=\"picked-route\" (click)=\"openRoutesMenu()\">\r\n        <div class=\"click\">\r\n            <div class=\"one-route\">\r\n                <span>{{routeIndex + 1}}</span>\r\n                <p>{{selectedRoute.distance?(selectedRoute.distance - selectedRoute.distance % 1000) / 1000 +'km - ' : 'Many-many km'}}{{selectedRoute.duration?(selectedRoute.duration - (selectedRoute.duration % 3600))/3600 + 'h ':''}}{{selectedRoute.duration? (selectedRoute.duration - selectedRoute.duration % 60)/60 - ((selectedRoute.duration - (selectedRoute.duration % 3600))/3600)*60 +'m': '' }}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"outher\">\r\n        <div *ngFor=\"let route of routes; let i = index\" class=\"click\" (click)=\"changeRoute(i)\">\r\n            <div class=\"one-route\">\r\n                <span>{{i + 1}}</span>\r\n                <p> {{route.distance?(route.distance - route.distance % 1000) / 1000 + ' km - ':'Many-many km'}}{{route.travel_time?(route.travel_time - (route.travel_time % 3600))/3600 +'h ':''}}{{ route.travel_time?(route.travel_time - route.travel_time % 60)/60 - ((route.travel_time - (route.travel_time % 3600))/3600)*60 +'min':''}}</p>\r\n            </div>\r\n        </div>\r\n    </div> \r\n</div>\r\n\r\n\r\n\r\n\r\n<!--новая карточка-->\r\n<!--<div class=\"one-block avp\">\r\n    <div class=\"new-wrapp-for-shadow\">\r\n        <div class=\"for-before-wr\">\r\n            <div class=\"img\" style=\"background-image: url(../assets/img/post_326.jpg)\"></div>\r\n        </div>\r\n        <div class=\"ava\" style=\"background-image: url(../assets/img/ava.jpg)\"></div>\r\n        <div class=\"padd-descript\">\r\n            <p class=\"name\">Донецк - Москва</p>\r\n            <div class=\"button-wr\">\r\n                <div class=\"one\">\r\n                    <div class=\"bg\">\r\n                        <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                        <span>1</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"one\">\r\n                    <div class=\"bg\">\r\n                        <img src=\"../assets/img/share.png\" class=\"img-responsive\" alt=\"\">\r\n                        <span>2</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"one\">\r\n                    <div class=\"bg\">\r\n                        <img src=\"../assets/img/save.png\" class=\"img-responsive\" alt=\"\">\r\n                        <span>3</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<!--/новая карточка-->\r\n\r\n\r\n<div class=\"modal sights-slider\" id=\"sights-slider\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-contant\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"slider-init\">\r\n                    <div class=\"slide\" *ngFor=\"let item of selectedRoute.places; let i = index\">\r\n                        <div class=\"after-slide\">\r\n                            <div class=\"for-before-wr\">\r\n                                <div class=\"img\" [ngStyle]=\"{'background-image':'url(' + item.image + ')' }\"></div>\r\n                            </div>\r\n                            <div class=\"content-sights\">\r\n                                <p class=\"name\">{{item.name}}</p>\r\n                                <p>{{item.description}}</p>\r\n                                <p>{{item.address}}</p>\r\n\r\n                                <div class=\"for-flex-buttons\">\r\n                                    <div class=\"find-more\">\r\n                                        <p>Find more...</p>\r\n                                    </div>\r\n                                    <div class=\"one\" (click)=\"onPlaceLike(item)\">\r\n                                        <div class=\"bg\" [ngClass]=\"{'active': item.is_liked}\">\r\n                                            <img src=\"../assets/img/like.png\" class=\"img-responsive\" alt=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/view-after-build/view-after-build.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAfterBuildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_main_service__ = __webpack_require__("../../../../../src/app/core/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_geodesy__ = __webpack_require__("../../../../geodesy/npm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_geodesy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_geodesy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_models_route_model__ = __webpack_require__("../../../../../src/app/core/models/route.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_models_coords_model__ = __webpack_require__("../../../../../src/app/core/models/coords.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewAfterBuildComponent = (function () {
    function ViewAfterBuildComponent(router, route, service, params, mapsAPILoader) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.params = params;
        this.mapsAPILoader = mapsAPILoader;
        this.menuShowed = false;
        this.isSliderOpen = true;
        this.isModalVisible = false;
        this.isLoading = true;
        this.routes = [];
        this.polyline = [];
        this.routeIndex = 0;
        this.selectedRoute = new __WEBPACK_IMPORTED_MODULE_5__core_models_route_model__["a" /* RouteModel */]();
        this.placeWindows = [];
        this.mapStyle = this.getMapStyle();
    }
    ViewAfterBuildComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(".content").addClass("all-pages");
        this.service.onPageChange$.next(false);
        this.carouselOne = {
            grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
            slide: 1,
            speed: 400,
            point: {
                visible: false,
                pointStyles: "\n          .ngucarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            position: absolute;\n            width: 100%;\n            bottom: 0px;\n            left: 0;\n            box-sizing: border-box;\n          }\n          .ngucarouselPoint li {\n            display: inline-block;\n            border-radius: 999px;\n            background: rgba(255, 255, 255, 0.55);\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s ease all;\n          }\n          .ngucarouselPoint li.active {\n              background: white;\n              width: 10px;\n          }\n        "
            },
            load: 2,
            loop: true,
            touch: true
        };
        var sub = this.route.params.subscribe(function (params) {
            $('#sights-slider').on('hidden.bs.modal', function () {
                $('.slider-init').slick('unslick');
            });
            _this.mapsAPILoader.load().then(function () {
                _this.zoomBounds = new google.maps.LatLngBounds();
                _this.zoomBounds.extend(new google.maps.LatLng(61.29752, -9.27467));
                _this.zoomBounds.extend(new google.maps.LatLng(44.254402, 43.77806));
            });
            if (params['route_type'] == 'bidirectional') {
                _this.service.getBidirectionalRoute(params['from_lat'], params['from_lng'], params['to_lat'], params['to_lng'], params['categories']).subscribe(function (res) {
                    _this.routes = res;
                    for (var i in res) {
                        var route = _this.routes[i];
                        route.image = _this.service.getImageUrl(route.cover_id);
                        for (var k in route.places) {
                            route.places[k].image = _this.service.getImageUrl(route.places[k].cover_id);
                        }
                    }
                    _this.changeRoute(0);
                    _this.isLoading = false;
                }, function (err) {
                    _this.router.navigate(['/best', params]);
                });
            }
            else {
                _this.service.getCityRoute(params['from_lat'], params['from_lng'], params['categories']).subscribe(function (res) {
                    _this.routes = res;
                    for (var i in res) {
                        var route = _this.routes[i];
                        route.image = _this.service.getImageUrl(route.cover_id);
                        for (var k in route.places) {
                            route.places[k].image = _this.service.getImageUrl(route.places[k].cover_id);
                        }
                    }
                    _this.changeRoute(0);
                    _this.isLoading = false;
                }, function (err) {
                    _this.router.navigate(['/best', params]);
                });
            }
        });
        if ($(window).scrollTop() > 35) {
            $(".fixed-sights").addClass("transformed-small");
        }
        else {
            $(".fixed-sights").removeClass("transformed-small");
        }
        $(window).scroll(function () {
            if ($(window).scrollTop() > 35) {
                $(".fixed-sights").addClass("transformed-small");
            }
            else {
                $(".fixed-sights").removeClass("transformed-small");
            }
        });
    };
    ViewAfterBuildComponent.prototype.getMapStyle = function () {
        return this.service.mapStyle();
    };
    ViewAfterBuildComponent.prototype.getCurvedLine = function (place, nextPlace, isRight) {
        var res = [];
        var p1 = new __WEBPACK_IMPORTED_MODULE_3_geodesy__["LatLonSpherical"](place.lat, place.lng);
        var p3 = new __WEBPACK_IMPORTED_MODULE_3_geodesy__["LatLonSpherical"](nextPlace.lat, nextPlace.lng);
        var middle = p1.midpointTo(p1, p3);
        var dist = p1.distanceTo(p3);
        var head = middle.bearingTo(p3);
        var p2 = p1.rhumbDestinationPoint(dist * 0.75, head + 30 * Math.pow(-1, isRight)); // new LatLonSpherical(middle.lat, middle.lon); //SphericalUtil.ComputeOffset(middle, dist * 0.2, head + 90 * Math.Pow(-1, isRight));
        for (var i = 0; i < 150; i++) {
            var T = i / 150.0;
            var x = Math.pow(1 - T, 2) * p1.lat + 2 * (1 - T) * T * p2.lat + Math.pow(T, 2) * p3.lat;
            var y = Math.pow(1 - T, 2) * p1.lon + 2 * (1 - T) * T * p2.lon + Math.pow(T, 2) * p3.lon;
            res.push(new __WEBPACK_IMPORTED_MODULE_6__core_models_coords_model__["a" /* CoordsModel */](x, y));
        }
        return res;
    };
    ViewAfterBuildComponent.prototype.getRouteMiddle = function (route) {
        var minLat = 1000000.0;
        var minLng = 1000000.0;
        var maxLat = -1000000.0;
        var maxLng = -1000000.0;
        this.zoomBounds = new google.maps.LatLngBounds();
        for (var _i = 0, _a = route.places; _i < _a.length; _i++) {
            var place = _a[_i];
            this.zoomBounds.extend(new google.maps.LatLng(place.lat, place.lng));
            minLat = Math.min(minLat, place.lat);
            minLng = Math.min(minLng, place.lng);
            maxLat = Math.max(maxLat, place.lat);
            maxLng = Math.max(maxLng, place.lng);
        }
        //margin from top for carousel
        var dist = new __WEBPACK_IMPORTED_MODULE_3_geodesy__["LatLonSpherical"](maxLat, minLng).distanceTo(new __WEBPACK_IMPORTED_MODULE_3_geodesy__["LatLonSpherical"](minLat, maxLng));
        var to = new __WEBPACK_IMPORTED_MODULE_3_geodesy__["LatLonSpherical"](maxLat, minLng).rhumbDestinationPoint(dist * 0.5, 0);
        this.zoomBounds.extend(new google.maps.LatLng(to.lat, to.lon));
    };
    ViewAfterBuildComponent.prototype.changeRoute = function (index) {
        this.selectedRoute = this.routes[index];
        this.routeIndex = index;
        this.polyline = [];
        for (var i = 0; i < this.selectedRoute.places.length - 1; i++) {
            var res = this.getCurvedLine(this.selectedRoute.places[i], this.selectedRoute.places[i + 1], i % 2);
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var point = res_1[_i];
                this.polyline.push(point);
            }
        }
        this.clearInfoWin();
        this.getRouteMiddle(this.selectedRoute);
        /*  setTimeout(() => {
            this.isModalVisible = true;
      
            $('.flex-sights').slick({
              slidesToShow: 6,
              slidesToScroll: 1,
              arrows: true,
              dots: false,
              infinite: false,
              responsive: [
                {
                  breakpoint: 1601,
                  settings: {
                    slidesToShow: 6
                  }
                },
                {
                  breakpoint: 1301,
                  settings: {
                    slidesToShow: 3
                  }
                }
              ]
            });
          }, 200);*/
    };
    ViewAfterBuildComponent.prototype.onPlaceLike = function (place) {
        this.service.likePlace(place.id)
            .subscribe(function () {
            if (place.is_liked) {
                place.likes_count -= 1;
            }
            else {
                place.likes_count += 1;
            }
            place.is_liked = !place.is_liked;
        });
    };
    ViewAfterBuildComponent.prototype.onRouteLike = function (route) {
        this.service.likeRoute(route.id)
            .subscribe(function () {
            if (route.is_liked) {
                route.likes_count -= 1;
            }
            else {
                route.likes_count += 1;
            }
            route.is_liked = !route.is_liked;
        });
    };
    ViewAfterBuildComponent.prototype.onRoutePlace = function (index) {
        $("#sights-slider").modal("show");
        console.log(index);
        $('.slider-init').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false
        });
        $('.slider-init').slick('slickGoTo', index, true);
    };
    ViewAfterBuildComponent.prototype.clearInfoWin = function () {
        for (var i in this.placeWindows) {
            this.placeWindows[i] = false;
        }
    };
    ViewAfterBuildComponent.prototype.mapClick = function () {
        this.clearInfoWin();
    };
    ViewAfterBuildComponent.prototype.markerClick = function (i) {
        this.clearInfoWin();
        this.placeWindows[i] = !this.placeWindows[i];
        this.lat = this.selectedRoute.places[i].lat + 0.025;
        this.lng = this.selectedRoute.places[i].lng;
    };
    ViewAfterBuildComponent.prototype.ngAfterViewInit = function () {
    };
    ViewAfterBuildComponent.prototype.openRoutesMenu = function () {
        if (!this.menuShowed) {
            $(".outher").slideDown(200);
            this.menuShowed = !this.menuShowed;
        }
        else {
            $(".outher").slideUp(200);
            this.menuShowed = !this.menuShowed;
        }
    };
    ViewAfterBuildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-after-build',
            template: __webpack_require__("../../../../../src/app/view-after-build/view-after-build.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-after-build/view-after-build.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__core_services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */]])
    ], ViewAfterBuildComponent);
    return ViewAfterBuildComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map