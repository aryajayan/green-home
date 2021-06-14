import { createReducer, on } from '@ngrx/store';

import { Product } from '../product.model';

import * as ProductActions from './product.action';

export interface State {
  products: Product[];
  error: string;
}

const initialState = {
  products: null,
  error: null,
};

const _productReducer = createReducer(
  initialState,
  on(ProductActions.FetchProductSuccess, (state, action) => ({
    ...state,
    products: action.products,
    error: null,
  })),
  on(ProductActions.AddProduct, (state, action) => ({
    ...state,
    error: null,
  })),
  on(ProductActions.AddProductSuccess, (state, action) => ({
    ...state,
    products: [
      new Product(
        action.name,
        action.price,
        action.description,
        action.image,
        action.soldCount
      ),
      ...state.products,
    ],
    error: null,
  }))
);

export function productReducer(state, action) {
  return _productReducer(state, action);
}

export const productFeatureKey = 'product';
