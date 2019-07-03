import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as userData from '../../../shared/esentials/datasEsentials';
import { ShipperMasterService } from 'app/shared/services/ShipperMaster.service';
import { Shipper_master } from 'app/shared/model/shipper.model';
import { Consignee_master } from 'app/shared/model/consignee.model';
import { ConsigneeMasterService } from 'app/shared/services/ConsigneeMaster.service';

@Component({
  selector: 'app-add-consignee',
  templateUrl: './add-consignee.component.html',
  styleUrls: ['./add-consignee.component.scss'],
  providers: [DatePipe]
})
export class AddConsigneeComponent implements OnInit {

  msg: string;
  alerts;
  consignee: Consignee_master;
  regularForms: FormGroup;
  constructor(private datePipe: DatePipe, private fb: FormBuilder, private consigneeMasterService: ConsigneeMasterService) { }

  ngOnInit() {
    this.regularForms = this.fb.group({
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
  }

  onsubmit(value: Consignee_master){
    console.log(value);
    this.consigneeMasterService.addConsignee(value).subscribe(data => {
      this.consignee = data;
      if (this.consignee.id != null) {
        this.msg = "Saved Successfully with id : "+this.consignee.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      } else {
        this.msg = "Not Saved";
        this.alerts = 'alrert alert-danger';
      }
    })
    // this.shipperMasterService.addShipper(value).subscribe(
    //   data => {
    //     this.shipper = data;
    //     if(this.shipper.id != null){
    //       this.msg = "Saved Successfully with id : "+this.shipper.id;
    //     this.alerts = 'alert alert-success';
    //     this.regularForms.disable();
    //     } else {
    //       this.msg = "Not Saved ";
    //       this.alerts = 'alrert alert-danger';
    //     }
    //   }
    // )
  }

}
