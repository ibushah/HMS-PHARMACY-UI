import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMainscreenComponent } from './sales-mainscreen.component';

describe('SalesMainscreenComponent', () => {
  let component: SalesMainscreenComponent;
  let fixture: ComponentFixture<SalesMainscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesMainscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesMainscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
