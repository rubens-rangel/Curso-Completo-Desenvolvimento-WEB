import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importando os compontens necessários
import { EmployeeCreateComponent } from './componentes/employee-create/employee-create.component';
import { EmployeeEditComponent } from './componentes/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './componentes/employee-list/employee-list.component';

// referenciando as rotas para os componentes
const routes: Routes = [
  {path: '', redirectTo: 'employee-create', pathMatch: 'full'},
  {path: 'employee-create', component: EmployeeCreateComponent},
  {path: 'employee-edit/:id', component: EmployeeEditComponent},
  {path: 'employees-list', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
