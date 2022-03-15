import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiUmComponent } from './pai-um.component';

describe('PaiUmComponent', () => {
  let component: PaiUmComponent;
  let fixture: ComponentFixture<PaiUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
