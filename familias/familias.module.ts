import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FamiliasRoutingModule } from './familias-routing.module';
import { AddFamiliaComponent } from './add-familia/add-familia.component';
import { FamiliasListComponent } from './familias-list/familias-list.component';
import { EditFamiliaComponent } from './edit-familia/edit-familia.component';

@NgModule({
  declarations: [
    FamiliasListComponent,
    AddFamiliaComponent,
    EditFamiliaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FamiliasRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: []
})
export class FamiliasModule { }
