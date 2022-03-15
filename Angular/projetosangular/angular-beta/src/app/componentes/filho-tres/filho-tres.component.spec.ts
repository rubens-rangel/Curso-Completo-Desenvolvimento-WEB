import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoTresComponent } from './filho-tres.component';

describe('FilhoTresComponent', () => {
  let component: FilhoTresComponent;
  let fixture: ComponentFixture<FilhoTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilhoTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilhoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
