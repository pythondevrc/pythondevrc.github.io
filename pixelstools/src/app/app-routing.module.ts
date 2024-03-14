import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/tabs/map',
    pathMatch: 'full'
  },
  {
    path: 'app/tabs/map',
    loadChildren: () => import('./pages/map/map.module').then(m => m.MapModule)
  },
  {
    path: 'app/tabs/foresting',
    loadChildren: () => import('./pages/foresting/foresting.module').then(m => m.ForestingModule)
  },
  {
    path: 'app/tabs/forestime',
    loadChildren: () => import('./pages/forestime/forestime.module').then(m => m.ForestimeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
