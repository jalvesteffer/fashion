import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pie2ChartComponent } from './pie2-chart.component';

describe('Pie2ChartComponent', () => {
  let component: Pie2ChartComponent;
  let fixture: ComponentFixture<Pie2ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pie2ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pie2ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
