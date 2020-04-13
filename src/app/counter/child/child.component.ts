import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/interfaces/app-state.interface';
import { multiplicate, division } from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {

  counter: number;

  constructor(
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.store.select('counter').subscribe(counter => this.counter = counter );
  }

  multiplicate() {
    this.store.dispatch(multiplicate({num: 3}));
  }

  division() {
    this.store.dispatch(division({num: 2}));
  }

}
