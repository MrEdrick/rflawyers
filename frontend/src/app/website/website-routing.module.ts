import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  { path: 'index', component: WebsiteComponent },
  { path: 'index/resume/:lawyerId', component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
