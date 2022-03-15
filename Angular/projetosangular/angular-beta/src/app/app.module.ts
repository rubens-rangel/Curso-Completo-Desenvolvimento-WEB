import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaiUmComponent } from './componentes/pai-um/pai-um.component';
import { FilhoUmComponent } from './componentes/filho-um/filho-um.component';
import { FilhoDoisComponent } from './componentes/filho-dois/filho-dois.component';
import { FilhoTresComponent } from './componentes/filho-tres/filho-tres.component';
import { PaiDoisComponent } from './componentes/pai-dois/pai-dois.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiUmComponent,
    FilhoUmComponent,
    FilhoDoisComponent,
    FilhoTresComponent,
    PaiDoisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
