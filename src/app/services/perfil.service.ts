import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from '../interfaces/interfacePer';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  perfil: any[] = [];
  constructor( private http: HttpClient, private router: Router) { }

  getPerfil() {
    return this.http.get<any>('./assets/data/perfil.json');
  }

  navigate(){
    this.router.navigate(['/tab1']);
  }

  async validar(user: string, pass: string) {
    this.getPerfil().subscribe(perfil => {
      this.perfil = perfil;
      // console.log('perfil es', this.perfil);

    });
    console.log('recibi', user, pass);
    const vcorreo = await this.perfil.find(per => per.Correo === user);
    const vpass = await this.perfil.find(per => per.pass === pass);
    //this.perfil = vcorreo;
    console.log('validar correo', vcorreo);
    console.log('validar pass', vpass);
    if(!isNullOrUndefined(vcorreo)){
      console.log('bien correo');
      
    }else{
      console.log('mal correo');
    }
  }
}