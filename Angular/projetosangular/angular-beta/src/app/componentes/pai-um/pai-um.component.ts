import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-pai-um',
  templateUrl: './pai-um.component.html',
  styleUrls: ['./pai-um.component.css'],
  providers: [SharedService]
})

export class PaiUmComponent{
  
  valorAssociado

  constructor(private instService: SharedService) { 
this.valorAssociado = instService.obterValorCompartilhado()

console.log('Valor associado ao componente pai-um' + this.valorAssociado.toString())
}
}