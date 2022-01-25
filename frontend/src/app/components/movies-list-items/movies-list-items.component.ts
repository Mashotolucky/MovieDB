import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list-items',
  templateUrl: './movies-list-items.component.html',
  styleUrls: ['./movies-list-items.component.scss']
})
export class MoviesListItemsComponent implements OnInit {

  rating = 0;
  constructor() { 
    
  }

  ngOnInit(): void {

  }

  ratings(){
    return this.rating = this.rating + 1;
  }

}
