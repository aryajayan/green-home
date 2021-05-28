import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';

import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import * as UserActions from '../store/user.action';

@Injectable()
export class UserEffects {
  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.Signup),

      mergeMap((action) =>
        this.http
          .post(
            'https://green-home-9ce8c-default-rtdb.firebaseio.com/user.json',

            {
              name: action.name,
              email: action.email,
              dob: action.dob,
              password: action.password,
            }
          )

          .pipe(
            tap((data) => this.router.navigate(['/home'])),

            map((data) =>
              UserActions.SignupSuccess({
                email: action.email,
                name: action.name,

                dob: action.dob,
                token: data['name'],
                tokenExpirationTime: new Date(
                  new Date().setMilliseconds(
                    new Date().getMilliseconds() + 3600000
                  )
                ),
              })
            ),

            catchError((error) => of(error))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,

    private http: HttpClient,

    private router: Router
  ) {}
}
