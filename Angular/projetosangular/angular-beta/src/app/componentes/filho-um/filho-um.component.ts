import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-filho-um',
  templateUrl: './filho-um.component.html',
  styleUrls: ['./filho-um.component.css'],
  providers: [SharedService]
})
export class FilhoUmComponent {
  
  ValorAssocFI

  constructor(private refInstFi: SharedService) { 
  this.ValorAssocFI = refInstFi.obterValorCompartilhado()
    console.log('Valor associado ao componente filho-um : ' + this.ValorAssocFI.toString())

  }
}
