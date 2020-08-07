import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component';

import {
  EventDetailsComponent,
  EventsListComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent
} from './events/index'


export const appRoutes: Routes = [

  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator] },
  { path: '404', component: Error404Component },
  // /events/1 or /events/foo
  // default route 
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  // sle note: 'User' is a demonstration of now you can spin-off further app-modules (in this case user-module) with there own routing logic 
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'events/session/new', component: CreateSessionComponent }
]
