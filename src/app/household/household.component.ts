import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/user';
import { AuthService } from '../services/model/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.scss'],
})
export class HouseholdComponent {
  name = environment.name;
  user!: User;

  constructor(
    private _authService: AuthService,
    _storageService: StorageService
  ) {
    this.user = _storageService.get('user');
  }

  logout() {
    this._authService.logout();
  }
}
