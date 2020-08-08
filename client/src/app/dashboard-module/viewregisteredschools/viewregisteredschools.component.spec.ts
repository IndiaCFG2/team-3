import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregisteredschoolsComponent } from './viewregisteredschools.component';

describe('ViewregisteredschoolsComponent', () => {
  let component: ViewregisteredschoolsComponent;
  let fixture: ComponentFixture<ViewregisteredschoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewregisteredschoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewregisteredschoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
