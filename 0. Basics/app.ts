import { Store, createStore } from 'redux';
import { counterReducer } from './counter.reducer';
import { increaser, decreaser, multiplier, divider, reset } from './counter.actions';

const store: Store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(increaser);
store.dispatch(decreaser);
store.dispatch(multiplier);
store.dispatch(divider);
store.dispatch(reset);
