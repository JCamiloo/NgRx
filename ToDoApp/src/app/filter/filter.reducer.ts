import * as filterActions from './filter.actions';

const initState: filterActions.validFilters = 'all';

export function filterReducer (state = initState, action: filterActions.actions): filterActions.validFilters {
  switch (action.type) {
    case filterActions.SET_FILTER:
      return action.filter;
      
    default: return state;
  }
}


