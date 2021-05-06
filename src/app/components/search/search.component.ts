import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  selected = 'title';
  sortOrder = false;

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {}

  filterText(receivedText: string) {
    this.apiService.filterItems(this.selected, receivedText.toLowerCase());
  }

  radioChange(event: { value: string }) {
    this.apiService.sortBy(event.value);
  }
}
