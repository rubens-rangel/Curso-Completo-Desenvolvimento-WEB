import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  // implementando cada uma das propriedades que serão vinculadas na view
  public x: number = 21
  public umArray: Array<number> = [10, 22, 15]
  public dataHoje: Date = new Date()

  public statusBooleano: boolean = true

  public exibirTexto(): string{
    return 'Texto retornado a partir de uma função!'
  }
}
