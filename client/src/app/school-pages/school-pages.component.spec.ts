import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolPagesComponent } from './school-pages.component';

describe('SchoolPagesComponent', () => {
  let component: SchoolPagesComponent;
  let fixture: ComponentFixture<SchoolPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
