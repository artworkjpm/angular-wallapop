import { ApiService } from './api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Items } from '../models';
import { Subscription } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  const dummyItem: Items = {
    ['filterBy']: 'title',
    title: 'Nike shoes',
    description: 'Nike air max',
    price: '100',
    email: 'tester@gmail.com',
    image: 'http://hosted-image.com',
  };
  it('Should retrieve items from the api url via GET', () => {
    //call the method in the service and check that its GET
    service.getItems();
    const request = httpMock.expectOne(`${service.API_URL}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyItem);
  });

  it('Should ADD dummyItem to favItems array', () => {
    service.addToFav(true, dummyItem);
    expect(service.favItems).toEqual(Object([dummyItem]));
  });
  it('Should REMOVE dummyItem from favItems array', () => {
    //call the method in the service and check that its GET
    service.removeFav(dummyItem);
    expect(service.favItems).toEqual([]);
  });
});
