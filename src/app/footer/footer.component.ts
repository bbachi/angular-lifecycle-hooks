import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy,
  SimpleChanges,
  AfterContentInit,
  Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges, DoCheck, AfterViewInit,
        AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewChecked, OnDestroy {

  order = 1;
  @Input() footerText;
  @Input() numberOfItems: number;

  constructor() {
    // console.log('I am from constructor()!! and my order::::' + this.order);
    console.log('I am from FooterComponent constructor()!!');
    this.order++;
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('I am from ngOnChanges()!! and my order::::' + this.order);
    this.order++;
  }

  ngOnInit() {
    // console.log('I am from ngOnInit() and my order::::' + this.order);
    this.order++;
  }

  ngDoCheck() {
    // console.log('I am from ngDoCheck() and my order::::' + this.order);
    this.order++;
  }

  ngAfterContentInit() {
    // console.log('I am from ngAfterContentInit() and my order::::' + this.order);
    this.order++;
  }

  ngAfterContentChecked() {
    // console.log('I am from ngAfterContentChecked() and my order::::' + this.order);
    this.order++;
  }

  ngAfterViewInit() {
    // console.log('I am from ngAfterViewInit() and my order::::' + this.order);
    this.order++;
  }

  ngAfterViewChecked() {
    // console.log('I am from ngAfterViewChecked() and my order::::' + this.order);
    this.order++;
  }

  ngOnDestroy() {
    // console.log('I am from ngOnDestroy() and my order::::' + this.order);
    this.order++;
  }

}
