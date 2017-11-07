import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BuscaComponent} from './busca.component';

@NgModule ({
  imports: [
    RouterModule.forChild([
      { path: 'busca', component: BuscaComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BuscaRoutingModule {
}
