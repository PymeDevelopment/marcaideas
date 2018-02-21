import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'pymedevelopment-dialogloading',
  templateUrl: './dialogloading.component.html',
  styleUrls: ['./dialogloading.component.scss']
})
export class DialogloadingComponent {

  constructor(public dialogRef: MatDialogRef<DialogloadingComponent>) {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
