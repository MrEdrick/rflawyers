import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlePostComponent } from './blog/articles/post/article-post.component';
import { BlogComponent } from './blog/blog.component';
import { ResumeComponent } from './resume/resume.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  { path: 'index', component: WebsiteComponent },
  { path: 'index/resume/:lawyerId', component: ResumeComponent },
  { path: 'index/blog', component: BlogComponent },
  { path: 'index/blog/articles/article/:id', component: ArticlePostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebsiteRoutingModule { }
