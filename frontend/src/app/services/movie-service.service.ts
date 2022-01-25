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
}
