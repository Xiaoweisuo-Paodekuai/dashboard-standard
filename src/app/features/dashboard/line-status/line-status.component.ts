import { Component } from '@angular/core';
import {
  DefaultFlexAlignDirective, DefaultFlexDirective,
  DefaultLayoutAlignDirective,
  DefaultLayoutDirective,
  DefaultLayoutGapDirective
} from "@ngbracket/ngx-layout";
import {HighchartsChartComponent} from "highcharts-angular";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatFabAnchor, MatFabButton, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem} from "@angular/material/menu";
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'CMI-line-status',
  imports: [
    DefaultFlexAlignDirective,
    DefaultLayoutDirective,
    DefaultLayoutGapDirective,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatFabButton,
    MatCardSubtitle,
    DefaultFlexDirective,
    MatFabAnchor
  ],
  templateUrl: './line-status.component.html',
  styleUrl: './line-status.component.scss'
})
export class LineStatusComponent {

  title:string='Line Status';


}
