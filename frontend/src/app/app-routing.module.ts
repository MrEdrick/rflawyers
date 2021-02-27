import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'website/index',
  },
  {
    path: 'adm',
    loadChildren: () => import('./administration/administration.module').then(module => module.AdministrationModule),
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      relativeLinkResolution: 'legacy',
      onSameUrlNavigation: 'reload',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }