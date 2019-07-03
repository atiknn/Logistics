import { Component, OnInit } from '@angular/core';
import { Agents } from 'app/shared/model/AddAgent.model';
import { Router } from '@angular/router';
import { AgentMasterService } from 'app/shared/services/AgentMaster.service';

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.scss']
})
export class ListAgentComponent implements OnInit {
  agents: Agents[];
  aget: Agents;
  listsearch;
  
  constructor(private _AgentMasterService: AgentMasterService, private _route: Router) { }

  ngOnInit() {
    this._AgentMasterService.getAllAgents().subscribe(data => {
      this.agents = data
    });
  }

  deleteagents(id) {
    console.log(id);
    this._AgentMasterService.deleteAgents(id).subscribe(data => {
      this.aget = data;
      this._AgentMasterService.getAllAgents().subscribe(data => {this.agents = data});
    })
  }

  getAgentById(id) {
    this._route.navigateByUrl('/edit-agent-master/'+id);
  }

}
