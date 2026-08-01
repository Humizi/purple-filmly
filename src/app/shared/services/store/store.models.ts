import { IGenre } from '../../const/genres.const';
import { IMovie } from '../../models/movie.model';

export interface IAppStore {
  genres: IGenre[];
  movies: IMovie[];
  favorites: IMovie[];

  filters: {
    name: string;
    genre: number | null;
    from: number | null;
    to: number | null;
    sort: 'genre' | 'name' | 'rating';
  };
}
