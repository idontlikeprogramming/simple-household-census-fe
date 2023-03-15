import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HouseholdMember } from 'src/app/interfaces/household-member';
import { HouseholdMemberService } from 'src/app/services/model/household-member.service';

@Component({
  selector: 'app-member-dialog',
  templateUrl: './member-dialog.component.html',
  styleUrls: ['./member-dialog.component.scss'],
})
export class MemberDialogComponent {
  member: HouseholdMember | undefined;
  household_id!: number;

  first_name = '';
  middle_name = '';
  last_name = '';
  relationship_to_head = '';
  sex = '';
  birth_date = '';
  place_of_birth = '';
  is_lgbtqm = false;
  is_pwd = false;
  is_solo_parent = false;

  confirm = false;

  constructor(
    private _householdMember: HouseholdMemberService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      member: HouseholdMember;
      household_id: number;
    },
    private _dialogRef: MatDialogRef<MemberDialogComponent>
  ) {
    console.log(data);
    this.household_id = data.household_id;
    if (data == null || data.member == null) {
      this.resetValues();
    } else {
      console.log(data);
      this.member = data.member;
      this.first_name = this.member.first_name;
      this.middle_name = this.member.middle_name;
      this.last_name = this.member.last_name;
      this.relationship_to_head = this.member.relationship_to_head;
      this.sex = this.member.sex;
      this.birth_date = this.member.birth_date;
      this.place_of_birth = this.member.place_of_birth;
      this.is_lgbtqm = this.member.is_lgbtqm;
      this.is_pwd = this.member.is_pwd;
      this.is_solo_parent = this.member.is_solo_parent;
    }
  }

  resetValues() {
    this.first_name = '';
    this.middle_name = '';
    this.last_name = '';
    this.relationship_to_head = '';
    this.sex = '';
    this.birth_date = '';
    this.place_of_birth = '';
    this.is_lgbtqm = false;
    this.is_pwd = false;
    this.is_solo_parent = false;
  }

  async submit() {
    if (this.member == undefined) {
      const res = await this._householdMember.add(
        this.household_id,
        this.first_name,
        this.middle_name,
        this.last_name,
        this.relationship_to_head,
        this.sex,
        this.birth_date,
        this.place_of_birth,
        this.is_lgbtqm,
        this.is_pwd,
        this.is_solo_parent
      );
      if (res != null) {
        this._dialogRef.close(true);
      }
    } else {
      const res = await this._householdMember.update(
        this.member.id,
        this.first_name,
        this.middle_name,
        this.last_name,
        this.relationship_to_head,
        this.sex,
        this.birth_date,
        this.place_of_birth,
        this.is_lgbtqm,
        this.is_pwd,
        this.is_solo_parent
      );
      if (res != null) {
        this._dialogRef.close(true);
      }
    }
  }

  async delete() {
    if (this.confirm && this.member != undefined) {
      const res = await this._householdMember.delete(this.member.id);
      if (res != null) {
        this._dialogRef.close(true);
      }
    }
  }
}
