import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-movies-list-items',
  templateUrl: './movies-list-items.component.html',
  styleUrls: ['./movies-list-items.component.scss']
})
export class MoviesListItemsComponent implements OnInit {

  rating = 0;
  movieArr: any = [];
  results: any = [];
  title: any;
  pic: any;

  startPage: number;
  paginationLimit: number;


  constructor(private movieApi: MovieServiceService) { 
    this.startPage = 10;
    this.paginationLimit = 20;
  }

  ngOnInit(): void {
    this.getPupolarMovies();
    this.getMovie();
    //this.getPop();
  }

  ratings(){
    return this.rating = this.rating + 1;
  }

  // getPop(): void{
  //   this.movieApi.popularMovies().subscribe((res: any)=>{
  //     //this.movieArr = res;
  //     console.log("the popular obj: "+res)
  //   })
  // }

  showMore(){
    this.paginationLimit = Number(this.paginationLimit) + 10;
  }

  showLess(){
    this.paginationLimit = Number(this.paginationLimit) - 10;
  }

  getPupolarMovies(): void{
    this.movieApi.popularMovies()
    .subscribe((res: any) => {
      this.movieArr = res.results; 
      console.log(this.movieArr);
      //console.log(this.movieArr[0].title);
    },err =>{
      console.log(err);
  
    })
  }

  getMovie(): void{
    this.title = this.movieArr[0].title;

    // this.pic = this.movieArr.results.backdrop_path;
    console.log(this.title);
    // console.log(this.pic);
    
  }

  setMovieId(id: any): void{
    this.movieApi.setDetailMovieId(id);
    console.log(id);
    
  }
}
