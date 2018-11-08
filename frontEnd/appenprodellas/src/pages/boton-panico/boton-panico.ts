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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotonPanicoPage');
  }                               
  
}
