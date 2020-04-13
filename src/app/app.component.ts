import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './counter/counter.actions';
import { AppStateInterface } from './interfaces/app-state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  counter: number;

  constructor(
    private store: Store<AppStateInterface>
  ) {
    this.store.select('counter').subscribe(counter => this.counter = counter );
  }

  increment() {
    this.store.dispatch(actions.increment());
  }

  decrement() {
    this.store.dispatch(actions.decrement());
  }
}
