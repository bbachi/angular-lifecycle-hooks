import { Component, OnInit, AfterContentChecked, AfterContentInit, ContentChild } from '@angular/core';
import { ErrorMessageComponent } from './error-message.component';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, AfterContentChecked, AfterContentInit {

  constructor() {
    console.log('I am from ErrorComponent constructor()!!');
  }

  @ContentChild(ErrorMessageComponent) errorMessage: ErrorMessageComponent;

  numberOfAttempts = 0;

  ngOnInit() {}

  ngAfterContentChecked() {
    // console.log('------ngAfterContentChecked-----');
    // console.log(this.errorMessage.message);
    this.numberOfAttempts = this.errorMessage.numberOfAttempts;
    const date = new Date();
    this.errorMessage.time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() ;
  }

  ngAfterContentInit() {
    // console.log('------ngAfterContentInit-----');
    // console.log(this.errorMessage.message);
    this.errorMessage.message = this.errorMessage.message.toUpperCase();
  }

}
