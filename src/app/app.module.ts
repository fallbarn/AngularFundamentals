import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav//navbar.component';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';
import { EventsAppComponent } from './Events-app.component';
import { AuthService} from './user/auth.service'

import {
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventsListComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
} from './events/index'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  // SLE NOTE: setup for dependency injection, so can be referenced in constructor.
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolver


  ],
  bootstrap: [EventsAppComponent]
})
// sle note: AppModule can't be renamed.
export class AppModule { }

// sle note: it would appear, angular can look for and inject into local function calls classes from the declarations section.
export function checkDirtyState(eventComponent: CreateEventComponent): boolean {

  if (eventComponent.isDirty) {
   return window.confirm("You have not saved this event, do you really want to cancel?");   
  }

  return true
}
