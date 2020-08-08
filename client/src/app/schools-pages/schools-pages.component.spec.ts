import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsPagesComponent } from './schools-pages.component';

describe('SchoolsPagesComponent', () => {
  let component: SchoolsPagesComponent;
  let fixture: ComponentFixture<SchoolsPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
