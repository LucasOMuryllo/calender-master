import { Injectable } from '@angular/core';
import { Appointment } from '../models';
import { formatDate } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable()
export class AppointmentsService {
  selectedDate$: Subject<Date> = new Subject<Date>();

  appointmentsList: Appointment[] = [
    {
      "id": 10,
      "title": "Default Title 1 ",
      "description": "This Is a Default Title 1 ",
      "date": "2023-04-13",
      "startTime": "04:48",
      "endTime": "04:48"
    },
    {
      "id": 15,
      "title": "Default Title 2 ",
      "description": "This Is a Default Title 2 ",
      "date": "2023-04-13",
      "startTime": "04:47",
      "endTime": "04:48"
    },
    {
      "id": 2,
      "title": "Default Title 3 ",
      "description": "This Is a Default Title 3 ",
      "date": "2023-04-14",
      "startTime": "04:47",
      "endTime": "04:48"
    }

  ]
  constructor() { }

  addAppointment(item: Appointment) {
    item = {
      ...item,
      id: this.randomInt()
    }
    this.appointmentsList.push(item);
  }

  editAppointment(item: Appointment) {
    this.appointmentsList = this.appointmentsList.map(obj =>
      obj.id === item.id ?
        {
          ...obj,
          ...item
        }
        : obj
    );
  }
  deleteAppointment(appointmentId: number) {
    this.appointmentsList = this.appointmentsList.filter(item => item.id !== appointmentId)
  }

  getDateAppointment(date: Date) {
    return this.appointmentsList.filter(item => item.date === formatDate(date, 'yyyy-MM-dd', 'en-US'))
  }

  private randomInt(min: number = 1, max: number = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  setSelectedDate(date: Date) {
    this.selectedDate$.next(date);
  }

}
