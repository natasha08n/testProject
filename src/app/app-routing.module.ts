import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WomanComponent } from './woman/woman.component';
import { MenComponent } from './men/men.component';
import { GirlsComponent } from './girls/girls.component';
import { BoysComponent } from './boys/boys.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';



const appRoutes: Routes = [
  { path: 'woman', component: WomanComponent},
  { path: 'men', component: MenComponent},
  { path: 'girls', component: GirlsComponent},
  { path: 'boys', component: BoysComponent},
  { path: 'users', component: UsersComponent},
  { path: 'user/:id', component: UserDetailComponent},
  //{ path: 'login', component: LoginComponent },

  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}
