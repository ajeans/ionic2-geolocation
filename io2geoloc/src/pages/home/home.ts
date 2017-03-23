import { Component } from '@angular/core';
import { Geolocation, Coordinates } from '@ionic-native/geolocation';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coords : Coordinates;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    geolocation.getCurrentPosition().then((pos) => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      this.coords = pos.coords;
    }).catch((error) => {
      console.log('Error getting location', error);
    })
  }

}
