import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingComponent } from './tracking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrackingRoutingModule } from './tracking-routing.module';

@NgModule({
  declarations: [TrackingComponent],
  imports: [
    CommonModule,
    TrackingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TrackingModule { }
