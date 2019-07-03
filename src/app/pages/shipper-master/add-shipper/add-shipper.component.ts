import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as userData from '../../../shared/esentials/datasEsentials';
import { ShipperMasterService } from 'app/shared/services/ShipperMaster.service';
import { Shipper_master } from 'app/shared/model/shipper.model';

@Component({
  selector: 'app-add-shipper',
  templateUrl: './add-shipper.component.html',
  styleUrls: ['./add-shipper.component.scss'],
  providers: [DatePipe]
})

export class AddShipperComponent implements OnInit {

  msg: string;
  alerts;
  regularForms: FormGroup;
  shipper: Shipper_master;
  constructor(private datePipe: DatePipe, private fb: FormBuilder, private shipperMasterService: ShipperMasterService) { }

  ngOnInit() {
    this.regularForms = this.fb.group({
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
      created_by : [userData.getIds()],
      created_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    })
  }

  onsubmit(value){
    console.log(value);
    this.shipperMasterService.addShipper(value).subscribe(
      data => {
        this.shipper = data;
        if(this.shipper.id != null){
          this.msg = "Saved Successfully with id : "+this.shipper.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
        } else {
          this.msg = "Not Saved ";
          this.alerts = 'alrert alert-danger';
        }
      }
    )
  }

}
