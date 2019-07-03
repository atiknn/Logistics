import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as userData from '../../../shared/esentials/datasEsentials';
import { Agents } from 'app/shared/model/AddAgent.model';
import { AgentMasterService } from 'app/shared/services/AgentMaster.service';


@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss'],
  providers: [DatePipe]
})
export class AddAgentComponent implements OnInit {

  msg: string;
  alerts;
  regularForms: FormGroup;
  agent: Agents;
  constructor(private datePipe: DatePipe, private fb: FormBuilder, private _AgentMasterService: AgentMasterService) { }

  ngOnInit() {
    this.regularForms = this.fb.group({
      name : ['', Validators.required],
      address1 : ['', Validators.required],
      contact_no : [''],
      email_id : [''],
      created_by : [userData.getIds()],
      created_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    })
  }

  onsubmit(value: Agents){
    console.log(value);
    this._AgentMasterService.addAgent(value).subscribe(data => {
      this.agent = data;
      if (this.agent.id != null) {
        this.msg = "Saved Successfully with id : "+this.agent.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      } else {
        this.msg = "Not Saved ";
        this.alerts = 'alrert alert-danger';
      }
    })
  }
}
