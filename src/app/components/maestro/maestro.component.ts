import { Component, OnInit, Input } from '@angular/core';
import { Maestro } from 'src/app/interfaces/interfaces';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { MaestroDetalleComponent } from '../maestro-detalle/maestro-detalle.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.scss'],
})
export class MaestroComponent implements OnInit {

  @Input() maestro: Maestro;
  @Input() addPoint;
  constructor(
    public actionSheetController: ActionSheetController,
    private storageService: StorageService,
    private modalCtrl: ModalController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  async abrirOpciones() {

    let saveDeleteBt;

    if (this.addPoint) {
      // borrar

      saveDeleteBt =  {
        text: 'Eliminar',
        icon: 'trash',
        cssClass: 'color',
        handler: () => {
          this.storageService.borrarMaestro( this.maestro );
        }
      };

    } else {

    saveDeleteBt =  {
        text: 'Añadir',
        icon: 'heart',
        cssClass: 'color',
        handler: () => {
          this.storageService.guardarMaestro( this.maestro );
        }
      };
    }

    const actionSheet = await this.actionSheetController.create({
      buttons: [
        saveDeleteBt,
        {
          text: 'Ver Perfil',
          icon: 'contact',
          cssClass: 'color',
          handler: () => {
            this.abrirDetalle();
          }
        },
        {
          text: 'Contactar',
          icon: 'chatbubbles',
          cssClass: 'color',
          handler: () => {
            this.router.navigate(['/tab3']);
          }
        },
       {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        cssClass: 'color',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }

  async abrirDetalle() {
    const DETALLE = await this.modalCtrl.create({
      component: MaestroDetalleComponent,
      componentProps: {
        maestro: this.maestro
      }
    });

    await DETALLE.present();
  }

}
