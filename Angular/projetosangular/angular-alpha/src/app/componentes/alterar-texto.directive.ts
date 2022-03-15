import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlterarTexto]'
})
export class AlterarTextoDirective {

  constructor(elementoHTML: ElementRef) { 
    // fazer uso da função auxiliar log()
    console.log(elementoHTML)
    elementoHTML.nativeElement.innerText = 'Este texto é inserido a partir da diretiva Customizada/Componente!'
  }

}
