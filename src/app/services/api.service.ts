import { Injectable } from '@angular/core';
import { Items } from '../models';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API: string = '/items.json';
  itemsArray: Items[] = [];
  constructor(public http: HttpClient) {}

  getItems(): Subscription {
    return this.http
      .get<{ items: Items[] }>(this.API)
      .pipe(take(1))
      .subscribe((items) => {
        this.itemsArray = items.items;
        console.log(this.itemsArray);
      });
  }

  filterItems(filterBy: string, filterText: string): Subscription {
    return this.http
      .get<{ items: Items[] }>(this.API)
      .pipe(take(1))
      .subscribe((items) => {
        this.itemsArray = items.items;
        if (filterBy === 'title') {
          this.itemsArray = this.itemsArray.filter((item) => {
            return item.title.toLowerCase().includes(`${filterText}`);
          });
        } else if (filterBy === 'description') {
          this.itemsArray = this.itemsArray.filter((item) => {
            return item.description.toLowerCase().includes(`${filterText}`);
          });
        }
      });
  }
}
