import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Items } from 'src/app/models';

import { FavIconComponent } from './fav-icon.component';

describe('FavIconComponent', () => {
  let component: FavIconComponent;
  let fixture: ComponentFixture<FavIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [FavIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const dummyItem: Items = {
    ['filterBy']: 'title',
    title: 'Nike shoes',
    description: 'Nike air max',
    price: '100',
    email: 'tester@gmail.com',
    image: 'http://hosted-image.com',
  };
  const dummyFavItems: Items[] = [
    {
      ['filterBy']: 'title',
      title: 'Puma shoes',
      description: 'Puma',
      price: '100',
      email: 'john@gmail.com',
      image: 'http://hosted-image.com',
    },
    {
      ['filterBy']: 'title',
      title: 'Adidas',
      description: 'Adidas',
      price: '100',
      email: 'wallapop@gmail.com',
      image: 'http://hosted-image.com',
    },
  ];

  it('should return false if dummyItem is not in dummyFavItems', () => {
    expect(component.hasItemInFavs(dummyItem, dummyFavItems)).toBe(false);
  });
});
