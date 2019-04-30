import { Component, OnInit, Input } from '@angular/core';
import { Maestro } from 'src/app/interfaces/interfaces';
import { ActionSheetController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

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
    private storageService: StorageService
    ) { }

  ngOnInit() {}

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
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: 'color',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }

}
