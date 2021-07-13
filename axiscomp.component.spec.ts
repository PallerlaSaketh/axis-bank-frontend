import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiscompComponent } from './axiscomp.component';

describe('AxiscompComponent', () => {
  let component: AxiscompComponent;
  let fixture: ComponentFixture<AxiscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxiscompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AxiscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
