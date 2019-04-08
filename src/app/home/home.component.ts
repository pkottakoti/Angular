import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myColor:string='magenta';
  toggleView:boolean=false;
  buttonText:string='View Bio';

 changeColor():void{
     this.myColor='blue'
 }

 toggleBioView():void{
   
    this.toggleView=!this.toggleView; 
    this.buttonText=this.buttonText == "View Bio" ? "Hide Bio":"View Bio";
 }
  constructor() { }

  ngOnInit() {
  }

}
