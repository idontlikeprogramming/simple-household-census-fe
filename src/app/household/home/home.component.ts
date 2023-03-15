import { Component, OnInit } from '@angular/core';
import { HouseholdMember } from 'src/app/interfaces/household-member';
import { HouseholdMemberService } from 'src/app/services/model/household-member.service';
import { StatsService } from 'src/app/services/model/stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  senior = 0;
  pwd = 0;
  solo = 0;

  list: HouseholdMember[] = [];

  current_page = 1;
  has_prev_page = false;
  has_next_page = false;
  from = 0;
  to = 0;

  limit = 10;
  category: string | undefined;

  constructor(
    private _statsService: StatsService,
    private _householdMember: HouseholdMemberService
  ) {}

  ngOnInit(): void {
    this.getCounts();
    this.getList();
  }

  async getCounts() {
    const res = await this._statsService.getCounts();
    if (res != null) {
      this.senior = res.data['seniors'];
      this.pwd = res.data['pwds'];
      this.solo = res.data['solo_parents'];
    }
  }

  async getList() {
    const res = await this._householdMember.general(
      this.category,
      this.limit,
      this.current_page
    );
    if (res != null) {
      this.list = res.data['data'];
      this.current_page = res.data['current_page'];
      this.has_prev_page = res.data['prev_page_url'] != null;
      this.has_next_page = res.data['next_page_url'] != null;
      this.from = res.data['from'] ?? 0;
      this.to = res.data['to'] ?? 0;
    }
  }

  paginate(page: number) {
    this.current_page = page;
    this.getList();
  }

  selectSector(sector: any) {
    this.category = sector;
    this.current_page = 1;
    this.getList();
  }

  selectLimit(limit: number) {
    this.limit = limit;
    this.current_page = 1;
    this.getList();
  }
}
