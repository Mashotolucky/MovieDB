import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movies-list-items',
  templateUrl: './movies-list-items.component.html',
  styleUrls: ['./movies-list-items.component.scss']
})
export class MoviesListItemsComponent implements OnInit {

  rating = 0;
  constructor(private movieApi: MovieServiceService) { 
    
  }

  ngOnInit(): void {

  }

  ratings(){
    return this.rating = this.rating + 1;
  }

  getPupolarMovies(): void{
    this.movieApi.popularMovies
  }

}
