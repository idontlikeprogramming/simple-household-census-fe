import { Household } from './household';

export interface HouseholdMember {
  id: number;
  household_id: number;
  household: Household;
  first_name: string;
  middle_name: string;
  last_name: string;
  relationship_to_head: string;
  sex: string;
  is_lgbtqm: boolean;
  birth_date: string;
  place_of_birth: string;
  is_pwd: boolean;
  is_solo_parent: boolean;
  is_senior: boolean;
  age: number;
}
