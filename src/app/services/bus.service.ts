import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, observable, Observable } from 'rxjs';

import { Bus } from '../shared/bus';
import { Viewseat } from '../shared/viewseat';
import { Search } from '../shared/search';
import { District } from '../shared/district';
import { BUSES } from '../shared/buses';

import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient) { }

  getBuses(): Observable<Bus[]>{
    // return this.http.get<Bus[]>(baseURL+ 'buses?tripavailability=true').pipe(map(buses=>buses));
    return of(BUSES.filter((buses) => buses.tripavailability));
  }

  getBus(id: string): Observable<Bus>{
    return of (BUSES.filter((buses)=>(buses.id===id))[0]);

  }

  getSeatdetails(id: string): Observable<Bus>{
    return of (BUSES.filter((buses)=>(buses.id===id))[0]);
  }
}
