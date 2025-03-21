import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoyingbuttonComponent } from './annoyingbutton.component';

describe('AnnoyingbuttonComponent', () => {
  let component: AnnoyingbuttonComponent;
  let fixture: ComponentFixture<AnnoyingbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnoyingbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnoyingbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
