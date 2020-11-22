import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Bus } from '../shared/bus';
import { BusService } from '../services/bus.service';
import { Params, ActivatedRoute } from '@angular/router';
import { BUSES } from '../shared/buses';
import { baseURL } from '../shared/baseurl';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Viewseat } from '../shared/viewseat';


@Component({
  selector: 'app-seatdetails',
  templateUrl: './seatdetails.component.html',
  styleUrls: ['./seatdetails.component.scss']
})
export class SeatdetailsComponent implements OnInit {

  bus: Bus;
  buses: Bus[];
  viewseat: Viewseat;
  dataSource: Bus;
  errMess: string;

  constructor(private busService: BusService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params)=> this.busService.getSeatdetails(params['id'])))
    .subscribe((bus)=>{this.bus=bus; this.dataSource=bus;},
      errmess => this.errMess = <any>errmess);
  }

}
