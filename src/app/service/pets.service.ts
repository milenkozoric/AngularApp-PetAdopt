import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PetList } from '../model/pet-list.model';
import { Pet } from '../model/pet-model';

const baseURL = "http://localhost:3000/api"
@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http: HttpClient) { }



  getPets():Observable<PetList>{
    return this.http.get(`${baseURL}/pets`).pipe(map((data:any)=>{
      return new PetList(data);
    }))
  }
}
