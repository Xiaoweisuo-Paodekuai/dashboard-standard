import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatIconButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {DashboardService} from '../shared/dashboard.service';
import {Subscription} from 'rxjs';
import {ChartRefreshService} from '../../../core/services/chart-refresh.service';
import {HighchartsChartComponent,  providePartialHighcharts} from 'highcharts-angular';
import type Highcharts from 'highcharts';



@Component({
  selector: 'CMI-site-oee',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatIcon,
    MatMenuTrigger,
    HighchartsChartComponent
  ],
  providers: [
    providePartialHighcharts({
      modules:()=>[
        import('highcharts/esm/highcharts-more'),
        import('highcharts/esm/modules/solid-gauge'),
      ]
    })
  ],
  templateUrl: './site-oee.component.html',
  styleUrl: './site-oee.component.scss'
})
export class SiteOeeComponent  implements OnInit ,OnDestroy {

  title = 'All Site OEE';


  chartOptions: Highcharts.Options= {
    chart: {
      type: 'solidgauge',
      height: "null",

    },

    title: {
      text:'- 0 % <br> 80%',
      align:"center",
      verticalAlign:"middle",
      y:100,
      style: {
        fontSize: "2rem",
        color:"green",
      }
    },
    subtitle:{
      text:'- 0 %',
      align:"center",
      verticalAlign:"middle",
      y:50,
      style: {
        fontSize: "1.2rem",
        color:"#aaa",
      }
    },

    pane: {
      center: ['50%', '85%'],
      startAngle: -90,
      endAngle: 90,
      size:'150%',
      background: [{ // Track for Performance
        outerRadius: '110%',
        innerRadius: '98%',
        backgroundColor: "#C0C0C0",
        borderWidth: 0,
        shape:'arc'
      }, { // Track for Quality
        outerRadius: '96%',
        innerRadius: '84%',
        backgroundColor: "#C0C0C0",
        borderWidth: 0,
        shape:'arc'
      }, { // Track for OA
        outerRadius: '82%',
        innerRadius: '68%',
        backgroundColor: "#C0C0C0",
        borderWidth: 0,
        shape:'arc'
      }]
    },

    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      stops:[
        [0.6, '#DF5353'], // red
        [0.7, '#DDDF0D'], // yellow
        [0.8, '#55BF3B'],
      ],
      tickPositions: []
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true
      }
    },

    series: [{
      name: 'Performance',
      data: [{
        color: "#C0C0C0",
        radius: '110%',
        innerRadius: '98%',
        y: 81
      }],
      type:'solidgauge'
    }, {
      name: 'Quality Rates',
      data: [{
        color: "#00e272",
        radius: '96%',
        innerRadius: '84%',
        y: 70
      }],
      type:'solidgauge'
    }, {
      name: 'Availability',
      data: [{
        color: "#00e272",
        radius: '82%',
        innerRadius: '68%',
        y: 50
      }],
      type:'solidgauge'
    }],
    credits: {
      enabled: false,
    }
  };

  private  subscriber!: Subscription;
  private  dashboardService=inject(DashboardService);
  private  refreshService=inject(ChartRefreshService)

  ngOnInit(): void {
  /*   this.formatChartsData();
    this.subscriber = this.refreshService.refresh$.subscribe(() => {
      this.count++
      this.formatChartsData();
      console.log(`chart has been refreshed ${this.count}`);
    }) */
  }

  formatChartsData() {

    this.dashboardService.getSiteOEE().subscribe(data => {
      const oee:string=data.result.oee.toString();
      let qualityRate=((data.result.totalQty-data.result.ngQty)/data.result.totalQty)*100;
      this.chartOptions.title={
        text:`${oee}%`,
        align:"center",
        verticalAlign:"middle",
        y:130,
        style:{
          fontSize: "2rem",
          color:this.valueMappingColor(data.result.oee)
        }
      }
      this.chartOptions.series=[
        {
          name: "Performance",
          data:[{
            color: this.valueMappingColor(data.result.performanceRate),
            radius: '110%',
            innerRadius: '98%',
            y: data.result.performanceRate
          }],
          type: "solidgauge",
        },{
          name: "Quality Rates",
          data:[{
            color: this.valueMappingColor(qualityRate),
            radius: '96%',
            innerRadius: '84%',
            y: qualityRate
          }],
          type: "solidgauge",
        },{
          name: "Availability",
          data:[{
            color: this.valueMappingColor(data.result.timeActivationRate),
            radius: '82%',
            innerRadius: '68%',
            y: data.result.timeActivationRate
          }],
          type: "solidgauge",
        }
      ]
    })
  }

  valueMappingColor(value:number):string {
    if(value>80){
      return '#55BF3B';
    }else if(value<=60){
      return '#DF5353';
    }

    return '#DDDF0D';
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }



  chartInstance(chart: Highcharts.Chart) {
    console.log('Chart instance received', chart);
  }


}
