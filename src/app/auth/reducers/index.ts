import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { User } from "../model/user.model";
import { AuthActions } from "../action-types";
import { logout, login } from "../auth.actions";

export interface AuthState {
  user: User;
}
export const initialAuthState: AuthState = {
  user: undefined,
};

// function authReducer(state, action): AuthState {}

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {
    // console.log("calling loin REducer");

    // debugger;
    return {
      user: action.user,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined,
    };
  })
);
