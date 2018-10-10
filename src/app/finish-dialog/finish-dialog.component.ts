import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-finish-dialog',
  templateUrl: './finish-dialog.component.html',
  styleUrls: ['./finish-dialog.component.css']
})
export class FinishDialogComponent implements OnInit {

  title: string;
  description: string;
  constructor(
    public dialogRef: MatDialogRef<FinishDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.title = this.data['title'];
    this.description = this.data['description'];
    console.log(this.title);
  }

}
