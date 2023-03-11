import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseholdMemberRoutingModule } from './household-member-routing.module';
import { HouseholdMemberComponent } from './household-member.component';


@NgModule({
  declarations: [
    HouseholdMemberComponent
  ],
  imports: [
    CommonModule,
    HouseholdMemberRoutingModule
  ]
})
export class HouseholdMemberModule { }
