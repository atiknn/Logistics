import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookinglistComponent } from './bookinglist.component';
import { BookingListRoutingModule } from './bookinglist-routing.module';
import { bookingpipe } from './bookinglist.filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookinglistComponent, bookingpipe],
  imports: [
    CommonModule,
    FormsModule,
    BookingListRoutingModule
  ]
})
export class BookinglistModule { }
