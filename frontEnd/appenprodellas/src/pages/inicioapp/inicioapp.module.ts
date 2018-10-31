import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioappPage } from './inicioapp';

@NgModule({
  declarations: [
    InicioappPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioappPage),
  ],
})
export class InicioappPageModule {}
