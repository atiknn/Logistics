import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommudityMasterComponent } from './commudity-master.component';
import { CommudityMasterRoutingModule } from './commudity-master-routing.module';
import { AddCommudityComponent } from './add-commudity/add-commudity.component';
import { ListCommudityComponent } from './list-commudity/list-commudity.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { commuditypipe } from './commudity.filter.pipe';

@NgModule({
  declarations: [CommudityMasterComponent, AddCommudityComponent, ListCommudityComponent, commuditypipe],
  imports: [
    CommonModule,
    CommudityMasterRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommudityMasterModule { }
