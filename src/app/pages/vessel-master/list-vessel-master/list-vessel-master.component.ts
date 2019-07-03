import { Component, OnInit } from '@angular/core';
import { VesselMasterComponent } from '../vessel-master.component';
import { VesselMasterService } from 'app/shared/services/VesselMaster.service';
import { Vessel_Master } from 'app/shared/model/Vessel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-vessel-master',
  templateUrl: './list-vessel-master.component.html',
  styleUrls: ['./list-vessel-master.component.scss']
})
export class ListVesselMasterComponent implements OnInit {

  vessels: Vessel_Master[];
  vessel: Vessel_Master;
  listsearch;
  constructor(private _vesselMasterService: VesselMasterService, private _router: Router ) { }

  ngOnInit() {
    this._vesselMasterService.getAllVessel().subscribe(data => {
      this.vessels = data
    })
  }

  deleteVessel(id){
    console.log(id);
    this._vesselMasterService.deleteVessel(id).subscribe(data => {
      this.vessel = data;
      this._vesselMasterService.getAllVessel().subscribe(data => {
        this.vessels = data
      })
    })
  }

  ediVessel(value){
    this._router.navigateByUrl('/edit-vessel-master/'+value);
  }

}
