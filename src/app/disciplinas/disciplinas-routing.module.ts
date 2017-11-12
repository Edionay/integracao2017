import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DisciplinasComponent} from './disciplinas.component';

@NgModule ({
  imports: [
    RouterModule.forChild([
      { path: 'disciplinas', component: DisciplinasComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DisciplinasRoutingModule {
}
