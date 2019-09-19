import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnFormComponent } from './grn-form.component';

describe('GrnFormComponent', () => {
  let component: GrnFormComponent;
  let fixture: ComponentFixture<GrnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
