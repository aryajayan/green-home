import { createSelector } from '@ngrx/store';
import * as fromApp from './app.reducer';

export const selectAppState = (state: fromApp.AppState) => state;
