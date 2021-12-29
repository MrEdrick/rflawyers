import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'website/index',
  },
  {
    path: 'website',
    loadChildren: () => import('./website/website.module').then(module => module.WebsiteModule)
    // runGuardsAndResolvers: 'always'
  },
  {
    path: 'adm',
    loadChildren: () => import('./administration/administration.module').then(module => module.AdministrationModule)
    // runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//{
//  relativeLinkResolution: 'legacy',
//  onSameUrlNavigation: 'reload',
//}