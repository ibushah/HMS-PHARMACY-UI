import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintProductsComponent } from './print-products.component';

describe('PrintProductsComponent', () => {
  let component: PrintProductsComponent;
  let fixture: ComponentFixture<PrintProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
