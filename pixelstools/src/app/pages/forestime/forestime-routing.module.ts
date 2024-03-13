import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForestimePage } from './forestime';

const routes: Routes = [
  {
    path: '',
    component: ForestimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForestimePageRoutingModule { }
