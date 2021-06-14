import { createAction, props } from '@ngrx/store';
import { Product } from '../product.model';

export const FetchProducts = createAction('[Product] Fetch Products');
export const FetchProductSuccess = createAction(
  '[Product] Fetch Product Success',
  props<{ products: Product[] }>()
);

export const AddProduct = createAction(
  '[Product] Add Product',

  props<{
    name: string;
    price: number;
    description: string;
    image: string;
    soldCount: number;
  }>()
);

export const AddProductSuccess = createAction(
  '[Product] Add Product Success',

  props<{
    name: string;
    price: number;
    description: string;
    image: string;
    soldCount: number;
  }>()
);

export const ErrorOccured = createAction(
  '[Product] Error Occured',
  props<{
    error: string;
  }>()
);
