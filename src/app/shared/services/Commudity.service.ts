import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Commudity } from '../model/Commudity.model';
import { Observable } from 'rxjs';
import { urlRegistry } from './urls';

@Injectable({providedIn: 'root'})
export class CommudityService {
    headers: HttpHeaders;
    constructor(private _httpClient: HttpClient, private _router: Router) {
        this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
    }

    addCommudity(value: Commudity): Observable<Commudity> {
        return this._httpClient.post<Commudity>(urlRegistry.createCommudity, value, {headers: this.headers})
    }

    getCommudity(): Observable<Commudity[]>{
        return this._httpClient.get<Commudity[]>(urlRegistry.getAllCommudity, {headers: this.headers})
    }

    deleteCommudity(id): Observable<Commudity>{
        let params = new HttpParams().set('id', id);
        return this._httpClient.delete<Commudity>(urlRegistry.deleteCommudity, {params: params})
    }

    editCommudityById(value: Commudity):Observable<Commudity> {
        return this._httpClient.put<Commudity>(urlRegistry.editCommudityById, value, {headers: this.headers})
    }
    
    getCommudityById(pname: any):Observable<Commudity> {
        return this._httpClient.get<Commudity>(urlRegistry.getCommudityById+'/'+pname);
    }
}