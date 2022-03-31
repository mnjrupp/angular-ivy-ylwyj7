import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /*This is the FCBTCostOfFunds API */
  postCostofFunds(data: any): Observable<any> {
    return this.http.post<any>("http://lstsqldev01.nterprise.net:8082/api/FCBTCostOfFunds", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}
