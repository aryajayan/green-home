import { createReducer, on } from '@ngrx/store';

import { Product } from '../product.model';

import * as ProductActions from './product.action';

export interface State {
  products: Product[];
  error: string;
  loading: boolean;
}

const initialState = {
  products: null,
  error: null,
  loading: false,
};

const _productReducer = createReducer(
  initialState,
  on(ProductActions.FetchProducts, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(ProductActions.FetchProductSuccess, (state, action) => ({
    ...state,
    products: action.products,
    error: null,
    loading: false,
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
