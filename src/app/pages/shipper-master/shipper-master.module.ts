import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipperMasterComponent } from './shipper-master.component';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { ListShipperComponent } from './list-shipper/list-shipper.component';
import { ShipperRoutingModule } from './shipper-master-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FilterProduct } from './shipper.filter.pipe';

@NgModule({
  declarations: [ShipperMasterComponent, AddShipperComponent, ListShipperComponent, FilterProduct],
  imports: [
    CommonModule,
    ShipperRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShipperMasterModule { }
