import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViolenciaSexualPage } from '../violencia-sexual/violencia-sexual';
import { ViolenciaIntrafamiliarPage } from '../violencia-intrafamiliar/violencia-intrafamiliar';
import { ViolenciaEconomicaPage } from '../violencia-economica/violencia-economica';
import { ViolenciaPsicologicaPage } from '../violencia-psicologica/violencia-psicologica';
import { ViolenciaPoliticaPage } from '../violencia-politica/violencia-politica';

/**
 * Generated class for the InicioappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-inicioapp',
  templateUrl: 'inicioapp.html',
})
export class InicioappPage {

  constructor(public navCtrl: NavController) {
  }

  violenciaSexual() {
    this.navCtrl.push(ViolenciaSexualPage);
  }

  violenciaIntrafamiliar() {
    this.navCtrl.push(ViolenciaIntrafamiliarPage);
  }

  violenciaEconomica() {
    this.navCtrl.push(ViolenciaEconomicaPage);
  }

  violenciaPsicologica() {
    this.navCtrl.push(ViolenciaPsicologicaPage);
  }

  violenciaPolitica() {
    this.navCtrl.push(ViolenciaPoliticaPage);
  }

}
