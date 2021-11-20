import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state.interface';
import * as actions from '../contador.actions';


@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  contador: number;

  constructor(private _store: Store<AppState>) {
    this.contador = 0;
  }

  ngOnInit(): void {
  }
  
  reset(): void {
    this._store.dispatch(actions.reset());
  }

}
