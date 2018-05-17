import { Component } from '@angular/core';
import { IonicPage, App, NavController, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
declare var $: any;
@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(private app: App, private navCtrl: NavController, private modalCtrl: ModalController, private auth: AuthProvider) {}
  logout(): void {
      this.auth.logout().then(() => {
       this.app.getRootNav().setRoot('auth-signin'); 
        });
    }
    
  
  
  public buttonClicked: boolean = false; //Whatever you want to initialise it as

    public onButtonClick() {

        this.buttonClicked = !this.buttonClicked;
    }
  
}
