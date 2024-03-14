import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '/app/tabs/map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: '/app/tabs/about',
        children: [
          {
            path: '',
            loadChildren: () => import('../foresting/foresting.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '/app/tabs/forestime',
        children: [
          {
            path: '',
            loadChildren: () => import('../forestime/forestime.module').then(m => m.ForestimeModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/map',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

