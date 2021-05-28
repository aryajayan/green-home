import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/image.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  imageList: Image[] = [
    {
      source: 'assets/images/plant1.jpg',
      title: 'plant1',
    },
    {
      source: 'assets/images/plant2.jpg',
      title: 'plant2',
    },
    {
      source: 'assets/images/plant3.jpg',
      title: 'plant3',
    },
    {
      source: 'assets/images/plant4.jpg',
      title: 'plant4',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
