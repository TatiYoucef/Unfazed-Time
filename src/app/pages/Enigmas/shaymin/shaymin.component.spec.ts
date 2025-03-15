import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShayminComponent } from './shaymin.component';

describe('ShayminComponent', () => {
  let component: ShayminComponent;
  let fixture: ComponentFixture<ShayminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShayminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShayminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
