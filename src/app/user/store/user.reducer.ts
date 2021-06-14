import { Actions } from '@ngrx/effects';

import { createReducer, on } from '@ngrx/store';

import { User } from 'src/app/shared/user.model';

import * as UserActions from '../store/user.action';

export interface State {
  user: User;
  error: string;
}

const initialState = {
  user: null,
  error: null,
};

const _userReducer = createReducer(
  initialState,
  on(UserActions.Signup, (state, action) => ({
    ...state,
    user: null,
    error: null,
  })),
  on(UserActions.AuthSuccess, (state, action) => ({
    ...state,
    user: new User(
      action.email,
      action.name,
      action.token,
      action.tokenExpirationTime
    ),
    error: null,
  })),
  on(UserActions.AuthFail, (state, action) => ({
    ...state,
    user: null,
    error: action.error,
  })),
  on(UserActions.Login, (state, action) => ({
    ...state,
    user: null,
    error: null,
  }))
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}

export const userFeatureKey = 'user';
