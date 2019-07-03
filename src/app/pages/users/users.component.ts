import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Register } from 'app/shared/model/register.model';
import { DatePipe } from '@angular/common';
import * as userData from '../../shared/esentials/datasEsentials';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
