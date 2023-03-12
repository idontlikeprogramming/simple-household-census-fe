import { User } from './user';

export interface Household {
  id: number;
  conducted_by: User;
  province: string;
  city: string;
  barangay: string;
  respondent_name: string;
  head: string;
  address: string;
  member_count: number;
  created_at: string;
  updated_at: string;
}
