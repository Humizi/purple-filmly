import { IAppStore } from './store.models';

export const STORE_INITIAL_STATE: IAppStore = {
  genres: [],
  movies: [],
  favorites: [],
  filters: {
    name: '',
    genre: null,
    from: null,
    to: null,
    sort: 'name',
  },
};
