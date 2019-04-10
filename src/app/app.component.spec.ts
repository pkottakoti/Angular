import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { inject } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
import{Location} from '@angular/common';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path:'',component:HomeComponent}
        ])
      ],
      
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'HelloWorld'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('HelloWorld');
  // });

  it('hould render links to Home,Bio and create New Bio', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const links = fixture.debugElement.nativeElement.querySelectorAll('a');
  
    expect(links[1].textContent).toEqual('Home');
    expect(links[2].textContent).toEqual('Bio');
    expect(links[3].textContent).toEqual('DisplayImage');
  });

  it('Home link should navigate to Home compononent',
  async(inject([Router,Location],(router:Router,location:Location)=>{
    const fixture=TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    //act
    const links=fixture.debugElement.nativeElement.querySelectorAll('a');
    links[1].click();
    //assert
    fixture.whenStable().then(()=>{
      expect(location.path()).toEqual('/');
    })

  })));
 
});
