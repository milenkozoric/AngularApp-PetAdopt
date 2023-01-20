import { Component, OnInit } from '@angular/core';
import { Adoption, AdoptionList } from 'src/app/model/adoption.model';
import { PetsService } from 'src/app/service/pets.service';

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.css']
})
export class AdoptionsComponent implements OnInit {
adoptions: Adoption[]= [];


  constructor(private service: PetsService) { }

  ngOnInit(): void {
    this.getAllAdoptions();
  }

  getAllAdoptions():void {
    this.service.getAdoptions().subscribe({
      next: (adoptions: AdoptionList)=>{
        this.adoptions = adoptions.results;
        console.log(this.adoptions);
        
      }
    })
  }

  onDeleteAdoption(id: number):void{
    
    
    this.service.deleteAdoption(id).subscribe({
      next:(adoption: Adoption)=>{
        
        this.getAllAdoptions();
      }
      
    })
  }

}
