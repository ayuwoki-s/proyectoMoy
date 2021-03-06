import { Component, OnInit, Input } from '@angular/core';
import { Perfil } from 'src/app/interfaces/interfacePer';
import { ActionSheetController } from '@ionic/angular';
import { PerfilService } from '../../services/perfil.service';



@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
})
export class PersonaComponent implements OnInit {

  @Input() perfil: Perfil; // input por que esto viene del padre

  constructor(
    // public perfilServ: PerfilService
    ) { }

  ngOnInit() {
    /*this.perfilServ.getPerfil().subscribe( data => {
      this.perfil = data;
    });*/
    console.log('data del hijo', this.perfil);
  }

}
