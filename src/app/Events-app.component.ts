import { Component } from '@angular/core';

@Component({
  // sle note: points to the 'Events-app' tag in index.html (master page?) where the first html will be inserted.
  selector: 'Events-app',
  template: `
              <nav-bar></Nav-bar>
              <Events-list></Events-list>
            `
})
export class EventsAppComponent {
  title = 'app';
}
