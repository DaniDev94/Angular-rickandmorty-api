import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  getLocations(): Observable<any> {
    return this.http.get("https://rickandmortyapi.com/api/location");
  }

  getLocationsId(locationId: any): Observable<any>{
    return this.http.get("https://rickandmortyapi.com/api/location/" + locationId);
  }

  getResidentsUrl(url: any){
    return this.http.get(url);
  }

}
