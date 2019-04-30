import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Maestro } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  maestros: Maestro[] = [];

  constructor( private storage: Storage,
               public toastController: ToastController
    ) { }

  async presentToast( message: string) {
    const toast = await this.toastController.create({
      message,
      position: 'middle',
      cssClass: 'toast',
      duration: 2000
    });
    toast.present();
  }

  guardarMaestro( maestro: Maestro) {
    const existe = this.maestros.find( teacher => teacher.Nombre === maestro.Nombre );

    if (!existe) {
      this.maestros.unshift( maestro ); // guardar en arreglo local

      this.storage.set('agregados', this.maestros ); // guardar en bd
    }

    this.presentToast('Maestro agregado');

  }

  async cargarMaestros() {
    const agregados = await this.storage.get('agregados');
    if ( agregados ) {
      this.maestros = agregados;
    }
  }

  borrarMaestro( maestro: Maestro ) {

    this.maestros = this.maestros.filter( teacher => teacher.Nombre !== maestro.Nombre );

    this.storage.set('agregados', this.maestros ); // guardar en bd
    console.log( 'el nuevo arr es', this.maestros);

    this.presentToast('Maestro eliminado');
  }

}
