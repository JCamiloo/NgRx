import { Action } from "./ngrx";

export const increaser: Action = { 
    type: 'INCREASE' 
};

export const decreaser: Action = { 
    type: 'DECREASE' 
};

export const multiplier: Action = { 
    type: 'MULTIPLY', payload: 2 
};

export const divider: Action = { 
    type: 'DIVIDE', 
    payload: 2 
};

export const reset: Action = { 
    type: 'RESET' 
};
