import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonsComponent } from './neons.component';

describe('NeonsComponent', () => {
  let component: NeonsComponent;
  let fixture: ComponentFixture<NeonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
