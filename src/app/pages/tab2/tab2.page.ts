import { Component, OnInit } from '@angular/core';
import { MaestrosService } from 'src/app/services/maestros.service';
import { Maestro } from 'src/app/interfaces/interfaces';

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

  constructor(private maestrosServ: MaestrosService) {}

  ngOnInit() {
    this.maestrosServ.getMaestros().subscribe( data => {
      this.maestros = data;
      console.log('profes:', this.maestros);
    });
  }
}
