import { ButtonComponent } from '../../../shared/components/button/button.component';
import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/components/input/input.component';
import { PasswordInputComponent } from '../../../shared/components/password-input/password-input.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ButtonComponent, InputComponent, PasswordInputComponent, RouterLink],
  standalone: true,
})
export class LoginComponent {}
