import { AbstractControl, ValidationErrors } from '@angular/forms';

export function timeComparisonValidator(control: AbstractControl): ValidationErrors | null {
  const time1 = control.get('startTime')?.value;
  const time2 = control.get('endTime')?.value;

  if (time1 && time2) {
    const t1 = new Date();
    const timeArray1 = time1.split(':');
    t1.setHours(parseInt(timeArray1[0], 10));
    t1.setMinutes(parseInt(timeArray1[1], 10));
    t1.setSeconds(parseInt(timeArray1[2], 10));

    const t2 = new Date();
    const timeArray2 = time2.split(':');
    t2.setHours(parseInt(timeArray2[0], 10));
    t2.setMinutes(parseInt(timeArray2[1], 10));
    t2.setSeconds(parseInt(timeArray2[2], 10));

    if (t1.getTime() > t2.getTime()) {
      return { timeComparison: true };

    }
  }

  return null;
}
