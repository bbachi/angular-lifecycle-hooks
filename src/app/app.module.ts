import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddItemComponent } from './additem/add-item.component';
import { DisplayListComponent } from './display/display-list.component';
import { DisplayCardComponent } from './display/display-card.component';
import { ErrorComponent } from './error/error.component';
import { ErrorMessageComponent } from './error/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddItemComponent,
    DisplayListComponent,
    DisplayCardComponent,
    ErrorComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [ BsModalRef ],
  bootstrap: [AppComponent]
})
export class AppModule { }
