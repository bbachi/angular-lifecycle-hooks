import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() message;
  @Input() numberOfAttempts;
  time: any;

  constructor() {
    console.log('I am from ErrorMessageComponent constructor()!!');
  }

  ngOnInit() {
  }

}
