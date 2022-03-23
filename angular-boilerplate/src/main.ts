import { enableProdMode } from '@angular/core';

//bootstrapping a aplicaçao. podemos dar bootstrap no server, no client ou pre-compilar. aqui fazemos no browser
//dynamic, tem os client side code para processar os templates html, as bindings e a dependency injection
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//neste caso temos de dizer que module dar bootstrap, ou seja appmodule para ser tudo
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
