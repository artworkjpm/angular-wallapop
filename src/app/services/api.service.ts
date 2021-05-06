import { Injectable } from '@angular/core';
import { Items } from '../models';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API: string = '/items.json';
  itemsArray: Items[] = [];
  filterBy = '';
  filterText = '';
  sortType = '';
  favItems: Items[] = [];
  favAmount = 5;
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
    this.filterBy = filterBy;
    this.filterText = filterText;
    return this.http
      .get<{ items: Items[] }>(this.API)
      .pipe(take(1))
      .subscribe((items) => {
        this.itemsArray = items.items.filter((item) => {
          return item[filterBy].toLowerCase().includes(`${filterText}`);
        });
        if (this.sortType !== 'noPriceSorting') {
          this.sortBy(this.sortType);
        }
      });
  }

  sortBy(sortType: string) {
    this.sortType = sortType;
    if (sortType === 'desc') {
      this.itemsArray.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price);
      });
    } else if (sortType === 'asc') {
      this.itemsArray.sort((a, b) => {
        return parseFloat(b.price) - parseFloat(a.price);
      });
    } else if (sortType === 'noPriceSorting') {
      if (this.filterText) {
        this.filterItems(this.filterBy, this.filterText);
      } else {
        this.getItems();
      }
    }
  }

  //FAVOURITE CODE
  incrementCount() {
    this.favAmount++;
  }
  decrementCount() {
    this.favAmount--;
    this.favAmount < 0 ? (this.favAmount = 0) : this.favAmount;
  }

  addToFav(favClicked: boolean, item: Items) {
    if (favClicked) {
      this.incrementCount();
      this.favItems.push(item);
    } else {
      this.decrementCount();
      this.removeData(item);
    }
    console.log(this.favItems);
  }

  removeData(data: Items) {
    let removeItem = this.favItems
      .map((item: Items) => item.email)
      .indexOf(data.email);
    this.favItems.splice(removeItem, 1);
  }
}
