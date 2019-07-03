import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as userData from '../../shared/esentials/datasEsentials';
import { FormGroup, FormBuilder, FormControl,FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotifyMaster } from 'app/shared/model/notifymaster.model';
import { NotifyMasterService } from 'app/shared/services/NotifyMaster.service';

@Component({
  selector: 'app-edit-notify-party',
  templateUrl: './edit-notify-party.component.html',
  styleUrls: ['./edit-notify-party.component.scss'],
  providers: [DatePipe]
})
export class EditNotifyPartyComponent implements OnInit {

  pname;
  msg: string;
  alerts;
  regularForms: FormGroup;
  notifyAgent: NotifyMaster;
  notifyAgent_new: NotifyMaster;
  constructor(
    private datePipe: DatePipe, 
    private fb: FormBuilder, 
    private _AR: ActivatedRoute,
    private _notifyAgentService: NotifyMasterService
  ) { }

  ngOnInit() {
    this._AR.params.subscribe(data=>{this.pname = data['id']});
    this.regularForms = this.fb.group({
      id: [],
      name : ['', Validators.required],
      address : ['', Validators.required],
      contact_no : [''],
      email_id : [''],
      updated_by : [userData.getIds()],
      updated_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    })
    this.setValue();
  }

  setValue(){
    this._notifyAgentService.getNotifyAgentById(this.pname).subscribe(data => {
      this.notifyAgent = data;
      this.regularForms.patchValue(this.notifyAgent);
    })

  }

  onsubmit(value:NotifyMaster){
    console.log(value);
    this._notifyAgentService.editNotifyAgentById(value).subscribe(data => {
      this.notifyAgent_new = data;
      if(this.notifyAgent_new.name === value.name){
        this.msg = "Saved Successfully id : "+this.notifyAgent_new.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      }else{
        this.msg = "Not Saved ";
        this.alerts = 'alrert alert-danger';
      }
    })
  }

}
