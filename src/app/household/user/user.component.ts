import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from 'src/app/dialogs/user-dialog/user-dialog.component';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/model/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private _userService: UserService, private _dialog: MatDialog) {}

  ngOnInit(): void {
    this.getList();
  }

  async getList() {
    const res = await this._userService.list();
    if (res != null) {
      console.log(res.data);
      this.users = res.data;
    }
  }

  openDialog(user: User | undefined) {
    let dialogRef = this._dialog.open(UserDialogComponent, {
      width: '600px',
      data: user,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getList();
      }
    });
  }
}
