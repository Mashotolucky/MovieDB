import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list-items',
  templateUrl: './movies-list-items.component.html',
  styleUrls: ['./movies-list-items.component.scss']
})
export class MoviesListItemsComponent implements OnInit {

  movie_rating!: any;
  constructor() { 
    
  }

  ngOnInit(): void {

  }
}
