// sle note : gives a solid type to appRoutes so providing type checking.
import { Routes } from '@angular/router'
import { EventDetailsComponent } from './events/event-details/event-details.components';
import { EventsListComponent } from './events/events-list.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route.activator.service';
export const appRoutes: Routes = [

  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator] },
  { path: '404', component: Error404Component },
  // /events/1 or /events/foo
  // default route 
  { path: '', redirectTo: '/events', pathMatch: 'full' }
]
