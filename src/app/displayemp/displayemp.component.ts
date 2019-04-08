import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';

@Component({
  selector: 'app-displayemp',
  templateUrl: './displayemp.component.html',
  styleUrls: ['./displayemp.component.css']
})
export class DisplayempComponent implements OnInit {
 developers:Array<Developer>;
  constructor() { }

  ngOnInit() {
    this.developers=[
     new Developer(1,"Priyanka","Kottakoti","Java",2013),
     new Developer(2,"Hema","Joshi","Java",2013),
     new Developer(3,"Vineet","Battula","Java",2013)
    ];
  }

}
