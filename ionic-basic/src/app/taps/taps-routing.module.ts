import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TapsPage } from './taps.page';

const routes: Routes = [
  {
    path: '',
    component: TapsPage,
    children:[
      {
        path:'alumnos',
        loadChildren : () => import('../alumnos/alumnos.module').then(m=>m.AlumnosPageModule)
      }
      ,
      {
        path: 'recetas',
        loadChildren: () => import('../receta/receta.module').then(m=>m.RecetaPageModule)
      },
      {
        path: 'presupuesto',
        loadChildren: () => import('../presupuesto/presupuesto.module').then(m=>m.PresupuestoPageModule)
      },
      {
        path:'',
        redirectTo: '/taps/alumnos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/taps/alumnos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TapsPageRoutingModule {}