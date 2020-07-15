import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event-services';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared';


// The class decorator. Defines how the class integrates with html and child component.
@Component({
  // selector: 'Events-list', replace by router. Previously linked to Events-app.component

  // This is the HTLM associated with the component.
  template: `
        <div (click)="handleThumbnailClick(events[0])">
          <h1>Upcoming Angular Events </h1>
          <hr />
          <div class="row" >
            <div class="col-md-5" *ngFor ="let event of events">
              <event-thumbnail [event]="event" > </event-thumbnail>
            </div>
          </div>
        </div>
      `
})

// SLE note: the attributes and methods of EventsList class
export class EventsListComponent implements OnInit { // OnInit is an interface.
  events: IEvent;
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
    // note: not good practice to call in constructor
    //  should be done in 'livecycle event' ngOnInit, see below...
    //this.events = this.eventService.getEvents();
  }

  // Implements the OnInit interface.
  ngOnInit() {
    // SLE note: suspect this is analogous  to OnLoad() event in asp.net.
    // 1st this.events = this.eventService.getEvents();
    // 2nd this.events = this.eventService.getEvents().subscribe((events) => {this.events = events})
    // 3rd. Gets the events from the resolver that is wired up in routes.ts.
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    console.log("Toastr");
    this.toastr.success(eventName);
  }
}
