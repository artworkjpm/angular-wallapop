import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  from = 0;
  to = 5;

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getItems();
  }

  onPageEvent(event: PageEvent) {
    this.from = event.pageIndex * event.pageSize;
    this.to = (event.pageIndex + 1) * event.pageSize;
  }
}
