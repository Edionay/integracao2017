import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PpcComponent} from './ppc.component';

@NgModule ({
  imports: [
    RouterModule.forChild([
      { path: 'ppc', component: PpcComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PpcRoutingModule {
}
