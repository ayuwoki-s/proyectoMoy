import { Component, OnInit, Input } from '@angular/core';
import { Maestro } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-maestro-detalle',
  templateUrl: './maestro-detalle.component.html',
  styleUrls: ['./maestro-detalle.component.scss'],
})
export class MaestroDetalleComponent implements OnInit {

  @Input() maestro: Maestro;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  regresar() {
    this.modalCtrl.dismiss();
  }

}
