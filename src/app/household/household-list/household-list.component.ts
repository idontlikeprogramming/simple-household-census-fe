import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddHouseholdComponent } from 'src/app/dialogs/add-household/add-household.component';
import { Household } from 'src/app/interfaces/household';
import { User } from 'src/app/interfaces/user';
import { HouseholdService } from 'src/app/services/model/household.service';
import { UserService } from 'src/app/services/model/user.service';

@Component({
  selector: 'app-household-list',
  templateUrl: './household-list.component.html',
  styleUrls: ['./household-list.component.scss'],
})
export class HouseholdListComponent implements OnInit {
  category = ''; // Not here
  list: Household[] = [];
  users: User[] = [];

  current_page = 1;
  has_prev_page = false;
  has_next_page = false;
  from = 0;
  to = 0;

  search = '';
  conducted_by_id: any;
  conductor_name: any;

  constructor(
    _route: ActivatedRoute,
    private _householdService: HouseholdService,
    private _dialog: MatDialog,
    private _userService: UserService
  ) {
    _route.queryParams.subscribe((params) => {
      console.log(params);
      this.category = params['category'];
    });
  }

  ngOnInit(): void {
    this.getList();
    this.getUsers();
  }

  find() {
    this.current_page = 1;
    this.getList();
  }

  selectConductor(user: User | null) {
    if (user != null) {
      this.conducted_by_id = user.id;
      this.conductor_name = user.name;
    } else {
      this.conducted_by_id = undefined;
      this.conductor_name = undefined;
    }
    this.getList();
  }

  async getUsers() {
    const res = await this._userService.list();
    if (res != null) {
      this.users = res.data;
    }
  }

  async getList() {
    const res = await this._householdService.list(
      this.search,
      this.conducted_by_id,
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

  paginate(page: number) {
    this.current_page = page;
    this.getList();
  }
}
