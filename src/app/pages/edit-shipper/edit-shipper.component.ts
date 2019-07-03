import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,FormArray, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as userData from '../../shared/esentials/datasEsentials';
import { ActivatedRoute } from '@angular/router';
import { ShipperMasterService } from 'app/shared/services/ShipperMaster.service';
import { Shipper_master } from 'app/shared/model/shipper.model';

@Component({
  selector: 'app-edit-shipper',
  templateUrl: './edit-shipper.component.html',
  styleUrls: ['./edit-shipper.component.scss'],
  providers: [DatePipe]
})
export class EditShipperComponent implements OnInit {

  pname;
  msg: string;
  alerts;
  regularForms: FormGroup;
  shipper: Shipper_master;
  shipper_new: Shipper_master;

  constructor(
    private datePipe: DatePipe, 
    private fb: FormBuilder, 
    private _AR: ActivatedRoute,
    private _shipperService: ShipperMasterService
    ) { }

  ngOnInit() {
    this._AR.params.subscribe(data=>{this.pname = data['id']});
    this.regularForms = this.fb.group({
      id:[],
      name : ['', Validators.required],
      city : ['', Validators.required],
      address1 : ['', Validators.required],
      address2 : ['', Validators.required],
      address3 : ['', Validators.required],
      state : [''],
      country : ['', Validators.required],
      contact_no : ['', Validators.required],
      pincode : ['', Validators.required],
      email_id : ['', Validators.required],
      updated_by : [userData.getIds()],
      updated_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    })
    this.setValue();
  }

  setValue(){
    this._shipperService.getShipperbyId(this.pname).subscribe(data => {
      this.shipper = data;
      this.regularForms.patchValue(this.shipper);
    })
  }

  onsubmit(value: Shipper_master){
    console.log(value);
    this._shipperService.editShipperById(value).subscribe(data => {
      this.shipper_new = data
      if(this.shipper_new.name === value.name && this.shipper_new.city === value.city){
        this.msg = "Saved Successfully id : "+this.shipper_new.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      }else{
        this.msg = "Not Saved ";
        this.alerts = 'alrert alert-danger';
      }
    })
  }

}
