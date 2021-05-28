import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { DetailsComponent } from './details/details.component';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class HomeModule {}
