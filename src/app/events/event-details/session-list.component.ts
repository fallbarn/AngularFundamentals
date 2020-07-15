import { Component, Input, OnChanges } from '@angular/core'
import {ISession,DurationPipe} from '../shared/index'

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSessions: ISession[] = [];

  ngOnChanges(): void {

    if (this.sessions) {

      this.filterSessions(this.filterBy);

      this.sortSessions(this.sortBy);

    }

    }
  sortSessions(sortBy: string) {
    if (this.sortBy === 'name') {
      this.visibleSessions.sort(sortByName); // see function below.
    } else {
      this.visibleSessions.sort((s1, s2) => s2.voters.length - s1.voters.length);
    }
  }

    filterSessions(filterBy: string) {
      if (filterBy === 'all') {
        this.visibleSessions = this.sessions.slice(0);
      } else {
        this.visibleSessions = this.sessions.filter(x => x.level.toLowerCase() === filterBy)

      }
    }
 
}

function sortByName(s1: ISession, s2: ISession) : any
{
  if (s1.name > s2.name) return 1
  else if (s1.name < s2.name) return -1
  else return 0;

}

