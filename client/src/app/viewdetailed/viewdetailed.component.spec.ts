import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailedComponent } from './viewdetailed.component';

describe('ViewdetailedComponent', () => {
  let component: ViewdetailedComponent;
  let fixture: ComponentFixture<ViewdetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
