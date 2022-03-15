import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-filho-dois',
  templateUrl: './filho-dois.component.html',
  styleUrls: ['./filho-dois.component.css'],
  providers: [SharedService]
})
export class FilhoDoisComponent {

  ValorAssocFII

  constructor(private refInstFii: SharedService) { 
  this.ValorAssocFII = refInstFii.obterValorCompartilhado()
    console.log('Valor associado ao componente filho-um : ' + this.ValorAssocFII.toString())

  }
}
