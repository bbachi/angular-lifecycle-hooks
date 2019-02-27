import { Component, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  itemList: string[] = ['sample project', 'todo list'];
  @Output() itemListOut = new EventEmitter();

  addItem(item: string) {
      this.itemList.push(item);
      this.itemListOut.emit(this.itemList);
  }

  ngOnInit() {
    console.log('--app-add-item--ngOnInit()----');
    this.itemListOut.emit(this.itemList);
  }

}
