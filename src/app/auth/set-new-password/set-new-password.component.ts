import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/model/auth.service';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.scss'],
})
export class SetNewPasswordComponent {
  otp = '';
  password = '';
  password_confirmation = '';

  constructor(private _authService: AuthService) {}

  submit() {
    this._authService.setNewPassword(
      this.otp,
      this.password,
      this.password_confirmation
    );
  }
}
