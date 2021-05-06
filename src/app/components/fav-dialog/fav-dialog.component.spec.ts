import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavDialogComponent } from './fav-dialog.component';

describe('FavDialogComponent', () => {
  let component: FavDialogComponent;
  let fixture: ComponentFixture<FavDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
