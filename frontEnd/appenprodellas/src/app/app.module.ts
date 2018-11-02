import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { LineasatencionPage } from '../pages/lineasatencion/lineasatencion';
import { PuntosatencionPage } from '../pages/puntosatencion/puntosatencion';
import { InicioappPage } from '../pages/inicioapp/inicioapp';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    LineasatencionPage,
    PuntosatencionPage,
    InicioappPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    LineasatencionPage,
    PuntosatencionPage,
    InicioappPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    HttpClient
  ]
})
export class AppModule {}
