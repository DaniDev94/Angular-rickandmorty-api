
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get("https://rickandmortyapi.com/api/character");
  }

  getCharactersId(characterId: any): Observable<any>{
    return this.http.get("https://rickandmortyapi.com/api/character/" + characterId);
  }
}
