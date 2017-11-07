import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuscaComponent} from './busca.component';
import {BuscaRoutingModule} from './busca-routing.module';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    BuscaRoutingModule,
    HttpModule
  ],
  declarations: [
    BuscaComponent
  ],
  exports: [
    BuscaComponent
  ],
  providers: [
    BuscaModule
  ]
})
export class BuscaModule { }
