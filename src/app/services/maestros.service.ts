import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Maestro } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MaestrosService {

  constructor( private http: HttpClient) { }

  getMaestros() {
    return this.http.get<Maestro>('./assets/data/maestros.json');
  }
}
