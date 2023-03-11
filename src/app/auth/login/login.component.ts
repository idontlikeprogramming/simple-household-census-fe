import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/model/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private _authService: AuthService,
    private _storageService: StorageService,
    private _snackbar: MatSnackBar
  ) {
    this.email = _storageService.get('email', '');
    this.password = _storageService.get('password', '');
  }

  submit() {
    this._storageService.set('email', this.email);
    this._storageService.set('password', this.password);
    this._authService.login(this.email, this.password);
  }
}
