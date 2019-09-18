import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugFormationListComponent } from './drug-formation-list.component';

describe('DrugFormationListComponent', () => {
  let component: DrugFormationListComponent;
  let fixture: ComponentFixture<DrugFormationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugFormationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugFormationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
