import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Appointment } from '../../models';
import { formatDate } from '@angular/common';
import { timeComparisonValidator } from '../../utils/custom-validators';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AppointmentComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFrom(this.data);
  }

  createFrom(item?: Appointment) {
    const defaultDate = this.data.date ?? new Date();

    this.form = this.fb.group({
      id: [item?.id ?? null],
      title: [item?.title ?? null, [Validators.required]],
      description: [item?.description ?? null],
      date: [item?.date ?? defaultDate, [Validators.required]],
      startTime: [item?.startTime ?? null, [Validators.required]],
      endTime: [item?.endTime ?? null, [Validators.required]],
    });
  }

  handleAction() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const dateValue = this.form.get('date')?.value;
      const formattedDate = formatDate(dateValue, 'dd-MM-yyyy', 'en-US');
      this.form.get('date')?.setValue(formattedDate);
      this.dialogRef.close(this.form.value);
    }

    console.log('this.data.date:', this.data.date);
    console.log('this.form.get("date")?.value:', this.form.get('date')?.value);

  }
}
