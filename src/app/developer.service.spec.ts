import { TestBed, getTestBed } from '@angular/core/testing';

import { DeveloperService } from './developer.service';
import {  } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeveloperService', () => {

  let injector: TestBed;
  let service: DeveloperService;
  let httpMock: HttpTestingController;
  let url="http://54.202.108.54/Home/Developers";

  beforeEach(() => { TestBed.configureTestingModule({
    imports :[HttpClientTestingModule],
    providers:[DeveloperService]
  });
  injector =getTestBed();
  service=injector.get(DeveloperService);
  httpMock=injector.get(HttpTestingController);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a get call to API',()=>{
    let devs;
    service.getDevelopers().subscribe(
      response=>devs=response
    );
    const req=httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
  });
  
});
