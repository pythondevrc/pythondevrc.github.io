import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForestingPage } from './foresting';

const routes: Routes = [
  {
    path: '',
    component: ForestingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForestingPageRoutingModule { }
