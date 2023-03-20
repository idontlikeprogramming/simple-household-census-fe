import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/model/user.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent {
  name: string = '';

  current_password = '';
  password = '';
  password_confirmation = '';

  constructor(
    private _userService: UserService,
    private _storageService: StorageService
  ) {
    const user: User = _storageService.get('user');
    this.name = user.name;
  }

  async update() {
    const res = await this._userService.updateMyAccount(this.name);
    if (res != null) {
      this._storageService.set('user', res.data);
    }
  }

  async changePassword() {
    const res = await this._userService.changePassword(
      this.current_password,
      this.password,
      this.password_confirmation
    );
    if (res != null) {
      this.current_password = '';
      this.password = '';
      this.password_confirmation = '';
    }
  }
}
