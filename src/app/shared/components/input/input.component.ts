import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
  imports: [FormsModule],
})
export class InputComponent {
  @Input() type: 'text' | 'email' = 'text';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() icon: string | null = null;
  @Input() value: string | null = null;

  @Output() controlValue = new EventEmitter<string | null>();

  onInput(value: string | null): void {
    this.controlValue.emit(value);
  }
}
