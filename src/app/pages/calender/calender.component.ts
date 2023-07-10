import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from './services/appointments.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  selecteDate!: Date ;
  constructor(private appointmentsService: AppointmentsService) { }

  ngOnInit(): void {
  }

  changeDate(event: Date) {
    this.appointmentsService.setSelectedDate(event)
  }


}
