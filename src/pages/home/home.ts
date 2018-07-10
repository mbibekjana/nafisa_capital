import { Component,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicPage,
  App, NavController, ModalController,LoadingController, Platform } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

declare var $: any;
@IonicPage({
  name: 'home'
})
@Component({
  template: ''
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private auth: AuthProvider,
              private app: App,
              private platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private iab: InAppBrowser) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      const loading = this.loadingCtrl.create({
        content: 'Please wait we are searching..'
      });
      loading.present();
      this.auth.user.first().subscribe((user) => {
        console.log(user.email);
        const browser = this.iab.create('http://nafisa.sparkscodes.com/home?email=' + user.email,'_self', { location:'no',zoom:'no',hidden:'yes' });
        browser.on('loadstop').subscribe((e) => {
          splashScreen.hide();
          browser.show();
        });
      });
      //const browser = this.iab.create('http://nafisa.sparkscodes.com/home' + user.email,'_self', { location:'no',zoom:'no' });

    });

  }



}
// export class HomePage {
//
//   URL: any;
//   constructor(private sanitize: DomSanitizer,
//               private app: App,
//               private navCtrl: NavController,
//               private modalCtrl: ModalController,
//               private auth: AuthProvider
//   ) {
//      this.URL = sanitize.bypassSecurityTrustResourceUrl('http://demo.sparkscodes.com/nafisa/index.php');
//   }
//
//
//   logout(): void {
//     this.auth.logout().then(() => {
//       this.app.getRootNav().setRoot('auth-signin');
//     });
//   }
//
//
//
//   public buttonClicked: boolean = false; // Whatever you want to initialise it as
//
//   public onButtonClick() {
//
//     this.buttonClicked = !this.buttonClicked;
//   }
//
// }
