import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { District } from '../shared/district';
import { Bus } from '../shared/bus';
import { Search } from '../shared/search';
import { BusService } from '../services/bus.service';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';


@Component({
  selector: 'app-searchbus',
  templateUrl: './searchbus.component.html',
  styleUrls: ['./searchbus.component.scss']
})
export class SearchbusComponent implements OnInit {

  searchbusForm: FormGroup;
  search: Search;
  district= District;

  @ViewChild('sform') searchFormDirective;



  constructor(private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.searchbusForm=this.fb.group({
      from: '',
      to: '',
      journeydate: '',
      returndate: ''
    });
  }

}
