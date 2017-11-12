import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InicioComponent} from './inicio.component';
import {InicioRoutingModule} from './inicio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
  declarations: [
    InicioComponent
  ]
})
export class InicioModule { }
