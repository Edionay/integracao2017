import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {CommonModule} from '@angular/common';
import { DadosService } from './dados.service';
import {BuscaService} from './busca.service';
import {HttpModule, JsonpModule} from '@angular/http';
import { AcessibilidadeComponent } from './acessibilidade/acessibilidade.component';
import {DisciplinasComponent} from './disciplinas/disciplinas.component';
import {PpcComponent} from './ppc/ppc.component';
import { RouterModule} from '@angular/router';
import {BuscaComponent} from './busca/busca.component';
import {InicioComponent} from './inicio/inicio.component';

const appRoutes = [
  { path: 'disciplinas', component: DisciplinasComponent},
  { path: 'ppc', component: PpcComponent},
  { path: 'acessibilidade', component: AcessibilidadeComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcessibilidadeComponent,
    DisciplinasComponent,
    PpcComponent,
    BuscaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    JsonpModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    ),
    RouterModule.forChild(
      appRoutes
    )
  ],
  providers: [
  DadosService,
  BuscaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
