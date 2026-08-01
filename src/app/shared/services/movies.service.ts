import { Observable, of } from 'rxjs';

import { IMovie } from '../models/movie.model';
import { Injectable } from '@angular/core';
import { MOVIES } from '../const/fake-films.const';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  getMovies(): Observable<IMovie[]> {
    return of(MOVIES);
  }
}
