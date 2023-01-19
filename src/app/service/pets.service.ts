import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PetList } from '../model/pet-list.model';
import { Pet } from '../model/pet-model';

const baseURL = 'http://localhost:3000/api';
@Injectable({
  providedIn: 'root',
})
export class PetsService {
  constructor(private http: HttpClient) {}

  getPets(params?: any): Observable<PetList> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('filter', params.filter && JSON.stringify(params.filter) || '')
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || ''),
      };
    }
    return this.http.get(`${baseURL}/pets`, options).pipe(
      map((data: any) => {
        return new PetList(data);
      })
    );
  }
}
