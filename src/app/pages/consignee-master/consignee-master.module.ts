import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsigneeMasterComponent } from './consignee-master.component';
import { AddConsigneeComponent } from './add-consignee/add-consignee.component';
import { ListConsigneeComponent } from './list-consignee/list-consignee.component';
import { ConsigneeMasterRoutingModule } from './consignee-master-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { consigneepipe } from './consignee.filter.pipe';

@NgModule({
  declarations: [ConsigneeMasterComponent, AddConsigneeComponent, ListConsigneeComponent, consigneepipe],
  imports: [
    CommonModule,
    ConsigneeMasterRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConsigneeMasterModule { }
