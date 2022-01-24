import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie_name: any = "Title of the movie";
  movie_description: any = "Shiba did this";
  movie_runtime!: any;
  movie_release_date!: any;
  movie_director!: any;
  movie_genre!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
