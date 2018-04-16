import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { SearchFormComponent } from './search-form.component';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let searchButton;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;

    searchButton = fixture.nativeElement.querySelector('#search-button');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Search button should be disabled if tag is empty', () => {
    component.tagValue = "";
    fixture.detectChanges();

    expect(searchButton.disabled).toBeTruthy();
  });

  it('Search button should be enabled if the tag is not empty', () => {
    component.tagValue = "Test";
    fixture.detectChanges();
    
    expect(searchButton.disabled).toBeFalsy();
  });

  it('After search the text fields should be cleaned', () => {
    component.tagValue = "Test1";
    component.userValue = "Test2";
    component.search(component.tagValue, component.userValue);
    fixture.detectChanges();
    
    expect(component.tagValue).toBe("");
    expect(component.userValue).toBe("");
    expect(searchButton.disabled).toBeTruthy();
  });

  it('Cancel button should clear the text fields', () => {
    component.tagValue = "Test1";
    component.userValue = "Test2";
    component.cancel();
    fixture.detectChanges();
    
    expect(component.tagValue).toBe("");
    expect(component.userValue).toBe("");
    expect(searchButton.disabled).toBeTruthy();
  });
});
