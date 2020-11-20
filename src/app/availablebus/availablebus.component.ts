import { Component, OnInit, Inject, Injectable } from '@angular/core';


import { BusService } from '../services/bus.service';
import { Bus } from '../shared/bus';
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
  seats: string;
  price: string;


  constructor( private busService: BusService,
    @Inject ('BaseURL') private BaseURL) { }

  ngOnInit() {

    this.busService.getBuses()
    .subscribe((buses)=>{this.buses=buses; this.dataSource = buses;},
    errmess => this.errMess = <any>errmess);

  }

  displayedColumns: string[] = ['name', 'departuretime', 'arrivaltime', 'seats', 'price'];

}
