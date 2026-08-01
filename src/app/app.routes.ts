import { AuthGuard } from './shared/guards/auth.guard';
import { FavoritesComponent } from './private/pages/favorites/favorites.component';
import { HomeComponent } from './private/pages/home/home.component';
import { LoginComponent } from './public/pages/login/login.component';
import { PrivateLayoutComponent } from './private/_layout/layout.component';
import { PublicLayoutComponent } from './public/_layout/layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'public',
    component: PublicLayoutComponent,
    children: [
      {
        title: 'Логин',
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: 'private',
    component: PrivateLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        title: 'Дашборд',
        path: 'home',
        component: HomeComponent,
      },
      {
        title: 'Избранное',
        path: 'favorites',
        component: FavoritesComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'public',
  },
];
