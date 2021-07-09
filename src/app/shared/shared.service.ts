import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<any>();

  constructor() { }

  sendMessage(num: number | undefined): void{
    console.log(num);
    this.subject.next(num);
  }

  cleanMessage(): void{
    this.subject.next();
  }

  getMessage(): Observable<number> {
    return this.subject.asObservable();
  }
}
