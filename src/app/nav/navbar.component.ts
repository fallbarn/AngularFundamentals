import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'
import { ISession } from '../events/shared/event.model'
import { EventService } from '../events/shared/event-services'

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styles: [
    `
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200x) {#searchForm {display:none}}
    li > a.active {color: #f97924;}
    `]
})

export class NavBarComponent {

  private searchTerm: string = "";
  private foundSessions : ISession [];

  constructor(private auth: AuthService, private EVENTS: EventService) { }

  searchSessions(searchTerm: string) {

    // sle note: the subject means the javascript function returns immediately. The data arrives in foundSessions whenever. The logic must cope with this scenario.
    this.EVENTS.searchSessions(searchTerm).subscribe(sessions => { this.foundSessions = sessions; });

    //setTimeout(() => { console.log(this.foundSessions); }, 200);
    

  }
}
