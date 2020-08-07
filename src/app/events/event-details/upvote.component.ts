import { Component, Output, Input, EventEmitter } from '@angular/core'


@Component({
  selector: 'upvote',
  styleUrls: ['./upvote.component.css'],
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
         <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse votingCount">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
   `
})

export class UpvoteComponent {
  @Input() count: number;
  // sle note: A special variation input parameter! The input value is passed as a parameter to a function called voted.
  @Input() set voted(hasSomeVotes) { this.iconColor =  (hasSomeVotes) ? 'red' : 'white';  }; // if val is true then red else white
  @Output() vote = new EventEmitter();

  iconColor: string;

  onClick() {
    this.vote.emit({});
  }
}
