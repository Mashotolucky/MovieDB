import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private movieApi: MovieServiceService) { }

  ngOnInit(): void {
    this.getLatest();
    this.getLatest1();
    this.getLatest2();
  }

  movie: any;
  movie1: any;
  movie2: any;

  getLatest(): void{
    this.movieApi.getLatest()
    .subscribe(res => {
      
      console.log(res);
      this.movie = res.backdrop_path;
      console.log(this.movie);
      
      
    }, err =>{
      console.log(err);
      
    });
  };

  getLatest1(): void{
    this.movieApi.getLatest1()
    .subscribe(res => {
      
      console.log(res);
      this.movie1 = res.backdrop_path;
      console.log(this.movie1);
      
      
    }, err =>{
      console.log(err);
      
    });
  };

  getLatest2(): void{
    this.movieApi.getLatest2()
    .subscribe(res => {
      
      console.log(res);
      this.movie2 = res.backdrop_path;
      console.log(this.movie2);
      
      
    }, err =>{
      console.log(err);
      
    });
  };

}
