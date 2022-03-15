import { Component } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.css']
})
export class EBindingComponent {

  // criar uma função para ser vinculada - via evento - com a view
  public exibirAlerta(): void{
    console.log('Um evento - via event binding - foi disparado..exibida no inspect do browser')
    alert('Um evento - via event binding - foi disparado... exibida na view do componente!')
  }

}
