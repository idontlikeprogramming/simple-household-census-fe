import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseholdMemberComponent } from './household-member.component';

const routes: Routes = [
  { path: '', redirectTo: '/household', pathMatch: 'full' },
  {
    path: ':hashid',
    component: HouseholdMemberComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseholdMemberRoutingModule {}
