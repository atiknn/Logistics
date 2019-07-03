import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUsersComponent } from './edit-users.component';
import { EditUserRoutingModule } from './edit-users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [EditUsersComponent],
  imports: [
    CommonModule,
    EditUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule
  ]
})
export class EditUsersModule { }
