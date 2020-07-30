import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core'
import { JQ_TOKEN } from './jquery-service'

@Component({
  selector: 'simple-modal',
  template: `
    <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
            <h4 class="modal-title">{{title}} </h4>
          </div>
          <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
          </div>
      </div>
    </div>
    `,
  styles: [`
      .modal-body {height: 250px; overflow-y: scroll;}
    `]
})

export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string; // sle note: this is used to bind the id of the modal box in the template above.
  @Input() closeOption: string; 
  @ViewChild('modalcontainer') containerEl: ElementRef; // sle note: looks in html for the adhoc ref #modalcontainer (saves the effort of drilling down to find the actual elementId)

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  closeModal() {
   // console.log("closeModal");

    if (this.closeOption.toLowerCase() === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }

}
