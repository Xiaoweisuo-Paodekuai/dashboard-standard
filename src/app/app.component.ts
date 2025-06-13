import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {HeaderComponent} from './shared/components/header/header.component';

@Component({
  selector: 'CMI-root',
  imports: [RouterOutlet,  HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard-standard';
}
