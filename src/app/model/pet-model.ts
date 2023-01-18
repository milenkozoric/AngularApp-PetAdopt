export class Pet {
  _id: number;
  name: string;
  category: string;
  sex: string;
  size_kg: number;
  story: string;
  image: string;
  constructor (obj?:any){
    this._id = obj && obj._id || null;
    this.name = obj && obj.name || null;
    this.category = obj && obj.category || null;
    this.sex = obj && obj.sex || null;
    this.size_kg = obj && obj.size_kg || null;
    this.story = obj && obj.story || null;
    this.image = obj && obj.image || null;
    
  }
}
