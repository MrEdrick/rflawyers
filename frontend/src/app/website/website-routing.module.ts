import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesMenuComponent } from './blog/articles/menu/articles-menu.component';
import { BlogComponent } from './blog/blog.component';
import { PostMenuComponent } from './blog/posts/menu/post-menu.component';
import { ResumeComponent } from './resume/resume.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  { path: 'index', component: WebsiteComponent },
  { path: 'index/resume/:lawyerId', component: ResumeComponent },
  { path: 'index/blog', component: BlogComponent },
  { path: 'index/blog/articles/article/:id', component: PostMenuComponent },
  { path: 'index/blog/articles', component: ArticlesMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebsiteRoutingModule { }
