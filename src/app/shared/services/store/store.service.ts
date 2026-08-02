import { BehaviorSubject, Observable, map } from 'rxjs';

import { IAppStore } from './store.models';
import { Injectable } from '@angular/core';
import { STORE_INITIAL_STATE } from './store.constants';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly storeSubject = new BehaviorSubject<IAppStore>({
    ...STORE_INITIAL_STATE,
  });

  public getValue<K extends keyof IAppStore>(key: K): IAppStore[K] {
    return this.storeSubject.getValue()[key];
  }

  public getValueAsync<K extends keyof IAppStore>(key: K): Observable<IAppStore[K]> {
    return this.storeSubject.asObservable().pipe(map((state) => state[key]));
  }

  public setValue<K extends keyof IAppStore>(key: K, value: IAppStore[K]): void {
    this.storeSubject.next({
      ...this.storeSubject.getValue(),
      [key]: value,
    });
  }

  public setFormValue<K extends keyof IAppStore['filters']>(
    key: K,
    value: IAppStore['filters'][K],
  ): void {
    this.storeSubject.next({
      ...this.storeSubject.getValue(),
      filters: {
        ...this.storeSubject.getValue().filters,
        [key]: value,
      },
    });
  }
}
