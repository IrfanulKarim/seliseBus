import { Component, OnInit, Inject, Injectable } from '@angular/core';


import { Bus } from '../shared/bus';
import { BusService } from '../services/bus.service';

import { BUSES } from '../shared/buses';

import { baseURL } from '../shared/baseurl';



@Component({
  selector: 'app-availablebus',
  templateUrl: './availablebus.component.html',
  styleUrls: ['./availablebus.component.scss']
})
export class AvailablebusComponent implements OnInit {

  buses: Bus[];
  dataSource: Bus[];

  errMess: string;


  name: string;
  departuretime: string;
  arrivaltime: string;
  seatsavailable: string;
  price: string;


  constructor( private busService: BusService,
    @Inject ('BaseURL') private BaseURL) { }

  ngOnInit() {

    this.busService.getBuses()
    .subscribe((buses)=>{this.buses=buses; this.dataSource = buses;},
    errmess => this.errMess = <any>errmess);

  }

  displayedColumns: string[] = ['name', 'departuretime', 'arrivaltime', 'seatsavailable', 'price','viewseats'];

}
