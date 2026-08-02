import { Component, DestroyRef, OnInit, inject } from '@angular/core';
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
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
export class LoginComponent implements OnInit {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  private _destroyRef = inject(DestroyRef);

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

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe();
  }

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
