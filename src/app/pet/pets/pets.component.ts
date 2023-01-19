import { Component, OnInit } from '@angular/core';
import { PetList } from 'src/app/model/pet-list.model';
import { Pet } from 'src/app/model/pet-model';
import { PetsService } from 'src/app/service/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];
  constructor(private service: PetsService) {}

  params = {
    sort: '',
    sortDirection: 'asc',
    filter: {
      category: '',
      sex: '',
    },
  };

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.service.getPets(this.params).subscribe({
      next: (pets: PetList) => {
        this.pets = pets.results;

        console.log(this.pets);
      },
    });
  }

  onFilterCategory(event: Event): void {
    this.params.filter.category = (event.target as HTMLInputElement).value;
    this.getPets();
  }

  onFilterSex(event: Event): void {
    this.params.filter.sex = (event.target as HTMLInputElement).value;
    this.getPets();
  }

  onSort(event: Event): void {
    this.params.sort = (event.target as HTMLInputElement).value;
    this.getPets();
  }
}
