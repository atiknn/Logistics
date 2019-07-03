import { Component, OnInit } from '@angular/core';
import { Shipper_master } from 'app/shared/model/shipper.model';
import { ShipperMasterService } from 'app/shared/services/ShipperMaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-shipper',
  templateUrl: './list-shipper.component.html',
  styleUrls: ['./list-shipper.component.scss']
})
export class ListShipperComponent implements OnInit {

  shipperList: Shipper_master[];
  shipper: Shipper_master;
  listsearch;
  constructor(private _shipperMasterService: ShipperMasterService,  private _router: Router) { }

  ngOnInit() {
    this._shipperMasterService.getAllShipper().subscribe(data => {this.shipperList = data});
  }

  deleteuser(id){
    console.log(id);
    this._shipperMasterService.deleteShipper(id).subscribe( data => {
      this.shipper = data;
      this._shipperMasterService.getAllShipper().subscribe( data => {this.shipperList = data});
    });
  }

  editUser(id){
    this._router.navigateByUrl('/edit-shipper-master/' + id);
  }



}
