import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Bus } from '../shared/bus';
import { BusService } from '../services/bus.service';
import { Params, ActivatedRoute } from '@angular/router';
import { BUSES } from '../shared/buses';
import { baseURL } from '../shared/baseurl';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-viewseats',
  templateUrl: './viewseats.component.html',
  styleUrls: ['./viewseats.component.scss']
})
export class ViewseatsComponent implements OnInit {

  bus: Bus;
  buses: Bus[];
  dataSource: Bus;
  errMess: string;

  name: string;
  departuretime: string;
  arrivaltime: string;
  seatsavailable: string;
  price: string;

  constructor(private busService: BusService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params)=> this.busService.getBus(params['id'])))
    .subscribe((bus)=>{this.bus=bus; this.dataSource=bus;},
      errmess => this.errMess = <any>errmess);

  }

  displayedColumns: string[] = ['name', 'departuretime', 'arrivaltime', 'seatsavailable', 'price','viewseats'];


}
