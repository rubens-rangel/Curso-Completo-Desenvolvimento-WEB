import { Component} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-pai-dois',
  templateUrl: './pai-dois.component.html',
  styleUrls: ['./pai-dois.component.css'],
  providers: [SharedService]
})
export class PaiDoisComponent{

  valorAssocPaiII;

  constructor(private refInstPII: SharedService ) {
this.valorAssocPaiII = this.refInstPII.obterValorCompartilhado();


console.log('Valor associado ao compoenente pai dois : ' + this.valorAssocPaiII.toString())

   }
}
