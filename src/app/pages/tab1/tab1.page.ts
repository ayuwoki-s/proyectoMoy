import { Component, OnInit, Input } from '@angular/core';
import { Perfil } from '../../interfaces/interfacePer';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  perfil: Perfil;

  constructor(
    private perfilServ: PerfilService
  ) { }

  ngOnInit() {
    this.perfilServ.getPerfil().subscribe( data => {
      console.log(data);
      this.perfil = data;
    });

  }

}
