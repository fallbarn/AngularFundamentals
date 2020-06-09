import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// sle note: the first AppModule. By convention the framework looks for AppModule in App.Module.ts in ~\src\app
// AppModule doesn't work if renamed 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
