import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewItemComponent } from './new-item.component';
import { NewIntemRoutingModule } from './new-item-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewItemComponent],
  imports: [
    CommonModule,
    NewIntemRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    NgbModule
  ]
})
export class NewItemModule { }
