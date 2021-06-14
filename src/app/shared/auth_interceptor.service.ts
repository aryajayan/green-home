import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { exhaustMap, map, switchMap, take } from 'rxjs/operators';
import * as fromUser from '../user/store/user.reducer';
import { selectUser } from '../user/store/user.selector';
import { User } from './user.model';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private store: Store<fromUser.State>) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return this.store.select(selectUser).pipe(
      exhaustMap((user) => {
        if (user !== null) {
          let newRequest = request.clone({
            params: new HttpParams().set('auth', user.token),
          });
          return next.handle(newRequest);
        }
        return next.handle(request);
      })
    );
  }
}
