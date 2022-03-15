import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiDoisComponent } from './pai-dois.component';

describe('PaiDoisComponent', () => {
  let component: PaiDoisComponent;
  let fixture: ComponentFixture<PaiDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiDoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
