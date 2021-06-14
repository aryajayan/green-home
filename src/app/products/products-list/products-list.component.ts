import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProduct from '../store/product.reducer';
import { selectProducts } from '../store/product.selector';
import * as ProductActions from '../store/product.action';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  allProducts: Product[] = [];
  featured: Product[] = [];
  constructor(private store: Store<fromProduct.State>) {}

  ngOnInit(): void {
    this.store.select(selectProducts).subscribe((data) => {
      if (data == null) {
        this.store.dispatch(ProductActions.FetchProducts());
      } else {
        this.featured = data.filter((item: Product) => item.soldCount > 10);
        this.allProducts = data;
      }
    });
  }
}
