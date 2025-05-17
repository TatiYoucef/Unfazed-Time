import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunSecretComponent } from './sun-secret.component';

describe('SunSecretComponent', () => {
  let component: SunSecretComponent;
  let fixture: ComponentFixture<SunSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunSecretComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SunSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
