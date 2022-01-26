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


  constructor(private movieApi: MovieServiceService) { 
    
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
}
