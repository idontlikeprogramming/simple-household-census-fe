import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseholdComponent } from './household.component';

const routes: Routes = [
  { path: '', component: HouseholdComponent },
  {
    path: 'member',
    loadChildren: () =>
      import('../household-member/household-member.module').then(
        (m) => m.HouseholdMemberModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseholdRoutingModule {}
