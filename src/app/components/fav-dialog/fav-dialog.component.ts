import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Items } from 'src/app/models/index';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fav-dialog',
  templateUrl: './fav-dialog.component.html',
  styleUrls: ['./fav-dialog.component.scss'],
})
export class FavDialogComponent implements OnInit {
  displayedColumns: string[] = ['picture', 'title', 'remove'];
  dataSource: MatTableDataSource<Items> = new MatTableDataSource();
  constructor(
    public apiService: ApiService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<FavDialogComponent>
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.apiService.favItems);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  checkRemove(item: Items) {
    let confirm = window.confirm(
      'Are you sure you want to remove from your favourites?'
    );
    if (confirm) {
      this.apiService.removeFav(item);
      this.ngOnInit();
    }
  }
}
