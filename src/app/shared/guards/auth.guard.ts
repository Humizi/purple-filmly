import { AuthService } from '../services/auth.service';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);

  return authService.isAuthenticated;
};
