import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRegistrationListComponent } from './product-registration-list.component';

describe('ProductRegistrationListComponent', () => {
  let component: ProductRegistrationListComponent;
  let fixture: ComponentFixture<ProductRegistrationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRegistrationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
