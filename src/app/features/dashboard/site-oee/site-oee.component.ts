import {Component, inject, OnInit} from '@angular/core';
import {HighchartsChartModule} from 'highcharts-angular';
import {NgIf} from '@angular/common';
import * as Highcharts from 'highcharts';
import  'highcharts/highcharts-more'
import  'highcharts/modules/solid-gauge'
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatIconButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {DashboardService} from '../../../core/services/dashboard.service';


@Component({
  selector: 'CMI-site-oee',
  imports: [
    HighchartsChartModule,
    NgIf,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatIcon,
    MatMenuTrigger
  ],
  templateUrl: './site-oee.component.html',
  styleUrl: './site-oee.component.scss'
})
export class SiteOeeComponent  implements OnInit {

  title = 'All Site OEE';

  highcharts:typeof Highcharts=Highcharts;
  isHighcharts =typeof Highcharts==="object";
  chartOptions: {}= {
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
    tooltip: 'null',

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
      custom: {
        icon: 'filter',
        iconColor: '#C0C0C0'
      }
    }, {
      name: 'Quality Rates',
      data: [{
        color: "#00e272",
        radius: '96%',
        innerRadius: '84%',
        y: 70
      }],
      custom: {
        icon: '<mat-icon matListItemIcon>workspace_premium</mat-icon>',
        iconColor: '#ffffff'
      }
    }, {
      name: 'Availability',
      data: [{
        color: "#00e272",
        radius: '82%',
        innerRadius: '68%',
        y: 50
      }],
      custom: {
        icon: 'commenting-o',
        iconColor: '#303030'
      }
    }],
    credits: {
      enabled: false,
    }
  };

  private  dashboardService=inject(DashboardService);

  ngOnInit(): void {

  }

}
