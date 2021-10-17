import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

interface AppState {
  contador: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador: number;

  constructor( private _store: Store<AppState>) {
    this.contador = 0;
    this._store.subscribe( state => {
      this.contador = state.contador;
      console.log(state);
    });
  }

  incrementar() {
    this._store.dispatch(actions.incrementar());
  }

  decrementar() {
    this._store.dispatch(actions.decrementar());
  }


}
