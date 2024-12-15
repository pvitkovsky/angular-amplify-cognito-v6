import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {Amplify} from 'aws-amplify';
import {ResourcesConfig} from '@aws-amplify/core';

const resource: ResourcesConfig = {
  Auth: {
    Cognito: {
      identityPoolId: "",
    }
  }
}
Amplify.configure(resource);

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
