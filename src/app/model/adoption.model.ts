export class Adoption {
  _id: number;

  petName: string;
  name: string;
  contact: string;
  constructor(obj?: any) {
    this._id = (obj && obj._id) || null;
    this.petName = (obj && obj.petName) || null;
    this.name = (obj && obj.name) || null;
    this.contact = (obj && obj.contact) || null;
  }
}


export class AdoptionList{
    count: number;
    results: Adoption[];

    constructor(obj?:any){
        this.count = obj && obj.count || null;
        this.results = obj && obj.results && obj.results.map((elem:any)=> new Adoption(elem)) || null;
    }
}