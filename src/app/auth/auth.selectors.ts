import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AuthState, authReducer } from "./reducers";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const isLoggedIn = createSelector(
  //mapping function with memory
  selectAuthState, //(state) => state["auth"],
  (auth) => !!auth.user //!! statement to boolean
);
export const isLoggedOut = createSelector(
  //mapping function with memory
  isLoggedIn,
  (loggedIn) => !loggedIn
);
