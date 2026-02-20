import { Component } from '@angular/core';
import { MENU_ITEMS } from './menu.models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [RouterLink],
})
export class MenuComponent {
  public readonly items = MENU_ITEMS;
}
