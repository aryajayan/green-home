import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';

import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import * as ProductActions from './product.action';
import * as fromProduct from './product.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class ProductEffects {
  fetchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.FetchProducts),
      exhaustMap((action) =>
        this.http
          .get(
            'https://green-home-9ce8c-default-rtdb.firebaseio.com/products.json'
          )
          .pipe(
            map((data) => {
              const productsArray = [];
              for (let key in data) {
                productsArray.push(data[key]);
              }
              return ProductActions.FetchProductSuccess({
                products: productsArray,
              });
            }),
            catchError((error) =>
              of(ProductActions.ErrorOccured({ error: error }))
            )
          )
      )
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.AddProduct),
      exhaustMap((action) =>
        this.http
          .post(
            'https://green-home-9ce8c-default-rtdb.firebaseio.com/products.json',
            {
              name: action.name,
              price: action.price,
              description: action.description,
              image: action.image,
              soldCount: action.soldCount,
            }
          )
          .pipe(
            map((data) =>
              ProductActions.AddProductSuccess({
                name: action.name,
                price: action.price,
                description: action.description,
                image: action.image,
                soldCount: action.soldCount,
              })
            ),
            catchError((error) =>
              of(ProductActions.ErrorOccured({ error: error }))
            )
          )
      )
    )
  );

  // signup$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ProductActions.Signup),
  //     exhaustMap((action) =>
  //       this.http
  //         .post(
  //           'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCgX46Gu12bTfL5jpfQlH6bVg8wptF-XO4',
  //           {}
  //         )
  //         .pipe(
  //           map((data: Response) => ProductActions.AuthSuccess({})),
  //           catchError((error) => of(ProductActions.AuthFail({ error: error })))
  //         )
  //     )
  //   )
  // );

  addProductSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductActions.AddProductSuccess),
        tap((action) => this.router.navigate(['/products/product-list']))
      ),
    { dispatch: false }
  );

  // authFail$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(ProductActions.AuthFail),
  //       tap((action) => console.log(action.error))
  //     ),
  //   { dispatch: false }
  // );

  constructor(
    private actions$: Actions,

    private http: HttpClient,

    private router: Router,
    private store: Store<fromProduct.State>
  ) {}
}
