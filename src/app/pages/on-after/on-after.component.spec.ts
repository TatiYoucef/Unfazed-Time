import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnAfterComponent } from './on-after.component';

describe('OnAfterComponent', () => {
  let component: OnAfterComponent;
  let fixture: ComponentFixture<OnAfterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnAfterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
