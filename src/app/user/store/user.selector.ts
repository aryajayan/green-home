import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';
import * as AppSelector from '../../app.selector';

// export const selectUserState = createSelector(
//   AppSelector.selectAppState,
//   (state) => state.user
// );
export const selectUserState = createFeatureSelector(fromUser.userFeatureKey);

export const selectUser = createSelector(
  selectUserState,
  (state) => state['user']
);

export const selectError = createSelector(
  selectUserState,
  (state) => state['error']
);
