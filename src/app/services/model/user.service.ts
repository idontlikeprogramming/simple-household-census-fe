import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpService) {}

  async list() {
    return await this._http.get('/user/list');
  }

  async updateMyAccount(name: string) {
    return await this._http.post(
      '/user/update-my-account',
      {
        name,
      },
      true
    );
  }

  async changePassword(
    current_password: string,
    password: string,
    password_confirmation: string
  ) {
    return await this._http.post(
      '/user/change-password',
      {
        current_password,
        password,
        password_confirmation,
      },
      true
    );
  }

  async register(
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) {
    return await this._http.post(
      '/user/register',
      {
        name,
        email,
        password,
        password_confirmation,
      },
      true
    );
  }

  async resetPassword(user_id: number) {
    return await this._http.post(
      '/user/reset-password',
      {
        user_id,
      },
      true
    );
  }
}
