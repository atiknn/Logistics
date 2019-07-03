import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditShipperComponent } from './edit-shipper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditShipperRoutingModule } from './edit-shipper-routing.module';

@NgModule({
  declarations: [EditShipperComponent],
  imports: [
    CommonModule,
    EditShipperRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditShipperModule { }
