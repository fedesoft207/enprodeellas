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
import { DanoPatrimonialPage } from '../pages/dano-patrimonial/dano-patrimonial';
import { ViolenciaEconomicaPage } from '../pages/violencia-economica/violencia-economica';
import { ViolenciaIntrafamiliarPage } from '../pages/violencia-intrafamiliar/violencia-intrafamiliar';
import { ViolenciaPoliticaPage } from '../pages/violencia-politica/violencia-politica';
import { ViolenciaPsicologicaPage } from '../pages/violencia-psicologica/violencia-psicologica';
import { ViolenciaSexualPage } from '../pages/violencia-sexual/violencia-sexual';
import { BotonPanicoPage } from '../pages/boton-panico/boton-panico';
import { Geolocation } from '@ionic-native/geolocation';
import { ViolenciaPsicologicaDetallePage } from '../pages/violencia-psicologica-detalle/violencia-psicologica-detalle';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    LineasatencionPage,
    PuntosatencionPage,
    InicioappPage,
    TabsPage,
    DanoPatrimonialPage,
    ViolenciaEconomicaPage,
    ViolenciaIntrafamiliarPage,
    ViolenciaPoliticaPage,
    ViolenciaPsicologicaPage,
    ViolenciaSexualPage,
    BotonPanicoPage,
    ViolenciaPsicologicaDetallePage,
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
    TabsPage,
    DanoPatrimonialPage,
    ViolenciaEconomicaPage,
    ViolenciaIntrafamiliarPage,
    ViolenciaPoliticaPage,
    ViolenciaPsicologicaPage,
    ViolenciaSexualPage,
    BotonPanicoPage,
    ViolenciaPsicologicaDetallePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    HttpClient,
    Geolocation
  ]
})
export class AppModule {}
