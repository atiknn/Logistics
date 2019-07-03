import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillofLeadingComponent } from './billof-leading.component';
import { BillofLeadingRoutingModule } from './billof-leading-routing.module';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({ 
  declarations: [BillofLeadingComponent],
  imports: [
    CommonModule,
    BillofLeadingRoutingModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ]
})
export class BillofLeadingModule { }
