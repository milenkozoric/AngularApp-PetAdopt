import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AdoptionsComponent } from './pet/adoptions/adoptions.component';
import { PetsComponent } from './pet/pets/pets.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"pets",component: PetsComponent},
  {path:"adoptions", component: AdoptionsComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
