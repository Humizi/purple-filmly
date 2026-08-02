import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { noop } from 'rxjs';

@Component({
  selector: 'app-radio-component',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
  standalone: true,
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent<T> implements ControlValueAccessor {
  private onChange: (value: T) => void = noop;
  private onTouched: () => void = noop;

  label = input<string>('');

  disabled = signal(false);
  readonly value = input.required<T>();
  readonly checked = signal(false);

  writeValue(value: T | null): void {
    this.checked.set(value === this.value());
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  select(): void {
    if (this.disabled()) {
      return;
    }

    this.checked.set(true);
    this.onChange(this.value());
    this.onTouched();
  }
}
