import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  getLatest(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=bd71dc7772433931f0b658c89f90bf2d')
  }

  popularMovies(): Observable<any> {
    let x = Math.floor((Math.random() * 4) + 1);
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=bd71dc7772433931f0b658c89f90bf2d&language=en-US&page=${x}`);
  }
}
