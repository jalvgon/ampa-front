import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation.component';
import { ClarityModule } from "@clr/angular";
@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,

    FormsModule,
  ],
  declarations: [],
  providers: [],
  exports: [],
})
export class NavigationModule {}
