import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor(private _http: HttpService) {}

  async getCounts() {
    return await this._http.get('/stats/counts');
  }
}
