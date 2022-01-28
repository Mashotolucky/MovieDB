import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  movieTrailer: any;
  key: any;
  safeUrl: any;

  constructor(private movieApi: MovieServiceService,
              private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.Trailor();
  }

  Trailor(): void{
    this.movieApi.getTrailor()
    .subscribe(res =>{
      console.log(res);
      this.movieTrailer = res.results;
      console.log(this.movieTrailer[0].key);
      this.key = this.movieTrailer[0].key;
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}`);
    })
  }
}
