import { User } from '../../models/user.model';
import * as fromUsers from '../actions';

export interface UsersState {
  users: User[],
  loaded: boolean,
  loading: boolean,
  error: any
}

const initState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

export function usersReducer(state = initState, action: fromUsers.usersActions): UsersState {
  switch (action.type) {
    case fromUsers.FETCH_USERS:
      return { ...state, loading: true };
    case fromUsers.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, loaded: true, users: [...action.users] };
    case fromUsers.FETCH_USERS_FAIL:
      return { 
        ...state, 
        loading: false, 
        loaded: false, 
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        } 
      };
    default:
      return state;
  }
}