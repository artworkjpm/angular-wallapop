import { Injectable } from '@angular/core';
import { Items } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API: string = '/items.json';
  itemsArray: Items[] = [];

  constructor(public http: HttpClient) {}

  /*  getItems() {
    return this.http.get<{ items: Items[] }>(this.API);
  } */

  getItems(): Subscription {
    return this.http
      .get<{ items: Items[] }>(this.API)
      .pipe(take(1))
      .subscribe((items) => {
        this.itemsArray = items.items;
        console.log(this.itemsArray);
      });
  }
}
