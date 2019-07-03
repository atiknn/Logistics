import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditNotifyPartyComponent } from './edit-notify-party.component';
import { EditNotifyPartyRoutingModule } from './edit-notify-party-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditNotifyPartyComponent],
  imports: [
    CommonModule,
    EditNotifyPartyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditNotifyPartyModule { }
