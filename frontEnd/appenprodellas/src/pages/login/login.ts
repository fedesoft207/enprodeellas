import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { BotonPanicoPage } from '../boton-panico/boton-panico';
import { InicioappPage } from '../inicioapp/inicioapp';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  email: any;
  password: any;

  formLogin: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController, public restProvider: RestProvider) {
    //Ejemplo uso de FormBuilder: https://blog.ng-classroom.com/blog/ionic2/validations-in-forms/
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    if (window.localStorage['token']) {
      this.navCtrl.setRoot(InicioappPage);
    }
  }

  iniciarSesion() {

    if (this.formLogin.valid) {

      var data = {
        'username': this.email,
        'password': this.password
      };

      this.restProvider.login(data)
        .then((result: any) => {
          this.navCtrl.parent.getByIndex(0).show = false;
          this.navCtrl.parent.getByIndex(4).show = true;
          window.localStorage['token'] = result.key;
          this.navCtrl.setRoot(BotonPanicoPage);
        }, (err) => {
          console.log("Ocurrio un error al intentar iniciar sesion");
          console.log(err);
          if (err.status === 400) {
            console.log("Ocurrio un error 400");

            if (err.error.non_field_errors) {
              this.mostrarAlertaOK('Error al iniciar sesión', err.error.non_field_errors[0]);
            } else if (err.error.password) {
              this.mostrarAlertaOK('Error al iniciar sesión', '(Contraseña). ' + err.error.password[0]);
            }
          }
        });

    }
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
