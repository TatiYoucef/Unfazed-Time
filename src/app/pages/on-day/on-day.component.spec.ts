import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDayComponent } from './on-day.component';

describe('OnDayComponent', () => {
  let component: OnDayComponent;
  let fixture: ComponentFixture<OnDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
