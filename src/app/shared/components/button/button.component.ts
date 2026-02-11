import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text = '';
  @Input() disabled = false;

  @Output() btnClick = new EventEmitter<void>();

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
