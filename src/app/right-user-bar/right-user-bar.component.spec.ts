import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightUserBarComponent } from './right-user-bar.component';

describe('RightUserBarComponent', () => {
  let component: RightUserBarComponent;
  let fixture: ComponentFixture<RightUserBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightUserBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightUserBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
