import { Actions } from '@ngrx/effects';

import { createReducer, on } from '@ngrx/store';

import { User } from 'src/app/shared/user.model';

import * as UserActions from '../store/user.action';

export interface State {
  user: User;
}

const initialState = {
  user: null,
};

const _userReducer = createReducer(
  initialState,

  on(UserActions.SignupSuccess, (state, action) => ({
    ...state,

    user: new User(
      action.email,
      action.name,
      action.dob,
      action.token,
      action.tokenExpirationTime
    ),
  }))
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
