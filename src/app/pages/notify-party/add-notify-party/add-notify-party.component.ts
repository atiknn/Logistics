import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotifyMaster } from 'app/shared/model/notifymaster.model';
import { DatePipe } from '@angular/common';
import * as userData from '../../../shared/esentials/datasEsentials';
import { NotifyMasterService } from 'app/shared/services/NotifyMaster.service';


@Component({
  selector: 'app-add-notify-party',
  templateUrl: './add-notify-party.component.html',
  styleUrls: ['./add-notify-party.component.scss'],
  providers: [DatePipe]
})
export class AddNotifyPartyComponent implements OnInit {

  msg: string;
  alerts;
  regularForms: FormGroup;
  notifyParty: NotifyMaster;
  constructor(private datePipe: DatePipe, private fb: FormBuilder, private _notifyMasterService: NotifyMasterService) { }

  ngOnInit() {
    this.regularForms = this.fb.group({
      name : ['', Validators.required],
      address : ['', Validators.required],
      contact_no : [''],
      email_id : [''],
      created_by : [userData.getIds()],
      created_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    })
  }

  onsubmit(value: NotifyMaster){
    console.log(value);
    this._notifyMasterService.createNotifyMaster(value).subscribe(data => {
      this.notifyParty = data;
      if (this.notifyParty.id != null) {
        this.msg = "Saved Successfully with id : "+this.notifyParty.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      } else {
        this.msg = "Not Saved ";
        this.alerts = 'alrert alert-danger';
      }
    })
  }


}
