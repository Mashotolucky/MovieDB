import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie_name: any;
  movie_description: any;
  movie_tag: any;
  movie_runtime!: any;
  movie_release_date!: any;
  movie_director!: any;
  movie_genre: any = [];
  movie_rating: any = 1;

  constructor(private movieApi: MovieServiceService) { }

  movie: any;
  background: any;
  poster: any;

  ngOnInit(): void {
    this.getDetailsMovieIteam();
  }

  getDetailsMovieIteam(): void{
    this.movieApi.getCurrentMovie()
    .subscribe(res =>{
      console.log(res);
      this.movie = res;

      // console.log(this.movie.id);
      this.background = `"https://image.tmdb.org/t/p/original${this.movie.backdrop_path}"`
      this.poster = `https://image.tmdb.org/t/p/original${this.movie.poster_path}`
      console.log(this.background);
      this.movie_name = this.movie.title;
      this.movie_description = this.movie.overview;
      this.movie_tag = this.movie.tagline;
      this.movie_genre = this.movie.genres;
      this.movie_runtime = this.movie.runtime;
      this.movie_release_date = this.movie.release_date;
    })
  }

}
