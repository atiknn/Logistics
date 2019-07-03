import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as userData from '../../shared/esentials/datasEsentials';
import { Vessel_Master } from 'app/shared/model/Vessel.model';
import { VesselMasterService } from 'app/shared/services/VesselMaster.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-vessels',
  templateUrl: './edit-vessels.component.html',
  styleUrls: ['./edit-vessels.component.scss'],
  providers: [DatePipe]
})
export class EditVesselsComponent implements OnInit {

  pname;
  rows: FormArray;
  regularForms: FormGroup;
  msg: string;
  alerts;
  vessel: Vessel_Master;
  vessel_byid: Vessel_Master;
  constructor(
    private datePipe: DatePipe, 
    private fb: FormBuilder, 
    private _vesselMasterService: VesselMasterService,
    private _AR: ActivatedRoute
    ) {
    this.rows = this.fb.array([]);
  }

  ngOnInit() {
    this._AR.params.subscribe(data=>{this.pname = data['id']});
    this.regularForms = this.fb.group({
      id: [],
      name : ['', Validators.required],
      nikename : [''],
      routess : this.fb.array([this.addVesselPortList()]),
      created_by : [userData.getIds()],
      created_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    })
    this.setValue();
  }

  setValue(){
    this._vesselMasterService.getVesselById(this.pname).subscribe(data => {
      this.vessel_byid = data;
      for(let line=1; line < this.vessel_byid.routess.length; line++){
        this.addButtonClick();
      }
      this.regularForms.patchValue(this.vessel_byid);
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
    this._vesselMasterService.editVesselById(value).subscribe(data => {
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
