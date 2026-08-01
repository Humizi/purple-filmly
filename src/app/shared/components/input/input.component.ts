import { Component, input, output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
  imports: [FormsModule],
})
export class InputComponent {
  type = input<'text' | 'email'>('text');
  placeholder = input('');
  disabled = input(false);
  icon = input<string | null>(null);
  value = input<string | null>(null);

  controlValue = output<string | null>();

  onInput(value: string | null): void {
    this.controlValue.emit(value);
  }
}
