import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as userData from '../../shared/esentials/datasEsentials';
import { FormGroup, FormBuilder, FormControl,FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommudityService } from 'app/shared/services/Commudity.service';
import { Commudity } from 'app/shared/model/Commudity.model';

@Component({
  selector: 'app-edit-commudity',
  templateUrl: './edit-commudity.component.html',
  styleUrls: ['./edit-commudity.component.scss'],
  providers: [DatePipe]
})
export class EditCommudityComponent implements OnInit {

  pname;
  msg: string;
  alerts;
  regularForms: FormGroup;
  commudity: Commudity;
  commudity_new: Commudity;
  constructor(
    private datePipe: DatePipe, 
    private fb: FormBuilder, 
    private _AR: ActivatedRoute,
    private _commudity: CommudityService
  ) { }

  ngOnInit() {
    this._AR.params.subscribe(data=>{this.pname = data['id']});
    this.regularForms = this.fb.group({
      id:[],
      product_name : ['', Validators.required],
      catAndDiscription: this.fb.array([this.cateAndDiscription()]),
      created_by : [userData.getIds()],
      created_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    })
    this.setValue();
  }

  cateAndDiscription(): FormGroup {
    return  this.fb.group({
      category: ['', Validators.required],
      product_discribtion : ['', Validators.required],
      created_by : [userData.getIds()],
      created_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    })
  }

  setValue() {
    this._commudity.getCommudityById(this.pname).subscribe(data => {
      this.commudity = data;
      for(let line=1; line < this.commudity.catAndDiscription.length; line++){
        this.addButtonClick();
      }
      this.regularForms.patchValue(this.commudity);
    })
  }

  addButtonClick(): void {
    (<FormArray>this.regularForms.get('catAndDiscription')).push(this.cateAndDiscription());
  }

  remove(i: number) {
    const control = <FormArray>this.regularForms.get('catAndDiscription');
    control.removeAt(i);
  }


  onsubmit(value: Commudity){
    console.log(value);
    this._commudity.editCommudityById(value).subscribe(data => {
      this.commudity_new = data;
      if(this.commudity_new.product_name === value.product_name){
        this.msg = "Saved Successfully id : "+this.commudity_new.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      }else{
        this.msg = "Not Saved ";
        this.alerts = 'alrert alert-danger';
      }
    })
  }

}
