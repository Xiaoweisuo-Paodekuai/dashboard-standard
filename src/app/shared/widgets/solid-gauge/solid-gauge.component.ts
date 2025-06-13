import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
import {HighchartsChartModule} from "highcharts-angular";
import 'highcharts/highcharts-more'
import 'highcharts/modules/solid-gauge'
import {NgIf} from '@angular/common';


@Component({
  selector: 'CMI-solid-gauge',
  imports: [
    HighchartsChartModule,
    NgIf
  ],
  templateUrl: './solid-gauge.component.html',
  styleUrl: './solid-gauge.component.scss'
})
export class SolidGaugeComponent {

  highcharts:typeof Highcharts=Highcharts;
  isHighcharts =typeof Highcharts==="object";
  chartOptions:Highcharts.Options = {
    chart: {
      type: 'solidgauge',
      height: "null",
    },

    title: {
      text:'- 80%',
      align:"center",
      verticalAlign:"middle",
      y:130,
      style: {
        fontSize: "3rem",
        color:"#55BF3B",
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
        innerRadius: '70%',
        backgroundColor: "#C0C0C0",
        borderWidth: 0,
        shape:'arc'
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
        rounded: true
      }
    },

    accessibility: {
      enabled: false
    },

    credits:{
      enabled: false
    },

    series:[
      {
        name: 'Performance Rate',
        data: [{
          color:'#DF5353',
          radius:'110%',
          innerRadius: '98%',
          y:98
        }],
        type: "solidgauge",

      }, {
        name: 'Quality Rate',
        data: [{
          color:'#DDDF0D',
          radius:'96%',
          innerRadius: '84%',
          y:80
        }],
        type: "solidgauge",
      },
      {
        name: 'OA Rate',
        data: [{
          color:'#55BF3B',
          radius:'82%',
          innerRadius: '70%',
          y:70
        }],
        type: "solidgauge"
      }
    ]
  }
}

