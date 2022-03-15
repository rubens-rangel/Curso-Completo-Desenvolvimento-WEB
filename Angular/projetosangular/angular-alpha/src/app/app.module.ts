import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './componentes/interpolation/interpolation.component';
import { HomeComponent } from './componentes/home/home.component';
import { PBindingComponent } from './componentes/p-binding/p-binding.component';
import { EBindingComponent } from './componentes/e-binding/e-binding.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { CPaiComponent } from './componentes/c-pai/c-pai.component';
import { CInputFilhoComponent } from './componentes/c-input-filho/c-input-filho.component';
import { COutpuFilhoComponent } from './componentes/c-outpu-filho/c-outpu-filho.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';
import { NgForComponent } from './componentes/ng-for/ng-for.component';
import { NgClassComponent } from './componentes/ng-class/ng-class.component';
import { NgStyleComponent } from './componentes/ng-style/ng-style.component';
import { AlterarTextoDirective } from './componentes/alterar-texto.directive';
import { PipeComponent } from './componentes/pipe/pipe.component';
// importando os recursos para a conversão regional de moedas - BRL (real brasileiro)
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { PipeRaizQuadradaPipe } from './componentes/pipe-raiz-quadrada.pipe';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    HomeComponent,
    PBindingComponent,
    EBindingComponent,
    TwoWayComponent,
    CPaiComponent,
    CInputFilhoComponent,
    COutpuFilhoComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    AlterarTextoDirective,
    PipeComponent,
    PipeRaizQuadradaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
