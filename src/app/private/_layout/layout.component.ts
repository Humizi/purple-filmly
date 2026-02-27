import { Component } from '@angular/core';
import { MenuComponent } from '../components/menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-layout-component',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
})
export class PrivateLayoutComponent {}
