import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatIconButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {DashboardService} from '../shared/dashboard.service';
import {Subscription} from 'rxjs';
import {ChartRefreshService} from '../../../core/services/chart-refresh.service';
import {HighchartsChartComponent,  providePartialHighcharts} from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import {MatProgressSpinner, ProgressSpinnerMode} from '@angular/material/progress-spinner';



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
    HighchartsChartComponent,
    FlexLayoutModule,
    MatCardSubtitle,

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
  mode:ProgressSpinnerMode = 'determinate';


  trackColors=[
    'rgba(44,175,254,0.3)',
    'rgba(84,79,197,0.3)',
    'rgba(0,226,114,0.3)',
    'rgba(0,226,114,1)'
  ]

  chartOptions: Highcharts.Options= {
    chart: {
      type: 'solidgauge',
      height: "null",
      backgroundColor: 'transparent',
    },

    title: {
      text:'- 80%',
      align:"center",
      verticalAlign:"middle",
      y:20,
      style: {
        fontSize: "2.5rem",
        color:this.trackColors[3],
      }
    },
    subtitle:{
      text:'- OEE',
      align:"center",
      verticalAlign:"middle",
      y:-30,
      style: {
        fontSize: "1.2rem",
        color:"#aaa",
      }
    },
    legend:{

      backgroundColor: 'transparent',
       itemStyle:{
         fontSize: "1rem",
         fontFamily: "Roboto",
       }
    },


    pane: {
      center: ['50%', '50%'],
      startAngle: 0,
      endAngle: 360,

      background: [{ // Track for Performance
        outerRadius: '112%',
        innerRadius: '88%',
        backgroundColor:this.trackColors[0],
        borderWidth: 0,

      }, { // Track for Quality
        outerRadius: '87%',
        innerRadius: '63%',
        backgroundColor:this.trackColors[1],
        borderWidth: 0,

      }, { // Track for OA
        outerRadius: '62%',
        innerRadius: '38%',
        backgroundColor:this.trackColors[2],
        borderWidth: 0,

      }]
    },

    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,

      tickPositions: []
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true,
        showInLegend: true,
      }

    },

    series: [{
      name: 'Performance',
      data: [{
        color:Highcharts.getOptions().colors![0],
        radius: '112%',
        innerRadius: '88%',
        y: 81
      }],
      type:'solidgauge',
      showInLegend: true,
      legendSymbolColor:Highcharts.getOptions().colors![0],
    }, {
      name: 'Quality Rates',
      data: [{
        color:Highcharts.getOptions().colors![1],
        radius: '87%',
        innerRadius: '63%',
        y: 70
      }],
      type:'solidgauge',
      showInLegend: true,
      legendSymbolColor:Highcharts.getOptions().colors![1],
    }, {
      name: 'Availability',
      data: [{
        color:Highcharts.getOptions().colors![2],
        radius: '62%',
        innerRadius: '38%',
        y: 50
      }],
      type:'solidgauge',
      showInLegend: true,
      legendSymbolColor:Highcharts.getOptions().colors![2],
    }],
    credits: {
      enabled: false,
    },

  };

  donutOption:Highcharts.Options={
    chart: {
      type: 'solidgauge',
      height: "null",
      backgroundColor: 'transparent',
    },

    title: {
      text:'80%',
      align:"center",
      verticalAlign:"middle",
      y:0,
      style: {
        fontSize: "1.5rem",
        color:this.trackColors[3],
      }
    },
    legend:{
      backgroundColor: 'transparent',
      itemStyle:{
        fontSize: "0.8rem",
        fontFamily: "Roboto",
      }
    },


    pane: {
      center: ['50%', '50%'],
      startAngle: 0,
      endAngle: 360,

      background: [{ // Track for Performance
        outerRadius: '112%',
        innerRadius: '68%',
        backgroundColor:this.trackColors[0],
        borderWidth: 0,

      }]
    },

    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,

      tickPositions: []
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true,
        showInLegend: true,
      }

    },

    series: [{
      name: 'Performance',
      data: [{
        color:Highcharts.getOptions().colors![0],
        radius: '112%',
        innerRadius: '68%',
        y: 81
      }],
      type:'solidgauge',
      showInLegend: true,
      legendSymbolColor:Highcharts.getOptions().colors![0],
    } ],
    credits: {
      enabled: false,
    },

  }

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
    console.log('Chart instance received');
  }


}
