import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargoMasterComponent } from './cargo-master.component';
import { CargoMasterRoutingModule } from './cargo-master-routing.module';
import { ListCargoComponent } from './list-cargo/list-cargo.component';
import { AddCargoComponent } from './add-cargo/add-cargo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CargoMasterComponent, ListCargoComponent, AddCargoComponent],
  imports: [
    CommonModule,
    CargoMasterRoutingModule,
    NgbModule
  ]
})
export class CargoMasterModule { }
