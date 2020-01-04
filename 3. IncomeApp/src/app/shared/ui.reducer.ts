import * as UIActions from './ui.actions';

export interface State { isLoading: boolean; }
const initState: State = { isLoading: false };

export function UIReducer(state = initState, action: UIActions.actions): State {
  switch(action.type) {
    case UIActions.ACTIVATE_LOADING:
      return { isLoading: true };
    case UIActions.DEACTIVATE_LOADING:
      return { isLoading: false };
  }
}