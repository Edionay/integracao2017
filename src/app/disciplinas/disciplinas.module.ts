import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DisciplinasComponent} from './disciplinas.component';
import {DisciplinasRoutingModule} from './disciplinas-routing.module';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    DisciplinasRoutingModule,
    HttpModule
  ],
  declarations: [
    DisciplinasComponent
  ],
  exports: [
    DisciplinasComponent
  ],
  providers: [
    DisciplinasModule
  ]
})
export class DisciplinasModule { }
