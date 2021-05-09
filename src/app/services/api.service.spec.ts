import { ApiService } from './api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Items } from '../models';

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

  it('Should retrieve items from the api url via GET', () => {
    const dummyItems: Items[] = [
      {
        ['filterBy']: 'title',
        title: 'Nike shoes',
        description: 'Nike air max',
        price: '100',
        email: 'tester@gmail.com',
        image: 'http://hosted-image.com',
      },
    ];
    //call the method in the service and check that its GET
    service.getItems();
    const request = httpMock.expectOne(`${service.API}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyItems);
  });
});
