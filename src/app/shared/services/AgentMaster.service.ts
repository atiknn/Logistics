import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Agents } from '../model/AddAgent.model';
import { urlRegistry } from './urls';

@Injectable({providedIn:'root'})
export class AgentMasterService {

    headers: HttpHeaders;
    constructor(private _httpClient: HttpClient, private _router: Router) {
        this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
    }


    addAgent(agents: Agents): Observable<Agents>{
        return this._httpClient.post<Agents>(urlRegistry.addAgent, agents, {headers: this.headers});
    }

    getAllAgents(): Observable<Agents[]>{
        return this._httpClient.get<Agents[]>(urlRegistry.getAllAgents, {headers: this.headers});
    }

    deleteAgents(id): Observable<Agents>{
        let params = new HttpParams().set('id', id);
        return this._httpClient.delete<Agents>(urlRegistry.deleteAgents,  {params: params});
    }

    getAgentById(pname):Observable<Agents>{
        return this._httpClient.get<Agents>(urlRegistry.getAgentById+'/'+pname);
    }

    editAgentById(value: Agents):Observable<Agents> {
        return this._httpClient.put<Agents>(urlRegistry.editAgentById, value, {headers: this.headers});
    }

}