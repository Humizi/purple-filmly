import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-input-component',
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  standalone: true,
  imports: [FormsModule],
})
export class PasswordInputComponent {
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() icon: string | null = null;
  @Input() value: string | null = null;

  @Output() controlValue = new EventEmitter<string | null>();

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
