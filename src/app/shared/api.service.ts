import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /*This is the FCBTCostOfFunds API */
  postCostofFunds(data: any) {
    return this.http.post<any>("http://localhost:4200/post", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}
