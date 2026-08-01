import { Component, inject } from '@angular/core';

import { AsyncPipe } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { FavoritesService } from '../../../shared/services/favorites.service';

@Component({
  selector: 'app-favorites-component',
  standalone: true,
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  imports: [CardComponent, AsyncPipe],
})
export class FavoritesComponent {
  private favoritesService = inject(FavoritesService);

  public readonly items = this.favoritesService.getFavorites();
}
