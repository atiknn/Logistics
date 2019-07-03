import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as userData from '../../shared/esentials/datasEsentials';
import { newItem } from 'app/shared/model/newItem.model';
import { newItemMasterService } from 'app/shared/services/newItemMaster.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
  providers: [DatePipe]
})
export class NewItemComponent implements OnInit {

  msg: string;
  alerts;
  regularForms: FormGroup;
  newItems: newItem;
  newItemsList: newItem[];
  constructor(private datePipe: DatePipe, private fb: FormBuilder, private _newItemservice: newItemMasterService) { }

  ngOnInit() {
    this._newItemservice.getAllItem().subscribe(data => {
      this.newItemsList = data;
    })

    this.regularForms = this.fb.group({
      item_name: [],
      unit: [],
      amount: [],
      created_by: [userData.getIds()],
      created_on: [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]
    })
  }


  onsubmit(value: newItem){
    console.log(value);
    this._newItemservice.addItem(value).subscribe(data => {
      this.newItems = data;
      if (this.newItems.id != null) {
        this.msg = "Saved Successfully with id : "+this.newItems.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      } else {
        this.msg = "Not Saved ";
        this.alerts = 'alrert alert-danger';
      }
    })
  }

  deleteItem(id){
    console.log(id)
    this._newItemservice.deleteItem(id).subscribe(data => {
      this.newItems = data;
      this._newItemservice.getAllItem().subscribe(data => {
        this.newItemsList = data;
      })
    })
  }
}
