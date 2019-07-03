import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewBooking } from '../model/NewBooking.model';
import { urlRegistry } from './urls';

@Injectable({providedIn:'root'})
export class BookingMasterService {

    headers: HttpHeaders;
    constructor(private _httpClient: HttpClient, private _router: Router) {
        this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
    }

    // addShipper(shipper): Observable<Shipper_master>{
    //     return this._httpClient.post<Shipper_master>(urlRegistry.addShipper, shipper, {headers: this.headers})
    // }

    // getAllShipper(): Observable<Shipper_master[]> {
    //     return this._httpClient.get<Shipper_master[]>(urlRegistry.getShipper, {headers: this.headers});
    // }

    getBookingByid(id: any):Observable<NewBooking> {
        let params = new HttpParams().set('id', id);
        return this._httpClient.get<NewBooking>(urlRegistry.getBookingById, {params: params});
    }

    addBooking(booking: NewBooking):Observable<NewBooking> {
        console.log(booking);
        return this._httpClient.post<NewBooking>(urlRegistry.addBooking, booking, {headers: this.headers})
    }

    getAllBooking():Observable<NewBooking[]> {
        return this._httpClient.get<NewBooking[]>(urlRegistry.listBooking, {headers: this.headers})
    }

    deleteBooking(value): Observable<NewBooking> {
        let params = new HttpParams().set('id', value);
        return this._httpClient.delete<NewBooking>(urlRegistry.deleteBookingId, {params: params});
    }

}