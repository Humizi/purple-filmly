import { Component, inject } from '@angular/core';

import { CardComponent } from '../../components/card/card.component';
import { StoreService } from '../../../shared/services/store/store.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [CardComponent],
})
export class HomeComponent {
  private storeService = inject(StoreService);

  public readonly movies = toSignal(this.storeService.getValueAsync('movies'));
}
