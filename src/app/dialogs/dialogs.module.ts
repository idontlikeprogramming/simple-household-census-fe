import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHouseholdComponent } from './add-household/add-household.component';
import { MaterialsModule } from '../materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddHouseholdComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AddHouseholdComponent],
})
export class DialogsModule {}
