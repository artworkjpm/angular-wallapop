import { Injectable } from '@angular/core';
import { Items } from '../models';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_URL: string = environment.API_URL;
  itemsArray: Items[] = [];
  filterBy = '';
  filterText = '';
  sortType = '';
  favItems: Items[] = [];
  constructor(public http: HttpClient) {}

  getItems(): Subscription {
    return this.http
      .get<{ items: Items[] }>(this.API_URL)
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
      .get<{ items: Items[] }>(this.API_URL)
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

  //FAVOURITES CODE
  addToFav(favClicked: boolean, item: Items) {
    if (favClicked) {
      this.favItems.push(item);
    } else {
      this.removeFav(item);
    }
  }

  removeFav(favItem: Items) {
    let removeItem = this.favItems
      .map((item: Items) => item.email)
      .indexOf(favItem.email);
    this.favItems.splice(removeItem, 1);
    console.log(this.favItems);
  }
}
