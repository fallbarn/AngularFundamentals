import { Component, Input } from '@angular/core';


@Component({

    // sle note: class and inline style methods
                //<div [ngClass] = "getStartTimeClass()" [ngSwitch]="event?.time">
                //  Time: {{event?.time}}
                //  <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                //  <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                //  <span *ngSwitchDefault>(Normal Start)</span>
                //</div>
  selector: 'event-thumbnail',
  template: `
              <div class="well hoverwell thumbnail">
                <h2> {{event?.name}} </h2>
                <div>Date: {{event?.date}} </div>

              
                <div [ngStyle] = "getStartTimeStyle()" [ngSwitch]="event?.time">
                  Time: {{event?.time}}
                  <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                  <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                  <span *ngSwitchDefault>(Normal Start)</span>
                </div>

                <div>Price: \${{event?.price}}</div>
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
  @Input() event: any;

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
