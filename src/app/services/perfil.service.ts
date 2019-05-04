import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from '../interfaces/interfacePer';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor( private http: HttpClient) { }

  getPerfil() {
    return this.http.get<Perfil>('./assets/data/perfil.json');
  }
}