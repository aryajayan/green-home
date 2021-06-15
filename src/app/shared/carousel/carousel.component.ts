import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '../image.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() imageList: Image[];

  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;

    config.wrap = true;

    config.keyboard = false;

    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    console.log(this.imageList);
  }
}
