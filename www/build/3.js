webpackJsonp([3],{

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninModule", function() { return SigninModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SigninModule = (function () {
    function SigninModule() {
    }
    return SigninModule;
}());
SigninModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signin__["a" /* Signin */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signin__["a" /* Signin */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__signin__["a" /* Signin */]
        ]
    })
], SigninModule);

//# sourceMappingURL=signin.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Signin = (function () {
    function Signin(app, navCtrl, loadingCtrl, modalCtrl, formBuilder, storage, auth) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.auth = auth;
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    Signin.prototype.signInWithEmail = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.auth.signInWithEmailAndPassword(this.form.value.email, this.form.value.password)
            .then(function (data) {
            console.log("uid", data.uid);
            loading.dismiss();
            _this.navCtrl.setRoot('tabs');
        }, function (error) {
            loading.dismiss();
            switch (error.code) {
                case 'auth/invalid-email':
                    _this.errorMessage = 'Please enter a valid email address.';
                    break;
                case 'auth/wrong-password':
                    _this.errorMessage = 'Incorrect username and password combination.';
                    break;
                case 'auth/user-not-found':
                    _this.errorMessage = 'user not found Contcat suppor team';
                    break;
                default:
                    _this.errorMessage = error;
                    break;
            }
            _this.hasError = true;
        });
    };
    Signin.prototype.navigateTo = function (page) {
        this.navCtrl.push(page);
    };
    return Signin;
}());
Signin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'auth-signin'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"/Users/jayanta/ionic/Ionic3-firebase3/src/pages/auth/signin/signin.html"*/'\n\n\n\n<ion-content padding>\n\n    <div class="login_sec">\n\n	<div class="login_container">\n\n		<div class="login_logo"><img src="images/logo.png" alt=""></div>\n\n		<h5>Login to your account</h5>\n\n		<form [formGroup]="form" (ngSubmit)="signInWithEmail()">\n\n			<div class="form-group">\n\n				<span class="icon"><img src="images/user-icon.png" alt=""></span>\n\n				<ion-item>\n\n        <ion-input type="email" class="form-control" placeholder="Email or Mobile" formControlName="email"></ion-input>\n\n      </ion-item>\n\n     \n\n			</div>\n\n			<div class="form-group">\n\n				\n\n			  <span class="icon"><img src="images/key-icon.png" alt=""></span>	\n\n      <ion-item>\n\n		  \n\n        <ion-input type="password" class="form-control" placeholder="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n			</div>\n\n			<button  type="submit" class="login_submit">Login</button>\n\n			<p><a (click)="navigateTo(\'auth-signup\')" href="javascript:void(0)">Sign Up</a></p>\n\n			<p style="padding-left: 5px" ion-text color="danger" *ngIf="hasError">{{errorMessage}}</p>\n\n			\n\n			<div class="divider"><span>Or</span></div>\n\n			<div class="login_social">\n\n				<a href="javascript:void(0);" class="google"><i class="fab fa-google"></i> Google</a>\n\n				<a href="javascript:void(0);" class="facebook"><i class="fab fa-facebook-f"></i> Facebook</a>\n\n			</div>\n\n		</form>\n\n	</div>\n\n</div>\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar class="footer">\n\n    <div (click)="navigateTo(\'auth-signup\')">\n\n      <span>Do not have an account? <strong>About Us </strong>.</span>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/jayanta/ionic/Ionic3-firebase3/src/pages/auth/signin/signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
], Signin);

//# sourceMappingURL=signin.js.map

/***/ })

});
//# sourceMappingURL=3.js.map