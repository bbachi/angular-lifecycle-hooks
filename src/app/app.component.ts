import { Component , OnInit, OnChanges } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'angular-lifecycle-hooks';

  constructor(private appService: AppService) {}

  itemList: string[] = [];
  showDesc = false;

  addItemList(item: any) {
    this.appService.addItems(item);
  }

  deleteItem(item: any) {
    console.log(item);
    this.itemList = this.itemList.filter((itm: any) => itm.id !== item.id);
  }

  enableDescription(event) {
    this.showDesc = event;
  }

  ngOnInit() {

    this.appService.items.subscribe((data: any) => {
      this.itemList.push(data);
      console.log(this.itemList.length);
    });
  }

}
