import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WomanComponent } from './woman/woman.component';
import { MenComponent } from './men/men.component';
import { GirlsComponent } from './girls/girls.component';
import { BoysComponent } from './boys/boys.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { WomanModule } from './woman/woman.module';
import { MenModule } from './men/men.module';
import { UsersComponent } from './users/users.component';

import { ElevationPipe } from './first-pipes';
import { PrefixPipe } from './prefix-pipe';

import { UserService } from './user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WomanComponent,
    MenComponent,
    GirlsComponent,
    BoysComponent,
    NotFoundComponent,
    UsersComponent,
    ElevationPipe,
    PrefixPipe,
    UserDetailComponent,
    TableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WomanModule,
    MenModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
