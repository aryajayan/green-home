import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as fromUser from '../user/store/user.reducer';
import { DropdownDirective } from './dropdown.directive';
import { ModalComponent } from './modal/modal.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../user/store/uesr.effect';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    CarouselComponent,
    DropdownDirective,
    ModalComponent,
    CardCarouselComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.userReducer),
    EffectsModule.forFeature([UserEffects]),
    CarouselModule,
    ButtonModule,
    ToastModule,
  ],
  exports: [CarouselComponent, DropdownDirective, CardCarouselComponent],
})
export class SharedModule {}
