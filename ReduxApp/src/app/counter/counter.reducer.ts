import { actions, INCREASE, DECREASE, MULTIPLY, DIVIDE } from './counter.actions';

export function counterReducer(state: number = 10, action: actions) {
    switch(action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        case MULTIPLY:
            return state * action.payload;
        case DIVIDE:
            return state / action.payload;
        default:
            return state;
    }
}