import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  // criar a primeira propriedade para vincular com ngClass
  cssAlteradoViaVar: string = 'color size'
  objCSS: PropsCss = new PropsCss()

}
// criar uma classe que referencia propriedades css
class PropsCss{
  color: boolean = true
  size: boolean = true
}
