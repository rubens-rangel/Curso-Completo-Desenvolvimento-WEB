import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../shared/rest-api.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {

  // objeto literal para obter os dados que serão persistidos
  @Input() dadosFuncionario = {
    name: '',
    email: '',
    phone: ''
  }
  // referencia da instancia do service e da classe Router
  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }
  // criar um função - vinculada na view - para executar aquilo que já está preparado na API
  inserirDados(){
    this.restApi.createEmployee(this.dadosFuncionario).subscribe(
      // aqui, entra em açõa a navegação entre componentes
      () => {
        this.router.navigate(['/employees-list'])
      }
    )
  } 

}
