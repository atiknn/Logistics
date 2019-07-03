import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as userData from '../../shared/esentials/datasEsentials';
import { FormGroup, FormBuilder, FormControl,FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AgentMasterService } from 'app/shared/services/AgentMaster.service';
import { Agents } from 'app/shared/model/AddAgent.model';

@Component({
  selector: 'app-edit-agent',
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.scss'],
  providers: [DatePipe]
})
export class EditAgentComponent implements OnInit {

  pname;
  msg: string;
  alerts;
  regularForms: FormGroup;
  agent: Agents;
  agent_new : Agents;

  constructor(
    private datePipe: DatePipe, 
    private fb: FormBuilder, 
    private _AR: ActivatedRoute,
    private _agentservice: AgentMasterService
  ) { }

  ngOnInit() {
    this._AR.params.subscribe(data=>{this.pname = data['id']});
    this.regularForms = this.fb.group({
      id:[],
      name : ['', Validators.required],
      address1 : ['', Validators.required],
      contact_no : [''],
      email_id : [''],
      created_by : [userData.getIds()],
      created_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    })
    this.setValue();
  }

  setValue() {
    this._agentservice.getAgentById(this.pname).subscribe(data => {
      this.agent = data;
      this.regularForms.patchValue(this.agent);
    })
  }

  onsubmit(value: Agents){
    console.log(value);
    this._agentservice.editAgentById(value).subscribe(data => {
      this.agent_new = data;
      if(this.agent_new.name === value.name){
        this.msg = "Saved Successfully id : "+this.agent_new.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      }else{
        this.msg = "Not Saved ";
        this.alerts = 'alrert alert-danger';
      }
    })
  }

}
