import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

import { InputComponent } from '../../../shared/components/input/input.component';
import { RadioComponent } from '../../../shared/components/radio/radio.component';
import { StoreService } from '../../../shared/services/store/store.service';

@Component({
  selector: 'app-filters-component',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  standalone: true,
  imports: [RadioComponent, InputComponent, ɵInternalFormsSharedModule, ReactiveFormsModule],
})
export class FiltersComponent implements OnInit {
  private storeService = inject(StoreService);
  private _destroyRef = inject(DestroyRef);
  private _fb = inject(FormBuilder);

  public readonly items = toSignal(this.storeService.getValueAsync('genres'));

  form = this._fb.group({
    search: this._fb.control(''),
    genre: this._fb.control(''),
  });

  ngOnInit(): void {
    const savedFilters = {
      search: this.storeService.getValue('filters').name ?? '',
      genre: this.storeService.getValue('filters').genre ?? '',
    };

    this.form.patchValue(savedFilters, {
      emitEvent: false,
    });

    this.form.valueChanges
      .pipe(
        debounceTime(500),
        tap((data) => {
          this.storeService.setFormValue('name', data.search ?? '');
          this.storeService.setFormValue('genre', data.genre ?? '');
        }),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe();
  }
}
