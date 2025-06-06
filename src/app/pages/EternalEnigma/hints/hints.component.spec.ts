import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintsComponent } from './hints.component';

describe('HintsComponent', () => {
  let component: HintsComponent;
  let fixture: ComponentFixture<HintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HintsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
