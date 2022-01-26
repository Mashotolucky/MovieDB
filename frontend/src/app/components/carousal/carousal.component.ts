import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {

  movieArr: any = [];
  results: any = [];
  title: any;
  pic: any;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private movieApi: MovieServiceService) { }

  ngOnInit(): void {
    this.getLatest();
  }

  movies: any=[];

  getLatest(): void{
    this.movieApi.getLatest()
    .subscribe(res => {
      
      console.log(res);
      this.movies = res.results;
      console.log(this.movies);
      
      
    }, err =>{
      console.log(err);
      
    });
  };

  getRandomCarousal(): void{
    let x = Math.floor((Math.random() * 20) + 1);
    this.movies = this.movies.results[x];
    this.pic = this.movies.backdrop_path;
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

}
