import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    console.log('I am from HeaderComponent constructor()!!');
  }

  @Output() toggleFooterEvt = new EventEmitter();
  showFooter = true;

  ngOnInit() {
  }

  toggleFooter() {
    this.showFooter = !this.showFooter;
    this.toggleFooterEvt.emit(this.showFooter);
  }

}
