import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,

  ],
  providers:[UserService]
})
export class UserModule { }
