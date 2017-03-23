import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { Geolocation } from '@ionic-native/geolocation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private geolocation: Geolocation) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      geolocation.getCurrentPosition().then((pos) => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      }).catch((error) => {
        console.log('Error getting location', error);
      });

      // let watch = Geolocation.watchPosition();
      // watch.subscribe((data) => {
      //   // data can be a set of coordinates, or an error (if an error occurred).
      //   // data.coords.latitude
      //   // data.coords.longitude
      // });
    });
  }
}
