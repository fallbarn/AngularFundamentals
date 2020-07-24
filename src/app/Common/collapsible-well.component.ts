import {Input, Component } from '@angular/core';

/* sle note: the template below is
 * filled with content embedded in 'collaspible-well in
 * the parent session-list.component module.
 */
@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">

      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>

      <ng-content *ngIf="visible" select="[well-body]"></ng-content>

    </div>
   `
})

export class CollapsibleWellComponent {
  @Input() title;
  visible: boolean = false;

  toggleContent() {
    this.visible = !this.visible;
  }

}
