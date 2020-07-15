import { Component, Input, OnChanges } from '@angular/core'
import {ISession,DurationPipe} from '../shared/index'

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;

  visibleSessions: ISession[] = [];

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
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
