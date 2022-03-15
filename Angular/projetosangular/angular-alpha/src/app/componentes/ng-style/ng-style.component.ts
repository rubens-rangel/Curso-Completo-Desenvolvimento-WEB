import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent{
// criar as propriedades para vincular com a diretiva ngStyle
  cores: string = '#38OF6C'
  tamanho: number = 12
  // instancia da classe
  objStyle: EstiloCss = new EstiloCss()
}

// criando a classe para vincular a diretiva ngStyle
class EstiloCss{
  'color': string = '#050505'
  'font-size.%': number = 100
  'font-weight': string = 'bold'
}
