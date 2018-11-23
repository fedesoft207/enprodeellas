import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions
} from '@ionic-native/google-maps';


/**
 * Generated class for the ViolenciaPsicologicaDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-violencia-psicologica-detalle',
  templateUrl: 'violencia-psicologica-detalle.html',
})
export class ViolenciaPsicologicaDetallePage {

  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public geolocation: Geolocation) {  }

  ionViewDidLoad() {
    this.obtenerPosicion();
    console.log('ionViewDidLoad ViolenciaPsicologicaDetallePage');
  }

  obtenerPosicion() {
    this.geolocation.getCurrentPosition().then((coordenadas) => {

      console.log(coordenadas);
      this.loadMap(coordenadas);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  loadMap(coordenadas) {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: coordenadas.coords.latitude,
          lng: coordenadas.coords.longitude
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.map.addMarkerSync({
      title: 'Ubicación actual',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: coordenadas.coords.latitude,
        lng: coordenadas.coords.longitude
      }
    });

    this.map.addMarkerSync({
      title: 'Fiscalía',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:4.641812,
        lng: -74.064813
      }
    });

    this.map.addMarkerSync({
      title: 'Comisaria de Familia',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:4.650805,
        lng: -74.066578
      }
    });
  }


}
