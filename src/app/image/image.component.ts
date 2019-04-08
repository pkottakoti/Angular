import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  buttonText: string="Enlarge";
  width:number=40;

  resize():void{
    this.buttonText=this.buttonText == "Enlarge" ? "Shrink":"Enlarge";
    this.width= this.width==100 ? 50:100;
  }
  constructor() { }

  ngOnInit() {
  }

}
