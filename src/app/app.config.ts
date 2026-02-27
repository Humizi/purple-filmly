import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

import { AuthService } from './shared/services/auth.service';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), AuthService],
};
