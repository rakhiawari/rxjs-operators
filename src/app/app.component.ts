import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, Subject, Subscription, zip, forkJoin, observable } from 'rxjs';
import { withLatestFrom, map,concat, merge } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  ngOnInit(){
 
  }
  
  observable1 = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
  });
  observable2 = new Observable(subscriber => {
    subscriber.next('a');
    subscriber.next('b');
    subscriber.next('c');
  });
  
 

  // combined1 = combineLatest(this.observable1, this.observable2).subscribe(value => console.log(value));
  // combined2 = zip(this.observable1, this.observable2).subscribe(value => console.log(value));
  // combined3 = forkJoin(this.observable1, this.observable2).subscribe(value => console.log(value));
  // combined4 = this.observable1.pipe(withLatestFrom(this.observable2),map(value => console.log(value)));
  // combined5 = merge(this.observable1, this.observable2).pipe(map());
  combined5 = this.observable1.pipe(merge(this.observable2)).subscribe(val => console.log(val));


}
