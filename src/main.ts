import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { EventsAppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// sle note: the first AppModule. By convention the framework looks for AppModule in App.Module.ts in ~\src\app
platformBrowserDynamic().bootstrapModule(EventsAppModule)
  .catch(err => console.error(err));
