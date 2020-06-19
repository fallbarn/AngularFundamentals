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


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  // SLE NOTE: setup for dependency injection. can be referenced in a constructor.
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
// sle note: AppModule can't be renamed.
export class AppModule { }
