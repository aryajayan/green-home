import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [CarouselComponent, DropdownDirective],
  imports: [CommonModule, NgbModule],
  exports: [CarouselComponent, DropdownDirective],
})
export class SharedModule {}
