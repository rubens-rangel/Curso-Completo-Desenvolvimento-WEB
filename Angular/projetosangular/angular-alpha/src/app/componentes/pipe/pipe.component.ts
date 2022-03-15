import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent{
// tres propriedades para vincular com custom pipe
raizUm: number = 81
raizDois: number = 175
raizTres:number = 1024

}


/*
  // implementação das propriedades para operação com Pipe
  novoTitulo: string = 'Pipes'
  numFloat: number = 678.94
  dataHoje: Date = new Date()
  numDecimal: number = 8794154.3
  objLiteral: any = {
    nome: 'Dexter',
    endereco:{
      rua: 'Rua da Casinha',
      numero: '1'
    }
  }

  mesesAno: Array<string> = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out',  'Nov', 'Dez']

  numPercent: number = 0.78*/
