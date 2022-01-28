import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  message!: any;
  actor_name!: any;
  character_name!: any;
  isClicked: boolean = false;

  

  constructor(private movieApi: MovieServiceService) { }

  movieActors: any = [];
  profile: any;

  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];

  ngOnInit(): void {
    this.actors();
  }


  actors(): void{

    for(let i = 0; i <= 6; i++){
      this.movieApi.getActors()
    .subscribe(res =>{
      this.movieActors = res.cast;
      console.log(this.movieActors);
      this.profile = "http://image.tmdb.org/t/p/w500/"+`${this.movieActors[1].profile_path}`;
      console.log(this.profile);
    })
    }
    
  }
   
  clicked(): void {
    this.message = "Show more"
  }
}
