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
}
