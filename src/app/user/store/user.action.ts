import { createAction, props } from '@ngrx/store';

export const Signup = createAction(
  '[User] Signup',

  props<{
    email: string;
    name: string;
    dob: Date;
    password: string;
  }>()
);

export const AuthSuccess = createAction(
  '[User] Auth Success',

  props<{
    email: string;
    name: string;
    token: string;
    tokenExpirationTime: Date;
  }>()
);

export const AuthFail = createAction(
  '[User] Auth Fail',
  props<{
    error: string;
  }>()
);

export const Login = createAction(
  '[User] Login',

  props<{
    email: string;
    password: string;
  }>()
);
