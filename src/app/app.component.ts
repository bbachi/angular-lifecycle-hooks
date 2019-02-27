import { Component , OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'angular-lifecycle-hooks';

  itemList: string[] = [];
  showDesc = false;

  addItemList(itemList: string[]) {
    this.itemList = itemList;
  }

  enableDescription(event) {
    this.showDesc = event;
  }

  ngOnInit() {
    console.log('--app-root--ngOnInit()----');
  }


}
