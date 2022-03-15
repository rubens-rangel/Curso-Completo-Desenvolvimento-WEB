import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c-outpu-filho',
  templateUrl: './c-outpu-filho.component.html',
  styleUrls: ['./c-outpu-filho.component.css']
})
export class COutpuFilhoComponent{
  // criar um "anunciador" do evento que será disparado para enviar dados para o c-pai
  @Output() anunciador = new EventEmitter<any>()

  // objeto literal para receber os dados qu serão enviados
  public objDados: any = {}

  //função para enviar os dados para c-pai
  public enviarDados(): void{
    this.anunciador.emit(this.objDados)
  }
 

}
