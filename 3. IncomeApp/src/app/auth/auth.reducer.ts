import * as AuthActions from './auth.actions';
import { User } from './user.model';

export interface AuthState { user: User; }
const initState: AuthState = { user: null };

export function AuthReducer(state = initState, action: AuthActions.actions): AuthState {
  switch (action.type) {
    case AuthActions.SET_USER:
      return { user: {...action.user} };
    default:
      return state;
  }
}