import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  items = new BehaviorSubject({id: 1, name: 'todolist', description: 'This is todo list app'});
  totalItems: any[] = [{id: 1, name: 'todolist', description: 'This is todo list app'}];

  constructor() {
     this.items.next(this.totalItems[0]);
  }

  setDeletedItems(deletedItem: any) {
    console.log('deleting item::::' + deletedItem);
    this.totalItems = this.totalItems.filter(item => item.id !== deletedItem.id);
  }

  addItems(item: any) {
    const totalItemsLength = this.totalItems.length;
    item.id = totalItemsLength + 1;
    this.totalItems.push(item);
    this.items.next(item);
  }

  get ttlItems(): any[] {
     return this.totalItems;
  }

}
