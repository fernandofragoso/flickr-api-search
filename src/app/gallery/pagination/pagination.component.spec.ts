import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let firstButton;
  let lastButton;
  let nextButton;
  let previousButton;
  let pageNumber;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;

    firstButton = fixture.nativeElement.querySelector('#first-button');
    lastButton = fixture.nativeElement.querySelector('#last-button');
    nextButton = fixture.nativeElement.querySelector('#next-button');
    previousButton = fixture.nativeElement.querySelector('#previous-button');
    pageNumber = fixture.nativeElement.querySelector('#page-number'); 

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Page 1 should disable first and previous', () => {
    component.page = 1;
    component.totalPages = 3;
    fixture.detectChanges();

    expect(pageNumber.innerText).toBe("1");
    expect(firstButton.disabled).toBeTruthy();
    expect(previousButton.disabled).toBeTruthy();
  });

  it('Last page should disable next and last', () => {
    component.page = 3;
    component.totalPages = 3;
    fixture.detectChanges();

    expect(pageNumber.innerText).toBe("3");
    expect(nextButton.disabled).toBeTruthy();
    expect(lastButton.disabled).toBeTruthy();
  });

  it('Page between the first and last should enable all buttons', () => {
    component.page = 2;
    component.totalPages = 3;
    fixture.detectChanges();

    expect(pageNumber.innerText).toBe("2");
    expect(firstButton.disabled).toBeFalsy();
    expect(previousButton.disabled).toBeFalsy();
    expect(nextButton.disabled).toBeFalsy();
    expect(lastButton.disabled).toBeFalsy();
  });
});
