import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state.interface';
import * as actions from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador: number;

  constructor( private _store: Store<AppState>) {
    this.contador = 0;
    this._store
    .select('contador')
    .subscribe( contador => {
      this.contador = contador;
      console.log(contador);
    });
  }

  incrementar() {
    this._store.dispatch(actions.incrementar());
  }

  decrementar() {
    this._store.dispatch(actions.decrementar());
  }


}
