import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TitlecasePipe } from './titlecase.pipe';
import { ListfilterPipe } from './listfilter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TitlecasePipe, ListfilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
