import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { delay, tap } from 'rxjs';

import { Title } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent implements OnInit {
  private _titleService = inject(Title);
  private _router = inject(Router);
  private _destroyRef = inject(DestroyRef);

  title = signal('');

  ngOnInit(): void {
    this._router.events
      .pipe(
        delay(100),
        tap((event) => {
          if (event instanceof NavigationEnd) {
            this.title.set(this._titleService.getTitle());
          }
        }),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe();
  }
}
