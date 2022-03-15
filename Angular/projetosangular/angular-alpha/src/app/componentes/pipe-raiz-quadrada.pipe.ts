import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeRaizQuadrada'
})
export class PipeRaizQuadradaPipe implements PipeTransform {

  transform(numero: number): number {
    return Math.sqrt(numero)
  }

}
