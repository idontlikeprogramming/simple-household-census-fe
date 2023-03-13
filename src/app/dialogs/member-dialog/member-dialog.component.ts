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

  constructor(
    private _householdMember: HouseholdMemberService,
    @Inject(MAT_DIALOG_DATA) public data: HouseholdMember,
    private _dialogRef: MatDialogRef<MemberDialogComponent>
  ) {
    console.log(data);
    if (data == null) {
      this.resetValues();
    } else {
    }
  }

  resetValues() {}
}
