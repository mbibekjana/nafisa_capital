import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthProvider } from '../providers/auth/auth';
import { DataProvider } from '../providers/data/data';
import { FunctionsProvider } from '../providers/functions/functions';

// Add your Fireabse Config here.
const firebaseConfig = {
  apiKey:'AIzaSyACM7bkQHy3hKv36DLclSAimS9Mxa5kY6I',
  authDomain:'firstfirebase-1cb83.firebaseapp.com',
  databaseURL:'https://firstfirebase-1cb83.firebaseio.com',
  projectId:'firstfirebase-1cb83',
  storageBucket:'firstfirebase-1cb83.appspot.com',
  messagingSenderId:'300136431908'
};



@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    DataProvider,
    InAppBrowser,
    FunctionsProvider,
    FunctionsProvider
  ]
})
export class AppModule {}
