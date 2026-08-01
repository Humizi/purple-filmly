import { Component, inject } from '@angular/core';

import { AsyncPipe } from '@angular/common';
import { GenresService } from '../../../shared/services/genres.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
})
export class MenuComponent {
  private genresService = inject(GenresService);

  public readonly items = this.genresService.getGenres();
}
