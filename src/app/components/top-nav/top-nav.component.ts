import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';
import { FavDialogComponent } from '../fav-dialog/fav-dialog.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  hidden = false;
  constructor(public apiService: ApiService, public dialog: MatDialog) {}
  ngOnInit() {}
  showModal() {
    this.dialog.open(FavDialogComponent);
  }
}
