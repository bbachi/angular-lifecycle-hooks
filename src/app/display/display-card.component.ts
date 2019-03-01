import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AppService } from '../app.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  @ViewChild('editModal') editModal: ModalDirective;
  constructor(private appService: AppService) { }

  @Input() item: any;
  @Input() odd: boolean;
  @Input() even: boolean;

  @Output() deleteOut = new EventEmitter();

  delectedItem(item: any): void {
    this.deleteOut.emit(item);
  }

  showEditModal() {
    this.editModal.show();
  }

  closeModal() {
    this.editModal.hide();
  }

  ngOnInit() {}

}
