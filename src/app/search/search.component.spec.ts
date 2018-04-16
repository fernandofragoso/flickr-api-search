import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { FlickrService } from '../flickr.service';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchComponent } from './search.component';
import { PhotoComponent } from '../photo/photo.component';

import { of } from 'rxjs/observable/of'

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let getPhotoSpy;
  let photos = [{
    "id":"39628209840",
    "owner":"41111966@N04",
    "dateupload":"1523651844",
    "datetaken":"2018-04-13 17:37:24",
    "ownername":"eROV65",
    "views":"883",
    "url_q":"https:\/\/farm1.staticflickr.com\/891\/39628209840_8f51fb86db_q.jpg",
  }];

  beforeEach(async(() => {
    const flickrService = jasmine.createSpyObj('FlickrService', ['getPhoto']);
    getPhotoSpy = flickrService.getPhoto.and.returnValue(of(photos) );

    TestBed.configureTestingModule({
      declarations: [ SearchComponent, SearchFormComponent, PhotoComponent ],
      imports: [ FormsModule, RouterTestingModule ], 
      providers : [{provide: FlickrService, useValue : flickrService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;

    component.photos = photos;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hasPhotos should be true', () => {
    expect(component.hasPhotos()).toBeTruthy();
  });

  it('hasPhotos should be false when photos array is empty', () => {
    component.photos = [];
    fixture.detectChanges();

    expect(component.hasPhotos()).toBeFalsy();
  });
});
