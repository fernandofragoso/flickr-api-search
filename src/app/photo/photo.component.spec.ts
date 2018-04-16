import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { PhotoComponent } from './photo.component';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;
  let photo = {
    "id":"39628209840",
    "owner":"41111966@N04",
    "dateupload":"1523651844",
    "datetaken":"2018-04-13 17:37:24",
    "ownername":"eROV65",
    "views":"883",
    "url_q":"https:\/\/farm1.staticflickr.com\/891\/39628209840_8f51fb86db_q.jpg",
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    
    component.photo = photo;
    component.complete = true;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('By default should show complete photo', () => {
    expect(fixture.nativeElement.querySelector('#simple-card')).toBeNull();
    expect(fixture.nativeElement.querySelector('#complete-card')).toBeTruthy();
  });

  it('If complete is set to false the details should be hidden', () => {
    component.complete = false;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#complete-card')).toBeNull();
    expect(fixture.nativeElement.querySelector('#simple-card')).toBeTruthy();
  });

});
