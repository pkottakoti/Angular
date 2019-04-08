import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { ImageComponent } from './image/image.component';
import { DisplayempComponent } from './displayemp/displayemp.component';
import { BioDetailsComponent } from './bio-details/bio-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'bio',component:BioComponent},
  {path:'displayImage',component:ImageComponent},
  {path:'displayEmp', component:DisplayempComponent},
  {path:'bio/:id',component:BioDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
