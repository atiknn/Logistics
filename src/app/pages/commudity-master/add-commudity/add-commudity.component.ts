import { Component, OnInit } from '@angular/core';
import { Commudity } from 'app/shared/model/Commudity.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as userData from '../../../shared/esentials/datasEsentials';
import { CommudityService } from 'app/shared/services/Commudity.service';


@Component({
  selector: 'app-add-commudity',
  templateUrl: './add-commudity.component.html',
  styleUrls: ['./add-commudity.component.scss'],
  providers: [DatePipe]
})


export class AddCommudityComponent implements OnInit {

  msg: string;
  alerts;
  regularForms: FormGroup;
  commudity: Commudity;
  constructor(private datePipe: DatePipe, private fb: FormBuilder, private _commudityService: CommudityService) { }

  ngOnInit() {
    this.regularForms = this.fb.group({
      product_name : ['', Validators.required],
      catAndDiscription: this.fb.array([this.cateAndDiscription()]),
      created_by : [userData.getIds()],
      created_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    })
  }

  cateAndDiscription(): FormGroup {
    return  this.fb.group({
      category: ['', Validators.required],
      product_discribtion : ['', Validators.required],
      created_by : [userData.getIds()],
      created_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
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
    this._commudityService.addCommudity(value).subscribe(data => {
      this.commudity = data;
      if (this.commudity.id != null) {
        this.msg = "Saved Successfully with id : "+this.commudity.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      } else {
        this.msg = "Not Saved ";
        this.alerts = 'alrert alert-danger';
      }
    })
  }

}
