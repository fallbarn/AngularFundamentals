import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event-services';
import {ToastrService} from '../common/toastr.service';


// The class decorator. Defines how the class integrates with html and child component.
@Component({
  // selector: 'Events-list', replace by router. Previously linked ot Events-app.component

  // This is the HTLM associated with the component.
  template: `
                <div>
                  <h1>Upcoming Angular Events </h1>
                  <hr />
                  <div class="row">
                    <div class="col-md-5" *ngFor ="let event of events">
                      <event-thumbnail (click)="handleThumbnailClick(event.name)"  [event] = "event"> </event-thumbnail>
                    </div>
                  </div>
                </div>
              `
})

// SLE note: the attributes and methods of EventsList class
export class EventsListComponent implements OnInit { // OnInit is an interface.
  events: any[];
  constructor(private eventService: EventService, private toastr: ToastrService) {
    // note: not good practice to call in constructor
    //  should be done in 'livecycle event' ngOnInit, see below...
    //this.events = this.eventService.getEvents();
  }

  // Implements the OnInit interface.
  ngOnInit() {
    // SLE note: suspect this is analogous  to OnLoad() event in asp.net.
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
