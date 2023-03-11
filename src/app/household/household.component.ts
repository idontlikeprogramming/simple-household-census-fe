import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AuthService } from '../services/model/auth.service';

@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.scss'],
})
export class HouseholdComponent {
  name = environment.name;

  constructor(private _authService: AuthService) {}

  logout() {
    this._authService.logout();
  }
}
