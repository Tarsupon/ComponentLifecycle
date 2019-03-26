import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childName: string = '';
  @Input() count: number = 0;
  @Input() loggerStyle: string = '';
  previousCount: number = 0;

  @Output() change: EventEmitter<CountChangeEventArgs> = new EventEmitter();

  increment() {
    this.count++;
    this.notifyCountChanged();
    this.previousCount++;
  }

  decrement() {
    this.count--;
    this.notifyCountChanged();
    this.previousCount--;
  }

  notifyCountChanged() {
    this.change.emit(new CountChangeEventArgs(this.count, this.previousCount));
  }

  constructor() { }

  ngOnInit() {
    console.log("%cngOnInit" , `${this.loggerStyle}`);
  }

  ngOnChanges(){
    console.log("%cngOnChanges" , `${this.loggerStyle}`);
  }

  ngDoCheck(){
    console.log("%cngDoCheck" , `${this.loggerStyle}`);
  }

  ngAfterContentInit(){
    console.log("%cngAfterContentInit" , `${this.loggerStyle}`);
  }

  ngAfterContentChecked(){
    console.log("%cngAfterContentCheck" , `${this.loggerStyle}`);
  }

  ngAfterViewInit(){
    console.log("%cngAfterViewInit" , `${this.loggerStyle}`);
  }

  ngAfterViewChecked(){
    console.log("%cngAfterViewCheck" , `${this.loggerStyle}`);
  }

  ngOnDestroy(){
    console.log("%cngOnDestroy" , `${this.loggerStyle}`);
  }
}

class CountChangeEventArgs {
  count: number = 0;
  previousCount: number = 0;

  constructor(count, previousCount) {
    this.count = count;
    this.previousCount = previousCount;
  }
}
