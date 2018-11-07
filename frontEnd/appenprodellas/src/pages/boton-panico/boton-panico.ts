import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Tabs } from 'ionic-angular/umd/navigation/nav-interfaces';

/**
 * Generated class for the BotonPanicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boton-panico',
  templateUrl: 'boton-panico.html',
})
export class BotonPanicoPage {

  //@ViewChild('idTabs') referenciaTabs: Tabs;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotonPanicoPage');
  }                               
   
  cerrarSesion(){
    //Nueva forma
    this.navCtrl.parent.getByIndex(0).show = true;
    this.navCtrl.parent.getByIndex(4).show = false;
    
    window.localStorage.clear();
    this.menuCtrl.close();
    this.navCtrl.parent.select(0);//Se muestra el tab de menú Inicio
  }
}
