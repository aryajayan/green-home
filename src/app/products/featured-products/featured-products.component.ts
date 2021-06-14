import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product.model';
import * as fromProduct from '../store/product.reducer';
import { selectProducts } from '../store/product.selector';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css'],
})
export class FeaturedProductsComponent implements OnInit {
  @Input() products: Product[] = [];
  constructor(private store: Store<fromProduct.State>) {}

  ngOnInit(): void {
    // this.store.select(selectProducts).subscribe((data) => {
    //   this.products = data;
    // });
    // this.products = [
    //   {
    //     name: 'test',
    //     price: 100,
    //     image:
    //       'https://firebasestorage.googleapis.com/v0/b/green-home-9ce8c.appspot.com/o/buy-zz-plant-in-india.jpg?alt=media&token=c4feccd4-cf80-4d63-a91d-87f88ef27527',
    //     description: '',
    //   },
    //   {
    //     name: 'test2',
    //     price: 100,
    //     image:
    //       'https://firebasestorage.googleapis.com/v0/b/green-home-9ce8c.appspot.com/o/buy-zz-plant-in-india.jpg?alt=media&token=c4feccd4-cf80-4d63-a91d-87f88ef27527',
    //     description: '',
    //   },
    //   {
    //     name: 'test3',
    //     price: 100,
    //     image:
    //       'https://firebasestorage.googleapis.com/v0/b/green-home-9ce8c.appspot.com/o/buy-zz-plant-in-india.jpg?alt=media&token=c4feccd4-cf80-4d63-a91d-87f88ef27527',
    //     description: '',
    //   },
    //   {
    //     name: 'test4',
    //     price: 100,
    //     image:
    //       'https://firebasestorage.googleapis.com/v0/b/green-home-9ce8c.appspot.com/o/buy-zz-plant-in-india.jpg?alt=media&token=c4feccd4-cf80-4d63-a91d-87f88ef27527',
    //     description: '',
    //   },
    //   {
    //     name: 'test5',
    //     price: 100,
    //     image:
    //       'https://firebasestorage.googleapis.com/v0/b/green-home-9ce8c.appspot.com/o/buy-zz-plant-in-india.jpg?alt=media&token=c4feccd4-cf80-4d63-a91d-87f88ef27527',
    //     description: '',
    //   },
    // ];
  }
}
