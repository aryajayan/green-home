import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './store/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effect';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    ProductsComponent,
    FeaturedProductsComponent,
    ProductsListComponent,
    ProductAddComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromProduct.productFeatureKey,
      fromProduct.productReducer
    ),
    EffectsModule.forFeature([ProductEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent,
        children: [
          { path: '', redirectTo: 'product-list' },
          { path: 'product-list', component: ProductsListComponent },
          { path: 'product-add', component: ProductAddComponent },
        ],
      },
    ]),
  ],
})
export class ProductsModule {}
