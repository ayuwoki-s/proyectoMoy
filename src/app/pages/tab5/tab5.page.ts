import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(public alet: AlertController) { }

  ngOnInit() {
  }

  async regis() {
    const alert = await this.alet.create({
      header: 'Registro de.',
      subHeader: 'Usuario:',
      message: 'Guardado!',
      buttons: ['Entrendido']
    });

    await alert.present();
  }
}
