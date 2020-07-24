import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from "../shared/event-services";

//
// sle note: This is a service. Implements the canActive interface. It is injected into both the existing EventService & Router (service)
//            it is added to the route definition to test if the Id is a valid number.
//
@Injectable() // means it can be instantiated and passed into any constructors that define it.
export class EventRouteActivator implements CanActivate {
  constructor(private eventService:EventService, private router:Router) {

  }

    canActivate(route: ActivatedRouteSnapshot) {
      const eventExists = !!this.eventService.getEvent(+route.params['id'])

      if (!eventExists)
        this.router.navigate(['/404'])

      return eventExists;
  }

}
