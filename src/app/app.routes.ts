import { Routes } from '@angular/router';
import {DashboardHomeComponent} from './features/dashboard/dashboard-home/dashboard-home.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component:DashboardHomeComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];
