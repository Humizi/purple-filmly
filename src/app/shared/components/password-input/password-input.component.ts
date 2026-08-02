import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { NgOptimizedImage } from '@angular/common';
import { noop } from 'rxjs';

@Component({
  selector: 'app-password-input-component',
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  standalone: true,
  imports: [FormsModule, NgOptimizedImage],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  private onChange: (value: string) => void = noop;
  private onTouched: () => void = noop;

  placeholder = input('');
  icon = input<string>('');

  disabled = signal(false);
  value = signal('');

  type: 'text' | 'password' = 'password';

  get iconEye(): string {
    return this.type === 'password' ? 'icons/eye--closed.svg' : 'icons/eye--open.svg';
  }

  writeValue(value: string): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  toggleType(): void {
    this.type = this.type === 'text' ? 'password' : 'text';
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.value.set(value);
    this.onChange(value);
    this.onTouched();
  }
}
