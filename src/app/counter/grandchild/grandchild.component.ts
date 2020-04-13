import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/interfaces/app-state.interface';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: []
})
export class GrandchildComponent implements OnInit {

  counter: number;

  constructor(
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.store.select('counter').subscribe(counter => this.counter = counter );
  }

  reset() {
    this.store.dispatch(reset());
  }
}
