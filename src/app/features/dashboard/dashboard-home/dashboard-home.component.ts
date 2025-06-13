import {Component, inject, OnInit} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {DashboardItemComponent} from '../dashboard-item/dashboard-item.component';
import {solidGaugeConfig} from '../../../shared/common/solid-gauge.config';
import {barChartConfig} from '../../../shared/common/bar-chart.config';
import {DashboardService} from '../../../core/services/dashboard.service';


// @ts-ignore
@Component({
  selector: 'CMI-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss',
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    DashboardItemComponent,
  ]
})
export class DashboardHomeComponent implements  OnInit {

  private breakpointObserver = inject(BreakpointObserver);
  private  dashboardService: DashboardService=inject(DashboardService);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'All Site OEE', cols: 1, rows: 1,options:solidGaugeConfig },
          { title: 'Output Trend', cols: 1, rows: 1,options:barChartConfig },
          { title: 'Rework Trend', cols: 1, rows: 1,options:solidGaugeConfig },
          { title: 'Rework Trend', cols: 1, rows: 1,options:solidGaugeConfig },
          { title: 'Downtime Trend', cols: 1, rows: 1,options:solidGaugeConfig }
        ];
      }

      return [
        { title: 'All Site OEE', cols: 1, rows: 1,options:solidGaugeConfig },
        { title: 'Output Trend', cols: 1, rows: 1,options:barChartConfig },
        { title: 'Rework Trend', cols: 1, rows: 2,options:solidGaugeConfig },
        { title: 'Rework Trend', cols: 1, rows: 1,options:solidGaugeConfig},
        { title: 'Downtime Trend', cols: 1, rows: 1,options:solidGaugeConfig }
      ];
    })
  );

  ngOnInit(): void {

  }


   getAllSiteOEEData(){

   }



}
