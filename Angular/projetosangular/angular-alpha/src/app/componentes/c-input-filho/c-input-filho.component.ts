import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c-input-filho',
  templateUrl: './c-input-filho.component.html',
  styleUrls: ['./c-input-filho.component.css']
})
export class CInputFilhoComponent {
// propriedades determinadas como entradas de dados e receberão do componente pai
  @Input() public mensagem: string = ''
  @Input() public outraMensagem: string = ''

  public exibirMensagemAlerta(): void{
    alert(this.outraMensagem)
  }
}
