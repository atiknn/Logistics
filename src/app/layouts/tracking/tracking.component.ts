import { Component, OnInit } from '@angular/core';
import * as userData from '../../shared/esentials/datasEsentials';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'],
  providers: [DatePipe]
})
export class TrackingComponent implements OnInit {

  regularForms: FormGroup;

  constructor(private datePipe: DatePipe, private fb: FormBuilder) { }

  ngOnInit() {
    this.regularForms = this.fb.group({
      name : ['', Validators.required]
    })
  }

}
