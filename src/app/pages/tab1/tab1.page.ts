import { Component, OnInit} from '@angular/core';
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
      this.perfil = data;
      console.log('mi perfil es:', this.perfil);
    });

  }

}
