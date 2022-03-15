import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBindingComponent } from './e-binding.component';

describe('EBindingComponent', () => {
  let component: EBindingComponent;
  let fixture: ComponentFixture<EBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
