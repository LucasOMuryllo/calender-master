import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';
import { AppointmentsTableComponent } from './components/appointments-table/appointments-table.component';
import { SharedModule } from '@payever/shared';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentsService } from './services/appointments.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalenderComponent,
    AppointmentsTableComponent,
    AppointmentComponent
  ],
  imports: [
    SharedModule,
    CalenderRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    AppointmentsService
  ]
})
export class CalenderModule { }
