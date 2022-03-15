import { Injectable } from '@angular/core';
// fazer os imports necessários
import { Employee } from './employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// recursos para operações assincronas
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()

export class RestApiService {

  // definir o caminho para a base de dados
  apiURL: string = 'http://localhost:3000'

  // fazer referencia a instancia da classe HttpClient 
  constructor(private http: HttpClient) { }

  // criar as credenciais de acesso para modificar a base de dados
  autorizacaoAcesso = {
    headers: new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
  }

  /*
  ========================================================================================
                    CONSTRUINDO A API E SEUS RESPECTIVOS MÉTODOS
  ========================================================================================
  */

  // método para recuperar todos os registros adicionados na base de dados
  getEmployees(): Observable<Employee>{
    return this.http.get<Employee>(this.apiURL + '/employees')
    // estabelecendo um canal direto de comunicaão entre front e back para os transporte de dados
    .pipe(
      retry(1),
      catchError(this.tratarErro)
    )
  }
  // método para recuperar um único registro da base
  getEmployee(id:any): Observable<Employee>{
    return this.http.get<Employee>(this.apiURL + '/employees/' + id)
    .pipe(
      retry(1),
      catchError(this.tratarErro)
    )
  }

  // método para criar um registro e armazená-lo na base de dados
  createEmployee(dadosColab: any): Observable<Employee>{
    return this.http.post<Employee>(this.apiURL + '/employees', JSON.stringify(dadosColab), this.autorizacaoAcesso)
    .pipe(
      retry(1),
      catchError(this.tratarErro)
    )
  }

  // método para atualizar um registro da base de dados
updateEmployee(id: any, dadosColab:any): Observable<Employee>{
  return this.http.put<Employee>(this.apiURL + '/employees/' + id, JSON.stringify(dadosColab), this.autorizacaoAcesso)
  .pipe(
    retry(1),
    catchError(this.tratarErro)
  )
}

// método para excluir um registro da base
deleteEmployee(id: any){
  return this.http.delete<Employee>(this.apiURL + '/employees/' + id, this.autorizacaoAcesso)
  .pipe(
    retry(1),
    catchError(this.tratarErro)
  )
}

// função para tratar erros nas aplicações back e frontend
tratarErro(erro: any){
  // propriedade para receer um valor textual referente ao erro ocorrido
  let mensagemErro = ''
  // verificar qual é o local - em qual "pedaço"  - da aplicação ocorreu o erro
  if(erro.error instanceof ErrorEvent){
    // tratando oo erro no front
    mensagemErro = erro.error.message
  }else{
    // tratando o erro - se, aqui, ocrreu no back-end
    mensagemErro = `Codigo do erro: ${erro.status}\nMensagem referente ao erro é: ${erro.message}`
  } 
  // exibindo o conteudo do erro numa janela de alerta
  window.alert(mensagemErro)
  return throwError(() => mensagemErro)
}

}
