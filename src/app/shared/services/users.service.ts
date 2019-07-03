import { Injectable } from '@angular/core';
import { Register } from '../model/register.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { urlRegistry } from './urls';

@Injectable({providedIn: 'root'})
export class UserManagementsService {
  

    headers: HttpHeaders;
    constructor(private _httpClient: HttpClient, private _router: Router) {
        this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
    }
    
    addUser(s: Register): Observable<Register>{
        console.log(s);
        return this._httpClient.post<Register>(urlRegistry.register, s,{headers: this.headers});
    }

    getAllUsers(): Observable<Register[]>{
        return this._httpClient.get<Register[]>(urlRegistry.getAllUser, {headers: this.headers});
    }

    deleteUsers(id): Observable<Register>{
        let params = new HttpParams().set('id', id);
        return this._httpClient.delete<Register>(urlRegistry.deleteusers,{params: params} );
    }

    getUserDetails(pname): Observable<Register>{
        let params = new HttpParams().set('id', pname);
        return this._httpClient.get<Register>(urlRegistry.getUserDetails, {params: params});
    }

    updateUser(s: Register):Observable<Register> {
        return this._httpClient.put<Register>(urlRegistry.updateUser, s,{headers: this.headers})
    }


}