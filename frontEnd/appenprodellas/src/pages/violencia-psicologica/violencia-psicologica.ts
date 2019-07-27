import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViolenciaPsicologicaDetallePage } from '../violencia-psicologica-detalle/violencia-psicologica-detalle';

/**
 * Generated class for the ViolenciaPsicologicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-violencia-psicologica',
  templateUrl: 'violencia-psicologica.html',
})
export class ViolenciaPsicologicaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  detalle() {
    this.navCtrl.push(ViolenciaPsicologicaDetallePage);
  }

}
