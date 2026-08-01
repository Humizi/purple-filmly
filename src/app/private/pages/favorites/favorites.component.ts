import { Component, inject } from '@angular/core';

import { CardComponent } from '../../components/card/card.component';
import { StoreService } from '../../../shared/services/store/store.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-favorites-component',
  standalone: true,
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  imports: [CardComponent],
})
export class FavoritesComponent {
  private storeService = inject(StoreService);

  public readonly items = toSignal(this.storeService.getValueAsync('favorites'));
}
