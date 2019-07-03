import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as userData from '../../../shared/esentials/datasEsentials';
import { UserManagementsService } from 'app/shared/services/users.service';
import { Register } from 'app/shared/model/register.model';


@Component({
  selector: 'app-tab-add-users',
  templateUrl: './tab-add-users.component.html',
  styleUrls: ['./tab-add-users.component.scss'],
  providers: [DatePipe]
})

export class TabAddUsersComponent implements OnInit {

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
  constructor(private datePipe: DatePipe, private fb: FormBuilder, private _userManagements: UserManagementsService) { }

  ngOnInit() {
    this.regularForms = this.fb.group({
      'name': ['', Validators.required],
      'username': ['', Validators.required],
      'password': ['mulla'],
      'role': ['', Validators.required],
      'dob': ['', Validators.required],
      'branch_id': ['0'],
      'status': ['', Validators.required],
      'address': ['', Validators.required],
      'contact_no': ['', [Validators.required]],
      'email_id': ['', [Validators.required, Validators.email]],
      'created_by': [userData.getIds()],
      'created_on': [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    });
  }

  onsubmit(s: Register) {
    console.log(s);
    this._userManagements.addUser(s).subscribe(data => {
      this.registers = data;
      if(this.registers.name === s.name && this.registers.username === s.username && this.registers.status === s.status){
        this.msg = "Saved Successfully id : "+this.registers.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      }else{
        this.msg = "Not Saved ";
        this.alerts = 'alrert alert-danger';
      }
    });
  }


}
