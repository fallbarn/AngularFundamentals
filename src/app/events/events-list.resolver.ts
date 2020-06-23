import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event-services'
import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve < any > {
  constructor(private eventService: EventService) {
  }

  // sle note: Map gives access to the events returned on the stream.
    resolve() {
      return this.eventService.getEvents().pipe(map(events => events));
    }
  
}
