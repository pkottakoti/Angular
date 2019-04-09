import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { DisplayempComponent } from './displayemp/displayemp.component';
import { BioDetailsComponent } from './bio-details/bio-details.component';
import { HttpClientModule} from '@angular/common/http';
import { CreateBioComponent } from './create-bio/create-bio.component';


@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    HomeComponent,
    ImageComponent,
    DisplayempComponent,
    BioDetailsComponent,
    CreateBioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
