import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflexeComponent } from './reflexe.component';

describe('ReflexeComponent', () => {
  let component: ReflexeComponent;
  let fixture: ComponentFixture<ReflexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReflexeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReflexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
