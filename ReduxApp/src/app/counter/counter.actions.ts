import { Action } from '@ngrx/store';
export const INCREASE = '[Counter] Increase';
export const DECREASE = '[Counter] Decrease';

export class IncreaseAction implements Action {
    readonly type = INCREASE;

}
export class DecreaseAction implements Action {
    readonly type = DECREASE;
}

