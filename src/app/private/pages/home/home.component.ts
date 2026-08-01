import { Component, inject } from '@angular/core';

import { AsyncPipe } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { MoviesService } from '../../../shared/services/movies.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [CardComponent, AsyncPipe],
})
export class HomeComponent {
  private moviesService = inject(MoviesService);

  public movies = this.moviesService.getMovies();
}
