import {Component, Input} from '@angular/core';
import {HighchartsChartModule} from "highcharts-angular";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import * as Highcharts from 'highcharts';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';
import highcharts from 'highcharts';

@Component({
  selector: 'CMI-dashboard-item',
  imports: [
    HighchartsChartModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    NgIf
  ],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss'
})
export class DashboardItemComponent {

  @Input() title!: string;

  highcharts: typeof Highcharts=Highcharts;
  isHighcharts=typeof Highcharts==='object';
  @Input() chartOptions!:Highcharts.Options;


}
