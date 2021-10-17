import { Action } from '@ngrx/store';
import { incrementar, decrementar, reset } from './contador.actions';

export function contadorReducer( state: number = 10, action: Action){
  switch(action.type) {
    case incrementar.type:
      return state + 1;
    case decrementar.type:
      return state - 1;
    case reset.type:
      return 0;
    default:
      return state;
  }
}