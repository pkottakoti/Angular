import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  devs: Developer[];

  constructor(private developerService:DeveloperService) { }

  showDeveloper(){
    //this.developerService.getDevelopers().subscribe(response=>this.devs=response);

    this.developerService.getDevelopers().subscribe(response=>this.devs=response);
  }
 
  ngOnInit() {
    this.showDeveloper();
  }

}
