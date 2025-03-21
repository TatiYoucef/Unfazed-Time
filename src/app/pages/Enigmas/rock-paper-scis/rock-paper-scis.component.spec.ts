import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPaperScisComponent } from './rock-paper-scis.component';

describe('RockPaperScisComponent', () => {
  let component: RockPaperScisComponent;
  let fixture: ComponentFixture<RockPaperScisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RockPaperScisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RockPaperScisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
