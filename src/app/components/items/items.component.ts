import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [ApiService],
})
export class ItemsComponent implements OnInit {
  displayedColumns: string[] = [
    'image',
    'price',
    'title',
    'description',
    'email',
  ];

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getItems();
  }
}
