import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from '../interfaces/interfacePer';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  perfil: any[] = [];
  constructor( private http: HttpClient,
               private router: Router,
               public alerta: AlertController) { }

  getPerfil() {
    return this.http.get<any>('./assets/data/perfil.json');
  }

  navigate() {
    this.router.navigate(['/tab1']);
  }

  async presentAlert() {
    const alert = await this.alerta.create({
      header: 'Error de: ',
      subHeader: 'Inicio de Sesion',
      message: 'Correo o contraseña incorrectos.',
      buttons: ['Entrendido']
    });

    await alert.present();
  }

  async validar(user: string, pass: string) {
    this.getPerfil().subscribe(perfil => {
      this.perfil = perfil;
      // console.log('perfil es', this.perfil);

    });
    console.log('recibi', user, pass);
    const vcorreo = await this.perfil.find(per => per.Correo === user);
    const vpass = await this.perfil.find(per => per.pass === pass);
    // this.perfil = vcorreo;
    console.log('validar correo', vcorreo);
    console.log('validar pass', vpass);
// tslint:disable-next-line: deprecation
    if ( !isNullOrUndefined(vcorreo) && !isNullOrUndefined(vpass) ) {
      alert('bien correo y pass');
      this.router.navigate(['/tab1']);
    } else {
      console.log('mal correo');
      // alert('mal correo o pass');
      this.presentAlert();
    }
  }
}