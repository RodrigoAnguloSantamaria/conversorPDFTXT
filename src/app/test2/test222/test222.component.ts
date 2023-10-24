import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmOptions } from 'src/app/test/test.component';

@Component({
  selector: 'app-test222',
  templateUrl: './test222.component.html',
  styleUrls: ['./test222.component.scss'],
  standalone: true,
  imports: [MatDialogModule],
})
export class Test222Component {
  constructor(private dialog: MatDialog) {}

  confirmDialog() {
    this.dialog
      .open(ConfirmOptions)
      .afterClosed()
      .subscribe((data) => console.log(data));
  }
}
