import { Component, Input } from '@angular/core';
import { IEvent } from './shared';


@Component({

  selector: 'event-thumbnail',
  // sle note: the [routerLink] sets /event/[event.id] as the url. e.g: -
  /*
   *  <a href="#test1" id="back">Test</a>
      <div id="test1" onclick="window.location.hash='back'; ">
   */
  template: `
              <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
                <h2> {{event?.name | uppercase}} </h2>
                <div>Date: {{event?.date | date:'shortDate'}} </div>
              
                <div [ngStyle] = "getStartTimeStyle()" [ngSwitch]="event?.time">
                  Time: {{event?.time}}
                  <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                  <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                  <span *ngSwitchDefault>(Normal Start)</span>
                </div>

                <div>Price: {{event?.price | currency:'GBP'}}</div>
                <div *ngIf = "event?.location">
                  <span>Location: {{event?.location?.address}}</span>
                  <span>&nbsp;</span>
                  <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
                </div>
                <div *ngIf = "event?.onlineUrl">onlineUrl: {{event?.onlineUrl}}</div>
              </div>
            `,
  styles: [`
    .green {color: #003300 ! important;}
    .bold  {font-weight: bold;}
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})

export class EventsThumbnailComponent {
  // sle note: this value can be inserted into the template using {{event.???}} (interpolation)
  @Input() event: IEvent;

  getStartTimeClass() {
    const isEarlyStart = this.event && (this.event.time === '8:00 am')
    return { green: isEarlyStart, bold: isEarlyStart }
  }

  getStartTimeStyle() : any {
    if (this.event && (this.event.time === '8:00 am'))
    {
      return {color: '#003300', 'font-weight': 'bold'}
    }
    return {}
  }
}
