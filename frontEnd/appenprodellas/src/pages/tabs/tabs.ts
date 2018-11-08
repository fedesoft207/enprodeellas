import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PuntosatencionPage } from '../puntosatencion/puntosatencion';
import { HomePage } from '../home/home';
import { InicioappPage } from '../inicioapp/inicioapp';
import { LineasatencionPage } from '../lineasatencion/lineasatencion';
import { BotonPanicoPage } from '../boton-panico/boton-panico';
//import { Tabs } from 'ionic-angular/umd/navigation/nav-interfaces';

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

  @ViewChild('idTabs') tabRef: Tabs;

  home: any;
  loginPage: any;
  inicioApp: any;
  lineasAtencion: any;
  puntosAtencion: any;
  botonPanico: any;

  usuarioLogueado: Number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.home = HomePage;
    this.loginPage = LoginPage;
    this.inicioApp = InicioappPage;
    this.lineasAtencion = LineasatencionPage;
    this.puntosAtencion = PuntosatencionPage;
    this.botonPanico = BotonPanicoPage;
  }

  ionViewDidLoad() {
    this.verificarSiUsuarioEstaLogueado();
  }

  /*ionViewWillEnter() {
    this.verificarSiUsuarioEstaLogueado();
  }*/

  verificarSiUsuarioEstaLogueado() {
    if (window.localStorage['token']) {
      //this.usuarioLogueado = 1;
      this.tabRef.getByIndex(0).show = false;
      this.tabRef.getByIndex(4).show = true;
      this.tabRef.select(1);//Se muestra el tab conozca más
    }
  }

  cerrarSesion() {
    this.tabRef.getByIndex(0).show = true;
    this.tabRef.getByIndex(4).show = false;

    window.localStorage.clear();
    this.menuCtrl.close();
    this.tabRef.select(0);//Se muestra el tab de menú Inicio
  }

}
