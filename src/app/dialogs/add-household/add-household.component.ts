import {
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Household } from 'src/app/interfaces/household';
import { HouseholdService } from 'src/app/services/model/household.service';

@Component({
  selector: 'app-add-household',
  templateUrl: './add-household.component.html',
  styleUrls: ['./add-household.component.scss'],
})
export class AddHouseholdComponent implements OnInit, OnChanges {
  provinces: string[] = [];
  cities: string[] = [];
  barangays: string[] = [];

  id: any;
  province = '';
  city = '';
  barangay = '';
  respondent_name = '';
  head = '';
  member_count = 0;
  address = '';

  household: Household | undefined;

  confirm = false;

  constructor(
    private _householdService: HouseholdService,
    @Inject(MAT_DIALOG_DATA) public data: Household,
    private _dialogRef: MatDialogRef<AddHouseholdComponent>
  ) {
    console.log(data);
    if (data == null) {
      this.resetValues();
    } else {
      this.id = data.id;
      this.province = data.province;
      this.city = data.city;
      this.barangay = data.barangay;
      this.respondent_name = data.respondent_name;
      this.head = data.head;
      this.member_count = data.member_count;
      this.address = data.address;
      this.household = data;
    }
  }

  ngOnInit(): void {
    this.getSuggestions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getSuggestions();
  }

  resetValues() {
    this.household = undefined;
    this.id = undefined;
    this.province = '';
    this.city = '';
    this.barangay = '';
    this.respondent_name = '';
    this.head = '';
    this.member_count = 0;
    this.address = '';
  }

  async getSuggestions() {
    const res = await this._householdService.getSuggestions();
    if (res != null) {
      this.provinces = res.data['provinces'];
      this.cities = res.data['cities'];
      this.barangays = res.data['barangays'];
    }
  }

  async submit() {
    if (this.data == null) {
      const res = await this._householdService.create(
        this.province,
        this.city,
        this.barangay,
        this.respondent_name,
        this.head,
        this.member_count,
        this.address
      );
      if (res != null) {
        this._dialogRef.close(true);
      }
    } else {
      const res = await this._householdService.update(
        this.id,
        this.province,
        this.city,
        this.barangay,
        this.respondent_name,
        this.head,
        this.member_count,
        this.address
      );
      if (res != null) {
        this._dialogRef.close(true);
      }
    }
  }

  async delete() {
    if (this.confirm) {
      const res = await this._householdService.delete(this.id);
      if (res != null) {
        this._dialogRef.close(true);
      }
    }
  }
}
