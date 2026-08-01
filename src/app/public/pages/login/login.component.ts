import { Component, inject } from '@angular/core';
import { catchError, of, take, tap } from 'rxjs';

import { AuthService } from '../../../shared/services/auth.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputComponent } from '../../../shared/components/input/input.component';
import { PasswordInputComponent } from '../../../shared/components/password-input/password-input.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ButtonComponent, InputComponent, PasswordInputComponent],
  standalone: true,
})
export class LoginComponent {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  private _formValue: { username: string | null; password: string | null } = {
    username: null,
    password: null,
  };
  error: string | null = null;

  onInputChange(ctrl: 'username' | 'password', value: string | null): void {
    this._formValue[ctrl] = value;
  }

  onLoginClick(): void {
    if (this._formValue.username === null || this._formValue.password === null) {
      return;
    }

    this._authService
      .login$(this._formValue.username, this._formValue.password)
      .pipe(
        take(1),
        tap(() => this._router.navigate(['private'])),
        catchError((err) => {
          this.error = err;
          return of(err);
        }),
      )
      .subscribe();
  }
}
