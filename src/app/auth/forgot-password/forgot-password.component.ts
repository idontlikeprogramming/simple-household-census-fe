import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/model/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  email = '';

  constructor(private _authService: AuthService) {}

  submit() {
    this._authService.requestNewPassword(this.email);
  }
}
