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
  }

  movie: any;

  getLatest(): void{
    this.movieApi.getLatest()
    .subscribe(res => {
      
      console.log(res);
      this.movie = res.poster_path;
      console.log(this.movie);
      
      
    }, err =>{
      console.log(err);
      
    });
  };

}
