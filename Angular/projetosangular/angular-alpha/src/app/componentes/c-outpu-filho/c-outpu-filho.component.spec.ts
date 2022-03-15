import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COutpuFilhoComponent } from './c-outpu-filho.component';

describe('COutpuFilhoComponent', () => {
  let component: COutpuFilhoComponent;
  let fixture: ComponentFixture<COutpuFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COutpuFilhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COutpuFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
