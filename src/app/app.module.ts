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
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes = [
  { path: 'disciplinas', component: DisciplinasComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'ppc', component: PpcComponent},
  { path: 'acessibilidade', component: AcessibilidadeComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: '**', component: PaginaNaoEncontradaComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcessibilidadeComponent,
    DisciplinasComponent,
    PpcComponent,
    BuscaComponent,
    InicioComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    JsonpModule,
    HttpModule,
    RouterModule.forRoot(
      []
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
