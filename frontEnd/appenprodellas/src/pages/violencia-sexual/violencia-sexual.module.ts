import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViolenciaSexualPage } from './violencia-sexual';
import { ModalController, NavParams } from 'ionic-angular';


@NgModule({
  declarations: [
    ViolenciaSexualPage,
  ],
  imports: [
    IonicPageModule.forChild(ViolenciaSexualPage),
  ],
})
export class ViolenciaSexualPageModule {}
