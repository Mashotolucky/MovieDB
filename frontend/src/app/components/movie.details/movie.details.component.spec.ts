import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movie.DetailsComponent } from './movie.details.component';

describe('Movie.DetailsComponent', () => {
  let component: Movie.DetailsComponent;
  let fixture: ComponentFixture<Movie.DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Movie.DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Movie.DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
