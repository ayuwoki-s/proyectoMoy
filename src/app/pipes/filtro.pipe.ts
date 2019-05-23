import { Pipe, PipeTransform } from '@angular/core';
import { Maestro } from '../interfaces/interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): Maestro[] {

    if (texto === '') {
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter( maestro => {
      return maestro.areaa.toLowerCase()
      .includes( texto);
    });

  }

}
