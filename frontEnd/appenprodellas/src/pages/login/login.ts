import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public restProvider: RestProvider) {
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
      this.navCtrl.parent.getByIndex(0).show = false;
      this.navCtrl.parent.getByIndex(4).show = true;
      window.localStorage['token'] = result.key;
      this.navCtrl.setRoot(BotonPanicoPage);
    }, (err) => {
      console.log("Ocurrio un error al intentar iniciar sesion");
      console.log(err);
      if (err.status === 400 ){
        console.log("Ocurrio un error 400");
        //console.log(err.error.non_field_errors[0]);
        if( err.error.non_field_errors ){
          console.log("es un error de non_field_errors");
          this.mostrarAlertaOK('Error al iniciar sesión', err.error.non_field_errors[0]);
        } else if ( err.error.password ) {
          this.mostrarAlertaOK('Error al iniciar sesión', '(Contraseña). ' + err.error.password[0]);
        }
      }
    });
  }

  mostrarAlertaOK(titulo, mensaje) {
    const alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }

}
