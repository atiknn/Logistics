import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as userData from '../../../shared/esentials/datasEsentials';
import { Vessel_Master } from 'app/shared/model/Vessel.model';
import { VesselMasterService } from 'app/shared/services/VesselMaster.service';


@Component({
  selector: 'app-add-vessel-master',
  templateUrl: './add-vessel-master.component.html',
  styleUrls: ['./add-vessel-master.component.scss'],
  providers: [DatePipe]
})
export class AddVesselMasterComponent implements OnInit {

  rows: FormArray;
  regularForms: FormGroup;
  msg: string;
  alerts;
  vessel: Vessel_Master;
  constructor(private datePipe: DatePipe, private fb: FormBuilder, private _vesselMasterService: VesselMasterService) {
    this.rows = this.fb.array([]);
  }

  ngOnInit() {
    this.regularForms = this.fb.group({
      name : ['', Validators.required],
      nikename : [''],
      routess : this.fb.array([this.addVesselPortList()]),
      created_by : [userData.getIds()],
      created_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    })
  }


  addVesselPortList(): FormGroup {
    return this.fb.group({
      port_name : ['', Validators.required],
      country_name : ['', Validators.required],
      created_by : [userData.getIds()],
      created_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    });
  }

  addButtonClick(): void {
    (<FormArray>this.regularForms.get('routess')).push(this.addVesselPortList());
  }

  removeMobileno(i: number) {
    const control = <FormArray>this.regularForms.get('routess');
    control.removeAt(i);
  }

  onsubmit(value: Vessel_Master) {
    console.log(value);
    this._vesselMasterService.addVessel(value).subscribe(data => {
      this.vessel = data;
      if (this.vessel.id != null) {
        this.msg = "Saved Successfully id : "+this.vessel.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      }else{
        this.msg = "Not Saved ";
        this.alerts = 'alrert alert-danger';
      }
    })
  }

}
