import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddHouseholdComponent } from 'src/app/dialogs/add-household/add-household.component';
import { Household } from 'src/app/interfaces/household';
import { HouseholdService } from 'src/app/services/model/household.service';

@Component({
  selector: 'app-household-list',
  templateUrl: './household-list.component.html',
  styleUrls: ['./household-list.component.scss'],
})
export class HouseholdListComponent implements OnInit {
  category = '';
  list: Household[] = [];

  current_page = 1;
  has_prev_page = false;
  has_next_page = false;
  from = 0;
  to = 0;

  search = '';
  conducted_by_id: any;

  constructor(
    _route: ActivatedRoute,
    private _householdService: HouseholdService,
    private _dialog: MatDialog
  ) {
    _route.queryParams.subscribe((params) => {
      console.log(params);
      this.category = params['category'];
    });
  }

  ngOnInit(): void {
    this.getList();
  }

  async getList() {
    const res = await this._householdService.list(
      this.search,
      this.conducted_by_id
    );
    if (res != null) {
      this.list = res.data['data'];
      this.current_page = res.data['current_page'];
      this.has_prev_page = res.data['prev_page_url'] != null;
      this.has_next_page = res.data['prev_next_url'] != null;
      this.from = res.data['from'] ?? 0;
      this.to = res.data['to'] ?? 0;
    }
  }

  openAddDialog() {
    let dialogRef = this._dialog.open(AddHouseholdComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getList();
      }
    });
  }

  openEditDialog(item: Household) {
    let dialogRef = this._dialog.open(AddHouseholdComponent, {
      width: '600px',
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getList();
      }
    });
  }
}
