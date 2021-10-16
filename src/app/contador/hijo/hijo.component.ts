import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  @Input() contador: number;

  @Output() cambioContador = new EventEmitter<number>();

  constructor() {
    this.contador = 0;
  }

  ngOnInit(): void {
  }


  multiplicar() {
    this.contador *=2;
    this.cambioContador.emit(this.contador);
  }

  division() {
    this.contador /=2;
    this.cambioContador.emit(this.contador);
  }

}
