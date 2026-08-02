import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
  imports: [
    ButtonComponent,
    InputComponent,
    PasswordInputComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  standalone: true,
})
export class LoginComponent {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  public formValue: { username: string | null; password: string | null } = {
    username: null,
    password: null,
  };
  error: string | null = null;

  form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', { nonNullable: true }),
  });

  onLoginClick(): void {
    if (this.formValue.username === null || this.formValue.password === null) {
      return;
    }

    this._authService
      .login$(this.formValue.username, this.formValue.password)
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
