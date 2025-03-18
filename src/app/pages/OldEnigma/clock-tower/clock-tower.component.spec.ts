import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockTowerComponent } from './clock-tower.component';

describe('ClockTowerComponent', () => {
  let component: ClockTowerComponent;
  let fixture: ComponentFixture<ClockTowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockTowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClockTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
