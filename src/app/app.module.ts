import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TodoService} from './todo.service';


@NgModule({
  imports:      [BrowserModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent],
  providers: [TodoService]
})
export class AppModule { }