// sle note : gives a solid type to appRoutes so providing type checking.
import { Routes } from '@angular/router'
import { EventDetailsComponent } from './events/event-details/event-details.components';
import { EventsListComponent } from './events/events-list.component';
export const appRoutes:Routes = [

  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },

  // /events/1 or /events/foo

  // default route
   
  { path: '', redirectTo: '/events', pathMatch: 'full' }
]
