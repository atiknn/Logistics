import { Component, OnInit } from '@angular/core';
import { BookingMasterService } from 'app/shared/services/BookingMaster.service';
import { NewBooking } from 'app/shared/model/NewBooking.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.scss']
})
export class BookinglistComponent implements OnInit {

  listsearch;
  newBooking: NewBooking[];
  constructor(private _bookingMasterService: BookingMasterService, private _router: Router) { }

  ngOnInit() {
    this._bookingMasterService.getAllBooking().subscribe(data => {
      this.newBooking = data;
    })
  }

  booking(value){
    console.log(value);
    this._bookingMasterService.deleteBooking(value).subscribe(data => {
      data = data;
      this._bookingMasterService.getAllBooking().subscribe(data => {
        this.newBooking = data;
      })
    })
  }

  editbill(value){
    this._router.navigateByUrl('/billofLeading/' + value);
  }
  
  editInvoice(value){
    this._router.navigateByUrl('/editInvoice/' + value);
  }

  getBooking(value){
    this._router.navigateByUrl('generatebl/' + value);
  }

  getInvoice(value){
    this._router.navigateByUrl('generateIn/' + value);
  }

}
