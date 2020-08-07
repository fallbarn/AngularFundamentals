import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
import { JQ_TOKEN } from './jquery-service'

// sle note: a directive is called from an attribute (not an element) so is in square brackets i.e. [modal-trigger.]
@Directive({
  selector: '[modal-trigger]'
})
   
export class ModalTriggerDirective implements OnInit {

  private el: HTMLElement;
  @Input('modal-trigger') modalId: string; // note uses the alias way of doing things.

  // sle note: 'ref' is the html element the derective is bound to
  //
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
   
  }

  ngOnInit() {

    // sle note: listen for the click event, then use JQuery to open the 
    //this.el.addEventListener('click', e => {
    //  this.$('#simple-modal').modal({})

      this.el.addEventListener('click', e => {
        this.$(`#${this.modalId}`).modal({})  //  '${foo}' ES6 interpolation string
    })
  }


}
