import { Component, OnInit } from '@angular/core';
import { ConsigneeMasterService } from 'app/shared/services/ConsigneeMaster.service';
import { Router } from '@angular/router';
import { Consignee_master } from 'app/shared/model/consignee.model';

@Component({
  selector: 'app-list-consignee',
  templateUrl: './list-consignee.component.html',
  styleUrls: ['./list-consignee.component.scss']
})
export class ListConsigneeComponent implements OnInit {

  listsearch;
  consigneeList: Consignee_master[];
  consignee: Consignee_master;
  constructor(private _shipperMasterService: ConsigneeMasterService,  private _router: Router) { }

  ngOnInit() {
    this._shipperMasterService.getAllConsignee().subscribe(data => {this.consigneeList = data});
  }

  deleteuser(id){
    console.log(id);
    this._shipperMasterService.deleteConsignee(id).subscribe(data => {
      this.consignee = data;
      this._shipperMasterService.getAllConsignee().subscribe(data => {this.consigneeList = data});
    });
  }

  editConsignee(id){
    this._router.navigateByUrl('/edit-consignee-master/'+ id);
  }



}
