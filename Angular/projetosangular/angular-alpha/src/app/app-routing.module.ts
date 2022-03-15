import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { InterpolationComponent } from './componentes/interpolation/interpolation.component';
import { PBindingComponent } from './componentes/p-binding/p-binding.component';
import { EBindingComponent } from './componentes/e-binding/e-binding.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { CPaiComponent } from './componentes/c-pai/c-pai.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';
import { NgForComponent } from './componentes/ng-for/ng-for.component';
import { NgClassComponent } from './componentes/ng-class/ng-class.component';
import { NgStyleComponent } from './componentes/ng-style/ng-style.component';
import { PipeComponent } from './componentes/pipe/pipe.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'interpolation', component:InterpolationComponent},
  {path:'p-binding', component:PBindingComponent},
  {path:'e-binding', component:EBindingComponent},
  {path:'two-way', component:TwoWayComponent},
  {path:'input-output', component:CPaiComponent},
  {path:'ng-if', component:NgIfComponent},
  {path:'ng-for', component:NgForComponent},
  {path:'ng-class', component:NgClassComponent},
  {path:'ng-style', component:NgStyleComponent},
  {path:'pipe', component:PipeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
