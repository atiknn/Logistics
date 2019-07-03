import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { editinvoice } from '../model/editinvoice.model';
import { urlRegistry } from './urls';

@Injectable({providedIn:'root'})
export class InvoiceService {

    headers: HttpHeaders;
    constructor(private _httpClient: HttpClient, private _router: Router) {
        this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
    }
    
    addInvoice(value): Observable<editinvoice>{
        return this._httpClient.post<editinvoice>(urlRegistry.addInvoice, value, {headers: this.headers});
    }

    // deleteConsignee(id): Observable<Shipper_master>{
    //     let params = new HttpParams().set('id', id);
    //     return this._httpClient.delete<Shipper_master>(urlRegistry.deleteConsignee, {params: params});
    // }

    getInvoice(blno):Observable<editinvoice> {
        return this._httpClient.get<editinvoice>(urlRegistry.getInvoiceByBlno+'/'+blno);
    }

    EditedInvoice(value: editinvoice): Observable<editinvoice> {
        return this._httpClient.put<editinvoice>(urlRegistry.editedInvoice, value, {headers: this.headers});
    }


}