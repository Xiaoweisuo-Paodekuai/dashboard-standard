import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import {IResult} from '../../shared/models/result.model';
import {IOEEModel} from '../../shared/models/oee.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl: string= environment.baseUrl;
  private  http: HttpClient=inject(HttpClient);

  getSiteOEE(){
    return this.http.get<IResult<IOEEModel>>(this.baseUrl+'/mdo/dashboard/oee');
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
