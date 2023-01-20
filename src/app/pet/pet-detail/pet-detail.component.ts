import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Adoption } from 'src/app/model/adoption.model';
import { Pet } from 'src/app/model/pet-model';
import { PetsService } from 'src/app/service/pets.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css'],
})
export class PetDetailComponent implements OnInit {
  pet: Pet = new Pet();

  

  petId = -1;

  form : FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required]),
    contact: new FormControl("",[Validators.required]),
  })
  get name(){return this.form.get("name")}
  get email(){return this.form.get("contact")}

  constructor(
    private route: ActivatedRoute,
     private service: PetsService,
     private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.petId = params['id'];
      },
    });
    this.getOnePet();
  }

  getOnePet(): void {
    this.service.getOnePet(this.petId).subscribe({
      next: (pet: Pet) => {
        this.pet = pet;
        
      },
    });
  }

  onSubmitForm():void{
    let adoption = new Adoption( this.form.value)
    adoption._id = this.petId;
        adoption.petName = this.pet.name;

    this.service.postAdoption( adoption).subscribe({
      next:(adoption: Adoption)=>{
        alert("Uspesno ste poslali zahtev!")
        console.log(adoption);
        
      }
    })
    this.form.reset();
    this.router.navigate(["/adoptions"])
  }
}
