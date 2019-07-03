import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAgentComponent } from './edit-agent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAgentRoutingModule } from './edit-agent-routing.module';

@NgModule({
  declarations: [EditAgentComponent],
  imports: [
    CommonModule,
    EditAgentRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class EditAgentModule { }
