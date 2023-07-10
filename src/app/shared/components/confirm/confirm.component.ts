import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      message: string,
      button: string,
      action?: string,
      classes?: string
    },
  ) { }

  ngOnInit() {}
  close() {
    this.dialogRef.close();
  }
  submit() {
    if (this.data.action === 'clipboard') {
      const textarea = document.createElement('textarea');
      textarea.textContent = this.data.message;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
      } catch (error) {
        console.log(error);
      }
      document.body.removeChild(textarea);
      setTimeout(() => {
      }, 3000);
      return;
    }
    this.dialogRef.close(true);
  }
}
