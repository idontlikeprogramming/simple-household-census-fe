import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HouseholdListComponent } from './household-list/household-list.component';
import { HouseholdComponent } from './household.component';

const routes: Routes = [
  {
    path: '',
    component: HouseholdComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'list',
        component: HouseholdListComponent,
      },
      {
        path: 'member',
        loadChildren: () =>
          import('../household-member/household-member.module').then(
            (m) => m.HouseholdMemberModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseholdRoutingModule {}
