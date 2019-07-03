import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Shipper_master } from '../model/shipper.model';
import { Observable } from 'rxjs';
import { urlRegistry } from './urls';

@Injectable({providedIn: 'root'})
export class ShipperMasterService {

    headers: HttpHeaders;
    constructor(private _httpClient: HttpClient, private _router: Router) {
        this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
    }

    addShipper(shipper): Observable<Shipper_master>{
        return this._httpClient.post<Shipper_master>(urlRegistry.addShipper, shipper, {headers: this.headers})
    }

    getAllShipper(): Observable<Shipper_master[]> {
        return this._httpClient.get<Shipper_master[]>(urlRegistry.getShipper, {headers: this.headers});
    }

    getShipperbyId(pname): Observable<Shipper_master> {
        return this._httpClient.get<Shipper_master>(urlRegistry.getshipperByid+"/"+pname);
    }

    editShipperById(value: Shipper_master): Observable<Shipper_master> {
        return this._httpClient.put<Shipper_master>(urlRegistry.editShipper, value, {headers: this.headers})
    }

    deleteShipper(id: any) {
        let params = new HttpParams().set('id', id);
        return this._httpClient.delete<Shipper_master>(urlRegistry.deleteShipper, {params: params});
    }

    getShipperNameLike(v: any): Observable<Shipper_master[]> {
        let params = new HttpParams().set('c', v);
        return this._httpClient.get<Shipper_master[]>(urlRegistry.getShiiperlikenem , {params: params})
    }
}