import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortMasterComponent } from './port-master.component';
import { AddPortComponent } from './add-port/add-port.component';
import { ListPortComponent } from './list-port/list-port.component';
import { PortMasterRoutingModule } from './port-master-routing.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { portProduct } from './port.filter.pipe';

@NgModule({
  declarations: [PortMasterComponent, AddPortComponent, ListPortComponent, portProduct],
  imports: [
    CommonModule,
    PortMasterRoutingModule,
    NgbModule
  ]
})
export class PortMasterModule { }
