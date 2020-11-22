import { Routes } from '@angular/router';

import { SearchbusComponent } from '../searchbus/searchbus.component';
import { AvailablebusComponent } from '../availablebus/availablebus.component';
import { ViewseatsComponent } from '../viewseats/viewseats.component';
import { SeatdetailsComponent } from '../seatdetails/seatdetails.component';



export const routes: Routes = [
//   { path: 'home',  component: SearchbusComponent },
  { path: 'availablebus',     component: AvailablebusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'viewseats/:id', component: ViewseatsComponent},
  { path: 'seatdetails/:id', component: SeatdetailsComponent}
];