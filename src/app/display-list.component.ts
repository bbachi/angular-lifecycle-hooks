import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit, OnChanges, DoCheck {

  constructor() { }

  @Input() itemList: string[];
  @Output() showDescription = new EventEmitter<boolean>();
  items: string[];

  ngOnChanges(changes: SimpleChanges) {
    console.log('--app-display-list--ngOnChanges()----');
    console.log('previous values', changes.itemList.previousValue);
    console.log('current values', changes.itemList.currentValue);
    const itemList = changes.itemList.currentValue;
    this.items = itemList.map((item, index) => `Item: ${index + 1}  ${item}`);
  }

  ngDoCheck() {
     if (this.items !== this.itemList) {
      this.items = this.itemList.map((item, index) => `Item: ${index + 1}  ${item}`);
     }
     console.log('ngDoCheck', this.itemList);
  }

  addDescription() {
     this.showDescription.emit(true);
  }

  ngOnInit() {
    console.log('--app-display-list--ngOnInit()----');
    console.log(this.itemList);
  }

}
