import { GENRES, IGenre } from '../const/genres.const';
import { Observable, delay, of } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  getGenres(): Observable<IGenre[]> {
    return of(GENRES).pipe(delay(500));
  }
}
