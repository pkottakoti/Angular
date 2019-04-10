import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioComponent } from './bio.component';
import { DeveloperService } from '../developer.service';
import { Developer } from '../developer';
import { of } from 'rxjs/internal/observable/of';
import { AppModule } from '../app.module';

describe('BioComponent', () => {
  let component: BioComponent;
  let fixture: ComponentFixture<BioComponent>;
const developerServiceSpy = jasmine.createSpyObj('DeveloperService',['getDevelopers'])

let fakeDevelopers =[

  new Developer(1,"test","v","java",2009),
  new Developer(1,"test1","v","java",2008)
]

const getDevelopersSpy = developerServiceSpy.getDevelopers.and.returnValue(of(fakeDevelopers))
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[AppModule],
      providers:[
       { provide : DeveloperService , useValue : developerServiceSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
