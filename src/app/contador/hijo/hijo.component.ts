import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.interface';
import * as actions from '../../contador/contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private _store: Store<AppState>) {
    this.contador = 0;
  }

  ngOnInit(): void {
    this._store.select('contador').subscribe(contador=> this.contador = contador );
  }


  multiplicar() {
    this._store.dispatch(actions.multiplicar({numero: 2}));
  }

  division() {
    this._store.dispatch(actions.dividir({numero: 2}));
  }
}
