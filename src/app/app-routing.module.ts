import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignLayout } from './material-design/material-design-layout/material-design-layout.component';
import { HighchartsLayout } from './highcharts/highcharts-layout/highcharts.layout';

const MATERIAL_DESIGN_ROUTES:Routes = [
  {
    path: "",
    loadChildren: () =>
      import('./material-design/materialdesign.module').then(
        (m) => m.MaterialDesignModule
      )
  }
];

const HIGHCHARTS_ROUTES:Routes = [
  {
    path : "",
    loadChildren : ()=> import('./highcharts/highcharts.module').then(
      (m) => m.HighchartsModules
    )
  }
];

const routes:Routes = [
  {
    path : "",
    redirectTo : "/material-design/autocomplete",
    pathMatch : "full"
  },
  {
    path : "material-design",
    component : MaterialDesignLayout,
    children : MATERIAL_DESIGN_ROUTES
  },
  {
    path : 'highcharts',
    component : HighchartsLayout,
    children : HIGHCHARTS_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
