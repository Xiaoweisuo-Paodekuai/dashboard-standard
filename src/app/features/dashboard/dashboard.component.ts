import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {solidGaugeConfig} from '../../shared/common/solid-gauge.config';
import {barChartConfig} from '../../shared/common/bar-chart.config';
import {ChartRefreshService} from '../../core/services/chart-refresh.service';
import {SiteOeeComponent} from './site-oee/site-oee.component';

@Component({
  selector: 'CMI-dashboard',
  imports: [
    SiteOeeComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements  OnInit,OnDestroy {

  private  breakpointService=inject(BreakpointObserver);

  cards=this.breakpointService.observe(Breakpoints.Handset).pipe(map(result=>{
    if (result){
      return [
        { title: 'All Site OEE', cols: 1, rows: 1,options:solidGaugeConfig},
        { title: 'Output Trend', cols: 1, rows: 1},
        { title: 'Rework Trend', cols: 1, rows: 1 },
        { title: 'Rework Trend', cols: 1, rows: 1 },
        { title: 'Downtime Trend', cols: 1, rows: 1 }
      ];
    }

    return [
      { title: 'All Site OEE', cols: 1, rows: 1},
      { title: 'Output Trend', cols: 1, rows: 1 },
      { title: 'Rework Trend', cols: 1, rows: 1, },
      { title: 'Rework Trend', cols: 1, rows: 1 },
      { title: 'Downtime Trend', cols: 1, rows: 1 }
    ]
  }));


  private  intervalId:any;

  private  refreshService=inject(ChartRefreshService);

  ngOnInit(): void {
    this.refreshCharts();
    this.intervalId = setInterval(()=>{
      this.refreshCharts()
    }, 30000);
  }

  refreshCharts(){
    this.refreshService.triggerRefresh();
  }

  ngOnDestroy(): void {
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
