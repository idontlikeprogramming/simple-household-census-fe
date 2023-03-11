import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _http: HttpService,
    private _storage: StorageService,
    private _router: Router
  ) {}

  async login(email: string, password: string) {
    const res = await this._http.post('/auth/login', {
      email,
      password,
    });
    if (res != null) {
      this._storage.set('token', res.data['token']);
      this._storage.set('user', res.data['user']);
      this._router.navigateByUrl('/household');
    }
  }

  async requestNewPassword(email: string) {
    const res = await this._http.post('/auth/request-new-password', {
      email,
    });
    if (res != null) {
      this._router.navigateByUrl('/auth/set-new-password');
    }
  }

  async setNewPassword(
    otp: string,
    password: string,
    password_confirmation: string
  ) {
    const res = await this._http.post('/auth/set-new-password', {
      otp,
      password,
      password_confirmation,
    });
    if (res != null) {
      this._router.navigateByUrl('/auth/login');
    }
  }
}
