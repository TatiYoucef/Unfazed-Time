import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialsEndComponent } from './trials-end.component';

describe('TrialsEndComponent', () => {
  let component: TrialsEndComponent;
  let fixture: ComponentFixture<TrialsEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialsEndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrialsEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
