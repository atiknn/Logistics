import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotifyMaster } from '../model/notifymaster.model';
import { urlRegistry } from './urls';

@Injectable({providedIn: 'root'})
export class NotifyMasterService {
  

    headers: HttpHeaders;
    constructor(private _httpClient: HttpClient, private _router: Router) {
        this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
    }

    createNotifyMaster(notifyAgent: NotifyMaster): Observable<NotifyMaster>{
        return this._httpClient.post<NotifyMaster>(urlRegistry.createNotifyParty, notifyAgent, {headers: this.headers})
    }

    getAllNotifyMaster(): Observable<NotifyMaster[]>{
        return this._httpClient.get<NotifyMaster[]>(urlRegistry.getAllNotify, {headers: this.headers})
    }

    editNotifyAgentById(value: NotifyMaster):Observable<NotifyMaster> {
        return this._httpClient.put<NotifyMaster>(urlRegistry.editNotifyAgentById, value, {headers: this.headers})
    }
    
    getNotifyAgentById(pname: any):Observable<NotifyMaster> {
        return this._httpClient.get<NotifyMaster>(urlRegistry.getNotifyAgentById+'/'+pname);
    }

    deleteNotifyAgents(id): Observable<NotifyMaster>{
        let params = new HttpParams().set('id', id);
        return this._httpClient.delete<NotifyMaster>(urlRegistry.deleteNotifyParty, {params: params})
    }

}