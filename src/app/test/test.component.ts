import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'app-test',

  templateUrl: './test.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class ConfirmDialog {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog
      .open(ConfirmOptions)
      .afterClosed()
      .subscribe((data) => console.log(data));
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './confirm.dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class ConfirmOptions {
  constructor(public dialogRef: MatDialogRef<ConfirmOptions>) {}
}
