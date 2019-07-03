import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Shipper_master } from '../model/shipper.model';
import { Observable } from 'rxjs';
import { urlRegistry } from './urls';
import { Consignee_master } from '../model/consignee.model';


@Injectable({providedIn: 'root'})
export class ConsigneeMasterService {

    headers: HttpHeaders;
    constructor(private _httpClient: HttpClient, private _router: Router) {
        this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
    }

    addConsignee(consignee: Consignee_master): Observable<Shipper_master>{
        return this._httpClient.post<Shipper_master>(urlRegistry.addConsignee, consignee, {headers: this.headers});
    }

    getConsigneeById(value): Observable<Consignee_master> {
        return this._httpClient.get<Consignee_master>(urlRegistry.getConsigneeById+"/"+value);
    }

    getAllConsignee(): Observable<Consignee_master[]> {
        return this._httpClient.get<Consignee_master[]>(urlRegistry.getAllConsignee, {headers: this.headers});
    }

    deleteConsignee(id): Observable<Shipper_master>{
        let params = new HttpParams().set('id', id);
        return this._httpClient.delete<Shipper_master>(urlRegistry.deleteConsignee, {params: params});
    }

    editConsigneeById(value: Consignee_master): Observable<Consignee_master> {
        return this._httpClient.put<Consignee_master>(urlRegistry.editConsigneeById, value, {headers: this.headers})
    }

}




