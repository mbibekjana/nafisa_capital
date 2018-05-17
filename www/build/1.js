webpackJsonp([1],{

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(app, navCtrl, modalCtrl, auth) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.buttonClicked = false; //Whatever you want to initialise it as
    }
    HomePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().then(function () {
            _this.app.getRootNav().setRoot('auth-signin');
        });
    };
    HomePage.prototype.showshutter = function () {
        //console.log(divclass);
        $(".menu_section").addClass("show");
        $(".body_overlay").addClass("show");
    };
    HomePage.prototype.hideshutter = function () {
        //console.log(divclass);
        $(".menu_section").removeClass("show");
        $(".body_overlay").removeClass("show");
    };
    HomePage.prototype.onButtonClick = function () {
        this.buttonClicked = !this.buttonClicked;
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'home'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/var/www/nafisa/nafisa_capital/src/pages/home/home.html"*/'\n\n\n\n<ion-content padding>\n\n \n\n\n\n<!--menu start-->\n\n<div class="menu_section show" *ngIf="buttonClicked">\n\n	<div class="user_desc">\n\n		<img src="images/user-img.jpg" alt="">\n\n		<h4>Manas Mondal</h4>\n\n		<p>8420553256</p>\n\n	</div>\n\n	<ul>\n\n		<li><a href="sign_up.php"><img src="images/user-registration-icon.png" alt="">Registration</a></li>\n\n		<li><a href="index.php"><img src="images/invest-icon.png" alt="">Invest</a></li>\n\n		<li><a href="#"><img src="images/report-icon.png" alt="">Reports</a></li>\n\n		<li><a href="#"><img src="images/withdraw-icon.png" alt="">Withdraw</a></li>\n\n		<li><a href="#"><img src="images/user-acc-icon.png" alt="">My Account</a></li>\n\n		<li><a href="#"><img src="images/promo-code-icon.png" alt="">Promo / Partner Code</a></li>\n\n		<li><a href="#"><img src="images/faq-icon.png" alt="">FAQ</a></li>\n\n		<li><a href="#"><img src="images/help-support-icon.png" alt="">Help &amp; Support</a></li>\n\n		<li><a (click)="logout()" href="#"><img src="images/help-support-icon.png" alt="">LOGOUT</a></li>\n\n	</ul>\n\n</div>\n\n<div class="body_overlay show" *ngIf="buttonClicked" (click)="onButtonClick()">\n\n	<span>&times;</span>\n\n</div>\n\n<!--menu end-->\n\n\n\n<!--top bar start-->\n\n<div class="top_bar">\n\n	<div class="container">\n\n		<div class="row m-0">\n\n			<div class="mr-auto">\n\n				<div (click)="onButtonClick()" class="menu_bar">\n\n					<span></span>\n\n					<span></span>\n\n					<span></span>\n\n				</div>\n\n				<div class="logo">\n\n					<span>Nafisa Capital</span>\n\n				</div>\n\n			</div>\n\n			<!--<div>\n\n				<a href="#" class="cart"><img src="images/shopping-cart.png" alt=""></a>\n\n				<a href="#" class="search"><img src="images/search-icon.png" alt=""></a>\n\n			</div>-->\n\n		</div>\n\n	</div>\n\n</div>\n\n\n\n<div class="main_content">\n\n	<div class="container">\n\n	\n\n		<h2 class="title_main">Explore top mutual funds</h2>\n\n		<div class="funds_section row m-0 align-items-start">\n\n			<div class="fund_item">\n\n				<a href="fund_list.php">\n\n					<div class="icon"><img src="images/top-funds-icon.png" alt=""></div>\n\n					<h4>Top equity funds</h4>\n\n				</a>\n\n			</div>\n\n			<div class="fund_item">\n\n				<a href="fund_list.php">\n\n					<div class="icon"><img src="images/tax-saving-icon.png" alt=""></div>\n\n					<h4>Best tax saving funds</h4>\n\n				</a>\n\n			</div>\n\n			<div class="fund_item">\n\n				<a href="fund_list.php">\n\n					<div class="icon"><img src="images/mid-cap-icon.png" alt=""></div>\n\n					<h4>Top mid-cap funds</h4>\n\n				</a>\n\n			</div>\n\n			<div class="fund_item">\n\n				<a href="fund_list.php">\n\n					<div class="icon"><img src="images/top-funds-icon.png" alt=""></div>\n\n					<h4>Top equity funds</h4>\n\n				</a>\n\n			</div>\n\n			<div class="fund_item">\n\n				<a href="fund_list.php">\n\n					<div class="icon"><img src="images/tax-saving-icon.png" alt=""></div>\n\n					<h4>Best tax saving funds</h4>\n\n				</a>\n\n			</div>\n\n			<div class="fund_item">\n\n				<a href="all_category.php">\n\n					<div class="icon"><img src="images/category-icon.png" alt=""></div>\n\n					<h4>View all categories</h4>\n\n				</a>\n\n			</div>\n\n		</div>\n\n		\n\n		<h2 class="title_main">Nafisa Capital recommended plans</h2>\n\n		<div class="plan_section">\n\n			<div class="plan_item">\n\n				<img src="images/save-tax-icon.png" alt="">\n\n				<a href="save_tax.php">\n\n					<h4>Save Tax</h4>\n\n					<p>Easy tax-saving investments</p>\n\n				</a>\n\n			</div>\n\n			<div class="plan_item">\n\n				<img src="images/sip-invest-icon.png" alt="">\n\n				<a href="#">\n\n					<h4>SIP & one time invesment</h4>\n\n					<p>Build wealth:long term invesment</p>\n\n				</a>\n\n			</div>\n\n			<div class="plan_item">\n\n				<img src="images/park-money-icon.png" alt="">\n\n				<a href="#">\n\n					<h4>Park Money</h4>\n\n					<p>Safe short-term investments</p>\n\n				</a>\n\n			</div>\n\n			<div class="plan_item">\n\n				<img src="images/saver-icon.png" alt="">\n\n				<a href="#">\n\n					<h4>Smart Saver</h4>\n\n					<p>4% more than bank account</p>\n\n				</a>\n\n			</div>\n\n			<div class="plan_item">\n\n				<img src="images/investing-icon.png" alt="">\n\n				<a href="#">\n\n					<h4>Advance Investing</h4>\n\n					<p>Sectorial, mid cap & more</p>\n\n				</a>\n\n			</div>\n\n		</div>\n\n		\n\n	</div>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/var/www/nafisa/nafisa_capital/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object])
], HomePage);

var _a, _b, _c, _d;
//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=1.js.map