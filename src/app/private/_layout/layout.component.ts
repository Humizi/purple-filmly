import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { combineLatest, tap } from 'rxjs';

import { FavoritesService } from '../../shared/services/favorites.service';
import { GenresService } from '../../shared/services/genres.service';
import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { MoviesService } from '../../shared/services/movies.service';
import { RouterOutlet } from '@angular/router';
import { StoreService } from '../../shared/services/store/store.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-private-layout-component',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, HeaderComponent],
})
export class PrivateLayoutComponent implements OnInit {
  private storeService = inject(StoreService);
  private genresService = inject(GenresService);
  private moviesService = inject(MoviesService);
  private favoritesService = inject(FavoritesService);
  private _destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    combineLatest([
      this.genresService.getGenres(),
      this.moviesService.getMovies(),
      this.favoritesService.getFavorites(),
    ])
      .pipe(
        tap(([genres, movies, favorites]) => {
          this.storeService.setValue('genres', genres);
          this.storeService.setValue('movies', movies);
          this.storeService.setValue('favorites', favorites);
        }),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe();
  }
}
