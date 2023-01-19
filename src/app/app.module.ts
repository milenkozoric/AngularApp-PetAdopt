import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { PetsComponent } from './pet/pets/pets.component';
import { AdoptionsComponent } from './pet/adoptions/adoptions.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './core/home/home.component';
import { PetDetailComponent } from './pet/pet-detail/pet-detail.component'
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    PetsComponent,
    AdoptionsComponent,
    HomeComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
