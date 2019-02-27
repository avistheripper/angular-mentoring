import * as auth from './reducers/auth.reducer';
import { All } from './actions/auth.actions';

export interface AppState {
    authState: auth.State;
}

export const reducers: Record<string, (state: auth.State, action: All) => auth.State> = {
    auth: auth.reducer
};
