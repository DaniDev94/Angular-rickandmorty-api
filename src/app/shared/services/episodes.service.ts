import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient) { }

  getEpisodes(): Observable<any>{
    return this.http.get("https://rickandmortyapi.com/api/episode");
  }
}
