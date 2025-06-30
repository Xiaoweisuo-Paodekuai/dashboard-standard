import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {errorInterceptor} from './core/interceptors/error.interceptor';
import {provideHighcharts} from 'highcharts-angular';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(),
      withInterceptors([errorInterceptor])
      ),
    provideHighcharts({
      instance:()=>import('highcharts/esm/highcharts').then(m=>m.default),
      modules:()=> {
        return [
          import('highcharts/esm/highcharts-more'),
          import('highcharts/esm/modules/accessibility'),
          import('highcharts/esm/themes/dark-unica')
        ];
      }
    })
  ]
};
