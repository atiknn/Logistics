import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingMasterService } from 'app/shared/services/BookingMaster.service';
import { NewBooking } from 'app/shared/model/NewBooking.model';
import { DownloadService } from 'app/shared/services/BookDownload.service';

@Component({
  selector: 'app-generate-bl',
  templateUrl: './generate-bl.component.html',
  styleUrls: ['./generate-bl.component.scss']
})
export class GenerateBlComponent implements OnInit {

  pname;
  newBooking: NewBooking;

  constructor(private _AR: ActivatedRoute, 
    private _bookingService: BookingMasterService) { }

  ngOnInit() {
    this._AR.params.subscribe(data=>{this.pname = data['id']});
    this.getBookingId(this.pname);
  }

  getBookingId(pnames){
    this._bookingService.getBookingByid(pnames).subscribe(data => {
      this.newBooking = data;
    })
  }

}
