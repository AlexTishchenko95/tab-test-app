import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { TabsMainComponent } from './tabs-main/tabs-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabsMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
