import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDailyComponent } from './loading-daily.component';

describe('LoadingDailyComponent', () => {
  let component: LoadingDailyComponent;
  let fixture: ComponentFixture<LoadingDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingDailyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
