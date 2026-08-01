import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
})
export class ButtonComponent {
  text = input('');
  disabled = input(false);

  btnClick = output<void>();

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
