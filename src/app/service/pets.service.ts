import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Adoption, AdoptionList } from '../model/adoption.model';
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

  getOnePet(petsId : number):Observable<Pet>{
    return this.http.get(`${baseURL}/pets/${petsId}`).pipe(map((data:any)=>{
      return new Pet(data);
    }))
  }

  postAdoption( adoption:Adoption):Observable<Adoption>{
    return this.http.post(`${baseURL}/adoptions`,adoption).pipe(map((elem:any)=>{
      return new Adoption(elem);
    }))
  }

  getAdoptions():Observable<AdoptionList>{
    return this.http.get(`${baseURL}/adoptions`).pipe(map((elem:any)=>{
      return new AdoptionList(elem);
    }))
  }

  deleteAdoption(id: Number): Observable<Adoption>{
    return this.http.delete(`${baseURL}/adoptions/${id}`).pipe(map((data:any)=>{
      return new Adoption(data);
    }))
  }
}
