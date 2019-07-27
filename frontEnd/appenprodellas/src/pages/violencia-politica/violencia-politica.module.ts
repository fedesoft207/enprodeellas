import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViolenciaPoliticaPage } from './violencia-politica';

@NgModule({
  declarations: [
    ViolenciaPoliticaPage,
  ],
  imports: [
    IonicPageModule.forChild(ViolenciaPoliticaPage),
  ],
})
export class ViolenciaPoliticaPageModule {}
