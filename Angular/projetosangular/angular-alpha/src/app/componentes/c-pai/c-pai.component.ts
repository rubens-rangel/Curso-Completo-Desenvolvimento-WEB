import { Component } from '@angular/core';

@Component({
  selector: 'app-c-pai',
  templateUrl: './c-pai.component.html',
  styleUrls: ['./c-pai.component.css']
})
export class CPaiComponent {

 // criar uma função para receber e tratar os dados enviados pelo c-output-filho
 public recebendoDados(dadosRecebidos:any): void{
   
   // criando a varaivel para acessar os dados recebidos
   let receptora: string = 'Obrigado por se cadastrar ' + dadosRecebidos.nome + '.';
   receptora = receptora + 'O email ' + dadosRecebidos.email + 'foi cadastrado com sucesso!'

   // chamar a janela alerta
   alert(receptora)
 }

}

/*
// criando as propriedades para vincular no componente filho
 public texto: string  = 'Este é o texto que será exibido na tela do componente filho'
 public outroTexto: string = 'Este é o texto que será exibido na janela de alerta do componente filho'
*/
