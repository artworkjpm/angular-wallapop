import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsComponent } from './items.component';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  let dummyPaginitor = {
    length: 20,
    pageIndex: 1,
    pageSize: 5,
    previousPageIndex: 0,
  };

  it('should paginate in sections of 5', () => {
    //starts at from: 0, to: 5
    expect(component.from).toBe(0);
    expect(component.to).toBe(5);
    //fire function
    component.onPageEvent(dummyPaginitor);
    //should go up by 5
    expect(component.from).toBe(5);
    expect(component.to).toBe(10);
  });
});
