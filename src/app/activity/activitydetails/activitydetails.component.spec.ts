import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitydetailsComponent } from './activitydetails.component';

describe('ActivitydetailsComponent', () => {
  let component: ActivitydetailsComponent;
  let fixture: ComponentFixture<ActivitydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
