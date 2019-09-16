import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugFormationComponent } from './drug-formation.component';

describe('DrugFormationComponent', () => {
  let component: DrugFormationComponent;
  let fixture: ComponentFixture<DrugFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
