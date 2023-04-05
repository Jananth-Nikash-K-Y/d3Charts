import { ComponentFixture, TestBed } from '@angular/core/testing';

import { donutChartComponent } from './donut-chart.component';

describe('DonutChartComponent', () => {
  let component: donutChartComponent;
  let fixture: ComponentFixture<donutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ donutChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(donutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
