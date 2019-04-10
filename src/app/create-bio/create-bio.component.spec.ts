import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBioComponent } from './create-bio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeveloperService } from '../developer.service';
import { Router } from '@angular/router';

describe('CreateBioComponent', () => {
  let component: CreateBioComponent;
  let fixture: ComponentFixture<CreateBioComponent>;

  const developerServiceSpy = jasmine.createSpyObj('DeveloperService',['getDevelopers']);
  const routerSpy = jasmine.createSpyObj('Router',['navigate'])
    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBioComponent ],
      imports :[ReactiveFormsModule],
      providers:[{
      provide : DeveloperService , useValue: developerServiceSpy},
      {provide : Router , useValue: routerSpy}
      ]
    
  })
  .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
