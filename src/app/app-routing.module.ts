import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { donutChartComponent } from './donut-chart/donut-chart.component';

const routes: Routes = [
  {
    path : 'donutChart',
    component : donutChartComponent,
    data : {
      title : 'Donut-Chart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
