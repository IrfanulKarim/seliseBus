import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, observable, Observable } from 'rxjs';


import { Bus } from '../shared/bus';
import { BUSES } from '../shared/buses';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient) { }

  getBuses(): Observable<Bus>{

  }
}
