import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
 
  devs:Developer[];
  private baseUrl:string="http://54.202.108.54/Home/";

  constructor(private http:HttpClient) { 
    
   
  }
  addDeveloper(formData: FormData):any {
    this.http.post(this.baseUrl+"AddDeveloper",formData)
    .subscribe(res=>{
      console.log(res);
      return true},
      (err)=> {
      this.handleError(err);
      return false;
      });
  }
  getDevelopers():Observable<Developer[]>{
    return this.http.get<Developer[]>(this.baseUrl+"Developers").pipe(
      map(response=>{
        this.devs=response;
        return response;
      }),
      catchError(this.handleError<any>())
    );
  }


  private handleError<T>(result?:T){
    return (error:any):Observable<T>=>{
      console.log("Error in DeveloperService: "+error);
      return null;
    }
  }



  getDeveloperById(id:number):Developer{
    return this.devs.find(dev=>dev.id==id);
  }
}
