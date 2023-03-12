import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class HouseholdMemberService {
  constructor(private _http: HttpService) {}

  async list(household_hashid: string, category: string | undefined) {
    return await this._http.get('/household-member/list', {
      household_hashid,
      category,
    });
  }

  async add(
    household_id: number,
    first_name: string,
    middle_name: string,
    last_name: string,
    relationship_to_head: string,
    sex: string,
    birth_date: string,
    place_of_birth: string,
    is_lgbtqm: boolean,
    is_pwd: boolean,
    is_solo_parent: boolean
  ) {
    return await this._http.post(
      '/household-member/add',
      {
        household_id,
        first_name,
        middle_name,
        last_name,
        relationship_to_head,
        sex,
        birth_date,
        place_of_birth,
        is_lgbtqm,
        is_pwd,
        is_solo_parent,
      },
      true
    );
  }

  async update(
    id: number,
    household_id: number,
    first_name: string,
    middle_name: string,
    last_name: string,
    relationship_to_head: string,
    sex: string,
    birth_date: string,
    place_of_birth: string,
    is_lgbtqm: boolean,
    is_pwd: boolean,
    is_solo_parent: boolean
  ) {
    return await this._http.post(
      '/household-member/update',
      {
        id,
        household_id,
        first_name,
        middle_name,
        last_name,
        relationship_to_head,
        sex,
        birth_date,
        place_of_birth,
        is_lgbtqm,
        is_pwd,
        is_solo_parent,
      },
      true
    );
  }

  async delete(id: number) {
    return await this._http.post(
      '/household-member/delete',
      {
        id,
      },
      true
    );
  }
}
