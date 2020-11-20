import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import 'hammerjs';

import { AppComponent } from './app.component';
import { SearchbusComponent } from './searchbus/searchbus.component';
import { AvailablebusComponent } from './availablebus/availablebus.component';

import { BusService } from './services/bus.service';



@NgModule({
  declarations: [
    AppComponent,
    SearchbusComponent,
    AvailablebusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [
    BusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
