import { Component, Input, OnInit } from '@angular/core';
import { Items } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fav-icon',
  templateUrl: './fav-icon.component.html',
  styleUrls: ['./fav-icon.component.scss'],
})
export class FavIconComponent implements OnInit {
  @Input() item: Items = {} as Items;
  favClicked = false;
  constructor(public apiService: ApiService) {}

  ngOnInit(): void {}
  hasItemInFavs(item: Items, favItems: Items[]) {
    let check = favItems.some((x) => x.email === item.email);
    check ? (this.favClicked = true) : (this.favClicked = false);
    return this.favClicked;
  }
}
