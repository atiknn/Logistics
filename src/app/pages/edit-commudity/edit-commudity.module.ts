import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCommudityComponent } from './edit-commudity.component';
import { EditCommudityRoutingModule } from './edit-commudity-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditCommudityComponent],
  imports: [
    CommonModule,
    EditCommudityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditCommudityModule { }
