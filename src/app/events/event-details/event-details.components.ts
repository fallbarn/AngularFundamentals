import { Component } from '@angular/core'
import { EventService } from '../shared/event-services'
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, ISession } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {padding-left:20px; padding-right: 20px; }
      .event-image {height: 100px;}
      a {cursor: pointer;}
      .btn {margin-right:5px;}
    `]
})
 
export class EventDetailsComponent {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'name';

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // sle note: 'id' matches events:id in routes.ts

    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id'])
    });
    this.addMode = false;

    //this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelNewSession() {
    this.addMode = false;
  }
}
