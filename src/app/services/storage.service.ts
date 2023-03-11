import { Inject, Injectable } from '@angular/core';
import {
  LOCAL_STORAGE,
  StorageService as NgxStorage,
} from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(@Inject(LOCAL_STORAGE) private _storage: NgxStorage) {}

  set(key: string, value: any) {
    this._storage.set(key, value);
  }

  get(key: string, ifNull: any | undefined = null): any {
    return this._storage.get(key) || ifNull;
  }

  remove(key: string) {
    this._storage.remove(key);
  }

  clear() {
    this._storage.clear();
  }
}
