import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './Events-app.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { EventService } from './events/shared/event-services';
import { ToastrService } from './common/toastr.service';
import { NavBarComponent } from './nav//navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.components';
import { EventsListComponent } from './events/events-list.component';
import { appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route.activator.service'
import { EventListResolver}from './events/events-list.resolver'


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
  // SLE NOTE: setup for dependency injection. can be referenced in a constructor.
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
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

  if (eventComponent.isDirty)
    return window.confirm("You have not saved this event, do you really want to cancel?")

  return true
}
