import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VesselMasterComponent } from './vessel-master.component';
import { VesselMasterRoutingModule } from './vessel-master-routing.module';
import { AddVesselMasterComponent } from './add-vessel-master/add-vessel-master.component';
import { ListVesselMasterComponent } from './list-vessel-master/list-vessel-master.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { vesselpipe } from './vessel.filter.pipe';

@NgModule({
  declarations: [VesselMasterComponent, AddVesselMasterComponent, ListVesselMasterComponent, vesselpipe],
  imports: [
    CommonModule,
    VesselMasterRoutingModule,
    NgbModule,
    ReactiveFormsModule, 
    FormsModule,
    NgSelectModule
  ]
})
export class VesselMasterModule { }
