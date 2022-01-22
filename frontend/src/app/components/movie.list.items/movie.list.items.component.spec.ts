import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movie.List.ItemsComponent } from './movie.list.items.component';

describe('Movie.List.ItemsComponent', () => {
  let component: Movie.List.ItemsComponent;
  let fixture: ComponentFixture<Movie.List.ItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Movie.List.ItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Movie.List.ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
