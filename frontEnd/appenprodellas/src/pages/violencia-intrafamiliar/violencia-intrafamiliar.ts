import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViolenciaIntrafamiliarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-violencia-intrafamiliar',
  templateUrl: 'violencia-intrafamiliar.html',
})
export class ViolenciaIntrafamiliarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViolenciaIntrafamiliarPage');
  }

}
