import { ButtonComponent } from '../../shared/components/button/button.component';
import { Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { NgOptimizedImage } from '@angular/common';
import { PasswordInputComponent } from '../../shared/components/password-input/password-input.component';

@Component({
  selector: 'app-layout-component',
  imports: [NgOptimizedImage, ButtonComponent, InputComponent, PasswordInputComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
})
export class LayoutComponent {}
