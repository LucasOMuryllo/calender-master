import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender.component';
import { AppointmentsTableComponent } from './components/appointments-table/appointments-table.component';

const routes: Routes = [
  {
    path:'',
    component: CalenderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalenderRoutingModule { }
