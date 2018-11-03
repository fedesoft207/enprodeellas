import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { BotonPanicoPage } from '../boton-panico/boton-panico';
import { InicioappPage } from '../inicioapp/inicioapp';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:any;
  password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    if(window.localStorage['token']){
      this.navCtrl.setRoot(InicioappPage);
    }
  }

  iniciarSesion(){

    var data = {
      'username': this.email,
      'password': this.password
    };

    this.restProvider.login(data)
    .then((result:any) => {
      this.navCtrl.parent.getByIndex(4).show = true;
      window.localStorage['token'] = result.key;
      this.navCtrl.setRoot(BotonPanicoPage);
    }, (err) => {
      console.log(err);
    });
  }

}
