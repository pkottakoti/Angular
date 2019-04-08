import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { DisplayempComponent } from './displayemp/displayemp.component';
import { BioDetailsComponent } from './bio-details/bio-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    HomeComponent,
    ImageComponent,
    DisplayempComponent,
    BioDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
