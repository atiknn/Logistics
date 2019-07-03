import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlRegistry } from './urls';

@Injectable({providedIn: 'root'})
export class DownloadService {

    headers: HttpHeaders;
    constructor(private _httpClient: HttpClient) { 
        this.headers = new HttpHeaders({'Content-Type' : 'application/txt'});
    }

    getDownload(value) {
        return this._httpClient.get(urlRegistry.download + '/' + value, {responseType:"blob"});
    }

}