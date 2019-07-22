import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RightMenuComponent } from './right-menu/right-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    LeftMenuComponent,
    RightMenuComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
