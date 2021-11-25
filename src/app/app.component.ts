import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FAtube';
  slide = 4;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPage, {
      width: '250px',
      data: {slide: this.slide}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.slide = result;
    });
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog-page.html',
})
export class DialogPage {

  constructor(
    public dialogRef: MatDialogRef<DialogPage>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
