import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { AddUsersComponent } from './add-users/add-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabAddUsersComponent } from './tab-add-users/tab-add-users.component';
import { TabListUsersComponent } from './tab-list-users/tab-list-users.component'; 

@NgModule({
  declarations: [UsersComponent, AddUsersComponent, ListUsersComponent, TabAddUsersComponent, TabListUsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule
  ]
})
export class UsersModule { }
