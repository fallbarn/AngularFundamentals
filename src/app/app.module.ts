import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav//navbar.component';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { RouterModule } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { EventsAppComponent } from './Events-app.component';
import { AuthService } from './user/auth.service';


import {
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventsListComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'

declare let toastr: Toastr;

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  // SLE NOTE: setup for dependency injection, so can be referenced in constructor.
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
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
