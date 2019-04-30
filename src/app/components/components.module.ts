import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MaestrosComponent } from './maestros/maestros.component';
import { MaestroComponent } from './maestro/maestro.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    MaestrosComponent,
    MaestroComponent
  ],
  exports: [
    MaestrosComponent,
    MaestroComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
