import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {InicioComponent} from './inicio.component';

@NgModule ({
  imports: [
    RouterModule.forChild([
      { path: 'inicio', component: InicioComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class InicioRoutingModule {
}
