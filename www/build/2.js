webpackJsonp([2],{

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupModule = (function () {
    function SignupModule() {
    }
    return SignupModule;
}());
SignupModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* Signup */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* Signup */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* Signup */]
        ]
    })
], SignupModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Storage } from '@ionic/storage';

var Signup = (function () {
    function Signup(
        // private app: App,
        navCtrl, 
        // private modalCtrl: ModalController,
        loadingCtrl, formBuilder, 
        // private storage: Storage,
        auth) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    Signup.prototype.signUp = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'We are creating a user for you ....'
        });
        loading.present();
        this.auth.createUser(this.form.value.email, this.form.value.password).then(function () {
            loading.dismiss();
            _this.navCtrl.setRoot('tabs');
        }, function (error) {
            loading.dismiss();
            switch (error.code) {
                case 'auth/invalid-email':
                    _this.errorMessage = 'Please enter a valid email address.';
                    break;
                case 'auth/weak-password':
                    _this.errorMessage = 'The password must be at least 6 characters long.';
                    break;
                case 'auth/email-already-in-use':
                    _this.errorMessage = 'This email has already been used for another account.';
                    break;
                default:
                    _this.errorMessage = error;
                    break;
            }
            _this.hasError = true;
        });
    };
    Signup.prototype.navigatePop = function () {
        this.navCtrl.pop();
    };
    return Signup;
}());
Signup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'auth-signup'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/jayanta/ionic/Ionic3-firebase3/src/pages/auth/signup/signup.html"*/'<ion-content padding>\n\n  <ion-header no-border>\n\n    <ion-navbar transparent>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-icon name="person" class="user-icon"></ion-icon>\n\n  <div padding>\n\n    <form [formGroup]="form" (ngSubmit)="signUp()">\n\n      <ion-item>\n\n        <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="password" placeholder="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n      <button ion-button block outline color="primary" class="signup-button" \n\n        type="submit" [disabled]="!form.valid"\n\n      >\n\n        Register\n\n      </button>\n\n    </form>\n\n    <p ion-text color="danger" *ngIf="hasError">{{errorMessage}}</p>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar class="footer">\n\n    <div (click)="navigatePop()">\n\n      <span>Already have an account? <strong>Sign in</strong>.</span>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/jayanta/ionic/Ionic3-firebase3/src/pages/auth/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], Signup);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=2.js.map