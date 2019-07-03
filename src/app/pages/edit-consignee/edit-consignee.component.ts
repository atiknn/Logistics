import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as userData from '../../shared/esentials/datasEsentials';
import { FormGroup, FormBuilder, FormControl,FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Consignee_master } from 'app/shared/model/consignee.model';
import { ConsigneeMasterService } from 'app/shared/services/ConsigneeMaster.service';


@Component({
  selector: 'app-edit-consignee',
  templateUrl: './edit-consignee.component.html',
  styleUrls: ['./edit-consignee.component.scss'],
  providers: [DatePipe]
})
export class EditConsigneeComponent implements OnInit {

  pname;
  msg: string;
  alerts;
  regularForms: FormGroup;
  consignee: Consignee_master;
  consignee_new: Consignee_master;
  constructor(
    private datePipe: DatePipe, 
    private fb: FormBuilder, 
    private _AR: ActivatedRoute,
    private _consigneeService: ConsigneeMasterService
  ) { }

  ngOnInit() {
    this._AR.params.subscribe(data=>{this.pname = data['id']});
    this.regularForms = this.fb.group({
      id: [],
      name : ['', Validators.required],
      city : ['', Validators.required],
      address1 : ['', Validators.required],
      address2 : ['', Validators.required],
      address3 : ['', Validators.required],
      country : ['', Validators.required],
      contact_no : ['', Validators.required],
      email_id : ['', Validators.required],
      created_by : [userData.getIds()],
      created_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    })

    this.setValue();
  }

  setValue(){
    this._consigneeService.getConsigneeById(this.pname).subscribe(data => {
      this.consignee = data;
      this.regularForms.patchValue(this.consignee);
    })
  }

  onsubmit(value: Consignee_master){
    this._consigneeService.editConsigneeById(value).subscribe(data => {
      this.consignee_new = data;
      if(this.consignee_new.name === value.name && this.consignee_new.city === value.city){
        this.msg = "Saved Successfully id : "+this.consignee_new.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      }else{
        this.msg = "Not Saved ";
        this.alerts = 'alrert alert-danger';
      }
    })
  }

}
