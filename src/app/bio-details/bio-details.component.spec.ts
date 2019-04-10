import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioDetailsComponent } from './bio-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { DeveloperService } from '../developer.service';
import { Developer } from '../developer';
describe('BioDetailsComponent', () => {
  let component: BioDetailsComponent;
  let fixture: ComponentFixture<BioDetailsComponent>;

   let fakeDeveloper = new Developer(1,"h","test","java",1999);
   const developerServiceSpy = jasmine.createSpyObj('DeveloperService',['getDeveloperById'])
   const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute',['paramMap'])
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioDetailsComponent ],
      providers:[{
         provide:DeveloperService , useValue: developerServiceSpy},
        { provide : ActivatedRoute , useValue :{
        snapshot:{
          paramMap:{get : () => fakeDeveloper.id}
        }
      }}]
        
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
