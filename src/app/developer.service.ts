import { Injectable } from '@angular/core';
import { Developer } from './developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  devs:Developer[]

  constructor() { 
    this.devs = [
      new Developer(1,"Priyanka","Kottakoti","Java",2013),
      new Developer(2,"Vineet","Battula","Java",2014),
      new Developer(3,"Hema","Joshi","Java",2000),
      new Developer(4,"Suneetha","Atla","Java",2010)
    ];
  }

  getDevelopers():Developer[]{
    return this.devs;
  }

  getDeveloperById(id:number):Developer{
    return this.devs.find(dev=>dev.id==id);
  }
}
