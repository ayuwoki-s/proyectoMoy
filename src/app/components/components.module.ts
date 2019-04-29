import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MaestrosComponent } from './maestros/maestros.component';

@NgModule({
  declarations: [
    MaestrosComponent
  ],
  exports: [
    MaestrosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
