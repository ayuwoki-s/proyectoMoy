import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'], 
})
export class Tab4Page implements OnInit {
  usuario = {
    correo: '',
    pass: '',
  };

  constructor(
    public storageServ: StorageService,
    private perfs: PerfilService
  ) { 
    // console.log('mis datos', this.usuario.correo, this.usuario.pass)
  }

  ngOnInit() {
  }

  registrar(){
    this.perfs.validar(this.usuario.correo, this.usuario.pass);
  }
}
