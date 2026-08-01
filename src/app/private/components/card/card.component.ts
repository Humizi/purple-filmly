import { Component, input } from '@angular/core';

import { IMovie } from '../../../shared/models/movie.model';

@Component({
  selector: 'app-card-component',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
})
export class CardComponent {
  data = input.required<IMovie>();
}
