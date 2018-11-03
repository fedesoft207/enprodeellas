import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PuntosatencionPage } from '../puntosatencion/puntosatencion';
import { HomePage } from '../home/home';
import { InicioappPage } from '../inicioapp/inicioapp';
import { LineasatencionPage } from '../lineasatencion/lineasatencion';
import { BotonPanicoPage } from '../boton-panico/boton-panico';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  home: any;
  loginPage: any;
  inicioApp: any;
  lineasAtencion: any;
  puntosAtencion: any;
  botonPanico: any;

  usuarioLogueado: Number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.home = HomePage;
    this.loginPage = LoginPage;
    this.inicioApp = InicioappPage;
    this.lineasAtencion = LineasatencionPage;
    this.puntosAtencion = PuntosatencionPage;
    this.botonPanico = BotonPanicoPage;

    this.verificarSiUsuarioEstaLogueado();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  /*ionViewWillEnter() {
    this.verificarSiUsuarioEstaLogueado();
  }*/

  verificarSiUsuarioEstaLogueado() {
    if (window.localStorage['token']) {
      this.usuarioLogueado = 1;
    }
  }

}
