import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LineasatencionPage } from '../lineasatencion/lineasatencion';
import { LoginPage } from '../login/login';
import { PuntosatencionPage } from '../puntosatencion/puntosatencion';
import { RegistroPage } from '../registro/registro';
import { InicioappPage } from '../inicioapp/inicioapp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loginAcceso() {
    this.navCtrl.push(LoginPage);
  }

  registrarUsuario() {
    this.navCtrl.push(RegistroPage);
  }

  inicioApp() {
    this.navCtrl.push(InicioappPage);
  }
   
  puntosAtencion() {
    this.navCtrl.push(PuntosatencionPage);
  }

  lineasAtencion() {
    this.navCtrl.push(LineasatencionPage);
  }

  

}
