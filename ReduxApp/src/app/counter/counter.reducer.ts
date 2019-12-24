import * as counterActions from './counter.actions';

export function counterReducer(state: number = 10, action: counterActions.actions) {
    switch(action.type) {
        case counterActions.INCREASE:
            return state + 1;
        case counterActions.DECREASE:
            return state - 1;
        case counterActions.MULTIPLY:
            return state * action.payload;
        case counterActions.DIVIDE:
            return state / action.payload;
        case counterActions.RESET:
            return 0;
        default:
            return state;
    }
}