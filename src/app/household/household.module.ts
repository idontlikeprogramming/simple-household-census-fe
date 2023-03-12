import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseholdRoutingModule } from './household-routing.module';
import { HouseholdComponent } from './household.component';
import { HomeComponent } from './home/home.component';
import { HouseholdListComponent } from './household-list/household-list.component';

@NgModule({
  declarations: [HouseholdComponent, HomeComponent, HouseholdListComponent],
  imports: [CommonModule, HouseholdRoutingModule],
})
export class HouseholdModule {}
