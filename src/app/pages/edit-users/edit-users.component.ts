import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Register } from 'app/shared/model/register.model';
import { UserManagementsService } from 'app/shared/services/users.service';
import { DatePipe } from '@angular/common';
import * as userData from '../../shared/esentials/datasEsentials';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss'],
  providers: [DatePipe]
})
export class EditUsersComponent implements OnInit {

  pname;
  userDetails: Register;
  regularForms: FormGroup;
  roles = [
    {id: 'Admin', name: 'Admin'},
    {id: 'User', name: 'User'}
  ];
  sta = [
    {id:'A', name:'Active'},
    {id:'B', name:'Block'}
  ];
  roless: any;
  statuss: any;
  registers: Register;
  msg: string;
  alerts;

  constructor(private datePipe: DatePipe, private fb: FormBuilder,private _AR: ActivatedRoute, private _router: Router, private _userManagementsService: UserManagementsService) {}

  ngOnInit() {
    this._AR.params.subscribe(data=>{this.pname = data['id']});
      this.regularForms = this.fb.group({
        id: [],
        name : ['', Validators.required],
        username : ['', Validators.required],
        password: [],
        role : ['', Validators.required],
        dob : ['', Validators.required],
        branch_id : ['0'],
        status : ['', Validators.required],
        address : ['', Validators.required],
        contact_no : ['', [Validators.required]],
        email_id : ['', [Validators.required, Validators.email]],
        updated_by : [userData.getIds()],
        updated_on : [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
      });
      this.setValue();
  }

  setValue(){
    console.log('starts');
    this._userManagementsService.getUserDetails(this.pname).subscribe(data =>{
      this.userDetails = data;
      this.regularForms.patchValue(this.userDetails);
    });
  }

  onsubmit(s: Register) {
    s.updated_by = userData.getIds();
    s.updated_on = this.datePipe.transform(userData.getDate(), "yyyy-MM-dd");
    console.log(s);
    this._userManagementsService.updateUser(s).subscribe(data => {
        this.registers = data;
      if(this.registers.name === s.name && this.registers.username === s.username && this.registers.status === s.status){
        this.msg = "Saved Successfully id : "+this.registers.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      }else{
        this.msg = "Not Saved ";
        this.alerts = 'alrert alert-danger';
      }
    })
  }




}
