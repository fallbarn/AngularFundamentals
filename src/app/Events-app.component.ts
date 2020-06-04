import { Component } from '@angular/core';

@Component({
  // sle note: points to the tag index.html (master page) where the first html will be inserted.
  selector: 'Events-app',
  template: '<h2>Hello World</h2>'
})
export class EventsAppComponent {
  title = 'app';
}
