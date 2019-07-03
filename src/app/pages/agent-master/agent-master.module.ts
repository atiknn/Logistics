import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentMasterComponent } from './agent-master.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { AgentMasterRoutingModule } from './agent-master-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { agentpipe } from './consignee.filter.pipe';

@NgModule({
  declarations: [AgentMasterComponent, AddAgentComponent, ListAgentComponent, agentpipe],
  imports: [
    CommonModule,
    AgentMasterRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AgentMasterModule { }
