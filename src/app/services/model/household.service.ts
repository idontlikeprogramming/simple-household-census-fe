import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class HouseholdService {
  constructor(private _http: HttpService) {}

  async list(search: string = '', conducted_by_id: any) {
    return await this._http.get('/household/list', {
      search,
      conducted_by_id,
    });
  }

  async create(
    province: string,
    city: string,
    barangay: string,
    respondent_name: string,
    head: string,
    member_count: number,
    address: string
  ) {
    return await this._http.post(
      '/household/create',
      {
        province,
        city,
        barangay,
        respondent_name,
        head,
        member_count,
        address,
      },
      true
    );
  }

  async update(
    id: number,
    province: string,
    city: string,
    barangay: string,
    respondent_name: string,
    head: string,
    member_count: number,
    address: string
  ) {
    return await this._http.post(
      '/household/update',
      {
        id,
        province,
        city,
        barangay,
        respondent_name,
        head,
        member_count,
        address,
      },
      true
    );
  }

  async delete(id: number) {
    return await this._http.post(
      '/household/delete',
      {
        id,
      },
      true
    );
  }
}
