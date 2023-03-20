import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/model/user.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
})
export class UserDialogComponent {
  user: User | undefined;

  name = '';
  email = '';
  password = '';
  password_confirmation = '';

  confirm = false;

  new_password = '';

  constructor(
    private _userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private _dialogRef: MatDialogRef<UserDialogComponent>
  ) {
    if (data == null) {
      this.name = '';
      this.email = '';
      this.password = '';
      this.password_confirmation = '';
    } else {
      this.user = data;
      this.name = this.user.name;
      this.email = this.user.email;
    }
  }

  async register() {
    const res = await this._userService.register(
      this.name,
      this.email,
      this.password,
      this.password_confirmation
    );
    if (res != null) {
      this._dialogRef.close(true);
    }
  }

  async resetPassword() {
    if (this.confirm) {
      const res = await this._userService.resetPassword(this.user!.id);
      if (res != null) {
        this.confirm = false;
        this.new_password = res.data['new_password'];
      }
    }
  }
}
