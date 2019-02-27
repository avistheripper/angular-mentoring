import { UserModel } from '../../core/models/user';
import { AuthActionTypes, All } from '../actions/auth.actions';

export interface State {
    isAuthenticated: boolean;
    user?: UserModel;
    errorMessage?: string;
}

export const initialState: State = {
    isAuthenticated: false,
    user: undefined,
    errorMessage: undefined,
};

export function reducer(state: State = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          login: action.payload.email
        },
        errorMessage: undefined
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
