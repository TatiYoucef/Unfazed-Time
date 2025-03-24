import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinItemsComponent } from './spin-items.component';

describe('SpinItemsComponent', () => {
  let component: SpinItemsComponent;
  let fixture: ComponentFixture<SpinItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpinItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
