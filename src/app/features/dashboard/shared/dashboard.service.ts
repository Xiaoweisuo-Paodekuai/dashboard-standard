import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import {IResult} from './result.model';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl: string= environment.baseUrl;
  private  http: HttpClient=inject(HttpClient);

  getSiteOEE(){
   // return this.http.get<IResult<IOEEModel>>(this.baseUrl+'/mdo/dashboard/oee');

    return of({
      content: 'Data acquisition succeeded!',
      page: "",
      result: {
        breakTime: 2400,
        completeQty:61,
        ct:162,
        date:"",
        downTime:0,
        inProgressQty:12,
        lineName:"",
        ngQty:4,
        oee:44.58,
        performanceRate:55.55,
        planQty:130,
        runningTime:17789,
        scrapQty:0,
        shiftName:"",
        timeActivationRate:100.00,
        totalQty:76,
        totalTheoreticalTime:17789,
        yieldRate:80.26
      },
      returnCode:200
    });
  }

  getSiteActual(){
    return this.http.get<IResult<Map<string,number>>>(this.baseUrl+'/mdo/dashboard/product');
  }

  getSiteRework(){
    return this.http.get<IResult<Map<string,number>>>(this.baseUrl+'/mdo/dashboard/ng');
  }

  getSiteDowntime(){
    return this.http.get<IResult<Map<string,number>>>(this.baseUrl+'/mdo/dashboard/downtime');
  }
}
