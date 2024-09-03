import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KofightersModule } from './kofighters/kofighters.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KofightersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
