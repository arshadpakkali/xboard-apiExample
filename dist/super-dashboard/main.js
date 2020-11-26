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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/forbidden/forbidden.component */ "./src/app/components/forbidden/forbidden.component.ts");
/* harmony import */ var _components_internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/internal-server-error/internal-server-error.component */ "./src/app/components/internal-server-error/internal-server-error.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_going_live_going_live_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/going-live/going-live.component */ "./src/app/components/going-live/going-live.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/components/invoice/invoice.component.ts");














const routes = [
    {
        path: '',
        component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
        children: [
            {
                path: '',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            },
            {
                path: 'register',
                component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            },
            {
                path: 'forgot_password',
                component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"]
            }
        ],
    },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: 'invoice',
        component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_11__["InvoiceComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: '403',
        component: _components_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_6__["ForbiddenComponent"]
    },
    {
        path: '500',
        component: _components_internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_7__["InternalServerErrorComponent"]
    },
    {
        path: 'going-live',
        component: _components_going_live_going_live_component__WEBPACK_IMPORTED_MODULE_10__["GoingLiveComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'super-dashboard';
        console.log("I am running");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/payment-form/payment-form.component */ "./src/app/components/payment-form/payment-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/internal-server-error/internal-server-error.component */ "./src/app/components/internal-server-error/internal-server-error.component.ts");
/* harmony import */ var _components_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/forbidden/forbidden.component */ "./src/app/components/forbidden/forbidden.component.ts");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "./src/app/interceptors/auth.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_going_live_going_live_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/going-live/going-live.component */ "./src/app/components/going-live/going-live.component.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js");
/* harmony import */ var _pipes_date_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/date.pipe */ "./src/app/pipes/date.pipe.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/components/invoice/invoice.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/info/info.component */ "./src/app/components/info/info.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _components_navbar_notificaton_menu_notificaton_menu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/navbar/notificaton-menu/notificaton-menu.component */ "./src/app/components/navbar/notificaton-menu/notificaton-menu.component.ts");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            ngx_countdown__WEBPACK_IMPORTED_MODULE_20__["CountdownModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_7__["PaymentFormComponent"],
        _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
        _components_internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_14__["InternalServerErrorComponent"],
        _components_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_15__["ForbiddenComponent"],
        _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"],
        _components_going_live_going_live_component__WEBPACK_IMPORTED_MODULE_19__["GoingLiveComponent"],
        _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_22__["InvoiceComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__["NavbarComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_24__["MainComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
        _pipes_date_pipe__WEBPACK_IMPORTED_MODULE_21__["DatePipe"],
        _components_info_info_component__WEBPACK_IMPORTED_MODULE_27__["InfoComponent"],
        _components_navbar_notificaton_menu_notificaton_menu_component__WEBPACK_IMPORTED_MODULE_29__["NotificatonMenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
        ngx_countdown__WEBPACK_IMPORTED_MODULE_20__["CountdownModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_7__["PaymentFormComponent"],
                    _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                    _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                    _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
                    _components_internal_server_error_internal_server_error_component__WEBPACK_IMPORTED_MODULE_14__["InternalServerErrorComponent"],
                    _components_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_15__["ForbiddenComponent"],
                    _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"],
                    _components_going_live_going_live_component__WEBPACK_IMPORTED_MODULE_19__["GoingLiveComponent"],
                    _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_22__["InvoiceComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__["NavbarComponent"],
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_24__["MainComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                    _pipes_date_pipe__WEBPACK_IMPORTED_MODULE_21__["DatePipe"],
                    _components_info_info_component__WEBPACK_IMPORTED_MODULE_27__["InfoComponent"],
                    _components_navbar_notificaton_menu_notificaton_menu_component__WEBPACK_IMPORTED_MODULE_29__["NotificatonMenuComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                    ngx_countdown__WEBPACK_IMPORTED_MODULE_20__["CountdownModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"]
                ],
                providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_payment_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/payment-service.service */ "./src/app/services/payment-service.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");









class DashboardComponent {
    constructor(router, http, paymentservice, ngZone, auth) {
        this.router = router;
        this.http = http;
        this.paymentservice = paymentservice;
        this.ngZone = ngZone;
        this.auth = auth;
        this.products = [];
        this.tools = ['Xpo-Analytics', 'Xpo-Tools'];
        this.analysisProducts = [];
        this.toolsProduct = [];
        this.userSubscribedProducts = [];
        this.subscribedAnalysis = [];
    }
    ngOnInit() {
        //  this.token = this.auth.getAuthentication();
        //  this.token = localStorage.getItem('token');
        //  this.http.get(`${environment.url}/api/product`).subscribe((response:any)=>{
        //   console.log(response);
        //   this.products = response;
        //   this.products.forEach((data)=>{
        //     if (data.type == this.tools[0]) {
        //       this.analysisProducts.push(data);
        //     } else if(data.type == this.tools[1]) {
        //       this.toolsProduct.push(data);
        //     }
        //   })
        // });
        // this.fetchUser();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_payment_service_service__WEBPACK_IMPORTED_MODULE_3__["PaymentServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 4, vars: 0, consts: [[1, "grid-container"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".grid-container[_ngcontent-%COMP%] {\n    display: grid;\n    width:100%;\n    height:100%;\n    grid-template-rows: 5% 90% 5%;\n    overflow: hidden;\n}\n.grid-head[_ngcontent-%COMP%]{\n    display: flex;\n    width:100%;\n    height:100%;\n    grid-template-columns: 40% 60%;\n    overflow: hidden;\n    background-color:   black;\n    \n}\n.flex-head-item-1[_ngcontent-%COMP%]{\n    width:100%;\n    height:100%;\n    background: black ;\n    overflow: hidden;\n    background-color:   black\n    \n}\n.flex-head-item-2[_ngcontent-%COMP%]{\n    width:100%;\n    height:100%;\n    background: #83F52C ;\n    overflow: hidden;\n    background-color:   #83F52C\n}\n.grid-parent[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-rows:65% 35%;\n    width: 100%;\n    height:100%;\n    row-gap: 5%;\n    padding:2%;\n    box-sizing: border-box;\n    background-color: white;\n}\n.grid-item[_ngcontent-%COMP%]{\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);\n    -webkit-box-decoration-break: clone;\n            box-decoration-break: clone;\n\n}\n.flex-parent[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color:#00203FFF ;\n    \n    align-items: center;\n    box-sizing: border-box;\n    padding-top: 5%;\n    padding-bottom: 2%;\n    padding-right: 2%;\n    padding-left: 2%;\n}\n.grid-child[_ngcontent-%COMP%]{\n    display: grid;\n    width:100%;\n    height:100%;\n    grid-template-rows: 14% 76% 10%;\n    \n    margin-left:1%;\n    margin-right: 1%;\n    \n    \n    \n    margin-bottom:1%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    -webkit-box-decoration-break: clone;\n            box-decoration-break: clone;\n}\n.terms[_ngcontent-%COMP%]{\n\n    display: flex;\n    width:100%;\n    height:100%;\n    margin-left:1%;\n    margin-right: 1%;\n    margin-top: .1%;\n    margin-bottom:1%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);\n    -webkit-box-decoration-break: clone;\n            box-decoration-break: clone;\n\n}\n.grid-renew[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    width: 100%;\n    background-color:#32cd95;\n}\n.grid-child-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 0 1 40%;\n    \n    \n    justify-content:flex-start;\n    align-items: center;\n    background-color:#32cd95;\n    color: white;\n    font-weight: bolder;\n    font-size: x-large;\n    text-align: center;\n    padding-left: 3%;\n    \n    \n    font-family:Arial, Helvetica, sans-serif;\n    \n    \n}\n.grid-child-body[_ngcontent-%COMP%] {\n    display: flex;\n    padding-top: 5%;\n    \n    \n    \n    \n    padding-left:3.5%;\n    padding-right: 3.5%;\n    background-color:#32cd95;\n    color: white;\n    \n    font-size: large;\n    font-style:italic;\n\n}\n.grid-child-footer[_ngcontent-%COMP%] {\n    \n    \n    display:flex;\n    \n    \n    background-color:white;\n    color: white;\n    justify-content: flex-end;\n}\n.grid-head-item-2[_ngcontent-%COMP%]{\n    display: flex;\n    width:100%;\n    height:100%;\n    background: black ;\n    overflow: hidden;\n    \n}\n.fw-20[_ngcontent-%COMP%] {\n    font-size:30px;\n    font-weight: bold;\n    color:white;\n     \n     padding-left: 1%;\n     padding-bottom: 1%;\n     padding-top: 0.5%;\n     font-family:Arial, Helvetica, sans-serif;\n}\n.fw-22[_ngcontent-%COMP%] {\n    font-size:15px;\n    font-weight: bold;\n    color:black;\n     \n     padding-left: 1%;\n     padding-bottom: 1%;\n     padding-top: 1%;\n     font-family:Arial, Helvetica, sans-serif;\n}\n.fw-21[_ngcontent-%COMP%] {\n    font-size :15px;\n    font-weight: lighter;\n    color:white;\n    padding-left: 50%;\n    padding-top: 3px;\n     \n    \n}\n.flex-label[_ngcontent-%COMP%] {\n    position: absolute;\n    top:0; \n    left:0;\n    z-index:1;\n    background-color:#32cd95;\n    color: white;\n    \n    padding-left: 1%;\n    padding-bottom: 0.2%;\n    padding-top: 0.2%;\n    border:0;\n    \n    border-bottom-right-radius: 20px;\n    width: 20%;\n    font-family:Arial, Helvetica, sans-serif;\n    \n}\n.flex-item[_ngcontent-%COMP%]{\n    display: flex;\n    width:100%;\n    height:100%;\n    \n    justify-content: center;\n    align-items: center;\n    \n    box-sizing: border-box;\n    \n}\n.nav-link-color[_ngcontent-%COMP%] {\n    color:white;\n    font: 20px 'Lato sans-serif';\n    margin: 0px 20px 0px 0px;\n    text-decoration: none;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLHlCQUF5Qjs7QUFFN0I7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjs7QUFFSjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxtQ0FBMkI7WUFBM0IsMkJBQTJCOztBQUUvQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEI7MkJBQ3VCO0lBQ3ZCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLG1DQUEyQjtZQUEzQiwyQkFBMkI7O0FBRS9CO0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHdDQUF3Qzs7SUFFeEM7eUJBQ3FCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCO3lCQUNxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFlBQVk7OztJQUdaLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjtBQUtBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0tBQ1YseUJBQXlCO0tBQ3pCLGdCQUFnQjtLQUNoQixrQkFBa0I7S0FDbEIsaUJBQWlCO0tBQ2pCLHdDQUF3QztBQUM3QztBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0tBQ1YseUJBQXlCO0tBQ3pCLGdCQUFnQjtLQUNoQixrQkFBa0I7S0FDbEIsZUFBZTtLQUNmLHdDQUF3QztBQUM3QztBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtLQUNmLHlCQUF5Qjs7QUFFOUI7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wsTUFBTTtJQUNOLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1Isd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1Ysd0NBQXdDOztBQUU1QztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLHFCQUFxQjs7QUFFekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNSUgOTAlIDUlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZ3JpZC1oZWFke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA2MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIGJsYWNrO1xuICAgIFxufSBcbi5mbGV4LWhlYWQtaXRlbS0xe1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgYmFja2dyb3VuZDogYmxhY2sgO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICBibGFja1xuICAgIFxufVxuLmZsZXgtaGVhZC1pdGVtLTJ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjODNGNTJDIDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAgIzgzRjUyQ1xufVxuLmdyaWQtcGFyZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czo2NSUgMzUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHJvdy1nYXA6IDUlO1xuICAgIHBhZGRpbmc6MiU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5ncmlkLWl0ZW17XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjQpO1xuICAgIGJveC1kZWNvcmF0aW9uLWJyZWFrOiBjbG9uZTtcblxufVxuXG4uZmxleC1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDIwM0ZGRiA7XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gICAgcGFkZGluZy1yaWdodDogMiU7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbn1cblxuLmdyaWQtY2hpbGR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTQlIDc2JSAxMCU7XG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbiAgICBtYXJnaW4tbGVmdDoxJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgIC8qIG1heC13aWR0aDogMjUlOyAqL1xuICAgIC8qIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4OyAqL1xuICAgIC8qIG1hcmdpbi10b3A6IDMwcHg7ICovXG4gICAgbWFyZ2luLWJvdHRvbToxJTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuOCk7XG4gICAgYm94LWRlY29yYXRpb24tYnJlYWs6IGNsb25lO1xufVxuLnRlcm1ze1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OjElO1xuICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgbWFyZ2luLXRvcDogLjElO1xuICAgIG1hcmdpbi1ib3R0b206MSU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjgpO1xuICAgIGJveC1kZWNvcmF0aW9uLWJyZWFrOiBjbG9uZTtcblxufVxuXG4uZ3JpZC1yZW5ldyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMmNkOTU7XG59XG4uZ3JpZC1jaGlsZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMCAxIDQwJTtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgLyogdG9wOjA7ICovXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMmNkOTU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xuICAgIC8qIG1hcmdpbi10b3A6MS41JTsgKi9cbiAgICAvKiBtYXJnaW4tbGVmdDozLjUlOyAqL1xuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgXG4gICAgLyogcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICovXG59XG4uZ3JpZC1jaGlsZC1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgLyogdG9wOjEwOyAqL1xuICAgIC8qIGRpc3BsYXk6ZmxleDsgKi9cbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDsgKi9cbiAgICBwYWRkaW5nLWxlZnQ6My41JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzMyY2Q5NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LXN0eWxlOml0YWxpYztcblxufVxuLmdyaWQtY2hpbGQtZm9vdGVyIHtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgLyogdG9wOjEwOyAqL1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmdyaWQtaGVhZC1pdGVtLTJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrIDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIFxufVxuXG5cblxuXG4uZnctMjAge1xuICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOndoaXRlO1xuICAgICAvKiBiYWNrZ3JvdW5kOiAjMWYzMzQyOyAqL1xuICAgICBwYWRkaW5nLWxlZnQ6IDElO1xuICAgICBwYWRkaW5nLWJvdHRvbTogMSU7XG4gICAgIHBhZGRpbmctdG9wOiAwLjUlO1xuICAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLmZ3LTIyIHtcbiAgICBmb250LXNpemU6MTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjpibGFjaztcbiAgICAgLyogYmFja2dyb3VuZDogIzFmMzM0MjsgKi9cbiAgICAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgICAgcGFkZGluZy1ib3R0b206IDElO1xuICAgICBwYWRkaW5nLXRvcDogMSU7XG4gICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4uZnctMjEge1xuICAgIGZvbnQtc2l6ZSA6MTVweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwJTtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAvKiBiYWNrZ3JvdW5kOiAjMWYzMzQyOyAqL1xuICAgIFxufVxuXG5cblxuLmZsZXgtbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDsgXG4gICAgbGVmdDowO1xuICAgIHotaW5kZXg6MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMmNkOTU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8qIHBhZGRpbmc6MSU7ICovXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yJTtcbiAgICBwYWRkaW5nLXRvcDogMC4yJTtcbiAgICBib3JkZXI6MDtcbiAgICAvKiBib3JkZXItcmFkaXVzOjEwcHg7ICovXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIFxufVxuXG4uZmxleC1pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICAvKiBib3JkZXI6MXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogcGFkZGluZzoxMHB4OyAqL1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLyogbWFyZ2luOiAxMHB4OyAqL1xufVxuLm5hdi1saW5rLWNvbG9yIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250OiAyMHB4ICdMYXRvIHNhbnMtc2VyaWYnO1xuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_payment_service_service__WEBPACK_IMPORTED_MODULE_3__["PaymentServiceService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

//import { fa, faTv, faRocket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';



class FooterComponent {
    constructor() {
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"];
        this.faTelegram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTelegram"];
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
        this.faYoutube = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faYoutube"];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 4, consts: [[1, "footer-wrapper"], [1, "footer"], [2, "font-size", "larger", "font-weight", "bold"], ["href", "https://www.facebook.com/Xponential.Analytics ", "target", "_blank"], ["size", "2x", 2, "color", "#34a4eb", 3, "icon"], ["href", "https://www.instagram.com/xponential.analytics/", "target", "_blank"], ["size", "2x", 2, "color", "#C13584", 3, "icon"], ["href", "https://twitter.com/xpoanalytics", "target", "_blank"], ["href", "https://www.youtube.com/channel/UCK7_7Hh45nQPaoaEGP9yHYw", "target", "_blank"], ["size", "2x", 2, "color", "#c4302b", 3, "icon"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Follow us at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFacebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInstagram);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTwitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faYoutube);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".footer-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    width:30%;\n    margin-left:70%;\n    height:100%;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    color: black;\n}\n\n.footer[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7SUFDZixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6MzAlO1xuICAgIG1hcmdpbi1sZWZ0OjcwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/forbidden/forbidden.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/forbidden/forbidden.component.ts ***!
  \*************************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ForbiddenComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForbiddenComponent.ɵfac = function ForbiddenComponent_Factory(t) { return new (t || ForbiddenComponent)(); };
ForbiddenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForbiddenComponent, selectors: [["app-forbidden"]], decls: 2, vars: 0, template: function ForbiddenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "forbidden works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yYmlkZGVuL2ZvcmJpZGRlbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForbiddenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forbidden',
                templateUrl: './forbidden.component.html',
                styleUrls: ['./forbidden.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ForgotPasswordComponent {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.emailForm = this.fb.group({
            'email': ''
        });
    }
    submitForm() {
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url}/api/user/forgot_password`, {
            email: this.emailForm.value.email
        }).subscribe((data) => {
            console.log(data);
            this.data = 'Please check your mail for password link';
        }, (err) => {
            console.log(err);
            this.data = 'Looks like email is not correct';
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 8, vars: 2, consts: [[1, "flex-item-1", 3, "formGroup"], ["type", "text", "formControlName", "email", "placeholder", "enter your email", 1, "input-style"], [1, "button-flex"], [1, "button", 3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_4_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.emailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".forgot_password[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding:5%;\n}\n.flex-item-1[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.input-style[_ngcontent-%COMP%] {\n    background: white;\n    color: #dedbdb;\n    padding: 9px 20px;\n    text-align: left;\n    border:0;\n    border-radius: 6px;\n    font-size: 15px;\n    font-weight: 300;\n    margin-bottom: 14px;\n}\n.button[_ngcontent-%COMP%] {\n    color: #23394a;\n    background: white;\n    padding: 3.5%;\n    border:0;\n    border-radius: 10px;\n    padding-left: 2%;\n}\n.button-flex[_ngcontent-%COMP%] {\n    flex:  3 1 20%; \n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmdvdF9wYXNzd29yZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOjUlO1xufVxuLmZsZXgtaXRlbS0xIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5pbnB1dC1zdHlsZSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6ICNkZWRiZGI7XG4gICAgcGFkZGluZzogOXB4IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXI6MDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cbi5idXR0b24ge1xuICAgIGNvbG9yOiAjMjMzOTRhO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDMuNSU7XG4gICAgYm9yZGVyOjA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xufVxuLmJ1dHRvbi1mbGV4IHtcbiAgICBmbGV4OiAgMyAxIDIwJTsgXG4gfVxuIFxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-password',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/going-live/going-live.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/going-live/going-live.component.ts ***!
  \***************************************************************/
/*! exports provided: GoingLiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoingLiveComponent", function() { return GoingLiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js");



const _c0 = function (a0) { return { leftTime: a0, format: "HH:mm:ss" }; };
class GoingLiveComponent {
    constructor() {
        this.countdown_start_time = new Date(new Date().getFullYear(), 9, 3, 13).valueOf();
        this.current_time = new Date().valueOf();
        this.time_left = (-this.current_time + this.countdown_start_time) / 1000;
    }
    ngOnInit() {
    }
}
GoingLiveComponent.ɵfac = function GoingLiveComponent_Factory(t) { return new (t || GoingLiveComponent)(); };
GoingLiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoingLiveComponent, selectors: [["app-going-live"]], decls: 5, vars: 3, consts: [[1, "grid-container"], [2, "font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", "color", "white", "font-size", "50px", "position", "absolute", "top", "5%", "left", "41%"], [2, "font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", "color", "white", "font-size", "40px", "position", "absolute", "top", "15%", "left", "47%", 3, "config"], ["src", "/assets/asset/X-2.jpeg", 2, "width", "35%", "height", "60%", "position", "absolute", "top", "30%", "left", "35%"]], template: function GoingLiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "COMING LIVE IN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "countdown", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.time_left));
    } }, directives: [ngx_countdown__WEBPACK_IMPORTED_MODULE_1__["CountdownComponent"]], styles: [".grid-container[_ngcontent-%COMP%] {\n    display: grid;\n    width:100%;\n    height:100%;\n    grid-template-columns: 100%;\n    overflow: hidden;\n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb2luZy1saXZlL2dvaW5nLWxpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nb2luZy1saXZlL2dvaW5nLWxpdmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoingLiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-going-live',
                templateUrl: './going-live.component.html',
                styleUrls: ['./going-live.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/info/info.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/info/info.component.ts ***!
  \***************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");




class InfoComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        console.log(this.data);
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 6, vars: 1, consts: [[1, "info"], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".info[_ngcontent-%COMP%] {\n    width:100%;\n    height:100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvL2luZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luZm8vaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8ge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info',
                templateUrl: './info.component.html',
                styleUrls: ['./info.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/internal-server-error/internal-server-error.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/internal-server-error/internal-server-error.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InternalServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalServerErrorComponent", function() { return InternalServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InternalServerErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
InternalServerErrorComponent.ɵfac = function InternalServerErrorComponent_Factory(t) { return new (t || InternalServerErrorComponent)(); };
InternalServerErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InternalServerErrorComponent, selectors: [["app-internal-server-error"]], decls: 2, vars: 0, template: function InternalServerErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "internal-server-error occured!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50ZXJuYWwtc2VydmVyLWVycm9yL2ludGVybmFsLXNlcnZlci1lcnJvci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternalServerErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-internal-server-error',
                templateUrl: './internal-server-error.component.html',
                styleUrls: ['./internal-server-error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/invoice/invoice.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.ts ***!
  \*********************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function InvoiceComponent_tbody_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.invoice_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.user_firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.user_lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.user_emailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.user_address1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.user_address_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.user_address_state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.user_address_pincode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.product_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.date_of_invoice);
} }
class InvoiceComponent {
    constructor(http) {
        this.http = http;
        this.transactions = [];
    }
    ngOnInit() {
        this.fetchUser();
    }
    fetchUser() {
        // this.analysisProducts = [];
        // this.toolsProduct = [];
        //this.subscribedAnalysis = [];
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url}/api/user/get-user-by-token`, {}).subscribe((data) => {
            this.user = data;
            console.log(this.user);
            this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url}/api/payment/fetch-transactions`, { "emailAddress": this.user.emailAddress }).subscribe((tdata) => {
                this.transactions = tdata;
            });
        });
    }
}
InvoiceComponent.ɵfac = function InvoiceComponent_Factory(t) { return new (t || InvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
InvoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvoiceComponent, selectors: [["app-invoice"]], decls: 43, vars: 1, consts: [[1, "grid-container"], [1, "grid-head"], [1, "flex-head-item-1"], [1, "fw-20"], [1, "grid-body"], [1, "container"], [4, "ngFor", "ngForOf"]], template: function InvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Xponential");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Invoice No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Product Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Date of Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, InvoiceComponent_tbody_42_Template, 24, 11, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transactions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);\n@charset \"UTF-8\";\nbody[_ngcontent-%COMP%] {\n  font-family: 'Open Sans', sans-serif;\n  \n  \n  color:#A7A1AE;\n  background-color:#1F2739;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #4DC3FA;\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  \n  \n  color: #FB667A;\n}\nh2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  \n  text-transform: uppercase;\n  color: #FB667A;\n  text-decoration: none;\n}\n.blue[_ngcontent-%COMP%] { color: #185875; }\n.yellow[_ngcontent-%COMP%] { color: #FFF842; }\n.container[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      \n      align-items: center;\n\t  font-size: large;\n  text-align: center;\n  color: white;\n  padding-top: 1%;\n}\n.container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n\t  font-weight: normal;\n\t  font-size: 1em;\n\t box-shadow: 0 2px 2px -2px #0E1119;\n}\n.container[_ngcontent-%COMP%] {\n\t  text-align: left;\n\t  overflow: hidden;\n      \n  display: table;\n  padding-top: 1;\n}\n.container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n\t  \n  \n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n\t  background-color: #c1c8d4;\n}\n\n.container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n\t  background-color: #2C3446;\n}\n.container[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n      background-color: black;\n      text-align: center;\n      width: -webkit-fit-content;\n      width: -moz-fit-content;\n      width: fit-content;\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content;\n}\n.container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child { color: #FB667A; }\n.container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n   background-color: #464A52;\nbox-shadow: 0 6px 6px -6px #0E1119;\n}\n.container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover {\n  background-color:grey;\n  color:white;\n  font-weight: bold;\n  \n  box-shadow: white -1px 1px, white -2px 2px, white -3px 3px, white -4px 4px, white -5px 5px, white -6px 6px;\n  transform: translate3d(6px, -6px, 0);\n  \n  transition-delay: 0s;\n\t  transition-duration: 0.4s;\n\t  transition-property: all;\n  transition-timing-function: line;\n}\n@media (max-width: 800px) {\n.container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4), .container[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) { display: none; }\n}\n.grid-container[_ngcontent-%COMP%] {\n    display: grid;\n    width:100%;\n    height:100%;\n    grid-template-rows: 5% 95%;\n    overflow: hidden;\n}\n.grid-head[_ngcontent-%COMP%]{\n    display: flex;\n    width:100%;\n    height:100%;\n    grid-template-columns: 40% 60%;\n    overflow: hidden;\n    background-color:   black;\n    \n}\n.flex-head-item-1[_ngcontent-%COMP%]{\n    width:100%;\n    height:100%;\n    background: black ;\n    overflow: hidden;\n    background-color:   black\n    \n}\n.fw-20[_ngcontent-%COMP%] {\n    font-size:30px;\n    font-weight: bold;\n    color:white;\n     \n     padding-left: 1%;\n     padding-bottom: 1%;\n     padding-top: 0.5%;\n     font-family:Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMEVBQTBFO0FBRDFFLGdCQUFnQjtBQUdoQjtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUEsUUFBUSxjQUFjLEVBQUU7QUFDeEIsVUFBVSxjQUFjLEVBQUU7QUFFMUI7TUFDTSx1QkFBdUI7TUFDdkIsbUJBQW1CO0dBQ3RCLGdCQUFnQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtHQUNHLG1CQUFtQjtHQUNuQixjQUFjO0VBR1Isa0NBQWtDO0FBQzNDO0FBRUE7R0FDRyxnQkFBZ0I7R0FDaEIsZ0JBQWdCO01BQ2Isb0JBQW9CO0VBQ3hCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBRUE7R0FDRztxQkFDa0I7RUFDbkI7c0JBQ29CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUVBLHFDQUFxQztBQUNyQztHQUNHLHlCQUF5QjtBQUM1QjtBQUVBLHNDQUFzQztBQUN0QztHQUNHLHlCQUF5QjtBQUM1QjtBQUVBO01BQ00sdUJBQXVCO01BQ3ZCLGtCQUFrQjtNQUNsQiwwQkFBa0I7TUFBbEIsdUJBQWtCO01BQWxCLGtCQUFrQjtNQUNsQiwyQkFBbUI7TUFBbkIsd0JBQW1CO01BQW5CLG1CQUFtQjtBQUN6QjtBQUVBLDRCQUE0QixjQUFjLEVBQUU7QUFFNUM7R0FDRyx5QkFBeUI7QUFHbkIsa0NBQWtDO0FBQzNDO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQjs7RUFFakIsMEdBQTBHO0VBQzFHLG9DQUFvQzs7RUFFcEMsb0JBQW9CO0dBQ25CLHlCQUF5QjtHQUN6Qix3QkFBd0I7RUFDekIsZ0NBQWdDO0FBQ2xDO0FBRUE7QUFDQTs2QkFDNkIsYUFBYSxFQUFFO0FBQzVDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLHlCQUF5Qjs7QUFFN0I7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjs7QUFFSjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0tBQ1YseUJBQXlCO0tBQ3pCLGdCQUFnQjtLQUNoQixrQkFBa0I7S0FDbEIsaUJBQWlCO0tBQ2pCLHdDQUF3QztBQUM3QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw0MDAsNzAwKTtcblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgLyogZm9udC13ZWlnaHQ6IDMwMDsgKi9cbiAgLyogbGluZS1oZWlnaHQ6IDEuNDJlbTsgKi9cbiAgY29sb3I6I0E3QTFBRTtcbiAgYmFja2dyb3VuZC1jb2xvcjojMUYyNzM5O1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0REMzRkE7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogbGluZS1oZWlnaHQ6MWVtOyAqL1xuICAvKiBwYWRkaW5nLWJvdHRvbTogMmVtOyAqL1xuICBjb2xvcjogI0ZCNjY3QTtcbn1cblxuaDIgYSB7XG4gIC8qIGZvbnQtd2VpZ2h0OiA3MDA7ICovXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjRkI2NjdBO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ibHVlIHsgY29sb3I6ICMxODU4NzU7IH1cbi55ZWxsb3cgeyBjb2xvcjogI0ZGRjg0MjsgfVxuXG4uY29udGFpbmVyIHRoIGgxIHtcbiAgICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ICBmb250LXNpemU6IGxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDElO1xufVxuXG4uY29udGFpbmVyIHRkIHtcblx0ICBmb250LXdlaWdodDogbm9ybWFsO1xuXHQgIGZvbnQtc2l6ZTogMWVtO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAtMnB4ICMwRTExMTk7XG5cdCAgIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IC0ycHggIzBFMTExOTtcblx0ICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggLTJweCAjMEUxMTE5O1xufVxuXG4uY29udGFpbmVyIHtcblx0ICB0ZXh0LWFsaWduOiBsZWZ0O1xuXHQgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cbiAgZGlzcGxheTogdGFibGU7XG4gIHBhZGRpbmctdG9wOiAxO1xufVxuXG4uY29udGFpbmVyIHRkLCAuY29udGFpbmVyIHRoIHtcblx0ICAvKiBwYWRkaW5nLWJvdHRvbTogMiU7XG5cdCAgcGFkZGluZy10b3A6IDIlOyAqL1xuICAvKiBwYWRkaW5nLWxlZnQ6MiU7XG4gIHBhZGRpbmctcmlnaHQ6IDIlOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEJhY2tncm91bmQtY29sb3Igb2YgdGhlIG9kZCByb3dzICovXG4uY29udGFpbmVyIHRyOm50aC1jaGlsZChvZGQpIHtcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjOGQ0O1xufVxuXG4vKiBCYWNrZ3JvdW5kLWNvbG9yIG9mIHRoZSBldmVuIHJvd3MgKi9cbi5jb250YWluZXIgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzNDQ2O1xufVxuXG4uY29udGFpbmVyIHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLmNvbnRhaW5lciB0ZDpmaXJzdC1jaGlsZCB7IGNvbG9yOiAjRkI2NjdBOyB9XG5cbi5jb250YWluZXIgdHI6aG92ZXIge1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NEE1Mjtcbi13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggNnB4IC02cHggIzBFMTExOTtcblx0ICAgLW1vei1ib3gtc2hhZG93OiAwIDZweCA2cHggLTZweCAjMEUxMTE5O1xuXHQgICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDZweCAtNnB4ICMwRTExMTk7XG59XG5cbi5jb250YWluZXIgdGQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgXG4gIGJveC1zaGFkb3c6IHdoaXRlIC0xcHggMXB4LCB3aGl0ZSAtMnB4IDJweCwgd2hpdGUgLTNweCAzcHgsIHdoaXRlIC00cHggNHB4LCB3aGl0ZSAtNXB4IDVweCwgd2hpdGUgLTZweCA2cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNnB4LCAtNnB4LCAwKTtcbiAgXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuXHQgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG5cdCAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4uY29udGFpbmVyIHRkOm50aC1jaGlsZCg0KSxcbi5jb250YWluZXIgdGg6bnRoLWNoaWxkKDQpIHsgZGlzcGxheTogbm9uZTsgfVxufVxuLmdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1JSA5NSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ncmlkLWhlYWR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAgYmxhY2s7XG4gICAgXG59IFxuLmZsZXgtaGVhZC1pdGVtLTF7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjayA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIGJsYWNrXG4gICAgXG59XG4uZnctMjAge1xuICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOndoaXRlO1xuICAgICAvKiBiYWNrZ3JvdW5kOiAjMWYzMzQyOyAqL1xuICAgICBwYWRkaW5nLWxlZnQ6IDElO1xuICAgICBwYWRkaW5nLWJvdHRvbTogMSU7XG4gICAgIHBhZGRpbmctdG9wOiAwLjUlO1xuICAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invoice',
                templateUrl: './invoice.component.html',
                styleUrls: ['./invoice.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class LandingComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    forgotPassword() {
        // this.http.post(`${environment.url}`,{
        // })
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 14, vars: 0, consts: [[1, "grid-container"], [1, "grid-item-1"], ["src", "/assets/asset/X-3.png", 1, "responsive"], [1, "grid-item-2"], [1, "grid-item-2-1"], [1, "grid-item-2-2"], ["routerLinkActive", "active", "routerLink", "/", 1, "link-color"], ["routerLinkActive", "active", "routerLink", "/register", 1, "link-color"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Xponential");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".grid-item-1[_ngcontent-%COMP%] {\n    background:white;\n    color: black;\n    box-sizing: border-box;\n    width:100%;\n    height:100%;\n    box-sizing: border-box;\n    position: relative;\n}\n\n\n.grid-item-2-1[_ngcontent-%COMP%] {\n    display: flex;\n    width:100%;\n    height:25%;\n    box-sizing: border-box;\n    color:white;\n    font-size:xxx-large;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n}\n\n\n.grid-item-2-2[_ngcontent-%COMP%]{\n    display: flex;\n    width:100%;\n    height:75%;\n    box-sizing: border-box;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n\n.flex-item-1[_ngcontent-%COMP%] {\n    display:flex;\n    flex-direction: column;\n    \n    width:100%;\n    height:75%;\n    box-sizing: border-box;\n    \n}\n\n\n.flex-item-parent[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    height: 75%;\n}\n\n\n.grid-item-2[_ngcontent-%COMP%] {\n    width:100%;\n    height:100%;\n    \n    \n    background: #00203FFF;\n    \n    color: white;\n    overflow-y: scroll;\n    padding-bottom: 2%;\n    box-sizing: border-box;\n}\n\n\n.fw-20[_ngcontent-%COMP%] {\n    font-size:60px;\n    font-weight: bold;\n    color:white;\n    margin-left: 25%;\n    margin-right: 5%;\n    font-family:Arial, Helvetica, sans-serif;\n}\n\n\n.fw-10[_ngcontent-%COMP%] {\n    font:40px ;\n    \n    \n    color:white;\n    font-family:Arial, Helvetica, sans-serif;\n    font-weight: bolder;\n    margin-left: 32%;\n    margin-right: 5%;\n}\n\n\n.link-color[_ngcontent-%COMP%] {\n    color:white;\n    font-family:Arial, Helvetica, sans-serif;\n    margin: 0px 20px 0px 0px;\n    text-decoration: none;\n}\n\n\n.active[_ngcontent-%COMP%] {\n    border-bottom: 2px solid white;\n\n}\n\n\n.flex-item-1-1[_ngcontent-%COMP%] {\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   flex-direction: column;\n   width: 100%;\n   height:75%;\n}\n\n\n.responsive[_ngcontent-%COMP%] {\n    width: 40%;\n    height: 40vh;\n    background-size: cover;\n    background-position: center;\n    padding-top: 25%;\n    margin-left: 30%;\n    margin-right: 5%;\n\n  }\n\n\n.nav-link-color[_ngcontent-%COMP%] {\n    color:white;\n    font: 20px 'Lato sans-serif';\n    margin: 0px 20px 0px 0px;\n    text-decoration: none;\n\n}\n\n\n@media only screen and (min-width: 320px) and (max-width: 479px){\n    .grid-container[_ngcontent-%COMP%] {\n        display: grid;\n        width:100%;\n        height:100%;\n        background: #00203FFF;\n        \n        color: white;\n        \n    }\n\n    .grid-item-2-1[_ngcontent-%COMP%] {\n        display: flex;\n        width:100%;\n        height:25%;\n        box-sizing: border-box;\n        color:white;\n        font-size:large;\n        text-align: center;\n        align-items: center;\n        justify-content: center;\n        \n    }\n\n    .grid-item-2-2[_ngcontent-%COMP%]{\n        display: flex;\n        width:100%;\n        height: auto;\n        box-sizing: border-box;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        background: #00203FFF;\n    }\n\n    \n\n    .grid-item-1[_ngcontent-%COMP%] {\n        display:none;\n    }\n  }\n\n\n@media only screen and (min-width: 480px) and (max-width: 767px){ \n    .grid-container[_ngcontent-%COMP%] {\n        display: grid;\n        width:100%;\n        height:100%;\n        grid-template-columns: 60% 40%;\n    }\n}\n\n\n@media only screen and (min-width: 768px) and (max-width: 991px){ \n    .grid-container[_ngcontent-%COMP%] {\n    display: grid;\n    width:100%;\n    height:100%;\n    grid-template-columns: 60% 40%;\n} \n\n}\n\n\n@media only screen and (min-width: 992px){ \n    .grid-container[_ngcontent-%COMP%] {\n        display: grid;\n        width:100%;\n        height:100%;\n        grid-template-columns: 60% 40%;\n    }\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7OztBQUdIO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsVUFBVTtJQUNWLHNCQUFzQjs7QUFFMUI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsV0FBVztBQUNmOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHdDQUF3QztBQUM1Qzs7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSw4QkFBOEI7O0FBRWxDOzs7QUFFQTtHQUNHLGFBQWE7R0FDYix1QkFBdUI7R0FDdkIsbUJBQW1CO0dBQ25CLHNCQUFzQjtHQUN0QixXQUFXO0dBQ1gsVUFBVTtBQUNiOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7RUFFbEI7OztBQUVGO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIscUJBQXFCOztBQUV6Qjs7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixVQUFVO1FBQ1YsV0FBVztRQUNYLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLGFBQWE7UUFDYixVQUFVO1FBQ1YsVUFBVTtRQUNWLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsdUJBQXVCOztJQUUzQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixVQUFVO1FBQ1YsWUFBWTtRQUNaLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixxQkFBcUI7SUFDekI7Ozs7SUFJQTtRQUNJLFlBQVk7SUFDaEI7RUFDRjs7O0FBRUY7SUFDSTtRQUNJLGFBQWE7UUFDYixVQUFVO1FBQ1YsV0FBVztRQUNYLDhCQUE4QjtJQUNsQztBQUNKOzs7QUFFQTtJQUNJO0lBQ0EsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsOEJBQThCO0FBQ2xDOztBQUVBOzs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLFVBQVU7UUFDVixXQUFXO1FBQ1gsOEJBQThCO0lBQ2xDO0NBQ0giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59ICovXG5cblxuLmdyaWQtaXRlbS0xIHtcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ncmlkLWl0ZW0tMi0xIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjI1JTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZTp4eHgtbGFyZ2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ncmlkLWl0ZW0tMi0ye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6NzUlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZmxleC1pdGVtLTEge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0Ojc1JTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIFxufVxuXG4uZmxleC1pdGVtLXBhcmVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBoZWlnaHQ6IDc1JTtcbn1cblxuLmdyaWQtaXRlbS0yIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIC8qIGJhY2tncm91bmQ6bGlnaHRncmV5OyAqL1xuICAgIC8qIGJhY2tncm91bmQ6IzIzMzk0YTsgKi9cbiAgICBiYWNrZ3JvdW5kOiAjMDAyMDNGRkY7XG4gICAgLyogYmFja2dyb3VuZDp3aGl0ZTsgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZnctMjAge1xuICAgIGZvbnQtc2l6ZTo2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uZnctMTAge1xuICAgIGZvbnQ6NDBweCA7XG4gICAgLyogZm9udC1zaXplOnB4OyAqL1xuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBtYXJnaW4tbGVmdDogMzIlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5saW5rLWNvbG9yIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hY3RpdmUge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcblxufVxuXG4uZmxleC1pdGVtLTEtMSB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0Ojc1JTtcbn1cblxuLnJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuXG4gIH1cblxuLm5hdi1saW5rLWNvbG9yIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250OiAyMHB4ICdMYXRvIHNhbnMtc2VyaWYnO1xuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ3OXB4KXtcbiAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMjAzRkZGO1xuICAgICAgICAvKiBiYWNrZ3JvdW5kOndoaXRlOyAqL1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTsgKi9cbiAgICB9XG5cbiAgICAuZ3JpZC1pdGVtLTItMSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDoyNSU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBmb250LXNpemU6bGFyZ2U7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5ncmlkLWl0ZW0tMi0ye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAyMDNGRkY7XG4gICAgfVxuXG4gICAgXG5cbiAgICAuZ3JpZC1pdGVtLTEge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7IFxuICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSA0MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpeyBcbiAgICAuZ3JpZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSA0MCU7XG59IFxuXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpeyBcbiAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xuICAgIH1cbiB9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_userauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/userauth.service */ "./src/app/services/userauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
} }
function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);
} }
const _c0 = function (a0) { return { "border-bottom": a0 }; };
const _c1 = function (a0) { return { "background": a0 }; };
class LoginComponent {
    constructor(fb, http, router, auth) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.valid_user = true;
        this.message = 'Username or Password is wrong';
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.loginGroup = this.fb.group({
            emailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    login() {
        //console.log(this.loginGroup.value)
        this.http.getUserLogin(this.loginGroup.value).subscribe((response) => {
            console.log("rdddtyty");
            console.log(response);
            localStorage.setItem('token', response);
            console.log(localStorage.getItem('token'));
            if (response) {
                this.valid_user = true;
                this.auth.setAuthentication(response);
                this.router.navigate(['dashboard']);
            }
            else {
                this.valid_user = false;
                // this.router.navigate(['']);
            }
        }, (error) => {
            console.log(error);
            this.valid_user = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userauth_service__WEBPACK_IMPORTED_MODULE_2__["UserauthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 12, vars: 12, consts: [[1, "flex-item-1", 3, "formGroup"], ["formControlName", "emailAddress", "type", "text", "placeholder", "your email", 1, "input-style", 3, "ngStyle"], ["style", "color:red;", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "password", 1, "input-style", 3, "ngStyle"], [1, "button-flex"], ["type", "button", 1, "button", 3, "ngStyle", "click"], ["routerLink", "/forgot_password", 1, "link-color"], [2, "color", "red"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_8_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.valid_user ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.valid_user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.valid_user ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.valid_user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.loginGroup.valid ? "#4caf50" : "#f44336"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".input-style[_ngcontent-%COMP%] {\n    background: white;\n    color: black;\n    padding: 9px 20px;\n    text-align: left;\n    border:0;\n    border-radius: 6px;\n    font-size: 15px;\n    font-weight: 300;\n    margin-bottom: 14px;\n}\n.link-color[_ngcontent-%COMP%] {\n\n\n    color:white;\n    font-weight: bold;\n    font-family:Arial, Helvetica, sans-serif;\n    -webkit-text-decoration:white;\n            text-decoration:white;\n}\n.flex-item-1[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.button-flex[_ngcontent-%COMP%] {\n   display: flex;\n   flex-direction: row;\n   justify-content: space-around;\n}\n.button[_ngcontent-%COMP%] {\n    color:white;\n    font-size: large;\n    border:0;\n    padding-top:2%;\n    padding-bottom:2%;\n    border-radius: 10%;\n    box-sizing: border-box;\n}\n.nav-link-color[_ngcontent-%COMP%] {\n    color:white;\n    font-family:Arial, Helvetica, sans-serif;\n    font: 30px ;\n    margin: 20px 0px 20px 10px;\n    text-decoration: none;\n\n}\n.flex-item-2[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    position: absolute;\n    bottom: 0;\n    height: 11%;\n    margin-right: 30%;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTs7O0lBR0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QjtBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7QUFFQTtHQUNHLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsNkJBQTZCO0FBQ2hDO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxpQkFBaUI7O0FBRXJCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LXN0eWxlIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogOXB4IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXI6MDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cbi5saW5rLWNvbG9yIHtcblxuXG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWRlY29yYXRpb246d2hpdGU7XG59XG5cblxuLmZsZXgtaXRlbS0xIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5idXR0b24tZmxleCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYnV0dG9uIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGJvcmRlcjowO1xuICAgIHBhZGRpbmctdG9wOjIlO1xuICAgIHBhZGRpbmctYm90dG9tOjIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm5hdi1saW5rLWNvbG9yIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQ6IDMwcHggO1xuICAgIG1hcmdpbjogMjBweCAwcHggMjBweCAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxufVxuLmZsZXgtaXRlbS0yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDExJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgICBcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_userauth_service__WEBPACK_IMPORTED_MODULE_2__["UserauthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info/info.component */ "./src/app/components/info/info.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_payment_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/payment-service.service */ "./src/app/services/payment-service.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");













function MainComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function MainComponent_div_6_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_div_6_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.clickMe(product_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r4.faShoppingCart);
} }
function MainComponent_div_6_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_div_6_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.clickMe(product_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.faShoppingCart);
} }
const _c0 = function (a0, a1) { return { "subscribed": a0, "not-subscribed": a1 }; };
const _c1 = function (a0) { return { "border": a0 }; };
const _c2 = function (a0) { return { "color": a0 }; };
const _c3 = function (a0) { return { "display": a0 }; };
function MainComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_div_6_Template_fa_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const product_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.info(product_r2.description); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MainComponent_div_6_button_12_Template, 2, 1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MainComponent_div_6_button_13_Template, 2, 1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx_r1.subscribedAnalysis[product_r2._id], !ctx_r1.subscribedAnalysis[product_r2._id]))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx_r1.subscribedAnalysis[product_r2._id] ? "5px solid" : "none"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c2, (ctx_r1.subscribedAnalysis[product_r2._id] == null ? null : ctx_r1.subscribedAnalysis[product_r2._id].expiry) < 3 ? "red" : "darkgreen"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.subscribedAnalysis[product_r2._id] == null ? null : ctx_r1.subscribedAnalysis[product_r2._id].expiry, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/asset/", product_r2.name, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faInfoCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", product_r2.tutorial, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faTv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.subscribedAnalysis[product_r2._id] && product_r2.launchable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.subscribedAnalysis[product_r2._id] && product_r2.launchable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("href", "", ctx_r1.api, "", product_r2.url, "?token=", ctx_r1.token, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c3, ctx_r1.subscribedAnalysis[product_r2._id] ? "block" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faRocket);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u20B9 ", product_r2.price, "/", product_r2.subscriptionTime, " days ");
} }
class MainComponent {
    constructor(router, http, paymentservice, ngZone, auth, dialog) {
        this.router = router;
        this.http = http;
        this.paymentservice = paymentservice;
        this.ngZone = ngZone;
        this.auth = auth;
        this.dialog = dialog;
        this.products = [];
        this.tools = ['Xpo-Analytics', 'Xpo-Tools'];
        this.analysisProducts = [];
        this.toolsProduct = [];
        this.userSubscribedProducts = [];
        this.subscribedAnalysis = [];
        this.banner = false;
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"];
        this.faTv = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTv"];
        this.faRocket = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRocket"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShoppingCart"];
    }
    ngOnInit() {
        this.token = localStorage.getItem('token');
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url}/api/product`).subscribe((response) => {
            console.log(response);
            this.products = response;
            this.products.forEach((data) => {
                if (data.type == this.tools[0]) {
                    this.analysisProducts.push(data);
                }
                else if (data.type == this.tools[1]) {
                    this.toolsProduct.push(data);
                }
            });
        });
        this.fetchUser();
    }
    payWithRazor(product, response) {
        console.log('dhdghdgh');
        console.log(response);
        const options = {
            key: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].razorpay_key,
            amount: product.price * 100,
            currency: 'INR',
            name: "Xponential",
            description: product.name,
            image: './assets/asset/X.jpg',
            order_id: response.order_id,
            modal: {
                // We should prevent closing of the form when esc key is pressed.
                escape: false,
            },
            notes: {
            // include notes if any
            },
            theme: {
                color: '#0c238a'
            }
        };
        options.handler = ((response, error) => {
            let query = {
                params: {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                    razorpay_amount: options.amount,
                    razorpay_currency: options.currency
                },
                user_id: this.user._id,
                product_id: product._id,
                expiry: product.subscriptionTime
            };
            console.log(query);
            this.VerifyPayment(query);
            // call your backend api to verify payment signature & capture transaction
        });
        options.modal.ondismiss = (() => {
            // handle the case when user closes the form while transaction is in progress
            console.log('Transaction cancelled.');
        });
        const rzp = new this.paymentservice.nativeWindow.Razorpay(options);
        rzp.open();
    }
    VerifyPayment(params) {
        this.paymentservice.verifyOrder(params).subscribe((params) => { this.fetchUser(); console.log('Success'); });
    }
    fetchUser() {
        // this.analysisProducts = [];
        // this.toolsProduct = [];
        //this.subscribedAnalysis = [];
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url}/api/user/get-user-by-token`, {}).subscribe((data) => {
            this.user = data;
            console.log(this.user);
            this.user.products.forEach((product) => {
                console.log(typeof (product.product_id));
                if (Math.floor((new Date(product.expiry).valueOf() - new Date().valueOf()) / (1000 * 60 * 60 * 24)) > 0) {
                    this.ngZone.run(() => {
                        this.subscribedAnalysis[product.product_id] = {
                            expiry: Math.floor((new Date(product.expiry).valueOf() - new Date().valueOf()) / (1000 * 60 * 60 * 24))
                        };
                    });
                }
            });
            console.log(this.subscribedAnalysis);
        });
    }
    clickMe(product) {
        //API request to Order Schema
        // this.products.forEach((data)=>{
        //   if (data.type == product_id ){
        //     product=data;
        //   } 
        // })
        //product_id, user_id
        let query = {
            params: {
                amount: product.price * 100,
                currency: "INR",
                receipt: "su002",
                payment_capture: '1'
            },
            user_id: this.user._id,
            product_id: product._id
        };
        this.paymentservice.getOrderId(query).subscribe(response => { this.payWithRazor(product, response); });
        ///FInalyy this.user ko update kar do;
    }
    doAlert(message) {
        alert(message);
    }
    DummyClick(product_id) {
        console.log(typeof (product_id));
        setTimeout(() => {
            this.subscribedAnalysis[product_id] = true;
            console.log(this.subscribedAnalysis);
        }, 3000);
    }
    redirect() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url}/redirect/`, {}).subscribe((data) => {
        });
    }
    logout() {
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url}/api/user/logout`, {}).subscribe((res) => {
            console.log('fyfyy');
            console.log(res[0]);
            localStorage.setItem('token', res[0]);
            localStorage.removeItem("token");
            this.router.navigate(['']);
            // localStorage.removeItem('token')
            // console.log(localStorage.getItem('token'));
            // this.valid_user =false;
            // this.auth.setAuthentication(res[0]);
        });
    }
    profile() {
    }
    info(data) {
        this.dialog.open(_info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"], {
            data: data
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_payment_service_service__WEBPACK_IMPORTED_MODULE_6__["PaymentServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 7, vars: 2, consts: [[1, "grid-parent"], [4, "ngIf"], [1, "grid-1"], [1, "dashboard"], [1, "grid-2"], ["class", "grid-child card", 4, "ngFor", "ngForOf"], [1, "grid-child", "card"], [1, "grid-child-header"], [1, "days-remaining"], ["matTooltip", "Days Remaining", 3, "ngClass", "ngStyle"], [1, "grid-child-image"], ["width", "25%", 3, "src"], [1, "grid-child-footer"], ["size", "2x", "matTooltip", "Info", 2, "color", "#34a4eb", 3, "icon", "click"], ["matTooltip", "Tutorials", "target", "_blank", 3, "href"], ["size", "2x", 2, "color", "#34ebd3", 3, "icon"], ["style", "color:rebeccapurple;background:none;border:none;", 3, "click", 4, "ngIf"], ["target", "_blank", 2, "background", "none", "color", "green", 3, "href", "ngStyle"], ["matTooltip", "Launch", "size", "2x", 3, "icon"], [1, "grid-price", "card"], [2, "color", "rebeccapurple", "background", "none", "border", "none", 3, "click"], ["matTooltip", "Subscribe", "size", "2x", 3, "icon"], ["matTooltip", "Extend License", "size", "2x", 3, "icon"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainComponent_div_6_Template, 18, 27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toolsProduct);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"]], styles: [".grid-parent[_ngcontent-%COMP%] {\n    width:100%;\n    height:100%;\n    display: grid;\n    grid-template-rows: 20% 80%;\n    background: #F5F5F5;\n}\n\n\n.grid-1[_ngcontent-%COMP%] {\n    display: grid;\n    width:100%;\n    height:100%;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n\n.grid-2[_ngcontent-%COMP%] {\n     display: grid;\n     width: 100%;\n     height: 100%;\n     grid-template-rows: auto;\n     grid-template-columns: repeat(3, 1fr);\n}\n\n\n.dashboard[_ngcontent-%COMP%] {\n    font-size: xx-large;\n    display: flex;\n    align-items: center;\n    margin-left: 10%;\n    box-sizing: border-box;\n    width:100%;\n    height: 100%;\n    font-weight: bold;\n    color: rgb(88, 88, 88)\n}\n\n\n.search_plus_raise_ticket[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n\n.ticket[_ngcontent-%COMP%] {\n    background: lightgreen;\n    font-weight: bold;\n    flex: 0 1 20%;\n    width:20%;\n    margin-left: 60%;\n    box-sizing: border-box;\n\n}\n\n\n.search[_ngcontent-%COMP%] {\n    flex: 0 1 20%;\n    border-radius: 25px;\n    width:20%;\n    margin-left: 60%;\n    box-sizing: border-box;\n}\n\n\n.grid-child[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-rows: 80% 20%;\n    margin:10%;\n    height:50%;\n    box-sizing: border-box;\n    background: white;\n}\n\n\n.grid-child-header[_ngcontent-%COMP%]{\n    display: flex;\n    width:100%;\n    height:100%;\n    justify-content: space-around;\n    flex-direction: column;\n    align-items: center;\n    font-size: x-large;\n    color: gray;\n    font-weight: bold;\n}\n\n\n.grid-child-image[_ngcontent-%COMP%] {\n    width:100%;\n    display: flex;\n    justify-content: center;\n}\n\n\n.grid-child-footer[_ngcontent-%COMP%] {\n    width: 100%;\n    border-top: 2px solid gray;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    box-sizing: border-box;\n}\n\n\n.card[_ngcontent-%COMP%] {\n    \n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n  }\n\n\n\n\n\n.card[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n  }\n\n\n.grid-price[_ngcontent-%COMP%] {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: larger;\n      font-weight: bold;\n      color: darkcyan;\n      padding-top: 20px;\n\n  }\n\n\n.days-remaining[_ngcontent-%COMP%] {\n    display:flex;\n    width: 100%;\n    margin-left: 80%;\n    justify-content: space-around;\n    font-size: medium;\n  }\n\n\n.not-subscribed[_ngcontent-%COMP%]  {\n        border: none;\n  }\n\n\n.subscribed[_ngcontent-%COMP%] {\n      border: 2px solid;\n      border-radius: 100%;\n      padding:10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gscUNBQXFDO0FBQ3pDOzs7QUFFQTtLQUNLLGFBQWE7S0FDYixXQUFXO0tBQ1gsWUFBWTtLQUNaLHdCQUF3QjtLQUN4QixxQ0FBcUM7QUFDMUM7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQjtBQUNKOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsc0JBQXNCOztBQUUxQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLDRDQUE0QztJQUM1Qyx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0VBQ2xCOzs7QUFFQSx1Q0FBdUM7OztBQUN2QztJQUNFLHdDQUF3QztFQUMxQzs7O0FBRUE7TUFDSSxXQUFXO01BQ1gsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsaUJBQWlCOztFQUVyQjs7O0FBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0VBQ25COzs7QUFFQTtRQUNNLFlBQVk7RUFDbEI7OztBQUVBO01BQ0ksaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixZQUFZO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLXBhcmVudCB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDgwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xufVxuXG5cbi5ncmlkLTEge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xufVxuXG4uZ3JpZC0yIHtcbiAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGhlaWdodDogMTAwJTtcbiAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xufVxuXG4uZGFzaGJvYXJkIHtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJnYig4OCwgODgsIDg4KVxufVxuXG4uc2VhcmNoX3BsdXNfcmFpc2VfdGlja2V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi50aWNrZXQge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZmxleDogMCAxIDIwJTtcbiAgICB3aWR0aDoyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG59XG5cbi5zZWFyY2gge1xuICAgIGZsZXg6IDAgMSAyMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDoyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZ3JpZC1jaGlsZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwJSAyMCU7XG4gICAgbWFyZ2luOjEwJTtcbiAgICBoZWlnaHQ6NTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5ncmlkLWNoaWxkLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ncmlkLWNoaWxkLWltYWdlIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ncmlkLWNoaWxkLWZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyYXk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jYXJkIHtcbiAgICAvKiBBZGQgc2hhZG93cyB0byBjcmVhdGUgdGhlIFwiY2FyZFwiIGVmZmVjdCAqL1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIFxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXG4gIC5jYXJkOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICB9XG5cbiAgLmdyaWQtcHJpY2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiBkYXJrY3lhbjtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuXG4gIH1cblxuICAuZGF5cy1yZW1haW5pbmcge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG5cbiAgLm5vdC1zdWJzY3JpYmVkICB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gIC5zdWJzY3JpYmVkIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIHBhZGRpbmc6MTBweDtcbiAgfVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _services_payment_service_service__WEBPACK_IMPORTED_MODULE_6__["PaymentServiceService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notificaton_menu_notificaton_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificaton-menu/notificaton-menu.component */ "./src/app/components/navbar/notificaton-menu/notificaton-menu.component.ts");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 18, vars: 0, consts: [[1, "flexparent"], [1, "flexchild", 2, "color", "black"], [1, "logo"], ["width", "5%", "src", "/assets/asset/X-3.png"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-notificaton-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tutorials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Xponential ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_notificaton_menu_notificaton_menu_component__WEBPACK_IMPORTED_MODULE_1__["NotificatonMenuComponent"]], styles: [".flexparent[_ngcontent-%COMP%] {\n    display: flex;\n    width:100%;\n    height:100%;\n    background:rgba(241, 235, 235, 0.712);\n    color: honeydew;\n\n}\n\n.flexchild[_ngcontent-%COMP%] {\n    display: flex;\n    width: 50%;\n    margin-left:50%;\n    height:100%;\n    justify-content: space-around;\n    align-items: center;\n    box-sizing: border-box;\n    font-size: x-large;\n}\n\n.logo[_ngcontent-%COMP%] {\n    display: flex;\n    font-size: x-large;\n    color:black;\n    background:rgba(241, 235, 235, 0.712);\n    width:100%;\n    height:100%;\n    align-items: center;\n    justify-content: space-between;\n    margin-right:45%;\n    box-sizing: border-box;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsc0JBQXNCOztBQUUxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXhwYXJlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjQxLCAyMzUsIDIzNSwgMC43MTIpO1xuICAgIGNvbG9yOiBob25leWRldztcblxufVxuXG4uZmxleGNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6NTAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbi5sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBjb2xvcjpibGFjaztcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjQxLCAyMzUsIDIzNSwgMC43MTIpO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXJpZ2h0OjQ1JTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/notificaton-menu/notificaton-menu.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/navbar/notificaton-menu/notificaton-menu.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NotificatonMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificatonMenuComponent", function() { return NotificatonMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var src_app_services_userauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/userauth.service */ "./src/app/services/userauth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function NotificatonMenuComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Your Subscription for ", notification_r1.productName, " expires in ", notification_r1.expiry, " day ");
} }
class NotificatonMenuComponent {
    constructor(_userService, _http) {
        this._userService = _userService;
        this._http = _http;
        this.response = ['test'];
        this.notifications = [];
        this.counts = 0;
        this.email$ = this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}/api/user/get-user-by-token`, {});
    }
    onClickCount() {
        this.counts = 0;
    }
    ngOnInit() {
        this.notificaton$ = this.email$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(({ emailAddress: email }) => {
            return this._userService.getNotifications(email);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((value) => {
            value.forEach((obj) => {
                const difference = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["differenceInDays"])(new Date(obj.expiry), new Date());
                obj.expiry = difference;
            });
            return value;
        }));
        this.subscription$ = this.notificaton$.subscribe((res) => {
            res.forEach((obj) => {
                if (obj.expiry <= 3) {
                    console.log(obj);
                    this.notifications.push(obj);
                }
            });
            this.counts = this.notifications.length;
        });
    }
    ngOnDestroy() {
        this.subscription$.unsubscribe();
    }
}
NotificatonMenuComponent.ɵfac = function NotificatonMenuComponent_Factory(t) { return new (t || NotificatonMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userauth_service__WEBPACK_IMPORTED_MODULE_4__["UserauthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
NotificatonMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificatonMenuComponent, selectors: [["app-notificaton-menu"]], decls: 16, vars: 3, consts: [[1, "profile-image-section", "dropdown"], ["data-toggle", "dropdown", 1, "menu-custom-drp", "dropdown-toggle", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-10x", "fa-bell"], [1, "badge", "badge-danger", 3, "click"], [1, "dropdown-menu", "list-custom"], [1, "title-name"], [1, "row", "cutom-rw"], [1, "col-md-6"], [1, "unread"], [4, "ngFor", "ngForOf"], [1, "all-notification"], ["ng-click", "notifyReaded(item.id,'single')"], ["ng-repeat", "item in dataObject", "ng-if", "item.is_read == 0", 1, "row", "cutom-rw2"], [1, "col-md-2"], ["ng-show", "item.is_read == 0", "aria-hidden", "true"], ["src", "https://picsum.photos/536/354", "alt", "Girl in a jacket", 1, "image-icon"], ["ng-click", "myStyle={'color':black}", "ng-style", "myStyle", 1, "col-md-10"], [1, "first-line"], [1, "button-last"], [1, "yes-text"], [1, "change-now"]], template: function NotificatonMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificatonMenuComponent_Template_a_click_1_listener() { return ctx.onClickCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificatonMenuComponent_Template_span_click_3_listener() { return ctx.onClickCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NotificatonMenuComponent_div_13_Template, 13, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Show all notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.counts > 0 ? ctx.counts : "No", " Unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli[_ngcontent-%COMP%] {\n  float: left;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dropbtn[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\nli.dropdown[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\nspan.menu-custom-drp.dropdown-toggle[_ngcontent-%COMP%] {\n    float: right;\n}\n\n.dropdown[_ngcontent-%COMP%], .dropup[_ngcontent-%COMP%] {\n    float: right;\n    position: relative;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {    \n    margin: 18px 21px 3px -227px;\n    padding: 0px;\n}\n\nul.dropdown-menu.list-custom[_ngcontent-%COMP%] {\n    width: 250px;\n    height: auto;        \n    background-color: #c7ffec;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color: #f1f1f1;}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\np.title-name[_ngcontent-%COMP%] {\n    font-size: 13px;\n    display: block;\n    text-align: center;\n    padding: 8px;\n    font-weight: 600;\n    background-color: beige;\n}\n\n.list-custom[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: contents;\n}\n\n.dropdown-menu.list-custom[_ngcontent-%COMP%] {\n    width: 250px;\n    background-color: #e2e4f1;\n}\n\n.row.cutom-rw[_ngcontent-%COMP%] {\n    width: 91%;\n}\n\np.unread[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 10px;\n}\n\nbutton.btn.btn-default.allready[_ngcontent-%COMP%] {\n    padding: 2px 8px;\n    font-size: 12px;\n}\n\nimg.image-icon[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    border-radius: 50px;\n}\n\np.first-line[_ngcontent-%COMP%] {\n    font-size: 13px;\n    font-weight: 600;\n    margin-bottom: 0px;\n    color:black;\n}\n\np.help-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    margin-bottom: 0;\n    color:black;\n}\n\np.button-last[_ngcontent-%COMP%] {\n    float: right;\n    \n    cursor: pointer;\n    font-size: 11px;\n    font-weight: 600;\n}\n\n.row.cutom-rw2[_ngcontent-%COMP%] {\n    padding: 7px 0px;\n    background-color: #fff;\n    margin: 10px;\n    cursor: pointer;\n}\n\n.row.cutom-rw3[_ngcontent-%COMP%] {\n    padding: 7px 0px;\n    background-color: #fff;\n    margin: 0px 10px;\n    border: 1px solid #f1f1f1;\n}\n\np.today-seperator[_ngcontent-%COMP%] {\n    font-size: 12px;\n    margin: 10px;\n}\n\np.all-notification[_ngcontent-%COMP%] {\n    font-size: 12px;\n    display: block;\n    text-align: center;\n    padding: 15px;\n    margin-bottom: 0px;\n    cursor: pointer;\n    color: #1690a0;\n}\n\ni.fa.fa-circle.custon-circle[_ngcontent-%COMP%] {\n    font-size: 8px;\n    position: absolute;\n    top: 15px;\n    color: #338ecf;\n    left: 5px;\n}\n\n\n\n.badge[_ngcontent-%COMP%]{\n    padding: 3px 5px 2px;\n    position: absolute;\n    top: 8px;\n    right: 5px;\n    display: inline-block;\n    min-width: 10px;\n    font-size: 12px;\n    font-weight: bold;\n    color: #ffffff;\n    line-height: 1;\n    vertical-align: baseline;\n    white-space: nowrap;\n    text-align: center;\n    border-radius: 10px;\n    pointer-events: none;\n}\n\n.badge-danger[_ngcontent-%COMP%] {\n    background-color: #db5565;\n}\n\n.fa-10x[_ngcontent-%COMP%]{\n    font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbm90aWZpY2F0b24tbWVudS9ub3RpZmljYXRvbi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQSwyQkFBMkIseUJBQXlCLENBQUM7O0FBRXJEO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBLFVBQVU7O0FBR1Y7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFHQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9ub3RpZmljYXRvbi1tZW51L25vdGlmaWNhdG9uLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cbmxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmxpIGEsIC5kcm9wYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmxpIGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxubGkuZHJvcGRvd24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgei1pbmRleDogMTtcbn1cbnNwYW4ubWVudS1jdXN0b20tZHJwLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLmRyb3Bkb3duLCAuZHJvcHVwIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRyb3Bkb3duLW1lbnUgeyAgICBcbiAgICBtYXJnaW46IDE4cHggMjFweCAzcHggLTIyN3B4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbnVsLmRyb3Bkb3duLW1lbnUubGlzdC1jdXN0b20ge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87ICAgICAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdmZmVjO1xufVxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO31cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5wLnRpdGxlLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG59XG4ubGlzdC1jdXN0b20gbGkge1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuLmRyb3Bkb3duLW1lbnUubGlzdC1jdXN0b20ge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNGYxO1xufVxuLnJvdy5jdXRvbS1ydyB7XG4gICAgd2lkdGg6IDkxJTtcbn1cbnAudW5yZWFkIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuYWxscmVhZHkge1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuaW1nLmltYWdlLWljb24ge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5wLmZpcnN0LWxpbmUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBjb2xvcjpibGFjaztcbn1cbnAuaGVscC10ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjb2xvcjpibGFjaztcbn1cbnAuYnV0dG9uLWxhc3Qge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICAvKiBjb2xvcjogIzJjYjNhZDsgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucm93LmN1dG9tLXJ3MiB7XG4gICAgcGFkZGluZzogN3B4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucm93LmN1dG9tLXJ3MyB7XG4gICAgcGFkZGluZzogN3B4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbn1cbnAudG9kYXktc2VwZXJhdG9yIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxucC5hbGwtbm90aWZpY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzE2OTBhMDtcbn1cbmkuZmEuZmEtY2lyY2xlLmN1c3Rvbi1jaXJjbGUge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgY29sb3I6ICMzMzhlY2Y7XG4gICAgbGVmdDogNXB4O1xufVxuXG4vKiBCQURHRSAqL1xuXG5cbi5iYWRnZXtcbiAgICBwYWRkaW5nOiAzcHggNXB4IDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWluLXdpZHRoOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5iYWRnZS1kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjU1NjU7XG59XG5cblxuLmZhLTEweHtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificatonMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notificaton-menu',
                templateUrl: './notificaton-menu.component.html',
                styleUrls: ['./notificaton-menu.component.css'],
            }]
    }], function () { return [{ type: src_app_services_userauth_service__WEBPACK_IMPORTED_MODULE_4__["UserauthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/payment-form/payment-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/payment-form/payment-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFormComponent", function() { return PaymentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_payment_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/payment-service.service */ "./src/app/services/payment-service.service.ts");





class PaymentFormComponent {
    constructor(paymentservive) {
        this.paymentservive = paymentservive;
        this.params = {
            amount: 0,
            currency: "INR",
            receipt: "su001",
            payment_capture: '1'
        };
        this.paymentProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            }),
            paymentDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                productDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                Amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            })
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.params.amount = this.paymentProfileForm.get(['paymentDetails', 'Amount']).value;
        var param = this.params;
        this.paymentservive.getOrderId(param).subscribe(param => {
            this.order_id = param.sub.id;
            this.amount = param.sub.amount;
            console.log(this.order_id);
            console.log(param);
        });
        //console.log(this.paymentProfileForm.get(['paymentDetails','Amount']).value);
    }
    payWithRazor() {
        console.log('dhdghdgh');
        const options = {
            key: 'rzp_test_QcAnckR9OpdUpt',
            amount: 125500,
            currency: 'INR',
            name: '',
            description: '',
            image: './assets/asset/X.jpg',
            order_id: this.order_id,
            modal: {
                // We should prevent closing of the form when esc key is pressed.
                escape: false,
            },
            notes: {
            // include notes if any
            },
            theme: {
                color: '#0c238a'
            }
        };
        options.handler = ((response, error) => {
            options.response = response;
            this.paymentId = response.razorpay_payment_id;
            this.paymentSignature = response.razorpay_signature;
            console.log(response);
            console.log(options);
            console.log(response.razorpay_payment_id);
            console.log(response.razorpay_signature);
            // call your backend api to verify payment signature & capture transaction
        });
        options.modal.ondismiss = (() => {
            // handle the case when user closes the form while transaction is in progress
            console.log('Transaction cancelled.');
        });
        const rzp = new this.paymentservive.nativeWindow.Razorpay(options);
        rzp.open();
    }
    VerifyPayment() {
        var params = {
            razorpay_order_id: this.order_id,
            razorpay_payment_id: this.paymentId,
            razorpay_signature: this.paymentSignature
        };
        this.paymentservive.verifyOrder(params).subscribe(params => { window.alert(params.status); });
    }
}
PaymentFormComponent.ɵfac = function PaymentFormComponent_Factory(t) { return new (t || PaymentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_payment_service_service__WEBPACK_IMPORTED_MODULE_2__["PaymentServiceService"])); };
PaymentFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentFormComponent, selectors: [["app-payment-form"]], decls: 40, vars: 1, consts: [["id", "formLayout"], [1, "form", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "firstName"], ["type", "text", "formControlName", "lastName"], ["type", "text", "formControlName", "email"], ["formGroupName", "address"], ["type", "text", "formControlName", "street"], ["type", "text", "formControlName", "city"], ["type", "text", "formControlName", "state"], ["type", "text", "formControlName", "zip"], ["formGroupName", "paymentDetails"], ["type", "text", "formControlName", "productDetails"], ["type", "text", "formControlName", "Amount"], ["type", "submit", "value", "Proceed"], ["type", "button", "value", "Checkout", 3, "click"], ["type", "button", "value", "Verify", 3, "click"]], template: function PaymentFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PaymentFormComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " First Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Last Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Street: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " City: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " State: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Zip Code: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Transaction Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Product: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Amount: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentFormComponent_Template_input_click_38_listener() { return ctx.payWithRazor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentFormComponent_Template_input_click_39_listener() { return ctx.VerifyPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.paymentProfileForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]], styles: [".form[_ngcontent-%COMP%] {\n    background-color:lightgray;\n}\ninput[type=text][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 4px 4px;\n    margin: 8px 0;\n    box-sizing: border-box;\n    background-color:whitesmoke;\n    border: 3px solid #555;\n  }\n#formLayout[_ngcontent-%COMP%] {\n    width:40%;\n    padding: 4px 4px;\n    margin: 8px 0;\n    box-sizing: border-box;\n}\ninput[type=\"submit\"][_ngcontent-%COMP%] {\n    width: 33%;\n    padding:4px 4px;\n    background-color: darkgrey;\n}\ninput[type=\"button\"][_ngcontent-%COMP%] {\n    width: 33%;\n    padding:4px 4px;\n    background-color: darkgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50LWZvcm0vcGF5bWVudC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0VBQ3hCO0FBQ0Y7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5O1xufVxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNHB4IDRweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICM1NTU7XG4gIH1cbiNmb3JtTGF5b3V0IHtcbiAgICB3aWR0aDo0MCU7XG4gICAgcGFkZGluZzogNHB4IDRweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgcGFkZGluZzo0cHggNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xufVxuXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIHBhZGRpbmc6NHB4IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment-form',
                templateUrl: './payment-form.component.html',
                styleUrls: ['./payment-form.component.css']
            }]
    }], function () { return [{ type: _services_payment_service_service__WEBPACK_IMPORTED_MODULE_2__["PaymentServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_userauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/userauth.service */ "./src/app/services/userauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = function (a0) { return { "border-bottom": a0 }; };
const _c1 = function (a0) { return { "background": a0 }; };
class RegisterComponent {
    constructor(fb, http, router, auth) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.valid_user = true;
        this.fnamePattern = "^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)";
        this.lnamePattern = "^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)";
        this.mobilePattern = "[6-9]\\d{9}";
        this.emailPattern = "[a-zA-Z][a-zA-Z0-9_.]{1,}[@][a-zA-Z0-9]{1,}[.][a-zA-Z]";
        this.passwordPattern = "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$";
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.registerForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+$')]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+$')]],
            emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            address_city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            address_state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            address_pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[1-9]+[0-9]{5}$')]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.mobilePattern)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            cnfPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            terms_condition: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    checkPasswords(group) {
        let pass = group.get('password').value;
        let confirmPass = group.get('cnfPassword').value;
        return (pass === confirmPass) && pass !== '';
    }
    register() {
        // if(this.checkPasswords(this.registerForm)){
        // } 
        console.log(this.registerForm);
        this.http.registerUser(this.registerForm.value).subscribe((response) => {
            console.log('fyfyy');
            console.log(response);
            localStorage.setItem('token', response);
            console.log(localStorage.getItem('token'));
            this.valid_user = true;
            this.auth.setAuthentication(response);
            this.router.navigate(['dashboard']);
        }, (err) => {
            console.log(err);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userauth_service__WEBPACK_IMPORTED_MODULE_2__["UserauthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 33, vars: 38, consts: [[1, "flex-item-1", 3, "formGroup"], ["type", "text", "formControlName", "firstName", "placeholder", "First name", 1, "input-style", 3, "ngStyle"], ["type", "text", "formControlName", "lastName", "placeholder", "Last name", 1, "input-style", 3, "ngStyle"], ["type", "text", "formControlName", "emailAddress", "placeholder", "Email address", 1, "input-style", 3, "ngStyle"], ["type", "text", "formControlName", "address1", "placeholder", "Enter Building No, Town", 1, "input-style", 3, "ngStyle"], ["type", "text", "formControlName", "address_city", "placeholder", "Enter City", 1, "input-style", 3, "ngStyle"], ["type", "text", "formControlName", "address_state", "placeholder", "Enter State", 1, "input-style", 3, "ngStyle"], ["type", "text", "formControlName", "address_pincode", "placeholder", "Pincode", 1, "input-style", 3, "ngStyle"], ["type", "text", "formControlName", "mobileNumber", "placeholder", "Mobile number", 1, "input-style", 3, "ngStyle"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "input-style", 3, "ngStyle"], ["type", "password", "formControlName", "cnfPassword", "placeholder", "Confirm Password", 1, "input-style", 3, "ngStyle"], [1, "flex-item-1-1"], ["type", "radio", "id", "male", "formControlName", "gender", "value", "male", 1, "input-style"], ["for", "male"], ["type", "radio", "id", "female", "formControlName", "gender", "value", "female", 1, "input-style"], ["for", "female"], ["type", "radio", "id", "other", "formControlName", "gender", "value", "other", 1, "input-style"], ["for", "other"], ["type", "checkbox", "formControlName", "terms_condition", 1, "input-style", 3, "ngStyle"], [2, "color", "white"], ["href", "/terms_condition", "target", "_blank", 2, "color", "white"], [1, "button-flex"], ["type", "button", 1, "button", 3, "disabled", "ngStyle", "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "I accept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_31_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.valid_user ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.valid_user ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.valid_user ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.valid_user ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.valid_user ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.valid_user ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.valid_user ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.valid_user ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.valid_user ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.valid_user ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx.valid_user ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.value.terms_condition && !ctx.registerForm.valid)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c1, ctx.registerForm.value.terms_condition && ctx.registerForm.valid ? "#4caf50" : "#f44336"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: [".input-style[_ngcontent-%COMP%] {\n    background: white;\n    color: black;\n    padding: 9px 20px;\n    text-align: left;\n    border:0;\n    border-radius: 6px;\n    font-size: 15px;\n    font-weight: 300;\n    margin-bottom: 14px;\n}\n\n.flex-item-1[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.button-flex[_ngcontent-%COMP%] {\n   flex: 0 1 20%; \n}\n\n.button[_ngcontent-%COMP%] {\n    color: #23394a;\n    background: white;\n    padding:3.5%;\n    border:0;\n    border-radius: 10px;\n}\n\n.flex-item-1-1[_ngcontent-%COMP%] {\n    display: flex;\n    \n}\n\n.flex-item-2[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    position: absolute;\n    bottom: 0;\n    height: 7%;\n    margin-right: 30%;\n    \n}\n\n.nav-link-color[_ngcontent-%COMP%] {\n    color:white;\n    font-family:Arial, Helvetica, sans-serif;\n    font: 30px ;\n    margin: 20px 0px 20px 10px;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0dBQ0csYUFBYTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCOztBQUVyQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtc3R5bGUge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlcjowO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uZmxleC1pdGVtLTEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5idXR0b24tZmxleCB7XG4gICBmbGV4OiAwIDEgMjAlOyBcbn1cblxuLmJ1dHRvbiB7XG4gICAgY29sb3I6ICMyMzM5NGE7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzozLjUlO1xuICAgIGJvcmRlcjowO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5mbGV4LWl0ZW0tMS0xIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiByb3c7ICovXG59XG5cbi5mbGV4LWl0ZW0tMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiA3JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgICBcbn1cbi5uYXYtbGluay1jb2xvciB7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250OiAzMHB4IDtcbiAgICBtYXJnaW46IDIwcHggMHB4IDIwcHggMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_userauth_service__WEBPACK_IMPORTED_MODULE_2__["UserauthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





class AuthGuard {
    constructor(router, http, auth) {
        this.router = router;
        this.http = http;
        this.auth = auth;
    }
    canActivate(next, state) {
        // if(this.auth.getAuthentication()){
        //   return true;
        // } else {
        //   this.router.navigate(['403']);
        // };
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this.router.navigate(['403']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/interceptors/auth.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AuthInterceptor {
    constructor() { }
    intercept(request, next) {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('token', token);
            const AuthRequest = request.clone({ headers: headers });
            return next.handle(AuthRequest);
        }
        else {
            return next.handle(request);
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pipes/date.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/date.pipe.ts ***!
  \************************************/
/*! exports provided: DatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePipe", function() { return DatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DatePipe {
    transform(value, ...args) {
        return Math.floor((new Date(value).valueOf() - Date.now()) / (1000 * 60 * 60 * 24));
    }
}
DatePipe.ɵfac = function DatePipe_Factory(t) { return new (t || DatePipe)(); };
DatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "date", type: DatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'date'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AuthService {
    constructor(http) {
        this.http = http;
    }
    getAuthentication() {
        return this.token;
    }
    setAuthentication(token) {
        this.token = token;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/payment-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/payment-service.service.ts ***!
  \*****************************************************/
/*! exports provided: PaymentServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentServiceService", function() { return PaymentServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





function _window() {
    // return the global native browser window object
    return window;
}
const xhttpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class PaymentServiceService {
    constructor(http) {
        this.http = http;
        this.orderIdURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}/api/payment/order`;
        this.verifyURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}/api/payment/verify`;
    }
    getOrderId(params) {
        return this.http.post(this.orderIdURL, params, xhttpOptions);
    }
    get nativeWindow() {
        return _window();
    }
    verifyOrder(params) {
        return this.http.post(this.verifyURL, params, xhttpOptions);
    }
}
PaymentServiceService.ɵfac = function PaymentServiceService_Factory(t) { return new (t || PaymentServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PaymentServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentServiceService, factory: PaymentServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/userauth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/userauth.service.ts ***!
  \**********************************************/
/*! exports provided: UserauthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserauthService", function() { return UserauthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UserauthService {
    constructor(http) {
        this.http = http;
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
    }
    getUserLogin(value) {
        return this.http.post(`${this.api}/api/user/login`, value);
    }
    getUserLogout() {
        return this.http.get(`${this.api}/user/logout`);
    }
    getUserRegister(value) {
        return this.http.post(`${this.api}/user/register`, value);
    }
    getState() {
        return this.http.get(`${this.api}/state/get-state`);
    }
    postState(value) {
        return this.http.post(`${this.api}/state/create`, value);
    }
    getDistrict() {
        return this.http.get(`${this.api}/district/get-district`);
    }
    postDistrict(value) {
        return this.http.post(`${this.api}/district/create`, value);
    }
    getChild(value) {
        return this.http.get(`${this.api}/child/get-all-child`, {
            params: value,
        });
    }
    getChildByDistrict(district_id) {
        return this.http.get(`${this.api}/child/get-child-by-district`, {
            params: {
                district_id: district_id,
            },
        });
    }
    getDistrictByState(state_id) {
        console.log(state_id);
        return this.http.get(`${this.api}/district/get-district-by-state`, {
            params: {
                state_id: state_id,
            },
        });
    }
    postChild(value) {
        return this.http.post(`${this.api}/child/create`, value);
    }
    registerUser(value) {
        return this.http.post(`${this.api}/api/user/register`, value);
    }
    setUser(value) {
        this._user = value;
        console.log(this._user);
    }
    getUser() {
        return this._user;
    }
    getUserByToken(token) {
        return this.http.get(`${this.api}/user/get-user-by-token`, {
            params: {
                token: token,
            },
        });
    }
    getNotifications(email) {
        console.log('Notification called' + email);
        return this.http.get(`${this.api}/api/user/notifications`, {
            params: {
                email: email,
            },
        });
    }
}
UserauthService.ɵfac = function UserauthService_Factory(t) { return new (t || UserauthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserauthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserauthService, factory: UserauthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserauthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
    production: false,
    url: 'http://localhost:3002',
    razorpay_key: 'rzp_live_ga0ONC1suXLJ8v'
};
//nrUIoje1eEWvfD4YGtS8yvRM
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    window.console.log = function () { };
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Anrahya/xboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map