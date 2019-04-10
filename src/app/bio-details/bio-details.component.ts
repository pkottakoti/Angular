import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bio-details',
  templateUrl: './bio-details.component.html',
  styleUrls: ['./bio-details.component.css']
})
export class BioDetailsComponent implements OnInit {
developer:Developer;


  constructor(
    private developerService:DeveloperService,
    private activatedRoute:ActivatedRoute) { }
  getDeveloper(){
    this.developer=this.developerService.getDeveloperById(
     parseInt(this.activatedRoute.snapshot.paramMap.get('id')) 
    );
  }

  ngOnInit() {
    this.getDeveloper();
  }

}
