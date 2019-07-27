import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  username: String;
  password: String;
  email: String;
  numeroCelular: String;
  fechaCreacion: Date;

  formRegistro: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public restProvider: RestProvider) {
    this.formRegistro = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      numeroCelular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registrarUsuario() {
    console.log('username=' + this.username);
    console.log('password=' + this.password);
    console.log('email=' + this.email);
    console.log('numeroCelular=' + this.numeroCelular);

    if (this.formRegistro.valid) {

      var data = {
        'username': this.username,
        'password': this.password,
        'correo': this.email,
        'numero_celular': this.numeroCelular
      };

      this.restProvider.registrarUsuario(data)
        .then((result: any) => {
          this.navCtrl.parent.select(0);//Se muestra el tab de menú Inicio
        }, (err) => {
          console.log("Ocurrio un error al intentar iniciar sesion");
          console.log(err);
        });

    }

  }

}
