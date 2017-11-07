import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PpcComponent} from './ppc.component';
import {PpcRoutingModule} from './ppc-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PpcRoutingModule
  ],
  declarations: [
    PpcComponent
  ]
})
export class PpcModule { }
