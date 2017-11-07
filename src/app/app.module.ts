import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {DisciplinasModule} from './disciplinas/disciplinas.module';
import {InicioModule} from './inicio/inicio.module';
import {CommonModule} from '@angular/common';
import {PpcModule} from './ppc/ppc.module';
import { DadosService } from './dados.service';
import {BuscaModule} from './busca/busca.module';
import {BuscaService} from './busca.service';
import { JsonpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisciplinasModule,
    InicioModule,
    CommonModule,
    PpcModule,
    BuscaModule,
    JsonpModule
  ],
  providers: [
  DadosService,
  BuscaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
