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

export const SignupSuccess = createAction(
  '[User] Signup Success',

  props<{
    email: string;

    name: string;

    dob: Date;

    token: string;

    tokenExpirationTime: Date;
  }>()
);
