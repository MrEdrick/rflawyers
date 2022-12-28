import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { SingInComponent } from './user-auth/singin/singin.component';
import { SingUpComponent } from './user-auth/singup/singup.component';
import { UsersCardsComponent } from './configurations/users/cards/users-cards.component';
import { UserFormComponent } from './configurations/users/form/user-form.component';
import { NavigationMenuComponent } from './menu/navigation-menu/navigation-menu.component';
import { ResetPasswordComponent } from './user-auth/reset-password/reset-password.component';
import { LawyerTabComponent } from './lawyers-registrations/lawyers/tab/lawyer-tab.component';
import { LawyersCardsComponent } from './lawyers-registrations/lawyers/cards/lawyers-cards.component';
import { ResumeFormComponent } from './lawyers-registrations/resume/form/resume-form.component';
import { ArticleFormComponent } from './blog/articles/form/article-form.component';
import { ArticlesCardsComponent } from './blog/articles/cards/articles-cards.component';

const routes: Routes = [
  { path: 'singin', component: SingInComponent },
  { path: 'singup', component: SingUpComponent },
  { path: 'singin?:confirmationToken', component: SingInComponent },
  { path: 'reset-password?:recoverToken', component: ResetPasswordComponent },
  {
    path: 'navigation-menu',
    component: NavigationMenuComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'users/user/:id', component: UserFormComponent },
      { path: 'users/user', component: UserFormComponent },
      { path: 'users', component: UsersCardsComponent },
      
      { path: 'lawyers/lawyer/:id', component: LawyerTabComponent },
      { path: 'lawyers/lawyer', component: LawyerTabComponent },
      { path: 'lawyers/lawyer/resume/resume/:id', component: ResumeFormComponent },
      { path: 'lawyers/lawyer/resume/resume', component: ResumeFormComponent },
      { path: 'lawyers', component: LawyersCardsComponent },

      { path: 'articles/article/:id', component: ArticleFormComponent },
      { path: 'articles/article', component: ArticleFormComponent },
      { path: 'articles', component: ArticlesCardsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
