import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Vessel_Master } from '../model/Vessel.model';
import { Observable } from 'rxjs';
import { urlRegistry } from './urls';

@Injectable({providedIn:'root'})
export class VesselMasterService {
  

    headers: HttpHeaders;
    constructor(private _httpClient: HttpClient, private _router: Router) {
        this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
    }

    addVessel(vessel: Vessel_Master): Observable<Vessel_Master>{
        return this._httpClient.post<Vessel_Master>(urlRegistry.addVessel, vessel, {headers: this.headers});
    }

    getAllVessel(): Observable<Vessel_Master[]>{
        return this._httpClient.get<Vessel_Master[]>(urlRegistry.getAllVessel, {headers: this.headers});
    }

    deleteVessel(id): Observable<Vessel_Master>{
        let params = new HttpParams().set('id', id);
        return this._httpClient.delete<Vessel_Master>(urlRegistry.deleteVessel, {params: params});
    }

    editVesselById(value: Vessel_Master) {
        return this._httpClient.put<Vessel_Master>(urlRegistry.editVesselById, value,  {headers: this.headers});
    }

    getVesselById(pname: any) {
        return this._httpClient.get<Vessel_Master>(urlRegistry.getVesselById+'/'+pname);
    }
}