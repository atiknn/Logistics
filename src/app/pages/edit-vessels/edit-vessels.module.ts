import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditVesselsComponent } from './edit-vessels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditVesselsRoutingModule } from './edit-vessels-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [EditVesselsComponent],
  imports: [
    CommonModule,
    EditVesselsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule
  ]
})
export class EditVesselsModule { }
