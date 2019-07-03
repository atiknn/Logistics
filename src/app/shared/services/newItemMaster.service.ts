import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { newItem } from '../model/newItem.model';
import { urlRegistry } from './urls';

@Injectable({providedIn: 'root'})
export class newItemMasterService {

    headers: HttpHeaders;
    constructor(private _httpClient: HttpClient, private _router: Router) {
        this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
    }

    addItem(values): Observable<newItem>{
        return this._httpClient.post<newItem>(urlRegistry.addItem, values, {headers: this.headers});
    }

    getAllItem(): Observable<newItem[]>{
        return this._httpClient.get<newItem[]>(urlRegistry.getItem, {headers: this.headers});
    }

    deleteItem(id): Observable<newItem>{
        let params = new HttpParams().set('id', id);
        return this._httpClient.delete<newItem>(urlRegistry.deleteItem, {params: params});
    }

    // addAgent(agents: Agents): Observable<Agents>{
    //     return this._httpClient.post<Agents>(urlRegistry.addAgent, agents, {headers: this.headers});
    // }

    // getAllAgents(): Observable<Agents[]>{
    //     return this._httpClient.get<Agents[]>(urlRegistry.getAllAgents, {headers: this.headers});
    // }

    // deleteAgents(id): Observable<Agents>{
    //     let params = new HttpParams().set('id', id);
    //     return this._httpClient.delete<Agents>(urlRegistry.deleteAgents,  {params: params});
    // }



}