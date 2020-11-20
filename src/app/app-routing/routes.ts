import { Routes } from '@angular/router';

import { SearchbusComponent } from '../searchbus/searchbus.component';
import { AvailablebusComponent } from '../availablebus/availablebus.component';



export const routes: Routes = [
  { path: 'home',  component: SearchbusComponent },
  { path: 'availablebus',     component: AvailablebusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];