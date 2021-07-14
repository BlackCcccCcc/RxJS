import { Component, OnInit } from '@angular/core';
import { Observable, observable, Observer } from 'rxjs';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.sass']
})
export class Comp4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const onSubscrible = (observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
    };
    const souce$ = new Observable(onSubscrible);
    souce$.subscribe(console.log);
  }



}
