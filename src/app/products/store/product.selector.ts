import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from './product.reducer';
import * as AppSelector from '../../app.selector';

export const selectProductState = createFeatureSelector(
  fromProduct.productFeatureKey
);

export const selectProducts = createSelector(
  selectProductState,
  (state) => state['products']
);

export const selectError = createSelector(
  selectProductState,
  (state) => state['error']
);
