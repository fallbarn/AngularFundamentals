import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './Events-app.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent, EventsListComponent]
})
// sle note: AppModule can't be renamed.
export class AppModule { }
