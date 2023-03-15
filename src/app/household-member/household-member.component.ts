import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MemberDialogComponent } from '../dialogs/member-dialog/member-dialog.component';
import { Household } from '../interfaces/household';
import { HouseholdMember } from '../interfaces/household-member';
import { HouseholdMemberService } from '../services/model/household-member.service';

@Component({
  selector: 'app-household-member',
  templateUrl: './household-member.component.html',
  styleUrls: ['./household-member.component.scss'],
})
export class HouseholdMemberComponent implements OnInit {
  hashid = '';
  category: string | undefined;
  household: Household | undefined;
  members: HouseholdMember[] = [];

  constructor(
    _route: ActivatedRoute,
    private _memberService: HouseholdMemberService,
    private _dialog: MatDialog
  ) {
    _route.params.subscribe((params) => {
      this.hashid = params['hashid'];
    });
    _route.queryParams.subscribe((params) => {
      this.category = params['category'] ?? undefined;
    });
  }

  ngOnInit(): void {
    this.getList();
  }

  async getList() {
    const res = await this._memberService.list(this.hashid, this.category);
    if (res != null) {
      console.log(res.data);
      this.household = res.data['household'];
      this.members = res.data['members'];
    }
  }

  openAddDialog() {
    let dialogRef = this._dialog.open(MemberDialogComponent, {
      width: '600px',
      data: {
        household_id: this.household?.id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getList();
      }
    });
  }

  openEditDialog(member: HouseholdMember) {
    let dialogRef = this._dialog.open(MemberDialogComponent, {
      width: '600px',
      data: {
        household_id: this.household?.id,
        member: member,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getList();
      }
    });
  }
}
