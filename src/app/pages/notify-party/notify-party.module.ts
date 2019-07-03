import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyPartyComponent } from './notify-party.component';
import { NotifyPartyRoutingModule } from './notify-party-routing.module';
import { AddNotifyPartyComponent } from './add-notify-party/add-notify-party.component';
import { ListNotifyPartyComponent } from './list-notify-party/list-notify-party.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { notifyPartypipe } from './notify.filter.pipe';

@NgModule({
  declarations: [NotifyPartyComponent, AddNotifyPartyComponent, ListNotifyPartyComponent,notifyPartypipe],
  imports: [
    CommonModule,
    NotifyPartyRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NotifyPartyModule { }
