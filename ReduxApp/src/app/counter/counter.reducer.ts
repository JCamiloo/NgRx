import { Action } from '@ngrx/store';

export function counterReducer(state: number = 10, action: Action) {
    switch(action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}