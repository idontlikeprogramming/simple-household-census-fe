import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private _memberService: HouseholdMemberService
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
}
