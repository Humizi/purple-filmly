import { CardComponent } from '../../components/card/card.component';
import { Component } from '@angular/core';
import { MOVIES } from '../../../shared/const/fake-films.const';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [CardComponent],
})
export class HomeComponent {
  public movies = MOVIES;
}
