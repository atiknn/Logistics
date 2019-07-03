import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditConsigneeComponent } from './edit-consignee.component';
import { EditConsigneeRoutingModule } from './edit-consignee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditConsigneeComponent],
  imports: [
    CommonModule,
    EditConsigneeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditConsigneeModule { }
