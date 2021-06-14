import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';

import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import * as UserActions from '../store/user.action';
import * as fromUser from './user.reducer';
import { Store } from '@ngrx/store';

interface Response {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable()
export class UserEffects {
  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.Signup),
      exhaustMap((action) =>
        this.http
          .post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCgX46Gu12bTfL5jpfQlH6bVg8wptF-XO4',
            {
              email: action.email,
              password: action.password,
              returnSecureToken: true,
            }
          )
          .pipe(
            map((data: Response) =>
              UserActions.AuthSuccess({
                email: action.email,
                name: action.name,
                token: data.idToken,
                tokenExpirationTime: new Date(
                  new Date().getTime() + +data.expiresIn * 1000
                ),
              })
            ),
            catchError((error) => of(UserActions.AuthFail({ error: error })))
          )
      )
    )
  );

  authSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.AuthSuccess),
        tap((action) => this.router.navigate(['/home']))
      ),
    { dispatch: false }
  );

  authFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.AuthFail),
        tap((action) => console.log(action.error))
      ),
    { dispatch: false }
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.Login),
      exhaustMap((action) =>
        this.http
          .post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCgX46Gu12bTfL5jpfQlH6bVg8wptF-XO4',
            {
              email: action.email,
              password: action.password,
              returnSecureToken: true,
            }
          )
          .pipe(
            map((data: Response) =>
              UserActions.AuthSuccess({
                email: action.email,
                name: action.email,
                token: data.idToken,
                tokenExpirationTime: new Date(
                  new Date().getTime() + +data.expiresIn * 1000
                ),
              })
            ),
            catchError((error) => of(UserActions.AuthFail({ error: error })))
          )
      )
    )
  );
  constructor(
    private actions$: Actions,

    private http: HttpClient,

    private router: Router,
    private store: Store<fromUser.State>
  ) {}
}
