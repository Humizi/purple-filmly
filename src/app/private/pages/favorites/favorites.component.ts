import { CardComponent } from '../../components/card/card.component';
import { Component } from '@angular/core';
import { FAVORITES } from '../../../shared/const/fake-favorites.const';

@Component({
  selector: 'app-favorites-component',
  standalone: true,
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  imports: [CardComponent],
})
export class FavoritesComponent {
  public readonly items = FAVORITES;
}
