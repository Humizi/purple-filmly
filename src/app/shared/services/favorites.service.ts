import { Observable, delay, of } from 'rxjs';

import { FAVORITES } from '../const/fake-favorites.const';
import { IMovie } from '../models/movie.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  getFavorites(): Observable<IMovie[]> {
    return of(FAVORITES).pipe(delay(500));
  }
}
