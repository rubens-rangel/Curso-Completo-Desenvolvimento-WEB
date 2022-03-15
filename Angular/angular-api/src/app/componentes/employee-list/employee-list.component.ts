import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // primeira parte - criar uma propriedade para er a coleção iteravel de dados
listaColaboradores: any = []

 // segunda parte - referencia de instancia da API
  constructor(
    public restApi: RestApiService
  ) { }

  // terceira parte - "priorizar" a chamada/carregametno dos registros no componente
  ngOnInit(): void {
    this.exibirRegistros()
  }

  // quarta parte - criar função para exibir os registros na view
  exibirRegistros(){
    this.restApi.getEmployees().subscribe((data:{})=>{
      this.listaColaboradores = data
    })
  }

  // quinta parte - criar a função para executar a ação de exclusão do registro
  excluirRegistro(id:any):void{
    // estabelece uma janela de confirmação da exclusão
    if(window.confirm('Tem certeza que deseja excluir o registro?')){
      this.restApi.deleteEmployee(id).subscribe(() => {
        this.exibirRegistros()
      })
    }
  }

}
