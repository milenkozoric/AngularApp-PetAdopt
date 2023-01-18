import { Pet } from "./pet-model";

export class PetList{
    count: number;
    results: Pet[];

    constructor(obj?:any){
        this.count= obj && obj.count || null;
        this.results = obj && obj.results.map((elem:any)=> new Pet(elem)) ||null;
    }
}