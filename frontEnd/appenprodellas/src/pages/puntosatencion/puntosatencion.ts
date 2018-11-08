import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the PuntosatencionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-puntosatencion',
  templateUrl: 'puntosatencion.html',
})
export class PuntosatencionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuntosatencionPage');
  }

  obtenerPosicion() {
    this.geolocation.getCurrentPosition().then((coordenadas) => {
      console.log(coordenadas);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  mostrarUbicacion() {
    this.navCtrl.push(PuntosatencionPage);
  }

}
