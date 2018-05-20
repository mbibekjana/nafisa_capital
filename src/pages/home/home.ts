import { Component,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, App, NavController, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { InAppBrowser } from '@ionic-native/in-app-browser';
declare var $: any;
@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              private auth: AuthProvider,
              private app: App,
              private iab: InAppBrowser) {

  }

  ngOnInit() {

    const browser = this.iab.create('http://demo.sparkscodes.com/nafisa/index.php','_self', { location:'no',zoom:'no' });

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
