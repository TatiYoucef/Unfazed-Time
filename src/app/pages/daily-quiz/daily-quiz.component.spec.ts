import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyQuizComponent } from './daily-quiz.component';

describe('DailyQuizComponent', () => {
  let component: DailyQuizComponent;
  let fixture: ComponentFixture<DailyQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
