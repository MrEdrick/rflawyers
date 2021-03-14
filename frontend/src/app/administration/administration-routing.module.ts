import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './user-auth/service/auth-guard.service';
import { SingInComponent } from './user-auth/singin/singin.component';
import { SingUpComponent } from './user-auth/singup/singup.component';
import { UsersCardsComponent } from './configurations/users/cards/users-cards.component';
import { UserFormComponent } from './configurations/users/form/user-form.component';
import { NavigationMenuComponent } from './menu/navigation-menu/navigation-menu.component';
import { ResetPasswordComponent } from './user-auth/reset-password/reset-password.component';
import { LawyerFormComponent } from './lawyers-registrations/lawyers/form/lawyer-form.component';
import { LawyersCardsComponent } from './lawyers-registrations/lawyers/cards/lawyers-cards.component';

const routes: Routes = [
  { path: 'singin', component: SingInComponent },
  { path: 'singup', component: SingUpComponent },
  { path: 'singin/:confirmationToken', component: SingInComponent },
  { path: 'reset-password/:recoverToken', component: ResetPasswordComponent },
  {
    path: 'navigation-menu',
    component: NavigationMenuComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'users/user/:id', component: UserFormComponent },
      { path: 'users/user', component: UserFormComponent },
      { path: 'users', component: UsersCardsComponent },

      { path: 'lawyers/lawyer/:id', component: LawyerFormComponent },
      { path: 'lawyers/lawyer', component: LawyerFormComponent },
      { path: 'lawyers', component: LawyersCardsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
