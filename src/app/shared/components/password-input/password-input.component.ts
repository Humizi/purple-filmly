import { Component, input, output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-input-component',
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  standalone: true,
  imports: [FormsModule],
})
export class PasswordInputComponent {
  placeholder = input('');
  disabled = input(false);
  icon = input<string | null>(null);
  value = input<string | null>(null);

  controlValue = output<string | null>();

  type: 'text' | 'password' = 'password';

  get iconEye(): string {
    return this.type === 'password' ? 'icons/eye--closed.svg' : 'icons/eye--open.svg';
  }

  onInput(value: string | null): void {
    this.controlValue.emit(value);
  }

  toggleType(): void {
    this.type = this.type === 'text' ? 'password' : 'text';
  }
}
