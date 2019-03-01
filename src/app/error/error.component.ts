import { Component, OnInit, AfterContentChecked, AfterContentInit, ContentChild } from '@angular/core';
import { ErrorMessageComponent } from './error-message.component';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, AfterContentChecked, AfterContentInit {

  constructor() { }

  @ContentChild(ErrorMessageComponent) errorMessage: ErrorMessageComponent;

  ngOnInit() {}

  ngAfterContentChecked() {
    console.log('------ngAfterContentChecked-----');
    console.log(this.errorMessage.message);
  }

  ngAfterContentInit() {
    console.log('------ngAfterContentInit-----');
    console.log(this.errorMessage.message);
    this.errorMessage.message = 'List is empty';
  }

}
