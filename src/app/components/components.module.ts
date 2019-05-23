import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MaestrosComponent } from './maestros/maestros.component';
import { MaestroComponent } from './maestro/maestro.component';
import { PipesModule } from '../pipes/pipes.module';
import { PersonaComponent } from './persona/persona.component';
import { MaestroDetalleComponent } from './maestro-detalle/maestro-detalle.component';

@NgModule({
  entryComponents: [
    MaestroDetalleComponent
  ],
  declarations: [
    MaestrosComponent,
    MaestroComponent,
    PersonaComponent,
    MaestroDetalleComponent
  ],
  exports: [
    MaestrosComponent,
    MaestroComponent,
    PersonaComponent,
    MaestroDetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
