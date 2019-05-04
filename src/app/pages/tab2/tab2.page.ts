import { Component, OnInit } from '@angular/core';
import { MaestrosService } from 'src/app/services/maestros.service';
import { Maestro } from 'src/app/interfaces/interfaces';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  maestros: Maestro;
  titulo = {
    uno: 'Maestros disponibles', 
    dos: 'Maestros agregados',
  };

  constructor(private maestrosServ: MaestrosService, public storageServ: StorageService) {}

  ngOnInit() {
    this.maestrosServ.getMaestros().subscribe( data => {
      this.maestros = data;
    });
  }

}
