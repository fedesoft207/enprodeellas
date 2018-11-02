import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
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

  inicioApp(){
    console.log(this.email);
    console.log(this.password);

    var data = {
      'username': this.email,
      'password': this.password
    };

    this.restProvider.login(data)
    .then((result:any) => {
      window.localStorage['token'] = result.key;
      this.navCtrl.setRoot(InicioappPage);
    }, (err) => {
      console.log(err);
    });
  }

}
