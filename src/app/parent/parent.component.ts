import { Component, OnInit } from '@angular/core';
import {dependenciesFromGlobalMetadata} from '@angular/compiler/src/render3/r3_factory';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  name: string = '';
  totalCount: number = 0;
  parentCount: number = 0;

  nameChange(newName){
    this.name = newName;
  }

  countChange(countChangeEventArgs){
    const count = countChangeEventArgs.count;
    const previousCount = countChangeEventArgs.previousCount;
    this.parentCount = count;
    this.totalCount = count > previousCount ? this.totalCount + 1 : this.totalCount - 1;
  }

  constructor() { }

  ngOnInit() {
    console.log("%cngOnInit" , "color:red");
  }

  ngOnChanges(){
    console.log("%cngOnChanges" , "color:red");
  }

  ngDoCheck(){
    console.log("%cngDoCheck" , "color:red");
  }

  ngAfterContentInit(){
    console.log("%cngAfterContentInit" , "color:red");
  }

  ngAfterContentChecked(){
    console.log("%cngAfterContentCheck" , "color:red");
  }

  ngAfterViewInit(){
    console.log("%cngAfterViewInit" , "color:red");
  }

  ngAfterViewChecked(){
    console.log("%cngAfterViewCheck" , "color:red");
  }

  ngOnDestroy(){
    console.log("%cngOnDestroy" , "color:red");
  }
}
