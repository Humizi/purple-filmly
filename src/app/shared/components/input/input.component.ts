import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { NgOptimizedImage } from '@angular/common';
import { noop } from 'rxjs';

@Component({
  selector: 'app-input-component',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
  imports: [FormsModule, NgOptimizedImage],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  private onChange: (value: string) => void = noop;
  private onTouched: () => void = noop;

  type = input<'text' | 'email'>('text');
  placeholder = input('');
  icon = input<string>('');

  disabled = signal(false);
  value = signal('');

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

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.value.set(value);
    this.onChange(value);
    this.onTouched();
  }
}
