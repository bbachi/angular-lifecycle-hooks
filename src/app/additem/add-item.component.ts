import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  itemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  itemList: string[] = ['sample project', 'todo list'];
  @Output() itemOut = new EventEmitter();

  onSubmit() {
    console.warn(this.itemForm.value);
    this.itemOut.emit(this.itemForm.value);
    this.itemForm.reset();
  }

  ngOnInit() {
    console.log('--app-add-item--ngOnInit()----');
  }

}
