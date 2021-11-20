import { createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, reset, multiplicar, dividir } from './contador.actions';

export const initialState = 20;
 
const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
  on(reset, () => 0)
);
 
export function contadorReducer(state:any, action:any) {
  return _contadorReducer(state, action);
}