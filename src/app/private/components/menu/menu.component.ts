import { Component } from '@angular/core';
import { GENRES } from '../../../shared/const/genres.const';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [RouterLink],
})
export class MenuComponent {
  public readonly items = GENRES;
}
