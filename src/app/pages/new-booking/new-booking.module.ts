import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookingComponent } from './new-booking.component';
import { NewBookingRoutingModule } from './new-booking-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [NewBookingComponent],
  imports: [
    CommonModule,
    NewBookingRoutingModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ]
})
export class NewBookingModule { }
