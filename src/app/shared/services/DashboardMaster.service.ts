import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { dashBoard } from '../model/dashBoard.model';
import { urlRegistry } from './urls';

@Injectable({providedIn: 'root'})
export class dashboardService {
    
    
    headers: HttpHeaders;
    constructor(private _httpClient: HttpClient, private _router: Router) {
        this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
    }

    getDashBoard() :Observable<dashBoard> {
        return this._httpClient.get<dashBoard>(urlRegistry.dash, {headers: this.headers})
    }

    
}