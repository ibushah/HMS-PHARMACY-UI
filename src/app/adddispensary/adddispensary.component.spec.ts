import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddispensaryComponent } from './adddispensary.component';

describe('AdddispensaryComponent', () => {
  let component: AdddispensaryComponent;
  let fixture: ComponentFixture<AdddispensaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddispensaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddispensaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
