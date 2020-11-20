import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { District } from '../shared/district';
import { Bus } from '../shared/bus';
import {  } from '../services/bus.service';
import { baseURL } from '../shared/baseurl';


@Component({
  selector: 'app-searchbus',
  templateUrl: './searchbus.component.html',
  styleUrls: ['./searchbus.component.scss']
})
export class SearchbusComponent implements OnInit {

  searchbusForm: FormGroup;
  district= District;



  constructor(private fb: FormBuilder,
    @Inject('baseURL') private baseURL) { 
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
