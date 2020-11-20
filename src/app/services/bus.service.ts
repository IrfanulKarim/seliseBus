import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, observable, Observable } from 'rxjs';


import { Bus } from '../shared/bus';


import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient) { }

  getBuses(): Observable<Bus[]>{
    return this.http.get<Bus[]>(baseURL+ 'buses');

    // return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));

  }
}
