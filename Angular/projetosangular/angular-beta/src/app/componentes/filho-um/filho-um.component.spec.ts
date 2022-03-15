import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoUmComponent } from './filho-um.component';

describe('FilhoUmComponent', () => {
  let component: FilhoUmComponent;
  let fixture: ComponentFixture<FilhoUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilhoUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilhoUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
