import { Component, OnInit } from '@angular/core';

import { BusService } from '../services/bus.service';
import { Bus } from '../shared/bus';
import { BUSES } from '../shared/buses';


@Component({
  selector: 'app-availablebus',
  templateUrl: './availablebus.component.html',
  styleUrls: ['./availablebus.component.scss']
})
export class AvailablebusComponent implements OnInit {

  bus: Bus;
  dataSource: Bus;

  name: string;
  departuretime: string;
  arrivaltime: string;
  seatsavailable: string;
  price: string;


  constructor( private busService: BusService) { }

  ngOnInit() {
    
  }

  displayedColumns: string[] = ['name', 'departuretime', 'arrivaltime', 'seatsavailable', 'price'];

}
