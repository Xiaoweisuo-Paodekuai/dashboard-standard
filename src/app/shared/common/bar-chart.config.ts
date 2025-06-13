import * as Highcharts from "highcharts";
import 'highcharts/highcharts-more'

export  const  barChartConfig:Highcharts.Options = {
  chart: {
    type: 'column'
  },
  xAxis: {
    type: 'category',
    labels: {
      autoRotation: [-0, -0],
      style: {
        fontSize: '10px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Output (pieces)'
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: 'Population in 2021: <b>{point.y:.1f} millions</b>'
  },
  series: [{
    name: 'Population',
    colors: [
       '#55BF3B'
    ],
    type: 'column',
    colorByPoint: true,
    groupPadding: 0,
    data: [
      ['Tokyo', 37.33],
      ['Delhi', 31.18],
      ['Shanghai', 27.79],
      ['Sao Paulo', 22.23],
      ['Mexico City', 21.91],
      ['Dhaka', 21.74],
      ['Cairo', 21.32],
      ['Beijing', 20.89],
      ['Mumbai', 20.67],
      ['Osaka', 19.11],

    ],
    dataLabels: {
      enabled: false,
      rotation: -0,
      inside: true,
      verticalAlign: 'top',
      format: '{point.y:.1f}', // one decimal
      y: -24, // 10 pixels down from the top
      style: {
        fontSize: '10px',
        fontFamily: 'Verdana, sans-serif',
        color: '#eee',
      }
    }
  }],
  credits: {
    enabled: false
  }


}
