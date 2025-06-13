import * as Highcharts from "highcharts";
import 'highcharts/highcharts-more'
import 'highcharts/modules/solid-gauge'


export const solidGaugeConfig:Highcharts.Options = {
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

  ]
}
