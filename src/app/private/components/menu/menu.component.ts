import { Component, inject } from '@angular/core';

import { RouterLink } from '@angular/router';
import { StoreService } from '../../../shared/services/store/store.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [RouterLink],
})
export class MenuComponent {
  private storeService = inject(StoreService);

  public readonly items = toSignal(this.storeService.getValueAsync('genres'));
}
